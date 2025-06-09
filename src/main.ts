import { mount } from 'svelte'
import './app.css'
import App from './App.svelte'
import Poster from './Poster.svelte'

if (document.getElementById('extensions-css-loader-id')) {
  mount(App, {
    target: document.getElementById('extensions-css-loader-id')!,
  });
}

if (document.getElementById('hero-wrapper')) {
  mount(Poster, {
    target: document.getElementById('hero-wrapper')!,
  });
}