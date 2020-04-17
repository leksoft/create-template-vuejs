<template>
  <div id="app">
    <Header></Header>
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
export default {
  name: "app",
  components: {
    Header,
    Footer,
  },
};
</script>

<style></style>
