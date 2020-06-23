<style>
    .device-panel {
        position: fixed;
        background: white;
        box-shadow: 0 -15px 13px 0px rgba(51, 51, 51, 0.4);
        bottom: 0px;
        width: 100%;
        height: 4rem;
        z-index: 1000;
        /* padding: 20px 0; */
        /* border-top: 8px solid rgba(82, 82, 192, 0.164); */
        border-top: 8px solid rgba(0, 0, 0, 0.233);

        touch-action: none;
        -webkit-touch-action: none;
        display: inline-flex;
        user-select: none;
        justify-content: space-around;
        align-items: center;
        align-content: center;
        justify-items: center;
        -webkit-touch-callout: none;
    }

    h1 {
        font-family: Sarpanch, Avenir, Arial, Helvetica, sans-serif;
        color: rgb(250, 46, 165);
        font-weight: 100;
    }
</style>

<div class="device-panel">
    <!-- <h1>resonance</h1> -->

    <slot />
</div>
