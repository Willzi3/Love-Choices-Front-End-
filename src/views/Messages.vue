<template>
  <div class="container">
    <div class="message-box">
      <div class="message">
        <input class="message-input-1" type="text" name="message" id="message" placeholder="Message:" />
      <input class="message-input-2" type="submit" value="Send" />
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .container{
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
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
</style>