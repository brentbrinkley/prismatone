<style>
  .device-panel {
    position: fixed;
    background-color: rgb(255, 255, 255);
    box-shadow: 0 -5px 10px -5px rgba(51, 51, 51, 0.904);
    bottom: 0px;
    width: 100%;
    height: 4rem;
    z-index: 1000;
    padding: 20px 0;
    touch-action: none;
    -webkit-touch-action: none;
    display: inline-flex;
    user-select: none;
    justify-content: space-around;
    align-items: center;
  }

  img {
    max-width: 9em;
  }
</style>

<div class="device-panel">
  <img src="title.svg" alt="prismatone" />
  <slot />
</div>
