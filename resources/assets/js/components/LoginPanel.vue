<template>
    <div class="row">
		<div class="col-md-8 col-md-offset-2">
			<div class="panel panel-default">
				<div class="panel-heading">
					{{ lang.get("navbar.login") }}
                    <i class="fa fa-refresh fa-spin" v-if="loading" style="float: right; font-size: 22px;"></i>
				</div>
				<div class="panel-body">
					<form class="form-horizontal" method="post" v-on:submit="handleSubmit">
						<div class="form-group">
							<label class="col-md-4 control-label" for="email">{{ lang.get('email_address') }}</label>
							<div class="col-md-6">
								<input autofocus="" class="form-control" id="email" name="email" required="" type="email" v-model="email">
							</div>
						</div>
						<div class="form-group">
							<label class="col-md-4 control-label" for="password">{{ lang.get('password') }}</label>
							<div class="col-md-6">
								<input class="form-control" id="password" name="password" required="" type="password" v-model="password">
							</div>
						</div>
                        <div class="form-group">
                            <div class="col-md-6 col-md-offset-4">
                                <button type="submit" class="btn btn-primary">
                                    <i class="fa fa-refresh fa-spin margin--right" v-if="loading"></i>
                                    <i class="fa fa-btn fa-sign-in margin--right" v-else></i> {{ lang.get('navbar.login') }}
                                </button>

                                <a class="btn btn-link" href="https://jwelford.co.uk/password/reset">{{ lang.get('password_forgot') }}</a>
                            </div>
                        </div>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
    import Noty from 'noty';
    import { i18n } from '../i18n';
    import { Store } from '../stores/SharedStore';

    export default {
        props: {
            useAjax: {
                default: false,
                type: Boolean
            }
        },
        data() {
            return {
                lang: i18n,
                store: Store,
                loading: false,
                email: "",
                password: ""
            }
        },
        methods: {
            handleSubmit(e) {
                if (this.useAjax)
                {
                    e.preventDefault();

                    this.submitWithAjax(e);
                }
            },

            resetForm() {
                this.email = "";
                this.password = "";
            },

            submitWithAjax(e) {
                this.loading = true;

                this.store.auth.login({
                    email: this.email,
                    password: this.password
                }).then(function(){
                    this.$router.push("/dashboard");
                    this.loading = false;
                }.bind(this)).catch(function(){
                    new Noty({
                        layout   : 'topRight',
                        theme    : 'bootstrap-v4',
                        type     : 'error',
                        timeout  : 5000,
                        text     : 'Whoops, username or password incorrect.'
                    }).show();

                    this.resetForm();
                    this.loading = false;
                }.bind(this));
            }
        }
    }
</script>

<style scoped>
.margin--right {
    margin-right: 6px;
}
</style>