const Acronym = require("../models/acronymModels");
const asyncHandler = require("express-async-handler");

// gets the acronyms from the database
const getAcronym = asyncHandler(async (req, res) => {
  const acronyms = await Acronym.find({});
  res.json(acronyms);
});

// gets the acronym by id
const getAcronymById = asyncHandler(async (req, res) => {
  try {
    const acronym = await Acronym.findById(req.params.acronymID);

    // statement to check if the acronym with Id exists in the database
    if (!acronym) {
      res.status(404).json({ message: "Acronym not found" });
    } else {
      res.status(200).json(acronym);
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to get acronym", error });
  }
});

// creates a new acronym and saves it to the database
const createAcronym = asyncHandler(async (req, res) => {
  const newAcronym = new Acronym(req.body);
  try {
    const savedAcronym = await newAcronym.save();
    res.status(201).json({message: "Acronym created successfully", savedAcronym});
  } catch (error) {
    res.status(500).json({ message: "Failed to create acronym", error });
  }
});

// updates an existing acronym and saves it to the database
const updateAcronymById = asyncHandler(async (req, res) => {
  try {
    const acronym = await Acronym.findByIdAndUpdate(req.params.acronymID);

    // statement to check if the acronym with Id exists in the database
    if (!acronym) {
      res.status(404).json({ message: "Acronym not found" });
    } else {
      acronym.acronym = req.body.acronym || acronym.acronym;
      acronym.definition = req.body.definition || acronym.definition;
      const updatedAcronym = await acronym.save();
      res.status(200).json({ message: "Acronym updated", updatedAcronym });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to update acronym", error });
  }
});

// deletes an existing acronym from the database
const deleteAcronymById = asyncHandler(async (req, res) => {
  try {
    const acronym = await Acronym.findByIdAndRemove(req.params.acronymID);

    // statement to check if the acronym with Id exists in the database
    if (!acronym) {
      res.status(404).json({ message: "Acronym not found" });
    } else {
      res.json({ message: "Acronym deleted successfully" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error deleting acronym" });
  }
});

module.exports = {
  getAcronym,
  createAcronym,
  getAcronymById,
  updateAcronymById,
  deleteAcronymById,
};
