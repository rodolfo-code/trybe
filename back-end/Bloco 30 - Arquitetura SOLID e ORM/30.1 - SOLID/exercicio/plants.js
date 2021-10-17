const defaultPlants = [
  {
    id: 1,
    breed: "Bromelia",
    needsSun: false,
    origin: "Argentina",
    size: 102,
    specialCare: {
      waterFrequency: 3,
    },
  },
  {
    id: 2,
    breed: "Orquidea",
    size: 99,
    needsSun: false,
    origin: "Brazil",
  },
];

let createdPlants = defaultPlants.length

const calculateWaterFrequency = (needsSun, size, origin) => {
  return needsSun
    ? size * 0.77 + (origin === "Brazil" ? 8 : 7)
    : (size / 2) * 1.33 + (origin === "Brazil" ? 8 : 7);
}

const initPlant = (id, breed, needsSun, origin, specialCare, size) => {
  const waterFrequency = calculateWaterFrequency(needsSun, size, origin)
  const newPlant = {
    id,
    breed,
    needsSun,
    origin,
    specialCare: {
      waterFrequency,
      ...specialCare,
    },
    size,
  };
  return newPlant;
};

const getPlants = () => {
  return defaultPlants;
};

const getPlantById = (id) => {
  const plants = defaultPlants.find(plant => plant.id == id)
  return plants
};

const savePlants = (plant) => {
  createdPlants++
  const newPlant = initPlant(...plant, createdPlants)
  defaultPlants.push(newPlant)
  return newPlant
};

const removePlantById = (id) => {
  defaultPlants.filter((plant) => plant.id !== id);
  return defaultPlants
};

const editPlant = (plantId, newPlant) => {
  return defaultPlants.map((plant) => {
    if (plant.id == plantId) {
      return newPlant;
    }
    return plant;
  });
};

module.exports = {
  defaultPlants,
  initPlant,
  getPlants,
  getPlantById,
  savePlants,
  removePlantById,
  editPlant
}