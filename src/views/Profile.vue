<template>
<div class="profile-name" v-if="user">
<p>{{ user.full_name }}</p></div>
 <div class="container">
 <div class="row">
  <div class="col-1">
    <div class="navigation">
      <router-link to="/search">Search</router-link>
      <router-link to="/connections">Connections</router-link>
      <router-link to="/matches">Matches</router-link>
      <router-link to="/messages">Messages</router-link>
      <router-link to="/potential">Potential</router-link>
      <router-link to="/settings">Settings</router-link>
    </div>
  </div>
  <div class="col-2">
    <div class="about-me">
      
    </div>
   
  </div>
 </div>
 </div>
</template>

<script>
export default {
 computed: {
    user() {
      return this.$store.state.user
    },
  },

  mounted() {
    this.$store.dispatch("getUser");
  }
}
</script>

<style scoped>
.container{
  height: 89vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
.row{
  width: 80%;
  height: 90%;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
.col-1{
  width: 30%;
  height: 80%;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
}
.navigation{
   width: 90%;
  height: 92%;
  border: 1px solid black;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
.navigation a{
  border-radius: 6px;
  width: 90%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: salmon;
  text-decoration: none;
  color: white;
}
.col-2{
  width: 60%;
  height: 80%;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
.about-me{
  width: 90%;
  height: 90%;
  border: 1px solid black;
  border-radius: 6px;
}
.profile-name{
  height: 50px;
  width: 91%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 10px;
}
.profile-name p {
  color: salmon;
  font-weight: bold;
}
</style>