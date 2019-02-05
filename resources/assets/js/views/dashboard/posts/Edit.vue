<template>
    <dashboard-layout>
        <div>
            <div class="row">
                <h1>Edit Post ID #{{ post.id }}</h1>
                <hr/>

                <div>
                    <label>Title</label>
                    <limited-input max="50" name="title" v-model="post.title"
                                   v-on:hasBadChars="updateTitleStatus"></limited-input>

                    <label>Intro Text</label>
                    <textarea ref="intro_text" class="form-control" style="margin-bottom: 10px;"
                              v-model="post.intro_text"></textarea>

                    <label>Intro Image</label>
                    <image-upload-button v-model="post.intro_image"></image-upload-button>

                    <tui-editor :options="{'height': '600px', 'initialValue': post.content}"></tui-editor>

                    <button class="btn btn-danger" @click="confirmDelete" style="margin-top: 10px;">
                        {{ deleteText }}
                    </button>

                    <button v-bind:disabled="!savable" class="btn btn-success pull-right" style="margin-top: 10px;"
                            @click="updatePost()">Update Post
                    </button>
                </div>
            </div>
        </div>
    </dashboard-layout>
</template>

<script>
  import DashboardLayout from "../../../components/DashboardLayout";
  import LimitedInput from "../../../components/LimitedInput";
  import ImageUploadButton from "../../../components/ImageUploadButton";
  import { _http } from "../../../Http";

  export default {
    components: {
      ImageUploadButton,
      LimitedInput,
      DashboardLayout
    },

    mounted() {
      this.watchTuiEditor();
    },

    data() {
      return {
        titleHasBadChars: false,
        post: this.$route.meta.post,
        deleteText: "Delete Post",
        deleteConfirmed: false,
        deleteTimeout: setTimeout.prototype,
      }
    },

    methods: {
      confirmDelete() {
        if (this.deleteConfirmed) {
          clearTimeout(this.deleteTimeout);

          _http.delete('/posts/' + this.post.slug).then(() => {
            this.$router.push('/dashboard/posts');
          });
        } else {
          this.deleteText = "Are you sure (click again)?"
          this.deleteConfirmed = true;

          this.deleteTimeout = setTimeout(() => {
            this.deleteText = "Delete Post";
            this.deleteConfirmed = false;
          }, 500);
        }
      },

      updatePost() {
        _http.patch('/posts/' + this.post.slug, this.post).then(response => {
          console.log(response);
        });
      },

      watchTuiEditor() {
        var targetNode = $('.tui-editor-contents').get(0);

        var config = {attributes: true, childList: true};

        var callback = (mutationsList) => {
          for (var mutation of mutationsList) {
            if (mutation.type == 'childList') {
              this.post.content = $('.tui-editor-contents').html();
              this.$forceUpdate();
            }
          }
        };

        var observer = new MutationObserver(callback);

        observer.observe(targetNode, config);
      },

      updateTitleStatus(hasBadChars) {
        this.titleHasBadChars = hasBadChars;
      },
    },

    computed: {
      savable()
      {
        return this.post.title.length !== 0 &&
          this.post.intro_text.length !== 0 &&
          this.post.intro_image.length !== 0 &&
          this.post.content.length !== 0 &&
          !this.titleHasBadChars;
      }
    }
  }
</script>