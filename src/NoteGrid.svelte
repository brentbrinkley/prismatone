<script>
  import { PolySynth, Synth } from "tone";
  import { group1, group2 } from "./helpers/haydenLayout";
  import { onMount } from "svelte";
  import TileSet from "./TileSet.svelte";

  let synth;
  let triggered = false;
  const tileSetPanels = [
    "panel-A-1",
    "panel-B-1",
    "panel-A-2",
    "panel-B-2",
    "panel-A-3",
    "panel-B-3"
  ];

  onMount(() => {
    synth = new PolySynth(Synth, {
      oscillator: {
        type: "sine"
      },
      envelope: {
        attack: 0.01,
        decay: 0.1,
        sustain: 0.1,
        release: 1.2,
        attackCurve: "linear",
        decayCurve: "exponential",
        releaseCurve: "exponential"
      }
    }).toDestination();
  });

  const noteAction = {
    noteOn: e => {
      triggered = true;
      synth.triggerAttack(e.target.id);
    },

    noteOnDrag: e => {
      if (!triggered) return;
      synth.triggerAttack(e.target.id);
    },

    noteOff: e => {
      triggered = false;
      synth.triggerRelease(e.target.id);
    },

    noteOffDrag: e => {
      if (!triggered) return;
      synth.triggerRelease(e.target.id);
    }
  };
</script>

<style>
  body {
    touch-action: pan-x pan-y;
  }
  body::-webkit-scrollbar {
    display: none;
  }

  #app::-webkit-scrollbar {
    display: none;
  }
  .master-grid {
    display: grid;
    grid-template-columns: repeat(36, 50px);
    grid-template-rows: repeat(8, 88px);
    grid-gap: 2px;
    touch-action: pan-x pan-y;
  }

  .no-touch {
    z-index: 100;
    pointer-events: none;
  }
</style>

<div class="master-grid" this:bind={synth}>
  <!-- Setting different classes for our tilesets -->
  {#each tileSetPanels as panel, index}
    {#if index % 2 === 0}
      <TileSet
        panelName={panel}
        group={group1}
        groupClass="span1"
        {noteAction} />
    {:else}
      <TileSet
        panelName={panel}
        group={group2}
        groupClass="span2"
        {noteAction} />
    {/if}
  {/each}

</div>
