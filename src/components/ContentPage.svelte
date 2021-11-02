<script lang="ts">
  export let title: string;
</script>

<svelte:head>
  <title>open-diffix - {title}</title>
</svelte:head>

<div class="max-w-xl mx-auto box-content  p-4">
  <h1 class="text-5xl font-semibold mt-8 md:mt-0">{title}</h1>

  <div class="mt-8">
    <slot />
  </div>
</div>
