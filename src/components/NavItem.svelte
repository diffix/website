<script lang="ts">
  import { page } from "$app/stores";

  export let href: string;
  $: currentPage = href && href === $page.path;
</script>

<div class="font-semibold">
  {#if currentPage}
    <div
      class="transition-colors duration-500 px-4 py-4 h-full border-pink-500 md:border-shamrock-600 border-b-4 dark:text-white"
    >
      <slot />
    </div>
  {:else}
    <a
      {href}
      class="duration-50 transition-shadow px-4 py-4 block text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-gray-900 hover:pb-4 hover:border-b-4 border-gray-200 md:hover:border-shamrock-200 md:dark:hover:border-shamrock-800 hover:border-pink-300"
    >
      <slot />
    </a>
  {/if}
</div>
