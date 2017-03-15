// @flow

type Person = {
  name: string;
};

function greet (person: Person): string {
  return 'Hello ' + person.name;
}

console.log(greet({name: 'Alice'}));
console.log(greet({name: false}));