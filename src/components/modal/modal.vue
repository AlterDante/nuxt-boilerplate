<template>
  <transition name="scale">

  <div class="modal-overlay"  v-if="showModal">
      <div class="modal">
        <div class="title">
          {{title}}
        </div>
        <div class="content">
          {{text}}
        </div>
        <hr/>
        <p> Что бы закрыть окно нам необходимо параметр show установить в false, для этого мы вызываем  action: closeModal модуля Vuex modal </p>
        <hr/>
        <div class="actions">
          <button @click="closeModal">
            Закрыть
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script src="./modal.js"></script>

<style scoped src="./modal.scss" lang="scss"></style>
