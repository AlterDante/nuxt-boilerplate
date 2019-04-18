<template>
    <div class="error-page">
     <h1>Произошла ошибка рендеринга страницы</h1>
        <p>Это универсальный шаблон ошибки, находиться он /layouts/error.vue</p>
    </div>
</template>

<script>
export default {
  name: 'error',
}
</script>

<style scoped lang="scss">
.error-page{
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
