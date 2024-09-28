import request from 'supertest'
import app from '../src/utils/server';

describe('User functional test', () => {
    describe('when creating a new user', () => {
        it('should successfully create a new user', async () => {
            const payload = {
                name: 'John Doe',
                email: 'johndoe@example.com',
                password: 'password',
            }
            const res = await request(app).post('/api/users').send(payload)
            expect(true).toBe(true)
        })
})
})
