import { SetupServer } from '@src/server'
import supertest from 'supertest'

beforeAll(() => {
  const server = new SetupServer()
  server.init()
  //node @types globals.d.ts
  /*
    // eslint-disable-next-line no-var
declare var testRequest: import("supertest").SuperTest<import("supertest").Test>;
*/
  global.testRequest = supertest(server.getApp())
})
