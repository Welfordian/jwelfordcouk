<template>
    <div>
        <div class="container" :style="containerStyle">
            <navbar>
                <template slot="left-links">
                    <navbar-link href="/dashboard/editor" icon="paint-brush">Editor</navbar-link>
                    <navbar-link href="/dashboard/users" icon="users">Users</navbar-link>
                    <navbar-link href="/dashboard/posts" icon="newspaper-o">Posts</navbar-link>
                    <navbar-link href="/dashboard/files" icon="file">Files</navbar-link>
                    <navbar-link href="/dashboard/messages" icon="envelope">Messages</navbar-link>
                </template>

                <template slot="right-links">
                    <auth-button>
                        <li class="dropdown-submenu">
                            <router-link to="/"><i class="glyphicon glyphicon-flash"></i> Home</router-link>
                        </li>
                    </auth-button>
                    <language-selector></language-selector>
                </template>
            </navbar>

            <transition name="fade">
                <slot></slot>
            </transition>
        </div>
    </div>
</template>

<script>
  import { i18n } from '../i18n';

  export default {
    name: 'dashboard-layout',

    props: ['fullWidth'],

    computed: {
      containerStyle() {
        let style = {};

        if (this.fullWidth) {
          style.width = '100%';
          style.marginLeft = '0';
          style.marginRight = '0';
        }

        return style;
      }
    },

    data() {
      return {
        lang: i18n
      }
    }
  }
</script>

<style>

</style>