<template>
    <nav style="border-radius: 0px; position: fixed; top: 0; left: 0; width: 100%; z-index: 1000;" class="navbar navbar-default noselect" role="navigation">
        <div class="container-fluid">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="/" style="width: auto; text-align: center;">Joshua Welford</a>
            </div>
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                    <slot name="left-links"></slot>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <slot name="right-links"></slot>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        mounted(){}
    }
</script>

<style scoped>
    a .fa {
        margin-right: 6px;
    }
</style>