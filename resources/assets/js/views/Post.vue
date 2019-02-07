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

            <hr />

            <div class="flex justify-between">
                <p>Created By Joshua Welford</p>
                <p>Published {{ post.diffForHumans }}</p>
                <div>
                    <i @click="thumbs_up" class="fas fa-thumbs-up" :class="{'activeThumbsUp': activeThumbsUp}" style="cursor: pointer;"></i> ({{ post.thumbs_up }})
                    <i @click="thumbs_down" class="fas fa-thumbs-down" :class="{'activeThumbsDown': activeThumbsDown}" style="margin-left: 20px; cursor: pointer;"></i> ({{ post.thumbs_down }})
                </div>
            </div>

            <div style="margin-top: 3em;">
                <h1>Comments ({{ post.comments.length }})</h1>

                <p v-if="errors.name">{{ errors.name }}</p>
                <input v-model="comment.name" name="name" class="form-control" style="margin-bottom: 1em;" type="text"
                       placeholder="Your name..."/>

                <p v-if="errors.comment">{{ errors.comment }}</p>
                <textarea v-model="comment.comment" name="comment" placeholder="Your comment..." class="form-control"></textarea>

                <button @click="createComment" class="btn btn-success" style="width: 100%; margin-top: 1em;">Post Comment</button>

                <div style="margin-top: 2em;">
                    <blockquote v-for="comment in post.comments">
                        <p>{{ comment.comment }}</p>
                        <footer><cite>{{ comment.name }}</cite></footer>
                    </blockquote>
                </div>
            </div>
        </div>
    </default-layout>
</template>

<script>
    import DefaultLayout from "../components/DefaultLayout";
    import {_http} from "../Http";

    export default {
        components: {DefaultLayout},

        data() {
            return {
                post: this.$route.meta.post,

                errors: {
                    name: false,
                    comment: false,
                },

                comment: {
                    name: "",
                    comment: ""
                },

                get activeThumbsUp() {
                    return localStorage.hasOwnProperty(`thumbs_up_post_${this.post.id}`);
                },

                get activeThumbsDown() {
                    return localStorage.hasOwnProperty(`thumbs_down_post_${this.post.id}`);
                }
            }
        },

        beforeMount() {
            this.post.comments = this.post.comments.reverse();

            this.addStyle('https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/default.min.css');
            this.addStyle('https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/atom-one-dark.min.css');
        },

        methods: {
            thumbs_up() {
                if (localStorage.getItem('thumbs_up_post_' + this.post.id) === null) {
                    if (localStorage.getItem('thumbs_down_post_' + this.post.id) !== null) {
                        localStorage.removeItem('thumbs_down_post_' + this.post.id);

                        _http.post(`/posts/${this.post.id}/thumbs_down/remove`).then(() => { this.post.thumbs_down = this.post.thumbs_down - 1; });
                    }

                    localStorage.setItem('thumbs_up_post_' + this.post.id, "true");

                    _http.post(`/posts/${this.post.id}/thumbs_up/add`).then(() => { this.post.thumbs_up = this.post.thumbs_up + 1; });
                } else {
                    localStorage.removeItem('thumbs_up_post_' + this.post.id);

                    _http.post(`/posts/${this.post.id}/thumbs_up/remove`).then(() => { this.post.thumbs_up = this.post.thumbs_up - 1; });
                }
            },

            thumbs_down() {
                if (localStorage.getItem('thumbs_down_post_' + this.post.id) === null) {
                    if (localStorage.getItem('thumbs_up_post_' + this.post.id) !== null) {
                        localStorage.removeItem('thumbs_up_post_' + this.post.id);

                        _http.post(`/posts/${this.post.id}/thumbs_up/remove`).then(() => { this.post.thumbs_up = this.post.thumbs_up - 1; });
                    }

                    localStorage.setItem('thumbs_down_post_' + this.post.id, "true");

                    _http.post(`/posts/${this.post.id}/thumbs_down/add`).then(() => { this.post.thumbs_down = this.post.thumbs_down + 1; });
                } else {
                    localStorage.removeItem('thumbs_down_post_' + this.post.id);

                    _http.post(`/posts/${this.post.id}/thumbs_down/remove`).then(() => { this.post.thumbs_down = this.post.thumbs_down - 1; });
                }
            },

            createComment() {
                if (! this.comment.name.trim().length) {
                    this.errors.name = "Name is required!";
                } else {
                    this.errors.name = false;
                }

                if (! this.comment.comment.trim().length) {
                    this.errors.comment = "Comment is required!";
                } else {
                    this.errors.comment = false;
                }

                if (! this.errors.name && ! this.errors.comment) {
                    _http.post('/posts/' + this.post.id + '/comments', this.comment).then((r) => {
                        this.post.comments.unshift(r.data);

                        this.comment = { name: "", comment: "" };
                    }).catch((e) => {
                        alert("Couldn't create comment!");
                    })
                }
            }
        }
    }
</script>

<style scoped>
    pre {
        display: block;
        overflow-x: auto;
        padding: 0.5em;
        color: #abb2bf;
        background: #2c3e50 !important;
        color: white !important;
    }

    img {
        max-width: 50%;
        display: flex;
        margin: 0 auto;
    }

    .activeThumbsUp {
        color: #18bc9c;
    }

    .activeThumbsDown {
        color: #e74c3c;
    }
</style>