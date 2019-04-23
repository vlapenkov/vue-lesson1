<!--<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-link to="/users">Users</router-link>
    </div>
    <router-view />
  </div>
</template>-->
<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <a class="navbar-brand" href="#">Vue course app</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mr-auto">
          <router-link tag="li" to="/" exact active-class="active">
            <a class="nav-link" href="#">Главная</a>
          </router-link>
          <router-link tag="li" to="/users" exact active-class="active">
            <a class="nav-link" href="#">Список пользователей</a>
          </router-link>
          <router-link tag="li" to="/add" exact active-class="active">
            <a class="nav-link" href="#">Добавить пользователя</a>
          </router-link>
          <router-link tag="li" to="/producers" exact active-class="active">
            <a class="nav-link" href="#">Производители</a>
          </router-link>
        </ul>
      </div>
    </nav>

    <main id="app" role="main" class="container">
      <router-view />
    </main>
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
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
