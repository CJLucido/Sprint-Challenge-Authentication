const testingFrom = require('supertest');
const server = require('../api/server')
const router = require('../auth/auth-router')
const db = require('../database/dbConfig')

describe('auth-router.js', () => {

    beforeEach(async () => {
        await db('users').truncate();
    });

    describe('register POST', () => {//SECRET KEY MUST HAVE A VALUE, TESTING ENV NOT USING JWT_SECRET !!!!! why?

        it('should', function(){
            return testingFrom(server)
                    .post('/api/auth/register')
                    .send({username: "Primus", password: "foist_!#ded"})
                    .then(res => {
                        expect(res.status).toBe(201)
                    });
        }
    )
});


    describe('register POST', () => {//SECRET KEY MUST HAVE A VALUE, TESTING ENV NOT USING JWT_SECRET !!!!! why?

        it('should', function(){

            const formData = {username: "Secondus", password: "foist_!#ded"}
            return testingFrom(server)
                    .post('/api/auth/register')
                    .send(formData)
                    .then(res => {
                        console.log(res.body)
                        expect(res.body.message).toMatch("Created user Secondus with an id of 1")
                        
                    });
        }
    )

});

   
    describe('login POST', () => {
        it('should', function(){
            const formData = {username: "Tertius", password: "foist_!#ded"}
            return testingFrom(server)
                    .post('/api/auth/register')
                    .send(formData)
                    .then(res => {
                        return testingFrom(server)
                        .post('/api/auth/login')
                        .send(formData)
                        .then(res => {
                            expect(res.body.message).toMatch("Logged in, user id: 1")
                        });
                    });
        }
    )
});
    describe('login POST', () => {

        it('should', function(){
            const formData = {username: "Quartus", password: "foist_!#ded"}
            return testingFrom(server)
                    .post('/api/auth/register')
                    .send(formData)
                    .then(res => {
                        return testingFrom(server)
                        .post('/api/auth/login')
                        .send(formData)
                        .then(res => {
                            expect(res.status).toBe(200)
                        });
                    });
        }
    )

    });
});