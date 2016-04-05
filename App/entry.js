import { AppRouter } from './Router/Router.js';
window.app = {};
document.addEventListener('DOMContentLoaded', () => {
  const appRouter = new AppRouter();
  Backbone.history.start();
  window.app = appRouter;
});
