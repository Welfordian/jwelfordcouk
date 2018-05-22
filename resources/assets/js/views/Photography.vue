<template>
    <default-layout>
        <div>
            <div class="row">
                <h1>{{ lang.get('navbar.photography') }}</h1>
                <hr/>
            </div>

            <div class="col-md-3" v-for="(item, index) in items" style="margin-bottom: 8px;">
                <div style="width: 100%; height: 20px;" v-if="index > 3"></div>
                <img class="preview-img-item"
                     :src="item.msrc" @click="$photoswipe.open(index, items)">
                <div class="buttons">
                    <i class="fa "
                </div>
            </div>
        </div>
    </default-layout>
</template>

<script>
    import DefaultLayout from "../components/DefaultLayout";
    import {i18n} from "../i18n";

    export default {
      components: {DefaultLayout},

      beforeMount() {
        this.addScript('https://cdnjs.cloudflare.com/ajax/libs/masonry/4.0.0/masonry.pkgd.min.js');
      },

      data() {
        return {
          lang: i18n,
          items: [{
            src: '/images/IMG_20180215_013614_500.jpg',
            msrc: '/images/IMG_20180215_013614_500_preview.jpg',
            title: 'York University',
            w: 3072,
            h: 3840
          }, {
            src: '/images/IMG_20180504_213955_736.jpg',
            msrc: '/images/IMG_20180504_213955_736_preview.jpg',
            title: 'Rowntree Park, York',
            w: 4032,
            h: 2268
          }, {
            src: '/images/IMG_20180518_160713_472.jpg',
            msrc: '/images/IMG_20180518_160713_472_preview.jpg',
            title: 'Leeds',
            w: 4032,
            h: 3024
          }, {
            src: '/images/IMG_20180518_152805_736.jpg',
            msrc: '/images/IMG_20180518_152805_736_preview.jpg',
            title: 'Leeds',
            w: 3024,
            h: 3024
          }, {
            src: '/images/IMG_20180505_205746_162.jpg',
            msrc: '/images/IMG_20180505_205746_162_preview.jpg',
            title: 'York',
            w: 3104,
            h: 3104
          }, {
            src: '/images/IMG_20180505_195839_201.jpg',
            msrc: '/images/IMG_20180505_195839_201_preview.jpg',
            title: 'York',
            w: 2625,
            h: 1969
          }, {
            src: '/images/IMG_20180505_163759_824.jpg',
            msrc: '/images/IMG_20180505_163759_824_preview.jpg',
            title: 'Walmgate Stray, York',
            w: 4032,
            h: 3024
          }, {
            src: '/images/IMG_20180507_193704_025.jpg',
            msrc: '/images/IMG_20180507_193704_025_preview.jpg',
            title: 'National Railway Museum, York',
            w: 3672,
            h: 3672
          }, {
            src: '/images/IMG_20180504_211639_528.jpg',
            msrc: '/images/IMG_20180504_211639_528_preview.jpg',
            title: 'Rowntree Park, York',
            w: 2268,
            h: 2268
          }, {
            src: '/images/IMG_20180418_202727_576.jpg',
            msrc: '/images/IMG_20180418_202727_576_preview.jpg',
            title: 'York',
            w: 4032,
            h: 2268
          }, {
            src: '/images/IMG_20180504_213725_532.jpg',
            msrc: '/images/IMG_20180504_213725_532_preview.jpg',
            title: 'Rowntree Park, York',
            w: 2268,
            h: 2716
          }, {
            src: '/images/IMG_20180514_195716_330.jpg',
            msrc: '/images/IMG_20180514_195716_330_preview.jpg',
            title: 'Rowntree Park, York',
            w: 3024,
            h: 3024
          }]
        }
      },

      beforeMount() {

      },

      mounted() {

      }

    }
</script>

<style scoped>
    .preview-img-item {
        width: 100%;
    }
</style>