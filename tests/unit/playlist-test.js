it('test 1', function(){
   spyOn(document, 'getElementById').and.callFake(function(myParam) {
       if (myParam === 'formText1') {
           return {value: 'dsada'};
       } else {
           return {value: '2'};
       }
   });
  expect(Authentication()).toBe(false);
});

it('test 2', function(){
   spyOn(document, 'getElementById').and.callFake(function(myParam) {
       if (myParam === 'formText1') {
           return {value: 'kathycombs@quailcom.com'};
       } else {
           return {value: 'orkman5951'};
       }
   });
  expect(Authentication()).toBe(true);
});

it('test 3', function(){
   spyOn(document, 'getElementById').and.callFake(function(myParam) {
       if (myParam === 'formText1') {
           return {value: 'kathycombs@quailcom.com'};
       } else {
           return {value: 'dsdsa'};
       }
   });
  expect(Authentication()).toBe(false);
});
