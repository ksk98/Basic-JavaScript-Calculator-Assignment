const express = require('express')
const router = express.Router()

const picture_controller = require('../controllers/pictureController')

router.get('/', picture_controller.index)

router.get('/pictureList', picture_controller.picture_list)

router.post('/pictureinstance/create', picture_controller.picture_create_post)

router.get('/create', picture_controller.picture_create_get)

router.post('/create', picture_controller.picture.create_post)

router.get('/:id', picture_controller.picture_info)

router.get('/update/:id', picture_controller.picture_update_get)

router.post('update/:id', picture_controller.picture_update_post)

router.post('/delete', picture_controller.picture_delete_post)


console.log('router ready')
module.exports = router