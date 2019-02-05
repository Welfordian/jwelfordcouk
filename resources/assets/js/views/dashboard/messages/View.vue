<template>
    <dashboard-layout>
        <div>
            <h1>
                <router-link to="/dashboard/messages">
                    <i class="fa fa-long-arrow-left" style="margin-right: 10px;"></i>
                </router-link>

                Viewing Message From {{ message.name }} ({{ message.email}})
            </h1>
            <h3>{{ message.subject }}</h3>

            <p>{{ message.message }}</p>
        </div>
    </dashboard-layout>
</template>

<script>
    import DashboardLayout from "../../../components/DashboardLayout";

    export default {
      components: {DashboardLayout},

      data() {
        return {
          message: this.$route.meta.message
        }
      }

    }
</script>