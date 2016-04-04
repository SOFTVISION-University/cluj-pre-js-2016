import { LogOutButtonView } from './logOutButtonView.js';

export const HeaderView = Backbone.View.extend({
  initialize() {
    this.logOutButtonView = new LogOutButtonView({
      model: this.model,
      el: document.getElementById('right'),
    });
  },
  render() {
    this.logOutButtonView.render();
    this.listenTo(this.model, 'triggerHead',
    function(){
      const imageBackground = this.model.get('backgroundColor');
      document.querySelector('.container').style.backgroundImage =
      'url('+imageBackground+')'; });
  },

		});
