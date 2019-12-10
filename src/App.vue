<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
$bkg: rgb(33, 60, 45);
@font-face {
  font-family: poppins;
  src: url(./assets/Poppins/Poppins-Black.ttf);
  font-weight: 900;
}
@font-face {
  font-family: poppins;
  src: url(./assets/Poppins/Poppins-ExtraBold.ttf);
  font-weight: bolder;
  font-weight: 700;
}

@font-face {
  font-family: poppins;
  src: url(./assets/Poppins/Poppins-Bold.ttf);
  font-weight: bold;
  font-weight: 600;
}

@font-face {
  font-family: poppins;
  src: url(./assets/Poppins/Poppins-Medium.ttf);
  font-weight: 500;
}

@font-face {
  font-family: poppins;
  src: url(./assets/Poppins/Poppins-Light.ttf);
  font-weight: 300;
}

@font-face {
  font-family: poppins;
  src: url(./assets/Poppins/Poppins-ExtraLight.ttf);
  font-weight: 100;
}

@font-face {
  font-family: poppins;
  src: url(./assets/Poppins/Poppins-Regular.ttf);
  font-weight: 400;
}

* {
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
  color: white;
}

body, html {
  background-color: $bkg;
  font-family: poppins;
  // font-weight: 900;
}
</style>
