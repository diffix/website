<script>
  import Link from "../components/Link.svelte";
  import DownloadLink from "../components/DownloadLink.svelte";
</script>

<svelte:head>
  <title>open-diffix - Download</title>
</svelte:head>

<div class="p-4">
  <header class="max-w-xl pt-12 mx-auto">
    <h1 class="block text-5xl font-semibold">Download</h1>
  </header>

  <div class="max-w-xl mx-auto mt-8">
    <h2 class="mt-12 text-2xl">Diffix for Desktop (Beta)</h2>

    <h3 class="mt-4 font-semibold text-xl">Latest version</h3>

    <ul class="mt-2 list-disc list-inside">
      <li>
        <DownloadLink href="#">Windows</DownloadLink>
      </li>
      <li>
        <DownloadLink href="#">MacOS</DownloadLink>
      </li>
      <li>
        <DownloadLink href="#">Debian</DownloadLink>
      </li>
    </ul>

    <h3 class="mt-4 font-semibold text-xl">Previous versions</h3>

    <p class="mt-2">
      Previous releases can be found in our <Link href="https://github.com/diffix/desktop/releases"
        >GitHub repository</Link
      >.
    </p>

    <h2 class="mt-12 text-2xl">Diffix for PostgreSQL</h2>

    <p class="mt-2">
      Diffix for PostgreSQL is still under development. Click <Link href="/demo">here</Link> for more details.
    </p>
  </div>
</div>
