const testingFrom = require('supertest');
const server = require('../api/server')

const db = require('../database/dbConfig')

describe('jokes-router.js', () => {

    beforeEach(async () => {
        await db('users').truncate();
    });



    describe('jokes GET ALL', () => {
        it('should', function(){
            const formData = {username: "Octavia", password: "foist_!#ded"}
            return testingFrom(server)
                    .post('/api/auth/register')
                    .send(formData)
                    .then(res => {
                        return testingFrom(server)
                        .post('/api/auth/login')
                        .send(formData)
                        .then(res => {
                            const token = res.body.token
                                console.log(token)
                            return testingFrom(server)
                                .get('/api/jokes')
                                .set({token})
                                .then(res =>{
                
                                    expect(res.status).toBe(201)}
                                    )
                        });
                    });
        }
    )
});


    describe('jokes GET ALL', () => {

    it('should', function(){
        const formData = {username: "Septimus", password: "foist_!#ded"}
        return testingFrom(server)
                .post('/api/auth/register')
                .send(formData)
                .then(res => {
                    return testingFrom(server)
                    .post('/api/auth/login')
                    .send(formData)
                    .then(res => {
                        const token = res.body.token
                            console.log(token)
                        return testingFrom(server)
                            .get('/api/jokes')
                            .set({token})
                            .then(res =>{
            
                                expect(Array.isArray(res.body)).toBe(false)}
                                )
                    });
                });
    }
)



    });
});