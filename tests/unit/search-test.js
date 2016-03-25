describe('test transformation', function(){
      it('test', function() {
        var time=123;
        expect(transformTime(time)).toEqual('2:03');
      });
});
