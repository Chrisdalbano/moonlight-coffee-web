<template>
  <main class="h-[50vh] bg-black flex items-center justify-start relative">
    <div
      :style="{
        backgroundImage: `url(${slides[currentSlide].image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }"
      class="w-full h-full object-cover"
      :key="slides[currentSlide].image"
    ></div>

    <div class="absolute inset-0 flex items-center justify-center">
      <div class="text-white p-4 rounded ml-10">
        <h2 class="text-8xl font-bad-script mb-6 font-bold text-shadow">
          The Location
        </h2>
        <p class="text-2xl mb-4 text-shadow">Orlando, FL</p>
      </div>
    </div>
  </main>
  
  <section class="bg-black text-white py-8 px-4 mt-8 font-poppins">
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
      <!-- Left column -->
      <div>
        <h2 class="text-4xl font-bold mb-8 font-bad-script">Contact Information</h2>
        <p class="mb-2"><strong>Address:</strong> 23 Moon Street, Orlando, Fl, 328123</p>
        <p class="mb-2"><strong>Phone:</strong> (407) 456-7890</p>
        <p class="mb-2"><strong>Email:</strong> info@moonlightcoffee.com</p>
        <p class="mb-2"><strong>Hours of Operation:</strong> Mon-Fri: 8am - 10pm, Sat-Sun: 9am - 11pm</p>
      </div>
      <!-- Right column -->
      <div class="flex flex-col items-center justify-center">
        <router-link to="/menu" class="mb-4 border-2 border-white bg-transparent text-lg text-white hover:bg-white hover:text-black py-2 px-4 rounded font-bad-script font-bold">Show Menu</router-link>
        <router-link to="/about-us" class="mb-4 border-2 border-white bg-transparent text-lg text-white hover:bg-white hover:text-black py-2 px-4 rounded font-bad-script font-bold">About us</router-link>
      </div>
    </div>
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
export default {
  data() {
    return {
      slides: [
        {
          image: require("@/assets/location2.jpg"),
        },
        {
          image: require("@/assets/onsite-location2.jpg"),
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
