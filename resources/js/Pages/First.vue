<template>
    <div>
        <h2>First Screen</h2>
        <button @click="increase">+10</button>
    </div>
</template>

<script>
export default {
    name: "First",
    methods: {
        increase() {
            this.$store.commit("increase", 10);
        }
    }
}
</script>

<style scoped>

</style>
