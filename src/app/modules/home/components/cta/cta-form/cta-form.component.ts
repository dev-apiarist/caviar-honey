import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cta-form',
  template: `<div class="container py-24 mx-auto max-w-[586px]">
    <div class="flex flex-col text-center w-full mb-12">
      <h1
        class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-800"
      >
        REGISTER
      </h1>
      <p class="mx-auto leading-relaxed text-base">
        FOR DISCOUNT ON PURCHASE <br />

        WHEN YOU TAKE BACK JARS
      </p>
      <p class="mt-5 w-3/5 mx-auto text-sm">
        BEE environmentally conscious! Return your previously purchased Caviar
        Honey jar to receive 20% off a new jar of honey purchased at the time of
        return.
      </p>
    </div>
    <div class="lg:w-3/5 md:w-2/3 mx-auto">
      <div class="flex flex-wrap -m-2">
        <div class="p-2 w-full sm:w-1/2">
          <div class="relative">
            <label for="name" class="leading-7 text-sm text-gray-600"
              >First Name</label
            >
            <input
              type="text"
              id="name"
              name="fname"
              class="w-full bg-gray-100 md:bg-opacity-50 rounded border border-gray-300 py-1 px-3 leading-8"
            />
          </div>
        </div>
        <div class="p-2 w-full sm:w-1/2">
          <div class="relative">
            <label for="lname" class="leading-7 text-sm text-gray-600"
              >Last Name</label
            >
            <input
              type="text"
              id="lname"
              name="lname"
              class="w-full bg-gray-100 md:bg-opacity-50 rounded border border-gray-300 py-1 px-3 leading-8"
            />
          </div>
        </div>
        <div class="p-2 w-full">
          <div class="relative">
            <label for="lname" class="leading-7 text-sm text-gray-600"
              >Email</label
            >
            <input
              type="text"
              id="email"
              name="email"
              class="w-full bg-gray-100 md:bg-opacity-50 rounded border border-gray-300 py-1 px-3 leading-8"
            />
          </div>
        </div>
        <div class="p-2 w-full">
          <button
            class="flex mx-auto text-white bg-[#7E1D01] border-0 py-2 px-8 0 rounded text-lg"
          >
            REGISTER
          </button>
        </div>
        <p class="italic text-xs mx-auto mt-5">
          By signing up, you agree to receive email marketing
        </p>
      </div>
    </div>
  </div> `,
  styles: [``],
})
export class CtaFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
