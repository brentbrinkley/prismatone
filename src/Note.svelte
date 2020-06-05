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
    width: 50%;
    height: 50%;
    pointer-events: none;
    opacity: 0.4;
    filter: drop-shadow(2px 3px 3px rgba(255, 255, 255, 0.2));
    touch-action: none;
  }

  :global(#minus) {
    height: 35%;
    width: 35%;
  }
  :global(#crown) {
    height: 40%;
    width: 40%;
  }
  :global(#triangle) {
    height: 40%;
    width: 40%;
  }
  :global(#square) {
    height: 40%;
    width: 40%;
  }

  .hex {
    will-change: opacity, transform;
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

  .black {
    background: linear-gradient(to top left, #7c7c7c 0%, #000 100%);
    color: #4a4a4a;
  }
  .orange {
    background: linear-gradient(to top left, #ffc107 0%, #f57c00 100%);
    color: #f68401;
  }
  .pink {
    background: linear-gradient(to top left, #f48fb1 0%, #d81b60 100%);
    color: #dc306f;
  }
  .yellow {
    background: linear-gradient(to top left, #ffeb3b 0%, #fbc02d 100%);
    color: #ffb300;
  }
  .red {
    background: linear-gradient(to top left, #f4511e 0%, #b71c1c 100%);
    color: #c62828;
  }
  .purple {
    background: linear-gradient(to top left, #ab47bc 0%, #4527a0 100%);
    color: #7127a8;
  }
  .green {
    background: linear-gradient(to top left, #4db6ac 0%, #00796b 100%);
    color: #34a297;
  }
  .cyan {
    background: linear-gradient(to top left, #4fc3f7 0%, #2196f3 100%);
    color: #259af3;
  }
  .blue {
    background: linear-gradient(to top left, #1976d2 0%, #283593 100%);
    color: #1c68c5;
  }
  .green-light {
    background: linear-gradient(to top left, #cddc39 0%, #8bc34a 100%);
    color: #7cb342;
  }
  .green-dark {
    background: linear-gradient(to top left, #4caf50 0%, #1b5e20 100%);
    color: #00944a;
  }
  .grey {
    background: linear-gradient(to top left, #e0e0e0 0%, #bdbdbd 100%);
    color: #9e9e9e;
  }
  .gold {
    background: linear-gradient(to top left, #e6ce6a 0%, #b7892b 100%);
    color: #b7892b;
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
  on:pointerdown|preventDefault|stopPropagation={e => noteAction(e, 'note on', setNoteStateOn)}
  on:pointerup|preventDefault|stopPropagation={e => noteAction(e, 'note off', setNoteStateOff)}
  on:pointerover|preventDefault|stopPropagation={e => noteAction(e, 'note in', setNoteStateOn)}
  on:pointerout|preventDefault|stopPropagation={e => noteAction(e, 'note out', setNoteStateOff)}>
  {@html svg}
</div>
