<template>
  <table class="table">
    <thead>
    <th class="col__check"/>
    <th class="col__description">Описание</th>
    <th class="col__status">Статус</th>
    <th class="col__date">Дата</th>
    </thead>
    <tbody>
    <tr>
      <td class="checkbox_container">
        <CheckBox class="checkbox"/>
      </td>
      <td>
        Описание задачи
      </td>
      <td>
        In progress
      </td>
      <td>
        01.01.2020
      </td>
    </tr>
    <tr>
      <td class="checkbox_container">
        <CheckBox class="checkbox"/>
      </td>
      <td>
        Описание задачи
      </td>
      <td>
        In progress
      </td>
      <td>
        01.01.2020
      </td>
    </tr>
    <tr>
      <td class="checkbox_container">
        <CheckBox class="checkbox"/>
      </td>
      <td>
        Описание задачи
      </td>
      <td>
        In progress
      </td>
      <td>
        01.01.2020
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
import CheckBox from "@/components/CheckBox";
export default {
  name: "TaskTable",
  components: {CheckBox}
}
</script>

<style scoped>
.table {
  width: 100%;
  margin: 30px 0;
}
.table tbody:before {
  content: "-";
  display: block;
  line-height: 16px;
  visibility: hidden;
}
.table, th, td, tr{
  border-collapse: collapse;
}
.table th, .table td {
  text-align: start;
  padding: 0 10px;
}
.table th {
  border-left: 1px solid #C4C4C4;
  font-weight: normal;
}
.table th:first-child {
  border-left: none;
}
.table tr {
  border-bottom: 1px solid #C4C4C4;
  height: 58px;
}
.table tr:first-child {
  border-top: 1px solid #C4C4C4;
}

.checkbox_container {
  display: flex;
  height: 58px;
  justify-content: center;
  align-items: center;
}
.checkbox {

}

.col__check {
  width: 6%;
}
.col__description {
  margin-left: 20px;
  width: 75%;
}
.col__status {
  width: 10%;
}
.col__date {

}
</style>
