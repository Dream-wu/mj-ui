<template>
    <label class="mj-checkbox" :class="{'is-checked': isChecked}">
        <!-- 圆圈 -->
        <span class="mj-checkbox__input">
            <span class="mj-checkbox__inner"></span>
            <input type="checkbox" class="mj-checkbox__original" :name="name" :value="label" v-model="model"/>
        </span>
        <!-- 文字 -->
        <span class="mj-checkbox__label" ref="core">
            <!-- 如果么有传内容，就将label当成内容显示 -->
            <slot></slot>
            <template v-if="!$slots.default">{{label}}</template>
        </span>
    </label>
</template>
<script>
export default {
  name: 'MjCheckbox',
  inject: {
    CheckboxGroup: {
      default: ''
    }
  },
  props: {
    name: {
      type: String,
      default: ''
    },
    value: null, // 不做校验 绑定值v-model
    checked: { // 当前是否勾选
      type: Boolean,
      default: false
    },
    label: {
      type: [String, Number, Boolean],
      default: ''
    }
  },
  computed: {
    model: {
      get () {
        // 可能是自己的value，也可能是checkbox-group的value
        return this.isGroup ? this.CheckboxGroup.value : this.value
      },
      set (value) {
        // 判定是否被checkbox-group标签包裹
        this.isGroup ? this.CheckboxGroup.$emit('input', value) : this.$emit('input', value)
      }
    },
    isGroup () {
      // 判定是否被checkbox-group标签包裹
      return !!this.CheckboxGroup
    },
    isChecked () {
      if (this.isGroup) {
        return this.model.includes(this.label)
      }
      return this.model
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
.mj-checkbox{
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
    .mj-checkbox__input {
        white-space: nowrap;
        cursor: pointer;
        outline: none;
        display: inline-block;
        line-height: 1;
        position: relative;
        vertical-align: middle;
        .mj-checkbox__inner {
            display: inline-block;
            position: relative;
            border: 1px solid #dcdfe6;
            border-radius: 2px;
            box-sizing: border-box;
            width: 14px;
            height: 14px;
            background-color: #fff;
            z-index: 1;
            transition: border-color .25s cubic-bezier(.71,-.46,.29,1.46),background-color .25s cubic-bezier(.71,-.46,.29,1.46);
            // 里面的小圆点
            &::after {
                box-sizing: content-box;
                content: "";
                border: 1px solid #fff;
                border-left: 0;
                border-top: 0;
                height: 7px;
                left: 4px;
                position: absolute;
                top: 1px;
                transform: rotate(45deg) scaleY(0);
                width: 3px;
                transition: transform .15s ease-in .05s;
                transform-origin: center;
            }
        }
        .mj-checkbox__original {
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
    .mj-checkbox__label {
        font-size: 14px;
        padding-left: 10px;
    }
    &.is-checked {
        .mj-checkbox__input {
            .mj-checkbox__inner {
                border-color: #409eff;
                background-color: #409eff;
                &::after {
                    transform: rotate(45deg) scaleY(1);
                }
            }
        }
        .mj-checkbox__label {
            color: #409eff;
        }
    }
}
</style>
