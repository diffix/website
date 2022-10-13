<script lang="ts">
  import { onMount } from "svelte";
  import { mapLocalizedString, trans, type LocalizedString } from "$lib/i18n";

  export let question: LocalizedString;
  export let addToToc: (i: LocalizedString, q: LocalizedString) => void;

  $: id = mapLocalizedString(question, (q) =>
    q
      .replace(/[?!,./()]+/g, "")
      .replace(/ /g, "-")
      .toLowerCase()
  );

  onMount(() => addToToc(id, question));
</script>

<section>
  <div id={$trans(id)} class="relative -top-1 md:-top-20" />
  <a href="#faq-top" class="lg:hidden mt-2 text-xs underline text-gray-600 hover:text-gray-700"
    >{$trans({
      en: "To the top",
      de: "nach oben"
    })}
  </a>
  <h2 class="max-w-lg text-2xl font-semibold mt-px">
    {$trans(question)}
  </h2>

  <p class="max-w-xl leading-relaxed overflow-hidden transition transition-height duration-500 pt-3">
    <slot />
  </p>
</section>
