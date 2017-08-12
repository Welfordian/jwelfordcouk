<template>
    <div>
        <login-panel use-ajax></login-panel>
    </div>
</template>

<script>
    import { Store } from '../stores/SharedStore';

    export default {
        beforeRouteEnter(to, from, next) {
            if (Store.auth.authenticated) {
                next((vm) => {
                   vm.$router.push('/dashboard');
                });
            }else{
                next((vm) => {
                   vm.$router.push('/login');
                });
            }
        }
    }
</script>