<template>
  <div>
    <a href="https://oauth.vk.com/authorize?client_id=7132009&display=page&redirect_uri=https://te-vk.herokuapp.com&scope=offline,friends&response_type=token&v=5.101">Войти</a>
    <div v-if="isAuth && !isLoadnig">
      <h3>
        Авторизация под: {{ authUserName }}
      </h3>
      <div v-if="isAuth">
        <div v-for="(friend,index) in friendList" :key="index">
          <a :href="'https://vk.com/id'+friend.id">{{friend.first_name +' ' + friend.last_name}}</a>
        </div>
      </div>
    </div>
    <h4 v-if="isLoadnig">Загружаю данные...</h4>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      isLoadnig: false
    }
  },
  computed: {
    ...mapGetters(['friendList', 'isAuth']),
    authUserName () {
      let user = this.$store.getters.userInfo
      return user.first_name + ' ' + user.last_name
    }
  },
  methods: {
    async _loadData (targetURL) {
      let proxyUrl = 'https://cors-anywhere.herokuapp.com/'
      let response = await fetch(proxyUrl + targetURL)
      let text = await response.text()
      return JSON.parse(text)
    },
    setUserFriend () {
      let userAuth = this.$store.getters.userAuth
      let targetUrl = 'https://api.vk.com/method/friends.get?user_id=' + userAuth.user_id + '&fields=domain&order=hints&count=5&access_token=' + userAuth.access_token + '&v=5.101'
      this._loadData(targetUrl).then(res => {
        this.$store.dispatch('MUTATE_USER_FRIENDS', res)
      })
    },
    setUserInfo () {
      let userAuth = this.$store.getters.userAuth
      let targetUrl = 'https://api.vk.com/method/users.get?user_id=' + userAuth.user_id + '&access_token=' + userAuth.access_token + '&v=5.101'
      this._loadData(targetUrl).then(res => {
        this.$store.dispatch('MUTATE_USER', res)
        this.isLoadnig = false
      })
    },
    getAccessToken () {
      let hash = window.location.hash
      if (hash.length !== 0) {
        let arrHash = hash.split('&')
        let arrAccessToken = arrHash[0].split('=')
        /* eslint-disable-next-line */
        let access_token = arrAccessToken[1]

        let arrUserID = arrHash[2].split('=')
        /* eslint-disable-next-line */
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
    this.isLoadnig = true
    if (localStorage.getItem('vk_auth')) {
      this.$store.dispatch('AUTH_USER', JSON.parse(localStorage.getItem('vk_auth')))
      this.setUserInfo()
      this.setUserFriend()
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
