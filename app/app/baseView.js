const BaseView = Backbone.View.extend({
  renderTemplate: function renderTemplate(selectorString, options) {
    const templateText = document.querySelector(selectorString).innerText;
    const compiled = _.template(templateText);
    if (options !== null) {
      return compiled(options);
    }
    return compiled();
  },
});

export { BaseView };
