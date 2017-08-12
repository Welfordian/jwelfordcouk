<template>
    <div class="col-md-4">
        <h4 style="font-style: italic; text-decoration: underline;">{{ language }} - {{ years }} Years Exp</h4>
        <p style="text-align: justify;">
            <slot></slot>
        </p>
    </div>
</template>

<script>
    export default {
        props: ['language', 'years']
    }
</script>