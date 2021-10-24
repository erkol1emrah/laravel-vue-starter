<template>
<div>
    <h2>Second Screen</h2>
    <button @click="decrease">-1</button>
</div>
</template>

<script>
export default {
    name: "Second",
    methods: {
        decrease() {
            this.$store.commit("decrease", 1);
        }
    }
}
</script>

<style scoped>

</style>
