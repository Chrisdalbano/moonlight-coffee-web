<template>
  <main class="h-[50vh] bg-black flex items-center justify-start relative">
    <transition name="fade" mode="out-in">
      <div
        v-if="slides[currentSlide].image"
        :style="{
          backgroundImage: `url(${slides[currentSlide].image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }"
        class="w-full h-full object-cover"
        :key="slides[currentSlide].image"
      ></div>
      <video
        v-else
        autoplay
        muted
        loop
        class="w-full h-full object-cover"
        :key="slides[currentSlide].video"
      >
        <source :src="slides[currentSlide].video" type="video/mp4" />
      </video>
    </transition>

    <div class="absolute inset-0 flex items-center justify-center">
      <div class="text-white p-4 rounded ml-10">
        <h2 class="text-8xl font-bad-script mb-6 font-bold text-shadow">
          The Moonlight Menu
        </h2>
        <p class="text-2xl mb-4 text-shadow">
          These are just a few of our favorites. Visit our location to discover
          all the specials
        </p>
      </div>
    </div>
  </main>
  <section class="bg-black opacity-90">
    <div class="flex justify-center">
      <p
        class="p-20 text-2xl font-poppins text-orange-100 max-w-xl text-center"
      >
        Every item in this store is crafted with expertise & passion, from our
        specialty Espresso to our delicious golden Media Lunas
      </p>
    </div>
  </section>

  <section id="espresso-menu" class="relative bg-orange-100">
    <div class="relative container mx-auto p-4 font-poppins">
      <div class="flex justify-center">
        <h3 class="text-2xl font-bold font-bad-script text-white text-shadow">
          Espresso
        </h3>
      </div>
      <p class="flex justify-center text-white text-sm mb-8 text-shadow">
        Enjoy a variety of hot coffee options to kickstart your day!
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          class="bg-white rounded-lg shadow-md p-6 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
        >
          <h3 class="text-xl font-bold font-bad-script">Doppio Espresso</h3>
          <p class="text-sm">$2.75</p>
        </div>

        <div
          class="bg-white rounded-lg shadow-md p-6 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
        >
          <h3 class="text-xl font-bold font-bad-script">Americano</h3>
          <p class="text-sm">$2.75</p>
        </div>

        <div
          class="bg-white rounded-lg shadow-md p-6 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
        >
          <h3 class="text-xl font-bold font-bad-script">Cortado</h3>
          <p class="text-sm">$3.25</p>
        </div>

        <div
          class="bg-white rounded-lg shadow-md p-6 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
        >
          <h3 class="text-xl font-bold font-bad-script">Cappuccino</h3>
          <p class="text-sm">$3.50</p>
        </div>

        <div
          class="bg-white rounded-lg shadow-md p-6 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
        >
          <h3 class="text-xl font-bold font-bad-script">Cafe Latte</h3>
          <p class="text-sm">$4.00</p>
        </div>

        <div
          class="bg-white rounded-lg shadow-md p-6 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
        >
          <h3 class="text-xl font-bold font-bad-script">Espresso Macchiato</h3>
          <p class="text-sm">$3.00</p>
        </div>
      </div>
    </div>
  </section>
  <section class="bg-orange-200">
    <div class="container mx-auto p-4 font-poppins">
      <div class="flex justify-center">
        <h3 class="text-2xl font-bold font-bad-script">Signature Bites</h3>
      </div>
      <p class="flex justify-center text-sm mb-8">
        Everything eatable! Enjoy our traditional pastries and signature dishes
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        <div
          class="bg-white rounded-lg shadow-md p-6 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
        >
          <img
            src="@/assets/menu-food/medialunas.jpg"
            alt="Dos Medialunas"
            class="h-64 w-full object-cover rounded-t-lg"
          />
          <h3 class="text-xl font-bold text-center py-4 font-bad-script">
            Dos Medialunas
          </h3>
          <p class="text-sm">
            Looks like Crossaint; Tastes like sweet soft cloud. Two freshly
            baked and flaky texture Medialunas.
          </p>
        </div>

        <div
          class="bg-white rounded-lg shadow-md p-6 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
        >
          <img
            src="@/assets/menu-food/eclair-berry.jpg"
            alt="Berriest Honey Eclairs"
            class="h-64 w-full object-cover rounded-t-lg"
          />
          <h3 class="text-xl font-bold text-center py-4 font-bad-script">
            Berriest Honey Eclairs
          </h3>
          <p class="text-sm">
            Deliciously sweet and tart, our Berriest Honey Eclairs are a must
            try!
          </p>
        </div>

        <div
          class="bg-white rounded-lg shadow-md p-6 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
        >
          <img
            src="@/assets/menu-food/avocado-toast.jpg"
            alt="Avocado Toast"
            class="h-64 w-full object-cover rounded-t-lg"
          />
          <h3 class="text-xl font-bold text-center py-4 font-bad-script">
            Avocado Toast
          </h3>
          <p class="text-sm">
            Our Avocado Toast is a healthy and delicious option, perfect for any
            time of the day, two of them!
          </p>
        </div>

        <div
          class="bg-white rounded-lg shadow-md p-6 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
        >
          <img
            src="@/assets/menu-food/moonlight-breakfast.jpg"
            alt="Moonlight Breakfast"
            class="h-64 w-full object-cover rounded-t-lg"
          />
          <h3 class="text-xl font-bold text-center py-4 font-bad-script">
            Moonlight Breakfast
          </h3>
          <p class="text-sm">
            Our Moonlight Breakfast is a hearty and satisfying meal that will
            keep you energized throughout the day.
          </p>
        </div>
      </div>
    </div>
  </section>
  <section class="bg-black opacity-90 p-4 text-white">
    <div class="flex justify-center">
      <h3 class="text-2xl font-bold font-bad-script">Signature Drinks</h3>
    </div>
    <p class="flex justify-center text-sm text-white font-poppins mb-8">
      The mystical potions that make us happy.
    </p>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        class="bg-gray-900 rounded-lg shadow-md p-6 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg text-white"
      >
        <img
          class="w-full h-48 object-cover mb-4 rounded"
          src="@/assets/menu-cocktails/martini-e.jpg"
          alt="Espresso Martini"
        />
        <h3 class="text-xl font-bold font-bad-script">Espresso Martini</h3>
        <p class="text-sm font-popvkkjo">
          Vodka, espresso, coffee liqueur, and simple syrup. Shaken and served
          chilled.
        </p>
        <p class="text-lg font-bold mt-2">$12.00</p>
      </div>

      <div
        class="bg-gray-900 rounded-lg shadow-md p-6 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
      >
        <img
          class="w-full h-48 object-cover mb-4 rounded"
          src="@/assets/menu-cocktails/sour.jpg"
          alt="Orlando Sour"
        />
        <h3 class="text-xl font-bold font-bad-script">Orlando Sour</h3>
        <p class="text-sm font-poppins">
          Whiskey, lemon juice, orange juice, and sugar syrup. Shaken and served
          over ice.
        </p>
        <p class="text-lg font-bold mt-2">$10.00</p>
      </div>

      <div
        class="bg-gray-900 rounded-lg shadow-md p-6 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg text-white"
      >
        <img
          class="w-full h-48 object-cover mb-4 rounded"
          src="@/assets/menu-cocktails/moonlight.jpg"
          alt="Tequila Moonrise"
        />
        <h3 class="text-xl font-bold font-bad-script">Tequila Moonrise</h3>
        <p class="text-sm font-poppins">
          Tequila, grenadine, lime juice, and soda water. Served on the rocks.
        </p>
        <p class="text-lg font-bold mt-2">$11.00</p>
      </div>
      
    </div>
    <p class="flex justify-center text-sm text-white font-poppins mt-4 opacity-90">
        All customers ordering alcoholic beverages must be at least 21 years of
        age, in compliance with local legal regulations. Proof of age will be
        required. Let's all enjoy a safe and fun experience at Moonlight Coffee.
      </p>
  </section>
  <footer class="bg-amber-800 text-white p-4">
    <p class="text-center">Made with ❤️ by Moonlight Coffee</p>
    <p class="text-center">
      &copy; {{ new Date().getFullYear() }} Moonlight Coffee. All rights
      reserved.
    </p>
  </footer>
</template>
<script>
import video1 from "@/assets/menu-videos/meal.mp4";
import video2 from "@/assets/menu-videos/pouring-latte.mp4";
import video3 from "@/assets/menu-videos/tequila-moonrise.mp4";

export default {
  data() {
    return {
      slides: [
        {
          video: video1,
        },
        {
          video: video2,
        },
        {
          video: video3,
        },
      ],

      currentSlide: 0,
    };
  },
  mounted() {
    setInterval(() => {
      this.nextSlide();
    }, 7000); // Change slide every 14 seconds
  },

  methods: {
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    },
    previousSlide() {
      this.currentSlide =
        (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    },
  },
};
</script>
<style>
#espresso-menu {
  background-image: url("@/assets/assorted-several-coffee-cups.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-blend-mode: multiply;
}

#espresso-menu::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(
    34,
    16,
    0,
    0.5
  ); /* Replace with the RGB value of the orange color you want to use. */
}
</style>
