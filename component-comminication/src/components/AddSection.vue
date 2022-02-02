<template>
  <button class="btn btn-primary" @click="$emit('addUser')">Add User</button>
</template>

<script>
export default {
  props: ["userData"],
};
</script>