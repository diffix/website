<template>
  <div class="flex flex-col h-screen overflow-scroll dark:text-gray-300">
    <div class="flex-grow"></div>
    <div class="flex-grow-0 w-full">
      <header class="max-w-2xl pt-20 mx-auto transition-all duration-500">
        <h1 class="block font-bold text-center text-white transition-all duration-500 text-8xl w-100 md:text-9xl">
          <span class="text-transparent bg-gradient-to-r bg-clip-text from-pink-500 to-purple-500 md:from-shamrock-500 md:to-royalblue-500">
            open-diffix
          </span>
        </h1>
        <h2 class="mx-12 mt-8 text-2xl text-center">
          Free and Open Dynamic Anonymization for PostgreSQL
        </h2>
      </header>

      <div class="max-w-4xl px-4 mx-auto mt-20 text-lg lg:flex">
        <div class="flex-col justify-center max-w-lg mx-auto lg:w-1/2 lg:px-16 lg:pb-16 lg:flex ">
          <p>
            The Open Diffix project aims to bring world-class dynamic anonymization
            to your software project, and is free to use for most use cases.
          </p>
          <p class="mt-4 font-semibold">
            It's Postgres as you know it - only anonymous.
          </p>
        </div>
        <Terminal class="mx-auto mt-8 text-base lg:mt-0 lg:mx-0 lg:w-1/2" />
      </div>

      <div>
      </div>
    </div>

    <div class="flex-grow"></div>

    <footer class="flex-grow-0 pt-20 pb-10 mx-auto text-sm text-gray-500">
      Copyright MPI-SWS for Software Systems |
      <a
        href="https://imprint.mpi-klsb.mpg.de/sws/www.mpi-sws.org/"
        class="text-gray-800 underline dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300"
      >
        Imprint
      </a>
    </footer>
  </div>
</template>