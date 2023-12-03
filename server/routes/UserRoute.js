const router = require("express").Router();
let users = require("../models/users");

router.route('/').get((req, res) => {
  users
    .find()
    .then((user) => res.status(200).json(user))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const age = req.body.age;
    const email = req.body.email;
    const phone = req.body.phone;
    const address = req.body.address;

    const newUser = new users({
      name,
      age,
      email,
      phone,
      address,
    });

    newUser
      .save()
      .then(() => res.json("User added"))
      .catch((err) => res.status(400).json("Error: " + err));
  });

router.route('/:id').get((req, res) => {
    users
      .findById(req.params.id)
      .then((user) => res.status(200).json(user))
      .catch((err) => res.status(400).json("Error: " + err));
  });

router.route('/update/:id').post((req, res) => {
    users
      .findById(req.params.id)
      .then((user) => {
        user.name = req.body.name;
        user.age = Number(req.body.age);
        user.email = req.body.email;
        user.phone = Number(req.body.phone);
        user.address = req.body.address;

        user
          .save()
          .then(() => res.status(200).json("User updated"))
          .catch((err) => res.status(400).json("Error: " + err));
      })
      .catch((err) => res.status(400).json("Error: " + err));
  });

router.route('/:id').delete((req, res) => {
    users
      .findByIdAndDelete(req.params.id)
      .then(() => res.status(200).json("User deleted"))
      .catch((err) => res.status(400).json("Error: " + err));
  });

module.exports = router