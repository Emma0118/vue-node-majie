<style>

</style>
<template>
    <section>
        <!--工具条-->
        <el-col :span="24" class="toolbar" style="padding-bottom: 0px">
            <el-form :inline="true" :model="filters">
                <el-form-item>
                    <el-input :model="filters.name" placeholder="姓名"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="getUser">查询</el-button>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="addUser">新增</el-button>
                </el-form-item>
            </el-form>
        </el-col>
        <!--列表-->
        <el-table :data="users">
            <el-table-column type="selection" width="55">
            </el-table-column>
            <el-table-column type="index" width="60">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="120" sortable>
            </el-table-column>
            <el-table-column prop="sex" label="性别" width="100" sortable>
            </el-table-column>
            <el-table-column prop="age" label="年龄" width="100" sortable>
            </el-table-column>
            <el-table-column prop="birth" label="生日" width="120" sortable>
            </el-table-column>
            <el-table-column prop="addr" label="地址" min-width="180" sortable>
            </el-table-column>

            <el-table-column label="操作" width="150">
                <template>
                    <el-button size="small">编辑</el-button>
                    <el-button type="danger" size="small">删除</el-button>
                </template>
            </el-table-column>

        </el-table>

    </section>
</template>

<script>
    import util from '@/common/js/util.js'
    import { getUserListPage } from '../../api/index'
    export default {
        data() {
            return {
                filters: {
                    name: ''
                },
                users: []
            }
        },
        methods: {
            getUSerList() {

            },
            getUser() {
                alert('getUSer')
            },
            addUser() {
                alert('addUSer')
            }
        },
        mounted() {
            getUserListPage({
                page: 1,
                name: ''
            })
        }

    }

</script>
