// function to generate index.html 

const startHtml = () => {

    const html = `<!DOCTYPE html>
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
    `;
};

// generate intern card for html
const genIntern = (intern) => {

    return `<div class="generated">
    <div class="card">
        <div class="card-header">
            <h3 class="white">${Intern.name}</h3>
            <h3 class="white">${Intern.role}</h3>
        </div>
        <div class="card-body-wrapper">
            <div class="card-body">
                <ul>
                    <li class="liElement">ID: ${Intern.id}</li>
                    <li class="liElement">Email: ${Intern.email}</li>
                    <li class="liElement">GitHub: ${Intern.roleType}</li>
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
            <h3 class="white">${Engineer.name}</h3>
            <h3 class="white">${Engineer.role}</h3>
        </div>
        <div class="card-body-wrapper">
            <div class="card-body">
                <ul>
                    <li class="liElement">ID: ${Engineer.id}</li>
                    <li class="liElement">Email: ${Engineer.email}</li>
                    <li class="liElement">GitHub: ${Engineer.roleType}</li>
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
            <h3 class="white">${Manager.name}</h3>
            <h3 class="white">${Manager.role}</h3>
        </div>
        <div class="card-body-wrapper">
            <div class="card-body">
                <ul>
                    <li class="liElement">ID: ${Manager.id}</li>
                    <li class="liElement">Email: ${Manager.email}</li>
                    <li class="liElement">GitHub: ${Manager.roleType}</li>
                </ul>
            </div>
        </div>
    </div>
</div>
`;
};

    // add teamMembers  ++++ cant just loop thru this object array since it's defined Manager.name, Intern.name, Engineer.name...

//     for (let i = 0; i < teamMembers.length; i++) { 

//         const html2 = `<div class="generated">
//         <div class="card">
//             <div class="card-header">
//                 <h3 class="white">${name}</h3>
//                 <h3 class="white">${role}</h3>
//             </div>
//             <div class="card-body-wrapper">
//                 <div class="card-body">
//                     <ul>
//                         <li class="liElement">ID: ${id}</li>
//                         <li class="liElement">Email: ${email}</li>
//                         <li class="liElement">GitHub: ${roleType}</li>
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     </div>
// `;
//     html.push(html2);
//     };

    const html3 = `</main>
        
    <script src="./index.js"></script>
</body>
</html>
`

    return (html + html3);
    

// const generateTeamMember = () => {  // need some kind of array to cycle through all teamMembers and do this function until it's over and join/merge it with top and bottom HTML files.

//     for (let i = 0; i < teamMembers.length; i++) {

//         const html2 = `<div class="generated">
//     <div class="card">
//         <div class="card-header">
//             <h3 class="white">${name}</h3>
//             <h3 class="white">${role}</h3>
//         </div>
//         <div class="card-body-wrapper">
//             <div class="card-body">
//                 <ul>
//                     <li class="liElement">ID: ${id}</li>
//                     <li class="liElement">Email: ${email}</li>
//                     <li class="liElement">GitHub: ${roleType}</li>
//                 </ul>
//             </div>
//         </div>
//     </div>
// </div>
// `
//     html.push(html2);
//     }

//     const html2 = `<div class="generated">
//     <div class="card">
//         <div class="card-header">
//             <h3 class="white">${name}</h3>
//             <h3 class="white">${role}</h3>
//         </div>
//         <div class="card-body-wrapper">
//             <div class="card-body">
//                 <ul>
//                     <li class="liElement">ID: ${id}</li>
//                     <li class="liElement">Email: ${email}</li>
//                     <li class="liElement">GitHub: ${roleType}</li>
//                 </ul>
//             </div>
//         </div>
//     </div>
// </div>
// `
//     return html2;
// };

// const finishHtml = () => {

//     const html3 = `</main>
        
//     <script src="./index.js"></script>
// </body>
// </html>
// `
//     return html3;
// };


module.exports = generateHtml; 

// need to break up HTML into separate groups. 
// top portion generated by a function
// middle portion generated by # of team members
// bottom function to close the HTML and BODY elements. 