<template>
	<div>
		<header>
			<div class="container">
				<h1>JS Jupyter</h1>
			</div>
		</header>
		<main>
			<div class="container">
				<div class="tabs">
					<ul>
						<li class="active"><a href="">Files</a></li>
						<li><a href="">Tickets</a></li>
					</ul>
				</div>

				<FileList />
			</div>
		</main>
		<footer>
			<div class="container">&copy; 2021-2023</div>
		</footer>
	</div>
</template>

<script>
	import FileList from "@/components/FileList";
	export default {
		name: "App",
		components: {
			FileList,
		},
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

	.tabs {
		margin: 1em 0;
		font-size: small;
		line-height: 30px;
	}

	.tabs ul {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		border-bottom: 1px solid #e7e7e7;
	}

	.tabs ul li {
		background: #fff;
		margin: 0 2px;
	}

	.tabs ul li a {
		display: block;
		padding: 0 1em;

		text-decoration: none;
		color: #296eaa;
	}
	.tabs ul li a:hover {
		background: #eee;
	}
	.tabs ul li.active {
		border: 1px solid #e7e7e7;
		border-bottom: 0;
		margin-bottom: -1px;
	}
	.tabs ul li.active a {
		color: #555555;
		background: #fff;
	}
</style>
