<template>
    <div>
        <p>{{ from }} - {{ to }}</p>
        <p style="margin-top: -10px;">{{ role }} <span v-if="location">({{ location }})</span>
        <p style="text-align: justify;"><slot></slot></p>
    </div>
</template>

<script>
    export default {
        props: ['from', 'to', 'role', 'location']
    }
</script>