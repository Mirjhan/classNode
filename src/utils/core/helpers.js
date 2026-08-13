const getPromise = (promise) =>
  promise.then(data => {
    return [null, data]
  }).catch(err => {
    console.log('Error:')
    console.log(err)
    return [err]
  })

module.exports = {
    getPromise,
}