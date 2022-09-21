<script>
  import FAQItem from "../components/FAQItem.svelte";
  import Link from "../components/Link.svelte";

  let tocItems = [];

  function addToToc(id, name) {
    tocItems = [...tocItems, { id, name }];
  }
</script>

<svelte:head>
  <title>Open Diffix - Play</title>
</svelte:head>

<div class="p-4 max-w-2xl lg:max-w-6xl mx-auto">
  <header id="faq-top" class="pt-12 lg:ml-80">
    <div class="mx-auto lg:max-w-2xl">
      <h1 class="text-5xl max-w-xl font-semibold">Play with Diffix</h1>
    </div>
  </header>

  <div class="mt-16 lg:mt-0 mb-12">
    <div class="lg:fixed lg:w-80 lg:pt-24 lg:pr-4 lg:pb-8 lg:top-16 lg:bottom-0 lg:overflow-y-auto">
      <h2 class="block text-2xl w-full font-semibold">Table of contents</h2>

      <ul class="mt-4 ml-4 space-y-1.5 text-sm list-disc list-outside">
        {#each tocItems as question (question.id)}
          <li>
            <Link href="#{question.id}">{question.name}</Link>
          </li>
        {/each}
      </ul>
    </div>

    <div class="lg:mt-12 lg:ml-80">
      <div class="mx-auto lg:max-w-2xl space-y-6 lg:space-y-12 pt-12 lg:pt-0">
        <FAQItem {addToToc} question="Introduction">
          There are several ways to experiment with Diffix without going through the effort of setting up PostgreSQL and installing the <b>pg_diffix</b> extension. First and foremost, the Open Diffix project runs an online PostgreSQL server with <b>pg_diffix</b> and several representative databases. There are several ways to interact with our PostgreSQL service. Alternatively you can
          <Link href="
          /download
          ">
          download
          </Link>
          <b>Diffix for Desktop</b> and try it on sample CSV datasets we provide, or on your own CSV dataset.
          <p class="mt-4">
          As always, you can contact us at 
          <Link href="mailto:hello@open-diffix.org">hello@open-diffix.org</Link> if you have questions or comments.
          </p>
        </FAQItem>


        <FAQItem {addToToc} question="Documentation">
          <h2 class="block text-1xl w-full font-bold">
            How to use Diffix
          </h2>
          <ul class="mt-2 ml-8 space-y-1.0 list-disc list-outside">
            <li>
              <Link href="
              https://github.com/diffix/pg_diffix/blob/master/docs/analyst_guide.md
              ">
              Analyst Guide
              </Link>
              (for SQL usage of pg_diffix, the PostgreSQL Diffix extension).
            </li>
            <li>
              <Link href="
              https://github.com/diffix/desktop/blob/master/docs/en/operation.md
              ">
              Online instructions
              </Link>
              for Diffix for Desktop operation (also available in the application itself).
            </li>
            <li>
              The online
              <Link href="
              https://training.open-diffix.org/training
              ">
              Training App
              </Link>
              has built in usage documentation.
            </li>
          </ul>
          <h2 class="mt-4 block text-1xl w-full font-bold">
            How to configure Diffix
          </h2>
          <ul class="mt-2 ml-8 space-y-1.0 list-disc list-outside">
            <li>
              A
              <Link href="
              https://github.com/diffix/pg_diffix/blob/master/docs/admin_tutorial.md
              ">
              short tutorial.
              </Link>
            </li>
            <li>
              The
              <Link href="
              https://github.com/diffix/pg_diffix/blob/master/docs/admin_guide.md
              ">
              complete install and configure documentation.
              </Link>
            </li>
          </ul>
          <h2 class="mt-4 block text-1xl w-full font-bold">
            How Diffix works
          </h2>
          <ul class="mt-2 ml-8 space-y-1.0 list-disc list-outside">
            <li>
              <Link href="
              /blog/diffix-elm-automates-what-statistics-offices-have-been-doing-for-decades
              ">
              Short, intuitive, and easy to read.
              </Link>
            </li>
            <li>
              The online version of the short
              <Link href="
              https://github.com/diffix/desktop/blob/master/docs/en/anonymization.md
              ">
              description embedded in Diffix for Desktop.
              </Link>
            </li>
            <li>
              <Link href="
              https://arxiv.org/abs/2201.04351
              ">
              A full specification (10 pages) and risk analysis (26 pages).
              </Link>
            </li>
          </ul>
        </FAQItem>

        <FAQItem {addToToc} question="Servers and Datasets">

          The following databases running <b>pg_diffix</b> are available online:

          <div class="hidden sm:block shadow rounded-lg -mx-2 p-2 mt-4">
            <table class="table-fixed text-sm w-full">
              <thead class="text-left">
                <tr>
                  <th class="w-4/12">Host</th>
                  <th class="w-1/12">Port</th>
                  <th class="w-2/12">Database</th>
                  <th class="w-2/12">User</th>
                  <th class="w-2/12">Password</th>
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
          Databases with trusted_user and untrusted_user users are protected with Diffix (untrusted user mode has slightly stronger anonymity at the expense of less flexible SQL). Databases with direct_user users have no protections, and can be used to compare the raw data with Diffix' protected data.

          <p class="mt-4">
            The databases contain the following tables and data:

          <div class="hidden sm:block shadow rounded-lg -mx-2 p-2 mt-4">
            <table class="table-fixed text-sm w-full">
              <thead class="text-left">
                <tr>
                  <th class="w-2/12">Database</th>
                  <th class="w-9/12">Description</th>
                </tr>
              </thead>
              <tbody class="border-t-2">
                <tr class="hover:bg-gray-50">
                  <td>banking0</td>
                  <td>The banking0 database contains a set of banking transactions and other data from a Czech bank. It has seven different tables. The transactions table for example contains over 1.2M transactions across 5300 customers.</td>
                </tr>
                <tr class="hover:bg-gray-50">
                  <td>taxi</td>
                  <td>The taxi database contains four hours of New York City taxi rides (from Jan. 8, 2013, 8AM to noon). It has over 95000 taxi rides driven by over 11000 drivers. It has 29 columns.</td>
                </tr>
                <tr class="hover:bg-gray-50">
                  <td>census0</td>
                  <td>The census0 database is taken from the US Census of 2013. This dataset is already anonymized by the US Census Bureau through sampling, aggregation, and other means. It contains 120 columns and represents 250K individuals.</td>
                </tr>
                <tr class="hover:bg-gray-50">
                  <td>scihub</td>
                  <td>The scihub database contains one week’s worth of downloads from the Sci-Hub scientific papers free download system. The week is the first week of September 2015. It has 15 columns, and contains over 1.1M downloads from around 160K different pseudonymized IP addresses.</td>
                </tr>
                <tr class="hover:bg-gray-50">
                  <td>banking</td>
                  <td>This is a simplified subset of the banking0 data.</td>
                </tr>
                <tr class="hover:bg-gray-50">
                  <td>moers</td>
                  <td>The moers database contains traffic violations issued in the German city of Moers. Synthetic license plate numbers have been added.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </FAQItem>

        <FAQItem {addToToc} question="Online Training App">
          The easiest and best way to get a quick feel for how Diffix operates is the
              <Link href="
              https://training.open-diffix.org/training
              ">
              online training app.
              </Link>
            <p class="mt-6">
            <img src="/static/figs/training-screenshot.png" width="500">
          <p class="mt-6">
            The training app contains examples of each of Diffix' query features. It displays anonymized and original data side-by-side to show how Diffix distorts and hides data. The training app also lets you write your own SQL queries against both the Diffix and original data.
          <p class="mt-4">
            The training app has connections to the banking0, taxi, census0, and scihub databases. It takes only a few minutes to get an immediate understanding of Diffix' basic query capabilities, and about 30 minutes to run through every example.
        </FAQItem>

        <FAQItem {addToToc} question="Metabase">
              <Link href="
              https://www.metabase.com
              ">
              Metabase
              </Link>
          is a popular open source Business Intelligence (data visualization) tool. It uses SQL to access data and works with a variety of backend database technologies including PostgreSQL and <b>pg_diffix</b>. Metabase supports data visualization and dashboards.
            <p class="mt-6">
            <img src="/static/figs/metabase-screenshot.png" width="500">
          <p class="mt-6">
            We are running an online Metabase server that connects with the moers database. Login credentials are:

          <div class="hidden sm:block shadow rounded-lg -mx-2 p-2 mt-4">
            <table class="table-fixed text-sm w-full">
              <thead class="text-left">
                <tr>
                  <th class="w-2/12">URL</th>
                  <th class="w-3/12">User</th>
                  <th class="w-2/12">Password</th>
                </tr>
              </thead>
              <tbody class="border-t-2">
                <tr class="hover:bg-gray-50">
                  <td>
              <Link href="
                https://metabase.open-diffix.org/
              ">
                metabase.open-diffix.org
              </Link>
                  </td>
                  <td> participant@moershackday.de </td>
                  <td> moershackday2022 </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p class="mt-4">
            Metabase has two means of writing queries, through a GUI query-builder and with SQL. The query-builder translates the users selections into SQL. Because Diffix uses a restricted subset of SQL, not all of the query-builder works with the <b>pg_diffix</b> back end. Practically speaking, the user should expect to write SQL queries when using Metabase with Diffix.
          <p class="mt-4">
            We have prepared
              <Link href="
                https://github.com/diffix/moers-hackday/blob/main/metabase.md
              ">
                brief instructions 
              </Link>
            on how to do this.

        </FAQItem>

        <FAQItem {addToToc} question="SQL Clients">
          In principle, any SQL client that supports PostgreSQL should work with <b>pg_diffix</b>. In practice, each SQL client has its own idiosynchrocies in how it explores the database, and so not all SQL clients work with <b>pg_diffix</b>.

          <p class="mt-6">
            <img src="/static/figs/dbeaver-screenshot.png" width="500">
          <p class="mt-6">
            We have successfully used two SQL clients with <b>pg_diffix</b>,
              <Link href="
                https://www.pgadmin.org/
              ">
                pgAdmin
              </Link>
              and
              <Link href="
                https://dbeaver.io/
              ">
                DBeaver
              </Link>
        </FAQItem>

        <FAQItem {addToToc} question="Software APIs and Notebooks">
          Any software with a PostgreSQL interface can work with <b>pg_diffix</b>. We have prepared
              <Link href="
                /demo
              ">
                a demo notebook
              </Link>
            using psycopg2 and ipython-sql that you may use as a template for building your own notebook.

        </FAQItem>

        <FAQItem {addToToc} question="Diffix for Desktop">
          If you prefer to play with your own data, one quick and easy way to get started is with
          <Link href="
          /download
          ">
          Diffix for Desktop,
          </Link>
          a standalone desktop for Windows, Mac, and Linux that works with a local CSV file.

          <p class="mt-6">
            <img src="/static/figs/desktop-screenshot.png" width="500">

          <p class="mt-6">
            Diffix for Desktop does not require SQL, but rather works with a simple GUI query-builder. It lacks all of the SQL features of <b>pg_diffix</b>, but is very easy to use. If you don't have your own data to play with, we offer a couple of sample CSV datasets from the
          <Link href="
          /download
          ">
          download
          </Link>
          page.
        </FAQItem>

        <FAQItem {addToToc} question="A visual comparison">
          We have prepared a Diffix demo in the form of a
          <Link href="
          https://taxi-heatmap.open-diffix.org/
          ">
          heatmap visualization of the NYC taxi data.
          </Link>
          (You can find a description
          <Link href="
          /blog/nyc-taxi-data-heatmap
          ">
          here
          </Link>
          ).
          This demo displays the heatmap built from Diffix side-by-side with the corresponding heatmap built from the raw data. It gives a concrete impression of the power and accuracy of Diffix anonymization.

          <p class="mt-6">
          <img src="/static/blog/figs/speed-fare-diffix.png" width="500">
          <p class="mt-6">
        </FAQItem>

      </div>
    </div>
  </div>
</div>
