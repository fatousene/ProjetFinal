const Article =  require('../models/article.model');

//GET :  RETURN ALL Articles 
module.exports.allArticle = async (req, res) => {
    const articles = await Article.find();
    res.status(200).json(articles);
};
// POST :  ADD A NEW Article TO THE DATABASE 
module.exports.AddArticle = async (req, res) => {
    const { image, title, price } = req.body;
       const article = await Article.create({
        image: image[0].base64,
        title,
        price
      })
      console.log(article)
   res.status(201).json({
       article:"article ajouté"
    });
};

// DELETE : REMOVE A Article BY ID
module.exports.deleteArticle = async (req, res) => {
    await Article.remove({_id: req.params.id}).exec();
    res.status(200).send({message: "supprimer"})
}
//PUT : EDIT A Article BY ID
module.exports.updateArticle = async (req, res) => {
    await Article.findByIdAndUpdate(
        {_id: req.params.id},
    {
        $set: {
            image: req.body.image,
            title: req.body.title,
            price:req.body.price
              }
    },
    {new: true},
    (err, data) => {
        if(!err) res.status(200).send(data);
        else res.status(500).send({err});
    }
    )  
}