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

exports.picture_info = function(req, res) {
    const id = req.param.id
    Picture.findOne({ _id: id }).then(function(pictures) {
        console.log(pictures)
        res.render('show', { item: pictures })
    })
    console.log(req.params)
}

exports.picture_update_post = function (req, res) {
    let picture = {}
    picture.nazwa = req.body.nazwa
    picture.rozmiar = req.body.rozmiar

    const id = req.params.id

    Picture.findByIdAndUpdate(id, picture, function(err, docs) {
        if (err) {
            console.log(err)
        } else {
            res.redirect('/pictures')
        }
    })
}

exports.picture_update_get = function (req, res) {
    const id = req.params.id
    let data

    Picture.findOne({ _id: id }).then(function (picture) {
        res.render('edit', { item: picture, id: id })
    })
}

exports.picture_delete_post = function (req, res) {
    id = req.body.id
    console.log(id)
    Picture.findByIdAndDelete(id, function(err, docs) {
        if (err) {
            console.log(err)
        } else {
            res.redirect('/pictures')
        }
    })
}

console.log('controller ready')