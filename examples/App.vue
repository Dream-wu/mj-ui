<template>
<div id="app">
  <div class="row">
    <mj-button>按钮</mj-button>
    <mj-button type="primary">按钮</mj-button>
    <mj-button type="info">按钮</mj-button>
    <mj-button type="success">按钮</mj-button>
    <mj-button type="warning">按钮</mj-button>
    <mj-button type="danger">按钮</mj-button>
  </div>
  <div class="row">
    <mj-button plain>按钮</mj-button>
    <mj-button plain type="primary">按钮</mj-button>
    <mj-button plain type="info">按钮</mj-button>
    <mj-button plain type="success">按钮</mj-button>
    <mj-button plain type="warning">按钮</mj-button>
    <mj-button plain type="danger">按钮</mj-button>
  </div>
  <div class="row">
    <mj-button round>按钮</mj-button>
    <mj-button round type="primary">按钮</mj-button>
    <mj-button round type="info">按钮</mj-button>
    <mj-button round type="success">按钮</mj-button>
    <mj-button round type="warning">按钮</mj-button>
    <mj-button round type="danger">按钮</mj-button>
  </div>
  <div class="row">
    <mj-button circle icon="mj-icon-check"></mj-button>
    <mj-button circle type="primary" icon="mj-icon-check"></mj-button>
    <mj-button circle type="info" icon="mj-icon-check"></mj-button>
    <mj-button circle type="success" icon="mj-icon-check"></mj-button>
    <mj-button circle type="warning" icon="mj-icon-delete"></mj-button>
    <mj-button circle type="danger" icon="mj-icon-close"></mj-button>
  </div>
  <div class="row">
    <mj-button :disabled="true">按钮</mj-button>
    <mj-button disabled type="primary">按钮</mj-button>
    <mj-button disabled type="info">按钮</mj-button>
    <mj-button disabled type="success">按钮</mj-button>
    <mj-button disabled type="warning">按钮</mj-button>
    <mj-button disabled type="danger">按钮</mj-button>
  </div>
  <div class="row">
    <mj-button type="primary" @click="visible=true">按钮</mj-button>
    <mj-dialog title="温馨提示" top="100px" width="500px" :visible.sync="visible">
      <template v-slot:footer>
        <mj-button @click="close(false)">取 消</mj-button>
        <mj-button type="primary">确 定</mj-button>
      </template>
    </mj-dialog>
  </div>
  <div class="row">
    <mj-input placeholder="请输入" style="marin-right:10px" v-model="username"/>
    <mj-input placeholder="请输入" :disabled="true"/>
    <mj-input placeholder="请输入" disabled/>
    <mj-input placeholder="请输入" clearable v-model="inputValue"/>
    <mj-input placeholder="请输入" type="password" showPassword v-model="inputValue2"/>
  </div>
  <div class="row">
    <mj-switch v-model="active" active-color="green" inactive-color="red" name="switch"></mj-switch>
  </div>
  <div class="row">
    <mj-radio :name="radioName" label="1" v-model="gender">女生</mj-radio>
    <mj-radio :name="radioName" label="2" v-model="gender">男生</mj-radio>
  </div>
  <div class="row">
    <mj-radio-group v-model="gender">
      <mj-radio label="1">女生</mj-radio>
      <mj-radio  label="2">男生</mj-radio>
    </mj-radio-group>
  </div>
  <div class="row">
    <mj-checkbox v-model="checkboxValue">女生</mj-checkbox>
  </div>
  <div class="row">
    <mj-checkbox-group v-model="checkboxList">
      <mj-checkbox label="吃饭"></mj-checkbox>
      <mj-checkbox label="喝酒"></mj-checkbox>
      <mj-checkbox label="打麻将"></mj-checkbox>
      <mj-checkbox label="逛街"></mj-checkbox>
    </mj-checkbox-group>
  </div>
  <div class="row">
    <mj-form :model="model" label-width="100px">
      <mj-form-item label="用户名">
        <mj-input placeholder="请输入" clearable v-model="model.name"/>
      </mj-form-item>
      <mj-form-item label="是否参加">
        <mj-switch v-model="model.active" active-color="green" inactive-color="red"></mj-switch>
      </mj-form-item>
    </mj-form>
  </div>
</div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      visible: false,
      username: '',
      inputValue: '',
      inputValue2: '',
      active: false,
      radioName: 'sex',
      gender: '2',
      checkboxValue: true,
      checkboxList: ['吃饭', '喝酒', '逛街'],
      model: {
        name: '',
        active: false
      }
    }
  },
  methods: {
    close (value) {
      this.visible = value
      console.log('visible', this.visible)
    }
  }
}
</script>

<style lang="scss">
#app {
  .row {
    margin-bottom: 20px;
    >.mj-button {
      margin-right: 10px;
    }
  }
  .mj-input {
    width: 180px;
  }
}

</style>
