import { user } from '../User/userObj.js';
export const LogInView = Backbone.View.extend({
  events: {
    'click #SignIn_button ': 'logIn',
  },
  renderTemplate(selectorString, options) {
    const templateText = document.querySelector(selectorString).innerText;
    const compiled = _.template(templateText);
    if (options !== null) {
      return compiled(options);
    }
    return compiled();
  },
  template(val) {
    return this.renderTemplate('#template-logIn', val);
  },
  render() {
    this.$el.html(this.template());
    return this;
  },

  logIn() {
    this.model.logIn(this.model);
    this.model.set(user);
    this.model.triggerEventOnHeader();
    window.location.href = '#index';
  },
});
