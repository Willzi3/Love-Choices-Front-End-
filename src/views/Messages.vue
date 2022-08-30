<template>
  <div class="container">
    <div class="inbox">
      <div class="inbox-title">
        <h1>Inbox:</h1>
      </div>
    <div v-if="users" class="prods">
  <userCard
   v-for="user in users" 
   :key="user.id" 
   :user="user"/>
  </div>
    </div>
    <div class="message-box">
      <div class="message">
        <input class="message-input-1" type="text" name="message" id="message" placeholder="Message:" />
      <input class="message-input-2" type="submit" value="Send" />
      </div>
    </div>
  </div>
</template>

<script>
  import userCard from "../components/userCard.vue";
export default {
  computed: {
    users() {
      return this.$store.state.users
    },
  },
  components: { userCard },
  mounted() {
    this.$store.dispatch("getUsers");
  }
}
</script>

<style>
  .container{
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
  .contacts{
    border: 1px solid black;
    height: 98%;
    width: 98%;
  }
  .inbox{
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid black;
  height: 500px;
  width: 500px;
  padding: 10px;
  gap: 10px;
  overflow: scroll;
  }
  .inbox-title{
     display: flex;
  justify-content: center;
    width: 98%;
    height: 50px;
    border: 1px solid black
  }
.message-box{
  border: 1px solid black;
  height: 500px;
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 10px;
}
.message{
  display: flex;
  gap: 10px;
 width: 100%;
}
.message-input-1{
  width: 80%;
  height: 2rem;
}
.message-input-2{
  width: 20%;
  height: 2rem;
}
.prods{
  display: flex;
  flex-direction: column;
   
  
}
</style>