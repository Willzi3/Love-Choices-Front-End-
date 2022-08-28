<template>
  <!-- <router-link
    class="product_box"
    :to="{ name: 'ProductDetails', params: { id: Product.id } }"
  > -->
    <div class="card">
      <img class="product_img" :src="user.image" />
      <p class="product_title">{{ user.full_name }}</p>
       <p class="product_price">{{ user.description }}</p>
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
.product_title {
  font-family: "Source Sans Pro", sans-serif;
  color: var(--primary-text-colour);
}
.product_img {
  width: 200px;
  height: 200px;
  transition: 0.1s all ease-in-out;
  border-radius: 5px;
}
.product_box {
  width: 13rem;
  background: none;
  border: none;
}
.card{
  width: 200px;
  background: none;
  box-shadow: lightsalmon 4px 4px 4px 4px;
  border-radius: 10px;
}
.card-display {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  padding: 2.5rem;
}
.prods{
  display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
    align-content: center;
    margin-inline: 5%;
    background: white;
    padding: 10px;
    margin-bottom: 20px;
}
</style>