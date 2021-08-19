const express = require('express')
const app = express()

const plantsModule = require('./plants')

app.use(express.json())


app.get('/plant', (req, res) => {
  const plants = plantsModule.getPlants()

  res.json(plants)
})

app.get('/plant/:id', (req, res) => {
  const {id} = req.params
  const plants = plantsModule.getPlantById(id)
  res.json(plants)
})

app.post('/plant', (req, res) => {
  const plants = plantsModule.savePlants(req.body)
  res.json(plants)
})

app.delete('/plant/:id', (req, res) => {
  const {id} = req.params
  const plants = plantsModule.removePlantById(id)
  res.json(plants)
})

const getPlantsThatNeedsSunWithId = (id) => {
  const filteredPlants = defaultPlants.filter((plant) => {
    if (plant.needsSun && plant.id === id) {
      if (plant.specialCare.waterFrequency > 2) {
        return plant;
      }
    }
  });
  localStorage.setItem("plants", JSON.stringify(filteredPlants));
  return filteredPlants;
};

app.post("/plant/:id", (req, res) => {
  const { id } = req.params;
  const newPlant = req.body.plant;
  const plant = plantsModule.editPlant(id, newPlant);
  res.send(plant);
});


app.listen(3000, function () {
  console.log("Ouvindo a porta 3001!");
});