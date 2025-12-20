<template>
  <button class="ui-base-button">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.ui-base-button {
  background: var(--color-bg-button);
  border-radius: 20px;
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  color: var(--color-text-white);
  padding: 11px 40px;
}
</style>
