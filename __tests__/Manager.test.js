const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    // AAA
    // Arrange: set up the constants against which we'll test and any supporting objects
    const expectedName = 'Stan';
    const expectedEmpId = 1;
    const expectedEmail = 'stan@something';
    const expectedOffice = 211;

    // Act: invoke the function "under test", capturing its return value
    const manager = new Manager(expectedName, expectedEmpId, expectedEmail, expectedOffice);

    // Assert: check (i.e. assert) that the expected behavior happened correctly
    expect(manager.name).toBe(expectedName);
    expect(manager.empId).toEqual(expectedEmpId);
    expect(manager.email).toEqual(expectedEmail);
    expect(manager.office).toEqual(expectedOffice);
});

test("gets manager's properties", () => {
    
    const expectedName = 'Stan';
    const expectedEmpId = 1;
    const expectedEmail = 'stan@something';
    const expectedOffice = 211;
    const expectedRole = 'Manager';

    const manager = new Manager(expectedName, expectedEmpId, expectedEmail, expectedOffice);

    expect(manager.getRole()).toEqual(expectedRole);
    expect(manager.getOffice()).toEqual(expectedOffice);
});
