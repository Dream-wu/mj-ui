<template>
    <div class="mj-switch" @click="handleClick" :class="{'is-checked': value}">
        <input type="checkbox" class="mj-switch__input" :name="name" ref="input"/>
        <span class="mj-switch__core" ref="core">
            <span class="mj-switch__button"></span>
        </span>
    </div>
</template>
<script>
export default {
  name: 'MjSwitch',
  props: {
    name: {
      type: String,
      default: ''
    },
    value: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: 'text'
    },
    inactiveColor: {
      type: String,
      default: 'text'
    }
  },
  mounted () {
    this.setColor()
    this.$refs.input.checked = this.value
  },
  methods: {
    async handleClick () {
      this.$emit('input', !this.value)
      await this.$nextTick()
      this.setColor()
      this.$refs.input.checked = this.value
    },
    setColor () {
      if (this.activeColor || this.inactiveColor) {
        const color = this.value ? this.activeColor : this.inactiveColor
        this.$refs.core.style.borderColor = color
        this.$refs.core.style.backgroundColor = color
      }
    }
  }
}
</script>
<style scoped lang="scss">
.mj-switch{
    display: inline-flex;
    align-items: center;
    position: relative;
    font-size: 14px;
    line-height: 20px;
    height: 20px;
    vertical-align: middle;
    .mj-switch__input {
        position: absolute;
        width: 0;
        height: 0;
        opacity: 0;
        margin: 0;
    }
    .mj-switch__core {
        margin: 0;
        display: inline-block;
        position: relative;
        width: 40px;
        height: 20px;
        border: 1px solid #dcdfe6;
        outline: none;
        border-radius: 10px;
        box-sizing: border-box;
        background: #dcdfe6;
        cursor: pointer;
        transition: border-color .3s,background-color .3s;
        vertical-align: middle;
        .mj-switch__button {  // 小圆点
            position: absolute;
            top: 1px;
            left: 1px;
            border-radius: 100%;
            transition: all .3s;
            width: 16px;
            height: 16px;
            background-color: #fff;
        }
    }
    &.is-checked {
        .mj-switch__core {
            border-color: #409eff;
            background-color: #409eff;
            .mj-switch__button {
                // left: 100%;
                // margin-left: -17px;
                transform: translateX(20px);
            }
        }
    }
}
</style>
