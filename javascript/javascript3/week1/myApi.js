fetch('http://api.icndb.com/jokes/random/3')
.then(response=> response.json())
.then(response=> {
      response.value.forEach(element => {
        const Jsjoke = document.createElement("Jsjoke")
        Jsjoke.innerText= element.joke;
        document.body.appendChild(Jsjoke);
      });
});

//{ "type": "success", "value": [ { "id": 177, "joke": "Chuck Norris once pulled out a single hair from his beard and skewered three men through the heart with it.", "categories": [] }, { "id": 284, "joke": "Chuck Norris' first job was as a paperboy. There were no survivors.", "categories": [] }, { "id": 507, "joke": "Chuck Norris can install iTunes without installing Quicktime.", "categories": ["nerdy"] } ]  }