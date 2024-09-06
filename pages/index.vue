<template>
  <div>
    <div class="flex flex-column align-center">
      <h1 class="mb-4 mt-5 text-700">Створити новину</h1>
      <Card class="w-full">
        <template #content>
          <form>
            <div class="w-7">
              <CustomInput
                v-model="title"
                :showIfInvalid="proceedToSave"
                title="Вкажіть заголовок*"
                :max-length="70"
                :min-length="titleMinLength"
                :showLengthInfo="true"
              />
            </div>
            <div class="mb-3">
              <h3 class="mt-0 pt-0">Вкажіть текст*</h3>
              <Editor
                v-model="text"
                class="w-full"
                @selection-change="
                  ({ range }) => {
                    if (range === null) {
                      isTextUpdated = true;
                    }
                  }
                "
                v-bind:class="{
                  'border-1 border-red-500': text.length === 0 && isTextUpdated,
                }"
                editorStyle="height: 320px"
                ><template v-slot:toolbar>
                  <span v-html="editorButtons"></span>
                </template>
              </Editor>
            </div>
            <CustomInput
              v-model="imageUrl"
              :showIfInvalid="proceedToSave"
              title="Вкажіть посилання до фотографії*"
              :max-length="1200"
              :min-length="1"
              :errorMessage="imageErrorMessage"
              :valid="imageErrorMessage.length === 0"
              @blur="validateImageUrl()"
              @focus="
                () => {
                  imageErrorMessage = '';
                }
              "
            />
            <div class="flex gap-3 mt-1 flex-row-reverse">
              <Button label="Зберегти" disabled />
              <Button
                label="Попередній перегляд"
                severity="secondary"
                @click="preview"
                outlined
              />
            </div>
          </form>
        </template>
      </Card>
    </div>

    <div class="mt-3"></div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import Editor from "primevue/editor";
import CustomInput from "../components/CustomInput.vue";
import editorButtons from "../utils/editorButtons.js";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

const title = ref("");
const text = ref("");
const imageUrl = ref("");

const imageErrorMessage = ref("");
const isTextUpdated = ref(false);
const proceedToSave = ref(false);
const titleMinLength = 5;

let key = route.query.key;

onUpdated(() => {
  key = route.query.key;
  loadData();
});
onMounted(() => {
  loadData();
});

function loadData() {
  const storedData = JSON.parse(localStorage.getItem(key));
  if (!storedData) {
    title.value = "";
    text.value = "";
    imageUrl.value = "";
    return;
  }
  title.value = storedData.title;
  text.value = storedData.text;
  imageUrl.value = storedData.imageUrl;
}
const preview = () => {
  proceedToSave.value = true;
  isTextUpdated.value = true;
  if (validateData() && imageErrorMessage.value.length === 0) {
    let key = saveDataToStorage(title.value, text.value, imageUrl.value);
    router.push(`/preview/${key}`);
    setTimeout(() => {
      localStorage.removeItem(key);
    }, 500000);
  }
};

const saveDataToStorage = (title, text, imageUrl) => {
  if (localStorage.length > 10) localStorage.clear();
  if (!key) key = Date.now().toString();
  localStorage.setItem(key, JSON.stringify({ title, text, imageUrl }));
  return key;
};

const validateData = () => {
  return text.value.length !== 0 && title.value.length >= titleMinLength;
};

const validateImageUrl = () => {
  if (imageUrl.value.trim().length === 0) {
    imageErrorMessage.value = "";
    return;
  }
  const img = new Image();
  img.onload = () => {
    imageErrorMessage.value = "";
  };
  img.onerror = () => {
    imageErrorMessage.value = "Посилання не вказує на зображення.";
  };
  img.src = imageUrl.value;
};
</script>
