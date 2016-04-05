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
      if (this.model.get('status') === true) {
        logOutButtonView.render();
        const imageBackground = this.model.get('backgroundColor');
        document.querySelector('.container').style.backgroundImage =
        'url('+imageBackground+')';
      }
      else {
        logOutButtonView.render();
        document.querySelector('.container').style.backgroundImage =
        'url(../core/assets/banner-top.jpg)';
      }
    });
  },

		});
