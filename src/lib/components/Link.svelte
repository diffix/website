<script lang="ts">
  export let href: string;
</script>

<a class="text-gray-800 underline hover:text-gray-500" {href}>
  <slot />
</a>
