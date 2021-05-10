<script>
	import "../app.postcss";

	import { afterUpdate, beforeUpdate } from "svelte";
	import { useAckeeSapper } from "svelte-ackee";

	useAckeeSapper(
		beforeUpdate,
		afterUpdate,
		{
			server: "https://ackee.open-diffix.org", // Set to your Ackee instance
			domainId: "8ba9af76-dd3d-47d0-85fa-9387bc693605", // Set to your domain ID
		},
		{
			ignoreLocalhost: true,
		}
	);

	function showEmail() {
		popup = window.open(
			'https://mailhide.io/e/vPh7lZ3o',
			'mailhidepopup',
			'width=580',
			'height=635'
		);
	}
</script>

<div class="min-h-screen dark:text-gray-300">
	<div class="flex flex-col">
		<div class="flex-grow"></div>
		<div class="flex-grow-0 w-full">
			<slot />
		</div>

		<div class="flex-grow"></div>

		<footer class="flex flex-col items-center flex-grow-0 p-2 pt-20 pb-10 mx-auto text-sm text-gray-500">
			<span>
				If you have questions or want to discuss the project, please contact us at
				<a
					class="text-gray-800 underline dark:text-gray-400 hover:text-gray-500 dark:hover:text-gray-200"
					href="https://mailhide.io/e/vPh7lZ3o"
					on:click|preventDefault={showEmail}>
					f......@open-diffix.org</a>.
			</span>

			<span class="mt-8">Copyright MPI-SWS for Software Systems</span>
			<span class="mx-auto mt-2 space-x-2">
				<a
					href="https://imprint.mpi-klsb.mpg.de/sws/open-diffix.org/"
					class="text-gray-800 underline dark:text-gray-400 hover:text-gray-500 dark:hover:text-gray-200"
				>Imprint</a>
				<a
					href="https://data-protection.mpi-klsb.mpg.de/sws/open-diffix.org"
					class="text-gray-800 underline dark:text-gray-400 hover:text-gray-500 dark:hover:text-gray-200"
				>Privacy Policy</a>
			</span>
		</footer>
	</div>
</div>