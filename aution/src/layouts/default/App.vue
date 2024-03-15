<script setup>
import Nav from "@/components/header.vue";
import navfooter from "@/components/footer.vue";
</script>

<template>
  <Nav />

  <router-view />
  <navfooter />
</template>
