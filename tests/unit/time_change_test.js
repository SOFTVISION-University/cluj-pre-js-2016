describe('test HappyFLow', function() {

    it('test value', function() {
        expect(time_change(60)).toEqual('01:00');
    });
    it('test if exists 2 or more parameter', function() {
        expect(time_change('60',30,20)).toEqual('01:00');
    });
    it('test if parameter= string of number', function() {
        expect(time_change('60')).toEqual('01:00');
    });
    it('test if parameter= string of letter', function() {
        expect(time_change('cosmin')).toEqual('NaN:NaN');
    });


});
