<template>
  <div class="hello">
    <button
      type="button"
      @click="loginVK">Войти</button>
      <a href="https://oauth.vk.com/authorize?client_id=7132009&display=page&redirect_uri=https://te-vk.herokuapp.com&scope=offline,friends&response_type=token&v=5.101">Войти</a>
    <button
      type="button"
      @click="logoutVK">Выйти</button>
    <button
      type="button"
     @click="getUserFriends">Получить список друзей</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  methods: {
    loginVK () {
      // var selfVue = this
    },
    logoutVK () {
      /* eslint-disable-next-line */
      VK.Auth.logout(function (response) {
        console.log(response)
      // {session: null, status: "unknown", settings: undefined}
      })
    },
    async getUserFriends () {
      let userAuth = this.$store.getters.userAuth
      var proxyUrl = 'https://cors-anywhere.herokuapp.com/'
      // targetUrl = 'https://api.vk.com/method/users.get?user_id='+userAuth.user_id+'&access_token='+userAuth.access_token+'&v=5.101'
      var targetUrl = 'https://api.vk.com/method/friends.get?user_id=' + userAuth.user_id + '&fields=domain&order=hints&count=5&access_token=' + userAuth.access_token + '&v=5.101'
      let response = await fetch(proxyUrl + targetUrl)

      let text = await response.text()
      console.log('TCL: getPhotoVK -> text', text)
      this.$store.dispatch('MUTATE_USER_FRIENDS', text.response.items)
    },
    async getUserInfo () {
      let userAuth = this.$store.getters.userAuth
      var proxyUrl = 'https://cors-anywhere.herokuapp.com/'
      var targetUrl = 'https://api.vk.com/method/users.get?user_id=' + userAuth.user_id + '&access_token=' + userAuth.access_token + '&v=5.101'
      let response = await fetch(proxyUrl + targetUrl)

      let text = await response.text()
      console.log('TCL: getPhotoVK -> text', text)
      this.$store.dispatch('MUTATE_USER', text.response[0])
    },
    getAccessToken () {
      let hash = window.location.hash
      if (hash.length !== 0) {
        let arrHash = hash.split('&')
        let arrAccessToken = arrHash[0].split('=')
        let access_token = arrAccessToken[1]

        let arrUserID = arrHash[2].split('=')
        let user_id = arrUserID[1]
        let data = {
          access_token,
          user_id
        }
        this.$store.dispatch('AUTH_USER', data)
        window.history.pushState({}, null, 'https://te-vk.herokuapp.com')
      }
    }
  },
  mounted () {
    // VK.init({
    //   apiId: 7132009
    // })
    if (localStorage.getItem('vk_auth')) {
      this.$store.dispatch('AUTH_USER', JSON.parse(localStorage.getItem('vk_auth')))
    } else {
      this.getAccessToken()
    }
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
