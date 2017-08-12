<template>
    <div class="panel panel-default" v-show="visible">
        <div class="panel-heading">
            <h3 class="panel-title"> {{ title }} <span style="float: right; cusor: pointer;" @click="hide">x</span></h3>
        </div>
        <div class="panel-body">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['title'],
        methods: {
            hide() {
                this.visible = !this.visible;
            }   
        },
        data() {
            return {
                visible: true
            }
        }
    }
</script>