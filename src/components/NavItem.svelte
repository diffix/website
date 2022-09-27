<script lang="ts">
  import { page } from "$app/stores";
  import { createEventDispatcher } from "svelte";

  export let href: string;
  export let subpaths = false;

  const dispatch = createEventDispatcher();

  function handleClick() {
    dispatch("click");
  }

  $: currentPage = href && (subpaths ? $page.url.pathname.indexOf(href) === 0 : $page.url.pathname === href);
</script>

<div class="font-semibold">
  {#if currentPage}
    <a
      {href}
      on:click={handleClick}
      class="transition-colors duration-500 px-4 py-4 block h-full text-black border-shamrock-600 border-b-4"
    >
      <slot />
    </a>
  {:else}
    <a
      {href}
      on:click={handleClick}
      class="duration-50 transition-shadow px-4 py-4 block text-gray-500 hover:text-gray-900 hover:pb-4 hover:border-b-4 border-gray-200 hover:border-shamrock-200"
    >
      <slot />
    </a>
  {/if}
</div>
