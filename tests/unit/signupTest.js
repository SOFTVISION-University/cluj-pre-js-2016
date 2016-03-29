it('Test 9', function(){
  document.body = {};
  document.body.scrollTop = {};
  document.body.scrollTop.value = 0;
  // spyOn(window, 'focus').and.returnValue('');
  goOnTop();
  expect(focus).toHaveBeenCalled();
})
