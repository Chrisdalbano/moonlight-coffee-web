<template>
  <main class="h-[50vh] bg-black flex items-center justify-start relative">
    <img
      rel="preload"
      src="@/assets/onsite-location3.jpg"
      class="w-full h-full object-cover opacity-60"
    />

    <div class="absolute inset-0 flex items-center justify-center">
      <div class="text-white p-4 rounded ml-10">
        <h2 class="lg:text-8xl text-6xl font-bad-script mb-6 font-bold">
          About Moonlight Coffee
        </h2>
        <p class="text-2xl mb-4 text-shadow">
          Here is a little bit about our story
        </p>
      </div>
    </div>
  </main>

  <section class="py-16 px-8 text-center">
    <h3 class="text-4xl mb-6 font-bold font-bad-script">Our Story</h3>
    <div class="font-poppins">
      <p class="text-xl mb-8">
        In 2023, Isaac and Peter, two nocturnal beings with an affinity for
        high-quality coffee, envisioned a place where the tranquil beauty of the
        night could be enjoyed alongside a warm cup of expertly crafted coffee.
        From this vision, Moonlight Coffee was born.
      </p>

      <p class="text-xl mb-8">
        Nestled in the heart of Orlando, our cafe has become a haven for night
        owls and coffee aficionados alike. The dark, cozy ambience paired with
        the delightful scent of freshly ground coffee provides the perfect
        setting to relax, work, or just contemplate the mysteries of the
        universe.
      </p>

      <p class="text-xl mb-8">
        We source our beans from small, sustainable coffee farms, ensuring that
        each cup of Moonlight Coffee serves not only our customers but also our
        global community. Our baristas are skilled artisans, weaving together
        the science and art of brewing that perfect cup of coffee.
      </p>
    </div>

    <img
      class="w-1/2 mx-auto mb-10 rounded shadow-lg"
      src="@/assets/new-shiny-coffee-machine-coffee-shop-is-ready-start-making-coffee.jpg"
      alt="Coffee shop image"
    />

    <h3 class="text-4xl mb-6 font-bold font-bad-script">Meet the Founders</h3>

    <div class="grid grid-cols-2 gap-4 mb-8">
      <div class="flex flex-col items-center">
        <img
          class="w-34 h-24 rounded-full mb-4"
          src="@/assets/founder1.jpg"
          alt="Founder 1"
        />
        <h4 class="text-2xl font-bold mb-2 font-bad-script">
          Isaac Nightingale
        </h4>
        <p class="text-lg max-w-lg font-poppins">
          Isaac is a night owl by nature, with a fascination for the cosmos that
          traces back to his childhood. His love for astronomy led to countless
          nights of stargazing, where he found tranquility and peace.
        </p>
      </div>

      <div class="flex flex-col items-center">
        <img
          class="w-30 h-24 rounded-full mb-4"
          src="@/assets/founder2.jpeg"
          alt="Founder 2"
        />
        <h4 class="text-2xl font-bold mb-2 font-bad-script">Peter Moonbeam</h4>
        <p class="text-lg max-w-lg font-poppins">
          Peter, a coffee enthusiast and expert barista, has always felt a
          special connection to the moon and the serene silence it brings.
        </p>
      </div>
    </div>
  </section>
  <footer class="bg-amber-800 text-white p-4">
    <p class="text-center">
      Made with ❤️ by
      <a
        href="http://www.chrisdalbano.com"
        class="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        target="_blank"
      >
        Chrisdalbano
      </a>
    </p>
    <p class="text-center">
      &copy; {{ new Date().getFullYear() }} Moonlight Coffee. All rights
      reserved.
    </p>
    <section class="p-4 text-white">
      <h2 class="text-center text-lg mb-2">Sign up for our Newsletter</h2>
      <form class="flex justify-center">
        <input
          type="email"
          v-model="email"
          placeholder="Your email"
          class="p-2 rounded-l-md"
        />
        <button type="submit" class="p-2 bg-white text-amber-800 rounded-r-md">
          Sign up
        </button>
      </form>
    </section>
  </footer>
</template>

<script></script>
