<template>
    <div class="col-md-4">
        <h4 :class="{ 'animated-background': !language && !years}"><span v-if="language && years">{{ language }} - {{ years }} Years Exp</span></h4>
        <p :class="{ 'animated-background': !content}">
            {{ content }}
        </p>
    </div>
</template>

<script>
    export default {
        props: ['language', 'years', 'content']
    }
</script>

<style scoped>
    p {
        text-align: justify;
    }

    p.animated-background {
        height: 50px;
    }

    h4 {
        font-style: italic;
        text-decoration: underline;
    }

    h4.animated-background {
        text-decoration: none;
        height: 24px;
        width: 50%;
    }
</style>