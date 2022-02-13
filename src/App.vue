<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  <header>
    <h1 class="title">上智E.S.S.ディスカッション</h1>
    <div class="headerRight">
      <div class="content"><router-link to="/hello">登録表</router-link></div>
    </div>
    <router-link to="/" />
  </header>
  <div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
