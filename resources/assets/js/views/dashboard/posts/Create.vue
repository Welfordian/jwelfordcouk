<template>
    <dashboard-layout>
        <div>
            <div class="row">
                <h1>Create a post</h1>
                <hr/>

                <div>
                    <label>Title</label>
                    <limited-input max="50" name="title" v-model="post.title" v-on:hasBadChars="updateTitleStatus"></limited-input>

                    <label>Intro Text</label>
                    <textarea ref="intro_text" class="form-control" style="margin-bottom: 10px;" v-model="post.intro"></textarea>

                    <label>Intro Image</label>
                    <file-upload-button v-model="post.image"></file-upload-button>

                    <tui-editor :options="{'height': '600px', 'initialValue': `# An Adventure Awaits\nMy next blog post...`}"></tui-editor>

                    <button v-bind:disabled="!creatable" class="btn btn-success pull-right" style="margin-top: 10px;" @click="createPost()">Create Post</button>
                </div>
            </div>
        </div>
    </dashboard-layout>
</template>

<script>
    import { _http } from "../../../Http";
    import DashboardLayout from "../../../components/DashboardLayout";
    import FileUploadButton from "../../../components/FileUploadButton";
    import LimitedInput from "../../../components/LimitedInput";

    export default {
      components: {
        LimitedInput,
        FileUploadButton,
        DashboardLayout},

      data() {
        return {
          titleHasBadChars: false,
          post: {
            title: "",
            intro: "",
            content: "",
            image: "",
          }
        }
      },

      beforeMount() {
        this.addStyle('https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/default.min.css');
        this.addStyle('https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/atom-one-dark.min.css');
      },

      mounted() {
        this.watchTuiEditor();
      },

      methods: {
        updateTitleStatus(hasBadChars) {
          this.titleHasBadChars = hasBadChars;
        },

        createPost() {
            _http.post('/posts', this.post).then((response) => {
              this.$router.push('/posts/' + response.data.slug);
            });
        },

        watchTuiEditor() {
          var targetNode = $('.tui-editor-contents').get(0);

          var config = { attributes: true, childList: true };

          var callback = (mutationsList) => {
            for(var mutation of mutationsList) {
              if (mutation.type == 'childList') {
                this.post.content = $('.tui-editor-contents').html();
                this.$forceUpdate();
              }
            }
          };

          var observer = new MutationObserver(callback);

          observer.observe(targetNode, config);
        }
      },

      computed: {
        creatable() {
          return this.post.title.length !== 0 &&
            this.post.intro.length !== 0 &&
            this.post.image.length !== 0 &&
            this.post.content.length !== 0 &&
            !this.titleHasBadChars;
        }
      }
    }
</script>

<style scoped>
    .tui-editor-contents pre {
        display: block;
        overflow-x: auto;
        padding: 0.5em;
        color: #abb2bf;
        background: #282c34 !important;
    }
</style>