<template>
    <dashboard-layout>
        <div>
            <h1 class="flex justify-between">Files
                <file-upload-button v-on:fileUploaded="fileUploaded"></file-upload-button>
            </h1>

            <hr />

            <div class="row" v-if="files.length">
                <div class="col-md-2" v-for="file in files">
                    <a :href="file.uri" target="_blank">
                        <img style="width: 100%;" :src="determineIcon(file)"  />
                    </a>
                </div>
            </div>

            <div v-else>
                Loading...
            </div>
        </div>
    </dashboard-layout>
</template>

<script>
    import { _http } from "../../Http";
    import DashboardLayout from "../../components/DashboardLayout";
    import FileUploadButton from "../../components/FileUploadButton";

    export default {
        components: {
            FileUploadButton,
            DashboardLayout
        },

        data: () => {
            return {
                files: []
            }
        },

        mounted() {
            _http.get('/files').then((r) => {
                this.files = r.data;
            });
        },

        methods: {
            fileUploaded(file) {
                this.files.push(file);
            },

            determineIcon(file) {
                if (['jpg', 'jpeg', 'png'].indexOf(file.type) !== -1) {
                    return file.uri;
                } else {
                    return 'https://cdn2.iconfinder.com/data/icons/text-file-essential/48/v-04-512.png';
                }
            }
        }
    }
</script>