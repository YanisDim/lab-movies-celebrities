// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const CelebrityModel = require("../models/Celebrity.model");
const MovieModel = require("../models/Movie.model");

router.get("/movies", (req, res, next) => {
  MovieModel.find()
    .then((movies) => {
      res.render("movies/movies", { movies });
    })
    .then(() => {
      console.log("movies rendered");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/movies/create", (req, res, next) => {
  CelebrityModel.find()
    .then((celebs) => {
      res.render("movies/new-movie.hbs", { celebs });
    })
    .then(() => {
      console.log("movie list for select rendered");
    })
    .catch((err) => {
      console.log(error);
    });
});

router.post("/movies/create", (req, res, next) => {
  const { title, genre, plot, cast } = req.body;
  MovieModel.create({ title, genre, plot, cast })
    .then(() => {
      res.redirect("/movies");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/movies/:id", (req, res, next) => {
  MovieModel.findById(req.params.id)
    .populate("cast")
    .then((movie) => {
      res.render("movies/movie-details", { movie });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/movies/:id/edit", (req, res, next) => {
  MovieModel.findById(req.params.id)
    .populate('cast')
    .then((movie) => {
      CelebrityModel.find()
      .then((celebs) => {
        res.render('movies/edit-movie', {movie, celebs})
      })
    .catch((err) => {console.log(err)});
})
});

router.post("/movies/:id/edit", (req, res, next) =>{
  const{title, genre, plot, cast} = req.body
  .then((result) => {
  res.redirect('/movies')
}).catch((err) => {
  console.log(err)
});
})

router.post("/movies/:id/delete", (req, res, next) => {
  MovieModel.findByIdAndDelete(req.params.id)
    .then(() => {
      res.redirect("/movies");
    })
    .catch((err) => {
      console.log(`couldn't delete`);
      res.redirect("back");
    });
});

module.exports = router;
