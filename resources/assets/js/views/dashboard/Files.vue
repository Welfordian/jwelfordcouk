<template>
    <dashboard-layout>
        <div>
            <h1 class="flex justify-between">Files
                <file-upload-button v-on:fileUploaded="fileUploaded"></file-upload-button>
            </h1>

            <hr />

            <div v-if="gotFiles">
                <table v-if="files.length" class="table table-bordered">
                    <thead>
                    <tr>
                        <td>Name</td>
                        <td>Size</td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="file in files">
                        <td><a :href="file.uri" target="_blank">{{ file.name.replace('files/1/', '') }}</a></td>
                        <td>{{ bytesToSize(file.size) }}</td>
                    </tr>
                    </tbody>
                </table>

                <div v-else>
                    <p>No files.</p>
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
                gotFiles: false,
                files: []
            }
        },

        mounted() {
            _http.get('/files').then((r) => {
                this.gotFiles = true;
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
            },

            bytesToSize(bytes) {
                var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];

                if (bytes == 0) return '0 Byte';

                var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));

                return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
            }
        }
    }
</script>