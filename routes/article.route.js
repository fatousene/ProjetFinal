const router = require('express').Router();
const contoller = require('../controllers/article.controller');

router.get('/all-article', contoller.allArticle);
router.post('/add-article', contoller.AddArticle);
router.delete('/delete-article/:id', contoller.deleteArticle);
router.put('/update-article/:id', contoller.updateArticle);

module.exports = router;