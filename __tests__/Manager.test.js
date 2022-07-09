test('creates Employee object', () => {

    const manager = new manager('Ned', 64, 'ned@nedcentral.com', 8);

    expect(role(manager)).toBe('object')
    expect(manager.name).toEqual(expect.any(String))
    expect(manager.empID).toEqual(expect.any(Number))
    expect(manager.email).toEqual(expect.any(String))
    expect(manager.officeNum).toEqual(expect.any(Number))

});

// test('creates Employee Name', () => {

//     const employee = new employee('Ned', 64, 'ned@nedcentral.com', 8);

//     expect(employee.name).toEqual(expect.any(String))

// });


// test('creates Employee ID', () => {

//     const employee = new employee('Ned', 64, 'ned@nedcentral.com', 8);

//     expect(employee.empID).toEqual(expect.any(Number))

// });

// test('creates Employee Email', () => {

//     const employee = new employee('Ned', 64, 'ned@nedcentral.com', 8);

//     expect(employee.email).toEqual(expect.any(String))

// });

// test('creates Employee Office Number ', () => {

//     const employee = new employee('Ned', 64, 'ned@nedcentral.com', 8);

//     expect(employee.officeNum).toEqual(expect.any(Number))

// });







module.exports = Manager;


const Manager = require('../lib/Manager.js');