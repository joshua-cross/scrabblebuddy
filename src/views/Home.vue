<template>
  <div>
    <app-side-menu></app-side-menu>
    <app-header></app-header>
    <app-animation-hero></app-animation-hero>
    <app-scrabble-form></app-scrabble-form>
  </div>
</template>

<script>
// @ is an alias to /src
import ScrabbleForm from '../components/ScrabbleForm/ScrabbleForm';
import AnimationHero from '../components/Animated/AnimationHero';
import SideMenu from '../components/Menu/SideMenu';
import Header from '../components/Menu/Header';
export default {
  name: "home",
  components: {
    appScrabbleForm: ScrabbleForm,
    appAnimationHero: AnimationHero,
    appSideMenu: SideMenu,
    appHeader: Header
  }
};
</script>
