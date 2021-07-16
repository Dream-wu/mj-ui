<template>
    <label class="mj-radio" :class="{'is-checked': label===model}">
        <!-- 圆圈 -->
        <span class="mj-radio__input">
            <span class="mj-radio__inner"></span>
            <input type="radio" class="mj-radio__original" :name="name" :value="label" v-model="model"/>
        </span>
        <!-- 文字 -->
        <span class="mj-radio__label" ref="core">
            <!-- 如果么有传内容，就将label当成内容显示 -->
            <slot></slot>
            <template v-if="!$slots.default">{{label}}</template>
        </span>
    </label>
</template>
<script>
export default {
  name: 'MjRadio',
  inject: {
    RadioGroup: {
      default: ''
    }
  },
  props: {
    name: {
      type: String,
      default: ''
    },
    value: null, // 不做校验
    label: {
      type: [String, Number, Boolean],
      default: ''
    }
  },
  computed: {
    model: {
      get () {
        // 可能是自己的value，也可能是radio-group的value
        return this.isGroup ? this.RadioGroup.value : this.value
      },
      set (value) {
        // this.$emit('input', value)
        this.isGroup ? this.RadioGroup.$emit('input', value) : this.$emit('input', value)
      }
    },
    isGroup () {
      // 判定是否被radio-group标签包裹
      return !!this.RadioGroup
    }
  },
  methods: {
    handleClick () {
      this.$emit('input', !this.value)
    }
  }
}
</script>
<style scoped lang="scss">
.mj-radio{
    color: #606266;
    font-weight: 500;
    line-height: 1;
    position: relative;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    outline: none;
    font-size: 14px;
    margin-right: 30px;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    .mj-radio__input {
        white-space: nowrap;
        cursor: pointer;
        outline: none;
        display: inline-block;
        line-height: 1;
        position: relative;
        vertical-align: middle;
        .mj-radio__inner {
            border: 1px solid #dcdfe6;
            border-radius: 100%;
            width: 14px;
            height: 14px;
            background-color: #fff;
            position: relative;
            cursor: pointer;
            display: inline-block;
            box-sizing: border-box;
            // 里面的小圆点
            &::after {
                width: 4px;
                height: 4px;
                border-radius: 100%;
                background-color: #fff;
                content: "";
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%,-50%) scale(0);
                transition: transform .15s ease-in;
            }
        }
        .mj-radio__original {
            opacity: 0;
            outline: none;
            position: absolute;
            z-index: -1;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: 0;
        }
    }
    .mj-radio__label {
        font-size: 14px;
        padding-left: 10px;
    }
    &.is-checked {
        .mj-radio__input {
            .mj-radio__inner {
                border-color: #409eff;
                background-color: #409eff;
                &::after {
                    transform: translate(-50%,-50%) scale(1);
                }
            }
        }
        .mj-radio__label {
            color: #409eff;
        }
    }
}
</style>
