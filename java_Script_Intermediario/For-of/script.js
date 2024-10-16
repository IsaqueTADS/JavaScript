// for...of itera sobre valores de um objeto interável
let students = ["Isaque", "Hugo", "Lucas"];

for (let student of students) {
  console.log(student);
}

/*let user = {
    name: "Isaque",
    email: "isaque@esutodo.com",
}
//da erro porque objeto não é interavel, ou seja não tem numeração
for ( let sla of user ){
    console.log(sla)
}*/

// agora funciona com um objeto dentro de um array

let user = [
  {
    name: "Isaque",
    email: "isaque@esutodo.com",
  },
];

for (let sla of user) {
  console.log(sla.email)
}
