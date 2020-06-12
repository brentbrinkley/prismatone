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

    original_svg_shapes: [
        `<svg id="circle" width="59" height="59" viewBox="0 0 59 59" xmlns="http://www.w3.org/2000/svg"><title> 1-Circle-C</title><desc> Created with Sketch.</desc><g fill="none"><g fill="#FFF"><circle cx="29.3" cy="29.3" r="29.3"/></g></g></svg>`,

        `<svg id="moon" width="45" height="59" viewBox="0 0 45 59" xmlns="http://www.w3.org/2000/svg"><title> 2-Moon-C-Sharp</title><desc> Created with Sketch.</desc><g fill="none"><g fill="#FFF"><path d="M0 53.8C4.4 56.5 9.6 58.1 15.1 58.1 31.1 58.1 44.1 45.1 44.1 29 44.1 13 31.1 0 15.1 0 9.6 0 4.4 1.5 0 4.2 8.4 9.3 13.9 18.5 13.9 29 13.9 39.5 8.4 48.7 0 53.8L0 53.8Z"/></g></g></svg>`,

        `<svg id="star" width="63" height="63" viewBox="0 0 63 63" xmlns="http://www.w3.org/2000/svg"><title> 3-Star-D</title><desc> Created with Sketch.</desc><g fill="none"><g fill="#FFF"><polygon points="40.7 53.9 31.3 62.1 21.7 54.1 9.3 53.2 8.2 40.7 0 31.3 8 21.7 8.9 9.3 21.3 8.2 30.8 0 40.3 8 52.8 8.9 53.9 21.3 62.1 30.8 54.1 40.3 53.2 52.8"/></g></g></svg>`,

        `<svg id="plus" width="59" height="59" viewBox="0 0 59 59" xmlns="http://www.w3.org/2000/svg"><title> 4-Plus-D-Sharp</title><desc> Created with Sketch.</desc><g fill="none"><g fill="#FFF"><path d="M18.5 18.5L4 18.5C1.8 18.5 0 20.3 0 22.5L0 36.5C0 38.7 1.8 40.5 4 40.5L18.5 40.5 18.5 55C18.5 57.2 20.3 59 22.5 59L36.5 59C38.7 59 40.5 57.2 40.5 55L40.5 40.5 55 40.5C57.2 40.5 59 38.7 59 36.5L59 22.5C59 20.3 57.2 18.5 55 18.5L40.5 18.5 40.5 4C40.5 1.8 38.7 0 36.5 0L22.5 0C20.3 0 18.5 1.8 18.5 4L18.5 18.5Z"/></g></g></svg>`,

        `<svg id="triangle" width="66" height="54" viewBox="0 0 66 54" xmlns="http://www.w3.org/2000/svg"><title> 5-Triangle-E</title><desc> Created with Sketch.</desc><g fill="none"><g fill="#FFF"><polygon points="32.6 0 65.3 53.4 0 53.4"/></g></g></svg>`,
        `<svg id="square" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><title> 6-Square-F</title><desc> Created with Sketch.</desc><g fill="none"><g fill="#FFF"><rect width="53.5" height="53.5" rx="6"/></g></g></svg>`,

        `<svg id="key" width="36" height="60" viewBox="0 0 36 60" xmlns="http://www.w3.org/2000/svg"><title> 7-Key-F-Sharp</title><desc> Created with Sketch.</desc><g fill="none"><g fill="#FFF"><path d="M8.8 28.6C3.5 25.9 0 21 0 15.4 0 6.9 8.1 0 18 0 27.9 0 36 6.9 36 15.4 36 21 32.5 25.9 27.2 28.6L34.9 56.1C35.5 58.3 34.2 60 32 60L4 60C1.8 60 0.5 58.3 1.1 56.1L8.8 28.6Z"/></g></g></svg>`,

        `<svg id="leaf" width="55" height="65" viewBox="0 0 55 65" xmlns="http://www.w3.org/2000/svg"><title> 8-Leaf-G</title><desc> Created with Sketch.</desc><g fill="none"><g fill="#FFF"><path d="M42.3 12.9C45.6 16.5 48.4 20.3 50.1 24.1 55.8 36.1 55.8 48.2 50.1 54.2 45.1 59.5 35.5 60.2 29.4 56.9 29.4 57 29.5 57.1 29.5 57.2L29.6 64.3 25.1 64.3 24.9 57.2C24.9 57.1 24.9 57 24.9 56.9 18.8 60.2 9.3 59.5 4.3 54.2 -1.4 48.2-1.4 36.1 4.3 24.1 8.3 15.1 18.6 6 27.2 0 29.9 1.9 32.8 4.1 35.7 6.6 33.8 7.3 32.4 9.1 32.4 11.2 32.4 13.9 34.7 16.1 37.5 16.1 39.7 16.1 41.6 14.8 42.3 12.9Z"/></g></g></svg>`,

        `<svg id="crown" width="72" height="51" viewBox="0 0 72 51" xmlns="http://www.w3.org/2000/svg"><title> 9-Crown-G-Sharp</title><desc> Created with Sketch.</desc><g fill="none"><g fill="#FFF"><path d="M61.5 12.7C61.5 14.8 62.5 16.5 64 17.5 60.8 22.2 56.4 27.6 51.9 29.2 45.9 31.3 40.3 18.5 37.6 11 39.6 10.2 41.1 8.1 41.1 5.6 41.1 2.5 38.8 0 35.9 0 33.1 0 30.8 2.5 30.8 5.6 30.8 8.1 32.2 10.2 34.3 11 31.5 18.5 26 31.3 20 29.2 15.4 27.6 11 22.2 7.9 17.5 9.4 16.5 10.4 14.8 10.4 12.7 10.4 9.6 8 7.1 5.2 7.1 2.3 7.1 0 9.6 0 12.7 0 15.9 2.3 18.4 5.2 18.4 5.2 18.4 12.3 50.9 12.3 50.9L59.5 50.9 66.5 18.4C69.6 18.4 71.9 15.9 71.9 12.7 71.9 9.6 69.6 7.1 66.7 7.1 63.8 7.1 61.5 9.6 61.5 12.7Z"/></g></g></svg>`,

        `<svg id="cube" width="60" height="69" viewBox="0 0 60 69" xmlns="http://www.w3.org/2000/svg"><title> 10-Metatron-A</title><desc> Created with Sketch.</desc><g fill="none"><g fill="#FFF"><polygon points="30.1 0 59.6 17 59.6 51.1 30.1 68.1 0.6 51.1 0.6 17"/></g></g></svg>`,
        `<svg id="minus" width="63" height="28" viewBox="0 0 63 28" xmlns="http://www.w3.org/2000/svg"><title> 11-Minus-A-Sharp</title><desc> Created with Sketch.</desc><g fill="none"><g fill="#FFF"><rect width="62.2" height="27.1" rx="6"/></g></g></svg>`,

        `<svg id="sun" width="76" height="75" viewBox="0 0 76 75" xmlns="http://www.w3.org/2000/svg"><title> 12-Sun-B</title><desc> Created with Sketch.</desc><g fill="none"><g fill="#FFF"><polygon points="37.6 64.2 30.7 74.9 28.1 62.4 17.7 69.9 19.8 57.3 7.5 60.5 14 49.5 1.3 48.1 11.3 40.2 0 34.3 12.2 30.5 3.8 20.9 16.5 21.8 12.2 9.9 23.7 15.3 24 2.6 32.8 11.8 37.6 0 42.5 11.8 51.3 2.6 51.6 15.3 63.1 9.9 58.7 21.8 71.5 20.9 63.1 30.5 75.3 34.3 64 40.2 74 48.1 61.3 49.5 67.8 60.5 55.5 57.3 57.5 69.9 47.2 62.4 44.6 74.9"/></g></g></svg>`
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

        `<svg width="40" height="47" viewBox="0 0 40 47" fill="none" xmlns="http://www.w3.org/2000/svg">
<g style="mix-blend-mode:luminosity" filter="url(#filter0_i)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M31.1089 9.44368C33.5464 12.055 35.6034 14.8297 36.8422 17.6044C41.0526 26.4066 41.0526 35.2087 36.8422 39.6098C33.1213 43.499 26.1127 43.9514 21.627 41.5452C21.6424 41.6314 21.6515 41.7197 21.6539 41.8098L21.792 47H18.448L18.31 41.8098C18.3078 41.7297 18.3112 41.6508 18.3197 41.5736C13.8321 43.9478 6.86398 43.4836 3.15804 39.6098C-1.05268 35.2087 -1.05268 26.4066 3.15804 17.6044C6.10535 11.0027 13.6842 4.40109 20 0C22.0065 1.39822 24.1405 3.01855 26.213 4.79043C24.8166 5.31889 23.8283 6.6266 23.8283 8.15611C23.8283 10.1531 25.5131 11.7721 27.5914 11.7721C29.1977 11.7721 30.5689 10.805 31.1089 9.44368Z" fill="url(#paint0_linear)" fill-opacity="0.27"/>
</g>
<defs>
<filter id="filter0_i" x="0" y="0" width="44" height="49" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="4" dy="2"/>
<feGaussianBlur stdDeviation="3"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.31 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
</filter>
<linearGradient id="paint0_linear" x1="20" y1="0" x2="20" y2="47" gradientUnits="userSpaceOnUse">
<stop/>
<stop offset="1" stop-color="white"/>
</linearGradient>
</defs>
</svg>
`,

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
                svg: noteData.neu_svg_shapes[index],
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
