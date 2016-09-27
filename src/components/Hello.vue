<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
module.exports = {
  data: function () {
    return {
      msg: 'Hello '  + '!'
    }
  },
  ready: function () {
    this.getUserinfo();
  },
  methods: {
    getUserinfo: function () {
      var code = this.$route.query.code || '';

      this.$http.get('/wx/oauth2/getUserInfo', { params: {code} }).then((response) => {
        this.msg = response.body.nickname || 'Hello world!'
      })
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
