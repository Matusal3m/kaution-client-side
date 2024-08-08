import esbuild from "esbuild";
import createBuildSettings from "./settings";

const settings = createBuildSettings();

esbuild.build(settings)