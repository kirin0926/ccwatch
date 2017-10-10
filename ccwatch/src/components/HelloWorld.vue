<template>
  <div class="wrap">
    <div class="left">
    	<div>
    		<div  @click="active = 'watch'">视频区</div>
    		<div @click="active = 'people'">参课人员</div>
    	</div>
    	<div v-if="active=='watch'">11</div>
    	<div v-if="active=='people'">22</div>
    	<div>
    		
    	</div>
    </div>
    <div class="middle">
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
    <div class="right">
    	<div>聊天</div>
    	<div></div>
    	<div>
    		
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
.wrap .left{
	  width: 200px;
    /*position: absolute;*/
    top: 0;
    bottom: 0;
}
.wrap .right{
		
}
</style>
