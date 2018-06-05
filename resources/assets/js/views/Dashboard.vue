<template>
    <dashboard-layout>
        <div v-if="settings">
            <h1>Settings</h1>
            <hr />

            <div class="row">
                <div class="col-md-2"><h2>Spotify</h2></div>
                <div class="col-md-10" v-if="! settings.spotify.connected">
                    <h2><button class="btn btn-success" @click="redirectToSpotify()">Connect to Spotify</button></h2>
                </div>
                <div class="col-md-8" v-else>
                    <h2><button class="btn btn-danger" @click="disconnectFromSpotify()">Disconnect {{ settings.spotify.username }}</button></h2>
                </div>
            </div>
            <button class="btn btn-spotify"></button>
        </div>
        <div v-else>
            Loading...
        </div>
    </dashboard-layout>
</template>

<script>
  import DashboardLayout from "../components/DashboardLayout";
  import {_http} from "../Http";

  export default {
    components: {DashboardLayout},

    beforeMount() {
      this.getSettings();
    },

    data() {
      return {
        settings: false
      }
    },

    methods: {
      async getSettings() {
        this.settings = (await _http.get('/settings')).data.settings;
      },

      redirectToSpotify() {
        window.location.href = this.settings.spotify.authUrl;
      },

      disconnectFromSpotify() {

      }
    }

  }
</script>