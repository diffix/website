<script lang="ts">
  import NavItem from "./NavItem.svelte";
</script>

<div class="w-full border-b-2 border-collapse border-gray-100 bg-gray-50">
  <nav class="max-w-2xl mx-auto w-full -mb-1 flex justify-end text-xl">
    <NavItem href="/">
      Home
    </NavItem>

    <NavItem href="/newsletter">
      Newsletter
    </NavItem>

    <NavItem href="/faq">
      Questions
    </NavItem>
  </nav>
</div>
