<script setup lang="ts">
</script>

<template>
  <div  class="h-vh">
      <router-view/>
  </div>
</template>

<style scoped>
.main {
  display: flex;
  justify-content: start;
  height: 90%;
}
.h-vh {
  height: 100vh;
}
@media (min-width: 1024px) {

}
</style>