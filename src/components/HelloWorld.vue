<template>
  <div class="hello">
    <button
      type="button"
      @click="loginVK">Войти</button>
    <button
      type="button"
      @click="logoutVK">Выйти</button>
    <button
      type="button"
     @click="getPhotoVK">Получить фотографии</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  methods: {
    loginVK () {
      VK.Auth.login(
      // callback-функция, которая будет вызвана после авторизации
      function (response) {
 
        console.log(response)
 
        if (response.status === 'connected') { // авторизация прошла успешно
 
          var user = response.session.user; //  информация о пользователе
            /*
             user.first_name - имя;
             user.last_name - фамилия;
             user.href - ссылка на страницу в формате https://vk.com/domain;
             user.id  - идентификатор пользователя;
             user.nickname -  отчество или никнейм (если указано);
             */
 
        } else if (response.status === 'not_authorized') { // пользователь авторизован в ВКонтакте, но не разрешил доступ приложению;
 
        } else if (response.status === 'unknown') { // пользователь не авторизован ВКонтакте.
 
        }
 
      },
      // права доступа (integer)
      // допустимые значения:
      // AUDIO:8
      // FRIENDS:2
      // MATCHES:32
      // PHOTOS:4
      // QUESTIONS:64
      // VIDEO:16
      // WIKI:128
      VK.access.PHOTOS
      );
    },
    logoutVK () {
      VK.Auth.logout(function (response) {
      console.log(response);
      // {session: null, status: "unknown", settings: undefined}
      });
    },
    getPhotoVK () {
      VK.Api.call(
      'photos.getAll', // название метода API https://vk.com/dev/methods
      // параметры:
      {
        v: '5.73', // версия API (обязательный параметр)
        count: 10 // количество фотографий
      }, function (r) {
 
        var count = r.response.count; // кол-во полученных фотографий
        var items = r.response.items; // массив с фотографиями
 
 
 
      });
    }
  },
  mounted () {
     VK.init({
      apiId: 7132009
    });
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
