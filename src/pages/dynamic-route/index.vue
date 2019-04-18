<template>
    <div class="dynamic-route">
      <h1>Динамический роутинг в Nuxt.js</h1>
      <div class="description">
        <p>Nuxt.js автоматически генерирует конфигурацию vue-router согласно структуре файлов в папке pages</p>
        <p>Чтобы создать динамический маршрут с параметром, необходимо определить файл Vue с префиксом "_" (нижнее подчеркивание).</p>
        <p>
          pages/<br/>
          --| dynamic-route/<br/>
          -----| _id/<br/>
          -----| index.vue<br/>
        </p>
        <p> Таким образом Nuxt сгенерирует два роута: /dynamic-route и   /dynamic-route/{id}</p>
        <p>
          <router-link to="/dynamic-route/2019">Динамический роут /2019</router-link>
          <router-link to="/dynamic-route/routeId">Динамический роут /routeId</router-link>
        </p>
      </div>
    </div>
</template>

<script src="./dynamic-route.js"></script>

<style scoped src="./dynamic-route.scss" lang="scss"></style>
