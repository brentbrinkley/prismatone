const noteData = {
    colors: [
        'gold',
        'black',
        'red',
        'orange',
        'yellow',
        'green',
        'cyan',
        'blue',
        'purple',
        'pink',
        'grey'
    ],

    shapes: [
        'circle',
        'moon',
        'star',
        'plus',
        'triangle',
        'square',
        'key',
        'leaf',
        'crown',
        'cube',
        'minus',
        'sun'
    ],

    octaves: [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],

    pitches: ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'],

    large_indent_shapes: [
        `<svg id="circle" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_i-116353)">
        <path d="M20 40C31.0457 40 40 31.0457 40 20C40 8.95431 31.0457 0 20 0C8.95431 0 0 8.95431 0 20C0 31.0457 8.95431 40 20 40Z" fill="black" fill-opacity="0.22"/>
        </g>
        <defs>
        <filter id="filter0_i-116353" x="0" y="0" width="40" height="44" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
        </filter>
        </defs>
        </svg>`,

        `<svg id="moon" width="31" height="41" viewBox="0 0 31 41" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_i-561983)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 37.8846C3.09065 39.7746 6.72258 40.8636 10.6084 40.8636C21.8704 40.8636 31 31.716 31 20.4318C31 9.14763 21.8704 0 10.6084 0C6.72258 0 3.09065 1.08902 0 2.97907C5.86685 6.56687 9.78327 13.0411 9.78327 20.4318C9.78327 27.8226 5.86685 34.2968 0 37.8846Z" fill="black" fill-opacity="0.22"/>
        </g>
        <defs>
        <filter id="filter0_i-561983" x="0" y="0" width="31" height="44.8636" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
        </filter>
        </defs>
        </svg>`,

        `<svg id="star" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_i-009374)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M28.8771 38.2015L22.192 44L15.4067 38.3191L6.57941 37.6921L5.7985 28.8771L0 22.192L5.68094 15.4067L6.30789 6.57941L15.1229 5.7985L21.808 0L28.5933 5.68094L37.4206 6.30789L38.2015 15.1229L44 21.808L38.3191 28.5933L37.6921 37.4206L28.8771 38.2015Z" fill="black" fill-opacity="0.22"/>
        </g>
        <defs>
        <filter id="filter0_i-009374" x="0" y="0" width="44" height="48" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
        </filter>
        </defs>
        </svg>`,

        `<svg id="plus" width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_i-370120)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9153 11.9153H2.58202C1.15801 11.9153 0 13.0714 0 14.4977V23.5023C0 24.9252 1.15601 26.0847 2.58202 26.0847H11.9153V35.418C11.9153 36.842 13.0714 38 14.4977 38H23.5023C24.9252 38 26.0847 36.844 26.0847 35.418V26.0847H35.418C36.842 26.0847 38 24.9286 38 23.5023V14.4977C38 13.0748 36.844 11.9153 35.418 11.9153H26.0847V2.58202C26.0847 1.15801 24.9286 0 23.5023 0H14.4977C13.0748 0 11.9153 1.15601 11.9153 2.58202V11.9153Z" fill="black" fill-opacity="0.22"/>
        </g>
        <defs>
        <filter id="filter0_i-370120" x="0" y="0" width="38" height="42" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
        </filter>
        </defs>
        </svg>`,

        `<svg id="triangle" width="42" height="35" viewBox="0 0 42 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_i-433325)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M21 0L42 34.125H0L21 0Z" fill="black" fill-opacity="0.22"/>
        </g>
        <defs>
        <filter id="filter0_i-433325" x="0" y="0" width="42" height="38.125" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
        </filter>
        </defs>
        </svg>`,

        `<svg id="square" width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_i-061162)">
        <path d="M31.0765 0H3.92351C1.75662 0 0 1.75662 0 3.92351V31.0765C0 33.2434 1.75662 35 3.92351 35H31.0765C33.2434 35 35 33.2434 35 31.0765V3.92351C35 1.75662 33.2434 0 31.0765 0Z" fill="black" fill-opacity="0.22"/>
        </g>
        <defs>
        <filter id="filter0_i-061162" x="0" y="0" width="35" height="39" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
        </filter>
        </defs>
        </svg>`,

        `<svg id="key" width="22" height="36" viewBox="0 0 22 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_i-234828)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.31347 17.1498C2.13107 15.5354 0 12.5917 0 9.23077C0 4.13631 4.89709 0 10.9286 0C16.9601 0 21.8571 4.13631 21.8571 9.23077C21.8571 12.5917 19.7261 15.5354 16.5437 17.1498L21.2056 33.6886C21.5654 34.9652 20.7732 36 19.4345 36H2.42261C1.08464 36 0.293244 34.9597 0.651536 33.6886L5.31347 17.1498Z" fill="black" fill-opacity="0.22"/>
        </g>
        <defs>
        <filter id="filter0_i-234828" x="0" y="0" width="21.8571" height="40" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
        </filter>
        </defs>
        </svg>`,

        `<svg id="leaf" width="37" height="43" viewBox="0 0 37 43" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_i-689169)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M28.4613 8.63996C30.6914 11.029 32.5734 13.5676 33.7067 16.1061C37.5588 24.1592 37.5588 32.2123 33.7067 36.2388C30.3024 39.797 23.8904 40.2108 19.7864 38.0094C19.8005 38.0883 19.8088 38.1691 19.811 38.2515L19.9373 43H16.878L16.7517 38.2515C16.7497 38.1782 16.7528 38.1061 16.7606 38.0354C12.6549 40.2075 6.27981 39.7829 2.88927 36.2388C-0.963091 32.2123 -0.963091 24.1592 2.88927 16.1061C5.58575 10.0663 12.5196 4.02653 18.2978 0C20.1336 1.27923 22.086 2.76166 23.9821 4.38273C22.7045 4.86622 21.8004 6.06264 21.8004 7.46198C21.8004 9.28905 23.3418 10.7702 25.2432 10.7702C26.7128 10.7702 27.9673 9.8854 28.4613 8.63996Z" fill="black" fill-opacity="0.22"/>
        </g>
        <defs>
        <filter id="filter0_i-689169" x="0" y="0" width="36.5957" height="47" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
        </filter>
        </defs>
        </svg>`,

        `<svg id="crown" width="46" height="33" viewBox="0 0 46 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_i-618157)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M39.3578 8.12847C39.3578 9.42123 39.9855 10.5467 40.931 11.1862C38.9334 14.1751 36.1147 17.6461 33.2091 18.6516C29.3856 19.9759 25.8207 11.8375 24.0659 7.00099C25.3667 6.51301 26.3142 5.18089 26.3142 3.60085C26.3142 1.61349 24.8278 0 22.9961 0C21.1682 0 19.6799 1.61349 19.6799 3.60085C19.6799 5.18089 20.6254 6.51104 21.9282 7.00099C20.1773 11.8375 16.6164 19.9759 12.787 18.6516C9.88534 17.6461 7.06068 14.1751 5.06703 11.1862C6.00858 10.5467 6.63826 9.4232 6.63826 8.12847C6.63826 6.14112 5.14796 4.52566 3.31617 4.52566C1.48833 4.52566 0 6.14112 0 8.12847C0 10.1217 1.48833 11.7352 3.31617 11.7352C3.35367 11.7352 7.89564 32.4706 7.89564 32.4706H38.1024L42.5851 11.7214C44.5117 11.7352 46 10.1217 46 8.12847C45.998 6.14112 44.5097 4.52566 42.6838 4.52566C40.8461 4.52566 39.3578 6.14112 39.3578 8.12847Z" fill="black" fill-opacity="0.22"/>
        </g>
        <defs>
        <filter id="filter0_i-618157" x="0" y="0" width="46" height="36.4706" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
        </filter>
        </defs>
        </svg>`,

        `<svg id="cube" width="36" height="41" viewBox="0 0 36 41" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_i-098069)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M18 0L36 10.2414V30.7241L18 40.9655L0 30.7241V10.2414L18 0Z" fill="black" fill-opacity="0.22"/>
        </g>
        <defs>
        <filter id="filter0_i-098069" x="0" y="0" width="36" height="44.9655" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
        </filter>
        </defs>
        </svg>`,

        `<svg id="minus" width="41" height="18" viewBox="0 0 41 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_i-057413)">
        <path d="M37.0463 18H3.95371C1.77014 18 0 16.2358 0 14.0595V4.17387C0 1.99757 1.77014 0.233338 3.95371 0.233338H37.0463C39.2299 0.233338 41 1.99757 41 4.17387V14.0595C41 16.2358 39.2299 18 37.0463 18Z" fill="black" fill-opacity="0.22"/>
        </g>
        <defs>
        <filter id="filter0_i-057413" x="0" y="0.233337" width="41" height="21.7667" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
        </filter>
        </defs>
        </svg>`,

        `<svg id="sun" width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_i-593338)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M21 36.0065L17.1247 42L15.667 35.0054L9.89756 39.1882L11.0542 32.137L4.16984 33.9443L7.78473 27.7889L0.715129 26.9766L6.3 22.5483L0 19.226L6.80059 17.1229L2.12104 11.7394L9.21889 12.2455L6.79178 5.52787L13.2283 8.57481L13.3814 1.43026L18.2873 6.60654L21 0L23.7127 6.60654L28.6186 1.43026L28.7717 8.57481L35.2082 5.52787L32.7811 12.2455L39.879 11.7394L35.1994 17.1229L42 19.2261L35.7 22.5483L41.2849 26.9766L34.2153 27.7889L37.8302 33.9443L30.9458 32.137L32.1024 39.1882L26.333 35.0054L24.8753 42L21 36.0065Z" fill="black" fill-opacity="0.22"/>
        </g>
        <defs>
        <filter id="filter0_i-593338" x="0" y="0" width="42" height="46" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
        </filter>
        </defs>
        </svg>`
    ],

    indent_svg_shapes: [
        `<svg id="circle" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_i-745373)">
        <path d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="black" fill-opacity="0.22"/>
        </g>
        <defs>
        <filter id="filter0_i-745373" x="0" y="0" width="32" height="36" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
        </filter>
        </defs>
        </svg>
        `,
        `<svg id="moon" width="22" height="29" viewBox="0 0 22 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_i-092364)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 26.8858C2.19337 28.2271 4.77086 29 7.52852 29C15.5209 29 22 22.5081 22 14.5C22 6.49187 15.5209 0 7.52852 0C4.77086 0 2.19337 0.772853 0 2.11418C4.16357 4.66036 6.94297 9.25496 6.94297 14.5C6.94297 19.745 4.16357 24.3396 0 26.8858Z" fill="black" fill-opacity="0.22"/>
        </g>
        <defs>
        <filter id="filter0_i-092364" x="0" y="0" width="22" height="33" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
        </filter>
        </defs>
        </svg>
        `,
        `<svg id="star" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_i-353843)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M21.0015 27.7829L16.1396 32L11.2049 27.8684L4.78502 27.4124L4.21709 21.0015L0 16.1396L4.13159 11.2049L4.58756 4.78502L10.9985 4.21709L15.8604 0L20.7951 4.13159L27.215 4.58756L27.7829 10.9985L32 15.8604L27.8684 20.7951L27.4124 27.215L21.0015 27.7829Z" fill="black" fill-opacity="0.22"/>
        </g>
        <defs>
        <filter id="filter0_i-353843" x="0" y="0" width="32" height="36" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
        </filter>
        </defs>
        </svg>
        `,
        `<svg id="plus" width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_i-077406)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.72034 9.72034H2.10638C0.944695 9.72034 0 10.6635 0 11.8271V19.1729C0 20.3337 0.94306 21.2797 2.10638 21.2797H9.72034V28.8936C9.72034 30.0553 10.6635 31 11.8271 31H19.1729C20.3337 31 21.2797 30.0569 21.2797 28.8936V21.2797H28.8936C30.0553 21.2797 31 20.3364 31 19.1729V11.8271C31 10.6663 30.0569 9.72034 28.8936 9.72034H21.2797V2.10638C21.2797 0.944695 20.3364 0 19.1729 0H11.8271C10.6663 0 9.72034 0.94306 9.72034 2.10638V9.72034Z" fill="black" fill-opacity="0.22"/>
        </g>
        <defs>
        <filter id="filter0_i-077406" x="0" y="0" width="31" height="35" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
        </filter>
        </defs>
        </svg>`,
        `<svg id="triangle" width="32" height="26" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_i-145763)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M16 0L32 26H0L16 0Z" fill="black" fill-opacity="0.22"/>
        </g>
        <defs>
        <filter id="filter0_i-145763" x="0" y="0" width="32" height="30" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
        </filter>
        </defs>
        </svg>`,
        `<svg id="square" width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_i-773735)">
        <path d="M23.9733 0H3.02671C1.3551 0 0 1.3551 0 3.02671V23.9733C0 25.6449 1.3551 27 3.02671 27H23.9733C25.6449 27 27 25.6449 27 23.9733V3.02671C27 1.3551 25.6449 0 23.9733 0Z" fill="black" fill-opacity="0.22"/>
        </g>
        <defs>
        <filter id="filter0_i-773735" x="0" y="0" width="27" height="31" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
        </filter>
        </defs>
        </svg>`,
        `<svg id="key" width="17" height="28" viewBox="0 0 17 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_i-341019)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.1327 13.3388C1.6575 12.0831 0 9.79354 0 7.17949C0 3.21713 3.80885 0 8.5 0C13.1911 0 17 3.21713 17 7.17949C17 9.79354 15.3425 12.0831 12.8673 13.3388L16.4933 26.2022C16.7731 27.1951 16.157 28 15.1157 28H1.88425C0.843608 28 0.228079 27.1909 0.50675 26.2022L4.1327 13.3388Z" fill="black" fill-opacity="0.22"/>
        </g>
        <defs>
        <filter id="filter0_i-341019" x="0" y="0" width="17" height="32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
        </filter>
        </defs>
        </svg>`,
        `<svg id="leaf" width="27" height="32" viewBox="0 0 27 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_i-981066)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M20.9985 6.42974C22.6438 8.20765 24.0323 10.0968 24.8685 11.986C27.7105 17.9789 27.7105 23.9719 24.8685 26.9684C22.3569 29.6163 17.6261 29.9243 14.5982 28.2861C14.6086 28.3448 14.6148 28.4049 14.6164 28.4662L14.7096 32H12.4524L12.3592 28.4662C12.3578 28.4117 12.3601 28.358 12.3658 28.3054C9.33665 29.9219 4.63318 29.6059 2.13168 26.9684C-0.71056 23.9719 -0.71056 17.9789 2.13168 11.986C4.12111 7.49122 9.23684 2.99649 13.5 0C14.8544 0.951982 16.2948 2.05519 17.6938 3.26157C16.7512 3.62138 16.0841 4.51173 16.0841 5.5531C16.0841 6.91278 17.2213 8.01502 18.6242 8.01502C19.7084 8.01502 20.634 7.35658 20.9985 6.42974Z" fill="black" fill-opacity="0.22"/>
        </g>
        <defs>
        <filter id="filter0_i-981066" x="0" y="0" width="27" height="36" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
        </filter>
        </defs>
        </svg>`,
        `<svg id="crown" width="34" height="24" viewBox="0 0 34 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_i-509372)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M29.0905 6.008C29.0905 6.96352 29.5545 7.79542 30.2533 8.26809C28.7769 10.4773 26.6934 13.0428 24.5458 13.786C21.7198 14.7648 19.0849 8.74949 17.7878 5.17465C18.7493 4.81396 19.4496 3.82935 19.4496 2.6615C19.4496 1.19258 18.351 0 16.9971 0C15.6461 0 14.546 1.19258 14.546 2.6615C14.546 3.82935 15.2449 4.81251 16.2078 5.17465C14.9137 8.74949 12.2817 14.7648 9.45125 13.786C7.30656 13.0428 5.21876 10.4773 3.74519 8.26809C4.44113 7.79542 4.90654 6.96497 4.90654 6.008C4.90654 4.53909 3.80501 3.34505 2.45108 3.34505C1.10007 3.34505 0 4.53909 0 6.008C0 7.48128 1.10007 8.67386 2.45108 8.67386C2.4788 8.67386 5.83591 24 5.83591 24H28.1626L31.476 8.66368C32.8999 8.67386 34 7.48128 34 6.008C33.9985 4.53909 32.8985 3.34505 31.5489 3.34505C30.1906 3.34505 29.0905 4.53909 29.0905 6.008Z" fill="black" fill-opacity="0.22"/>
        </g>
        <defs>
        <filter id="filter0_i-509372" x="0" y="0" width="34" height="28" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
        </filter>
        </defs>
        </svg>`,
        `<svg id="cube" width="29" height="33" viewBox="0 0 29 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_i-956527)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 0L29 8.25V24.75L14.5 33L0 24.75V8.25L14.5 0Z" fill="black" fill-opacity="0.22"/>
        </g>
        <defs>
        <filter id="filter0_i-956527" x="0" y="0" width="29" height="37" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
        </filter>
        </defs>
        </svg>`,
        `<svg id="minus" width="30" height="13" viewBox="0 0 30 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_i-661431)">
        <path d="M27.107 13H2.89296C1.29522 13 0 11.7091 0 10.1167V2.88332C0 1.2909 1.29522 6.37431e-09 2.89296 6.37431e-09H27.107C28.7048 6.37431e-09 30 1.2909 30 2.88332V10.1167C30 11.7091 28.7048 13 27.107 13Z" fill="black" fill-opacity="0.22"/>
        </g>
        <defs>
        <filter id="filter0_i-661431" x="0" y="0" width="30" height="17" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
        </filter>
        </defs>
        </svg>`,
        `<svg id="sun" width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_i-802295)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 26.5763L12.6397 31L11.5637 25.8373L7.30534 28.9246L8.15909 23.7202L3.07774 25.0541L5.74587 20.5109L0.527833 19.9113L4.65 16.6428L0 14.1906L5.01948 12.6384L1.56553 8.66482L6.80442 9.03836L5.01298 4.0801L9.76374 6.32902L9.87677 1.05567L13.4978 4.87626L15.5 0L17.5022 4.87626L21.1232 1.05567L21.2363 6.32902L25.987 4.0801L24.1956 9.03836L29.4345 8.66482L25.9805 12.6384L31 14.1907L26.35 16.6428L30.4722 19.9113L25.2541 20.5109L27.9223 25.0541L22.8409 23.7202L23.6947 28.9246L19.4363 25.8373L18.3603 31L15.5 26.5763Z" fill="black" fill-opacity="0.22"/>
        </g>
        <defs>
        <filter id="filter0_i-802295" x="0" y="0" width="31" height="35" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
        </filter>
        </defs>
        </svg>`
    ],

    neu_svg_shapes: [
        `<svg id="circle" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g style="mix-blend-mode:luminosity" filter="url(#filter0_i-411982)">
        <path d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="url(#paint0_linear-073400)" fill-opacity="0.27"/>
        </g>
        <defs>
        <filter id="filter0_i-411982" x="0" y="0" width="32" height="36" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
        </filter>
        <linearGradient id="paint0_linear-073400" x1="16" y1="0" x2="16" y2="32" gradientUnits="userSpaceOnUse">
        <stop/>
        <stop offset="1" stop-color="white"/>
        </linearGradient>
        </defs>
        </svg>`,

        `<svg id="moon" width="22" height="29" viewBox="0 0 22 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g style="mix-blend-mode:luminosity" filter="url(#filter0_i-981247)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 26.8858C2.19337 28.2271 4.77086 29 7.52852 29C15.5209 29 22 22.5081 22 14.5C22 6.49187 15.5209 0 7.52852 0C4.77086 0 2.19337 0.772853 0 2.11418C4.16357 4.66036 6.94297 9.25496 6.94297 14.5C6.94297 19.745 4.16357 24.3396 0 26.8858Z" fill="url(#paint0_linear-739700)" fill-opacity="0.27"/>
        </g>
        <defs>
        <filter id="filter0_i-981247" x="0" y="0" width="22" height="33" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
        </filter>
        <linearGradient id="paint0_linear-739700" x1="11" y1="0" x2="11" y2="29" gradientUnits="userSpaceOnUse">
        <stop/>
        <stop offset="1" stop-color="white"/>
        </linearGradient>
        </defs>
        </svg>`,

        `<svg id="star" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g style="mix-blend-mode:luminosity" filter="url(#filter0_i-793007)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M21.0015 27.7829L16.1396 32L11.2049 27.8684L4.78502 27.4124L4.21709 21.0015L0 16.1396L4.13159 11.2049L4.58756 4.78502L10.9985 4.21709L15.8604 0L20.7951 4.13159L27.215 4.58756L27.7829 10.9985L32 15.8604L27.8684 20.7951L27.4124 27.215L21.0015 27.7829Z" fill="url(#paint0_linear-305183)" fill-opacity="0.27"/>
        </g>
        <defs>
        <filter id="filter0_i-793007" x="0" y="0" width="32" height="36" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
        </filter>
        <linearGradient id="paint0_linear-305183" x1="16" y1="0" x2="16" y2="32" gradientUnits="userSpaceOnUse">
        <stop/>
        <stop offset="1" stop-color="white"/>
        </linearGradient>
        </defs>
        </svg>`,

        `<svg id="plus" width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g style="mix-blend-mode:luminosity" filter="url(#filter0_i-985317)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.72034 9.72034H2.10638C0.944695 9.72034 0 10.6635 0 11.8271V19.1729C0 20.3337 0.94306 21.2797 2.10638 21.2797H9.72034V28.8936C9.72034 30.0553 10.6635 31 11.8271 31H19.1729C20.3337 31 21.2797 30.0569 21.2797 28.8936V21.2797H28.8936C30.0553 21.2797 31 20.3365 31 19.1729V11.8271C31 10.6663 30.0569 9.72034 28.8936 9.72034H21.2797V2.10638C21.2797 0.944695 20.3365 0 19.1729 0H11.8271C10.6663 0 9.72034 0.94306 9.72034 2.10638V9.72034Z" fill="url(#paint0_linear-873361)" fill-opacity="0.27"/>
        </g>
        <defs>
        <filter id="filter0_i-985317" x="0" y="0" width="31" height="35" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
        </filter>
        <linearGradient id="paint0_linear-873361" x1="15.5" y1="0" x2="15.5" y2="31" gradientUnits="userSpaceOnUse">
        <stop/>
        <stop offset="1" stop-color="white"/>
        </linearGradient>
        </defs>
        </svg>`,

        `<svg id="triangle" width="32" height="26" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g style="mix-blend-mode:luminosity" filter="url(#filter0_i-608082)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M16 0L32 26H0L16 0Z" fill="url(#paint0_linear-201333)" fill-opacity="0.27"/>
        </g>
        <defs>
        <filter id="filter0_i-608082" x="0" y="0" width="32" height="30" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
        </filter>
        <linearGradient id="paint0_linear-201333" x1="16" y1="0" x2="16" y2="26" gradientUnits="userSpaceOnUse">
        <stop/>
        <stop offset="1" stop-color="white"/>
        </linearGradient>
        </defs>
        </svg>`,

        `<svg id="square" width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g style="mix-blend-mode:luminosity" filter="url(#filter0_i-717968)">
        <path d="M23.9733 0H3.02671C1.3551 0 0 1.3551 0 3.02671V23.9733C0 25.6449 1.3551 27 3.02671 27H23.9733C25.6449 27 27 25.6449 27 23.9733V3.02671C27 1.3551 25.6449 0 23.9733 0Z" fill="url(#paint0_linear-741001)" fill-opacity="0.27"/>
        </g>
        <defs>
        <filter id="filter0_i-717968" x="0" y="0" width="27" height="31" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
        </filter>
        <linearGradient id="paint0_linear-741001" x1="13.5" y1="0" x2="13.5" y2="27" gradientUnits="userSpaceOnUse">
        <stop/>
        <stop offset="1" stop-color="white"/>
        </linearGradient>
        </defs>
        </svg>`,

        `<svg id="key" width="17" height="28" viewBox="0 0 17 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g style="mix-blend-mode:luminosity" filter="url(#filter0_i-879148)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.1327 13.3388C1.6575 12.0831 0 9.79354 0 7.17949C0 3.21713 3.80885 0 8.5 0C13.1911 0 17 3.21713 17 7.17949C17 9.79354 15.3425 12.0831 12.8673 13.3388L16.4932 26.2022C16.7731 27.1951 16.157 28 15.1157 28H1.88425C0.843608 28 0.228079 27.1909 0.50675 26.2022L4.1327 13.3388Z" fill="url(#paint0_linear-297892)" fill-opacity="0.27"/>
        </g>
        <defs>
        <filter id="filter0_i-879148" x="0" y="0" width="17" height="32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
        </filter>
        <linearGradient id="paint0_linear-297892" x1="8.5" y1="0" x2="8.5" y2="28" gradientUnits="userSpaceOnUse">
        <stop/>
        <stop offset="1" stop-color="white"/>
        </linearGradient>
        </defs>
        </svg>`,

        `<svg id="leaf" width="27" height="32" viewBox="0 0 27 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g style="mix-blend-mode:luminosity" filter="url(#filter0_i-065108)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M20.9985 6.42974C22.6438 8.20765 24.0323 10.0968 24.8685 11.986C27.7105 17.9789 27.7105 23.9719 24.8685 26.9684C22.3569 29.6163 17.6261 29.9243 14.5982 28.2861C14.6086 28.3448 14.6148 28.4049 14.6164 28.4662L14.7096 32H12.4524L12.3592 28.4662C12.3578 28.4117 12.3601 28.358 12.3658 28.3054C9.33665 29.9219 4.63318 29.6059 2.13168 26.9684C-0.71056 23.9719 -0.71056 17.9789 2.13168 11.986C4.12111 7.49122 9.23684 2.99649 13.5 0C14.8544 0.951982 16.2948 2.05519 17.6938 3.26157C16.7512 3.62138 16.0841 4.51173 16.0841 5.5531C16.0841 6.91278 17.2213 8.01502 18.6242 8.01502C19.7084 8.01502 20.634 7.35658 20.9985 6.42974Z" fill="url(#paint0_linear-181652)" fill-opacity="0.27"/>
        </g>
        <defs>
        <filter id="filter0_i-065108" x="0" y="0" width="27" height="36" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
        </filter>
        <linearGradient id="paint0_linear-181652" x1="13.5" y1="0" x2="13.5" y2="32" gradientUnits="userSpaceOnUse">
        <stop/>
        <stop offset="1" stop-color="white"/>
        </linearGradient>
        </defs>
        </svg>`,

        `<svg id="crown" width="34" height="24" viewBox="0 0 34 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g style="mix-blend-mode:luminosity" filter="url(#filter0_i-582111)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M29.0905 6.008C29.0905 6.96352 29.5545 7.79542 30.2533 8.26809C28.7769 10.4773 26.6934 13.0428 24.5458 13.786C21.7198 14.7648 19.0849 8.74949 17.7878 5.17465C18.7493 4.81396 19.4496 3.82935 19.4496 2.6615C19.4496 1.19258 18.351 0 16.9971 0C15.6461 0 14.546 1.19258 14.546 2.6615C14.546 3.82935 15.2449 4.81251 16.2078 5.17465C14.9137 8.74949 12.2817 14.7648 9.45125 13.786C7.30656 13.0428 5.21876 10.4773 3.74519 8.26809C4.44113 7.79542 4.90654 6.96497 4.90654 6.008C4.90654 4.53909 3.80501 3.34505 2.45108 3.34505C1.10007 3.34505 0 4.53909 0 6.008C0 7.48128 1.10007 8.67386 2.45108 8.67386C2.4788 8.67386 5.83591 24 5.83591 24H28.1626L31.476 8.66368C32.8999 8.67386 34 7.48128 34 6.008C33.9985 4.53909 32.8985 3.34505 31.5489 3.34505C30.1906 3.34505 29.0905 4.53909 29.0905 6.008Z" fill="url(#paint0_linear-859050)" fill-opacity="0.27"/>
        </g>
        <defs>
        <filter id="filter0_i-582111" x="0" y="0" width="34" height="28" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
        </filter>
        <linearGradient id="paint0_linear-859050" x1="17" y1="0" x2="17" y2="24" gradientUnits="userSpaceOnUse">
        <stop/>
        <stop offset="1" stop-color="white"/>
        </linearGradient>
        </defs>
        </svg>`,

        `<svg id="cube" width="29" height="33" viewBox="0 0 29 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g style="mix-blend-mode:luminosity" filter="url(#filter0_i-533003)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 0L29 8.25V24.75L14.5 33L0 24.75V8.25L14.5 0Z" fill="url(#paint0_linear-627769)" fill-opacity="0.27"/>
        </g>
        <defs>
        <filter id="filter0_i-533003" x="0" y="0" width="29" height="37" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
        </filter>
        <linearGradient id="paint0_linear-627769" x1="14.5" y1="0" x2="14.5" y2="33" gradientUnits="userSpaceOnUse">
        <stop/>
        <stop offset="1" stop-color="white"/>
        </linearGradient>
        </defs>
        </svg>`,

        `<svg id="minus" width="30" height="13" viewBox="0 0 30 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g style="mix-blend-mode:luminosity" filter="url(#filter0_i-980026)">
        <path d="M27.107 13H2.89296C1.29522 13 0 11.7091 0 10.1167V2.88332C0 1.2909 1.29522 0 2.89296 0H27.107C28.7048 0 30 1.2909 30 2.88332V10.1167C30 11.7091 28.7048 13 27.107 13Z" fill="url(#paint0_linear-490510)" fill-opacity="0.27"/>
        </g>
        <defs>
        <filter id="filter0_i-980026" x="0" y="0" width="30" height="17" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
        </filter>
        <linearGradient id="paint0_linear-490510" x1="15" y1="13" x2="15" y2="0" gradientUnits="userSpaceOnUse">
        <stop/>
        <stop offset="1" stop-color="white"/>
        </linearGradient>
        </defs>
        </svg>`,

        `<svg id="sun" width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g style="mix-blend-mode:luminosity" filter="url(#filter0_i-803157)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 26.5763L12.6397 31L11.5637 25.8373L7.30534 28.9246L8.15909 23.7202L3.07774 25.0541L5.74587 20.5109L0.527833 19.9113L4.65 16.6428L0 14.1906L5.01948 12.6384L1.56553 8.66482L6.80442 9.03836L5.01298 4.0801L9.76374 6.32902L9.87677 1.05567L13.4978 4.87626L15.5 0L17.5022 4.87626L21.1232 1.05567L21.2363 6.32902L25.987 4.0801L24.1956 9.03836L29.4345 8.66482L25.9805 12.6384L31 14.1907L26.35 16.6428L30.4722 19.9113L25.2541 20.5109L27.9223 25.0541L22.8409 23.7202L23.6947 28.9246L19.4363 25.8373L18.3603 31L15.5 26.5763Z" fill="url(#paint0_linear-371240)" fill-opacity="0.27"/>
        </g>
        <defs>
        <filter id="filter0_i-803157" x="0" y="0" width="31" height="35" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
        </filter>
        <linearGradient id="paint0_linear-371240" x1="15.5" y1="0" x2="15.5" y2="31" gradientUnits="userSpaceOnUse">
        <stop/>
        <stop offset="1" stop-color="white"/>
        </linearGradient>
        </defs>
        </svg>`
    ]
}

/* 
|--------------------------------------------------------------------------
| Common Notation
|--------------------------------------------------------------------------
|
| create an array of common notation for our note bank to communicate 
| with other libraries
|
*/

const buildCommonNotation = () => {
    let oldNotation = []

    noteData.octaves.forEach(octave => {
        noteData.pitches.forEach(pitch => {
            oldNotation.push(`${pitch}${octave}`)
        })
    })
    return oldNotation
}

/* 
|--------------------------------------------------------------------------
| Build Notes
|--------------------------------------------------------------------------
|
| Compose our note databank
|
*/

const buildNotes = () => {
    let counter = 0
    let container = []
    let oldNotation = buildCommonNotation()

    noteData.colors.forEach(color => {
        noteData.shapes.forEach((shape, index) => {
            container.push({
                color,
                shape,
                midiVal: counter,
                commonNotation: oldNotation[counter],
                svg: noteData.indent_svg_shapes[index],
                filtered: false,
                position: index
            })

            counter += 1
        })
    })
    return container
}

const shapeGroupOne = ['moon', 'plus', 'key', 'crown', 'minus']

let notesData = buildNotes()

notesData.forEach(note => {
    if (shapeGroupOne.includes(note.shape)) {
        note.filtered = true
    }
})

export const initialNotes = notesData
