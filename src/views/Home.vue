<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h2>{{ foo }}</h2>
    <input :value="foo" />
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      ...this.mapData({
        foo: "test/foo"
      })
    };
  }
};
</script>
