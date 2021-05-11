<script lang="ts">
  import NavItem from "./NavItem.svelte";
</script>

<div class="h-auto md:h-24 transition-all duration-200">
  <div
    class="md:fixed w-full border-b-2 border-collapse md:shadow-sm dark:border-gray-800 md:bg-gray-50 md:dark:bg-gray-900"
  >
    <nav class="max-w-2xl mx-auto w-full -mb-1 flex justify-end text-xl">
      <NavItem href="/">Home</NavItem>

      <NavItem href="/newsletter">Newsletter</NavItem>

      <NavItem href="/faq">FAQ</NavItem>
    </nav>
  </div>
</div>
