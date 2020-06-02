<style>
  .device-panel {
    position: fixed;
    background-color: lightgray;
    margin: 0;
    bottom: 0px;
    width: 100vw;
    z-index: 1000;
    height: 2.5rem;
    padding: 20px;
    touch-action: none;
    -webkit-touch-action: none;
    /* pointer-events: none; */
    display: flex;
    user-select: none;
    justify-content: space-evenly;
    align-items: center;
  }

  /* .device-name { */
  /* touch-action: none;
    font-family: Avenir;
    font-weight: 200;
    margin: 0 30px;
    -webkit-user-select: none;
  } */
  img {
    max-width: 10em;
  }
</style>

<div class="device-panel">
  <img src="prisma-logo-2.svg" alt="" />
  <slot />
</div>
