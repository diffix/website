<script lang="ts">
  import ContentPage from "$lib/components/ContentPage.svelte";
  import Link from "$lib/components/Link.svelte";
  import CopyableCommand from "$lib/components/CopyableCommand.svelte";
  import Trans from "$lib/components/Trans.svelte";
  import { trans, type LocalizedString } from "$lib/i18n";

  const strings: Record<string, LocalizedString> = {
    hostname: {
      en: "Hostname"
      // de: "xxx"
    },
    port: {
      en: "Port"
      // de: "xxx"
    },
    database: {
      en: "Database"
      // de: "xxx"
    },
    role: {
      en: "Role"
      // de: "xxx"
    },
    password: {
      en: "Password"
      // de: "xxx"
    },
    description: {
      en: "Description"
      // de: "xxx"
    }
  };
</script>

<ContentPage title="PostgreSQL Demo">
  <p class="mt-3">
    <Trans>
      <svelte:fragment slot="en">
        We are hosting a PostgreSQL database instance containing a slightly altered version of the 20 odd year old
        <Link href="https://data.world/lpetrocelli/czech-financial-dataset-real-anonymized-transactions">
          Berka bank dataset
        </Link>. The PostgreSQL instance has the Open Diffix plugin enabled and includes a role for each access mode.
        The database is hosted on the following server:
      </svelte:fragment>
      <!-- <svelte:fragment slot="de">
        xxx We are hosting a PostgreSQL database instance containing a slightly altered version of the 20 odd year old
        <Link href="https://data.world/lpetrocelli/czech-financial-dataset-real-anonymized-transactions">
          Berka bank dataset
        </Link>. The PostgreSQL instance has the Open Diffix plugin enabled and includes a role for each access mode.
        The database is hosted on the following server:
      </svelte:fragment> -->
    </Trans>
  </p>

  <div class="mt-2 shadow rounded-lg -mx-2 p-2">
    <div class="flex">
      <span class="min-w-[6rem] font-medium">{$trans(strings.hostname)}:</span>
      demo-pg.open-diffix.org
    </div>
    <div class="flex">
      <span class="inline-block min-w-[6rem] font-medium">{$trans(strings.port)}:</span>
      5432
    </div>
    <div class="flex">
      <span class="inline-block min-w-[6rem] font-medium">{$trans(strings.description)}:</span>
      banking
    </div>
  </div>

  <h2 class="mt-8 text-2xl">
    {$trans({
      en: "Credentials"
      // de: "xxx"
    })}
  </h2>

  <p class="mt-3">
    {$trans({
      en: "Three roles are available for accessing the database:"
      // de: "xxx"
    })}
  </p>

  <div class="sm:hidden shadow rounded-lg mt-2 -mx-2 p-2">
    <div>
      <div class="flex">
        <span class="min-w-[6rem] font-medium">{$trans(strings.role)}:</span>
        trusted_user
      </div>
      <div class="flex">
        <span class="inline-block min-w-[6rem] font-medium">{$trans(strings.password)}:</span>
        demo
      </div>
      <div class="flex">
        <span class="inline-block min-w-[6rem] font-medium">{$trans(strings.description)}:</span>
        {$trans({
          en: "Read-only, anonymized access in trusted mode"
          // de: "xxx"
        })}
      </div>
    </div>

    <div class="mt-2 pt-2 border-t-2">
      <div class="flex">
        <span class="min-w-[6rem] font-medium">{$trans(strings.role)}:</span>
        untrusted_user
      </div>
      <div class="flex">
        <span class="inline-block min-w-[6rem] font-medium">{$trans(strings.password)}:</span>
        demo
      </div>
      <div class="flex">
        <span class="inline-block min-w-[6rem] font-medium">{$trans(strings.description)}:</span>
        {$trans({
          en: "Read-only, anonymized access in untrusted mode"
          // de: "xxx"
        })}
      </div>
    </div>

    <div class="mt-2 pt-2 border-t-2">
      <div class="flex">
        <span class="min-w-[6rem] font-medium">{$trans(strings.role)}:</span>
        direct_user
      </div>
      <div class="flex">
        <span class="inline-block min-w-[6rem] font-medium">{$trans(strings.password)}:</span>
        demo
      </div>
      <div class="flex">
        <span class="inline-block min-w-[6rem] font-medium">{$trans(strings.description)}:</span>
        {$trans({
          en: "Read-only, unrestricted access to data"
          // de: "xxx"
        })}
      </div>
    </div>
  </div>

  <div class="hidden sm:block shadow rounded-lg -mx-2 p-2 mt-4">
    <table class="table-fixed text-sm w-full">
      <thead class="text-left">
        <tr>
          <th class="w-3/12">{$trans(strings.role)}</th>
          <th class="w-2/12">{$trans(strings.password)}</th>
          <th class="w-7/12">{$trans(strings.description)}</th>
        </tr>
      </thead>
      <tbody class="border-t-2">
        <tr class="hover:bg-gray-50">
          <td>trusted_user</td>
          <td>demo</td>
          <td>
            {$trans({
              en: "Read-only, anonymized access in trusted mode"
              // de: "xxx"
            })}
          </td>
        </tr>
        <tr class="hover:bg-gray-50">
          <td>untrusted_user</td>
          <td>demo</td>
          <td>
            {$trans({
              en: "Read-only, anonymized access in untrusted mode"
              // de: "xxx"
            })}
          </td>
        </tr>
        <tr class="hover:bg-gray-50">
          <td>direct_user</td>
          <td>demo</td>
          <td>
            {$trans({
              en: "Read-only, unrestricted access to data"
              // de: "xxx"
            })}
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <p class="mt-6">
    <Trans>
      <svelte:fragment slot="en">
        If you have the
        <Link href="https://blog.timescale.com/tutorials/how-to-install-psql-on-mac-ubuntu-debian-windows/">
          PostgreSQL client tools
        </Link>
        installed on your machine you can connect as the <span class="font-mono font-semibold">trusted_user</span> role with:
      </svelte:fragment>
      <!-- <svelte:fragment slot="de">
        xxx If you have the
        <Link href="https://blog.timescale.com/tutorials/how-to-install-psql-on-mac-ubuntu-debian-windows/">
          PostgreSQL client tools
        </Link>
        installed on your machine you can connect as the <span class="font-mono font-semibold">trusted_user</span> role with:
      </svelte:fragment> -->
    </Trans>

    <CopyableCommand cmd="psql postgresql://trusted_user:demo@demo-pg.open-diffix.org/banking" />
  </p>

  <p class="mt-4">
    <Trans>
      <svelte:fragment slot="en">
        For the <span class="font-mono font-semibold">untrusted_user</span> role:
      </svelte:fragment>
      <!-- <svelte:fragment slot="de">
        xxx For the <span class="font-mono font-semibold">untrusted_user</span> role:
      </svelte:fragment> -->
    </Trans>

    <CopyableCommand cmd="psql postgresql://untrusted_user:demo@demo-pg.open-diffix.org/banking" />
  </p>

  <p class="mt-4">
    <Trans>
      <svelte:fragment slot="en">
        For the <span class="font-mono font-semibold">direct_user</span> role:
      </svelte:fragment>
      <!-- <svelte:fragment slot="de">
        xxx For the <span class="font-mono font-semibold">direct_user</span> role:
      </svelte:fragment> -->
    </Trans>
    <CopyableCommand cmd="psql postgresql://direct_user:demo@demo-pg.open-diffix.org/banking" />
  </p>

  <h2 class="mt-8 text-2xl">
    {$trans({
      en: "Further reading"
      // de: "xxx"
    })}
  </h2>

  <p class="mt-2">
    <Trans>
      <svelte:fragment slot="en">
        <b>For analysts:</b> The
        <Link href="https://github.com/diffix/pg_diffix/blob/release/elm/docs/banking.ipynb">banking notebook</Link>
        provides example queries against the banking dataset. The
        <Link href="https://github.com/diffix/pg_diffix/blob/release/elm/docs/analyst_guide.md">analyst guide</Link>
        describes the SQL features and limitations imposed by <span class="font-mono font-semibold">pg_diffix</span>.
      </svelte:fragment>
      <!-- <svelte:fragment slot="de">
        xxx <b>For analysts:</b> The
        <Link href="https://github.com/diffix/pg_diffix/blob/release/elm/docs/banking.ipynb">banking notebook</Link>
        provides example queries against the banking dataset. The
        <Link href="https://github.com/diffix/pg_diffix/blob/release/elm/docs/analyst_guide.md">analyst guide</Link>
        describes the SQL features and limitations imposed by <span class="font-mono font-semibold">pg_diffix</span>.
      </svelte:fragment> -->
    </Trans>
  </p>

  <p class="mt-2">
    <Trans>
      <svelte:fragment slot="en">
        <b>For administrators:</b> Check out the
        <Link href="https://github.com/diffix/pg_diffix/blob/release/elm/docs/admin_tutorial.md">admin tutorial</Link>
        for an example on how to set up <span class="font-mono font-semibold">pg_diffix</span>. See the
        <Link href="https://github.com/diffix/pg_diffix/blob/release/elm/docs/admin_guide.md">admin guide</Link>
        for details on configuring and using the extension. To install from source, see the
        <Link href="https://github.com/diffix/pg_diffix/blob/release/elm/README.md#installation">
          installation section
        </Link> of the repository README.
      </svelte:fragment>
      <!-- <svelte:fragment slot="de">
        xxx <b>For administrators:</b> Check out the
        <Link href="https://github.com/diffix/pg_diffix/blob/release/elm/docs/admin_tutorial.md">admin tutorial</Link>
        for an example on how to set up <span class="font-mono font-semibold">pg_diffix</span>. See the
        <Link href="https://github.com/diffix/pg_diffix/blob/release/elm/docs/admin_guide.md">admin guide</Link>
        for details on configuring and using the extension. To install from source, see the
        <Link href="https://github.com/diffix/pg_diffix/blob/release/elm/README.md#installation">
          installation section
        </Link> of the repository README.
      </svelte:fragment> -->
    </Trans>
  </p>

  <h2 class="mt-8 text-2xl">
    {$trans({
      en: "Help and feedback"
      // de: "xxx"
    })}
  </h2>
  <p class="mt-2 mb-12">
    <Trans>
      <svelte:fragment slot="en">
        If you require help, you want to report a bug or request a feature, please do so in our
        <Link href="https://github.com/diffix/pg_diffix">Github repository</Link>.
      </svelte:fragment>
      <!-- <svelte:fragment slot="de">
        xxx If you require help, you want to report a bug or request a feature, please do so in our
        <Link href="https://github.com/diffix/pg_diffix">Github repository</Link>.
      </svelte:fragment> -->
    </Trans>
  </p>
</ContentPage>
