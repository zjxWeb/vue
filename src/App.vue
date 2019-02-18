<template>
  <div class="app-container">
    
    <!-- 顶部 header 区域 -->
    <mt-header fixed title="首页"></mt-header>

    <!-- 中间的 路由 router-view  区域 -->


    <!-- 底部 tabbar 区域 -->
    <nav class="mui-bar mui-bar-tab">
			<a class="mui-tab-item mui-active" href="#tabbar">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">消息</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-contact">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">通讯录</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">设置</span>
			</a>
		</nav>
    <h1>123</h1>
  </div>
</template>

<script>

</script>

<style scoped>
    .app-container{
      padding-top: 40px;
    }
</style>
