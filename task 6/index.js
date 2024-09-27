const user ={name: "Adam", age:"25"};
console.log(user);
user.gender="male";
console.log(user);
user['height']="165";
console.log(user);
console.log(user.name);
console.log(user['name']);
for(let i=0; i<user.length;i++){
console.log(user[i]);
}
for (let property in user) {
console.log(property + ': ' + user[property]);
}
const info =Object.keys(user);
console.log(info);

const item =Object.values(user);
console.log(item);

const entry =Object.entries(user);
console.log(entry);

const Object1 ={name:"Adam", age:"25"};
const Object2 ={gender:"male"};
const mix =Object.assign(Object1,Object2);
console.log(mix);

const freeze =Object.freeze(mix);
console.log(freeze);

const seal =Object.seal(mix);
console.log(seal);


