// require Intern constructor 
const Intern = require("../lib/Intern");

// test
test("Make new intern", () => {
    const intern = new Intern("Intern", "Hunter", "030", "hunter109@gmail.com", "UofA");

    expect(intern.role).toEqual("Intern");
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(String));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.roleType).toEqual(expect.any(String));
});