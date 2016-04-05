import { SignUpView } from '../View/SignUpView.js'
const SignUpPageView = Backbone.View.extend({
  template(values) {
    const templateText = document.querySelector('#signup-page-template').innerText;
    const compiled = _.template(templateText);
    if (values !== null) {
      return compiled(values);
    }
    return compiled();
  },
  render() {
    debugger;
    this.$el.append(this.template(this.model));
    const signUpView = new SignUpView({
      el: document.getElementsByClassName('sign-up-div')[0],
    });
    signUpView.render();
    return this;
  },
});

export { SignUpPageView };
