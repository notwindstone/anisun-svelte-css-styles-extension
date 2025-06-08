import { mount } from 'svelte'
import './app.css'
import App from './App.svelte'

if (document.getElementById('extensions-css-loader-id')) {
  mount(App, {
    target: document.getElementById('extensions-css-loader-id')!,
  });
}