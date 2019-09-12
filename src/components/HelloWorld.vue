<template>
  <div class="hello">
    <button
      type="button"
      @click="loginVK">Войти</button>
      <a href="https://oauth.vk.com/authorize?client_id=7132009&display=page&redirect_uri=https://te-vk.herokuapp.com&scope=friends&response_type=token&v=5.101">Войти</a>
    <button
      type="button"
      @click="logoutVK">Выйти</button>
    <button
      type="button"
     @click="getPhotoVK">Получить список друзей</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  methods: {
    loginVK () {
      var selfVue = this
    },
    logoutVK () {
      /* eslint-disable-next-line */
      VK.Auth.logout(function (response) {
        console.log(response)
      // {session: null, status: "unknown", settings: undefined}
      })
    },
    getPhotoVK () {

    }
  },
  mounted () {
    // VK.init({
    //   apiId: 7132009
    // })
    let hash = window.location.hash
    let arrHash = hash.split('&')
    let arrAccessToken = arrHash[0].split('=')
    let accessToken = arrAccessToken[1]
    console.log('TCL: mounted -> accessToken', accessToken)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
