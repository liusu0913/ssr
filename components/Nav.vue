<template>
  <div class="foo">
    <h1 @click="onHandleClick">Nav Component</h1>
  </div>
</template>

<style>
.foo {
  background: red;
}
</style>

<script>
export default {
	methods: {
		onHandleClick() {
			alert('Nav onHandleClick');
		}
	}
}
</script>
