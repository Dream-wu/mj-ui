<template>
    <div class="mj-form-item">
      <label class="mj-form-item__label" :style="{width: Form.labelWidth}">{{label}}</label>
      <div class="mj-form-item__content">
        <slot></slot>
      </div>
    </div>
</template>
<script>
export default {
  name: 'MjFormItem',
  inject: ['Form'],
  props: {
    label: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.mj-form-item {
  &::before {
    display: table;
    content: '';
  }
  .mj-form-item__label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
  }
  .mj-form-item__content {
    line-height: 40px;
    position: relative;
    font-size: 14px;
  }
}
</style>
