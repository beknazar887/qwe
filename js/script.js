let url = 'https://randomuser.me/api/?results=10'
const getUsers = async () =>{
    const resp = await fetch(url)
    const req = await resp.json()
    console.log(req.results)
    renderUsers(req.results)
} 
getUsers()

const renderUsers = (arr) =>{
    arr.forEach(el => {
        let div = document.createElement('div')
        let h3 = document.createElement('h3')
        let p = document.createElement('p')
        let img = document.createElement('img')
        img.src = el.picture.medium
        h3.innerHTML=`${el.name.title}. ${el.name.first} ${el.name.last}`
        p.innerHTML=el.email
        div.appendChild(img)
        div.appendChild(p)
        div.appendChild(h3)
        document.body.appendChild(div)


    });
}



