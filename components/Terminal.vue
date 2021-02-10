<template>
  <div class="w-full max-w-sm text-white bg-gray-900 rounded-lg shadow-lg max-w-96 dark:bg-shamrock-800">
    <div class="flex px-2 pt-2 pb-2 transition-colors border-b border-gray-700">
      <div class="w-3 h-3 bg-red-500 rounded-full hover:bg-red-400"></div>
      <div class="w-3 h-3 ml-1 bg-yellow-500 rounded-full hover:bg-yellow-400"></div>
      <div class="w-3 h-3 ml-1 bg-green-500 rounded-full hover:bg-green-400"></div>
    </div>
    <div class="p-2 font-mono text-gray-300 bg-gray-800 dark:bg-shamrock-900">
      <pre>
$ psql

# SELECT zip_code, count(*)
  FROM country
  GROUP BY zip_code;

 zip_code | count
----------+-------
    10119 |   101
    67541 |    24
    80539 |  1911
(3 rows)
      </pre>
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