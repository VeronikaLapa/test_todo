<template>
  <header>
    <div class="header">
      <h1>To do list</h1>
      <button class="plus-button" @click="showModal = true"><img src="../assets/plus.svg" alt="add"/></button>
    </div>
    <ModalDialog v-if="showModal" @close="close">
      <template v-slot:header>
        <span>Создать новую задачу</span>
      </template>
      <template v-slot:body>
        <label class="label">Описание</label>
        <input type="text"
               :value="newTodo"
               @input="getTodo"
               placeholder="Введите описание"
               class="input"
               @keyup.enter="addTodo">
        <div v-if="showError" class="error-message">Описание не может быть пустым</div>
      </template>
      <template v-slot:footer>
        <button class="create-button" @click="addTodo">
          Создать
        </button>
      </template>
    </ModalDialog>
  </header>
</template>

<script>
import ModalDialog from "@/components/ModalDialog";
export default {
  name: "TodoListHeader",
  components: {ModalDialog},
  data: () => {
    return {
      showModal: false,
      showError: false
    }
  },
  methods: {
    getTodo(e){
      this.showError = false;
      this.$store.dispatch('getTodo', e.target.value);
    },
    hideError() {
      this.showError = false;
    },
    addTodo(){
      if (this.$store.getters.newTodo !== '') {
        this.$store.dispatch('addTodo')
        this.$store.dispatch('clearTodo')
        this.showModal = false;
      } else {
        this.showError = true;
      }
    },
    close() {
      this.showModal = false;
      this.showError = false;
      this.$store.dispatch('clearTodo');
    }
  },
  computed: {
    newTodo(){
      return this.$store.getters.newTodo
    }
  }
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
}
.plus-button {
  border: none;
  background: none;
  width: 40px;
  height: 40px;
  cursor: pointer;
}
.label {
  width: 100%;
}

.create-button {
  background-color: #F0F5FF;
  color: #134EC1;
  border:none;
  border-radius: 4px;
  margin: auto;
  width: 35%;
  height: 40px;
  cursor: pointer;
}
.input {
  outline: none;
  border: 1px solid #DDE2E4;
  height: 30px;
  margin-top: 3px;
  padding-left: 12px;
  border-radius: 5px;
  width: 285px;
}
.create-button:hover {
  transform: scale(1.05);
  transition: transform 0.3s;
}
.error-message {
  background-color: #ff9e9e;
  color: #7d0b0b;
  border: solid #b63d3d 1px;
  border-radius: 4px;
  text-align: center;
  padding: 5px;
  margin: 5px 0;
}
</style>
