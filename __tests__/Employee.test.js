const { default: test } = require('node:test');
const Employee = require('../lib/Employee.js');

test('creates Employee object', () => {

    const employee = new employee('Ned', 64, 'ned@nedcentral.com', 8);

    expect(role(employee)).toBe('object')
    expect(employee.name).toEqual(expect.any(String))
    expect(employee.empID).toEqual(expect.any(Number))
    expect(employee.email).toEqual(expect.any(String))
    expect(employee.officeNum).toEqual(expect.any(Number))

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