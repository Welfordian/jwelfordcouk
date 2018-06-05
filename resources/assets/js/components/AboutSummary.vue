<template>
    <div class="row" id="summary">
        <a name="summary"></a>

        <div class="col-md-12">
            <h2 class="noselect" v-if="title">{{ title }}
                <a href="#summary" class="part-link">
                    <i class="glyphicon glyphicon-link"></i>
                </a>
            </h2>

            <div v-else>
                <h2 class="row placeholder-row"><span class="animated-background col-md-4">&nbsp;</span></h2>
            </div>
            <p style="text-align: justify;" v-if="content">
                {{ content }}
            </p>
            <div v-else>
                <p class="animated-background" style="width: 100%; height: 4.2em;">&nbsp;</p>
            </div>
        </div>
    </div>
</template>

<script>
  import {i18n} from '../i18n';

  export default {
    props: ['title', 'content'],
    data() {
      return {
        currentLanguage: i18n.get('en'),
        lang: i18n,
      }
    }
  }
</script>

<style>
    @keyframes placeHolderShimmer{
        0%{
            background-position: -800px 0
        }
        100%{
            background-position: 800px 0
        }
    }

    .animated-background {
        animation-duration: 1s;
        animation-fill-mode: forwards;
        animation-iteration-count: infinite;
        animation-name: placeHolderShimmer;
        animation-timing-function: linear;
        background: #f6f7f8;
        background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
        background-size: 800px 104px;
        position: relative;
    }
</style>