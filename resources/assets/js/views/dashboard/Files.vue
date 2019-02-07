<template>
    <dashboard-layout>
        <div>
            <h1 class="flex justify-between">Files
                <file-upload-button v-on:fileUploaded="fileUploaded"></file-upload-button>
            </h1>

            <hr />

            <div v-if="gotFiles">
                <input type="text" class="form-control" style="margin-bottom: 1em;" placeholder="Search files..." @keyup="searchFiles($event)" />
                <table v-if="files.length && !searchResults.length" class="table table-bordered">
                    <thead>
                    <tr>
                        <td>Name</td>
                        <td>Size</td>
                        <td>Last Modified</td>
                        <td>Actions</td>
                    </tr>
                    </thead>
                    <tbody is="transition-group" name="list">
                    <tr v-for="file in files" :key="file.meta.basename">
                        <td><a :href="file.uri" target="_blank">{{ file.name.replace('files/' + store.user.user.id + '/', '') }}</a></td>
                        <td>{{ bytesToSize(file.meta.size) }}</td>
                        <td>{{ timeSince(file.meta.timestamp * 1000) }}</td>
                        <td align="center" style="position: relative;">
                            <div class="loading-overlay" v-if="file.updating">
                                <i class="fas fa-circle-notch fa-spin"></i>
                            </div>
                            <div class="dropdown show">
                                <i class="far fa-ellipsis-h fileOptions dropdown-toggle"
                                   role="button"
                                   data-toggle="dropdown"
                                   aria-haspopup="true"
                                   aria-expanded="false"></i>

                                <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                                    <li><a href="#">Share</a></li>
                                    <li><a href="#">Share Privately</a></li>
                                    <li><a href="#" @click.prevent="toggleVisibility(file)">Make {{ visibility(file) }}</a></li>
                                    <li role="separator" class="divider"></li>
                                    <li><a href="#">Delete</a></li>
                                </ul>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>

                <div v-else>
                    <div v-if="searchResults.length">
                        <table v-if="! noSearchResults" class="table table-bordered">
                            <thead>
                            <tr>
                                <td>Name</td>
                                <td>Size</td>
                                <td>Last Modified</td>
                                <td>Actions</td>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="file in searchResults">
                                <td><a :href="file.uri" target="_blank">{{ file.name.replace('files/' + store.user.user.id + '/', '') }}</a></td>
                                <td>{{ bytesToSize(file.meta.size) }}</td>
                                <td>{{ timeSince(file.meta.timestamp * 1000) }}</td>
                                <td align="center">
                                    <div class="dropdown show">
                                        <i class="far fa-ellipsis-h fileOptions dropdown-toggle"
                                           role="button"
                                           data-toggle="dropdown"
                                           aria-haspopup="true"
                                           aria-expanded="false"></i>

                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                                            <li><a href="#">Share</a></li>
                                            <li><a href="#" @click.prevent="toggleVisibility(file)">Make {{ visibility(file) }}</a></li>
                                            <li role="separator" class="divider"></li>
                                            <li><a href="#">Delete</a></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>

                        <table v-else class="table table-bordered">
                            <thead>
                            <tr>
                                <td>Name</td>
                                <td>Size</td>
                                <td>Last Modified</td>
                                <td>Actions</td>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td colspan="4">
                                    <p style="margin: .5em 0;" class="flex justify-center">No Search Results</p>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    <div v-else>
                        <p>No files.</p>
                    </div>
                </div>
            </div>

            <div class="row loading-row" v-else>
                <h1>Loading Files</h1>
                <h1><i class="fas fa-circle-notch fa-spin"></i></h1>
            </div>
        </div>
    </dashboard-layout>
</template>

<script>
    import {Store} from "../../stores/SharedStore";
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
                store: Store,
                gotFiles: false,
                files: [],
                searchResults: [],
                noSearchResults: false,
                sort: []
            }
        },

        mounted() {
            _http.get('/files').then((r) => {
                this.gotFiles = true;
                this.files = this.sortByName(r.data);
            });
        },

        methods: {
            toggleVisibility(file) {
                file.updating = true;

                _http.post('/files/visibility', {file}).then((r) => {
                   file.visibility = r.data.visibility;
                   file.uri = r.data.uri;
                   file.updating = false;
                });
            },

            fileUploaded(file) {
                this.files.push(file);

                this.files = this.sortByName(this.files);
            },

            determineIcon(file) {
                if (['jpg', 'jpeg', 'png'].indexOf(file.type) !== -1) {
                    return file.uri;
                } else {
                    return 'https://cdn2.iconfinder.com/data/icons/text-file-essential/48/v-04-512.png';
                }
            },

            sortByName(files) {
                return files.sort((a, b) => {
                    let aName = a.name.toUpperCase().replace('files/' + this.store.user.user.id + '/', '');
                    let bName = b.name.toUpperCase().replace('files/' + this.store.user.user.id + '/', '');

                    return aName.localeCompare(bName);
                });
            },

            bytesToSize(bytes) {
                let sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];

                if (bytes == 0) return '0 Byte';

                let i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));

                return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
            },

            searchFiles(evt) {
                if (evt.target.value.length) {
                    let searchResults = this.files.filter((file) => {
                        return file.name.toLowerCase().search(evt.target.value.toLowerCase()) !== -1;
                    });


                    if (searchResults.length) {
                        this.searchResults = searchResults;

                        this.noSearchResults = false;
                    } else {
                        this.searchResults = [1];
                        this.noSearchResults = true;
                    }
                } else {
                    this.searchResults = [];
                }
            },

            timeSince(timestamp) {
                let date = new Date(timestamp);

                let seconds = Math.floor((new Date() - date) / 1000);

                let interval = Math.floor(seconds / 31536000);

                if (interval > 1) {
                    return interval + " years ago";
                }
                interval = Math.floor(seconds / 2592000);
                if (interval > 1) {
                    return interval + " months ago";
                }
                interval = Math.floor(seconds / 86400);
                if (interval > 1) {
                    return interval + " days ago";
                }
                interval = Math.floor(seconds / 3600);
                if (interval > 1) {
                    return interval + " hours ago";
                }
                interval = Math.floor(seconds / 60);
                if (interval > 1) {
                    return interval + " minutes ago";
                }
                return "Just now";
            },

            visibility(file) {
                return file.visibility === "public" ? "Private" : "Public";
            }
        },

        computed: {

        }
    }
</script>

<style scoped>
    .list-enter-active {
        transition: all 5s;
    }

    .list-enter {
        background: yellow;
    }

    .loading-row {
        text-align: center;
        font-size: 5em;
        color: #2c3e50;
    }

    .fileOptions {
        padding: 4px 20px;
        border-radius: 15px;
        transition: box-shadow .5s, background .5s, color .5s;
    }

    .fileOptions:hover {
        background: #00bd9c;
        color: white;
        -webkit-box-shadow: 0px 0px 5px 1px #949494;
        box-shadow: 0px 0px 5px 1px #ccc;
    }

    td .loading-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #a09c9ce3;
        z-index: 2;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        font-size: 1.6em;
        color: white;
    }
</style>