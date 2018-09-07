<template>
  <div id='app'>
    <header/>
    <div class='row'>
      <div class='col-sm-12 col-md-2 col-lg-2'>
        <router-view name="navigate"/>
      </div>
      <div class='col-sm-12 col-md-10 col-lg-10'>
        <transition>
          <router-view/>
        </transition>
        <router-view name="helperview"/>
      </div>
    </div>
    <footer/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
