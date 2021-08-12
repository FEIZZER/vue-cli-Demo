<!--
 * @Author: xiao-jie
 * @Date: 2021-08-08 22:45:56
 * @LastEditors: xiao-jie
 * @LastEditTime: 2021-08-12 13:23:59
 * @Description: 
-->
<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb_navi">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <div style="margin-top: 15px;">
        <el-input placeholder="请输入内容" v-model="queryThing" class="input-with-select">
          <el-select v-model="querySelect" slot="prepend" placeholder="请选择">
            <el-option label="用户名" value="1"></el-option>
            <el-option label="订单号" value="2"></el-option>
            <el-option label="用户电话" value="3"></el-option>
          </el-select>
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
        <el-button type="primary">查询</el-button>
      </div>
      <div style="margin-top: 25px">
        <el-table :data="result.users" stripe style="width: 100%" border>
          <el-table-column type="index"></el-table-column>
          <el-table-column prop="id" label="id" width="180"></el-table-column>
          <el-table-column prop="username" label="用户名" width="180"></el-table-column>
          <el-table-column prop="role_name" label="权限"></el-table-column>
          <el-table-column prop="mobile" label="手机号"></el-table-column>
          <el-table-column prop="create_time" label="创建日期"></el-table-column>
          <el-table-column v-slot:default="scope" prop="mg_state" label="状态">
            <el-switch v-model="scope.row.mg_state"></el-switch>
          </el-table-column>
          <el-table-column  label="操作" width="200px">
            <el-button size="mini" type="success" icon="el-icon-edit"></el-button>
            <el-button size="mini" type="primary" icon="el-icon-share"></el-button>
            <el-button size="mini" type="danger" icon="el-icon-delete"></el-button>
          </el-table-column>
        </el-table>
        <div style="margin-top: 30px">
          <el-pagination :page-size="queryInfo.pagesize" :pager-count="11" layout="prev, pager, next" :total="result.total"
                        @current-change="handleCurrentChange">

          </el-pagination>
        </div>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: "UserList",
  created() {
    console.log(this);
    this.getUserList();
  },
  data() {
    return {
      queryData: "",
      queryThing: "",
      querySelect: "",
      queryInfo: {
        query: "",
        pagenum: 1,
        pagesize: 2
      },
      result: {}
    };
  },
  methods: {
    getUserList: function() {
      this.$http.get("users", { params: this.queryInfo }).then(response => {
        let res = response.data;
        console.log(res);
        if (res.meta.status == 200) {
          this.result = res.data;
        } else {
          this.$message({
            type: "error",
            message: res.meta.msg
          });
        }
      });
    },

    handleCurrentChange(newPage) {
        this.queryInfo.pagenum = newPage
        this.getUserList()
    },
  }
};
</script>
<style lang="css" scoped>
.breadcrumb_navi {
  font-size: 12px;
  margin-bottom: 20px;
}
.input-with-select {
  width: 50%;
}
.el-select .el-input {
  width: 130px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
</style>