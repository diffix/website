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

<svelte:head>
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
      If you have questions or want to discuss the project, please send us an email at <Link
        href="mailto:hello@open-diffix.org">hello@open-diffix.org</Link
      >.
    </span>

    <div class="mt-4 mx-auto">
      <a
        href="https://twitter.com/OpenDiffix?ref_src=twsrc%5Etfw"
        class="twitter-follow-button"
        data-size="large"
        data-dnt="true"
        data-show-count="false">Follow @OpenDiffix</a
      >
    </div>

    <span class="mt-8">Copyright MPI-SWS</span>
    <span class="mx-auto mt-2 space-x-2">
      <Link href="https://imprint.mpi-klsb.mpg.de/sws/open-diffix.org/">Imprint</Link>
      <Link href="https://data-protection.mpi-klsb.mpg.de/sws/open-diffix.org">Privacy Policy</Link>
    </span>
  </footer>
</div>
