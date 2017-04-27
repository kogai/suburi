// @flow

const p = s => new Promise(resolve => {
  setTimeout(()=> {
    resolve(s + " is async")
  }, 500)
})

const tryAsync = async s => {
  const pp = await p(s)
  console.log("start");
  console.log(pp);
}

tryAsync('this')
console.log('ok?');