/*Consegna
Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e accanto un bottone con la scritta “Accendi”.
Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato)*/

const lamp_whiteEl = document.getElementById('lamp_white')
const btnEl = document.getElementById('btn')
console.log(lamp_whiteEl)
console.log(btnEl)

btnEl.addEventListener('click', function () {
	lamp_whiteEl.src = './assets/img/yellow_lamp.png'
})
