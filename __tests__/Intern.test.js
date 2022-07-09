const Intern = require('../lib/Intern')

test('creates Intern object', () => {

    const intern = new Intern('Brisco', 45, 'Brisco@Briscocentral.com', 'MarsU');

    expect(intern.name).toEqual(expect.any(String))
    expect(intern.empID).toEqual(expect.any(Number))
    expect(intern.email).toEqual(expect.any(String))
    expect(intern.school).toEqual(expect.any(String))

});

