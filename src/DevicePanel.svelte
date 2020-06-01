<style>
  .device-panel {
    position: fixed;
    background-color: lightgray;
    bottom: 0px;
    width: 100%;
    z-index: 1000;
    height: 2.5rem;
    padding: 30px;
    touch-action: none;
    -webkit-touch-action: none;
    /* pointer-events: none; */
    display: flex;
    user-select: none;
  }

  .device-name {
    touch-action: none;
    font-family: Avenir;
    font-weight: 200;
    margin: 0 30px;
    -webkit-user-select: none;
  }
</style>

<div class="device-panel">
  <h2 class="device-name">Mosaic</h2>
  <slot />
</div>
