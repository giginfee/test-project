<template>
  <div v-if="dataExists" class="flex flex-column justify-content-center mb-3">
    <Card class="w-full mt-5 mb-4" style="width: 25rem; overflow: hidden">
      <template #title
        ><h1 class="text-center mb-0 text-5xl">{{ title }}</h1>
        <Divider></Divider>
      </template>
      <template #content>
        <div class="flex flex-column justify-content-center mt-0">
          <div v-html="text" class="ql-editor mb-3 mt-0"></div>
          <img alt="user header" :src="imageUrl" />
        </div>
      </template>
    </Card>
    <Button
      label="Повернутись до редагування"
      class="w-fit"
      @click="
        () => {
          router.push(`/?key=${route.params.id}`);
        }
      "
    />
  </div>
</template>

<script setup>
import "quill/dist/quill.snow.css";
import { ref } from "vue";
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";
const dataExists = ref(false);
const route = useRoute();
const router = useRouter();
const title = ref("");
const text = ref("");
const imageUrl = ref("");

onMounted(() => {
  const storedData = JSON.parse(localStorage.getItem(String(route.params.id)));
  if (!storedData) {
    router.push("/error");
    return;
  }
  dataExists.value = true;
  title.value = storedData.title;
  text.value = storedData.text;
  imageUrl.value = storedData.imageUrl;
});
</script>

<style scoped></style>
