<template>
    <div>
        <div class="container">
            <navbar>
                <template slot="left-links">
                    <navbar-link href="/about" icon="user">{{ lang.get('navbar.about') }}</navbar-link>
                    <navbar-link href="/posts" icon="pencil">{{ lang.get('navbar.blog') }}</navbar-link>
                    <navbar-link href="/music" icon="music">{{ lang.get('navbar.music') }}</navbar-link>
                    <navbar-link href="/photography" icon="camera-retro">{{ lang.get('navbar.photography') }}</navbar-link>
                    <navbar-link href="/contact" icon="inbox">{{ lang.get('navbar.contact') }}</navbar-link>
                </template>

                <template slot="right-links">
                    <auth-button>
                        <li class="dropdown-submenu">
                            <router-link to="/dashboard"><i class="glyphicon glyphicon-flash"></i> Dashboard</router-link>
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
      name: 'default-layout',
      data() {
        return {
          lang: i18n
        }
      }
  }
</script>

<style>

</style>