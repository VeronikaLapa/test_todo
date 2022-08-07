<template>
  <div class="table-bar">
    <div class="search">
      <label>
        <img src="../assets/search.svg" class="search-icon"/>
      </label>
      <input type="search" placeholder="Поиск ID, Имени, статуса или даты" @input="onChangeSearch($event)" :value="searchValue">
    </div>
    <div>
      <label>Сортировать по:</label>
      <select @change="onChangeOrder($event)" >
        <option key="date" value="date" :selected="orderValue === 'date'">Дата</option>
        <option key="status" value="status" :selected="orderValue === 'status'">Статус</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskTableBar",
  methods: {
    onChangeOrder(event) {
      this.$store.dispatch("setOrder", event.target.value);
    },
    onChangeSearch(event) {
      this.$store.dispatch("setSearch", event.target.value);
    },
  },
  computed: {
    searchValue() {
      return this.$store.getters.getSearch;
    },
    orderValue() {
      return this.$store.getters.getOrder;
    }
  }
}
</script>

<style scoped>

.table-bar {
  display: flex;
  justify-content: space-between;
  min-width: 460px;
}

select {
  border: none;
  margin-left: 5px;
}
.search-icon {
  width: 18px;
}
.search {
  display: flex;
}
.search input {
  border: none;
  width: 250px;
  margin-left: 5px;
}
.search input:focus {
  outline: none;
}
</style>
