<script lang="ts">
  export let href: string;
</script>

<a class="text-gray-800 underline dark:text-gray-400 hover:text-gray-500 dark:hover:text-gray-200" {href}>
  <slot />
</a>
