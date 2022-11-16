const { v4: uuidv4 } = require('uuid');
const model = require(__dirname + "/../models/models.js");

module.exports = {
    listImages,
    createImage,
    readImage,
    updateImage,
    deleteImage
};

const db = {
    "ff086076-37bb-468b-9316-1a65c60e07e8": {
        id: "ff086076-37bb-468b-9316-1a65c60e07e8",
        title: "Testowy obrazek",
        description: "Opis do obrazka",
        date: "2017-11-09T10:20:00.214Z",
        path: "/library/images/",
        size: 1024
    }
};

function listImages(req, res) {
    const out = []
    for (let elem in db) {
        out.push({
            id: db[elem].id,
            title: db[elem].title,
            path: db[elem].path
        })
    }

    res.json({
        images: out
    });
}

function createImage(req, res) {
    const image = {
        id: uuidv4(),
        title: req.body.name,
        description: req.body.description,
        date: new Date().toISOString(),
        path: "/library/images/",
        size: (new TextEncoder().encode(req.body.upFile)).length
    }

    db[image.id] = image
    res.json(image);
}

function readImage(req, res) {
    const id = req.params.id
    const out = db[id]

    if (out) res.json(out)
    else {
        res.status(404)
        res.send()
    }
}

function updateImage(req, res) {
    const id = req.params.id
    const out = db[id]

    if (out) {
        out.title = req.body.title
        out.description = req.body.description
        out.date = req.body.date
    } else createImage(req, res)

    res.json(db[id]);
}

function deleteImage(req, res) {
    const id = req.params.id
    if (id in db) {
        delete db[id]
        res.json({id: id, status: true})
    } else res.json({id: id, status: false})
}