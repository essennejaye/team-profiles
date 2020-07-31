const Manager = require('../lib/Manager');
// Needed to use each in jest tests
const each = require("jest-each").default;

test('creates a manager object', () => {
    // AAA
    // Arrange: set up the constants against which we'll test and any supporting objects
    const expectedName = 'Stan';
    const expectedEmpId = 1;
    const expectedEmail = 'stan@something';
    const expectedOffice = 211;
    const expectedRole = 'Manager';

    // Act: invoke the function "under test", capturing its return value
    const manager = new Manager(expectedName, expectedEmpId, expectedEmail, expectedOffice, expectedRole);

    // Assert: check (i.e. assert) that the expected behavior happened correctly
    expect(manager.name).toBe(expectedName);
    expect(manager.empId).toEqual(expectedEmpId);
    expect(manager.email).toEqual(expectedEmail);
    expect(manager.office).toEqual(expectedOffice);
    expect(manager.role).toEqual(expectedRole);
});


// // Gives the test a name and optionally parameters
// describe("constructorCheck", () => {
//     // For each element in the array passed to each(), the it test will run
//     each([
//         // Arrange
//         ['Stan', 1, 'a', 211],
//         ['Satalia', 2, 's', 212]
//     ]).it("both objects should be equal", (name,eid,email,office) => {
//         // Act
//         const manager = new Manager(name, eid, email, office);
//         // Assert
//         expect(manager.name).toEqual(name);
//         expect(manager.empId).toEqual(eid);
//         expect(manager.email).toEqual(email);
//         expect(manager.office).toEqual(office);
//     })
// });
