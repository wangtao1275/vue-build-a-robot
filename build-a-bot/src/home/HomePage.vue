<template>
  <div class="home">
    <div>
      <img class="robot" src="../assets/robot-home.png" />
    </div>
    <div class="get-started">
      <router-link to="/build">Get started</router-link>
      building your first robot!
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  created() {
    console.log(process.env.VUE_APP_TEST, process.env.SOME_TEST);
  },
  props: {
    msg: String
  }
};
</script>

<style lang="scss" scoped>
.home {
  text-align: center;
}
.robot {
  height: 300px;
}
.get-started {
  padding-top: 20px;
  font-size: 25px;
}
</style>