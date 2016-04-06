import { SignUpTopView } from '../app_views/sign-up-top-view.js';
import { SignUpContentView } from '../app_views/sign-up-content-view.js';
import { SignUpFooterView } from '../app_views/sign-up-footer-view.js';

const SignUpPageView = Backbone.View.extend({
  render() {
    const template = _.template($('#template-SignUpPageView').html(), {});
    this.$el.html(template);
    const signUpTopView = new SignUpTopView({ el: $('#sign-up-top') });
    signUpTopView.render();
    const signUpContentView = new SignUpContentView({ el: $('#sign-up-content') });
    signUpContentView.render();
  },
});

export { SignUpPageView };
