<template>
<transition name="dialog-fade">
  <div class="mj-dialog__wrapper"  v-show="visible" @click.self="handleClose">
    <div class="mj-dialog" :style="{width, marginTop: top}">
      <div class="mj-dialog__header">
        <slot name="title">
          <span class="mj-dialog__title">{{ title }}</span>
        </slot>
        <button type="button" aria-label="Close" class="mj-dialog__headerbtn" @click="handleClose">
          <i class="mj-dialog__close mj-icon mj-icon-close"></i>
        </button>
      </div>
      <div class="mj-dialog__body">
          <slot></slot>
      </div>
      <div class="mj-dialog__footer" v-if="$slots.footer">
        <slot name="footer">
            <span class="dialog-footer">
                <mj-button @click="handleClose">取 消</mj-button>
                <mj-button type="primary">确 定</mj-button>
            </span>
        </slot>
      </div>
    </div>
  </div>
  </transition>
</template>
<script>
export default {
  name: 'MjDialog',
  props: {
    title: {
      type: String,
      default: '提示'
    },
    width: {
      type: String,
      default: '50%'
    },
    top: {
      type: String,
      default: '15vh'
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClose () {
      console.log('haha')
      this.$emit('update:visible', false)
    }
  }
}
</script>
<style lang="scss" scoped>
.mj-dialog__wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba($color: #000000, $alpha: 0.5);
}
.mj-dialog {
  position: relative;
  margin: 15vh auto 50px;
  background: #fff;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgb(0 0 0 / 30%);
  box-sizing: border-box;
  width: 30%;
}
.mj-dialog__header {
  padding: 20px 20px 10px;
}
.mj-dialog__headerbtn {
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 0;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 16px;
}
.mj-dialog__headerbtn .mj-dialog__close {
  color: #909399;
}
.mj-dialog__body {
  padding: 30px 20px;
  color: #606266;
  font-size: 14px;
  word-break: break-all;
}
.mj-dialog__footer {
  padding: 10px 20px 20px;
  text-align: right;
  box-sizing: border-box;
  ::v-deep .mj-button:first-child {
    margin-right: 15px;
  }
}
// 进入前的样式
.dialog-enter {
  opacity: 0;
}
// 进入后的样式
.dialog-enter-to {
  opacity: 1;
}
.dialog-enter-active {
  transition: all .5s;
}
// 离开前的样式
.dialog-leave {
  opacity: 1;
}
// 离开后的样式
.dialog-leave-to {
  opacity: 0;
}
.dialog-leave-active {
  transition: all .5s;
}
.dialog-fade-enter-active {
  animation: fade .3s;
}
.dialog-fade-leave-active {
  animation: fade .3s reverse;
}
@keyframes fade {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100%{
    opacity: 1;
    transform: translateY(0px);
  }
}
</style>
