import { LogOutButtonView } from './logOutButtonView.js';

export const HeaderView = Backbone.View.extend({

  render() {
    const logOutButtonView = new LogOutButtonView({
      model: this.model,
      el: document.querySelector('#right'),
    });
    logOutButtonView.render();
    this.listenTo(this.model, 'triggerHead',
    function () {
      logOutButtonView.render();
    });
  },

		});
