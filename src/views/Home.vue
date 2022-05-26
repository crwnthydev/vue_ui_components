<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <ComponentsUsage/>
  </div>
</template>

<script>
// @ is an alias to /src
import ComponentsUsage from '@/components/ComponentsUsage.vue'

export default {
  name: 'Home',
  components: {
    ComponentsUsage
  }
}
</script>
