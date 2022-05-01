// function to generate index.html 

// generate intern card for html
const genIntern = (intern) => {

    return `<div class="generated">
    <div class="card">
        <div class="card-header">
            <h3 class="white">${intern.name}</h3>
            <h3 class="white">${intern.role}</h3>
        </div>
        <div class="card-body-wrapper">
            <div class="card-body">
                <ul>
                    <li class="liElement">ID: ${intern.id}</li>
                    <li class="liElement">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
                    <li class="liElement">School: ${intern.roleType}</li>
                </ul>
            </div>
        </div>
    </div>
</div>
`;
};

const genEngineer = (engineer) => {

    return `<div class="generated">
    <div class="card">
        <div class="card-header">
            <h3 class="white">${engineer.name}</h3>
            <h3 class="white">${engineer.role}</h3>
        </div>
        <div class="card-body-wrapper">
            <div class="card-body">
                <ul>
                    <li class="liElement">ID: ${engineer.id}</li>
                    <li class="liElement">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                    <li class="liElement">GitHub: <a href="https://github.com/${engineer.roleType}">${engineer.roleType}</a></li>
                </ul>
            </div>
        </div>
    </div>
</div>
`;

};

const genManager = (manager) => {

    return `<div class="generated">
    <div class="card">
        <div class="card-header">
            <h3 class="white">${manager.name}</h3>
            <h3 class="white">${manager.role}</h3>
        </div>
        <div class="card-body-wrapper">
            <div class="card-body">
                <ul>
                    <li class="liElement">ID: ${manager.id}</li>
                    <li class="liElement">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
                    <li class="liElement">Office #: ${manager.roleType}</li>
                </ul>
            </div>
        </div>
    </div>
</div>
`;
};

const generateHtml = (teamMembers) => {

    cards = [];

    for (let i = 0; i < teamMembers.length; i++) {
        const teamMember = teamMembers[i];
        const role = teamMember.role;

        if (role === "Intern") {
            const internCard = genIntern(teamMember);
            cards.push(internCard);
        }

        if (role === "Engineer") {
            const engineerCard = genEngineer(teamMember);
            cards.push(engineerCard);
        }

        if (role === "Manager") {
            const managerCard = genManager(teamMember);
            cards.push(managerCard);
        }
    }

    const teamMemberCards = cards.join("");

    const genTeam = genTeamMembersonPage(teamMemberCards);
    return genTeam;
};

const genTeamMembersonPage = (teamMemberCards) => {

    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <link rel="stylesheet" href="./style.css">
    </head>
    <body>
    
        <header id="header">
            <h1>My Team</h1>
        </header>
    
        <main id="main">
        <!-- generated cards -->
        ${teamMemberCards}
        </main>
        
    <script src="./index.js"></script>
    </body>
    </html>
    `;
};


module.exports = generateHtml; 