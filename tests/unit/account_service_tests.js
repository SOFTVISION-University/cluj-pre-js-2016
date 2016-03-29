describe('Account Service tests', function() {
    var acccontObj = [{"userName":"combs","email":"kathycombs@quailcom.com","password":"orkman5951"},{"userName":"whitley","email":"kathywhitley@quailcom.com","password":"inson2079"},{"userName":"fletcher","email":"kathyfletcher@quailcom.com","password":"rederick8363"}];
    var account;
    beforeEach(function() {
      account = new AccountService(acccontObj);
    });
    it('test getUsers', function() {
        expect(account.getUsers()).toEqual([{"userName":"combs","email":"kathycombs@quailcom.com","password":"orkman5951"},{"userName":"whitley","email":"kathywhitley@quailcom.com","password":"inson2079"},{"userName":"fletcher","email":"kathyfletcher@quailcom.com","password":"rederick8363"}]);
    });
    it('test login', function() {
        spyOn(window, 'alert').and.returnValue('');
        account.login()
        expect(alert).toHaveBeenCalled();

    });
    it('test logout', function() {
        spyOn(window, 'alert').and.returnValue('');
        account.logout()
        expect(alert).toHaveBeenCalled();

    });
});
