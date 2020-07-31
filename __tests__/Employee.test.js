const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    // Arrange: set up the constants against which we'll test and any supporting objects

    const expectedName = 'Stan';
    const expectedEmpId = 1;
    const expectedEmail = 'stan@something';
    const expectedRole = 'Manager';

    // Act: invoke the function "under test", capturing its return value
    const employee = new Employee(expectedName, expectedEmpId, expectedEmail, expectedRole);

    // Assert: check (i.e. assert) that the expected behavior happened correctly
    expect(employee.name).toBe(expectedName);
    expect(employee.empId).toEqual(expectedEmpId);
    expect(employee.email).toEqual(expectedEmail);
    expect(employee.role).toEqual(expectedRole);
});
