//*Consegna
/*Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e accanto un bottone con la scritta “Accendi”.
Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato)*/
//?BONUS
/*Facciamo accendi e spegni:
Al primo click la lampadina si accende e nel bottone compare la scritta "Spegni"
Al secondo click la lampadina si spegne e nel bottone compare la scritta "Accendi"
E così via...
Per fare questo bonus potremmo aver bisogno del metodo string.includes()*/

const lampEl = document.getElementById('lamp')
const btnEl = document.getElementById('btn')
console.log(lampEl)
console.log(btnEl)

btnEl.addEventListener('click', function () {
	if (lampEl.src.includes('white_lamp.png')) {
		lampEl.src = './assets/img/yellow_lamp.png'
		btnEl.innerHTML = 'Spegni'
	} else {
		lampEl.src = './assets/img/white_lamp.png'
		btnEl.innerHTML = 'Accendi'
	}
})
