<template>
  <div class="lm-file-upload">
    <template v-if="!itemsAdded">
      <slot name="files">
        <div class="lm-file-upload--title upload">UPLOAD</div>
        <div class="lm-file-upload--desc">JPG, PNG</div>
      </slot>
    </template>
  </div>
</template>

<script>
export default {}
</script>
