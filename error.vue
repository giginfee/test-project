<template>
  <div
    class="flex-1 flex flex-column justify-content-center align-items-center h-full gap-4"
  >
    <h1 class="p-text-center text-6xl">404 - Сторінка не знайдена</h1>
    <Button
      label="Повернутись на головну сторінку"
      class="p-button-primary"
      @click="goHome"
    />
  </div>
</template>

<script>
export default {
  name: "error",
  methods: {
    goHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped></style>
