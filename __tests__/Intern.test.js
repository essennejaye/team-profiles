const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    // Arrange: set up the constants against which we'll test and any supporting objects

    const expectedName = 'Stan';
    const expectedEmpId = 1;
    const expectedEmail = 'stan@something';
    const expectedschool = 'UofA';

    // Act: invoke the function "under test", capturing its return value
    const intern = new Intern(expectedName, expectedEmpId, expectedEmail, expectedschool);

    // Assert: check (i.e. assert) that the expected behavior happened correctly
    expect(intern.name).toBe(expectedName);
    expect(intern.empId).toEqual(expectedEmpId);
    expect(intern.email).toEqual(expectedEmail);
    expect(intern.school).toEqual(expectedschool);
});
