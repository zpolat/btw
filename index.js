// (bedrag inc btw / 121) x 21

const berekenBtn = document.getElementById("btn")
const inputEl = document.getElementById("input-el")
const incBtwEl = document.getElementById("incBtw")
const exBtwEl = document.getElementById("exBtw")
const btwBedragEl = document.getElementById("btwBedrag")

berekenBtn.addEventListener("click", function () {
   const incBtwT = inputEl.value
   const incBtw = incBtwT

   console.log(incBtw)
   const btwBedrag = (incBtw / 121) * 21
   console.log(btwBedrag)
   const exBtw = incBtw - btwBedrag
   console.log(exBtw)

   // incBtwEl.innerHTML = incBtw.fixed(2)
   incBtwEl.innerHTML = `€ ${Number(incBtwT).toFixed(2)}`
   exBtwEl.innerHTML = `€ ${Number(exBtw).toFixed(2)}`
   btwBedragEl.innerHTML = `€ ${Number(btwBedrag).toFixed(2)}`
})
