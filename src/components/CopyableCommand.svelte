<script lang="ts">
  export let cmd: string;

  let textarea;

  let copied = false;

  function indicateCopied() {
    copied = true;
    setTimeout(() => (copied = false), 3000);
  }

  function fallbackCopy() {
    textarea.select();
    textarea.setSelectionRange(0, 99999); // apparently useful for mobile devices...
    if (document.execCommand("copy")) {
      indicateCopied();
    }
  }

  function copy() {
    if (!navigator.clipboard) {
      fallbackCopy();
      return;
    }
    navigator.clipboard.writeText(cmd).then(
      function () {
        indicateCopied();
      },
      function () {
        // sorry world... not much to do here...
      }
    );
  }
</script>

<div class="flex items-center mt-2 font-mono text-semibold text-sm px-2 py-1 bg-gray-100 -mx-2 rounded-md">
  <span class="flex-grow" on:dblclick={copy}>{cmd}</span>

  <button
    class="hover:bg-shamrock-400 transition-all focus:outline-none duration-200 bg-shamrock-200 text-gray-800 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 border rounded-lg w-10 h-8 flex justify-center items-center"
    on:click={copy}
    aria-label="Click to copy the command to the clipboard"
  >
    {#if copied}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-label="Icon of a clipboard indicating the contents have been copied"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
        />
      </svg>
    {:else}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-label="Icon of a clipboard"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
        />
      </svg>
    {/if}
  </button>
</div>

<textarea class="hidden" bind:value={cmd} bind:this={textarea} />
