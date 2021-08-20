import * as path from "path"
import * as webpack from "webpack"
import "webpack-dev-server"

export interface WebpackConfiguration extends webpack.Configuration {
	devServer: {
		contentBase?: string
		compress?: boolean
		port?: number
	}
}

const config: WebpackConfiguration = {
	entry: {
		index: path.resolve(__dirname, "./src/index.ts"),
	},
	output: {
		path: path.resolve(__dirname, "./build"),
		filename: "[name].js",
		clean: true,
	},
	target: "web",
	plugins: [],
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".jsx"],
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				exclude: /(node_modules)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"],
					},
				},
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					//	Creates `style` nodes from JS strings
					"style-loader",
					//	Translates CSS into CommonJS
					"css-loader",
					//	Missing url rewriting: "resolve-url-loader",
					//	Compiles Sass to CSS
					"sass-loader",
				],
			},
		],
	},
	devServer: {
		contentBase: path.resolve(__dirname, "./build"),
	},
}

export default config
