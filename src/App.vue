<template>
  <nav><router-link to="/">Home</router-link></nav>
  <router-view />
</template>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
  overflow-x: hidden;
  font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue",
    Helvetica, Arial, "Lucida Grande", sans-serif;
  font-weight: 300;
}
input,
select,
textarea,
button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0; /* מבטל עיגול פינות */
  background: transparent; /* אם יש צבע רקע דיפולטי */
}

h1 {
  font-size: 1rem;
  font-weight: 400;
  text-transform: uppercase;
  color: #555;
  padding: 0.5rem;
}

ul {
  list-style: none;
}

.container {
  margin: 0 auto;
  padding: 0 5rem;
  max-width: 140rem;
}
.btn {
  background-color: inherit;
  border: none;
  outline: 1px solid #ccc;
  padding: 0.5rem 1.5rem;
  text-transform: uppercase;
  font-size: 1.2rem;
  color: #666;
  cursor: pointer;
}
</style>
