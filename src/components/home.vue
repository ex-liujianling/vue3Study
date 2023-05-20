<template>
    <div>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name: "HelloWorld",
    props: {
        msg: String,
    },
    methods: {
        testss() {},
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
