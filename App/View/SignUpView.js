const SignUpView = Backbone.View.extend({
  template(values) {
    const templateText = document.querySelector('#sign-up-template').innerText;
    const compiled = _.template(templateText);
    if (values !== null) {
      return compiled(values);
    }
    return compiled();
  },
  render() {
    this.$el.append(this.template(this));
    return this;
  },
});

export { SignUpView };
