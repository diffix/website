<script context="module">
  import { formatDateEn, formatDateDe } from "$lib/utils";
  import { lang, trans } from "$lib/i18n";
  import Trans from "$lib/components/Trans.svelte";

  export const load = async ({ fetch }) => {
    const posts = await fetch(`/blog-posts.json`);
    const allPosts = await posts.json();

    return {
      props: {
        posts: allPosts
      }
    };
  };
</script>

<script>
  export let posts;

  $: visiblePosts = posts
    .filter((post) => (post.meta.langs ? post.meta.langs.includes($lang) : true))
    .map((post) => ({ ...post, path: post.path.replace("[...lang]", $lang) }));
</script>

<svelte:head>
  <title>
    {$trans({
      en: "Open Diffix - Blog",
      de: "Open Diffix - Blog"
    })}
  </title>
</svelte:head>

<div class="px-4 py-8">
  <div class="break-words mx-auto prose lg:prose-lg">
    <h1>
      {$trans({
        en: "Blog",
        de: "Blog"
      })}
    </h1>

    {#each visiblePosts as post}
      <h2 style="margin-bottom: 0;">
        <a href={`/${post.path}`}>
          {post.meta.title}
        </a>
      </h2>
      <Trans>
        <svelte:fragment slot="en">
          <p style="margin-top: 0.5em;">Published on {formatDateEn(post.meta.date)} by {post.meta.author}</p>
        </svelte:fragment>
        <svelte:fragment slot="de">
          <p style="margin-top: 0.5em;">Veröffentlicht am {formatDateDe(post.meta.date)} von {post.meta.author}</p>
        </svelte:fragment>
      </Trans>
      <p>
        {post.meta.excerpt}
        <a href={`/${post.path}`}>
          {$trans({
            en: "Continue Reading",
            de: "mehr erfahren"
          })}
        </a>
      </p>
    {/each}
  </div>
</div>
