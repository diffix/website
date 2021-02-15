<template>
  <div class="w-full max-w-sm overflow-hidden text-white bg-gray-900 rounded-lg shadow-lg max-w-96 dark:bg-shamrock-800">
    <div class="flex px-2 pt-2 pb-2 transition-colors border-b border-gray-700">
      <div class="w-3 h-3 bg-red-500 rounded-full hover:bg-red-400"></div>
      <div class="w-3 h-3 ml-1 bg-yellow-500 rounded-full hover:bg-yellow-400"></div>
      <div class="w-3 h-3 ml-1 bg-green-500 rounded-full hover:bg-green-400"></div>
    </div>
    <div class="p-2 font-mono text-gray-300 bg-gray-800 dark:bg-shamrock-900">
      <pre>$ psql</pre>
      <pre>{{ query }}</pre>
      # <span class="blink">_</span>
    </div>
  </div>
</template>


<style scoped>
.blink {
  animation: blinker 1s linear infinite;
}

@keyframes blinker {
  50% {
    opacity: 0;
  }
}
</style>

<script>
export default {
  data: function () {
    const queries = [
      `
# SELECT count(dogs)
  FROM dalmatians;

 count
-------
   103
(1 row)
      `, `
# SELECT count(samurai)
  FROM kurosawa_movies;

 count
-------
     6
(1 row)
      `, `
# SELECT count(soldiers)
  FROM movie_dirty_dozen;

 count
-------
    11
(1 row)
      `, `
# SELECT count(citizens)
  FROM citizen_kane;

 count
-------
  null
(1 row)
      `
    ];
    const query = queries[Math.floor(Math.random() * queries.length)];
    return {query: query}
  }
}
</script>