<template>
    <div>
        <!-- 轮播图 -->
       <mt-swipe :auto="4000">
            <mt-swipe-item>1</mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item>
       </mt-swipe>
    </div>
</template>

<script>
    import{ Toast } from 'mint-ui'
    export default{
        data(){
            return {
                lunbotuList:[]//保存轮播图的数组
            };
        },
        created() {
            this.getlunbotu();
        },
        methods:{
            getlunbot:function(){//获取轮播图数据
                tihs.$http("http://www.denglinzhe.iego.net/img").then(result => {
                   if(result.body.status === 0){
                       //成功了
                       this.lunbotuList = result.body.message;
                        Toast('加载失败')
                   }else{
                       Toast('加载失败')
                   }
                })
            }
        }
    }
</script>

<style scoped>
    .mint-swipe{
        height: 200px;
    }
   .mint-swipe-items-wrap > div:nth-last-of-type(3){
        background-color: brown;
    }
    .mint-swipe-items-wrap > div:nth-last-of-type(2){
        background-color:green;
    }
    .mint-swipe-items-wrap > div:nth-last-of-type(1){
        background-color: yellow;
    }
</style>

