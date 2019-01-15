<template>
  <div class="wrap">
    <div class="box-left">
    	<div>
    		<div class="tab-title" @click="active = 'watch'">视频区</div>
    		<div class="tab-title" @click="active = 'people'">参课人员</div>
    	</div>
    	<div class="tab-box">
    		
    	</div>
    	<div v-if="active=='watch'">11</div>
    	<div v-if="active=='people'">22</div>
    	<div class="tab-netbox">
    		<ul>
    			<li>
    				<div class="dely-time">--</div>
    				<div>延时</div>
    			</li>
    			<li>
    				<div class="lost">--</div>
    				<div>丢包</div>
    			</li>
    			<li>
    				<div class="now-status">--</div>
    				<div>状态</div>
    			</li>
    		</ul>
    	</div>
    	<div>
    		
    	</div>
    </div>
    <div class="box-middle">
    	<div>
    		<ul>
    			<li>文档区</li>
    			<li>布局切换</li>
    			<li>工具箱</li>
    			<li>设置</li>
    			<li>更多</li>
    		</ul>
    	</div>
    	<div>
    		
    	</div>
    	<div>
    		
    	</div>
    </div>
    <div class="box-right">
    	<div class="meg-box-top">聊天</div>
    	<div class="msg-box"></div>
    	<div class="input-bar">
    		
    	</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'teacher',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      active: 'watch'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.wrap .box-left{
	  width: 200px;
    position: absolute;
    top: 0;
    bottom: 0;
}
.box-left .tab-title{
	  float: left;
    height: 55px;
    line-height: 55px;
    background: #484443;
    width: 50%;
    color: #fff;
    cursor: pointer;
    text-align: center;
    font-size: 13px;
}
.box-left .tab-box{
		position: absolute;
    top: 55px;
    bottom: 50px;
    overflow-y: auto;
    width: 100%;
}
.box-left .tab-netbox{
	  position: absolute;
    bottom: 0;
    left: 0;
    width: 200px;
    background: #484443;
    height: 50px;
    color: #fff;
    font-size: 14px;
    line-height: 20px;
    z-index: 9;
}
.box-left .tab-netbox ul{
		margin: 5px auto;
}
.box-left .tab-netbox ul li{
		margin: 0;
		width: 31.2%;
		text-align: center;
}
.wrap .box-middle{
		position: absolute;
    top: 0;
    bottom: 0;
    left: 200px;
    right: 200px;
    background: #3d3938;
    border-left: 1px solid #2c2a29;
    overflow-y: hidden;
}
.box-middle ul{
	  background: #565553;
    float: left;
}
.box-middle ul li{
	  width: 90px;
    height: 55px;
    text-align: center;
    color: #fff;
    padding-top: 6px;
    cursor: pointer;
    float: left;
}
.box-middle ul li.current{
		background: #686765;
}
.wrap .box-right{
		width: 200px;
    position: absolute;
    top: 0;
    bottom: 0;right: 0;
    border-left: 1px solid #2c2a29;
}
.wrap .box-right .meg-box-top{
		color: #fff;
    height: 55px;
    line-height: 55px;
    padding-left: 10px;
    background: #484443;
}
.wrap .box-right .msg-box{
		padding: 10px;
    width: 100%;
    overflow-y: auto;
    position: absolute;
    top: 60px;
    bottom: 145px;
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    -o-user-select: text;
    user-select: text;
}
.wrap .box-right .input-bar{
		position: absolute;
    bottom: 0;
    width: 100%;
    height: 150px;
}
</style>
