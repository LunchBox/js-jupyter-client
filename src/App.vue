<template>
	<div>
		<header>
			<div class="container">
				<h1>JS Jupyter</h1>
			</div>
		</header>
		<router-view></router-view>
		<footer>
			<div class="container">&copy; 2021-2023</div>
		</footer>
	</div>
</template>

<script>
	export default {
		name: "App",
		components: {},
	};
</script>

<style>
	body {
		margin: 0;
		padding: 0;
		font-size: 13px;
	}
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
		line-height: 1.5;
	}
	.container {
		max-width: 1140px;
		margin: 0 auto;
	}
</style>

<style scoped>
	header h1 {
		margin: 0;
		font-size: 1.2em;
		font-weight: 400;
	}

	header {
		border-bottom: 1px solid #e7e7e7;
		line-height: 40px;
	}
</style>
