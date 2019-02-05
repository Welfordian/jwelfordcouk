<template>
    <dashboard-layout>
        <div class="row">
            <h1>Users <button class="btn btn-primary pull-right">Create</button></h1>
            <hr />

            <p class="content-loader" v-if="users.length === 0">
                <i class="fa fa-refresh fa-spin"></i>
            </p>

            <table class="table table-striped" v-else>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Created</th>
                    <th>Updated</th>
                    <th>Options</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="user in users">
                    <td>
                        {{ user.id }}
                    </td>
                    <td>
                        {{ user.name }}
                    </td>
                    <td>
                        {{ user.email }}
                    </td>
                    <td>
                        {{ user.created_at | date('Do MMM YYYY h:s a')}}
                    </td>
                    <td>
                        {{ user.updated_at | date('Do MMM YYYY h:s a')}}
                    </td>
                    <td>
                        <div class="dropdown">
                            <a class="dropdown-toggle rowlink primary" data-toggle="dropdown" href="#">
                                <i class="fa fa-caret-square-o-down"></i>
                            </a>
                            <ul class="dropdown-menu" role="menu" aria-labelledby="dLabel">
                                <li>
                                    <a tabindex="-1" href="#"><i class="fa fa-cogs"></i> Permissions</a>
                                </li>
                                <li role="separator" class="divider"></li>
                                <li>
                                    <a tabindex="-1" href="#" class="danger" @click.prevent="confirmDelete" v-show="!confirmsDelete" data-prevent-close><i class="fa fa-trash"></i> Delete</a>
                                    <a tabindex="-1" href="#" class="danger" @click.prevent="confirmedDelete" v-show="confirmsDelete"><i class="fa fa-trash"></i> Are you sure?</a>
                                </li>
                            </ul>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </dashboard-layout>
</template>

<script>
    import { _http } from '../../Http';
    import DashboardLayout from "../../components/DashboardLayout";

    export default {
      components: {DashboardLayout},
      data() {
            return {
                confirmsDelete: false,
                users: []
            }
        },

        methods: {
            confirmDelete() {
                this.confirmsDelete = true;

                setTimeout(function(){
                    this.confirmsDelete = false;
                }.bind(this), 3000);
            },

            confirmedDelete() {
                this.confirmsDelete = false;
            }
        },

        beforeMount() {
            _http.get('/users').then(function(response){
                this.users = response.data;
            }.bind(this)).catch(function(error){
                console.error(error);
            });
        }
    }
</script>

<style scoped>
    .content-loader {
        font-size: 4em;
        text-align: center;
        margin-top: 2em;
    }

    li .fa {
        margin-left: -5px;
        margin-right: 5px;
    }

    a.primary {
        color: #2c3e50;
    }

    li a.danger{
        color: #e74c3c;
    }

    li a.danger:hover, li a.danger:focus, li a.danger:active {
        background-color: #e74c3c;
        color: #fff;
    }
    
</style>