<template>
  <div class="d-flex flex-column section">
    <input type="text" class="form-control mb-2" v-model="userData" />
    <hr />
    <ListSection :userList="userList" />
    <AddSection @addUser="$emit('addUser', userData)" />
  </div>
</template>

<script>
import ListSection from "./ListSection.vue";
import AddSection from "./AddSection.vue";

export default {
  components: {
    ListSection,
    AddSection,
  },
  props: ["userList"],
};
</script>
<style>
.section {
  width: 90%;
}
</style>