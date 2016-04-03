const FooterView = Backbone.View.extend({
  copyright() {
    const date = new Date();
    const year = date.getFullYear();
    document.getElementById('copyrighthome').innerHTML = `&copy; ${year} ACME
    DIVISION ALL RIGHTS RESERVED`;
  },
  render() {
    const template = _.template($('#template-FooterView').html(), {});
    this.$el.html(template);
  },
});

export { FooterView };
