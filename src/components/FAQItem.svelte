<script lang="ts">
  import { onMount } from "svelte";

  export let question: string;
  export let addToToc: (i: string, q: string) => void;

  $: id = question
    .replace(/[?!,./]+/g, "")
    .replace(/ /g, "-");

  onMount(() => addToToc(id, question));
</script>

<a {id}>&nbsp;</a>
<section class="max-w-2xl mx-auto">
  <a href="#faq-top" class="lg:hidden mt-2 text-xs underline text-gray-600 hover:text-gray-700">To the top</a>
  <h2 class="max-w-lg text-2xl font-semibold mt-px">
    {question}
  </h2>

  <p class="max-w-xl leading-relaxed overflow-hidden transition transition-height duration-500 pt-3">
    <slot />
  </p>
</section>
