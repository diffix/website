<script>
  import FAQItem from "../components/FAQItem.svelte";
  import Link from "../components/Link.svelte";

  let tocItems = [];

  function addToToc(id, name) {
    tocItems = [...tocItems, { id, name }];
  }
</script>

<svelte:head>
  <title>Open Diffix - Play</title>
</svelte:head>

<div class="p-4 max-w-2xl lg:max-w-6xl mx-auto">
  <header id="faq-top" class="pt-12 lg:ml-80">
    <div class="mx-auto lg:max-w-2xl">
      <h1 class="text-5xl max-w-xl font-semibold">Play with Diffix</h1>
    </div>
  </header>

  <div class="mt-16 lg:mt-0 mb-12">
    <div class="lg:fixed lg:w-80 lg:pt-24 lg:pr-4 lg:pb-8 lg:top-16 lg:bottom-0 lg:overflow-y-auto">
      <h2 class="block text-2xl w-full font-semibold">Table of contents</h2>

      <ul class="mt-4 ml-4 space-y-1.5 text-sm list-disc list-outside">
        {#each tocItems as question (question.id)}
          <li>
            <Link href="#{question.id}">{question.name}</Link>
          </li>
        {/each}
      </ul>
    </div>

    <div class="lg:mt-12 lg:ml-80">
      <div class="mx-auto lg:max-w-2xl space-y-6 lg:space-y-12 pt-12 lg:pt-0">
        <FAQItem {addToToc} question="Introduction">
          The Open Diffix project 
        </FAQItem>

        <FAQItem {addToToc} question="Training App">
          Blah blah blah.
        </FAQItem>

      </div>
    </div>
  </div>
</div>
