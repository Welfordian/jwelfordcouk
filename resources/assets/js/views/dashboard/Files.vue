<template>
    <dashboard-layout>
        <div>
            <h1>Files <file-upload-button :type="1"></file-upload-button></h1>

            <div class="row">

            </div>
        </div>
    </dashboard-layout>
</template>

<script>
    import DashboardLayout from "../../components/DashboardLayout";
    import FileUploadButton from "../../components/FileUploadButton";

    export default {
      components: {
        FileUploadButton,
        DashboardLayout}

    }
</script>