<template>
  <div class="w-full flex align-items-center flex-column">
    <header
      class="w-full h-4rem flex align-items-center justify-content-center bg-primary"
    >
      <div
        class="w-8 pt-3 pb-3 pl-4 flex align-items-center justify-content-between"
      >
        <h1 class="font-italic">News</h1>
        <Button
          @click="
            () => {
              router.push('/');
            }
          "
          label="Створити новину"
          class="m-20 bg-primary-reverse"
        />
      </div>
    </header>
    <div class="w-8">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";

// Access the router
const router = useRouter();

// Access the current route
</script>
