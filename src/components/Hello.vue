<template>
  <div class="hello">
    <h1>{{$route.params.nickname}}</h1>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
module.exports = {
  data: function () {
    return {
      msg: 'Hello world!'
    }
  },
  ready: function () {
    this.getUserinfo();
  },
  methods: {
    getUserinfo: function () {
      if(sessionStorage.getItem("nickname")){
        this.msg = "Hello " + sessionStorage.getItem("nickname") + "!"
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    color: #42b983;
  }
</style>
