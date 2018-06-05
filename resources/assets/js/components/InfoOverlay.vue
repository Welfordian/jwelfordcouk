<template>
    <div class="info-overlay">
        <div class="info-overlay--container">
            <p class="info-overlay--button" @click="toggleInfoOverlay">
                <i class="fas fa-question"></i>
            </p>

            <div class="info-overlay--content" ref="content">
                <div class="row">
                    <div class="col-md-12">
                        <h3 class="info-overlay--title">What's this about, then?</h3>

                        <p>
                            This site serves as both my personal site & my playground for new technologies.
                        </p>

                        <p>
                            As you can probably tell, site design is not one of my strong points. But I'm always trying to keep up-to-date with new web technologies.
                        </p>

                        <p>Here's a few technologies in use/powering this site:-</p>

                        <ul>
                            <li>Ubuntu 16.04 (Xenial)</li>
                            <li>Nginx 1.14</li>
                            <li>Google PageSpeed NGX</li>
                            <li>PHP 7.1.16</li>
                            <li>WebP Images*</li>
                            <li>Laravel 5.6.17</li>
                            <li>ServiceWorker*^</li>
                            <li>VueJS</li>
                        </ul>

                        <p>
                            * - Based on browser compatibility
                        </p>
                        <p>
                            ^ - Used for offline site availability & allows the contact form to work offline.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'info-overlay',

        data() {
          return {
            open: false
          }
        },

        methods: {
          toggleInfoOverlay() {
            this.open = !this.open;

            if (this.open) {
              this.$refs.content.classList.add('info-overlay--open');
            } else {
              this.$refs.content.classList.remove('info-overlay--open');
            }
          }
        }
    }
</script>

<style scoped>
    .info-overlay {
        width: 50px;
        height: 50px;
        background-color: #2c3e50;
        position: fixed;
        bottom: 15px;
        right: 16px;
        border-radius: 100%;
        -webkit-box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.75);
        box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.75);
    }

    .info-overlay--button {
        color: white;
        cursor: pointer;
        text-align: center;
        position: relative;
        top: 0px;
        font-size: 1.5em;
        padding: 8px 0px 7px 0px;
        z-index: 10;
        background: #2c3e50;
        border-radius: 100%;
    }

    .info-overlay--container {
        position: relative;
    }

    .info-overlay--content {
        -webkit-transition: width .2s, height .2s;
        transition: width .2s, height .2s;
        width: 0;
        height: 0;
        position: absolute;
        bottom: 25px;
        right: 27px;
        background: #fff;
        border-radius: 4px;
        overflow: hidden;
        -webkit-box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.75);
        box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.75);
        background: url('/images/tic-tac-toe.png');
    }

    .info-overlay--content .row {
        margin-left: 0;
        margin-right: 0;
        background: #ffffff63;
    }

    .info-overlay--open {
        width: 20em;
        height: 25em;
        overflow: auto;
    }
</style>