export const QuoteView = Backbone.View.extend({

  initialize() {
    this.getQuoteApi();
  },
  getQuoteApi() {
    $.ajax({
      url: 'http://quotes.rest/qod.json',
      success: (data) => {
        document.querySelector('#quote').innerHTML = data.contents.quotes[0].quote;
      },
      error: () => {
        document.querySelector('#quote').innerHTML = 'test';
      },
    });
  },

  render() {
    this.$el.html('');
    return this;
  },
});
