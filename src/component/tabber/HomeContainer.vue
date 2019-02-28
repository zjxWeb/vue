<template>
    <div>
        <!-- 轮播图 -->
       <mt-swipe :auto="4000">
           <!-- 在组件中使用 v-for 必须使用 key -->
            <!-- <mt-swipe-item  v-for="item in lunbotuList" :key="item.url">
                <img :src="item.img" alt="">
            </mt-swipe-item> -->
            <mt-swipe :auto="4000">
                <mt-swipe-item>1</mt-swipe-item>
                <mt-swipe-item>2</mt-swipe-item>
                <mt-swipe-item>3</mt-swipe-item>
                </mt-swipe>
            </mt-swipe>
    
        <!--  九宫格-->
                    <div class="mui-slider-item">
						<ul class="mui-table-view mui-grid-view mui-grid-9">
							<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
								<a href="#">
									<img src="../../img/menu1.png" alt="">
									<div class="mui-media-body">Home</div>
								</a>
							</li>
							<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
								<a href="#">
									<img src="../../img/menu2.png" alt="">
									<div class="mui-media-body">Email</div>
								</a>
							</li>
							<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
								<a href="#">
									<img src="../../img/menu3.png" alt="">
									<div class="mui-media-body">Chat</div>
								</a>
							</li>
							<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
								<a href="#">
									<img src="../../img/menu4.png" alt="">
									<div class="mui-media-body">location</div>
								</a>
							</li>
							<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
								<a href="#">
									<img src="../../img/menu5.png" alt="">
									<div class="mui-media-body">Search</div>
								</a>
							</li>
							<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
								<a href="#">
									<img src="../../img/menu5.png" alt="">>
									<div class="mui-media-body">Phone</div>
								</a>
							</li>
						</ul>
					</div>
					
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
            getlunbotu (){
                this.$http.get('http://192.168.31.195:3000/').then(result => {
                   if(result.body.status === 0){
                       this.lunbotuList = result.body.message;
                   }else{
                       Toast('失败')
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
    .mui-grid-view.mui-grid-9 {
         background-color: white;
         border: none;
    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell{
        margin-top: 2vh;
        border: 0;
    }
</style>

