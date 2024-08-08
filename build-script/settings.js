import esbuildPluginTsc from "esbuild-plugin-tsc"
import sassPlugin from "esbuild-sass-plugin"

const createBuildSettings = (options) => {
  return {
      outdir: "dist",
      minify: true,
      bundle: true,
      sourcemap: false,
      plugins: [
          sassPlugin({
              async transform(source) {
                  const { css } = await postcss([autoprefixer]).process(
                      source
                  );
                  return css;
              },
          }),
          esbuildPluginTsc({
              force: true,
          }),
      ]
  }
}

export default createBuildSettings;