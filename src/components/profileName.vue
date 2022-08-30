<template>
    <!-- <router-link
      class="product_box"
      :to="{ name: 'userDetails', params: { id: user.user_id } }"
    > -->
      <div class="card">
        <img class="product_img" :src="user.image" />
        <p class="product_title">{{ user.full_name }}</p>
      </div>
    <!-- </router-link> -->
  </template>
  <script>
  export default {
    props: ["user"],
  };
  </script>
  <style scoped>
  :root {
    --secondary-text-colour: #0b1108;
    --primary-text-colour: #c6c0b7;
    --hover-highlight: crimson;
    --main-font: "Source Sans Pro", sans-serif;
  }
 
  </style>