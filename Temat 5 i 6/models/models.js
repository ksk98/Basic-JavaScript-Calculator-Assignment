const thinkAgain = require('thinkagain')();

const ModelImage = thinkAgain.createModel('ModelImage', {
    type: 'object',
    properties: {
        id: {type: 'string'},
        title: {type: 'string'},
        description: {type: 'string'},
        date: {type: 'string', format: 'date-time'},
        path: {type: 'string'},
        size: {type: 'integer'},
        idGallery: {type: 'string'}
    },
    required: ['title', 'path']
})

const ModelGallery = thinkAgain.createModel('ModelGallery', {
    type: 'object',
    properties: {
        id: {type: 'string'},
        title: {type: 'string'},
        description: {type: 'string'},
        dateTime: {type: 'string', format: 'date-time'},
        visibility: {type: 'string', enum: ['public', 'private']},
        tags: {
            type: 'array', 'items': {
                type: 'string'
            }
        }
    },
    required: ['title', 'visibility']
})

ModelImage.belongsTo(ModelGallery, 'gallery', 'idGallery', 'id');

exports.ModelImage = ModelImage
exports.ModelGallery = ModelGallery