<template>
  <div>
    <el-input v-model="msg"></el-input>
    test{{msg}}
  </div>
</template>
<script>
export default {
  name: 'test',
  data() {
    return {
      msg: '123'
    }
  }
}
</script>
