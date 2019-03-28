<template>
  <div class="about">
    <h1 v-ooo>This is an about page</h1>
  </div>
</template>
<script>
export default {
  beforeRouteEnter(to, from, next) {
    console.log('Child beforeRouteEnter!')
    next(() => {
      console.log('Child beforeRouteEnter next!');
    })
  },
  beforeRouteUpdate() {
    console.log('Child beforeRouteUpdate!')
  },
  beforeCreate() {
    console.log('Child beforeCreated!')
  },
  created() {
    console.log('Child created!')
  },
  beforeMount() {
    console.log('Child beforeMounted!')
  },
  mounted() {
    console.log('Child mounted!');
    this.$nextTick(() => {
      console.log('nextTick')
    })
  },
  directives: {
    ooo: {
        bind () {
        console.log('指令binding')
      },
      inserted () {
        console.log('指令inserted')
      }
    }
  }
}
</script>

