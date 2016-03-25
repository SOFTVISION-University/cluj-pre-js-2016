describe('test time convertion function',function() {
  it('test time convert', function() {
      expect(convertToMin('100')).toEqual('1:40');
  });
  it('test time convert with sec multiple 10', function() {
      expect(convertToMin('70')).toEqual('1:10');
  });
  it('test time convert with sec < 1 min', function() {
      expect(convertToMin('50')).toEqual('0:50');
  });
  it('test time convert with sec < 10', function() {
      expect(convertToMin('61')).toEqual('1:01');
  });
});
