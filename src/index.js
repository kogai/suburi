const tryAsync = async s => {
  setTimeout(() => {
    // await console.log(s + 'is await');
  })
  console.log(s + ' is async');
}

tryAsync('this')