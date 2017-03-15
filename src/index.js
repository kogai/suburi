// @flow

type Person = {
  name: string;
};

function greet (person: Person): string {
  return 'Hello ' + person.name;
}

let p: any = { name: 0 };

console.log(greet({name: 'Alice'}));
console.log(greet(p));