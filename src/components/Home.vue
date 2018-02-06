<style>

</style>
<template>
   <el-row class="container">
       <el-col :span="24" class="header">
           <el-col :span="10" class="logo" :class="collapsed? 'logo-collapsed-width' : 'logo-width'">
               {{collapsed? '': sysName}}
           </el-col>
           <el-col :span="10">
               <div class="tools" @click.prevent="collapse"></div>
               <i class="fa fa-align-justify"></i>
           </el-col>
           <el-col :span="4" class="userinfo"></el-col>
       </el-col>
       <el-col :span="24"></el-col>
   </el-row>
</template>

<script>
    export default {
        data() {
            return {
                collapsed: false,
                sysName: 'VUEADMIN'
            }
        },
        methods: {
            collapse() {
                this.collapsed = !this.collapsed
            }
        }
    }

</script>
