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
						<a :class="{ 'is-folder': file.isDirectory }" href="">
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
	import { ref } from "vue";
	import axios from "axios";

	export default {
		setup() {
			const fileList = ref([]);

			async function loadFiles() {
				const res = await axios.get("/api/");
				fileList.value = res.data;
			}
			loadFiles();

			async function createFolder() {
				let fileName = "Untitled Folder";
				let count = 0;
				while (fileList.value.find((f) => f.fileName === fileName)) {
					count += 1;
					fileName = `Untitled Folder ${count}`;
				}

				const res = await axios.post("/api/files", {
					fileName,
					isDirectory: true,
				});

				console.log(res);
				loadFiles();
			}

			return {
				fileList,

				createFolder,
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