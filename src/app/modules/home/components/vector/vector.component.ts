import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vector',
  template: `<div class="relative">
    <div>
      <svg
        class="w-full h-full"
        width="1440"
        height="763"
        viewBox="0 0 1440 763"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <clipPath id="mask">
          <path
            d="M724.444 99.2081C429.333 246.379 115.556 143.199 0 43.2192V699.089C180.741 761.744 552 833.463 768.889 619.105C985.778 404.748 1306.67 495.13 1440 567.116V43.2192C1324.44 0.560943 1019.56 -47.9628 724.444 99.2081Z"
            fill="#8A6300"
            fill-opacity="0.17"
          />
        </clipPath>
        <image
          clip-path="url(#mask)"
          xlink:href="/assets/images/vector_1.png"
          class="object-cover w-full"
        />
      </svg>
    </div>

    <div
      class="top-[53%] left-[43%] lg:left-[45%] right-5 absolute max-w-[860px] z-10"
    >
      <img src="assets/images/sunflower.png" alt="" />
    </div>
  </div> `,
  styles: [``],
})
export class VectorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
