<script lang="ts">
  import "../app.postcss";

  import { useAckee } from "$lib/ackee";

  import { page } from "$app/stores";
  import NavBar from "$lib/components/NavBar.svelte";
  import Link from "$lib/components/Link.svelte";
  import Trans from "$lib/components/Trans.svelte";
  import { lang, trans, pathWithLang } from "$lib/i18n";

  useAckee("https://ackee.open-diffix.org", "8ba9af76-dd3d-47d0-85fa-9387bc693605", {
    ignoreLocalhost: true,
    detailed: true
  });

  $: {
    if (typeof document !== "undefined") {
      document.documentElement.lang = $lang;
    }
  }
</script>

<svelte:head>
  <link rel="canonical" href="https://www.open-diffix.org{pathWithLang($page.url.pathname, $lang)}" />
  <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
</svelte:head>

<div class="flex flex-col min-h-screen">
  <NavBar />
  <div class="flex-grow" />
  <div class="flex-grow-0 w-full">
    <slot />
  </div>

  <div class="flex-grow" />

  <footer class="flex flex-col items-center flex-grow-0 p-4 pt-10 pb-10 mx-auto text-sm text-gray-500">
    <span class="max-w-sm text-center">
      <Trans>
        <svelte:fragment slot="en">
          If you have questions or want to discuss the project, please send us an email at
          <Link href="mailto:hello@open-diffix.org">hello@open-diffix.org</Link>.
        </svelte:fragment>
        <svelte:fragment slot="de">
          Wenn Sie Fragen haben oder mit uns über das Projekt sprechen möchten, senden Sie uns bitte eine E-Mail an
          <Link href="mailto:hello@open-diffix.org">hello@open-diffix.org</Link>.
        </svelte:fragment>
      </Trans>
    </span>

    <div class="mt-4 mx-auto">
      <a
        href="https://twitter.com/OpenDiffix?ref_src=twsrc%5Etfw"
        class="twitter-follow-button"
        data-size="large"
        data-dnt="true"
        data-show-count="false"
      >
        {$trans({
          en: "Follow @OpenDiffix",
          de: "@OpenDiffix folgen"
        })}
      </a>
    </div>

    <span class="mt-8">
      {$trans({
        en: "Copyright MPI-SWS",
        de: "Copyright MPI-SWS"
      })}
    </span>
    <span class="mx-auto mt-2 space-x-2">
      <Link href="https://imprint.mpi-klsb.mpg.de/sws/open-diffix.org/">
        {$trans({
          en: "Imprint",
          de: "Impressum"
        })}
      </Link>
      <Link href="https://data-protection.mpi-klsb.mpg.de/sws/open-diffix.org">
        {$trans({
          en: "Privacy Policy",
          de: "Datenschutzerklärung"
        })}
      </Link>
    </span>
  </footer>
</div>
