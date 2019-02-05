<template>
    <div>
        <p style="text-align: justify;">Redcar &amp; Cleveland College: BTEC Level 2 Diploma in I.T.</p>
        <p style="text-align: justify;">{{ lang.get('education.rcc') }}</p>
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