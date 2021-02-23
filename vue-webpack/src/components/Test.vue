<template>
	<div class="container text-center mt-5" :class="className">
		<h1>{{ status }}</h1>
	</div>
</template>

<style lang="less" scoped>
	.container {
		h1 {
			font-weight: bolder;
		}
	}
</style>

<script>
export default {
	name: 'Test',
	data: () => ({
		status: 'Checking...',
		className: ''
	}),
	mounted() {
		this.axios.get('ping')
			.then(response => {
				console.log(response);
				this.status = 'Api Working';
				this.className = 'text-success';
			})
			.catch(error => {
				console.log(error);
				this.status = 'No response from api';
				this.className = 'text-danger';
			});
	}
}
</script>