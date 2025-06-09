import { mount } from 'svelte'
import './app.css'
import App from './App.svelte'
import Poster from './Poster.svelte'

if (document.getElementById('extensions-css-loader-id')) {
  mount(App, {
    target: document.getElementById('extensions-css-loader-id')!,
  });
}

if (document.getElementsByClassName('hero__wrapper')?.[0]) {
  mount(Poster, {
    target: document.getElementsByClassName('hero__wrapper')[0]!,
  });
}