<template>
	<div>
		<div>Select items to perform actions on them.</div>
		<button @click="createFolder">Create folder</button>
		<table>
			<thead>
				<tr>
					<th></th>
					<th>Name</th>
					<th>Last Modified</th>
					<th>File size</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="file in fileList" :key="file.fileName">
					<td></td>
					<td>
						<router-link v-if="file.isDirectory" :to="pathOf(file)">
							{{ file.fileName }}
						</router-link>
						<a v-else href="">
							{{ file.fileName }}
						</a>
					</td>
					<td></td>
					<td></td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
	import { ref, computed, watch } from "vue";
	import { useRoute } from "vue-router";
	import axios from "axios";
	import path from "path";

	export default {
		setup() {
			const fileList = ref([]);

			const route = useRoute();
			console.log(route);
			console.log(route.path);

			const filePath = computed(() => route.params.path);

			async function loadFiles() {
				const res = await axios.get("/api/files", {
					params: {
						path: filePath.value,
					},
				});
				fileList.value = res.data;
			}
			loadFiles();

			watch(() => route.params.path, loadFiles);

			async function createFolder() {
				let fileName = "Untitled Folder";
				let count = 0;
				while (fileList.value.find((f) => f.fileName === fileName)) {
					count += 1;
					fileName = `Untitled Folder ${count}`;
				}

				const res = await axios.post("/api/files", {
					path: filePath.value,
					fileName,
					isDirectory: true,
				});

				console.log(res);
				loadFiles();
			}

			function pathOf(file) {
				const currentPath = filePath.value || "";
				const targetPath = path.join(currentPath, file.fileName);
				return `/tree/${targetPath}`;
			}

			return {
				fileList,

				createFolder,
				pathOf,
			};
		},
	};
</script>

<style scoped>
	table {
		width: 100%;
		margin: 1em 0;
	}

	table th,
	table td {
		border-bottom: 1px solid #ddd;
		text-align: left;
	}

	a {
		color: #296eaa;
		text-decoration: none;
	}
</style>