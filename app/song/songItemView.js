import { BaseView } from '../app/baseView.js';

const songItemView = BaseView.extend({
  template: function template(values) {
    return this.renderTemplate('#template-songRowView', values);
  },
  render: function render() {
    this.$el.html(this.template(this.model.attributes));
  },
});

export { songItemView };
