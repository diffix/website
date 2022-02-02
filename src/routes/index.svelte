<script>
  import Wordmark from "../components/Wordmark.svelte";
  import Terminal from "../components/Terminal.svelte";
</script>

<svelte:head>
  <title>Open Diffix - Free and Open Anonymization</title>
</svelte:head>

<header class="max-w-3xl pt-8 md:pt-12 mx-auto">
  <h1 class="text-center text-8xl w-full px-4 md:text-9xl">
    <Wordmark />
  </h1>
  <h2 class="mx-12 mt-8 text-2xl text-center">Strong Anonymization for Structured Data. Open. Free.</h2>
  <h3 class="font-bold mx-12 mt-8 text-xl text-center">
    <span class="text-red-500">NEW!</span> Diffix for Desktop V1 now released!
  </h3>
</header>

<div class="max-w-6xl px-4 mx-auto mt-20 text-lg lg:flex">
  <div class="flex-col justify-center max-w-lg mx-auto lg:w-2/5 lg:pr-10 lg:pb-16 lg:flex">
    <p class="mt-4 text-2xl font-semibold">Diffix for Desktop</p>
    <p class="mt-2">Desktop app for unprecedented ease-of-use.</p>
    <p class="mt-2">Built on the .NET Diffix implementation.</p>
    <ul class="list-disc ml-8 mt-1">
      <li>Import data from CSV</li>
      <li>Select columns and bin sizes</li>
      <li>Examine data quality</li>
      <li>Export anonymized data as CSV</li>
    </ul>
  </div>
  <div class="mx-1 mt-8 text-base lg:mt-0 lg:mx-0 lg:w-3/5">
    <div class="overflow-hidden text-white bg-gray-900 rounded-lg shadow-lg">
      <div class="flex px-2 pt-2 pb-2 transition-colors border-b border-gray-700">
        <div class="w-3 h-3 bg-red-500 rounded-full hover:bg-red-400" />
        <div class="w-3 h-3 ml-1 bg-yellow-500 rounded-full hover:bg-yellow-400" />
        <div class="w-3 h-3 ml-1 bg-green-500 rounded-full hover:bg-green-400" />
      </div>
      <video width="1920" height="1080" autoplay controls muted loop>
        <source src="short_demo.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
</div>

<div class="max-w-6xl px-4 mx-auto mt-20 text-lg lg:flex">
  <div class="flex-col justify-center max-w-lg mx-auto lg:w-2/5 lg:pr-10 lg:pb-16 lg:flex">
    <p class="mt-4 text-2xl font-semibold">Diffix for PostgreSQL</p>
    <p class="mt-2">PostgreSQL extension for high-end use cases.</p>
    <ul class="list-disc ml-8 mt-1">
      <li>Scale and speed of PostgreSQL</li>
      <li>Standard SQL interface</li>
    </ul>
  </div>
  <Terminal />
</div>

<div class="flex flex-col items-center max-w-xl px-4 mx-auto mt-32 space-y-4 text-lg">
  <span>Want to stay informed about the development of <Wordmark />?</span>
  <a
    href="/newsletter"
    class="inline-block px-4 py-2 text-2xl text-center text-white transition-all duration-500 rounded-lg bg-shamrock-600 hover:bg-gradient-to-r from-shamrock-500 to-royalblue-500"
    >Sign up to our newsletter</a
  >
</div>

<div class="flex-grow pt-16 pb-16 mt-32 mb-10 sm:pt-32 sm:pb-32 bg-gray-50">
  <div class="max-w-xl px-4 mx-auto xl:max-w-5xl">
    <h2 class="text-xl text-center text-gray-500">Open Diffix is supported by</h2>
    <div
      class="flex flex-col items-center max-w-4xl px-6 py-8 mx-auto mt-12 space-y-8 rounded-lg sm:py-4 xl:rounded-full xl:space-y-0 xl:mt-8 xl:items-end justify-items-start xl:flex-none xl:grid xl:grid-cols-3 xl:gap-6"
    >
      <div>
        <a href="https://www.mpg.de">
          <img class="inline-block h-12" src="mpg-logo.svg" alt="Max-Planck-Gesellschaft" />
          <span class="text-lg text-gray-800">Max-Planck-Gesellschaft</span>
        </a>
      </div>
      <a href="https://www.mpi-sws.org">
        <img class="h-12" src="mpi-sws-logo.svg" alt="Max Planck Institute for Software Systems" />
      </a>
      <a href="https://aircloak.com" class="xl:flex xl:flex-row xl:items-center xl:justify-end xl:w-full xl:h-full">
        <img class="h-10 xl:h-10" src="aircloak_web.svg" alt="Aircloak GmbH" />
      </a>
    </div>
  </div>
</div>
