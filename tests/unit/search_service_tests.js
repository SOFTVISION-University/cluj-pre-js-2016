describe('Search Service tests', function() {

  it ('test singleton', function () {
      single = SearchService;
      single.getInstance();
      console.log(single._instance.val);
      expect(single._instance.val).toBeUndefined();
      single._instance.val = 'something';
      console.log(single._instance.val);

      single.getInstance();
      console.log(single._instance.val);

        expect(single._instance.val).toEqual('something');
    });
});
