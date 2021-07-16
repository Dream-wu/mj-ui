<template>
    <div class="tree">
        <div v-for="item in myData" :key="item.label" class="tree-node" :class="{'is-expanded': item.isShow }">
            <div class="tree-node-ct"  :style="{paddingLeft: level * indent+'px'}" @click.stop="handleClickNode($event, item)">
                <span class="tree-node-ct-icon" v-if="item.children&&item.children.length"></span>
                <span class="tree-node-ct-label">{{item.label}}</span>
            </div>
            <div class="tree-node-children">

            </div>
            <Tree v-show="item.isShow" v-if="item.children&&item.children.length" :data="item.children" :props="props" :indent="indent"/>
        </div>
    </div>
</template>
<script>
const level = 0;
export default {
    name: 'Tree',
    props: {
        data: {
            type: Array,
            default: [],
            required: true
        },
        indent: {
            type: Number,
            default: 18
        },
        props: {
            type: Object,
            validator: (value) => {   // 入参的校验
                if(!value) {
                    let keys =Object.keys(value);
                    return keys.includes('label') && keys.includes('children');
                }
                return true
            },
            default:() => {
                return {
                    label: 'label',
                    children: 'children',
                }  
            }
        }
    },
    data() {
        return {
            myData: this.data.map(r => {
                return {
                    label: r[this.props.label],
                    children: r[this.props.children],
                    isShow: false,
                    level: r.level ? (r.level+1) : 1
                }
            }),
            level: 1
        }
    },
    computed: {
        // myData() {
        //     return this.data.map(r => {
        //         return {
        //             label: r[this.props.label],
        //             children: r[this.props.children],
        //             isShow: false
        //         }
        //     })
        // }
    },
    methods: {
        handleClickNode(e, item) {
            const isShow = item.isShow
            if(item.children) {
                item.isShow = !isShow;
                console.log(item.isShow)
            }
        }
    }
}
</script>
<style lang="less" scoped>
.tree {
    &-node {
        white-space: nowrap;
        outline: none;
        &.is-expanded {
            > .tree-node-ct {
                .tree-node-ct-icon {
                    transform: rotate(135deg);
                }
            }
        }
        &-ct {
            display: flex;
            align-items: center;
            height: 26px;
            cursor: pointer;
            &-icon {
                width: 8px;
                height: 8px;
                margin-right: 16px;
                border-top: 1px solid #c0c4cc;
                border-right: 1px solid #c0c4cc;
                // padding: 6px;
                cursor: pointer;
                color: #c0c4cc;
                font-size: 12px;
                transform: rotate(45deg);
                transition: transform .2s ease-in-out;
            }
        }
        &-children {

        }
    }
}
</style>