<template>
    <header>
      <router-link class="logo" to="/">
        <img src="../../../assets/images/logo-white.svg" alt="logotype"/>
      </router-link>
      <nav>
        <router-link to="/">
         Главная
        </router-link>
        |
        <router-link to="/dynamic-route">
        Динамические роуты
        </router-link>
        |
        <router-link to="/demo-vuex">
          Работа со стором
        </router-link>
        |
        <router-link to="/error-page">
          Не сушествующая страница
        </router-link>
      </nav>
    </header>
</template>

<script src="./header.js"></script>

<style scoped src="./header.scss" lang="scss"></style>
