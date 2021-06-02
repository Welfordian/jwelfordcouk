<template>
    <default-layout>
        <div>
            <header-image name="Joshua Welford" image="me-min.jpg" background="cover.jpg"></header-image>

            <about-summary title="Summary">
                {{ lang.get('summary') }}
            </about-summary>

            <div id="knowledge" class="d-relative">
                <about-languages show-title>
                    <about-language language="HTML(5)" years="8">
                        {{ lang.get('languages.html') }}
                    </about-language>
                    <about-language language="PHP" years="7">
                        {{ lang.get('languages.php') }}
                    </about-language>
                    <about-language language="Javascript" years="7">
                        {{ lang.get('languages.javascript') }}
                    </about-language>
                </about-languages>
                <about-languages>
                    <about-language language="CSS" years="7">
                        {{ lang.get('languages.css') }}
                    </about-language>
                    <about-language language="Vue" years="1.5">
                        {{ lang.get('languages.vue') }}
                    </about-language>
                    <about-language language="Docker" years="1">
                        {{ lang.get('languages.docker') }}
                    </about-language>
                </about-languages>
                <about-languages>
                    <about-language language="NodeJS" years="2">
                        {{ lang.get('languages.nodejs') }}
                    </about-language>
                    <about-language language="Debian / Ubuntu" years="3">
                        {{ lang.get('languages.debian') }}
                    </about-language>
                    <about-language language="Laravel" years="4">
                        {{ lang.get('languages.laravel') }}
                    </about-language>
                </about-languages>
            </div>

            <experience-set>
                <experience from="Jan 2019" to="Present" role="Lead Technical Engineer" location="EMR4DW—Remote" link="https://emr4dw.org">
                    {{ lang.get('experience.emr4dw') }}
                    <hr>
                </experience>
                <experience from="Mar 2018" to="Present" role="Web Developer" location="RightMessage—Remote" link="https://rightmessage.com">
                    {{ lang.get('experience.rm') }}
                    <hr>
                </experience>
                <experience from="Feb 2018" to="Mar 2018" role="PHP Developer" location="Netsells—York" link="https://netsells.co.uk">
                    {{ lang.get('experience.netsells') }}
                    <hr>
                </experience>
                <experience from="Oct 2017" to="Feb 2018" role="Web Developer" location="VIA Creative—Middlesbrough" link="https://viacreative.co.uk">
                    {{ lang.get('experience.via') }}
                    <hr>
                </experience>
                <experience from="Mar 2017" to="Jul 2017" role="PHP Developer" location="Leadbyte—Middlesbrough" link="https://leadbyte.co.uk">
                    {{ lang.get('experiences.leadbyte') }}
                    <hr>
                </experience>
                <experience from="Aug 2016" to="Feb 2017" role="PHP Developer" location="Better Brand Agency—Middlesbrough" link="https://www.betterbrandagency.com/">
                    {{ lang.get('experiences.better') }}
                    <hr>
                </experience>
                <experience from="Sept 2013" to="June 2016" role="Web Developer" location="Gbiz IT Ltd—Marske-By-The-Sea" link="https://gbizit.co.uk">
                    {{ lang.get('experiences.gbizit') }}
                </experience>
            </experience-set>

            <education-set>
                <education></education>
            </education-set>

            <div class="row" id="interests"><a name="interests"></a>
                <div class="col-md-12">
                    <h2 class="noselect">{{ lang.get('interests.title') }} <a href="#interests" class="part-link"><i class="glyphicon glyphicon-link"></i></a></h2>
                    <p style="text-align: justify;">{{ lang.get('interests') }}</p>
                </div>
            </div>
        </div>
    </default-layout>
</template>

<script>
    import { i18n } from '../i18n';
    import DefaultLayout from "../components/DefaultLayout";

    export default {
      components: {DefaultLayout},
      data() {
            return {
                lang: i18n
            }
        }
    }
</script>