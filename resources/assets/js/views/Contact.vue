<template>
    <div>
        <h1><i style="margin-left: 8px;" class="fa fa-envelope"></i> {{ lang.get('contact.title') }}</h1>
        <div class="row">
            <div class="col-md-9">
                <form role="form" v-on:submit.prevent="handleContactSubmit">
                    <div class="input-group"><span class="input-group-addon">{{ lang.get('full_name') }} </span>
                        <input name="name" v-model="form.name" id="prependedtext" class="form-control" placeholder="John Doe..." type="text" required="" value="">
                    </div>
                    <div class="input-group"><span class="input-group-addon">{{ lang.get('email_address') }} </span>
                        <input name="email" v-model="form.email" id="prependedtext" class="form-control" placeholder="john.doe@example.com" type="email" required="" value="">
                    </div>
                    <div class="input-group"><span class="input-group-addon">{{ lang.get('subject') }} </span>
                        <input name="subject" v-model="form.subject" id="prependedtext" class="form-control" v-bind:placeholder="lang.get('subject.placeholder')" type="text" required="" value="">
                    </div>
                    <div class="input-group"><span class="input-group-addon">{{ lang.get('message') }} </span>
                        <textarea name="message" v-model="form.message" style="resize: none;" class="form-control" v-bind:placeholder="lang.get('message.placeholder')" required=""></textarea>
                    </div>
                    <div class="col-md-6" style="padding: 5px;">
                        <button style="width: 100%;" class="btn btn-success">{{ lang.get('send_message') }}</button>
                    </div>
                    <div style="padding: 5px;" class="col-md-6">
                        <a @click="clearForm" style="width: 100%;" class="btn btn-danger">{{ lang.get('clear_form') }}</a>
                    </div>
                </form>
            </div>
            <div class="col-md-3">
                <a href="https://twitter.com/welfordian" target="_blank" style="margin-top: 7px;" class="btn btn-block btn-social btn-twitter"><i style="margin-top: 3px;" class="fa fa-twitter"></i>{{ lang.get('find_me_on') }} Twitter</a>
                <a href="https://github.com/welfordian" target="_blank" style="margin-top: 7px;" class="btn btn-block btn-social btn-github"><i style="margin-top: 3px;" class="fa fa-github"></i>{{ lang.get('find_me_on') }} GitHub</a>
                <a href="https://www.linkedin.com/in/josh-welford-1432777a/" target="_blank" style="margin-top: 7px;" class="btn btn-block btn-social btn-linkedin"><i style="margin-top: 3px;" class="fa fa-linkedin"></i>{{ lang.get('find_me_on') }} LinkedIn</a>
            </div>
        </div>

        <div class="modal _fade" tabindex="-1" role="dialog" id="offlineModal">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">Seems there was a problem...</h4>
                </div>
                <div class="modal-body">
                    <p>{{ modalMessage }}</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" @click="requestNotifications">Notify Me When Sent</button>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import * as idb from 'idb';
    import Noty from 'noty';
    import { Events } from '../EventBus';
    import { i18n } from '../i18n';
    import { _http } from '../Http';

    export default {
        mounted() {
            Events.$on('service_worker.reg', function(reg){
                this.sw = reg;
            }.bind(this));

            $('#offlineModal').on('hidden.bs.modal', function(){
                this.modalMessage = "It looks like there was a problem sending your message, but don't worry... I'll keep trying to resend it for you. You can click the button below to be notified when it has successfully sent.";
            }.bind(this));
        },

        data() {
            return {
                lang: i18n,
                sw: false,
                modalMessage: "It looks like there was a problem sending your message, but don't worry... I'll keep trying to resend it for you. You can click the button below to be notified when it has successfully sent.",
                form: {
                    name: "",
                    email: "",
                    subject: "",
                    message: ""
                }
            }
        },
        
        methods: {
            handleContactSubmit() {
                _http.post('/contact', this.form)
                .then(function(data){
                    new Noty({
                        layout   : 'topRight',
                        theme    : 'bootstrap-v4',
                        type     : 'success',
                        timeout  : 5000,
                        text     : 'Thanks, your message has been sent!'
                    }).show();

                    this.clearForm();
                }.bind(this)).catch(function(error){
                    if(! error.hasOwnProperty("response") || error.response == undefined)
                    {
                        this.showOfflineModal();
                        this.queueMessage();
                    }
                    else
                    {
                        if (error.response.hasOwnProperty("status"))
                        {
                            switch (error.response.status)
                            {
                                case 422:
                                    this.handleValidationErrors(error.response.data);
                                break;
                                default:
                                    console.error("Unknown error: ", error);
                                break;
                            }
                        }
                    }
                }.bind(this));
            },

            showOfflineModal() {
                $('#offlineModal').modal("show");
            },

            handleValidationErrors() {
                // I'll implement properly later, I'm tired now

                new Noty({
                    layout   : 'topRight',
                    theme    : 'bootstrap-v4',
                    type     : 'error',
                    timeout  : 5000,
                    text     : 'Whoops, looks like you might have missed something.'
                }).show();
            },

            requestNotifications() {
                /*this.modalMessage = "Sure thing, I'll just need permission to send you notifications.";

                Notification.requestPermission().then(function(result) {
                    if (result === 'denied') {
                        this.setNoPermissionText();

                        return;
                    }
                    if (result === 'default') {
                        this.setNoPermissionText();

                        return;
                    }

                    $('#offlineModal').modal("hide");
                }.bind(this)); */

                $('#offlineModal').modal("hide");
            },

            setNoPermissionText() {
                this.modalMessage = "Sorry, you didn't give me permission. I won't show you a notification but I'll still try to send your message";
            },

            queueMessage() {
                idb.open('messages', 1, function(upgradeDb) {
                    upgradeDb.createObjectStore('outbox', { autoIncrement : true, keyPath: 'id' });
                }).then(function(db) {
                    var transaction = db.transaction('outbox', 'readwrite');
                    return transaction.objectStore('outbox').put(this.form);
                }.bind(this)).then(function() {
                    this.sw.sync.register('outbox');

                    this.clearForm();
                }.bind(this));
            },

            clearForm() {
                this.form = {
                    name: "",
                    email: "",
                    subject: "",
                    message: ""
                };
            }
        }
    }
</script>

<style scoped>
.input-group-addon {
    min-width: 130px;
    text-align: right;
}

.input-group {
    margin: 8px;
}

.error {
    background: rgba(214, 44, 26, 0.77);
    color: white;
}
._fade {
    transform: scale(0.5);
    opacity: 0;
    transition: all .2s linear;
}

._fade.in {
    opacity: 1;
    transform: scale(1);
}
</style>