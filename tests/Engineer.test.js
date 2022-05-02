// require Intern constructor 
const Engineer = require("../lib/Engineer");

// test code

test("Creates new engineer", () => {
    const engineer = new Engineer("Engineer", "Hunter", "030", "hunter109@gmail.com", "HunterMcGrew");
        expect(engineer.role).toEqual("Engineer");
        expect(engineer.name).toEqual(expect.any(String));
        expect(engineer.id).toEqual(expect.any(String));
        expect(engineer.email).toEqual(expect.any(String));
        expect(engineer.roleType).toEqual(expect.any(String));
    });

