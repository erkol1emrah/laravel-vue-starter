<template>
    <div class="app">
        {{ myValue }}
        <navbar></navbar>
        <router-view></router-view>
    </div>
</template>

<script>
import Navbar from "./Navbar";

export default {
    name: "App",
    components: {
        "navbar": Navbar
    },
    computed: {
        myValue () {
            return this.$store.state.myValue;
        }
    }
}
</script>

<style scoped>

</style>
