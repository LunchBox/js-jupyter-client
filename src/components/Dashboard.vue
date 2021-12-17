<template>
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
</template>

<script>
	import FileList from "@/components/FileList";
	export default {
		components: {
			FileList,
		},
	};
</script>

<style scoped>
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