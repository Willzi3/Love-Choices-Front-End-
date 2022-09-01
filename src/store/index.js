import { createStore } from 'vuex'
import router from '../router/index'
export default createStore({
  state: {
    user: null,
    users: null,
    token: null,
    post: null,
    posts: null,
  },
  mutations: {
    setUser: (state, user) => {
      state.user = user;
    },
    setUsers: (state, users) => {
      state.users = users;
    },
    setToken: (state, token) => {
      state.token = token;
    },
    setPost: (state, post) => {
      state.post = post;
    },
    setPosts: (state, posts) => {
      state.posts = posts;
    },
  },
  actions: {
    login: async (context, payload) => {
      let res = await fetch("ttps://compify-backend.herokuapp.com/users/login", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: 
        JSON.stringify({
          email: payload.email,
          password: payload.password,
        }),
      });

      let data = await res.json()
      console.log(data)

      if(data.token){
        context.commit('setToken', data.token)

        // Verify token
        // 
        fetch('ttps://compify-backend.herokuapp.com/users/users/verify', {
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": data.token
          }
        }).then((res) => res.json()).then((data) => {
          context.commit('setUser', data.user)
          console.log(data.user)
          router.push('/profile', alert("Successfully Logged In:"))
        })
      } 
      else {
        alert(data)
      }
    },
    register: async (context, payload) => {
      fetch("ttps://compify-backend.herokuapp.com/users/register", {
        method: 'POST',
        body: JSON.stringify({
            full_name: payload.full_name,
            email: payload.email,
            password: payload.password,
            user_type: "user",
            image: payload.image
        }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
      router.push('/', alert("successfully registered"))

        },
    getUsers: async (context) => {
      fetch("ttps://compify-backend.herokuapp.com/users")
        .then((response) => response.json())
        .then((json) => context.commit("setUsers", json));
    },
    getUser: async (context, id) => {
      fetch("ttps://compify-backend.herokuapp.com/users/" +id)
        .then((response) => response.json())
        .then((user) => context.commit("setUser", user[0]));
    },
    //add Post
    addPost: async (context, post) => {
      fetch("ttps://compify-backend.herokuapp.com/users/posts", {
        method: "POST",
        body: JSON.stringify(post),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((post) => context.dispatch("getPost", post));
    },
  }
})
