<template>
    <form v-on:submit.prevent="handlePostCreation">
        <h1>Create a Post</h1>
        <input type="text" v-model="post.title" placeholder="Post title..." class="form-control" style="margin-bottom: 10px;" />
        <textarea v-model="post.content" placeholder="Post content..." class="form-control" style="margin-bottom: 10px;"></textarea>
        <button class="btn btn-success">Create Post</button>
    </form>
</template>

<script>
    import { _http } from '../Http';

    export default {
        data() {
            return {
                post: {
                    title: "",
                    content: ""
                }
            }
        },
        methods: {
            handlePostCreation() {
                _http.post('/posts', this.post);
            }
        }
    }
</script>