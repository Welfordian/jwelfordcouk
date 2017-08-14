<template>
    <div>
        <header-image name="Joshua Welford" image="me-min.jpg" background="//cdn.jwelford.co.uk/images/cover.jpg"></header-image>

        <about-summary title="Summary">
            {{ lang.get('summary') }}
        </about-summary>

        <about-languages show-title>
            <about-language language="HTML(5)" years="5">
                {{ lang.get('languages.html') }}
            </about-language>
            <about-language language="PHP" years="4">
                {{ lang.get('languages.php') }}
            </about-language>
            <about-language language="Javascript" years="5">
                {{ lang.get('languages.javascript') }}
            </about-language>
        </about-languages>
        <about-languages>
            <about-language language="CSS" years="5">
                {{ lang.get('languages.css') }}
            </about-language>
            <about-language language="jQuery" years="4">
                {{ lang.get('languages.jquery') }}
            </about-language>
            <about-language language="Angular(2)" years="2">
                {{ lang.get('languages.angular') }}
            </about-language>
        </about-languages>
        <about-languages>
            <about-language language="NodeJS" years="2">
                {{ lang.get('languages.nodejs') }}
            </about-language>
            <about-language language="Debian / Ubuntu" years="2">
                {{ lang.get('languages.debian') }}
            </about-language>
            <about-language language="Laravel" years="2">
                {{ lang.get('languages.laravel') }}
            </about-language>
        </about-languages>

        <experience-set>
            <experience from="Mar 2017" to="Jul 2017" role="PHP Developer" location="Leadbyte—Middlesbrough">
                {{ lang.get('experiences.leadbyte') }}
                <hr>
            </experience>
            <experience from="Aug 2016" to="Feb 2017" role="PHP Developer" location="Better Brand Agency—Middlesbrough">
                {{ lang.get('experiences.better') }}
                <hr>
            </experience>
            <experience from="Sept 2013" to="June 2016" role="Web Developer" location="Gbiz IT Ltd—Marske-By-The-Sea">
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
</template>

<script>
    import { i18n } from '../i18n';

    export default {
        data() {
            return {
                lang: i18n
            }
        }
    }
</script>