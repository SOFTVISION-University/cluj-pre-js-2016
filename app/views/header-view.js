import { LoginStatusView } from '../views/login-status-view';
import { QuoteView } from '../views/quote-view';

export const HeaderView = Backbone.View.extend({
  className: 'header-view',
  template: $('#template-header-view').html(),
  _nestedView: [],
  render() {
    this.$el.html(this.template);

    const statusView = new LoginStatusView({
      model: this.model,
      el: $(this.el.querySelector('#loginStatusContainer')),
    });
    this._nestedView.push(statusView.render());

    const quoteView = new QuoteView({
      el: $(this.el.querySelector('#quote')),
    });
    this._nestedView.push(quoteView.render());
    return this;
  },
});
