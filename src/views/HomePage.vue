<template>
  <div class="flex flex-col">
    <main class="h-[60vh] bg-gray-100 flex items-center justify-start relative">
      <div
        v-if="slides[currentSlide].image"
        :style="{
          backgroundImage: `url(${slides[currentSlide].image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }"
        class="w-full h-full object-cover"
      ></div>
      <video v-else autoplay muted loop class="w-full h-full object-cover">
        <source :src="slides[currentSlide].video" type="video/mp4" />
      </video>

      <div class="absolute inset-0 flex items-center">
        <div
          class="text-left bg-black bg-opacity-0 text-white p-4 rounded ml-10"
        >
          <h2 class="text-6xl font-bad-script mb-4 font-bold text-shadow">
            {{ slides[currentSlide].title }}
          </h2>
          <p class="text-2xl mb-4 text-shadow">
            {{ slides[currentSlide].subtitle }}
          </p>
          <button
            class="bg-amber-600 hover:bg-amber-800 text-white font-bold py-2 px-4 rounded"
          >
            Discover our shop
          </button>
        </div>
      </div>

      <div class="absolute top-1/2 left-4">
        <button
          class="bg-black bg-opacity-10 text-white py-2 px-3 rounded arrow-button"
          @click="previousSlide"
        >
          &#8249;
        </button>
      </div>
      <div class="absolute top-1/2 right-4">
        <button
          class="bg-white bg-opacity-10 text-white py-2 px-3 rounded arrow-button"
          @click="nextSlide"
        >
          &#8250;
        </button>
      </div>
    </main>

    <section class="p-6 ml-10 mr-10">
      <div class="moonlight-section">
        <img
          class="moonlight-image bg-black"
          src="@/assets/moonlight-image.jpg"
          alt="Picture showcasing the moonlight"
        />

        <div class="moonlight-text pt-2 m-4">
          <h2 class="text-4xl font-bad-script font-bold mb-8">
            What's up with the Moonlight?
          </h2>
          <p class="text-lg">
            We stand as an oasis of tranquility in the heart of the night. An
            uncommon delight, a beacon for the nocturnal and the sleepless,
            where the enchanting aroma of high quality roasted coffee beans
            mingles with the crisp, cool night air. Moonlight Coffee believes
            that any hour is the hour of good coffee. Here, under the silvery
            shimmer of starlight, coffee is not simply a beverage, but a
            companion to the whispers of the night.
          </p>
          <button
            class="mt-8 border-2 border-black bg-transparent text-lg text-black hover:bg-black hover:text-white py-2 px-4 rounded font-bad-script font-bold"
          >
            Learn more...
          </button>
        </div>
      </div>
    </section>

    <section class="p-8 bg-black opacity-70 flex flex-col items-center">
      <p class="text-2xl text-white text-center italic max-w-lg mx-auto">
        Moonlight Coffee specializes in producing the freshest coffee from small
        and dedicated farms providing the maximum usage of coffee equipment with
        the highest standard for quality in the business for an A1 experience.
      </p>
      <img
        class="p-4 w-1/6 h-auto"
        src="@/assets/sky-vector.png"
        alt="Picture showcasing the moonlight"
      />
    </section>

    <section class="p-6 bg-black opacity-90">
      <h2
        class="text-4xl text-white font-bad-script font-bold mb-8 flex justify-center"
      >
        The Location
      </h2>
      <!-- Include your featured products here -->
      <p class="mb-4 text-lg text-white flex justify-center">
        Located in Orlando, Florida, a couple of walking distance from the Lake
        Eola, Moonlight Coffee serves as a cozy and social spot for the
        community looking for any refreshments or pick-me-ups.
      </p>

      <div class="flex justify-center">
        <img
          class="location-image mb-4"
          src="@/assets/onsite-location.jpg"
          alt="Picture showcasing the look outside the store"
        />
      </div>
      <div class="flex justify-center">
        <button
          class="mb-4 border-2 border-white bg-transparent text-lg text-white hover:bg-white hover:text-black py-2 px-4 rounded font-bad-script font-bold"
        >
          Get directions
        </button>
      </div>
    </section>

    <section class="p-6">
      <h2 class="flex justify-center text-4xl font-bad-script font-bold mb-8">
        The Coffee of Moonlight
      </h2>
      <p class="text-lg mb-8 flex text-center">
        At Moonlight Coffee, we are proud to present our selection of premier
        coffees sourced from where the Moon meets the Sun at the exquisite
        landscapes of Colombia and Ethiopia. Our coffee beans are carefully
        selected and prepared to offer a variety of roasts - Full Moon, First
        Quarter, Dark Side, and our house blend Moon Dust. Each phase of roast
        type offers a distinct flavor profile, from the bright and fruity notes
        of our Full Moon to the rich and mysterious characteristics of our Dark
        Side with sofisticated flavors. What is your favorite phase?
      </p>
      <div class="container mx-auto grid grid-cols-4 gap-2">
        <div class="coffee-item">
          <img src="@/assets/fullmoon-roast.png" alt="Light Roast" />
          <h3 class="text-2xl mb-2 font-bold">Full Moon</h3>
        </div>
        <div class="coffee-item">
          <img src="@/assets/firstquarter-roast.png" alt="First Quarter" />
          <h3 class="text-2xl mb-2 font-bold">First Quarter</h3>
        </div>
        <div class="coffee-item">
          <img src="@/assets/darkside-roast.png" alt="Darkside of the Moon" />
          <h3 class="text-2xl mb-2 font-bold">Dark Side</h3>
        </div>
        <div class="coffee-item">
          <img src="@/assets/moondust-roast.png" alt="Moondust Blend" />
          <h3 class="text-2xl mb-2 font-bold">Moon Dust Blend</h3>
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
  </div>
</template>

<script>
// import image1 from "@/assets/image1.jpg";
// import image2 from "@/assets/image2.jpg";
// import image3 from "@/assets/image3.jpg";
import video1 from "@/assets/video1.mp4";

export default {
  name: "HomePage",
  data() {
    return {
      slides: [
        {
          video: video1,
          title: "CLASS",
          subtitle: "The unique and right attitude for Espresso.",
        },
        {
          image: require("@/assets/image1.jpg") /* Change this */,
          title: "EXPERIENCE",
          subtitle: "The magic of Espresso after hours.",
        },
        {
          image: require("@/assets/image2.jpg") /* Change this */,
          title: "TASTE",
          subtitle: "The delightful signature drinks and cocktails.",
        },
        {
          image: require("@/assets/image3.jpg") /* Change this */,
          title: "DISCOVER",
          subtitle: "A shop with personality and charm.",
        },
      ],
      currentSlide: 0,
    };
  },
  mounted() {
    setInterval(() => {
      this.nextSlide();
    }, 14000); // Change slide every 14 seconds
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
.coffee-item img {
  width: 100%;
  height: auto;
  max-width: 200px;
  object-fit: cover;
}

.text-shadow {
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.7);
}

.location-image {
  max-width: 70%;
  height: auto;
}

.moonlight-section {
  display: flex;
  align-items: flex-start; /* changed to flex-start */
}

.moonlight-image {
  width: 100%;
  max-height: 300px; /* limit the height of the image */
  flex: 1 1 25%; /* takes up to 40% of width */
}

.moonlight-text {
  flex: 1 1 60%; /* takes up to 60% of width */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

button {
  align-self: flex-start; /* Aligns button to start */
}

@media (max-width: 640px) {
  .moonlight-section {
    flex-direction: column;
  }

  .moonlight-image {
    order: -1;
    max-width: 100%;
    height: auto;
    max-height: unset; /* remove the height limit for smaller screens */
  }

  .moonlight-text,
  .moonlight-image {
    flex: 1 1 auto; /* Full width on small screens */
  }
}

.arrow-button {
  font-size: 2rem; /* You can adjust this value for your needs */
}
</style>
