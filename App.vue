<template>
  <div>
		<router-link to="/nav">Goto Nav</router-link> 
		<router-link to="/foo">Goto Foo</router-link> 
		<bar></bar>
		<router-view></router-view>
  </div>
</template>

<script>
import Bar from './components/Bar.vue';
export default {
	beforeCreate() {
		console.log('App.vue beforeCreate');
	},

	created() {
		console.log('App.vue created');
	},

	beforeMount() {
		console.log('App.vue beforeMount');
	},

	mounted() {
		console.log('App.vue mounted');
		console.log(this);
	},
	components: {
		Bar
	}
}
</script>