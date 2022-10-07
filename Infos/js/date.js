//On crée une date
let date1 = new Date();

let dateLocale = date1.toLocaleString('fr-FR',{
    weekday: 'long',
    month: 'long',
    day: 'numeric'});

document.getElementById('div_date').innerHTML = dateLocale;