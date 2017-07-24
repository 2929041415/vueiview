<template>
  <div class="systemlogintable">
    <Table :data="tableData1" :columns="tableColumns1" stripe border ></Table>
    <div style="margin: 10px;overflow: hidden">
      <div style="float: right;">
        <Page :total="total" :current="currentpage"  :show-elevator="true" :show-total="true" :show-sizer="true"  @on-change="changePage" @on-page-szie-change="choospagesize"></Page>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        tableData1:[],
        tabledatas:[],
        total:1,
        currentpage:1,
        pageSzie:10,
        tableColumns1: [
          {
            title: '登录帐号',
            key: 'loginaccount'
          },
          {
            title: '登录姓名',
            key: 'loginname'
          },
          {
            title: '所属学校',
            key: 'loginschool'
          },
          {
            title: '登录ip',
            key: 'loginip'
          },
          {
            title: '登录系统',
            key: 'loginapp'
          },
          {
            title: '登录时间',
            key: 'createtime'
          },
          {
            title: '登录结果',
            key: 'loginresult'
          },
        ]
      }
    },
    created:function(){
      this.getpageData('/api/uums/loginlog/findLoginlogInit',{id:'',pageNum:this.currentpage,pageSzie:this.pageSzie});
    },
    methods: {
      changePage (pageNum) {
        this.currentpage=pageNum;
        this.getpageData('/api/uums/loginlog/findLoginlogInit',{id:'',pageNum:this.currentpage,pageSize:this.pageSzie});
      },
      choospagesize(pageSzie){
        this.pageSzie=pageSzie;
        this.getpageData('/api/uums/loginlog/findLoginlogInit',{id:'',pageNum:this.currentpage,pageSize:this.pageSzie});
      },
      getpageData (url,params){
        this.$axios.post(url,params).then(function (response) {
          this.total=response.data.total;
          this.tableData1=response.data.rows;
        }.bind(this)).catch(function (response) {
        }.bind(this));
      }
    }
  }
</script>
<style socped>
   .systemlogintable{
     margin-left: 150px;
     margin-right: 150px;
   }

</style>
