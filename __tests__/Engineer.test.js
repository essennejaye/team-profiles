const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    // Arrange: set up the constants against which we'll test and any supporting objects

    const expectedName = 'Stan';
    const expectedEmpId = 1;
    const expectedEmail = 'stan@something';
    const expectedGithub = 'esselle';
    const expectedRole = 'Engineer';

    // Act: invoke the function "under test", capturing its return value
    const engineer = new Engineer(expectedName, expectedEmpId, expectedEmail, expectedGithub, expectedRole);

    // Assert: check (i.e. assert) that the expected behavior happened correctly
    expect(engineer.name).toBe(expectedName);
    expect(engineer.empId).toEqual(expectedEmpId);
    expect(engineer.email).toEqual(expectedEmail);
    expect(engineer.github).toEqual(expectedGithub);
    expect(engineer.role).toEqual(expectedRole);
});
