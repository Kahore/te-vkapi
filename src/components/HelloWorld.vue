<template>
  <div class="hello">
    <button type="button" id="vkLogin">Войти</button>
    <button type="button" id="vkUnLogin">Выйти</button>
    <button type="button" id="vkGetPhotos">Получить фотографии</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld'
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
