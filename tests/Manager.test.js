// require manager constructor
const Manager = require("../lib/Manager");
const manager = require("../lib/Manager");

// test
test("Make new manager", () => {
    const manager = new Manager("Manager", "Hunter", "030", "hunter109@gmail.com", "13");
    expect(manager.role).toEqual("Manager");
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(String));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.roleType).toEqual(expect.any(String));
});