<template>
    <div class="row">
        <a v-if="showTitle" name="knowledge"></a>

        <h2 v-if="showTitle" class="noselect" style="margin-left: 15px;">{{ lang.get('languages.title') }} <a class="part-link" href="#knowledge"><i class="glyphicon glyphicon-link"></i></a></h2>

        <div v-if="outdated" class="outdated-container">
            <p class="outdated-content">Outdated</p>
        </div>
        <slot></slot>


    </div>
</template>

<script>
    import { i18n } from '../i18n'; 

    export default {
        props: {
            'show-title': {
                default: false,
                type: Boolean
            },

            'outdated': {
                default: false,
                type: Boolean
            }
        },

        data() {
            return {
                lang: i18n
            }
        }
    }
</script>