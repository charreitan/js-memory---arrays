console.log('hello');

const spellBook = [ 'Expelliarmus', 'Accio', 'Expecto Patronum', 'Wingardium Leviosa'];
let mannaPoints = 50;

const castSpell = () => {
    console.log('a spell has been cast!')
    // choose a random spell from the array
    const randomIndex = Math.floor(Math.random() * spellBook.length);
    const randomSpell = spellBook[randomIndex];
   
    //show the user the spell on the screen
    const spellElement = document.getElementById('spell')
    const message = `you cast the ${randomSpell} spell!`;
    spellElement.textContent = message;

    //subtract 5 manna points from the total
    mannaPoints = mannaPoints - 5;
   

    //show the user the new manna points on the screen
    const mannaElement = document.getElementById('manna-points');
    mannaElement.textContent = mannaPoints;
}