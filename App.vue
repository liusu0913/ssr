<template>
	<div id="app">
		<router-link to="/bar">Goto Bar</router-link> 
		<router-link to="/foo">Goto Foo</router-link> 
		<nav></nav>
		<router-view></router-view>
	</div>
</template>

<script>
import Nav from './components/Nav.vue';
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
		Nav
	}
}
</script>