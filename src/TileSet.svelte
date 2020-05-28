<script>
  import Note from "./Note.svelte";
  export let group;
  export let panelName;
  export let groupClass;
  export let noteAction;
</script>

<style>
  .panel-A-1 {
    display: grid;
    grid-gap: 2px;
    grid-template-columns: repeat(6, 50px);
    grid-template-rows: repeat(28, 88px);
    grid-row-start: 1;
  }

  .panel-B-1 {
    display: grid;
    grid-gap: 2px;
    grid-template-columns: repeat(8, 50px);
    grid-template-rows: repeat(28, 88px);
    grid-row-start: 2;
    grid-column-start: 6;
  }

  .panel-A-2 {
    display: grid;
    grid-gap: 2px;
    grid-template-columns: repeat(6, 50px);
    grid-template-rows: repeat(28, 88px);
    grid-row-start: 3;
    grid-column-start: 13;
  }

  .panel-B-2 {
    display: grid;
    grid-gap: 2px;
    grid-template-columns: repeat(8, 50px);
    grid-template-rows: repeat(28, 88px);
    grid-row-start: 4;
    grid-column-start: 18;
  }

  .panel-A-3 {
    display: grid;
    grid-gap: 2px;
    grid-template-columns: repeat(6, 50px);
    grid-template-rows: repeat(28, 88px);
    grid-row-start: 5;
    grid-column-start: 25;
  }

  .panel-B-3 {
    display: grid;
    grid-gap: 2px;
    grid-template-columns: repeat(8, 50px);
    grid-template-rows: repeat(28, 88px);
    grid-row-start: 6;
    grid-column-start: 30;
  }
</style>

<div class={panelName}>
  {#each group as note (note.midiVal)}
    <Note
      color={note.color}
      shape={note.shape}
      svg={note.svg}
      id={note.commonNotation}
      {groupClass}
      {...noteAction} />
  {/each}
</div>
