<template>
    <default-layout>
        <div>
            <h1>
                <router-link to="/posts">
                    <i class="fa fa-long-arrow-left" style="margin-right: 10px;"></i>
                </router-link>
                {{ post.title }}
            </h1>

            <div style="margin-top: 65px;" v-html="post.content"></div>
        </div>
    </default-layout>
</template>

<script>
    import DefaultLayout from "../components/DefaultLayout";

    export default {
      components: {DefaultLayout},

      data() {
        return {
          post: this.$route.meta.post
        }
      },

      beforeMount() {
        this.addStyle('https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/default.min.css');
        this.addStyle('https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/atom-one-dark.min.css');
      }
    }
</script>

<style>
    pre {
        display: block;
        overflow-x: auto;
        padding: 0.5em;
        color: #abb2bf;
        background: #2c3e50 !important;
    }
</style>