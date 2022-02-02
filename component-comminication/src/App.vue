<template>
  <div
    class="
      container
      d-flex
      flex-column
      justify-content-center
      align-items-center
      mt-5
    "
  >
    <h1>User List</h1>
    <UserSection :userList="userList" @addUser="addUser($event)" />
  </div>
</template>

<script>
import UserSection from "./components/UserSection.vue";
export default {
  components: {
    UserSection,
  },
  data() {
    return {
      userList: ["Gökhan", "Zafer", "Neslihan"],
    };
  },
  methods: {
    addUser(user) {
      return this.userList.push(user);
    },
  },
};
</script>
<style scoped>
.container {
  width: 500px;
}
</style>