<template>
  <div class="bar">
    <h1 @click="onHandleClick">Bar Component</h1>
    <p>ajax请求数据：{{msg}}</p>
  </div>
</template>

<style>
.bar {
  background: bisque;
}
</style>

<script>
const fetchInitialData = ({ store }) => {
    return store.dispatch('fetchBar');
};
export default {
	asyncData: fetchInitialData,
	mounted() {
		// 因为服务端渲染只有 beforeCreate 和 created 两个生命周期，不会走这里
		// 所以把调用 Ajax 初始化数据也写在这里，是为了供单独浏览器渲染使用
		let store = this.$store;
		fetchInitialData({ store });
    },
    computed: {
		msg() {
			return this.$store.state.bar;
		}
	},
	methods: {
		onHandleClick() {
			alert(`Bar msg ===${this.msg}`);
		}
    },
}
</script>
