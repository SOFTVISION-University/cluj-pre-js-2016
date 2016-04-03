
const AccountView = Backbone.View.extend {
  className: 'index-section-1',
  template() {
    const templateText = document.querySelector(`script#${this.className}`).innerText;
    const compiled = _.template(templateText);
    return compiled.apply(this, arguments);
  },
  events:{
    'click join-now-button': '_joinNow',
    'click sign-in-button': '_signIn',
  },
  _joinNow(){
    window.location.href = 'landing_page.html';
  },
  _signIn(){
    window.location.href = 'login.html';
  },
  render(){

    this.$el.html(this.template(this.model.attributes));
  },
}

export { AccountView };
