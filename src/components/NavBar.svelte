<script lang="ts">
  import NavItem from "./NavItem.svelte";

  let open = false;

  function closeMenu() {
    open = false;
  }
</script>

<!-- Mobile nav -->
<div class="md:hidden h-12">
  <div class="menu-button-container border-b border-collapse">
    <button class="menu-button" class:open on:click={() => (open = !open)}>
      <svg width="32" height="32">
        <line id="top" x1="0" y1="7" x2="32" y2="7" />
        <line id="mid" x1="0" y1="16" x2="32" y2="16" />
        <line id="bot" x1="0" y1="25" x2="32" y2="25" />
      </svg>
    </button>
  </div>
  <div class="menu-container border-r border-collapse" class:open>
    <nav class="p-4 text-xl">
      <NavItem on:click={closeMenu} href="/">Home</NavItem>
      <NavItem on:click={closeMenu} href="/download">Download</NavItem>
      <NavItem on:click={closeMenu} href="/play">Play</NavItem>
      <NavItem on:click={closeMenu} href="/faq">FAQ</NavItem>
      <NavItem on:click={closeMenu} href="/blog" subpaths>Blog</NavItem>
    </nav>
  </div>
</div>

<!-- Desktop nav -->
<div class="hidden md:block h-24">
  <div class="fixed w-full bg-white z-50 border-b border-collapse">
    <nav class="max-w-2xl mx-auto w-full -mb-1 flex justify-end text-xl">
      <NavItem href="/">Home</NavItem>
      <NavItem href="/download">Download</NavItem>
      <NavItem href="/play">Play</NavItem>
      <NavItem href="/faq">FAQ</NavItem>
      <NavItem href="/blog" subpaths>Blog</NavItem>
    </nav>
  </div>
</div>

<style>
  .menu-container {
    position: fixed;
    z-index: 49;
    width: 300px;
    left: -300px;
    top: 3rem;
    bottom: 0;
    overflow-y: auto;
    transition: left 0.2s ease-in-out;
    background: white;
  }

  .menu-container.open {
    left: 0px;
  }

  .menu-button-container {
    position: fixed;
    width: 100%;
    height: 3rem;
    z-index: 50;
    background: white;
  }

  .menu-button {
    padding: 8px;
    margin-left: 8px;
  }

  .menu-button svg line {
    stroke: currentColor;
    stroke-width: 2.5;
    transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;
  }

  .menu-button.open #top {
    transform: translate(10px, 0px) rotate(45deg);
  }

  .menu-button.open #mid {
    transform: translate(-6px, 16px) rotate(-45deg);
    opacity: 0;
  }

  .menu-button.open #bot {
    transform: translate(-13px, 10px) rotate(-45deg);
  }
</style>
