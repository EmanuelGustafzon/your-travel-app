<script>
    import "../app.css";
    import Navbar from "../components/Navbar.svelte";
  </script>

  <Navbar/>

  <slot />

  <style lang="postcss">
    :global(html) {
      background-color: theme(colors.orange);
      color: theme(colors.blue);
    }
  </style>