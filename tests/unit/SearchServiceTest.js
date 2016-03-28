describe('SearchService.js tests', function() {
    describe('test function convertSecToMin', function() {
        it('test with 120 sec', function() {
            expect(convertSecToMin(80)).toEqual('01:20');
        });
        it('test with 0 sec', function() {
            expect(convertSecToMin(0)).toEqual('00:00');
        });
        it('test with sec > 1 hour', function() {
            expect(convertSecToMin(3800)).toEqual('63:20');
        });
        it('test with no argument', function() {
            expect(convertSecToMin()).toEqual('Not specified');
        });
    });

});
