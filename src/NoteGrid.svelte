<script>
  import { PolySynth, Synth } from "tone";
  import * as Tone from "tone";
  import { group1, group2 } from "./helpers/haydenLayout";
  import { onMount } from "svelte";
  import TileSet from "./TileSet.svelte";
  import DevicePanel from "./DevicePanel.svelte";
  import ScrollSwitch from "./ScrollSwitch.svelte";

  let synth, audioContext;
  let pointerDown = false;
  let toggle = false;

  const tileSetPanels = [
    "panel-A-1",
    "panel-B-1",
    "panel-A-2",
    "panel-B-2",
    "panel-A-3",
    "panel-B-3"
  ];

  onMount(() => {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();

    window.scrollTo(183, 606);

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
    noteOn: (e, noteState) => {
      Tone.start();
      pointerDown = true;
      noteState();
      synth.triggerAttack(e.target.id);
      console.log(e.pointerId);
      // e.target.releasePointerCapture(e.pointerId);
      console.log(e.pointerId);
    },

    noteOff: (e, noteState) => {
      // e.target.ondragstart = () => false;
      noteState();
      synth.triggerRelease(e.target.id);
      pointerDown = false;
    },

    noteOnDrag: (e, noteState) => {
      if (!pointerDown) return;
      // e.target.ondragstart = () => false;
      noteState();
      synth.triggerAttack(e.target.id);
      // e.target.releasePointerCapture(e.pointerId);
    },

    noteOffDrag: (e, noteState) => {
      if (!pointerDown) return;
      // e.target.ondragstart = () => false;
      noteState();
      synth.triggerRelease(e.target.id);
      pointerDown = false;
    }
  };

  const setToggle = e => {
    toggle = e.detail;
  };
</script>

<style>
  :global(body) {
    touch-action: pan-x pan-y;
    padding: 0;
  }
  :global(body::-webkit-scrollbar) {
    display: none;
  }

  :global(#app::-webkit-scrollbar) {
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

<div>
  <div class="master-grid" bind:this={synth} class:no-touch={toggle}>
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
  <DevicePanel>
    <ScrollSwitch on:setToggle={setToggle} />
  </DevicePanel>
</div>
