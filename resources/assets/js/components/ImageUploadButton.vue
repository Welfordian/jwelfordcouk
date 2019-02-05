<template>
    <div>
        <div class="row">
            <div class="buttonContainer col-md-6" v-if="!useURL">
                <button class="btn btn-success" ref="button" @click="$refs.input.click()">
                    <div ref="uploadProgress"></div>
                    {{ buttonText }}
                </button>
                <div v-if="!hasFile" style="display: inline-block;">
                    <span style="margin-left: 10px; margin-right: 10px; color: #2c3e509e;">OR</span>

                    <button class="btn btn-primary" @click="useURL = true">Use image URL</button>
                </div>
                <span v-if="hasFile" @click.prevent="clearFile" class="clearFile">&times;</span>
            </div>

            <div class="col-md-6" style="margin-bottom: 10px;" v-if="useURL">
                <input type="text" class="form-control" style="width: 95%; display: inline-block;" @blur="verifyURL"/>
                <span v-if="!checkingURL" class="clearFile" @click.prevent="useURL = false">&times;</span>
                <span v-if="checkingURL" class="loader">
                    <i class="fa fa-circle-o-notch fa-spin" aria-hidden="true"></i></h1>
                </span>
            </div>

            <div class="previewContainer col-md-6">
                <img v-show="hasFile || hasURL" ref="imagePreview" @mouseenter="enlargeImagePreview" @mouseleave="shrinkImagePreview" />
            </div>
        </div>

        <input type="file" ref="input" v-on:change="setButtonValue"/>
        <p v-if="error" class="text-danger">{{ this.error }}</p>
    </div>
</template>

<script>
    import { _http } from "../Http";

    export default {
      name: 'image-upload-button',

      data() {
        return {
          buttonText: 'Select an Image',
          hasFile: false,
          inputValue: "",
          error: false,
          useURL: false,
          imageUrlError: false,
          hasURL: false,
          checkingURL: false,
        }
      },

      methods: {
        verifyURL(e) {
          const imageUrl = e.target.value.trim();

          if (imageUrl.length) {
            this.checkingURL = true;

            _http.post('/posts/image/verify_url', { url: imageUrl }).then(response => {
              if (response.data.error) {
                this.error = "Please enter a valid URL";
              } else {
                this.hasURL = true;
                this.$refs.imagePreview.src = imageUrl;
                this.error = false;
              }

              this.checkingURL = false;
            });
          } else {
            this.error = 'Please enter a valid URL';
          }
        },

        enlargeImagePreview() {
          this.$refs.imagePreview.classList.add('enlarged');
        },

        shrinkImagePreview() {
          this.$refs.imagePreview.classList.remove('enlarged');
        },

        setImagePreview() {
            if (this.$refs.input.files && this.$refs.input.files[0]) {
              const reader = new FileReader();

              reader.onload = (e) => {
                this.$refs.imagePreview.src = e.target.result;
              };

              reader.readAsDataURL(this.$refs.input.files[0]);
            }
        },

        clearFile() {
          this.buttonText = "Choose File";
          this.$refs.input.value = "";
          this.hasFile = false;

          this.$emit('input', "");
        },

        validFileExtension(ext) {
          const validExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp'];

          return validExtensions.indexOf(ext.toLowerCase()) !== -1;
        },

        setButtonValue(e) {
          this.error = false;

          const fileName = e.target.value.replace("C:\\fakepath\\", "");
          const fileExtension = /(?:\.([^.]+))?$/.exec(fileName)[1];

          if (this.validFileExtension(fileExtension)) {
            this.uploadImage(fileName);

          } else {
            this.error = "Invalid file extension";
          }
        },

        uploadImage(fileName) {
          let data = new FormData();

          data.append('intro_image', this.$refs.input.files[0]);

          const config = {
            onUploadProgress: progressEvent => {
              var percentCompleted = Math.round( (progressEvent.loaded * 100) / progressEvent.total );

              this.$refs.uploadProgress.style.width = (percentCompleted + 3)  + '%';
            }
          };

          _http.post('/posts/images', data, config).then((response) => {
            this.$refs.uploadProgress.style.width = '0%';

            this.buttonText = fileName;
            this.hasFile = true;

            this.setImagePreview();

            this.$emit('input', response.data.path);
          });
        }
      },

      watch: {
        useURL() {
          this.hasURL = false;
          this.error = false;
        }
      }
    }
</script>

<style scoped>
    input[type=file] {
        display: none !important;
    }

    .buttonContainer {
        position: relative;
        margin-bottom: 10px;
    }

    .clearFile {
        margin-left: 10px;
        cursor: pointer;
        font-size: 20px;
        position: relative;
        top: 4px;
    }

    .buttonContainer button {
        position: relative;
        overflow: hidden;
    }

    .buttonContainer button div {
        position: absolute;
        top: -2px;
        left: -2px;
        height: 110%;
        width: 0%;
        z-index: 999;
        background-color: #2c3e50ad;
        border: 1px solid #2c3e50ad;
        border-radius: 3px;
    }

    img {
        position: absolute;
        right: 15px;
        top: 0;
        width: 50px;
        z-index: 999;
    }

    img.enlarged {
        max-width: 800px;
        width: auto;
    }

    .loader {
        margin-left: 5px;
        cursor: pointer;
        font-size: 20px;
        position: relative;
        top: 4px;
    }
</style>