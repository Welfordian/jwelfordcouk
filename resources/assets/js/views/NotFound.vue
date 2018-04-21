<template>
    <default-layout>
        <div class="row-fluid">
            <div class="col-lg-12">
                <div class="centering text-center">
                    <div class="text-center">
                        <h2 class="without-margin">Whoops! I can't find that page.</h2>
                        <h4 class="text-success">Page not found</h4>
                    </div>
                    <div class="text-center">
                        <h3>
                            <small>Sorry about that, Jim.</small>
                        </h3>
                    </div>
                    <hr />
                    <ul class="pager">
                        <li><router-link to="/about">&larr; About</router-link></li>
                        <li><router-link to="/music"> Music</router-link></li>
                        <li><router-link to="/contact">&rarr; Contact</router-link></li>
                    </ul>
                </div>
            </div>
        </div>
    </default-layout>
</template>

<script>
    import DefaultLayout from "../components/DashboardLayout";

    export default {
      components: {DefaultLayout}

    }
</script>