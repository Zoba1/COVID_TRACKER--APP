
// Write something
let contents = document.getElementById('contents')
let api =  'https://disease.sh/v3/covid-19/countries'

async function covidData() {
    try{
        let response = await fetch(api)
        let data = await response.json()

        data.forEach(item => {
            let holder = document.createElement('div')
            let name = document.createElement('h1')
            let flag = document.createElement('image')
            let continent = document.createElement('h2')
            
            let overlay = document.createElement('div')

            flag.src = item.countryInfo.flag
            name.textContent = `item:${item.country}`
            continent.innerText = `Continent:${item.continent}`
            

            holder.append(name,flag,continent)
            contents.append(holder)

            holder.className = 'holder'
            flag.className = 'flag'
            overlay.className = 'overlay'

             
            flag.addEventListener('click',()=>{
                overlay.style.display = 'block'
            })
            overlay.addEventListener('click',()=>{
                overlay.style.display = 'none'
            })
            let contents2 = document.createElement('div')
            contents2.className = 'content2'
            let country2 = document.createElement('h1')
            let countryPop = document.createElement('p')
            let disclosed = document.createElement('p')
            let totalDisclosed = document.createElement('p')
            let deathRate = document.createElement('p')
            let recovered = document.createElement('p')
            let button = document.createElement('button')
            button.textContent = 'X'
            button.className = 'closeButton'

            button.addEventListener('click',()=>{
                overlay.style.display = 'none'
            })
            country2.innerText = `Country:${item.country}`
            countryPop.innerText = `Population : ${item.population}`
            disclosed.innerText = `Reported cases: ${item.todayCases}`
           totalDisclosed.innerText = `Reported cases: ${item.cases}`
            deathRate.innerText = `Reported cases: ${item.deaths}`
           recovered.innerText = `Reported cases: ${item.recovered}`

           contents2.append(country2,countryPop,disclosed,totalDisclosed,deathRate,recovered,button)

           overlay.appendChild(contents2)

        })

    }catch(error){

    }
}
covidData()