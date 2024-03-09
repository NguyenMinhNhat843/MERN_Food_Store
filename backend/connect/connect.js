const mongose = require('mongoose')

const connect = async (uri) => {
    await mongose.connect(uri)
        .then(() => console.log('connect successfully!!!'))
        .catch(err => console.log(err))
}

module.exports = connect