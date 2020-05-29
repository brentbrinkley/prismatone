<script>
  import { createEventDispatcher } from "svelte";

  let toggle = false;

  const dispatch = createEventDispatcher();

  const emitToggle = () => {
    dispatch("setToggle", toggle);
  };
</script>

<div>
  <input type="checkbox" on:change={emitToggle} bind:checked={toggle} />
</div>
