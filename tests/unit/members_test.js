
    describe('test HappyFLow', function() {
        var obj = { userName : "cosmin",
                    email : "cosmini357@gmail.com",
                    password : "cosmin",

                  };


        var me = new Member(obj);
        it('test userName', function() {
            expect(me.userName).toEqual('cosmin');
        });
        it('test email', function() {
            expect(me.email).toEqual('cosmini357@gmail.com');
        });

        it('test password', function() {
            expect(me.password).toEqual('cosmin');

        });
        it('test getUsername', function() {
           expect(me.getUser()).toEqual('cosmin');
       });
       it('test getEmail', function() {
          expect(me.getEmail()).toEqual('cosmini357@gmail.com');
      });
      it('test getPassword', function() {
         expect(me.getPassword()).toEqual('cosmin');
     });


     it('test setUsername', function() {
         me.setUserName('corina');
        expect(me.getUser('corina')).toEqual('corina');
    });
    });


    describe('test members with string as parameter', function() {

        var me = new Member("cosmin");
        it('test userName', function() {
            expect(me.userName).toEqual(undefined);
        });
        it('test email', function() {
            expect(me.email).toEqual(undefined);
        });

        it('test password', function() {
            expect(me.password).toEqual(undefined);

        });
        it('test getUsername', function() {
           expect(me.getUser()).toEqual(undefined);
        });
        it('test getEmail', function() {
          expect(me.getEmail()).toEqual(undefined);
        });
        it('test getPassword', function() {
         expect(me.getPassword()).toEqual(undefined);
       });


     it('test setUsername', function() {
         me.setUserName('corina');
        expect(me.getUser('corina')).toEqual('corina');
    });
    });


  describe('test object with 2 keys', function() {
            var obj = { userName : "cosmin",
                        email : "cosmini357@gmail.com"


                      };


            var me = new Member(obj);
        /*    it('test userName', function() {
                expect(me.userName).toEqual('cosmin');
            });
            it('test email', function() {
                expect(me.email).toEqual('cosmini357@gmail.com');
            });*/

            it('test password', function() {
                expect(me.password).toEqual(undefined);

            });

          it('test getPassword', function() {
             expect(me.getPassword()).toEqual(undefined);
         });


        
        });
