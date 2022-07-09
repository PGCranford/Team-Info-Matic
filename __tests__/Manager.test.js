// const Manager = require('../index.js')
const Manager = require('../lib/Manager')


test('creates Manager object', () => {

    const manager = new Manager('Ned', 64, 'ned@nedcentral.com', 8);

    // expect((manager)).toBe('object')
    expect(manager.name).toEqual(expect.any(String))
    expect(manager.empID).toEqual(expect.any(Number))
    expect(manager.email).toEqual(expect.any(String))
    expect(manager.officeNum).toEqual(expect.any(Number))

});










