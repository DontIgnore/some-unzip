import { nodeResolve as resolve } from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import babel from "@rollup/plugin-babel"
import nodePolyfills from "rollup-plugin-polyfill-node"

export default [
  {
    input: "./src/index.js",
    plugins: [
      babel(),
      resolve({ browser: true, preferBuiltins: false }),
      commonjs({ transformMixedEsModules: true }),
      nodePolyfills(),
    ],
    output: {
      file: "./build/bundle.js",
      format: "iife",
    },
  },
]
