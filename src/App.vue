<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "App",
    components: {},
};
</script>

<style >
#app {
    width: 100%;
    height: 100%;
}
@import url("./assets/css/reset.css");
.test {
    background: url("@/assets/logo.png");
}
</style>
