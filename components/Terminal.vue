<template>
  <div class="w-full max-w-sm overflow-hidden text-white bg-gray-900 rounded-lg shadow-lg h-96 max-w-96 dark:bg-shamrock-800">
    <div class="flex px-2 pt-2 pb-2 transition-colors border-b border-gray-700">
      <div class="w-3 h-3 bg-red-500 rounded-full hover:bg-red-400"></div>
      <div class="w-3 h-3 ml-1 bg-yellow-500 rounded-full hover:bg-yellow-400"></div>
      <div class="w-3 h-3 ml-1 bg-green-500 rounded-full hover:bg-green-400"></div>
    </div>
    <div class="h-full p-2 font-mono text-gray-300 bg-gray-800 dark:bg-shamrock-900">
      <pre>
$ psql

# SELECT {{ query }}
      </pre>

      <span v-if="this.queryToUse === ''">
        # <span class="blink">_</span>
      </span>
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
function randomwShortWait() {
  return 25 + 100 * Math.floor(Math.random() * 2);
}

export default {
  data: function () {
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
    const toUse = queries[Math.floor(Math.random() * queries.length)];
    return {
      queryToUse: toUse.query,
      answer: toUse.answer,
      query: ""
    }
  },
  methods: {
    addNextCharcter() {
      if (this.queryToUse.length > 0) {
        this.query = this.query + this.queryToUse.substr(0, 1);
        if (this.queryToUse.length > 1) {
          this.queryToUse = this.queryToUse.substr(1, this.queryToUse.length);
        } else {
          this.query = this.query + ";"
          this.queryToUse = "";
        }
        setTimeout(this.addNextCharcter, randomwShortWait());
      } else {
        setTimeout(this.addResult(), 2000);
      }
    },

    addResult() {
      let queryAnswer = `

count
-------\n` + this.answer + `
(1 row)`;
      this.query = this.query + queryAnswer;
    },

  },

  mounted: function () {
    setTimeout(this.addNextCharcter, 100);
  }
}
</script>