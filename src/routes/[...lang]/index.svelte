<script>
  import Wordmark from "$lib/components/Wordmark.svelte";
  import Terminal from "$lib/components/Terminal.svelte";
  import Link from "$lib/components/Link.svelte";
  import Trans from "$lib/components/Trans.svelte";
  import { lang, trans } from "$lib/i18n";
</script>

<svelte:head>
  <title>
    {$trans({
      en: "Open Diffix - Free and Open Anonymization",
      de: "Open Diffix - Freie und offene Anonymisierung"
    })}
  </title>
</svelte:head>

<header class="max-w-3xl pt-8 md:pt-12 mx-auto">
  <h1 class="text-center text-8xl w-full px-4 md:text-9xl">
    <Wordmark />
  </h1>
  <h2 class="mx-12 mt-8 text-2xl text-center">
    {$trans({
      en: "Strong Anonymization for Structured Data. Open. Free.",
      de: "Starke Anonymisierung für strukturierte Daten. Offen. Frei."
    })}
  </h2>
  <h3 class="font-bold mx-12 mt-8 text-xl text-center">
    <Trans>
      <svelte:fragment slot="en">
        <span class="text-red-500">NEW!</span>
        <Link href="/en/download/">Diffix Dashboards</Link> released!
        <Link href="/en/blog/diffix-dashboards/">Learn more</Link>.
      </svelte:fragment>
      <svelte:fragment slot="de">
        <span class="text-red-500">NEU!</span>
        <Link href="/en/download/">Diffix Dashboards</Link> veröffentlicht!
        <Link href="/de/blog/diffix-dashboards/">Erfahren Sie mehr</Link>.
      </svelte:fragment>
    </Trans>
  </h3>
</header>

<div class="max-w-6xl px-4 mx-auto mt-20 text-lg lg:flex">
  <div class="flex-col justify-center max-w-lg mx-auto lg:w-2/5 lg:pr-10 lg:pb-16 lg:flex">
    <p class="mt-4 text-2xl font-semibold">
      {$trans({
        en: "Diffix Dashboards",
        de: "Diffix Dashboards"
      })}
    </p>
    <p class="mt-2">
      {$trans({
        en: "Desktop app for unprecedented ease-of-use.",
        de: "Desktopanwendung mit hoher Benutzerfreundlichkeit."
      })}
    </p>
    <p class="mt-2">
      {$trans({
        en: "Bundled with Metabase data visualization.",
        de: "Gebündelt mit Metabase Datenvisualisierung."
      })}
    </p>
    <ul class="list-disc ml-8 mt-1">
      <li>
        {$trans({
          en: "Import CSV table, export anonymized data",
          de: "CSV-Tabelle importieren, anonymisierte Daten exportieren"
        })}
      </li>
      <li>
        {$trans({
          en: "UX-based or SQL-based query build",
          de: "UX-basierter oder SQL-basierter Abfrageaufbau"
        })}
      </li>
      <li>
        {$trans({
          en: "Visual analytics with Metabase",
          de: "Visuelle Analyse mit Metabase"
        })}
      </li>
      <li>
        {$trans({
          en: "Compare anonymized and original data for quality",
          de: "Vergleichen Sie anonymisierte und Originaldaten auf Qualität"
        })}
      </li>
    </ul>
    <p class="mt-2">
      <Trans>
        <svelte:fragment slot="en">
          <Link href="/en/download/">Download Diffix Dashboards</Link>.
        </svelte:fragment>
        <svelte:fragment slot="de">
          <Link href="/de/download/">Diffix Dashboards herunterladen</Link>.
        </svelte:fragment>
      </Trans>
    </p>
  </div>
  <div class="mx-1 mt-8 text-base lg:mt-0 lg:mx-0 lg:w-3/5">
    <div class="rounded-lg shadow-lg">
      <img src="/dashboards-home.png" alt="Diffix Dashboards" />
    </div>
  </div>
</div>

<div class="max-w-6xl px-4 mx-auto mt-20 text-lg lg:flex">
  <div class="flex-col justify-center max-w-lg mx-auto lg:w-2/5 lg:pr-10 lg:pb-16 lg:flex">
    <p class="mt-4 text-2xl font-semibold">
      {$trans({
        en: "Diffix for PostgreSQL",
        de: "Diffix für PostgreSQL"
      })}
    </p>
    <p class="mt-2">
      {$trans({
        en: "Diffix as a PostgreSQL extension.",
        de: "Diffix als PostgreSQL-Erweiterung."
      })}
    </p>
    <ul class="list-disc ml-8 mt-1">
      <li>
        {$trans({
          en: '"GDPR Strength" anonymization on a standard PostgreSQL API',
          de: "GDPR(DSGVO)-konforme Anonymisierung auf einer Standard PostgreSQL-API"
        })}
      </li>
      <li>
        {$trans({
          en: "Easily build privacy-preserving web backends, dashboards, and apps",
          de: "Einfaches Erstellen von datenschutzfreundlichen Web-Backends, Dashboards und Anwendungen"
        })}
      </li>
      <li>
        {$trans({
          en: "No anonymization expertise needed",
          de: "Keine Anonymisierungskenntnisse erforderlich"
        })}
      </li>
      <li>
        {$trans({
          en: "Easy installation and configuration",
          de: "Einfache Installation und Konfiguration"
        })}
      </li>
      <li>
        {$trans({
          en: "Scale and speed of PostgreSQL",
          de: "Skalierung und Geschwindigkeit von PostgreSQL"
        })}
      </li>
    </ul>
    <p class="mt-2">
      <Trans>
        <svelte:fragment slot="en">
          <Link href="/en/download/">Download here</Link> or try the <Link href="/en/demo/">hosted demo</Link>.
        </svelte:fragment>
        <svelte:fragment slot="de">
          <Link href="/de/download/">Herunterladen</Link> oder <Link href="/de/demo/">Demo testen</Link>.
        </svelte:fragment>
      </Trans>
    </p>
  </div>
  <Terminal />
</div>

<div class="flex flex-col items-center max-w-xl px-4 mx-auto mt-32 space-y-4 text-lg">
  <Trans>
    <svelte:fragment slot="en">
      <span>Stay informed about the development of <Wordmark /></span>
    </svelte:fragment>
    <svelte:fragment slot="de">
      <span>Bleiben Sie auf dem Laufenden <Wordmark /></span>
    </svelte:fragment>
  </Trans>

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
    {$trans({
      en: "Follow @OpenDiffix on Twitter",
      de: "@OpenDiffix auf Twitter folgen"
    })}
  </a>
  <a
    href="/{$lang}/newsletter/"
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
    {$trans({
      en: "Sign up to our newsletter",
      de: "Melden Sie sich für unseren Newsletter an"
    })}
  </a>
</div>

<div class="flex-grow px-4 py-32 mt-32 mb-10 bg-gray-50">
  <h2 class="text-xl text-center text-gray-500">
    {$trans({
      en: "Open Diffix is supported by",
      de: "Open Diffix wird unterstützt durch"
    })}
  </h2>
  <div class="max-w-5xl mx-auto mt-12">
    <div class="flex flex-col lg:flex-row flex-wrap gap-x-14 gap-y-10 justify-center items-center">
      <div>
        <a href="https://www.mpg.de">
          <img class="inline-block h-12" src="/mpg-logo.svg" alt="Max-Planck-Gesellschaft" />
          <span class="text-lg text-gray-800">Max-Planck-Gesellschaft</span>
        </a>
      </div>
      <a href="https://www.mpi-sws.org">
        <img class="h-12" src="/mpi-sws-logo.svg" alt="Max Planck Institute for Software Systems" />
      </a>
      <a href="https://www.foev-speyer.de" class="pb-2 lg:pb-4">
        <img class="h-16" src="/foev-logo.png" alt="FÖV" />
      </a>
      <a href="https://aircloak.com">
        <img class="h-10" src="/aircloak_web.svg" alt="Aircloak GmbH" />
      </a>
      <a href="https://kdvz.nrw">
        <img class="h-20" src="/kdvz-logo.svg" alt="Zweckverband Kommunale Datenverarbeitungszentrale" />
      </a>
    </div>
  </div>
</div>
