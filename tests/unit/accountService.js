xit('Test 7', function(){
      // spyOn(document.loginForm.Email, 'value').and.returnValue('aqz');
      document.loginForm = {};
      document.loginForm.Email = {};
      document.loginForm.Email.value = 'asd';
      document.loginForm.password = {};
      document.loginForm.password.value = 'asd';
      spyOn(window, 'alert').and.returnValue('');
      validateForm();
      expect(alert).toHaveBeenCalled();
});


it('Test 8', function(){
      // spyOn(document.loginForm.Email, 'value').and.returnValue('aqz');
      document.loginForm = {};
      document.loginForm.Email = {};
      document.loginForm.Email.value = 'kathycombs@quailcom.com';
      document.loginForm.password = {};
      document.loginForm.password.value = 'orkman5951';

      validateForm();
      expect(window.location.assign).toBe('file:///home/dora.oroian/work/cluj-pre-js-2016/App/aplicatie.html');

});
