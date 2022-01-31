<script context="module">
  import { formatDate } from "../../utils";

  export const load = async ({ fetch }) => {
    const posts = await fetch("/blog/posts.json");
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
</script>

<svelte:head>
  <title>Open Diffix - Blog</title>
</svelte:head>

<div class="px-4 py-8">
  <div class="break-words mx-auto prose lg:prose-lg">
    <h1>Blog</h1>

    {#each posts as post}
      <h2 style="margin-bottom: 0;">
        <a href={`/blog/${post.path}`}>
          {post.meta.title}
        </a>
      </h2>
      <p style="margin-top: 0.5em;">Published on {formatDate(post.meta.date)} by {post.meta.author}</p>
      <p>
        {post.meta.excerpt}
        <a href={`/blog/${post.path}`}>Continue Reading </a>
      </p>
    {/each}
  </div>
</div>
