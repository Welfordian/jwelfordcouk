<template>
    <div>
        <button class="btn btn-success" @click="$refs.fileInput.click()">Upload New File</button>

        <input type="file" class="hidden" v-on:change="startUpload()" ref="fileInput" />
    </div>
</template>

<script>
    import {_http} from "../Http";

    export default {
      name: 'file-upload-button',

      props: ['type'],

      data() {
        return {
          uploadType: 0
        }
      },

      mounted() {
        this.uploadType = this.type || 0;
      },

      methods: {
        startUpload() {
            var formData = new FormData();

            formData.append("file", this.$refs.fileInput.files[0]);

            _http.post('files', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then((r) => {
                this.$emit('fileUploaded', r.data);
            });
        }
      }
    }
</script>