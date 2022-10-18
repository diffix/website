<script>
  import ContentPage from "$lib/components/ContentPage.svelte";
  import Link from "$lib/components/Link.svelte";
  import DownloadLink from "$lib/components/DownloadLink.svelte";
  import Trans from "$lib/components/Trans.svelte";
  import { trans } from "$lib/i18n";
</script>

<ContentPage
  title={$trans({
    en: "Download",
    de: "Download"
  })}
>
  <h2 class="mt-12 text-2xl">
    {$trans({
      en: "Diffix for PostgreSQL",
      de: "Diffix für PostgreSQL"
    })}
  </h2>

  <p class="mt-2">
    <Trans>
      <svelte:fragment slot="en">
        The application is provided as an extension module for PostgreSQL servers and has to be built from source before
        installation. See the provided README file for detailed instructions. Alternatively, try our
        <Link href="/en/demo/">hosted demo</Link>.
      </svelte:fragment>
      <svelte:fragment slot="de">
        Die Anwendung wird als Erweiterungsmodul für PostgreSQL-Server bereitgestellt und muss vor der Installation aus
        dem Quellcode erstellt werden. In der README-Datei stehen weitere Anweisungen. Alternativ können Sie auch unsere
        <Link href="/de/demo/">Demo testen</Link>.
      </svelte:fragment>
    </Trans>
  </p>

  <h3 class="mt-4 font-semibold text-xl">
    {$trans({
      en: "Latest version (Diffix Fir)",
      de: "Aktuelle Version (Diffix Fir)"
    })}
  </h3>

  <ul class="mt-2 list-disc list-inside">
    <li>
      <DownloadLink href="https://pgxn.org/dist/pg_diffix" showIcon={false}>PGXN</DownloadLink>
    </li>
    <li>
      <DownloadLink href="https://github.com/diffix/pg_diffix/releases" showIcon={false}>GitHub</DownloadLink>
    </li>
  </ul>

  <h2 class="mt-12 text-2xl">
    {$trans({
      en: "Diffix for Desktop V1",
      de: "Diffix für Desktop V1"
    })}
  </h2>

  <p class="mt-2">
    {$trans({
      en: "Releases are currently unsigned and will display a warning message during installation.",
      de: "Die veröffentlichten Versionen sind derzeit nicht signiert und zeigen bei der Installation eine Warnmeldung an."
    })}
  </p>

  <h3 class="mt-4 font-semibold text-xl">
    {$trans({
      en: "Latest version",
      de: "Aktuelle Version"
    })}
  </h3>

  <ul class="mt-2 list-disc list-inside">
    <li>
      <DownloadLink href="https://github.com/diffix/desktop/releases/download/v1.0.2/DiffixForDesktop-1.0.2.Setup.exe">
        Windows
      </DownloadLink>
    </li>
    <li>
      <DownloadLink
        href="https://github.com/diffix/desktop/releases/download/v1.0.2/DiffixForDesktop-darwin-x64-1.0.2.zip"
      >
        MacOS
      </DownloadLink>
    </li>
    <li>
      <DownloadLink href="https://github.com/diffix/desktop/releases/download/v1.0.2/DiffixForDesktop_1.0.2_amd64.deb">
        Linux (Debian)
      </DownloadLink>
    </li>
    <li>
      <DownloadLink
        href="https://github.com/diffix/desktop/releases/download/v1.0.2/DiffixForDesktop-1.0.2-1.x86_64.rpm"
      >
        Linux (RedHat)
      </DownloadLink>
    </li>
  </ul>

  <h3 class="mt-4 font-semibold text-xl">
    {$trans({
      en: "Previous versions",
      de: "Frühere Versionen"
    })}
  </h3>

  <p class="mt-2">
    <Trans>
      <svelte:fragment slot="en">
        Previous releases can be found in our
        <Link href="https://github.com/diffix/desktop/releases">GitHub repository</Link>.
      </svelte:fragment>
      <svelte:fragment slot="de">
        Frühere Versionen befinden sich in unserem
        <Link href="https://github.com/diffix/desktop/releases">GitHub-Repository</Link>.
      </svelte:fragment>
    </Trans>
  </p>

  <h2 class="mt-12 text-2xl">
    {$trans({
      en: "Sample Data",
      de: "Beispieldaten"
    })}
  </h2>

  <p class="mt-2">
    <Trans>
      <svelte:fragment slot="en">
        CSV files that can be used to test <b>Diffix for Desktop</b>. Descriptions of tables can be found
        <Link href="https://github.com/diffix/desktop/tree/master/sample_data">here</Link>.
      </svelte:fragment>
      <svelte:fragment slot="de">
        CSV-Dateien, die zum Testen verwendet werden können <b>Diffix für Desktop</b>. Die Beschreibungen der Tabellen
        finden Sie
        <Link href="https://github.com/diffix/desktop/tree/master/sample_data">hier</Link>.
      </svelte:fragment>
    </Trans>
  </p>

  <ul class="mt-2 list-disc list-inside">
    <li>
      <DownloadLink href="https://github.com/diffix/desktop/raw/master/sample_data/taxi.csv.zip">
        taxi.csv.zip
      </DownloadLink>
    </li>
    <li>
      <DownloadLink href="https://github.com/diffix/desktop/raw/master/sample_data/census.csv.zip">
        census.csv.zip
      </DownloadLink>
    </li>
  </ul>
</ContentPage>
