<template>
    <dashboard-layout>
        <div class="row">
            <h1>Messages</h1>

            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="message in messages" @click="goToMessage(message.id)">
                        <td>{{ message.name }}</td>
                        <td>{{ message.email }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </dashboard-layout>
</template>

<script>
    import DashboardLayout from "../../components/DashboardLayout";
    import {_http} from "../../Http";

    export default {
      components: {DashboardLayout},

      data() {
        return {
          messages: []
        }
      },

      mounted() {
        this.getMessages().then(response => this.messages = response.data.reverse());
      },

      methods: {
        goToMessage(id) {
          this.$router.push('/dashboard/messages/' + id);
        },

        getMessages() {
          return _http.get('/messages');
        }
      }

    }
</script>