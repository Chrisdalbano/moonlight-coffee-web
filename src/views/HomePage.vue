<template>
  <div class="flex flex-col">
    <div
      id="loader"
      v-show="showLoader"
      :class="{ 'loader-hidden': isHidden }"
      @dblclick="skipLoading"
    >
      <div id="welcomeMessage">
        <div id="welcomeTo" class="font-bad-script">WELCOME TO</div>
        <div id="moonlightCoffee" class="font-poppins text-yellow-300">
          MOONLIGHT COFFEE
        </div>
      </div>
    </div>
    <main class="h-[60vh] bg-black flex items-center justify-start relative">
      <transition name="fade" mode="out-in">
        <div
          v-if="slides[currentSlide].image" rel="preload"
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
          preload="auto"
          autoplay
          muted
          loop
          class="w-full h-full object-cover"
          :key="slides[currentSlide].video"
        >
          <source :src="slides[currentSlide].video" type="video/mp4" />
        </video>
      </transition>

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
            v-scroll-to="'#moon-section'"
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
          <router-link
            to="/about"
            class="inline-block self-start mt-8 border-2 border-black bg-transparent text-lg text-black hover:bg-black hover:text-white py-2 px-4 rounded font-bad-script font-bold"
          >
            Learn more...
          </router-link>
        </div>
      </div>
    </section>

    <section
      class="p-8 bg-black opacity-70 flex flex-col items-center"
      id="moon-section"
    >
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
      <p class="mb-4 text-lg text-white flex justify-center font-poppins">
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
        <router-link
          to="/location"
          class="mb-4 border-2 border-white bg-transparent text-lg text-white hover:bg-white hover:text-black py-2 px-4 rounded font-bad-script font-bold"
          >Get directions</router-link
        >
      </div>
    </section>

    <section class="p-6">
      <h2 class="flex justify-center text-4xl font-bad-script font-bold mb-8">
        The Coffee of Moonlight
      </h2>
      <p class="text-lg mb-8 flex text-center font-poppins">
        At Moonlight Coffee, we are proud to present our selection of premier
        coffees sourced from where the Moon meets the Sun at the exquisite
        landscapes of Colombia and Ethiopia. Our coffee beans are carefully
        selected and prepared to offer a variety of roasts - Full Moon, First
        Quarter, Dark Side, and our house blend Moon Dust. Each phase of roast
        type offers a distinct flavor profile, from the bright and fruity notes
        of our Full Moon to the rich and mysterious characteristics of our Dark
        Side with sofisticated flavors. What is your favorite phase?
      </p>
      <div class="container mx-auto grid grid-cols-4 gap-2 font-bad-script">
        <div
          class="coffee-item"
          @mousedown="dragStart"
          @mousemove="drag"
          @mouseup="dragEnd"
        >
          <img src="@/assets/fullmoon-roast.png" alt="Light Roast" />
          <h3 class="text-2xl mb-2 font-bold">Full Moon</h3>
        </div>
        <div
          class="coffee-item"
          @mousedown="dragStart"
          @mousemove="drag"
          @mouseup="dragEnd"
        >
          <img src="@/assets/firstquarter-roast.png" alt="First Quarter" />
          <h3 class="text-2xl mb-2 font-bold">First Quarter</h3>
        </div>
        <div
          class="coffee-item"
          @mousedown="dragStart"
          @mousemove="drag"
          @mouseup="dragEnd"
        >
          <img src="@/assets/darkside-roast.png" alt="Darkside of the Moon" />
          <h3 class="text-2xl mb-2 font-bold">Dark Side</h3>
        </div>
        <div
          class="coffee-item"
          @mousedown="dragStart"
          @mousemove="drag"
          @mouseup="dragEnd"
        >
          <img src="@/assets/moondust-roast.png" alt="Moondust Blend" />
          <h3 class="text-2xl mb-2 font-bold">Moon Dust Blend</h3>
        </div>
      </div>
    </section>

    <section id="menu-section" class="p-6 bg-gray-500">
      <div class="max-w-md mx-auto">
        <h2
          class="text-4xl text-white font-bold mb-8 flex justify-center font-bad-script"
        >
          The Menu
        </h2>
        <div class="mb-8">
          <h3 class="text-2xl text-white font-bold mb-4">Hot Coffees</h3>
          <ul class="menu-items">
            <li class="menu-item flex justify-between items-center mb-2">
              <span class="item-name text-white">Doppio Espresso</span>
              <span class="item-price text-yellow-400">$2.75</span>
            </li>
            <li class="menu-item flex justify-between items-center mb-2">
              <span class="item-name text-white">Americano</span>
              <span class="item-price text-yellow-400">$2.75</span>
            </li>
            <li class="menu-item flex justify-between items-center mb-2">
              <span class="item-name text-white">Cappuccino</span>
              <span class="item-price text-yellow-400">$3.50</span>
            </li>
            <li class="menu-item flex justify-between items-center mb-2">
              <span class="item-name text-white">Cafe Latte</span>
              <span class="item-price text-yellow-400">$4.00</span>
            </li>
            <li class="menu-item flex justify-between items-center">
              <span class="item-name text-white">Espresso Macchiato</span>
              <span class="item-price text-yellow-400">$3.00</span>
            </li>
          </ul>
        </div>
        <div class="mb-8">
          <h3 class="text-2xl text-white font-bold mb-4">Iced Coffees</h3>
          <ul class="menu-items">
            <li class="menu-item flex justify-between items-center mb-2">
              <span class="item-name text-white">Iced Latte</span>
              <span class="item-price text-yellow-400">$4.50</span>
            </li>
            <li class="menu-item flex justify-between items-center mb-2">
              <span class="item-name text-white">Iced Americano</span>
              <span class="item-price text-yellow-400">$3.50</span>
            </li>
            <li class="menu-item flex justify-between items-center mb-2">
              <span class="item-name text-white">Cold Brew</span>
              <span class="item-price text-yellow-400">$4.50</span>
            </li>
            <li class="menu-item flex justify-between items-center">
              <span class="item-name text-white">Mocha Frappe</span>
              <span class="item-price text-yellow-400">$5.00</span>
            </li>
          </ul>
        </div>
        <div class="mb-8">
          <h3 class="text-2xl text-white font-bold mb-4">Signature Bites</h3>
          <ul class="menu-items">
            <li class="menu-item flex justify-between items-center mb-2">
              <span class="item-name text-white">Dos Medialunas</span>
              <span class="item-price text-yellow-400">$7.50</span>
            </li>
            <li class="menu-item flex justify-between items-center mb-2">
              <span class="item-name text-white">Berriest Honey Eclairs</span>
              <span class="item-price text-yellow-400">$6.50</span>
            </li>
            <li class="menu-item flex justify-between items-center mb-2">
              <span class="item-name text-white">Avocado Toast</span>
              <span class="item-price text-yellow-400">$6.50</span>
            </li>
            <li class="menu-item flex justify-between items-center">
              <span class="item-name text-white">Moonlight Breakfast</span>
              <span class="item-price text-yellow-400">$9.00</span>
            </li>
          </ul>
        </div>
        <div class="mb-8">
          <h3 class="text-2xl text-white font-bold mb-4">
            Signature Cocktails
          </h3>
          <ul class="menu-items">
            <li class="menu-item flex justify-between items-center mb-2">
              <span class="item-name text-white">Espresso Martini</span>
              <span class="item-price text-yellow-400">$11.00</span>
            </li>
            <li class="menu-item flex justify-between items-center mb-2">
              <span class="item-name text-white">Orlando Sour</span>
              <span class="item-price text-yellow-400">$10.00</span>
            </li>
            <li class="menu-item flex justify-between items-center">
              <span class="item-name text-white">Tequila Moonrise</span>
              <span class="item-price text-yellow-400">$11.00</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="flex justify-center pt-4">
        <router-link
          to="/menu"
          class="mb-4 border-2 border-white bg-transparent text-lg text-white hover:bg-white hover:text-black py-2 px-4 rounded font-bad-script font-bold"
        >
          Dive into the menu
        </router-link>
      </div>
    </section>
    <section class="p-6 bg-gray-100">
      <div class="max-w-md mx-auto">
        <h2
          class="text-4xl text-black font-bold mb-6 flex justify-center font-bad-script"
        >
          What They Say
        </h2>

        <transition name="slide-fade" mode="out-in">
          <div
            v-if="currentReview"
            :key="currentReviewIndex"
            class="review-content tracking-wide"
          >
            <p class="text-black text-lg mb-4 font-poppins">
              {{ currentReview.content }}
            </p>
            <p class="text-black font-poppins">— {{ currentReview.author }}</p>
          </div>
        </transition>

        <div class="controls">
          <button class="control-arrow" @click="previousReview">&#8249;</button>
          <button class="control-arrow" @click="nextReview">&#8250;</button>
        </div>
      </div>
    </section>
  </div>
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

<script>
import video1 from "@/assets/video1.mp4";
import anime from "animejs";

export default {
  name: "HomePage",
  data() {
    return {
      showLoader: false,
      isLoading: true,
      isHidden: false,
      slides: [
        {
          video: video1,
          title: "CLASS",
          subtitle: "The unique and right attitude for Espresso.",
        },
        {
          image: require("@/assets/image1.jpg"),
          title: "EXPERIENCE",
          subtitle: "The magic of Espresso after hours.",
        },
        {
          image: require("@/assets/image2.jpg"),
          title: "TASTE",
          subtitle: "The delightful signature drinks and cocktails.",
        },
        {
          image: require("@/assets/image3.jpg"),
          title: "DISCOVER",
          subtitle: "A shop with personality and charm.",
        },
      ],
      reviews: [
        {
          content:
            "Amazing coffee and cozy atmosphere. I always come here for my morning fix!",
          author: "J S",
        },
        {
          content:
            "The best cappuccino I've ever had. The baristas here are true coffee artisans.",
          author: "E J",
        },
        {
          content:
            "Moonlight Coffee never disappoints. Their pastries are divine, and the staff is friendly.",
          author: "M D",
        },
        {
          content:
            "The espresso martinis are simply heavenly. A must-try for coffee and cocktail lovers!",
          author: "S A",
        },
      ],
      currentSlide: 0,
      currentReviewIndex: 0, // For reviews
    };
  },
  mounted() {
    this.checkFirstVisit();
    setTimeout(() => {
      this.showLoader = false;
    }, 7000);
    setInterval(() => {
      this.nextSlide();
    }, 14000); // Change slide every 14 seconds

    // Make sure all the elements exist
    if (
      document.getElementById("loader") &&
      document.getElementById("welcomeTo") &&
      document.getElementById("moonlightCoffee")
    ) {
      const loader = anime.timeline({
        complete: () => {
          this.isLoading = false; // Change data property when the animation completes
        },
      });

      loader
        .add(
          {
            targets: "#welcomeTo",
            translateY: [-50, 0],
            opacity: [0, 1],
            duration: 500,
            easing: "easeOutExpo",
          },
          0
        ) // Starts at the beginning of the timeline
        .add(
          {
            targets: "#moonlightCoffee",
            translateY: [50, 0], // Change as needed
            opacity: [0, 1],
            duration: 500, // adjust as needed
            easing: "easeOutExpo",
          },
          0
        ) // Starts at the beginning of the timeline
        .add(
          {
            targets: "#welcomeTo",
            translateY: [0, -50], // Change as needed
            opacity: [1, 0],
            duration: 1500, // adjust as needed
            easing: "easeInExpo",
          },
          "+=1000"
        ) // Starts 1000ms after the beginning of the timeline
        .add(
          {
            targets: "#moonlightCoffee",
            translateY: [0, 50], // Change as needed
            opacity: [1, 0],
            duration: 1500, // adjust as needed
            easing: "easeInExpo",
          },
          "+=1000"
        ) // Starts 1000ms after the beginning of the timeline
        .add({
          targets: "#loader",
          opacity: [1, 0],
          duration: 1500, // adjust as needed
          easing: "easeInOutQuad",
        })
        .add({
          targets: "#loader",
          opacity: [1, 0],
          duration: 1500, // adjust as needed
          easing: "easeInOutQuad",
          complete: (animation) => {
            // wait for the transition to end before setting display: none
            animation.animatables[0].target.addEventListener(
              "transitionend",
              () => {
                this.isHidden = true;
              },
              { once: true }
            );
          },
        });
    }
  },
  computed: {
    currentReview() {
      return this.reviews.length > this.currentReviewIndex
        ? this.reviews[this.currentReviewIndex]
        : null;
    },
  },
  methods: {
    checkFirstVisit() {
      if (localStorage.getItem("visited") === null) {
        this.showLoader = true;
        localStorage.setItem("visited", true);
      }
    },
    skipLoading() {
      this.showLoader = false;
    },
    dragStart(event) {
      this.dragging = true;
      anime({
        targets: event.target,
        scale: 1.2,
        duration: 200,
      });
    },
    drag(event) {
      if (!this.dragging) return;
      anime({
        targets: event.target,
        left: `${event.pageX}px`,
        top: `${event.pageY}px`,
        duration: 0,
      });
    },
    dragEnd(event) {
      this.dragging = false;
      anime({
        targets: event.target,
        scale: 1.0,
        duration: 200,
      });
    },
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    },
    previousSlide() {
      this.currentSlide =
        (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    },
    nextReview() {
      this.currentReviewIndex =
        (this.currentReviewIndex + 1) % this.reviews.length;
    },
    previousReview() {
      this.currentReviewIndex =
        (this.currentReviewIndex - 1 + this.reviews.length) %
        this.reviews.length;
    },
    watch: {
  showLoader: {
    handler: function (val) {
      if (val) {
        // add your animation here
      }
    },
    immediate: true,
  },
  isHidden: {
    handler: function (val) {
      if (val) {
        // add your animation here
      }
    },
    immediate: true,
  },
}
  },
};
</script>
<style scoped>
#menu-section {
  background-image: url("@/assets/chalkboard-texture.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-blend-mode: multiply;
}

.slide-fade-enter-active {
  transition: all 0.4s ease;
}
.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(25px);
  opacity: 0;
}
.controls {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.control-arrow {
  background-color: transparent;
  border: none;
  color: rgb(26, 26, 26);
  font-size: 2rem;
  cursor: pointer;
  margin: 0 10px;
}

.control-arrow:hover {
  opacity: 0.8;
}
@keyframes scaleInOut {
  0% {
    transform: scale(1);
    opacity: 0.6;
  }

  50% {
    transform: scale(0.97);
    opacity: 0.8;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.fade-enter-active,
.fade-leave-active {
  animation: scaleInOut 0.5s ease-in-out forwards;
}
.fade-enter,
.fade-leave-to {
  opacity: 1;
  transform: scale(0.9);
}
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

.arrow-button {
  font-size: 2rem; /* You can adjust this value for your needs */
}
#loader {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: black;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
}

#welcomeMessage {
  text-align: center;
  color: white;
  font-size: 6em;
}

#welcomeTo,
#moonlightCoffee {
  opacity: 0;
  transition: all 0.3s ease;
}

.loader-hidden {
  display: none;
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

  #welcomeMessage {
    font-size: 4em;
  }
}
</style>
