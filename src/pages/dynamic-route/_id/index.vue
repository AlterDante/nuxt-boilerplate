<template>
    <div class="dynamic-id">
      <h1>Динамический роут с параметром id</h1>
      <div class="description">
        <p>Мы можем получить динаммический параметр опреденный в роуте, в нашем случае id. ($route.params.id)</p>
        <h3> Динамический параметр: {{$route.params.id}}</h3>
      </div>

    </div>
</template>

<script src="./id.js"></script>

<style scoped src="./id.scss" lang="scss"></style>
