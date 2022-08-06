<template>
  <TodoList class="app blur"/>
</template>

<script>
import TodoList from "@/components/TodoList";

export default {
  name: 'App',
  components: {
    TodoList
  }
}
</script>

<style>
#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  margin: 100px 150px;
}

</style>

