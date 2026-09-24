<template>
  <span class="tag"><slot /></span>
</template>

<style scoped>
.tag {
  display: inline-flex;
  padding: var(--zs-layout-tag-padding-y) var(--zs-layout-tag-padding-x);
  border-radius: var(--zs-radius-full);
  border: var(--zs-border-hairline) solid var(--surface-line);
  color: var(--surface-text);
  font-size: var(--zs-font-size-small);
}
</style>
