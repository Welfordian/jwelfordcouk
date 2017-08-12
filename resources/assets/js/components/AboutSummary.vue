<template>
<div class="row" id="summary">
    <a name="summary"></a>

    <div class="col-md-12">
        <h2 class="noselect"><span>{{ lang.get('summary.title') }}</span>
            <a href="#summary" class="part-link">
                <i class="glyphicon glyphicon-link"></i>
            </a>
        </h2>
        <p style="text-align: justify;">
            <slot></slot>
        </p>
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