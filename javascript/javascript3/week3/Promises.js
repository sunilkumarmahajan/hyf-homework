const arrUsers = ['santhoshboinapally', 'sunilkumarmahajan', 'suvarna-ratna']
function renderRepo(user){
    return fetch(`https://api.github.com/search/repositories?q=user:${user}`).then(res => res.json())
        .then(data => {
            const body = document.querySelector('body')

            const h1 = document.createElement('h1');
            h1.innerText = `${user}'s Repositories`;
            document.body.appendChild(h1);

            const ul = document.createElement('ul');       
            document.body.appendChild(ul);
            const getData = data.items;
            
            getData.forEach(item => {
                const li = document.createElement('li')
                const div = document.createElement('div')

                const name = document.createElement('h3')
                name.innerHTML = item.name
                div.appendChild(name)
                             
                const url = document.createElement('p'); 
                url.innerHTML = item.html_url;
                div.appendChild(url)

                const owner = document.createElement('p')
                owner.innerHTML = item.owner.login
                div.appendChild(owner)
               
                li.appendChild(div)
                ul.appendChild(li)           
               
            })
        });
}
function getRepo() {
    Promise.all([renderRepo(arrUsers[0]), renderRepo(arrUsers[1]), renderRepo(arrUsers[2])])
}
getRepo(); 