describe('User.js tests', function() {
    describe('test function User to creat users', function() {
        var usr = new User('john1', 'j@email.com', 'pass1');

        it('test the username', function() {
            expect(usr.username).toEqual('john1');
        });
        it('test the password', function() {
            expect(usr.password).toEqual('pass1');
        });
        it('test the password', function() {
            expect(usr.email).toEqual('j@email.com');
        });
        it('test the flag logged', function() {
            expect(usr.logged).toEqual(false);
        });
    });

    describe('test getters', function() {
        var obj = new User('john1', 'j@email.com', 'pass1');

        it('test getUsername', function() {
            expect(obj.getUsername()).toEqual('john1');
        });
        it('test getEmail', function() {
            expect(obj.getEmail()).toEqual('j@email.com');
        });
        it('test getPassword', function() {
            expect(obj.getPassword()).toEqual('pass1');
        });
        it('test getLogged', function() {
            expect(obj.getLogged()).toEqual(false);
        });
    });

    describe('test setters', function() {
        var obj = new User('john1', 'j@email.com', 'pass1');

        it('test setUsername', function() {
            obj.setUsername('user2');
            expect(obj.username).toEqual('user2');
        });
        it('test setEmail', function() {
            obj.setEmail('email2@email.com');
            expect(obj.email).toEqual('email2@email.com');
        });
        it('test setPassword', function() {
            obj.setPassword('pass2');
            expect(obj.password).toEqual('pass2');
        });
        it('test setLogged', function() {
            obj.setLogged(true);
            expect(obj.logged).toEqual(true);
        });
    });



});
