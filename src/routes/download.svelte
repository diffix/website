<script>
  import ContentPage from "../components/ContentPage.svelte";
  import Link from "../components/Link.svelte";
  import DownloadLink from "../components/DownloadLink.svelte";
</script>

<ContentPage title="Download">
  <h2 class="mt-12 text-2xl">Diffix for Desktop V1</h2>

  <p class="mt-2">Releases are currently unsigned and will display a warning message during installation.</p>

  <h3 class="mt-4 font-semibold text-xl">Latest version</h3>

  <ul class="mt-2 list-disc list-inside">
    <li>
      <DownloadLink href="https://github.com/diffix/desktop/releases/download/v1.0.0/DiffixForDesktop-1.0.0.Setup.exe"
        >Windows</DownloadLink
      >
    </li>
    <li>
      <DownloadLink
        href="https://github.com/diffix/desktop/releases/download/v1.0.0/DiffixForDesktop-darwin-x64-1.0.0.zip"
        >MacOS</DownloadLink
      >
    </li>
    <li>
      <DownloadLink href="https://github.com/diffix/desktop/releases/download/v1.0.0/DiffixForDesktop_1.0.0_amd64.deb"
        >Linux (Debian)</DownloadLink
      >
    </li>
    <li>
      <DownloadLink
        href="https://github.com/diffix/desktop/releases/download/v1.0.0/DiffixForDesktop-1.0.0-1.x86_64.rpm"
        >Linux (RedHat)</DownloadLink
      >
    </li>
  </ul>

  <h3 class="mt-4 font-semibold text-xl">Previous versions</h3>

  <p class="mt-2">
    Previous releases can be found in our <Link href="https://github.com/diffix/desktop/releases"
      >GitHub repository</Link
    >.
  </p>

  <h2 class="mt-12 text-2xl">Sample Data</h2>

  <p class="mt-2">
    CSV files that can be used to test <strong>Diffix for Desktop</strong>. Descriptions of tables can be found <Link
      href="https://github.com/diffix/desktop/tree/master/sample_data">here</Link
    >.
  </p>

  <ul class="mt-2 list-disc list-inside">
    <li>
      <DownloadLink href="https://github.com/diffix/desktop/raw/master/sample_data/taxi.csv.zip"
        >taxi.csv.zip</DownloadLink
      >
    </li>
    <li>
      <DownloadLink href="https://github.com/diffix/desktop/raw/master/sample_data/census.csv.zip"
        >census.csv.zip</DownloadLink
      >
    </li>
  </ul>

  <h2 class="mt-12 text-2xl">Diffix for PostgreSQL</h2>

  <p class="mt-2">
    <strong>Diffix for PostgreSQL</strong> is still under development. Click <Link href="/demo">here</Link> for more details.
  </p>
</ContentPage>
