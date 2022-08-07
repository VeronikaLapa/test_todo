<template>
  <header>
    <div class="header">
      <h1>To do list</h1>
      <button class="plus-button" @click="showModal = true"><img src="../assets/plus.svg" alt="add"/></button>
    </div>
    <ModalDialog v-if="showModal" @close="showModal = false">
      <template v-slot:header>
        <span>Создать новую задачу</span>
      </template>
      <template v-slot:body>
        <label class="label">Описание</label>
        <input type="text"
               :value="newTodo"
               @change="getTodo"
               placeholder="Введите описание"
               class="input">
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
      showModal: false
    }
  },
  methods: {
    getTodo(e){
      this.$store.dispatch('getTodo', e.target.value)
    },
    addTodo(){
      this.$store.dispatch('addTodo')
      this.$store.dispatch('clearTodo')
      this.showModal = false;
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
</style>
