<template>
    <navbar-link href="/login" icon="log-in" v-if="!store.auth.authenticated">{{ lang.get('navbar.login') }}</navbar-link>
    <li class="dropdown" v-else>
        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i class="glyphicon glyphicon-user"></i> {{ store.user.get('name') }} <span class="caret"></span></a>       
        <ul class="dropdown-menu">
            <slot></slot>
            <li role="separator" class="divider"></li>
            <li><a href="#" @click.prevent="handleLogout"><i class="glyphicon glyphicon-log-out"></i> {{ lang.get('navbar.logout') }}</a></li>
        </ul>
    </li>
</template>

<script>
    import { i18n } from '../i18n';
    import { Store } from '../stores/SharedStore';
    import router from '../routes';

    export default {
        data() {
            return {
                store: Store,
                lang: i18n
            }
        },
        methods: {
            handleLogout() {
                this.store.auth.logout()
                .then(function(){
                    router.push("login");
                });
            }
        }
    }
</script>