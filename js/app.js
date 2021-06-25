// import { createStore } from 'framework7';

// // create store
// const store = createStore({
//   // start with the state (store data)
//   state: {
//     users: [],
//     loading: false,
//   },

//   // actions to operate with state and for async manipulations
//   actions: {
//     getUser({ state }) {
//       // fetch users from API
//       state.loading = true;
//       setTimeout(() => {
//         state.users = ['User 1','User 2','User 3','User 4','User 5'];
//         state.loading = false;
//       }, 3000);
//       // fetch('some-url')
//       //   .then((res) => res.json())
//       //   .then((users) => {
//       //     // assign new users to store state.users
//       //     state.users = users;
//       //   })
//     },
//     // ...
//   },

//   // getters to retreive the state
//   // getters: {
//   //   users({ state }) {
//   //     return state.users;
//   //   }
//   // }
//   getters: {
//     loading({ state }) {
//       return state.loading;
//     },
//     users({ state }) {
//       return state.users;
//     },
//   },

// })

// // export store
// export default store;




// Dom7
var $ = Dom7;

// Theme
var theme = 'md';
if (document.location.search.indexOf('theme=') >= 0) {
  theme = document.location.search.split('theme=')[1].split('&')[0];
}

// Init App
var app = new Framework7({
  id: 'io.framework7.umrohapp',
  root: '#app',
  theme: theme,
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
    };
  },
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  routes: routes,
  vi: {
    placementId: 'pltd4o7ibb9rc653x14',
  },
});


app.on('popupOpen', function () {
  console.log(this); // -> app instance
});
// Alert
$('.open-alert').on('click', function () {
  app.dialog.alert('Kamu harus pilih Levelnya!');
});
