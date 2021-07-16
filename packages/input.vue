<template>
    <div class="mj-input" :class="{'is-disabled': disabled, 'mj-input--subffix': showSuffix}">
        <input
        :type="showPassword ? (passwordVisible ? 'text' : 'password') :type"
        :name="name"
        :placeholder="placeholder"
        :disabled="disabled"
        :value="value"
        @input="handleInput"
        class="mj-input__inner"/>
        <span class="mj-input__subffix" v-if="showSuffix">
            <i class="mj-input__icon mj-icon-circle-close" v-if="clearable&&value" @click="clear"></i>
            <i class="mj-input__icon mj-icon-view" v-if="showPassword" @click="handlePassoword"></i>
        </span>
    </div>
</template>
<script>
export default {
  name: 'MjInput',
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      passwordVisible: false
    }
  },
  computed: {
    showSuffix () {
      return this.clearable || this.showPassword
    }
  },
  methods: {
    handleInput (e) {
      this.$emit('input', e.target.value)
    },
    clear () {
      this.$emit('input', '')
    },
    handlePassoword () {
      this.passwordVisible = !this.passwordVisible
    }
  }
}
</script>
<style lang="scss" scoped>
.mj-input {
    width: 100%;
    position: relative;
    font-size: 14px;
    display: inline-block;
    &__inner {
        -webkit-appearance: none;
        background-color: #fff;
        background-image: none;
        border-radius: 4px;
        border: 1px solid #dcdfe6;
        box-sizing: border-box;
        color: #606266;
        display: inline-block;
        font-size: inherit;
        height: 40px;
        line-height: 40px;
        outline: none;
        padding: 0 15px;
        transition: border-color .2s cubic-bezier(.645,.045,.355,1);
        width: 100%;
        &:focus {
            outline: none;
            border-color: #409eff;
        }
    }
    &.is-disabled{
        .mj-input__inner {
            background-color: #f5f7fa;
            border-color: #e4e7ed;
            color: #c0c4cc;
            cursor: not-allowed;
        }
    }
}
.mj-input--subffix {
  .mj-input__inner {
    padding-right: 30px;
  }
  .mj-input__subffix {
      position: absolute;
      height: 100%;
      right: 10px;
      top: 0;
      line-height: 40px;
      text-align: center;
      color: #c0c4cc;
      transition: all .3s;
      z-index: 900;
      i{
          color: #c0c4cc;
          font-size: 14px;
          cursor: pointer;
        //   transition: color .2s;
      }
  }
}
</style>
