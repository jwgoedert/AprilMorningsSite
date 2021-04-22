function createUser(first, last, age, job, image){
    let user = {};
        user.firstName = first;
        user.lastName = last;
        user.age = age;
        user.occupation = job;
        user.image = image;
    return user;
}

let frank = createUser('Frank', 'Lastovica', 32, 'hacker', 'url');
let desiree = createUser('Desiree', 'Collins', 22, 'hacker', 'url');
let joe = createUser('Joe', 'Pino', 19, 'hacker', 'url');
let james = createUser('James', 'Goedert', 35, 'hacker', 'url');
let rafi = createUser('Rafi', 'lePup', 2, 'people manager', 'url');
let pete = createUser('Pete', 'Selting', 8, 'shop manager', 'url');

let userList = [frank, desiree, joe, james, rafi, pete];
let users = document.createElement('ul');
document.getElementById('users').appendChild(users);

for (let i = 0; i < userList.length; i++) {
    console.log(userList[i].firstName);
    let user = document.createElement('li');
    users.appendChild(user);
    user.innerHTML += userList[i].firstName;
}


