<script lang="ts">
  import { page } from "$app/stores";

  export let href: string;
  $: currentPage = href && href === $page.path;
</script>

<div class="font-semibold">
  {#if currentPage}
    <div
      class="transition-colors duration-500 px-4 py-4 h-full border-shamrock-600 border-b-4"
    >
      <slot />
    </div>
  {:else}
    <a
      {href}
      class="duration-50 transition-shadow px-4 py-4 block text-gray-500 hover:text-gray-900 hover:pb-4 hover:border-b-4 border-gray-200 hover:border-shamrock-200"
    >
      <slot />
    </a>
  {/if}
</div>
