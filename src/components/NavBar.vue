<template>
  <nav class="bg-black text-white font-bold p-4">
    <div class="container mx-auto flex items-center justify-between">
      <router-link to="/" class="text-2xl font-bold">
        <img :src="logo" alt="Moonlight Coffee logo" class="h-16 w-auto pl-2" />
      </router-link>

      <div class="space-x-12">
        <router-link to="/menu" class="menu-link hover:text-gray-500 text-xl">
          <div v-if="$route.path === '/menu'" class="slide-indicator"></div>
          MENU
        </router-link>
        <router-link
          to="/location"
          class="menu-link hover:text-gray-500 text-xl"
        >
          <div v-if="$route.path === '/location'" class="slide-indicator"></div>
          LOCATION
        </router-link>
        <router-link to="/about" class="menu-link hover:text-gray-500 text-xl">
          <div v-if="$route.path === '/about'" class="slide-indicator"></div>
          ABOUT US
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import logo from "@/assets/logo-mc-2.png";

export default {
  name: "NavBar",
  data() {
    return {
      logo,
    };
  },
};
</script>

<style scoped>
.menu-link {
  position: relative;
}

.slide-indicator {
  position: absolute;
  bottom: -2px;
  left: 0;
  height: 2px;
  background: white;
  width: 0;
  transition: width 0.3s ease;
}

.menu-link:hover .slide-indicator,
.router-link-exact-active .slide-indicator {
  width: 100%;
}
</style>
