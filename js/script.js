const container = document.querySelector('.lower-div');

const arrTeam = [
    {
        name: 'Wayne Barret',
        profession: 'Founder & CEO',
        img: 'img/wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        profession: 'Chief Editor',
        img: 'img/angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        profession: 'Office Manager',
        img: 'img/walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        profession: 'Social Media Manager',
        img: 'img/angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        profession: 'Developer',
        img: 'img/scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        profession: 'Graphic Designer',
        img: 'img/barbara-ramos-graphic-designer.jpg',
    },
    ]

for (let i = 0; i < arrTeam.length; i++) {
    const card = document.createElement('div');
    card.innerHTML = `
    <div class="card mx-3 my-5" style="width: 18rem;">
        <img class="card-img-top" src="${arrTeam[i].img}">
        <div class="card-body">
            <h5>${arrTeam[i].name}</h5>
            <p class="card-text">${arrTeam[i].profession}</p>
        </div>
    </div>`
    
    console.log(`${arrTeam[i].name}, ${arrTeam[i].profession}, ${arrTeam[i].img}`);
    container.appendChild(card);
}

//Creazone card, poi mettila dentro il ciclo for