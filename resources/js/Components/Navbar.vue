<template>
<nav class="navbar">
    <ul class="navbar__link">
        <li><router-link :to="{ name: 'first' }">First Screen</router-link></li>
        <li><router-link :to="{ name: 'second' }">Second Screen</router-link></li>
    </ul>
</nav>
</template>

<script>
export default {
    name: "Navbar"
}
</script>

<style scoped>

</style>
