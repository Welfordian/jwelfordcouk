<template>
    <router-link tag="li" :to="{ path: href }" activeClass="active">
          <a><i :class="generateIcon()"></i> <slot></slot></a>
    </router-link>
</template>

<script>
    export default {
        props: ['href', 'icon', 'iconPrefix'],

        mounted() {
            this.isActive = window.location.hash === '#' + this.href;
            this.faPrefix = this.iconPrefix == undefined ? "fas" : this.iconPrefix;
        },

        methods: {
            generateIcon() {
                return this.faPrefix + " fa-" + this.icon;
            }
        },

        data() {
            return {
                isActive: false,
                faPrefix: ""
            }
        }
    }
</script>