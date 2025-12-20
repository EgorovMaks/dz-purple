<script lang="ts" setup>
import type { NuxtError } from "#app";

const { error } = defineProps<{
  error: NuxtError;
}>();

const errorMessage = computed(() => {
  if (error.statusCode === 404) {
    return "Страница не найдена, попробуйте перейти на главную страницу";
  } else {
    return error.statusMessage;
  }
});

function doHome() {
  navigateTo("/");
}
</script>

<template>
  <div class="error-page">
    <div class="error-page__container">
      <p class="error-page__code">{{ error.statusCode }}</p>
      <div class="error-page__message">{{ errorMessage }}</div>
      <UiBaseButton @click="doHome">Главная страница</UiBaseButton>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.error-page {
  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  &__code {
    font-weight: 500;
    font-size: 120px;
    color: var(--color-text-primary);
  }
  &__message {
    font-weight: 300;
    font-size: 16px;
    line-height: 150%;
    text-align: center;
    color: var(--color-text-primary);
    margin-bottom: 24px;
  }
  :deep(.ui-base-button) {
    min-width: 304px;
  }
}
</style>
