const afficheur = document.querySelector('.afficheur');
const buttons = document.querySelectorAll('button');

let valeuractuelle = '';
let valeurprecedente = '';
let operateur = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.value;

        if (value === 'AC') {
            afficheur.value = '';
            valeuractuelle = '';
            valeurprecedente = '';
            operateur = '';
        }
       
        else if (value === 'del') {
            valeuractuelle = valeuractuelle.slice(0, -1);
            afficheur.value = valeuractuelle;
        }
       
        else if (value === '=') {
            if (valeurprecedente!== '' && operateur !== '') {
                valeuractuelle = eval(valeurprecedente + operateur + valeuractuelle);
                afficheur.value = valeuractuelle;
                valeurprecedente = '';
                operateur = null;
            }
        }
       
        else if (value === '+' || value === '-' || value === '*' || value === '/') {
            operateur= value;
            valeurprecedente= valeuractuelle;
            valeuractuelle = '';
        }
        
        else {
            valeuractuelle += value;
            afficheur.value = valeuractuelle;
        }
    });
});
