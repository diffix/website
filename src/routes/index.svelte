<script>
  import Wordmark from "../components/Wordmark.svelte";
  import Terminal from "../components/Terminal.svelte";
</script>

<svelte:head>
	<title>open-diffix - Free and Open Dynamic Anonymization for PostgreSQL</title>
</svelte:head>

<header class="max-w-2xl pt-20 mx-auto transition-all duration-500">
  <h1 class="block text-center text-8xl w-100 md:text-9xl">
    <Wordmark />
  </h1>
  <h2 class="mx-12 mt-8 text-2xl text-center">
    Free and Open Dynamic Anonymization for PostgreSQL
  </h2>
</header>

<div class="max-w-4xl px-4 mx-auto mt-20 text-lg lg:flex">
  <div class="flex-col justify-center max-w-lg mx-auto lg:w-1/2 lg:px-16 lg:pb-16 lg:flex">
    <p>
      The Open Diffix project aims to bring world-class dynamic anonymization
      to your software project, and is free to use for most use cases.
    </p>
    <p class="mt-4 font-semibold">
      It's PostgreSQL as you know it - only anonymous.
    </p>
  </div>
  <Terminal />
</div>

<div class="flex flex-col items-center max-w-xl px-4 mx-auto mt-32 space-y-4 text-lg">
  <span>Want to stay informed about the development of <Wordmark />?</span>
  <a href="/newsletter" class="inline-block px-4 py-2 text-2xl text-center text-white transition-all duration-500 rounded-lg bg-shamrock-500 hover:bg-gradient-to-r from-pink-500 to-purple-500 md:from-shamrock-500 md:to-royalblue-500">Sign up to our newsletter</a>
</div>

<div class="flex-grow pt-16 pb-16 mt-32 dark:pb-4 sm:pt-32 sm:pb-32 bg-gray-50 dark:bg-gray-800">
  <div class="max-w-xl px-4 mx-auto xl:max-w-5xl">
    <h2 class="text-xl text-center text-gray-500">
      <Wordmark />
      is sponsored by
    </h2>

    <div class="flex flex-col items-center max-w-4xl px-6 py-8 mx-auto mt-12 space-y-8 rounded-lg sm:py-4 xl:rounded-full dark:bg-gray-300 xl:space-y-0 xl:mt-8 xl:items-end justify-items-start xl:flex-none xl:grid xl:grid-cols-3 xl:gap-6">
      <div>
        <a href="https://www.mpg.de">
          <img class="inline-block h-12" src="mpg-logo.svg" alt="Max-Planck-Gesellschaft">
          <span class="text-lg text-gray-800">Max-Planck-Gesellschaft</span>
        </a>
      </div>
      <a href="https://www.mpi-sws.org">
        <img class="h-12" src="mpi-sws-logo.svg" alt="Max Planck Institute for Software Systems">
      </a>
      <a href="https://aircloak.com" class="xl:flex xl:flex-row xl:items-center xl:justify-end xl:w-full xl:h-full">
        <img class="h-10 xl:h-10" src="aircloak_web.svg" alt="Aircloak GmbH">
      </a>
    </div>
  </div>
</div>