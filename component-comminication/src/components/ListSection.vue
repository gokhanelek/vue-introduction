<template>
  <ul class="list-group mb-2">
    <li
      class="list-group-item list-group-item-action mb-2 p-2 rounded"
      v-for="user in userList"
      :key="user"
    >
      {{ user }}
    </li>
  </ul>
</template>

<script>
export default {
  props: ["userList"],
};
</script>