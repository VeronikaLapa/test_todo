<template>
  <TodoListHeader/>
  <div class="table_container">
    <div class="table-bar">
      <div class="search">
        <label>
          <img src="../assets/search.svg" class="search-icon"/>
        </label>
        <input type="search" placeholder="Поиск ID, Имени, статуса или даты">
      </div>
      <div>
        <label>Сортировать по:</label>
        <select>
          <option>Дата</option>
          <option>Статус</option>
        </select>
      </div>
    </div>
    <TaskTable />
  </div>
</template>

<script>
import TodoListHeader from "@/components/TodoListHeader";
import TaskTable from "@/components/TaskTable";
export default {
  name: "TodoList",
  components: {TaskTable, TodoListHeader}
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
