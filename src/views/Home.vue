<template>
  <div class="home">
    <div class="d1">
    </div> 
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
<style scoped>
.d1 {
  width: 3.75rem;
  height: 3.75rem;
  background-color: lightskyblue;
}
</style>
