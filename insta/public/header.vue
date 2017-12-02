<style scoped>
    p {
        color: blue;
    }
</style>

<template>
    <p> {{ pText.toUpperCase() }} </p>
</template>

<script>
    module.exports = {
        props: ['pText']
    }
</script>