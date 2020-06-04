'use strict';

const request = require('supertest');
const express = require('express');
const router = require('../../router');
const cors = require('cors');

const { errorMessages, results } = require('../../game/constants');

let server, agent;

beforeEach((done) => {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(router);

  server = app.listen(4000, (err) => {
    if (err) return done(err);
    agent = request.agent(server);
    done();
  });

});

afterEach((done) => {
  return server && server.close(done);
});

describe('play route', () => {

  it(`should return 'nothing' when Frodo goes ['s']`, async () => {
    const userInput = ['s'];
    const response = await agent
      .post('/play')
      .send(userInput);

    expect(response.statusCode).toEqual(200);
    expect(response.body.status).toEqual(results.nothing.status);
  });


  it(`should return 'eaten' when Frodo goes ['e','e','e']`, async () => {
    const userInput = ['e', 'e', 'e'];
    const response = await agent
      .post('/play')
      .send(userInput);

    expect(response.statusCode).toEqual(200);
    expect(response.body.status).toEqual(results.eaten.status);
  });


  it(`should return 'eaten' when Frodo goes ['e','e','e','n']`, async () => {
    const userInput = ['e', 'e', 'e', 'n'];
    const response = await agent
      .post('/play')
      .send(userInput);

    expect(response.statusCode).toEqual(200);
    expect(response.body.status).toEqual(results.eaten.status);
  });


  it(`should return 'win' when Frodo goes ['e', 'e', 'n', 'e', 'e', 'n', 'e', 'e', 'n', 'n', 'e']`, async () => {
    const userInput = ['e', 'e', 'n', 'e', 'e', 'n', 'e', 'e', 'n', 'n', 'e'];
    const response = await agent
      .post('/play')
      .send(userInput);

    expect(response.statusCode).toEqual(200);
    expect(response.body.status).toEqual(results.win.status);
  });


  it(`should return 'fallen' when Frodo goes ['w']`, async () => {
    const userInput = ['w'];
    const response = await agent
      .post('/play')
      .send(userInput);

    expect(response.statusCode).toEqual(200);
    expect(response.body.status).toEqual(results.fallen.status);
  });


  it(`should return 'fallen' when Frodo goes ['s', 's', 's', 's', 's']`, async () => {
    const userInput = ['s', 's', 's', 's', 's'];
    const response = await agent
      .post('/play')
      .send(userInput);

    expect(response.statusCode).toEqual(200);
    expect(response.body.status).toEqual(results.fallen.status);
  });


  it(`should catch 'invalidInput' when player submits ['s', 'f']`, async () => {
    const userInput = ['s', 'f'];
    const response = await agent
      .post('/play')
      .send(userInput);

    expect(response.statusCode).toEqual(200);
    expect(response.body.status).toEqual(errorMessages.invalidInput.status);
  });


  it(`should catch 'didNotMove' when player submits []`, async () => {
    const userInput = [];
    const response = await agent
      .post('/play')
      .send(userInput);

    expect(response.statusCode).toEqual(200);
    expect(response.body.status).toEqual(errorMessages.frodoDidNotMove.status);
  });


});
