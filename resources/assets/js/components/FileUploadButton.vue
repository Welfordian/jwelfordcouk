<template>
    <div>
        <button class="btn btn-success" @click="selectAndUpload">Upload</button>

        <!--<input type="file" class="hidden" ref="fileInput" />-->
        <input type="hidden" name="_upload_type" :value="uploadType" />
    </div>
</template>

<script>
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
        selectAndUpload() {
            this.$refs.fileInput.click();
        }
      }
    }
</script>