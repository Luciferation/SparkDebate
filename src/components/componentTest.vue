<script setup lang="ts">
    const props = defineProps({
        msg: {
            type: String,
            default: "Hi~"
        },
        age: {
            type: Number,
            default: 0
        }
    })
    const emit = defineEmits(["changeMsg"])
    const changeMsg = () => {
        emit("changeMsg", "我是子组件传来的值")
    }
</script>

<template>
    <div>------子组件------</div>
    <div>
        {{ msg }}
    </div>
    <el-button @click="changeMsg">改父组件的值</el-button>
    <div>-----------------</div>
</template>

<style scoped>

</style>