<script lang="ts">
  import { lang } from "$lib/i18n";
</script>

{#if $lang === "de" && $$slots.de}
  <slot name="de" />
{:else}
  <slot name="en" />
{/if}
