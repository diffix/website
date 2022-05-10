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
    <span class="text-red-500">NEW!</span> Diffix for PostgreSQL now released!
  </h3>
</header>

<div class="max-w-6xl px-4 mx-auto mt-20 text-lg lg:flex">
  <div class="flex-col justify-center max-w-lg mx-auto lg:w-2/5 lg:pr-10 lg:pb-16 lg:flex">
    <p class="mt-4 text-2xl font-semibold">Diffix for PostgreSQL</p>
    <p class="mt-2">Diffix as a PostgreSQL extension</p>
    <ul class="list-disc ml-8 mt-1">
      <li>"GDPR Strength" anonymization on a standard PostgreSQL API</li>
      <li>Easily build privacy-preserving web backends, dashboards, and apps</li>
      <li>No anonymization expertise needed</li>
      <li>Easy installation and configuration</li>
      <li>Scale and speed of PostgreSQL</li>
    </ul>
  </div>
  <Terminal />
</div>

<div class="max-w-6xl px-4 mx-auto mt-20 text-lg lg:flex">
  <div class="flex-col justify-center max-w-lg mx-auto lg:w-2/5 lg:pr-10 lg:pb-16 lg:flex">
    <p class="mt-4 text-2xl font-semibold">Diffix for Desktop</p>
    <p class="mt-2">Desktop app for unprecedented ease-of-use.</p>
    <p class="mt-2">Built on the .NET Diffix query engine.</p>
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

<div class="flex flex-col items-center max-w-xl px-4 mx-auto mt-32 space-y-4 text-lg">
  <span>Stay informed about the development of <Wordmark /></span>
  <a
    href="https://twitter.com/OpenDiffix"
    target="_blank"
    class="inline-block px-4 py-3 text-xl text-center text-white transition-all duration-300 rounded-lg bg-sky-500 hover:bg-sky-400"
  >
    <svg
      class="inline w-6 h-6 mr-1"
      fill="currentColor"
      stroke="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
      />
    </svg>
    Follow @OpenDiffix on Twitter
  </a>
  <a
    href="/newsletter"
    class="inline-block px-4 py-3 text-xl text-center text-white transition-all duration-300 rounded-lg bg-shamrock-600 hover:bg-shamrock-500"
  >
    <svg
      class="inline w-6 h-6 mr-1"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
    Sign up to our newsletter
  </a>
</div>

<div class="flex-grow px-4 py-32 mt-32 mb-10 bg-gray-50">
  <h2 class="text-xl text-center text-gray-500">Open Diffix is supported by</h2>
  <div class="max-w-7xl mx-auto mt-12">
    <div class="flex flex-col gap-y-10 xl:flex-row justify-evenly items-center">
      <div>
        <a href="https://www.mpg.de">
          <img class="inline-block h-12" src="mpg-logo.svg" alt="Max-Planck-Gesellschaft" />
          <span class="text-lg text-gray-800">Max-Planck-Gesellschaft</span>
        </a>
      </div>
      <a href="https://www.mpi-sws.org">
        <img class="h-12" src="mpi-sws-logo.svg" alt="Max Planck Institute for Software Systems" />
      </a>
      <a href="https://www.foev-speyer.de" class="pb-2 xl:pb-4">
        <img class="h-16" src="foev-logo.png" alt="FÖV" />
      </a>
      <a href="https://aircloak.com">
        <img class="h-10" src="aircloak_web.svg" alt="Aircloak GmbH" />
      </a>
    </div>
  </div>
</div>
