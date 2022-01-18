function getAdmins(map){
    let admin = [];
    for([key, value] of map){
        if(value === 'Admin'){
            admin.push(key); 
        }
    }
    return admin;
}

const usuarios = new Map();

usuarios.set('Marcos', 'Admin');
usuarios.set('Vitor', 'Admin');
usuarios.set('Robson', 'User');
usuarios.set('Maria', 'User');

console.log(getAdmins(usuarios));