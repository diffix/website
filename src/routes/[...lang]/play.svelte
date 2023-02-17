<script lang="ts">
  import FAQItem from "$lib/components/FAQItem.svelte";
  import Link from "$lib/components/Link.svelte";
  import Trans from "$lib/components/Trans.svelte";
  import { trans, type LocalizedString } from "$lib/i18n";

  let tocItems: Array<{ id: LocalizedString; name: LocalizedString }> = [];

  function addToToc(id: LocalizedString, name: LocalizedString) {
    tocItems = [...tocItems, { id, name }];
  }
</script>

<svelte:head>
  <title>
    {$trans({
      en: "Open Diffix - Play",
      de: "Open Diffix - Ausprobieren"
    })}
  </title>
</svelte:head>

<div class="p-4 max-w-2xl lg:max-w-6xl mx-auto">
  <header id="faq-top" class="pt-12 lg:ml-80">
    <div class="mx-auto lg:max-w-2xl">
      <h1 class="text-5xl max-w-xl font-semibold">
        {$trans({
          en: "Play with Diffix",
          de: "Diffix ausprobieren"
        })}
      </h1>
    </div>
  </header>

  <div class="mt-16 lg:mt-0 mb-12">
    <div class="lg:fixed lg:w-80 lg:pt-24 lg:pr-4 lg:pb-8 lg:top-16 lg:bottom-0 lg:overflow-y-auto">
      <h2 class="block text-2xl w-full font-semibold">
        {$trans({
          en: "Table of contents",
          de: "Inhaltsübersicht"
        })}
      </h2>

      <ul class="mt-4 ml-4 space-y-1.5 text-sm list-disc list-outside">
        {#each tocItems as question (question.id)}
          <li>
            <Link href="#{$trans(question.id)}">{$trans(question.name)}</Link>
          </li>
        {/each}
      </ul>
    </div>

    <div class="lg:mt-12 lg:ml-80">
      <div class="mx-auto lg:max-w-2xl space-y-6 lg:space-y-12 pt-12 lg:pt-0">
        <FAQItem
          {addToToc}
          question={{
            en: "Introduction",
            de: "Einführung"
          }}
        >
          <Trans>
            <svelte:fragment slot="en">
              There are several ways to experiment with Diffix without going through the effort of setting up PostgreSQL
              and installing the <b>pg_diffix</b> extension. First and foremost, the Open Diffix project runs an online
              PostgreSQL server with <b>pg_diffix</b> and several representative databases. There are several ways to
              interact with our PostgreSQL service. Alternatively you can
              <Link href="/en/download/">download</Link>
              <b>Diffix Dashboards</b> and try it on sample CSV datasets we provide, or on your own CSV dataset.
              <p class="mt-4">
                As always, you can contact us at
                <Link href="mailto:hello@open-diffix.org">hello@open-diffix.org</Link> if you have questions or comments.
              </p>
            </svelte:fragment>
            <svelte:fragment slot="de">
              Es gibt mehrere Möglichkeiten, mit Diffix zu experimentieren, ohne sich die Mühe zu machen, PostgreSQL
              einzurichten und die Erweiterung <b>pg_diffix</b> zu installieren. In erster Linie betreibt das Open
              Diffix Projekt einen PostgreSQL Server mit <b>pg_diffix</b> und mehreren repräsentativen Datenbanken. Es
              gibt mehrere Möglichkeiten, mit unserem PostgreSQL-Dienst zu interagieren. Alternativ können Sie
              <b>Diffix Dashboards</b>
              <Link href="/de/download/">herunterladen</Link>
              und testen es mit den von uns bereitgestellten CSV-Beispieldatensätzen oder mit Ihrem eigenen CSV-Datensatz.
              <p class="mt-4">
                Schreiben Sie uns (<Link href="mailto:hello@open-diffix.org">hello@open-diffix.org</Link>) wenn Sie
                Fragen oder Kommentare haben.
              </p>
            </svelte:fragment>
          </Trans>
        </FAQItem>

        <FAQItem
          {addToToc}
          question={{
            en: "Documentation",
            de: "Dokumentation"
          }}
        >
          <h2 class="block text-1xl w-full font-bold">
            {$trans({
              en: "How to use Diffix",
              de: "Wie man Diffix verwendet"
            })}
          </h2>
          <ul class="mt-2 ml-8 space-y-1.0 list-disc list-outside">
            <li>
              <Trans>
                <svelte:fragment slot="en">
                  <Link href="https://github.com/diffix/pg_diffix/blob/master/docs/analyst_guide.md">
                    Analyst Guide
                  </Link>
                  (for SQL usage of <b>pg_diffix</b>, the PostgreSQL Diffix extension).
                </svelte:fragment>
                <svelte:fragment slot="de">
                  <Link href="https://github.com/diffix/pg_diffix/blob/master/docs/analyst_guide.md">
                    Leitfaden für Analysten
                  </Link>
                  (für die SQL-Verwendung von <b>pg_diffix</b>, der PostgreSQL-Diffix-Erweiterung)
                </svelte:fragment>
              </Trans>
            </li>
            <li>
              <Trans>
                <svelte:fragment slot="en">
                  <Link href="https://github.com/diffix/dashboards/blob/master/docs/en/operation.md">
                    Online instructions
                  </Link>
                  for Diffix Dashboards operation (also available in the application itself).
                </svelte:fragment>
                <svelte:fragment slot="de">
                  <Link href="https://github.com/diffix/dashboards/blob/master/docs/en/operation.md">
                    Online-Anleitung
                  </Link>
                  für den Betrieb von Diffix Dashboards (auch in der Anwendung verfügbar).
                </svelte:fragment>
              </Trans>
            </li>
            <li>
              <Trans>
                <svelte:fragment slot="en">
                  <Link href="https://github.com/diffix/desktop/blob/master/docs/en/operation.md">
                    Online instructions
                  </Link>
                  for (legacy) Diffix for Desktop operation (also available in the application itself).
                </svelte:fragment>
                <svelte:fragment slot="de">
                  <Link href="https://github.com/diffix/desktop/blob/master/docs/en/operation.md">
                    Online-Anleitung
                  </Link>
                  für den Betrieb von (Legacy) Diffix für Desktop (auch in der Anwendung verfügbar).
                </svelte:fragment>
              </Trans>
            </li>
            <li>
              <Trans>
                <svelte:fragment slot="en">
                  The online
                  <Link href="https://training.open-diffix.org/training">Training App</Link>
                  has built-in usage documentation.
                </svelte:fragment>
                <svelte:fragment slot="de">
                  <Link href="https://training.open-diffix.org/training">Die Online-Schulungs-App</Link>, hat eine
                  integrierte Nutzungsdokumentation.
                </svelte:fragment>
              </Trans>
            </li>
          </ul>
          <h2 class="mt-4 block text-1xl w-full font-bold">
            {$trans({
              en: "How to configure Diffix",
              de: "Wie man Diffix konfiguriert"
            })}
          </h2>
          <ul class="mt-2 ml-8 space-y-1.0 list-disc list-outside">
            <li>
              <Trans>
                <svelte:fragment slot="en">
                  A
                  <Link href="https://github.com/diffix/pg_diffix/blob/master/docs/admin_tutorial.md">
                    short tutorial
                  </Link>.
                </svelte:fragment>
                <svelte:fragment slot="de">
                  Eine
                  <Link href="https://github.com/diffix/pg_diffix/blob/master/docs/admin_tutorial.md">
                    Schnellanleitung
                  </Link>.
                </svelte:fragment>
              </Trans>
            </li>
            <li>
              <Trans>
                <svelte:fragment slot="en">
                  The
                  <Link href="https://github.com/diffix/pg_diffix/blob/master/docs/admin_guide.md">
                    complete install and configure documentation.
                  </Link>.
                </svelte:fragment>
                <svelte:fragment slot="de">
                  Die
                  <Link href="https://github.com/diffix/pg_diffix/blob/master/docs/admin_guide.md">
                    vollständige Installations- und Konfigurationsdokumentation
                  </Link>.
                </svelte:fragment>
              </Trans>
            </li>
          </ul>
          <h2 class="mt-4 block text-1xl w-full font-bold">
            {$trans({
              en: "How Diffix works",
              de: "Wie Diffix funktioniert"
            })}
          </h2>
          <ul class="mt-2 ml-8 space-y-1.0 list-disc list-outside">
            <li>
              <Trans>
                <svelte:fragment slot="en">
                  <Link href="/en/blog/diffix-elm-automates-what-statistics-offices-have-been-doing-for-decades/">
                    Short, intuitive, and easy to read
                  </Link>.
                </svelte:fragment>
                <svelte:fragment slot="de">
                  <Link href="/de/blog/diffix-elm-automates-what-statistics-offices-have-been-doing-for-decades/">
                    Kurz, intuitiv und leicht verständlich
                  </Link>.
                </svelte:fragment>
              </Trans>
            </li>
            <li>
              <Trans>
                <svelte:fragment slot="en">
                  The online version of the short
                  <Link href="https://github.com/diffix/desktop/blob/master/docs/en/anonymization.md">
                    description embedded in Diffix for Desktop
                  </Link>.
                </svelte:fragment>
                <svelte:fragment slot="de">
                  Die Online-Version der Kurzanleitung
                  <Link href="https://github.com/diffix/desktop/blob/master/docs/en/anonymization.md">
                    die in Diffix für Desktop eingebettet ist
                  </Link>.
                </svelte:fragment>
              </Trans>
            </li>
            <li>
              <Link href="https://arxiv.org/abs/2201.04351">
                {$trans({
                  en: "A full specification (10 pages) and risk analysis (26 pages)",
                  de: "Eine vollständige Spezifikation (10 Seiten) und eine Risikoanalyse (26 Seiten)"
                })}
              </Link>.
            </li>
          </ul>
        </FAQItem>

        <FAQItem
          {addToToc}
          question={{
            en: "Servers and Datasets",
            de: "Server und Datenbaken"
          }}
        >
          <Trans>
            <svelte:fragment slot="en">
              The following databases running <b>pg_diffix</b> are available online:
            </svelte:fragment>
            <svelte:fragment slot="de">
              Die folgenden Datenbanken mit <b>pg_diffix</b> sind online verfügbar:
            </svelte:fragment>
          </Trans>

          <div class="hidden sm:block shadow rounded-lg -mx-2 p-2 mt-4">
            <table class="table-fixed text-sm w-full">
              <thead class="text-left">
                <tr>
                  <th class="w-4/12">
                    {$trans({
                      en: "Host",
                      de: "Host"
                    })}
                  </th>
                  <th class="w-1/12">
                    {$trans({
                      en: "Port",
                      de: "Port"
                    })}
                  </th>
                  <th class="w-2/12">
                    {$trans({
                      en: "Database",
                      de: "Databank"
                    })}
                  </th>
                  <th class="w-2/12">
                    {$trans({
                      en: "User",
                      de: "User"
                    })}
                  </th>
                  <th class="w-2/12">
                    {$trans({
                      en: "Password",
                      de: "Password"
                    })}
                  </th>
                </tr>
              </thead>
              <tbody class="border-t-2">
                <tr class="hover:bg-gray-50">
                  <td>db001.gda-score.org</td>
                  <td>5432</td>
                  <td>banking0</td>
                  <td>direct_user</td>
                  <td>demo</td>
                </tr>
                <tr class="hover:bg-gray-50">
                  <td>db001.gda-score.org</td>
                  <td>5432</td>
                  <td>banking0</td>
                  <td>trusted_user</td>
                  <td>demo</td>
                </tr>
                <tr class="hover:bg-gray-50">
                  <td>db001.gda-score.org</td>
                  <td>5432</td>
                  <td>banking0</td>
                  <td>untrusted_user</td>
                  <td>demo</td>
                </tr>
                <tr class="hover:bg-gray-50">
                  <td>db001.gda-score.org</td>
                  <td>5432</td>
                  <td>taxi</td>
                  <td>direct_user</td>
                  <td>demo</td>
                </tr>
                <tr class="hover:bg-gray-50">
                  <td>db001.gda-score.org</td>
                  <td>5432</td>
                  <td>taxi</td>
                  <td>trusted_user</td>
                  <td>demo</td>
                </tr>
                <tr class="hover:bg-gray-50">
                  <td>db001.gda-score.org</td>
                  <td>5432</td>
                  <td>taxi</td>
                  <td>untrusted_user</td>
                  <td>demo</td>
                </tr>
                <tr class="hover:bg-gray-50">
                  <td>db001.gda-score.org</td>
                  <td>5432</td>
                  <td>census0</td>
                  <td>direct_user</td>
                  <td>demo</td>
                </tr>
                <tr class="hover:bg-gray-50">
                  <td>db001.gda-score.org</td>
                  <td>5432</td>
                  <td>census0</td>
                  <td>trusted_user</td>
                  <td>demo</td>
                </tr>
                <tr class="hover:bg-gray-50">
                  <td>db001.gda-score.org</td>
                  <td>5432</td>
                  <td>census0</td>
                  <td>untrusted_user</td>
                  <td>demo</td>
                </tr>
                <tr class="hover:bg-gray-50">
                  <td>db001.gda-score.org</td>
                  <td>5432</td>
                  <td>scihub</td>
                  <td>direct_user</td>
                  <td>demo</td>
                </tr>
                <tr class="hover:bg-gray-50">
                  <td>db001.gda-score.org</td>
                  <td>5432</td>
                  <td>scihub</td>
                  <td>trusted_user</td>
                  <td>demo</td>
                </tr>
                <tr class="hover:bg-gray-50">
                  <td>db001.gda-score.org</td>
                  <td>5432</td>
                  <td>scihub</td>
                  <td>untrusted_user</td>
                  <td>demo</td>
                </tr>
                <tr class="hover:bg-gray-50">
                  <td>demo-pg.open-diffix.org</td>
                  <td>5432</td>
                  <td>banking</td>
                  <td>direct_user</td>
                  <td>demo</td>
                </tr>
                <tr class="hover:bg-gray-50">
                  <td>demo-pg.open-diffix.org</td>
                  <td>5432</td>
                  <td>banking</td>
                  <td>trusted_user</td>
                  <td>demo</td>
                </tr>
                <tr class="hover:bg-gray-50">
                  <td>demo-pg.open-diffix.org</td>
                  <td>5432</td>
                  <td>banking</td>
                  <td>untrusted_user</td>
                  <td>demo</td>
                </tr>
                <tr class="hover:bg-gray-50">
                  <td>db001.gda-score.org</td>
                  <td>5432</td>
                  <td>moers</td>
                  <td>hackday</td>
                  <td>moers</td>
                </tr>
                <tr class="hover:bg-gray-50">
                  <td>db001.gda-score.org</td>
                  <td>5432</td>
                  <td>moers</td>
                  <td>hackday_direct</td>
                  <td>moers</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p class="mt-4">
            <Trans>
              <svelte:fragment slot="en">
                Databases with trusted_user and untrusted_user users are protected with Diffix (untrusted user mode has
                slightly stronger anonymity at the expense of less flexible SQL). Databases with direct_user users have
                no protections, and can be used to compare the raw data with Diffix' protected data.
              </svelte:fragment>
              <svelte:fragment slot="de">
                Datenbanken mit trusted_user- und untrusted_user-Benutzern werden mit Diffix geschützt (der Modus
                untrusted_user hat etwas stärkere Anonymität auf Kosten von weniger flexiblem SQL). Datenbanken mit
                direct_user-Benutzern haben keine Schutzmaßnahmen und können zum Vergleich der Rohdaten mit den
                geschützten Daten von Diffix verwendet werden.
              </svelte:fragment>
            </Trans>
          </p>
          <p class="mt-4">
            {$trans({
              en: "The databases contain the following tables and data:",
              de: "Die Datenbanken enthalten die folgenden Tabellen und Daten:"
            })}
          </p>
          <div class="hidden sm:block shadow rounded-lg -mx-2 p-2 mt-4">
            <table class="table-fixed text-sm w-full">
              <thead class="text-left">
                <tr>
                  <th class="w-2/12">
                    {$trans({
                      en: "Database",
                      de: "Databank"
                    })}
                  </th>
                  <th class="w-9/12">
                    {$trans({
                      en: "Description",
                      de: "Beschreibung"
                    })}
                  </th>
                </tr>
              </thead>
              <tbody class="border-t-2">
                <tr class="hover:bg-gray-50">
                  <td>banking0</td>
                  <td>
                    <Trans>
                      <svelte:fragment slot="en">
                        The banking0 database contains a set of banking transactions and other data from a Czech bank.
                        It has seven different tables. The transactions table for example contains over 1.2M
                        transactions across 5300 customers.
                      </svelte:fragment>
                      <svelte:fragment slot="de">
                        Die Datenbank banking0 enthält eine Reihe von Bankgeschäften und anderen Daten einer
                        tschechischen Bank. Sie besteht aus sieben verschiedenen Tabellen. " + "Die Transaktionstabelle
                        enthält zum Beispiel über 1,2 Millionen Transaktionen von 5300 Kunden.
                      </svelte:fragment>
                    </Trans>
                  </td>
                </tr>
                <tr class="hover:bg-gray-50">
                  <td>taxi</td>
                  <td>
                    <Trans>
                      <svelte:fragment slot="en">
                        The taxi database contains four hours of New York City taxi rides (from Jan. 8, 2013, 8AM to
                        noon). It has over 95000 taxi rides driven by over 11000 drivers. It has 29 columns.
                      </svelte:fragment>
                      <svelte:fragment slot="de">
                        Die Taxidatenbank enthält vier Stunden an Taxifahrten in New York City (vom 8. Januar 2013, ab 8
                        Uhr morgens bis 12 Uhr mittags). " + "Die Datenbank enthält 29 Spalten und über 95000
                        Taxifahrten, die von über 11000 Fahrern durchgeführt wurden.
                      </svelte:fragment>
                    </Trans>
                  </td>
                </tr>
                <tr class="hover:bg-gray-50">
                  <td>census0</td>
                  <td>
                    <Trans>
                      <svelte:fragment slot="en">
                        The census0 database is taken from the US Census of 2013. This dataset is already anonymized by
                        the US Census Bureau through sampling, aggregation, and other means. It contains 120 columns and
                        represents 250K individuals.
                      </svelte:fragment>
                      <svelte:fragment slot="de">
                        Die Zensus0-Datenbank stammt aus der Volkszählung der USA von 2013. Dieser Datensatz wurde vom
                        US Census Bureau bereits durch Stichproben, Aggregation und andere Mittel anonymisiert. Er
                        enthält 120 Spalten und repräsentiert 250.000 Personen.
                      </svelte:fragment>
                    </Trans>
                  </td>
                </tr>
                <tr class="hover:bg-gray-50">
                  <td>scihub</td>
                  <td>
                    <Trans>
                      <svelte:fragment slot="en">
                        The scihub database contains one week’s worth of downloads from the Sci-Hub scientific papers
                        free download system. The week is the first week of September 2015. It has 15 columns, and
                        contains over 1.1M downloads from around 160K different pseudonymized IP addresses.
                      </svelte:fragment>
                      <svelte:fragment slot="de">
                        Die scihub-Datenbank enthält die Downloads einer Woche aus dem Sci-Hub-System zum kostenlosen
                        Herunterladen wissenschaftlicher Arbeiten. Die Woche ist die erste Woche im September 2015. Die
                        Datenbank hat 15 Spalten und enthält über 1,1 Millionen Downloads von rund 160.000 verschiedenen
                        pseudonymisierten IP-Adressen.
                      </svelte:fragment>
                    </Trans>
                  </td>
                </tr>
                <tr class="hover:bg-gray-50">
                  <td>banking</td>
                  <td
                    >{$trans({
                      en: "This is a simplified subset of the banking0 data.",
                      de: "Hierbei handelt es sich um eine vereinfachte Teilmenge der banking0-Daten."
                    })}
                  </td>
                </tr>
                <tr class="hover:bg-gray-50">
                  <td>moers</td>
                  <td>
                    <Trans>
                      <svelte:fragment slot="en">
                        The moers database contains traffic violations issued in the German city of Moers. Synthetic
                        license plate numbers have been added.
                      </svelte:fragment>
                      <svelte:fragment slot="de">
                        Die Moerser Datenbank enthält Verkehrsverstöße, die in der deutschen Stadt Moers begangen
                        wurden. Fiktive Nummernschilder sind hinzugefügt worden.
                      </svelte:fragment>
                    </Trans>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </FAQItem>

        <FAQItem
          {addToToc}
          question={{
            en: "Online Training App",
            de: "Online Training App"
          }}
        >
          <Trans>
            <svelte:fragment slot="en">
              The easiest and best way to get a quick feel for how Diffix operates is the
              <Link href="https://training.open-diffix.org/training">online training app</Link>.
            </svelte:fragment>
            <svelte:fragment slot="de">
              Der einfachste und beste Weg, um ein schnelles Gefühl für die Funktionsweise von Diffix zu bekommen, ist
              die <Link href="https://training.open-diffix.org/training">Online-Schulungs-App</Link>.
            </svelte:fragment>
          </Trans>

          <p class="mt-6">
            <img src="/figs/training-screenshot.png" width="500" />
          </p>
          <p class="mt-6">
            <Trans>
              <svelte:fragment slot="en">
                The training app contains examples of each of Diffix' query features. It displays anonymized and
                original data side-by-side to show how Diffix distorts and hides data. The training app also lets you
                write your own SQL queries against both the Diffix and original data.
              </svelte:fragment>
              <svelte:fragment slot="de">
                Die Trainings-App enthält Beispiele für jede der Diffix-Abfragefunktionen. Sie zeigt anonymisierte und
                Originaldaten nebeneinander an, um zu verdeutlichen, wie Diffix Daten verzerrt und verschleihert. Mit
                der Trainings-App können Sie auch Ihre eigenen SQL-Abfragen für die Diffix- und Originaldaten schreiben.
              </svelte:fragment>
            </Trans>
          </p>
          <p class="mt-4">
            <Trans>
              <svelte:fragment slot="en">
                The training app has connections to the banking0, taxi, census0, and scihub databases. It takes only a
                few minutes to get an immediate understanding of Diffix' basic query capabilities, and about 30 minutes
                to run through every example.
              </svelte:fragment>
              <svelte:fragment slot="de">
                Die Schulungs-App hat Verbindungen zu den Datenbanken banking0, taxi, census0 und scihub. Es dauert nur
                wenige Minuten, um die grundlegenden Abfragefunktionen von Diffix zu verstehen und etwa 30 Minuten, um
                jedes Beispiel durchzugehen.
              </svelte:fragment>
            </Trans>
          </p>
        </FAQItem>

        <FAQItem
          {addToToc}
          question={{
            en: "SQL Clients",
            de: "SQL-Clients"
          }}
        >
          <Trans>
            <svelte:fragment slot="en">
              In principle, any SQL client that supports PostgreSQL should work with <b>pg_diffix</b>. In practice, each
              SQL client has its own idiosyncrasies in how it explores the database, and so not all SQL clients work
              with <b>pg_diffix</b>.
            </svelte:fragment>
            <svelte:fragment slot="de">
              Im Prinzip sollte jeder SQL-Client, der PostgreSQL unterstützt, mit <b>pg_diffix</b> funktionieren. In der
              Praxis hat jeder SQL-Client seine eigenen Eigenheiten, wie er die Datenbank erkundet, und daher
              funktionieren nicht alle SQL-Clients mit <b>pg_diffix</b>.
            </svelte:fragment>
          </Trans>

          <p class="mt-6">
            <img src="/figs/dbeaver-screenshot.png" width="500" />
          </p>
          <p class="mt-6">
            <Trans>
              <svelte:fragment slot="en">
                We have successfully used two SQL clients with <b>pg_diffix</b>,
                <Link href="https://www.pgadmin.org/">pgAdmin</Link>
                and
                <Link href="https://dbeaver.io/">DBeaver</Link>
              </svelte:fragment>
              <svelte:fragment slot="de">
                Wir haben mit <b>pg_diffix</b> erfolgreich zwei SQL-Clients eingesetzt:
                <Link href="https://www.pgadmin.org/">pgAdmin</Link>
                und
                <Link href="https://dbeaver.io/">DBeaver</Link>
              </svelte:fragment>
            </Trans>
          </p>
        </FAQItem>

        <FAQItem
          {addToToc}
          question={{
            en: "Software APIs and Notebooks",
            de: "Software-APIs und Notebooks"
          }}
        >
          <Trans>
            <svelte:fragment slot="en">
              Any software with a PostgreSQL interface can work with <b>pg_diffix</b>. We have prepared
              <Link href="https://github.com/diffix/pg_diffix/blob/release/elm/docs/banking.ipynb">
                a demo notebook
              </Link>
              (see <Link href="/en/demo/">here</Link> for a description) using psycopg2 and ipython-sql that you may use
              as a template for building your own notebook.
            </svelte:fragment>
            <svelte:fragment slot="de">
              Jede Software mit einer PostgreSQL-Schnittstelle kann mit <b>pg_diffix</b> arbeiten. Wir haben ein
              <Link href="https://github.com/diffix/pg_diffix/blob/release/elm/docs/banking.ipynb">Demo-Notebook</Link>
              vorbereitet (<Link href="/de/demo/">hier</Link> erhalten Sie weitere Angaben und Details) unter Verwendung
              von psycopg2 und ipython-sql, das Sie als Vorlage für die Erstellung Ihres eigenen Notebooks verwenden können.
            </svelte:fragment>
          </Trans>
        </FAQItem>

        <FAQItem
          {addToToc}
          question={{
            en: "Diffix Dashboards",
            de: "Diffix Dashboards"
          }}
        >
          <Trans>
            <svelte:fragment slot="en">
              If you prefer to play with your own data, one quick and easy way to get started is with
              <Link href="/en/blog/diffix-dashboards/">Diffix Dashboards</Link>
              (<Link href="/en/download/">download</Link>), a standalone desktop for Windows that works with a local CSV
              file.
            </svelte:fragment>
            <svelte:fragment slot="de">
              Wenn Sie mit Ihren eigenen Daten experimentieren möchten, können Sie schnell und einfach mit
              <Link href="/de/blog/diffix-dashboards/">Diffix Dashboards</Link>
              (<Link href="/de/download/">Download</Link>) loslegen. Diffix Dashboards ist eine eigenständige Anwendung
              für Windows, die mit einer lokalen CSV-Datei arbeitet.
            </svelte:fragment>
          </Trans>

          <p class="mt-6">
            <img src="/figs/desktop-screenshot.png" width="500" />
          </p>
          <p class="mt-6">
            <Trans>
              <svelte:fragment slot="en">
                Diffix Dashboards bundles the Business Intelligence tool <Link href="metabase.com">Metabase</Link> with
                <b>pg_diffix</b>. It does not require SQL, but rather can be used with a simple GUI query-builder. It
                also supports writing queries in SQL. If you don't have your own data to play with, we offer a couple of
                sample CSV datasets from the <Link href="/en/download/">download</Link> page.
              </svelte:fragment>
              <svelte:fragment slot="de">
                Diffix Dashboards bündelt das Business Intelligence-Tool <Link href="metabase.com">Metabase</Link> mit
                <b>pg_diffix</b>. Es erfordert kein SQL, sondern kann mit einem einfachen GUI-Abfragegenerator verwendet
                werden. Es unterstützt auch das Schreiben von Abfragen in SQL. Wenn Sie keine eigenen Daten haben, mit
                denen Sie experimentieren können, bieten wir Ihnen eine Reihe von CSV-Beispieldatensätzen zum
                <Link href="/de/download/">Herunterladen</Link> an.
              </svelte:fragment>
            </Trans>
          </p>
        </FAQItem>

        <FAQItem
          {addToToc}
          question={{
            en: "Metabase",
            de: "Metabase"
          }}
        >
          <Trans>
            <svelte:fragment slot="en">
              <Link href="https://www.metabase.com">Metabase</Link>
              is a popular open source Business Intelligence (data visualization) tool. It uses SQL to access data and works
              with a variety of backend database technologies including PostgreSQL and <b>pg_diffix</b>. Metabase
              supports data visualization and dashboards.
            </svelte:fragment>
            <svelte:fragment slot="de">
              <Link href="https://www.metabase.com">Metabase</Link>
              ist ein beliebtes Open-Source Business Intelligence Tool zur Datenvisualisierung. Es verwendet SQL für den
              Datenzugriff und arbeitet mit einer Vielzahl von Backend-Datenbanktechnologien wie PostgreSQL und
              <b>pg_diffix</b>. Metabase unterstützt Datenvisualisierung und Dashboards.
            </svelte:fragment>
          </Trans>
          <p class="mt-6">
            <img src="/figs/metabase-screenshot.png" width="500" />
          </p>
          <p class="mt-6">
            {$trans({
              en: "We are running an online Metabase server that connects with the moers database. Login credentials are:",
              de: "Wir betreiben einen Metabase-Server, der sich mit der Moers-Datenbank verbindet. Die Anmeldedaten sind:"
            })}
          </p>
          <div class="hidden sm:block shadow rounded-lg -mx-2 p-2 mt-4">
            <table class="table-fixed text-sm w-full">
              <thead class="text-left">
                <tr>
                  <th class="w-2/12">
                    {$trans({
                      en: "URL",
                      de: "URL"
                    })}
                  </th>
                  <th class="w-3/12">
                    {$trans({
                      en: "User",
                      de: "User"
                    })}
                  </th>
                  <th class="w-2/12">
                    {$trans({
                      en: "Password",
                      de: "Password"
                    })}
                  </th>
                </tr>
              </thead>
              <tbody class="border-t-2">
                <tr class="hover:bg-gray-50">
                  <td>
                    <Link href="https://metabase.open-diffix.org/">metabase.open-diffix.org</Link>
                  </td>
                  <td> participant@moershackday.de </td>
                  <td> moershackday2022 </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p class="mt-4">
            <Trans>
              <svelte:fragment slot="en">
                Metabase has two means of writing queries, through a GUI query-builder and with SQL. The query-builder
                translates the users selections into SQL. Because Diffix uses a restricted subset of SQL, not all of the
                query-builder works with the <b>pg_diffix</b> back end. Practically speaking, the user should expect to write
                SQL queries when using Metabase with Diffix.
              </svelte:fragment>
              <svelte:fragment slot="de">
                Die Metabase bietet zwei Möglichkeiten zum Schreiben von Abfragen: über einen GUI-Query-Builder und mit
                SQL. Der Query-Builder setzt die Auswahl des Benutzers in SQL um. Da Diffix eine eingeschränkte
                Teilmenge von SQL verwendet, funktioniert nicht der gesamte Query-Builder mit dem <b>pg_diffix</b
                >-Backend. In der Praxis sollte der Benutzer erwarten, dass er SQL-Abfragen schreibt, wenn er Metabase
                mit Diffix verwendet.
              </svelte:fragment>
            </Trans>
          </p>
          <p class="mt-4">
            <Trans>
              <svelte:fragment slot="en">
                We have prepared
                <Link href="https://github.com/diffix/moers-hackday/blob/main/metabase.md">brief instructions</Link>
                on how to do this.
              </svelte:fragment>
              <svelte:fragment slot="de">
                Wir haben eine
                <Link href="https://github.com/diffix/moers-hackday/blob/main/metabase.md">
                  kurze Anleitung geschrieben
                </Link>, wie man das macht vorbereitet.
              </svelte:fragment>
            </Trans>
          </p>
        </FAQItem>

        <FAQItem
          {addToToc}
          question={{
            en: "A visual comparison",
            de: "Ein visueller Vergleich"
          }}
        >
          <Trans>
            <svelte:fragment slot="en">
              We have prepared a Diffix demo in the form of a
              <Link href="https://taxi-heatmap.open-diffix.org/">heatmap visualization of the NYC taxi data.</Link>
              (You can find a description
              <Link href="/en/blog/nyc-taxi-data-heatmap/">here</Link>
              ). This demo displays the heatmap built from Diffix side-by-side with the corresponding heatmap built from
              the raw data. It gives a concrete impression of the power and accuracy of Diffix anonymization.
            </svelte:fragment>
            <svelte:fragment slot="de">
              Wir haben eine Diffix-Demo in Form einer
              <Link href="https://taxi-heatmap.open-diffix.org/">
                Heatmap-Visualisierung von Taxidaten aus New York
              </Link> erstellt. (Sie können eine Beschreibung <Link href="/de/blog/nyc-taxi-data-heatmap/">hier</Link> erhalten).
              Diese Demo zeigt die mit Diffix erstellte Heatmap Seite an Seite mit der entsprechenden Heatmap, die aus den
              Rohdaten erstellt wurde. Sie vermittelt einen konkreten Eindruck von der Leistungsfähigkeit und Genauigkeit
              der Diffix-Anonymisierung.
            </svelte:fragment>
          </Trans>

          <p class="mt-6">
            <img src="/blog/figs/speed-fare-diffix.png" width="500" />
          </p>
          <p class="mt-6" />
        </FAQItem>
      </div>
    </div>
  </div>
</div>
