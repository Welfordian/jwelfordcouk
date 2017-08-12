<template>
    <router-link tag="li" :to="{ path: href }" activeClass="active">
          <a><i :class="generateIcon()"></i> <slot></slot></a>
    </router-link>
</template>

<script>
    export default {
        props: ['href', 'icon'],
        mounted() {
            this.isActive = window.location.hash == '#' + this.href;
        },
        methods: {
            generateIcon() {
                return "glyphicon glyphicon-" + this.icon;
            }
        },
        data() {
            return {
                isActive: false
            }
        }
    }
</script>