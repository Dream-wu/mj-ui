<template>
    <div class="mj-checkbox-group">
        <slot></slot>
    </div>
</template>
<script>
export default {
  name: 'MjCheckboxGroup',
  props: {
    value: {
      type: Array
    }
  },
  provide () {
    return {
      CheckboxGroup: this
    }
  }
}
</script>
