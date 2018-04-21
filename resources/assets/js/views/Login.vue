<template>
    <default-layout>
        <div>
            <login-panel use-ajax></login-panel>
        </div>
    </default-layout>
</template>

<script>
    import { Store } from '../stores/SharedStore';
    import DefaultLayout from "../components/DashboardLayout";

    export default {
      components: {DefaultLayout},
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