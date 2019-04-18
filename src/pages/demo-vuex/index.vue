<template>
  <div class="change-background">
    <h1>Работа со стором Vuex</h1>
    <div class="description">
      <p>Демонстрация работы со стором Vuex.</p>
      <h3>Загрузка данных</h3>
      <p v-if="!countriesList.length">При первой загрузке страницы наш стор является пустым</p>
      <button v-if="!countriesList.length" @click="getCountries">Загрузить данные в стор</button>
      <p v-if="countriesList.length"> Теперь мы загрузили список стран</p>
      <ul v-if="countriesList.length">
        <li v-for="(country,index) in countriesList" :key="index"> {{country}}</li>
      </ul>

      <hr />

      <h3>Использование Vuex для модальных окон</h3>
      <p>В хранилище Vuex мы храним три параметра необходимые для модального окна</p>
      <p>show - флаг открытия модального окна. Вызывая action: openModal модуля Vuex modal, этот параметр устанавливается в значение true.
        Если не заданные другие параметры, то содержимое окна будет выводиться по умолчанию</p>
      <button @click="openModal()">Открыть модальное окно</button>

      <p>Параметры title и text задают заголовок и тело сообщения соотвественно.
        И мы можем их менять из любого места приложения вызывая action: setParams модуля Vuex modal и передавая в нем необходимые нам параметры</p>
      <input type="text" placeholder="Заголовок" v-model="modalParams.title"/>
      <textarea placeholder="Тело сообщения"  v-model="modalParams.text"/>
      <label><input v-model="modalParams.show" type="checkbox"/> Открыть окно при применении</label>
      <button @click="setModalParams">Прменить параметры</button>



    </div>

  </div>  
</template>

<script src="./demo-vuex.js"></script>
<style scoped src="./demo-vuex.scss" lang="scss"></style>

