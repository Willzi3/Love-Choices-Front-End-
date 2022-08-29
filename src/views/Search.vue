<template>
 <div class="container">
    <form class="filters">
    <input type="text" v-model="search" placeholder="search..."  class="inp" />
    {{ search }}
</form>
 <div v-if="users" class="prods">
  <Card
   v-for="user of filteredUsers" 
   :key="user.id" 
   :user="user"/>
  </div>
 </div>
</template>
<script>
import Card from "../components/Card.vue";
export default {
  data() {
    return{
      search: "",
      price: "All",
      catergory: "All"
      // filteredProducts: [...this.Products]
    }
  },
  computed: {
    users() {
      return this.$store.state.users
    },
  filteredUsers() {
    return this.$store.state.users?.filter((user) => {
      let isMatch = true;
      if (!user.full_name.toLowerCase().includes(this.search.toLowerCase())) isMatch = false
      if(this.catergory !== "All" && user.catergory !== this.catergory)
      isMatch = false;
      return isMatch
      // return Product.name.toLowerCase().includes(this.search.toLowerCase())
    });
  },
  },
  methods: {
sort() {
  this.$store.commit("sortByPrice");
}
  },
  components: { Card },
  mounted() {
    this.$store.dispatch("getUsers");
  }
};
</script>
<style scoped>
.container{
    margin: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.card-display {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  padding: 2.5rem;
}
a {
  text-decoration: none;
  color: black;
}
.card{
  width: 200px;
}
h1 {
  font-size: 1.5rem;
  font-weight: bold;
  z-index: 10;
}
.filters{
  margin-inline: 20%;
  height: 100px;
  width: 300px;
  display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
    margin-bottom: -20px;
    border-radius: 10px;
    background: lightsalmon;
}
.inp {
  border: none;
    border-radius: 5px;
    height: 30px
}
</style>