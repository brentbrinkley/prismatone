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
  let toggle = true;

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

    window.addEventListener("pointerdown", e => {
      pointerDown = true;
    });

    window.addEventListener("pointerup", e => {
      pointerDown = false;
    });

    window.scrollTo(183, 606);
  });

  const noteAction = (e, triggerType, noteState) => {
    switch (triggerType) {
      case "note on":
        pointerDown = true;
        noteState();
        synth.triggerAttack(e.target.id);
        console.log(e.target.id);
        e.currentTarget.releasePointerCapture(e.pointerId);
        break;

      case "note off":
        noteState();
        pointerDown = false;
        synth.triggerRelease(e.target.id);
        break;

      case "note in":
        if (!pointerDown) break;
        noteState();
        synth.triggerAttack(e.target.id);
        break;

      case "note out":
        noteState();
        synth.triggerRelease(e.target.id);
        break;
    }
  };

  const setToggle = e => {
    toggle = e.detail;
    Tone.context.resume();
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
    grid-template-rows: repeat(28, 88px);
    grid-gap: 2px;
    touch-action: pan-x pan-y;
    /* background-color: red; */
  }

  .no-touch {
    z-index: 100;
    pointer-events: none;
  }

  .outer-container {
    /* background-color: red; */
  }
</style>

<div class="outer-container">
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
