<template>
    <div>
        <header-image name="Josh Welford" image="me-min.jpg" background="//cdn.jwelford.co.uk/images/cover.jpg"></header-image>

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
                While working at LeadByte (lead management software) I worked with many different integrations as clients would often export leads from our software to their own CRM. During my time here I also revamped their dashboard bringing it into the modern day. This was a fully Javascript frontend which would request data via the LeadByte API as opposed to the backend which increased loading times for users and we saw a spike of good client feedback due to this. I also implemented 2FA due to GDPR compliance.
                <hr>
            </experience>
            <experience from="Aug 2016" to="Feb 2017" role="PHP Developer" location="Better Brand Agency—Middlesbrough">
                No description as of yet.
                <hr>
            </experience>
            <experience from="Sept 2013" to="June 2016" role="Web Developer" location="Gbiz IT Ltd—Marske-By-The-Sea">
                Working with clients of differing needs, and being the only web developer at the company, I often need to leverage a wide variety of skills. The most robust project entailed creating a full job system from scratch for a tree surgeon company. This involved crafting a solution which enabled different users to have different access levels. Employees were not to see the whole list of clients and enquiries as they could move onto another job and take the list with them. The main languages involved were: PHP, SQL, HTML, JavaScript, AJAX and JSON.
            </experience>
        </experience-set>

        <education-set>
            <education></education>
        </education-set>

        <div class="row" id="interests"><a name="interests"></a>
            <div class="col-md-12">
                <h2 class="noselect">Interests <a href="#interests" class="part-link"><i class="glyphicon glyphicon-link"></i></a></h2>
                <p style="text-align: justify;">All types of music has always been an interest of mine. Though I don't play  an instrument, I'm an avid listener. Programming, of course, is a large interest, which is why my chosen career is such a joy.</p>
            </div>
        </div>
    </div>
</template>

<script>
    import { i18n } from '../i18n';

    export default {
        data() {
            return {
                currentLanguage: i18n.get('en'),
                lang: i18n
            }
        }
    }
</script>