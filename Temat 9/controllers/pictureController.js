const Picture = require('../models/picture')

exports.index = function(req, res) {
    res.send('NOT IMPLEMENTED: Site Home Page')
}

exports.picture_list = function(req, res) {
    let picturesList

    const getPictures = async () => {
        try {
            picturesList = await Picture.find()
            console.log(picturesList)
            res.send(picturesList)
        } catch (err) {
            console.log(err)
        }
    }

    getPictures()
}

exports.picture_create_post = function(req, res) {
    const picture = new Picture({name: 'foto_12', path: './images', size: 2345})
    picture.save().then(() => {
        console.log(picture)
        res.send('add new pic')
    }).catch(err => {
        console.log(err)
    })
}

console.log('controller ready')