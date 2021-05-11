<script lang="ts">
  import { onMount } from "svelte";

  export let question: string;
  export let addToToc;

  $: id = question
    .replace(/[?!,./]+/g, "")
    .replace(/ /g, "-");

  onMount(() => addToToc(id, question));
</script>

<section class="max-w-2xl mx-auto pt-12">
  <a href="#faq-top" class="mt-2 text-xs underline text-gray-600 hover:text-gray-700">To the top</a>
  <a {id}>
    <h2 class="max-w-lg text-2xl font-semibold mt-px">
      {question}
    </h2>
  </a>

  <p class="max-w-xl leading-relaxed overflow-hidden transition transition-height duration-500 pt-3">
    <slot />
  </p>
</section>
