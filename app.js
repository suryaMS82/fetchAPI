document.querySelector('.button').addEventListener('click',getText);

document.querySelector('.btn').addEventListener('click',getUsers);
document.querySelector('.submit').addEventListener('click',getAPI);
document.getElementById('addpost').addEventListener('submit',addPost);


function addPost(e){
    e.preventDefault();
    let title= document.getElementById('title').value;
    let body= document.getElementById('body').value;
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'POST',
        headers:{
            'Accept':'application/json. text/plain, */*',
            'content-type':'application/json'
        },
        body:JSON.stringify({title:title,body:body})
    })
    .then((res)=> {
        res.json();
        document.querySelector('.success').innerHTML= "Data has been added to JSON file";
    })
    .then((data)=> console.log(data));

    
}

function getAPI(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res)=> res.json())
    .then((data)=> {
        let outlet="";
        data.forEach((API)=> {
            outlet+=`
            <div class="addeddata">
            <h2> ${API.title}</h2>
            <p> ${API.body}</p> </div>`
        });
        document.querySelector('.app').innerHTML= outlet ;
        console.log(outlet);
    })
    .catch((err)=> console.log(err));
}

function getText(){
    fetch('text.txt')
    .then((res)=> {
        return res.text();
    })
    .then((data)=> {
        document.querySelector('.app').innerHTML= data;
        console.log(data);
    });
}

function getUsers(){
    fetch('content.json')
    .then((res)=> res.json())
    .then((data)=> {
        let output=" ";
        data.forEach((user) => {
            output+=`
            <ul>
                <li>id: ${user.id}</li>
                <li>name: ${user.name}</li>
                <li>username: ${user.username}</li>
                <li>email: ${user.email}</li>
                </ul>
           `
        });
        document.querySelector('.app').innerHTML= output;
    })
    .catch((err)=> console.log(err));
}
