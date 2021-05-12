<script lang="ts">
  import NavItem from "./NavItem.svelte";
</script>

<div class="h-auto md:h-24 transition-all duration-200">
  <div class="md:fixed w-full bg-white dark:bg-gray-900 z-50 md:border-b border-collapse dark:border-gray-800">
    <nav class="max-w-2xl mx-auto w-full -mb-1 flex justify-end text-xl">
      <NavItem href="/">Home</NavItem>

      <NavItem href="/newsletter">Newsletter</NavItem>

      <NavItem href="/faq">FAQ</NavItem>

      <NavItem href="/demo">Demo</NavItem>
    </nav>
  </div>
</div>
