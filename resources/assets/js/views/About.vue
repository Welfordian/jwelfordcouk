<template>
    <default-layout>
        <div>
            <header-image name="Joshua Welford" image="me-min.jpg" background="cover.jpg"></header-image>

            <about-summary title="Summary" :content="Store.content.summary.content"></about-summary>

            <div id="knowledge">
                <about-languages show-title>
                    <about-language v-for="knowledge in Store.content.knowledge"
                                    :language="knowledge.language"
                                    :years="knowledge.years"
                                    :content="knowledge.content"></about-language>
                </about-languages>
            </div>

            <experience-set>
                <experience from="Mar 2018" to="Present" role="Web Developer" location="RightMessage—Remote"
                            link="https://rightmessage.com">
                    {{ lang.get('experience.rm') }}
                    <hr>
                </experience>
                <experience from="Feb 2018" to="Mar 2018" role="PHP Developer" location="Netsells—York"
                            link="https://netsells.co.uk">
                    {{ lang.get('experience.netsells') }}
                    <hr>
                </experience>
                <experience from="Oct 2017" to="Feb 2018" role="Web Developer" location="VIA Creative—Middlesbrough"
                            link="https://viacreative.co.uk">
                    {{ lang.get('experience.via') }}
                    <hr>
                </experience>
                <experience from="Mar 2017" to="Jul 2017" role="PHP Developer" location="Leadbyte—Middlesbrough"
                            link="https://leadbyte.co.uk">
                    {{ lang.get('experiences.leadbyte') }}
                    <hr>
                </experience>
                <experience from="Aug 2016" to="Feb 2017" role="PHP Developer"
                            location="Better Brand Agency—Middlesbrough" link="https://www.betterbrandagency.com/">
                    {{ lang.get('experiences.better') }}
                    <hr>
                </experience>
                <experience from="Sept 2013" to="June 2016" role="Web Developer"
                            location="Gbiz IT Ltd—Marske-By-The-Sea" link="https://gbizit.co.uk">
                    {{ lang.get('experiences.gbizit') }}
                </experience>
            </experience-set>

            <education-set>
                <education></education>
            </education-set>

            <div class="row" id="interests"><a name="interests"></a>
                <div class="col-md-12">
                    <h2 class="noselect">{{ lang.get('interests.title') }} <a href="#interests" class="part-link"><i
                            class="glyphicon glyphicon-link"></i></a></h2>
                    <p style="text-align: justify;">{{ lang.get('interests') }}</p>
                </div>
            </div>
        </div>
    </default-layout>
</template>

<script>
  import {i18n} from '../i18n';
  import DefaultLayout from "../components/DefaultLayout";
  import {_http} from "../Http";
  import {Store} from "../stores/SharedStore";

  export default {
    components: {DefaultLayout},

    beforeMount() {
      this.load();
    },

    data() {
      return {
        Store,
        lang: i18n,
      }
    },

    methods: {
      load() {
        this.header();
        this.summary();
        this.knowledge();
        // this.experience();
        // this.education();
        // this.interests();
      },

      async header(){
        this.Store.content.header = (await _http.get('/about/header')).data;
      },

      async summary() {
        this.Store.content.summary = (await _http.get('/about/summary')).data;
      },
      async knowledge(){
        this.Store.content.knowledge = (await _http.get('/about/knowledge')).data;
      },
      // experience(){},
      // education(){},
      // interests(){}
    }
  }
</script>

<style>
    .placeholder-row {
        margin-left: 0 !important;
        margin-right: 0 !important;
    }
</style>