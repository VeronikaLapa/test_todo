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
  margin: 5% 15%;
}
@media only screen and (max-width: 768px) {
  #app {
    margin: 0;
    font-size: 12px;
  }
}

</style>

