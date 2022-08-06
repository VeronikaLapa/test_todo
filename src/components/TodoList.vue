<template>
  <TodoListHeader/>
  <div class="table_container">
    <TaskTableBar />
    <TaskTable />
  </div>
</template>

<script>
import TodoListHeader from "@/components/TodoListHeader";
import TaskTable from "@/components/TaskTable";
import TaskTableBar from "@/components/TaskTableBar";
export default {
  name: "TodoList",
  components: {TaskTable, TodoListHeader, TaskTableBar}
}
</script>

<style scoped>
</style>
