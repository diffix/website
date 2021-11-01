<script>
  import Wordmark from "../components/Wordmark.svelte";
  import Link from "../components/Link.svelte";
  import CopyableCommand from "../components/CopyableCommand.svelte";
</script>

<svelte:head>
  <title>open-diffix - Demo</title>
</svelte:head>

<div class="p-4">
  <header class="max-w-xl pt-12 mx-auto">
    <h1 class="block text-5xl font-semibold">PostgreSQL Demo</h1>
  </header>

  <div class="max-w-xl mx-auto mt-8">
    <p>
      <Wordmark /> for PostgreSQL is still under development, but we are happy to show you the progress we have made to date.
    </p>

    <div class="bg-gray-50 border shadow-sm my-6 -mx-2 px-4 py-2 rounded-lg text-gray-700">
      <h2 class="text-2xl">TL;DR</h2>

      <p class="mt-2 text-sm">
        If you are impatient, go ahead and connect to the anonymized PostgreSQL database from your command line using:
      </p>
      <CopyableCommand cmd="psql postgresql://banking_publish:demo@demo-pg.open-diffix.org/banking" />
    </div>

    <h2 class="mt-12 text-2xl">Long version</h2>
    <p class="mt-3">
      We are hosting a PostgreSQL database instance containing a slightly altered version of the 20 odd year old
      <Link href="https://data.world/lpetrocelli/czech-financial-dataset-real-anonymized-transactions"
        >Berka bank dataset</Link
      >.
    </p>

    <p class="mt-2">
      The PostgreSQL instance has the Open Diffix plugin installed and enabled in an early version of the Publish mode.
      This is the mode whereby an analyst is expected not to be malicious, and is assumed to also have access to the raw
      data (like you will too), but wishes to produce a report or dashboard that is safe to share with others.
    </p>

    <h2 class="mt-6 text-xl">Capabilities</h2>
    <p class="mt-2">
      You will be able to play with a tech demo at this point. Most notably, the query capabilities will be severely
      restricted. Specifically, the only aggregate functions available in the current demo are <span class="font-mono"
        >COUNT(*)</span
      >, <span class="font-mono">COUNT(x)</span>
      and <span class="font-mono">COUNT(DISTINCT x)</span>. More will be added soon.
    </p>
    <p class="mt-2">
      To learn about how pg_diffix anonymizes data, please consult the
      <Link href="https://github.com/diffix/pg_diffix_extension/blob/main/documents/publish-short-anon.md"
        >Overview of Anonymization Mechanisms for Diffix Publish</Link
      > on Github.
    </p>

    <h2 class="mt-6 text-xl">Credentials</h2>
    <p class="mt-2">
      You are given the credentials for two distinct PostgreSQL roles. One is called <span>banking</span> and gives you
      read-only access to all the data in the database (not anonymized). The other is called
      <span>banking_publish</span> and gives you access to the same tables, but with the anonymization restrictions applied.
    </p>

    <div class="sm:hidden mt-4 flex w-100">
      <div class="w-1/2">
        <h3 class="text-lg font-medium">Not anonymized</h3>
        <div>
          <span class="font-medium">Role:</span>
          banking
        </div>
        <div>
          <span class="font-medium">Password:</span>
          demo
        </div>
        <div>
          <span class="font-medium">Database:</span>
          banking
        </div>
      </div>

      <div class="w-1/2">
        <h3 class="text-lg font-medium">Anonymized</h3>
        <div>
          <span class="font-medium">Role:</span>
          banking_publish
        </div>
        <div>
          <span class="font-medium">Password:</span>
          demo
        </div>
        <div>
          <span class="font-medium">Database:</span>
          banking
        </div>
      </div>
    </div>

    <div class="hidden sm:block shadow rounded-lg -mx-2 p-2 mt-4">
      <table class="table-fixed text-sm w-full">
        <thead class="text-left">
          <tr>
            <th class="w-3/12">Role</th>
            <th class="w-2/12">Password</th>
            <th class="w-2/12">DB name</th>
            <th class="w-5/12">Description</th>
          </tr>
        </thead>
        <tbody class="border-t-2">
          <tr class="hover:bg-gray-50">
            <td>banking</td>
            <td>demo</td>
            <td>banking</td>
            <td>Read-only. Not anonymized</td>
          </tr>

          <tr class="hover:bg-gray-50">
            <td>banking_publish</td>
            <td>demo</td>
            <td>banking</td>
            <td>Read-only. Anonymized</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p class="mt-6 sm:mt-10">
      If you have the
      <Link href="https://blog.timescale.com/tutorials/how-to-install-psql-on-mac-ubuntu-debian-windows/"
        >PostgreSQL client tools</Link
      >
      installed on your machine you can connect as the <span class="font-mono">banking</span> role with:
      <CopyableCommand cmd="psql postgresql://banking:demo@demo-pg.open-diffix.org/banking" />

      <span class="inline-block mt-2">
        and as the <span class="font-mono">banking_publish</span> role with:
        <CopyableCommand cmd="psql postgresql://banking_publish:demo@demo-pg.open-diffix.org/banking" />
      </span>
    </p>

    <h2 class="mt-12 text-2xl">Examples</h2>
    <p class="mt-2">
      For some inspiration, you can view an example <Link href="https://github.com/diffix/demo_notebook"
        >Python notebook here</Link
      >.
    </p>

    <h2 class="mt-12 text-2xl">Help</h2>
    <p class="mt-2">
      If you require help, you want to report a bug or request a feature, please do so in our <Link
        href="https://github.com/diffix/pg_diffix_extension">Github repository</Link
      >.
    </p>
  </div>
</div>
