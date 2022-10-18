<script>
  import { formatDateEn, formatDateDe } from "$lib/utils";
  import Trans from "$lib/components/Trans.svelte";

  export let title;
  export let date;
  export let author;
</script>

<svelte:head>
  <title>Open Diffix - {title}</title>
</svelte:head>

<div class="px-4 py-8">
  <article class="break-words mx-auto prose lg:prose-lg">
    <Trans>
      <svelte:fragment slot="en">
        <p style="margin-bottom: 0.5em;">Published on {formatDateEn(date)} by {author}</p>
      </svelte:fragment>
      <svelte:fragment slot="de">
        <p style="margin-bottom: 0.5em;">Veröffentlicht am {formatDateDe(date)} von {author}</p>
      </svelte:fragment>
    </Trans>
    <slot />
  </article>
</div>
