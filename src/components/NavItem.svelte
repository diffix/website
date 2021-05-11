<script lang="ts">
  import { page } from '$app/stores';

  export let href: string;
  $: currentPage = href && href === $page.path;
</script>

<div class="font-semibold">
  {#if currentPage}
    <div
      class="px-4 py-4 h-full border-b-4 border-shamrock-600 bg-shamrock-400 text-white"
    >
      <slot />
    </div>
  {:else}
    <a
      {href}
      class="px-4 py-4 block text-gray-500 hover:text-gray-700 hover:pb-4 hover:bg-gray-100 hover:border-b-4 border-gray-200"
    >
      <slot />
    </a>
  {/if}
</div>
