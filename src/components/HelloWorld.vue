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
      // VK.Auth.login(
      // // callback-функция, которая будет вызвана после авторизации
      //   function (response) {
      //     console.log(response)

      //     if (response.status === 'connected') { // авторизация прошла успешно
      //       var user = response.session.user //  информация о пользователе
      //       /*
      //        user.first_name - имя;
      //        user.last_name - фамилия;
      //        user.href - ссылка на страницу в формате https://vk.com/domain;
      //        user.id  - идентификатор пользователя;
      //        user.nickname -  отчество или никнейм (если указано);
      //        */
      //       this.$store.dispatch('MUTATE_USER', user)
      //     } else if (response.status === 'not_authorized') { // пользователь авторизован в ВКонтакте, но не разрешил доступ приложению;

      //     } else if (response.status === 'unknown') { // пользователь не авторизован ВКонтакте.

      //     }
      //   },
      //   // права доступа (integer)
      //   // допустимые значения:
      //   // AUDIO:8
      //   // FRIENDS:2
      //   // MATCHES:32
      //   // PHOTOS:4
      //   // QUESTIONS:64
      //   // VIDEO:16
      //   // WIKI:128
      //   VK.access.FRIENDS
      // )
    },
    logoutVK () {
      /* eslint-disable-next-line */
      VK.Auth.logout(function (response) {
        console.log(response)
      // {session: null, status: "unknown", settings: undefined}
      })
    },
    getPhotoVK () {
      // const userInfo = this.$store.getters.userInfo
      // VK.Api.call(
      //   'friends.getLists', // название метода API https://vk.com/dev/methods
      //   // параметры:
      //   {
      //     v: '5.73', // версия API (обязательный параметр)
      //     user_id: userInfo.id // количество фотографий
      //   }, function (r) {
      //     var count = r.response.count // кол-во полученных фотографий
      //     var items = r.response.items // массив с фотографиями
      //     console.log("TCL: getPhotoVK -> items", items)
      //   })
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
