<template>
    <!-- <router-link
      class="product_box"
      :to="{ name: 'userDetails', params: { id: user.user_id } }"
    > -->
      <div class="card">
        <img class="user_img" :src="user.image" />
        <p class="user_name">{{ user.full_name }}</p>
      </div>
    <!-- </router-link> -->
  </template>
  <script>
  export default {
    props: ["user"],
  };
  </script>
  <style>
  :root {
    --secondary-text-colour: #0b1108;
    --primary-text-colour: #c6c0b7;
    --hover-highlight: crimson;
    --main-font: "Source Sans Pro", sans-serif;
  }
  .card{
    display: flex;
    border: 1px solid black;
    width: 96%;
  }
  .user_img{
    width: 4rem;
    height: 4rem;
  }
  </style>