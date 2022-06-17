import { nodeResolve } from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"

export default [
  {
    input: "./src/index.js",
    plugins: [nodeResolve(), commonjs()],
    output: {
      file: "./build/bundle.js",
      format: "es",
    },
  },
]
