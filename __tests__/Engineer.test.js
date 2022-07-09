const Engineer = require("../lib/Engineer.js")

test('creates Engineer object', () => {

    const engineer = new Engineer('Ned', 64, 'ned@nedcentral.com', 8);

    // expect(role(engineer)).toBe('object')
    expect(engineer.name).toEqual(expect.any(String))
    expect(engineer.empID).toEqual(expect.any(Number))
    expect(engineer.email).toEqual(expect.any(String))

});


