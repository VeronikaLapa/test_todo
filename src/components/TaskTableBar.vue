<template>
  <div class="table-bar">
    <div class="search">
      <label>
        <img src="../assets/search.svg" class="search-icon"/>
      </label>
      <input type="search" placeholder="Поиск ID, Имени, статуса или даты" @input="onChangeSearch($event)">
    </div>
    <div>
      <label>Сортировать по:</label>
      <select @change="onChangeOrder($event)">
        <option key="date" value="date">Дата</option>
        <option key="status" value="status">Статус</option>
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
  }
}
</script>

<style scoped>

.table-bar {
  display: flex;
  justify-content: space-between;
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
}
.search input:focus {
  outline: none;
}
</style>
