import { SetupServer } from '@src/server'
import supertest from 'supertest'

let server: SetupServer
beforeAll(() => {
    server = new SetupServer()
    server.init()
    global.testRequest = supertest(server.getApp())
})
