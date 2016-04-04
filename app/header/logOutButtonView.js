
import { user } from '../User/userModel.js';

export const LogOutButtonView = Backbone.View.extend({
  events: {
    'click #logOut ': 'logOutFunction',
  },
  renderTemplate(selectorString, options) {
    const templateText = document.querySelector(selectorString).innerText;
    const compiled = _.template(templateText);
    if (options !== null) {
      return compiled(options);
    }
    return compiled();
  },
  template() {
    return this.renderTemplate('#template-logOutButton');
  },
  render() {
    this.$el.html(this.template());
    return this;
  },
  logOutFunction() {
    $.ajax({
      type: 'POST',
      url: 'http://localhost:3000/logout',
      data: user.token,
      dataType: 'json',
      contentType: 'application/json',
    }).done(function (data) {
      console.log("logOut");
    });
  },
});
