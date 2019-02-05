<template>
<li class="dropdown">
    <a style="cursor: pointer;" class="dropdown-toggle" data-toggle="dropdown">
        <i class="fal fa-globe"></i> {{ currentLanguage }}
        <b class="caret"></b>
    </a>
    <ul class="dropdown-menu">
        <li>
            <a @click="changeLanguage('en')"><i class="far fa-globe"></i> &nbsp; {{ lang.get('en') }}</a>
        </li>
        <li>
            <a @click="changeLanguage('fr')"><i class="far fa-globe"></i> &nbsp; {{ lang.get('fr') }}</a>
        </li>
    </ul>
</li>
</template>

<script>
    import { i18n } from '../i18n';

    export default {
        data() {
            return {
                currentLanguage: i18n.get('en'),
                lang: i18n
            }
        },
        methods: {
            changeLanguage(lang) {
                this.lang.set(lang);

                localStorage.setItem("language", lang);

                this.currentLanguage = this.lang.get(lang);
            }
        },
        mounted() {
            this.currentLanguage = this.lang.get(this.lang.lang);
        }
    }
</script>

<style scoped>
    a {
        cursor: pointer;
    }
</style>