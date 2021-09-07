<script lang="ts">
  import { onMount } from "svelte";

  function randomwShortWait() {
    return 25 + 100 * Math.floor(Math.random() * 2);
  }

  const queries = [
    {
      query: `count(dogs)
  FROM dalmatians`,
      answer: "   103"
    },
    {
      query: `count(samurai)
  FROM kurosawa_movies`,
      answer: "     6"
    },
    {
      query: `count(soldiers)
  FROM movie_dirty_dozen`,
      answer: "    11"
    },
    {
      query: `count(citizens)
  FROM citizen_kane`,
      answer: "  null"
    }
  ];

  let { query, answer } = queries[Math.floor(Math.random() * queries.length)];
  let renderedQuery = "";

  function addNextCharcter() {
    if (query.length > 0) {
      renderedQuery = renderedQuery + query.substr(0, 1);
      if (query.length > 1) {
        query = query.substr(1, query.length);
      } else {
        renderedQuery = renderedQuery + ";";
        query = "";
      }
      setTimeout(addNextCharcter, randomwShortWait());
    }
  }

  onMount(() => setTimeout(addNextCharcter, 100));
</script>

<div class="mx-1 mt-8 text-base lg:mt-0 lg:mx-0 lg:w-3/5">
  <div
    class="bg-flamingo-400 md:bg-shamrock-300 rounded-lg shadow-2xl transform transition duration-500 md:rotate-3 -rotate-3"
  >
    <div
      class="transform rotate-3 transition duration-500 md:-rotate-3 overflow-hidden text-white bg-gray-900 rounded-lg shadow-lg h-96 dark:bg-shamrock-800"
    >
      <div class="flex px-2 pt-2 pb-2 transition-colors border-b border-gray-700">
        <div class="w-3 h-3 bg-red-500 rounded-full hover:bg-red-400" />
        <div class="w-3 h-3 ml-1 bg-yellow-500 rounded-full hover:bg-yellow-400" />
        <div class="w-3 h-3 ml-1 bg-green-500 rounded-full hover:bg-green-400" />
      </div>
      <div class="h-full p-2 font-mono text-gray-300 bg-gray-800 dark:bg-shamrock-900">
        <pre>
    $ psql

# SELECT { renderedQuery }
        </pre>

        {#if query === ""}
          <pre class="-mt-8">
          <br class="h-1" />
   count
  -------
  { answer }
  (1 row)

        </pre>

          <div class="mt-4">
            # <span class="blink">_</span>
          </div>
        {/if}
      </div>
    </div>
  </div>
</div>

<style>
  .blink {
    animation: blinker 1s linear infinite;
  }

  @keyframes blinker {
    50% {
      opacity: 0;
    }
  }
</style>
