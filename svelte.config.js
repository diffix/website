import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-static";
import { mdsvex } from "mdsvex";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    preprocess(),
    mdsvex({
      extensions: [".md"],
      layout: {
        blog: "src/routes/[...lang]/blog/_post.svelte"
      }
    })
  ],

  extensions: [".svelte", ".md"],

  kit: {
    adapter: adapter({
      pages: "build",
      assets: "build",
      fallback: null
    }),

    prerender: {
      crawl: true,
      enabled: true,
      onError: "fail",
      entries: [
        "/en/",
        "/de/",

        // --- For backwards compatibility default these pages to "en" ---
        "/",
        "/demo/",
        "/download/",
        "/faq/",
        "/newsletter/",
        "/play/",
        "/blog/",
        "/blog/introducing-diffix-fir/",
        "/blog/nyc-taxi-data-heatmap/",
        "/blog/diffix-elm-automates-what-statistics-offices-have-been-doing-for-decades/"
      ]
    },

    trailingSlash: "always",

    // hydrate the <div id="opendiffix"> element in src/app.html
    target: "#opendiffix",

    files: {
      assets: "static"
    },

    browser: {
      router: true
    },

    // Opt-out of Google's FLoC. This might only have an effect
    // if we have a server component too, but well, here it is, just for
    // good measure.
    floc: false
  }
};

export default config;
