<template>
    <div>
        <p>{{ from }} - {{ to }}</p>
        <p style="margin-top: -10px;">{{ role }} <a v-bind:href="link" rel="noopener noreferrer" target="_blank" v-if="link && location"><span>({{ location }})</span></a> <span v-else-if="location">({{ location }})</span>
        <p style="text-align: justify;"><slot></slot></p>
    </div>
</template>

<script>
    export default {
        props: ['from', 'to', 'role', 'location', 'link']
    }
</script>