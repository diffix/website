import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    adapter: adapter({
      pages: "build",
      assets: "build",
      fallback: null
    }),

    // hydrate the <div id="opendiffix"> element in src/app.html
    target: "#opendiffix",

    files: {
      assets: "static"
    },

    router: true,

    // Opt-out of Google's FLoC. This might only have an effect
    // if we have a server component too, but well, here it is, just for
    // good measure.
    floc: false
  }
};

export default config;
