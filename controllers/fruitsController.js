const express = require('express')
const router = express.Router()
const Fruit = require('../models/fruit');


// Seed Route //
router.get("/seed", async (req, res) => {
    try {
      await fruit.create([
        {
            name:'grapefruit',
            color:'pink',
            readyToEat:true
        },
        {
            name:'grape',
            color:'purple',
            readyToEat:false
        },
        {
            name:'kiwi',
            color:'green',
            readyToEat:true
        },
    ])
        res.redirect("/fruits")
    } catch (err) {
        res.status(400).send(err)
    }  
})
  
  
  // I.N.D.U.C.E.S
  // ==============
  
  // Index
  router.get('/', async (req, res) => {
    console.log('Index Controller Func. running...');
    try {
      const foundFruit = await Fruit.find({}) //find method left empty to receive all data, no filtering
      res.status(200).render('fruits/Index', { fruits:
      foundFruit });
    } catch (err) {
      res.status(400).send(err)
    }
  });
  
  // New // renders a form to create a new fruit
  router.get('/new', (req, res) => {
    res.render('fruits/New');
  });
  
  // Delete // receives the id of the fruit document and deletes it.  After that it will redirect back to the Index page.
  router.delete('/:id', async (req, res) => {
    try {
      await Fruit.findByIdAndDelete(req.params.id); //grabbing _id from params, it is given value on the Index.jsx page (ln. 27(template literal))
      res.redirect('/fruits')
    } catch (err) {
      res.status(400).send(err)
    }
  })
  
  // Update (PUT) // 
  router.put('/:id', async (req, res) => {
    try {
      req.body.readyToEat = req.body.readyToEat === 'on'; //making that a boolean value to match schema
      const updatedFruit = await Fruit.findByIdAndUpdate(req.params.id, req.body, { new: true}) // need third argument (new: true) to prevent a delay in the update
                                                      // id grabbed from the url, check ln 14 on Edit.jsx
      console.log(updatedFruit)
      // redirect to the fruit's specific page
      res.redirect(`/fruits/${req.params.id}`)
    } catch (err) {
      res.status(400).send(err)
    }
  })
  
  
  // Create // recieves info from new route to then create a new fruit w/ it
  router.post('/', async (req, res) => {
    try {
      req.body.readyToEat = req.body.readyToEat === 'on';
    const newFruit = await Fruit.create(req.body);
    console.log(newFruit)
    //console.log(fruits);
    // redirect is making a GET request to whatever path you specify
    res.redirect('/fruits');
    } catch (err) {
      res.status(400).send(err)
    }
  });
  
  // Edit // receives the id of the fruit to move to a new route with for editing.
  router.get('/:id/edit', async (req, res) => {
    try {
      // finding the document that we are about to edit, giving the Edit.jsx the document found through props.
      const foundFruit = await Fruit.findById(req.params.id)
      res.render("fruits/Edit", {
        fruit: foundFruit
      })
    } catch(err) {
      res.status(400).send(err)
  
    }
  })
  
  // Show
  router.get('/:id', async (req, res) => {
    try {
      const foundFruit = await Fruit.findById(req.params.id) //accesses URL parameter (:id), not database property
      res.render('fruits/Show', {
        fruit: foundFruit,
      })
    } catch (err) {
      res.status(400).send(err)
    }
  });

  module.exports = router