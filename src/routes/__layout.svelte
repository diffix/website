<script>
  import "../app.postcss";

  import { useAckee } from "../ackee";

  import NavBar from "../components/NavBar.svelte";
  import Link from "../components/Link.svelte";

  useAckee("https://ackee.open-diffix.org", "8ba9af76-dd3d-47d0-85fa-9387bc693605", {
    ignoreLocalhost: true,
    detailed: true
  });
</script>

<div class="flex flex-col min-h-screen dark:text-gray-300">
  <NavBar />
  <div class="flex-grow" />
  <div class="flex-grow-0 w-full">
    <slot />
  </div>

  <div class="flex-grow" />

  <footer class="flex flex-col items-center flex-grow-0 p-4 pt-20 pb-10 mx-auto text-sm text-gray-500">
    <span class="max-w-md">
      If you have questions or want to discuss the project, please visit our
      <Link href="https://github.com/diffix/pg_diffix_extension">Github repository</Link>, or send us an email at <Link
        href="mailto:hello@open-diffix.org">hello@open-diffix.org</Link
      >.
    </span>

    <span class="mt-8">Copyright MPI-SWS for Software Systems</span>
    <span class="mx-auto mt-2 space-x-2">
      <Link href="https://imprint.mpi-klsb.mpg.de/sws/open-diffix.org/">Imprint</Link>
      <Link href="https://data-protection.mpi-klsb.mpg.de/sws/open-diffix.org">Privacy Policy</Link>
    </span>
  </footer>
</div>
