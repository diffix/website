<script lang="ts">
  import { page } from '$app/stores';

  export let href: string;
  $: currentPage = href && href === $page.path;
</script>

<div class="font-semibold">
  {#if currentPage}
    <div
      class="transition-colors duration-500 shadow-md px-4 py-4 h-full border-b-4 border-pink-500 md:border-shamrock-600 md:bg-shamrock-400 bg-pink-400 text-white"
    >
      <slot />
    </div>
  {:else}
    <a
      {href}
      class="duration-50 transition-shadow px-4 py-4 block text-gray-500 hover:text-gray-700 hover:pb-4 hover:bg-white-50 hover:border-b-4 border-gray-200 md:hover:border-shamrock-200 hover:border-pink-300"
    >
      <slot />
    </a>
  {/if}
</div>
