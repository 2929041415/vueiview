<template>
  <div>
    <Table :data="tableData1" :columns="tableColumns1" stripe></Table>
    <div style="margin: 10px;overflow: hidden">
      <div style="float: right;">
        <Page :total="100" :current="1" @on-change="changePage"></Page>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        tableData1: this.mockTableData1(),
        tabledatas:[],
        tableColumns1: [
          {
            title: '登录帐号',
            key: 'loginaccount'
          }
        ]
      }
    },
    methods: {
      mockTableData1 () {
        let data=[];
        this.$apipro.findLoginlogInit({id:''});
        return data;
      },
      formatDate (date) {
        const y = date.getFullYear();
        let m = date.getMonth() + 1;
        m = m < 10 ? '0' + m : m;
        let d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        return y + '-' + m + '-' + d;
      },
      changePage () {
        // 这里直接更改了模拟的数据，真实使用场景应该从服务端获取数据
        this.tableData1 = this.mockTableData1();
      }
    }
  }
</script>
