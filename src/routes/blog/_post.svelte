<script>
  import { formatDate } from "../../utils";

  export let title;
  export let date;
  export let author;
</script>

<svelte:head>
  <title>Open Diffix - {title}</title>
</svelte:head>

<div class="px-4 py-8">
  <article class="break-words mx-auto prose lg:prose-lg">
    <p style="margin-bottom: 0.5em;">Published on {formatDate(date)} by {author}</p>
    <slot />
  </article>
</div>
