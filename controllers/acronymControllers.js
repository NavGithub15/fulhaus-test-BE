const Acronym = require("../models/acronymModels");
const asyncHandler = require("express-async-handler");

// get all acronyms from the database and performs a fuzzy search and pagination
const getAcronym = asyncHandler(async (req, res) => {
    try {
        // extract query parameters from the request object
        const page = parseInt(req.query.page) || 1; // default page is 1
        const limit = parseInt(req.query.limit) || 10; // default limit is 10
        const search = req.query.search; // search term

        // create a query object to find acronyms in the database
        let query = {};

        // if search term is provided, create a regular expression to search for fuzzy matches
        if (search) {
            const regex = new RegExp(search, "i");
            query = { acronym: regex };
        }

        // find acronyms in the database based on the query object and pagination parameters
        const acronyms = await Acronym.find(query)
            .skip((page - 1) * limit)
            .limit(limit);

        // find total count of acronyms in the database based on the query object
        const totalCount = await Acronym.countDocuments(query);

        // set response header to indicate total count of acronyms in the database
        res.set("X-Total-Count", totalCount.toString());

        res.status(200).json(acronyms);
    } catch (error) {
        res.status(500).json({ message: "Failed to get acronyms", error });
    }
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
        res
            .status(201)
            .json({ message: "Acronym created successfully", savedAcronym });
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
