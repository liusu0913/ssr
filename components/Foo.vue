<template>
  <div class="foo">
    <h1 @click="onHandleClick">Foo Component</h1>
  </div>
</template>

<style>
.foo {
  background: yellowgreen;
}
</style>

<script>
export default {
	methods: {
		onHandleClick() {
			alert('Foo onHandleClick');
		}
	}
}
</script>
