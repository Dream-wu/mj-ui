<template>
<div class="tree-select">
    <div class="tree-select-box pointer relative">
        <div class="tit" @click.stop="slideSelect($event)">
            <input
                type="text"
                v-model="selectVal"
                :class="{ disable: config.hideSelect }"
                class="select-val input poniter relative pointer block"
                placeholder='请选择'
                readonly/>
        </div>
        <transition
            name="slide"
            enter-active-class="animated fadeInDown"
            leave-active-class="animated fadeOutUp"
        >
        <div class="content common-border absolute" v-show="show" @click.stop="handleClickPanel">
            <!-- <Tree :data="treeData"/> -->
            <el-tree
            ref="tree"
            node-key="id"
            :data="treeData"
            show-checkbox
            @check-change="handleCheckChange">
            </el-tree>
        </div>
        </transition> 
    </div>
</div>
</template>
<script>
import Tree from './tree.vue'
export default {
    name: 'treeSelect',
    props: ['config'],
    data() {
        return {
            selectVal: '',
            show: false,
            // props: {
            //     // label: 'name'
            // },
            treeData: [{
                id: 1,
                label: '一级 1',
                disabled: true,
                children: [{
                    id: 11,
                    label: '二级 1-1',
                    children: [{
                        id: 111,
                        label: '三级 1-1-1'
                    }]
                }]
                }, {
                label: '一级 2',
                id: 2,
                children: [{
                    id: 22,
                    label: '二级 2-1',
                    children: [{
                        id: 222,
                        label: '三级 2-1-1'
                    }]
                }, {
                    id: 23,
                    label: '二级 2-2',
                    children: [{
                        id: 233,
                        label: '三级 2-2-1'
                    }]
                }]
                }, {
                    id: 3,
                label: '一级 3',
                children: [{
                    id: 33,
                    label: '二级 3-1',
                    children: [{
                        id: 333,
                        label: '三级 3-1-1'
                    }]
                }, {
                    id: 3334,
                    label: '二级 3-2',
                    children: [{
                        id: 344,
                        label: '三级 3-2-1'
                    }]
                }]
            }],
        }
    },
    mounted() {
        this.SelectObserve.observe("hide", () => {
            this.show = false;
        });
    },
    methods: {
        slideSelect(e) {
            let _show = this.show;
            setTimeout(() => {
                this.SelectObserve.observe("hide", () => {
                    this.show = false;
                });
                this.show = !_show;
            }, 0);
        },
        handleClickPanel(e) {
            console.log('click panel')
        },
        handleCheckChange(data, checked, indeterminate) {
            console.log(data, checked, indeterminate);
            console.log(this.$refs['tree'].getCurrentNode(false, false));
        },
    },
    components: {
        Tree
    }
}
</script>
<style lang="less" scoped>
@import "../../common/less/config.less";
.tree-select {
    position: relative;
    z-index: 300;
    line-height: 20px;
    height: 30px;
    font-size: 14px;
    &-box {
        width: 220px;
        height: 100%;
        z-index: 300;
        border: 1px solid @borderBaseColor;
        border-radius: 4px;
        &::after {
            position: absolute;
            content: "";
            border-left: 1px solid @borderBaseColor;
            border-bottom: 1px solid @borderBaseColor;
            right: 10px;
            width: 6px;
            height: 6px;
            top: 50%;
            z-index: 1;
            transform: translateY(-70%) rotateZ(-45deg);
        }
        .tit {
            height: 100%;
        }
        .content {
            background-color: @fff;
            width: 220px;
            padding: 0 10px;
            margin-left: -1px;
            top: 30px;
            max-height: 300px;
            overflow-y: auto;
            overflow-x: hidden;
            border: 1px solid @borderBaseColor;
            border-radius: 4px;
        }
    }
}
</style>
