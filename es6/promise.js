//ES5
function doSecond() {
    console.log('Do second. es5')
  }
  
  function doFirst(callback) {
    setTimeout(function() {
      console.log('Do first.')
  
      callback()
    }, 500)
  }
  
  doFirst(doSecond)

  //ES6 
  let doSecond = () => {
    console.log('Do second.')
  }
  
  let doFirst = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Do first.')
  
      resolve()
    }, 500)
  })
  
  doFirst.then(doSecond)