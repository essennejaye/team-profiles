const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    // Arrange: set up the constants against which we'll test and any supporting objects

    const expectedName = 'Stan';
    const expectedEmpId = 1;
    const expectedEmail = 'stan@something';

    // Act: invoke the function "under test", capturing its return value
    const employee = new Employee(expectedName, expectedEmpId, expectedEmail);

    // Assert: check (i.e. assert) that the expected behavior happened correctly
    expect(employee.name).toBe(expectedName);
    expect(employee.empId).toBe(expectedEmpId);
    expect(employee.email).toBe(expectedEmail);
});
test('gets employee properties', () => {
    const expectedName = 'Stan';
    const expectedEmpId = 1;
    const expectedEmail = 'stan@something';

    const employee = new Employee(expectedName, expectedEmpId, expectedEmail);

    expect(employee.getName()).toEqual(expectedName);
    expect(employee.getEmpId()).toEqual(expectedEmpId);
    expect(employee.getEmail()).toEqual(expectedEmail);
});
