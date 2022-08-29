<template>
   <div class="container">
     <div v-if="users" class="prod">
      <p class="user-name">{{ users.full_name}}</p>
    <img :src="users.image" class="profile-image" />
      <div class="options">
        <div class="option"><i class="fa-solid fa-xmark"></i></div>
        <div class="option"><i class="fa-solid fa-message"></i></div>
        <div class="option"><i class="fa-solid fa-check"></i></div>
      </div>
    </div>
   </div>
</template>
<script>
export default {
   props: ["id"],
   computed: {
    users() {
        return this.$store.state.user;
    },
   },
   mounted() {
     this.$store.dispatch("getUser", this.$route.params.id);
   }
}
</script>
<style>
    .container{
        height: 90vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .prod{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: lightsalmon;
    width: 420px;
    border-radius: 10px;
    gap: 5px;
    padding: 10px;
    }
    .profile-image{
        height: 400px;
        width: 400px;
        border: none;
    }
    .user-name{
        font-size: 3rem;
        font-weight: bold;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .user-name:hover{
        background: salmon;
        cursor: pointer;
    }
    .options{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        height: 100px;
       
    }
    .option{
        display: flex;
        justify-content: center;
        align-items: center;
        background: salmon;
        color: white;
        border-radius: 50px;
        height: 100px;
        width: 100px;
    }
    i{
        font-size: 3rem;
    }
</style>