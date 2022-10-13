<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { page } from "$app/stores";
  import { pathIncludesLanguage } from "$lib/i18n";

  export let href: string;
  export let subpaths = false;
  export let forceHighlight: boolean | undefined = undefined;
  export let title: string = undefined;
  export let narrow = false;

  const dispatch = createEventDispatcher();

  function handleClick() {
    dispatch("click");
  }

  function normalizePath(path: string) {
    if (path.endsWith("/")) {
      // Remove trailing slash.
      path = path.substring(0, path.length - 1);
    }

    if (!pathIncludesLanguage(path)) {
      return "/en" + path;
    } else {
      return path;
    }
  }

  function matchPath(pathname: string) {
    return subpaths ? pathname.indexOf(href) === 0 : pathname === href;
  }

  $: isCurrentPage =
    typeof forceHighlight !== "undefined" ? forceHighlight : href && matchPath(normalizePath($page.url.pathname));
</script>

<div class="font-semibold">
  {#if isCurrentPage}
    <a
      {href}
      {title}
      on:click={handleClick}
      class:px-2={narrow}
      class:px-4={!narrow}
      class="py-4 block h-full text-black border-shamrock-600 border-b-4"
    >
      <slot />
    </a>
  {:else}
    <a
      {href}
      {title}
      on:click={handleClick}
      class:px-2={narrow}
      class:px-4={!narrow}
      class="py-4 block text-gray-500 hover:text-gray-900 hover:pb-4 hover:border-b-4 border-gray-200 hover:border-shamrock-200"
    >
      <slot />
    </a>
  {/if}
</div>
