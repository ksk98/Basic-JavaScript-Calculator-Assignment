const Picture = require('../models/picture')

exports.index = function(req, res) {
    Picture.find().then(function(pictures) {
        res.render('index', {title: "gallery", items: pictures})
    })
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

exports.picture_create_get = function(req, res) {
    res.render("create")
}

exports.picture_create_post = function(req, req) {
    const picture = new Picture(
        {
            nazwa: req.body.nazwa,
            rozmiar: req.body.rozmiar,
        }
    )

    picture.save().then(() => {
        res.send('add new pic')
    }).catch(err => {
        console.log(err)
    })
}

console.log('controller ready')