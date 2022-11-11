module.exports = {
    listImages,
    createImage,
    readImage,
    updateImage,
    deleteImage
};

const testData = {
    "0123456789abcd": {
        id: "0123456789abcd",
        title: "Testowy obrazek",
        description: "Opis do obrazka",
        date: "2017-11-09T10:20:00.214Z",
        path: "/library/images/",
        size: 1024
    }
};

const { v4: uuidv4 } = require('uuid');

function listImages(req, res, next) {
    const out = []
    for (let elem in testData) {
        out.push({
            id: testData[elem].id,
            title: testData[elem].title,
            path: testData[elem].path
        })
    }

    res.json({
        images: out
    });
}

function createImage(req, res, next) {
    const image = {
        id: uuidv4(),
        title: req.body.name,
        description: req.body.description,
        date: new Date().toISOString(),
        path: "/library/images/",
        size: (new TextEncoder().encode(req.body.upFile)).length
    }

    testData[image.id] = image
    res.json(image);
}

function readImage(req, res, next) {
    res.json(testData);
}

function updateImage(req,res,next) {
    res.json();
}

function deleteImage(req, res, next) {
    res.json();
}