<template>
  <nav class="nav">
    <router-link class="logo boldonse-regular" to="/">mycloset</router-link>
  </nav>
  <router-view />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Boldonse&display=swap");
:root {
  --shadow-sm: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1),
    0 4px 6px -4px rgb(0 0 0 / 0.1);
}
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
.boldonse-regular {
  font-family: "Boldonse", system-ui;
  font-weight: 400;
  font-style: normal;
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
nav.nav {
  padding: 2rem 5rem;
}
.logo {
  font-size: 2rem;
  text-decoration: none;
  color: black;
  text-transform: uppercase;
  font-weight: 600;
}
</style>
