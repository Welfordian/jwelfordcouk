<template>
    <div :class="_size">
        <router-link :to="link">
            <div class="well">
                <h1>
                    {{ title }}
                    <span class="count" v-if="data === false"><i class="fa fa-spinner fa-spin"></i></span>
                    <span class="count" v-else>{{ data }}</span>
                </h1>
                <p>This is the stat for {{ title }}</p>
                <i :class="_icon" aria-hidden="true"></i>
            </div>
        </router-link>
    </div>
</template>

<script>
    import { _http } from '../../Http';

    export default {
        props: ['title', 'data', 'icon', 'size', 'link'],

        computed: {
            _size() {
                return "col-md-" + this.size;
            },

            _icon() {
                return "stat-icon fa fa-" + this.icon;
            }
        }
    }
</script>

<style scoped>
    h1 {
        margin-top: 0px;
    }
    
    .stat-icon {
        float: right;
        font-size: 5em;
        margin-top: -1em;
    }

    a {
        color: #2c3e50;
    }

    a:hover, a:active, a:visited, a:focus {
        color: #2c3e50;
        text-decoration: none;
    }

    .well {
        transition: all .2s;
        -webkit-transition: all .2s;
    }

    .well:hover {
        background: #eaeaea;
        -webkit-box-shadow: inset 2px 2px 5px 2px #69DCFF;
        box-shadow: inset 0px 0px 7px 1px #e0e0e0;
    }

    span.count {
        display: inline-block;
        min-width: 10px;
        padding: 3px 7px;
        font-size: 16px;
        font-weight: 700;
        line-height: 1;
        color: #fff;
        text-align: center;
        white-space: nowrap;
        vertical-align: top;
        background-color: #2c3e50;
        border-radius: 10px;
    }

    .fa-envelope {
        margin-top: -1.1em;
    }
</style>