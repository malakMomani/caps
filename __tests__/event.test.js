'use strict';

describe('Test Event Handlers',()=>{
  let consoleSpy;

beforeAll(()=>{
  consoleSpy = jest.spyOn(console,'log').mockImplementation();
});

afterAll(()=>{
  consoleSpy.mockRestore();
});

it('handle picking new order',()=>{
  setTimeout(()=>{
    expect(consoleSpy).toHaveBeenCalled();
  } , 5000);
});
it('handle in-transit order',()=>{
  setTimeout(()=>{
    expect(consoleSpy).toHaveBeenCalled();
  } , 1000);
});

it('handle delivering order',()=>{
  setTimeout(()=>{
    expect(consoleSpy).toHaveBeenCalled();
  } , 3000);
});
});
