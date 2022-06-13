<script>
  import ContentPage from "../components/ContentPage.svelte";
  import Link from "../components/Link.svelte";
  import CopyableCommand from "../components/CopyableCommand.svelte";
</script>

<ContentPage title="PostgreSQL Demo">
  <p class="mt-3">
    We are hosting a PostgreSQL database instance containing a slightly altered version of the 20 odd year old
    <Link href="https://data.world/lpetrocelli/czech-financial-dataset-real-anonymized-transactions"
      >Berka bank dataset</Link
    >. The PostgreSQL instance has the Open Diffix plugin enabled and includes a role for each access mode. The database
    is hosted on the following server:
  </p>

  <div class="mt-2 shadow rounded-lg -mx-2 p-2">
    <div class="flex">
      <span class="min-w-[6rem] font-medium">Hostname:</span>
      demo-pg.open-diffix.org
    </div>
    <div class="flex">
      <span class="inline-block min-w-[6rem] font-medium">Port:</span>
      5432
    </div>
    <div class="flex">
      <span class="inline-block min-w-[6rem] font-medium">Database:</span>
      banking
    </div>
  </div>

  <h2 class="mt-8 text-2xl">Credentials</h2>

  <p class="mt-3">Three roles are available for accessing the database:</p>

  <div class="sm:hidden shadow rounded-lg mt-2 -mx-2 p-2">
    <div>
      <div class="flex">
        <span class="min-w-[6rem] font-medium">Role:</span>
        trusted_user
      </div>
      <div class="flex">
        <span class="inline-block min-w-[6rem] font-medium">Password:</span>
        demo
      </div>
      <div class="flex">
        <span class="inline-block min-w-[6rem] font-medium">Description:</span>
        Read-only, anonyzmied access in trusted mode
      </div>
    </div>

    <div class="mt-2 pt-2 border-t-2">
      <div class="flex">
        <span class="min-w-[6rem] font-medium">Role:</span>
        untrusted_user
      </div>
      <div class="flex">
        <span class="inline-block min-w-[6rem] font-medium">Password:</span>
        demo
      </div>
      <div class="flex">
        <span class="inline-block min-w-[6rem] font-medium">Description:</span>
        Read-only, anonyzmied access in untrusted mode
      </div>
    </div>

    <div class="mt-2 pt-2 border-t-2">
      <div class="flex">
        <span class="min-w-[6rem] font-medium">Role:</span>
        direct_user
      </div>
      <div class="flex">
        <span class="inline-block min-w-[6rem] font-medium">Password:</span>
        demo
      </div>
      <div class="flex">
        <span class="inline-block min-w-[6rem] font-medium">Description:</span>
        Read-only, unrestricted access to data
      </div>
    </div>
  </div>

  <div class="hidden sm:block shadow rounded-lg -mx-2 p-2 mt-4">
    <table class="table-fixed text-sm w-full">
      <thead class="text-left">
        <tr>
          <th class="w-3/12">Role</th>
          <th class="w-2/12">Password</th>
          <th class="w-7/12">Description</th>
        </tr>
      </thead>
      <tbody class="border-t-2">
        <tr class="hover:bg-gray-50">
          <td>trusted_user</td>
          <td>demo</td>
          <td>Read-only, anonyzmied access in trusted mode</td>
        </tr>
        <tr class="hover:bg-gray-50">
          <td>untrusted_user</td>
          <td>demo</td>
          <td>Read-only, anonymized access in untrusted mode</td>
        </tr>
        <tr class="hover:bg-gray-50">
          <td>direct_user</td>
          <td>demo</td>
          <td>Read-only, unrestricted access to data</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p class="mt-6">
    If you have the
    <Link href="https://blog.timescale.com/tutorials/how-to-install-psql-on-mac-ubuntu-debian-windows/"
      >PostgreSQL client tools</Link
    >
    installed on your machine you can connect as the <span class="font-mono font-semibold">trusted_user</span> role
    with:
    <CopyableCommand cmd="psql postgresql://trusted_user:demo@demo-pg.open-diffix.org/banking" />
  </p>

  <p class="mt-4">
    For the <span class="font-mono font-semibold">untrusted_user</span> role:
    <CopyableCommand cmd="psql postgresql://untrusted_user:demo@demo-pg.open-diffix.org/banking" />
  </p>

  <p class="mt-4">
    For the <span class="font-mono font-semibold">direct_user</span> role:
    <CopyableCommand cmd="psql postgresql://direct_user:demo@demo-pg.open-diffix.org/banking" />
  </p>

  <h2 class="mt-8 text-2xl">Further reading</h2>

  <p class="mt-2">
    <strong>For analysts:</strong> The <Link href="https://github.com/diffix/pg_diffix/blob/master/docs/banking.ipynb"
      >banking notebook</Link
    > provides example queries against the banking dataset. The <Link
      href="https://github.com/diffix/pg_diffix/blob/master/docs/analyst_guide.md">analyst guide</Link
    > describes the SQL features and limitations imposed by <span class="font-mono font-semibold">pg_diffix</span>.
  </p>

  <p class="mt-2">
    <strong>For administrators:</strong> Check out the <Link
      href="https://github.com/diffix/pg_diffix/blob/master/docs/admin_tutorial.md">admin tutorial</Link
    > for an example on how to set up <span class="font-mono font-semibold">pg_diffix</span>. See the <Link
      href="https://github.com/diffix/pg_diffix/blob/master/docs/analyst_guide.md">admin guide</Link
    > for details on configuring and using the extension. To install from source, see the <Link
      href="https://github.com/diffix/pg_diffix#installation">installation section</Link
    > of the repository README.
  </p>

  <h2 class="mt-8 text-2xl">Help and feedback</h2>
  <p class="mt-2 mb-12">
    If you require help, you want to report a bug or request a feature, please do so in our <Link
      href="https://github.com/diffix/pg_diffix">Github repository</Link
    >.
  </p>
</ContentPage>
