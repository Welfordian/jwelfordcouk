<template>
<div class="row noselect" :style="backgroundStyle()">
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(255, 255, 255, 0.46);"></div>
    <div class="col-md-12">
        <div :style="imageStyle()" alt="Image of myself"></div>
        <h2 style="text-align: center; color: black;">{{ name }}</h2>
    </div>
</div>
</template>

<script>
    export default {
        props: ['name', 'image', 'background'],
        methods: {
            backgroundStyle() {
                return "width: 100%; margin: 0px auto; background: url(" + this.background + "); background-position: center center; background-size: cover; position: relative;";
            },
            imageStyle() {
                return "display: block; margin: 20px auto; width: 150px; height: 150px; box-shadow: 0px 0px 10px; background: url(/images/" + this.image + ") center center no-repeat; background-size: cover;";
            }
        }
    }
</script>