<template>
  <nav class="bg-black text-white font-bold p-4">
    <div class="container mx-auto flex items-center justify-between">
      <router-link to="/" class="text-2xl font-bold">
        <img :src="logo" alt="Moonlight Coffee logo" class="h-16 w-auto pl-2" />
      </router-link>

      <div class="space-x-12">
        <router-link to="/menu" class="hover:text-gray-500 text-xl">MENU</router-link>
        <router-link to="/about" class="hover:text-gray-500 text-xl"
          >ABOUT US</router-link
        >
        <router-link to="/order-online" class="hover:text-gray-500 text-xl"
          >ORDER ONLINE</router-link
        >
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
