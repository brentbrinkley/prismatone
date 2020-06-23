<script>
  import { scale } from "svelte/transition";
  import { createEventDispatcher } from "svelte";

  export let color, shape, id, groupClass, svg, noteAction, noteTriggered;

  const setNoteStateOn = () => {
    noteTriggered = true;
  };

  const setNoteStateOff = () => {
    noteTriggered = false;
  };
</script>

<style>
  :global(svg) {
    z-index: 1;
    width: 2em;
    pointer-events: none;
    touch-action: none;
  }

  .hex {
    will-change: transform;
    z-index: 10;
    position: relative;
    width: 6.2em;
    height: 4em;
    border-radius: 10px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    transition: all 0.1s ease-in;
    touch-action: none;
    -webkit-touch-action: none;
  }

  .hex:before,
  .hex:after {
    position: absolute;
    width: inherit;
    height: inherit;
    border-radius: inherit;
    background: inherit;
    content: "";
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    touch-action: none;
  }
  .hex:before {
    transform: rotate(60deg);
    touch-action: none;
  }
  .hex:after {
    transform: rotate(-60deg);
    touch-action: none;
  }
  .triggered {
    transform: scale(0.9);
    /* opacity: 0.7; */
  }

  .grey {
    background: linear-gradient(180deg, #d1cfd0 -40%, #a4a4a4 140%);
  }
  .grey::before {
    background: linear-gradient(120deg, #d1cfd0 0%, #a4a4a4 100%);
  }
  .grey::after {
    background: linear-gradient(240deg, #d1cfd0 0%, #a4a4a4 100%);
  }

  .pink {
    background: linear-gradient(180deg, #fd93d3 -40%, #fb41c7 140%);
  }
  .pink::before {
    background: linear-gradient(120deg, #fd93d3 0%, #fb41c7 100%);
  }
  .pink::after {
    background: linear-gradient(240deg, #fd93d3 0%, #fb41c7 100%);
  }

  .purple {
    background: linear-gradient(180deg, #aa93fd -40%, #6a41fb 140%);
  }
  .purple::before {
    background: linear-gradient(120deg, #aa93fd 0%, #6a41fb 100%);
  }
  .purple::after {
    background: linear-gradient(240deg, #aa93fd 0%, #6a41fb 100%);
  }

  .blue {
    background: linear-gradient(180deg, #5199e1 -40%, #3d50db 140%);
  }
  .blue::before {
    background: linear-gradient(120deg, #5199e1 0%, #3d50db 100%);
  }
  .blue::after {
    background: linear-gradient(240deg, #5199e1 0%, #3d50db 100%);
  }

  .cyan {
    background: linear-gradient(180deg, #87e1f4 -40%, #30b6e0 140%);
  }
  .cyan::before {
    background: linear-gradient(120deg, #87e1f4 0%, #30b6e0 100%);
  }
  .cyan::after {
    background: linear-gradient(240deg, #87e1f4 0%, #30b6e0 100%);
  }

  .green {
    background: linear-gradient(180deg, #59c1b7 -40%, #039988 140%);
  }
  .green::before {
    background: linear-gradient(120deg, #59c1b7 0%, #039988 100%);
  }
  .green::after {
    background: linear-gradient(240deg, #59c1b7 0%, #039988 100%);
  }

  .yellow {
    background: linear-gradient(180deg, #ffde1e -40%, #ffc731 140%);
  }
  .yellow::before {
    background: linear-gradient(120deg, #ffde1e 0%, #ffc731 98.96%);
  }
  .yellow::after {
    background: linear-gradient(240deg, #ffde1e 0%, #ffc731 98.96%);
  }

  .orange {
    background: linear-gradient(180deg, #ffb23e -40%, #ff820e 140%);
  }
  .orange::before {
    background: linear-gradient(120deg, #ffb23e 0%, #ff820e 98.96%);
  }
  .orange::after {
    background: linear-gradient(240deg, #ffb23e 0%, #ff820e 98.96%);
  }

  .red {
    background: linear-gradient(180deg, #fe6363 -40%, #dc4040 140%);
  }
  .red::before {
    background: linear-gradient(120deg, #fe6363 0%, #dc4040 98.96%);
  }
  .red::after {
    background: linear-gradient(240deg, #fe6363 0%, #dc4040 98.96%);
  }

  .black {
    background: linear-gradient(180deg, #7d7b7b -40%, #2e2d2d 140%);
  }
  .black::before {
    background: linear-gradient(120deg, #7d7b7b 0%, #2e2d2d 98.96%);
  }
  .black::after {
    background: linear-gradient(240deg, #7d7b7b 0%, #2e2d2d 98.96%);
  }

  .gold {
    background: linear-gradient(180deg, #f6ef9f -40%, #b07e1f 140%);
  }
  .gold::before {
    background: linear-gradient(120deg, #f6ef9f -5.18%, #b07e1f 102.3%);
  }
  .gold::after {
    background: linear-gradient(240deg, #f6ef9f -5.18%, #b07e1f 102.3%);
  }

  .span1 {
    grid-column-end: span 2;
    z-index: 3;
    justify-self: center;
    align-self: center;
    touch-action: none;
  }

  .span1:nth-child(5n + 4) {
    grid-column-start: 2;
  }

  .span2 {
    grid-column-end: span 2;
    z-index: 3;
    justify-self: center;
    align-self: center;
    touch-action: none;
  }
  .span2:nth-child(7n + 5) {
    grid-column-start: 2;
  }
</style>

<div
  style="touch-action: none;"
  class="{color}
  {shape}
  {groupClass} hex"
  {id}
  class:triggered={noteTriggered}
  on:pointerdown|preventDefault|stopPropagation={(e) => noteAction(e, 'note on', setNoteStateOn)}
  on:pointerup|preventDefault|stopPropagation={(e) => noteAction(e, 'note off', setNoteStateOff)}
  on:pointerover|preventDefault|stopPropagation={(e) => noteAction(e, 'note in', setNoteStateOn)}
  on:pointerout|preventDefault|stopPropagation={(e) => noteAction(e, 'note out', setNoteStateOff)}>
  {@html svg}
</div>
