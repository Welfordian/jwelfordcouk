<template>
    <div class="row" id="knowledge">
        <a v-if="showTitle" id="knowledge" name="knowledge"></a>

        <h2 v-if="showTitle" class="noselect" style="margin-left: 15px;">Main Skillset <a class="part-link" href="#knowledge"><i class="glyphicon glyphicon-link"></i></a></h2>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: {
            'show-title': {
                default: false,
                type: Boolean
            }
        }
    }
</script>