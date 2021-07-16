<template>
    <div class="mj-form">
        <slot></slot>
    </div>
</template>
<script>
export default {
  name: 'MjForm',
  provide () {
    return {
      Form: this
    }
  },
  props: {
    model: {
      type: Object,
      required: true
    },
    labelWidth: {
      type: String
    }
  }
}
</script>
