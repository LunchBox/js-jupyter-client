module.exports = {
	devServer: {
		proxy: {
			"^/api": {
				target: "http://localhost:3080",
				ws: true,
				changeOrigin: true,
				pathRewrite: { "^/api": "/" },
				logLevel: "debug",
			},
			// '/foo': {
			//   target: '<other_url>'
			// }
		},
	},
};
