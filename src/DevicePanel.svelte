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
    display: flex;
    user-select: none;
  }

  h2 {
    user-select: none;
  }

  .device-name {
    font-family: Avenir;
    font-weight: 200;
    margin: 0 30px;
  }
</style>

<div class="device-panel">
  <h2 class="device-name">Mosaic</h2>
  <slot />
</div>
