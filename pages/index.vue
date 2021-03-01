<template>
  <div class="flex flex-col">
    <div class="flex-grow"></div>
    <div class="flex-grow-0 w-full">
      <header class="max-w-2xl pt-20 mx-auto transition-all duration-500">
        <h1 class="block text-center text-8xl w-100 md:text-9xl">
          <OpenDiffixWordmark />
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
            It's PostgreSQL as you know it - only anonymous.
          </p>
        </div>
        <Terminal class="mx-auto mt-8 text-base lg:mt-0 lg:mx-0 lg:w-1/2" />
      </div>

      <div class="max-w-xl px-4 mx-auto mt-24">
        <Mailinglist />
      </div>

      <div class="max-w-xl px-4 mx-auto mt-24 xl:max-w-5xl">
        <h2 class="text-xl text-center text-gray-500">
          <OpenDiffixWordmark />
          is sponsored by
        </h2>

        <div class="flex flex-col items-center mx-auto mt-12 space-y-8 xl:space-y-0 xl:mt-8 xl:items-end justify-items-start xl:flex-none xl:grid xl:grid-cols-3 xl:gap-6">
          <div class="">
            <a href="https://www.mpg.de">
              <img class="inline-block h-16" src="mpg-logo.svg" alt="Max-Planck-Gesellschaft">
              <span class="text-lg">Max-Planck-Gesellschaft</span>
            </a>
          </div>
          <a href="https://www.mpi-sws.org">
            <img class="h-16" src="mpi-sws-logo.svg" alt="Max Planck Institute for Software Systems">
          </a>
          <a href="https://aircloak.com" class="xl:flex xl:flex-row xl:items-center xl:justify-end xl:w-full xl:h-full">
            <img class="h-14 xl:h-12" src="aircloak_web.svg" alt="Aircloak GmbH">
          </a>
        </div>
      </div>
    </div>

    <div class="flex-grow"></div>

    <footer class="flex flex-col flex-grow-0 p-2 pt-20 pb-10 mx-auto text-sm text-gray-500">
      <span>Copyright MPI-SWS for Software Systems</span>
      <span class="mx-auto mt-2 space-x-2">
        <a
          href="https://imprint.mpi-klsb.mpg.de/sws/open-diffix.org/"
          class="text-gray-800 underline dark:text-gray-400 hover:text-gray-500 dark:hover:text-gray-200"
        >Imprint</a>
        <a
          href="https://data-protection.mpi-klsb.mpg.de/sws/open-diffix.org"
          class="text-gray-800 underline dark:text-gray-400 hover:text-gray-500 dark:hover:text-gray-200"
        >Privacy Policy</a>
      </span>
    </footer>
  </div>
</template>