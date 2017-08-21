<template>
    <div>
        <h1>Analytics</h1>
        
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>IP Address</th>
                    <th>Page</th>
                    <th>Location</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="member in members">
                    <td>{{ member.ip }}</td>
                    <td>{{ member.route }}</td>
                    <td>{{ geo.get('id') }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import { _http } from '../../Http';
    
    export default {
        data() {
            return {
                members: [],
                geo: {
                    get(id) {
                        return (this.hasOwnProperty(id)) ? this[id] : "Unkown";
                    }
                }
            }
        },

        methods: {
            setMembers(data = false) {
                var _members = $.map(this.$analytics.members.members, function(value, index) {
                    if (data) {
                        if ('id' in data) {
                            if (data.id === index) {
                                value['route'] = data.route;
                            }
                        } else if ('client' in data) {
                            if (data.client.id === index) {
                                value['route'] = data.route;
                            }
                        }
                    }
                    
                    if (! value.hasOwnProperty("route")) {
                        value.route = "Unknown";
                    }

                    return [value];
                });

                this.members = _members;
            },

            getGeoLocation(members) {
                let type = Object.getPrototypeOf(members).constructor.name;

                if (type === "Members") {
                    for (let prop in members.members) {
                        let ip = members.members[prop].ip;
                        console.log(ip);
                    }
                } else if (type === "Object") {

                }
            }
        },

        mounted (){
            this.$analytics.bind('pusher:subscription_succeeded', function(data){
                this.setMembers();
                this.getGeoLocation(data);

                this.$analytics.trigger('client-analytics-refresh', {});

                this.$analytics.bind('pusher:member_added', function(data){
                    this.setMembers(data);
                    this.getGeoLocation(data);
                }.bind(this));

                this.$analytics.bind('pusher:member_removed', function(data){
                    this.setMembers();
                }.bind(this));

                this.$analytics.bind('client-route-navigate', function(data){
                    this.setMembers();
                }.bind(this));
            }.bind(this));
        }
    }
</script>

<style scoped>

</style>