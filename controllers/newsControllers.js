const News = require("../model/newsModel");

const getAllData = async (req, res) => {
    try {
        const newsData = await News.find().sort({ _id: -1 });
        return res.status(200).json(newsData);
    } catch (error) {
        return res.status(400).json({ message: `Something went wrong while fetching data : ${error.message}` });
    }
};

const postData = async (req, res) => {
    const { text, source, category } = req.body;
    try {
        const newData = await News.create({ text, source, category });
        return res.status(200).json(newData);
    } catch (error) {
        return res.status(400).json({ message: `Insert not happen : ${error.message}` })
    }
};

const insertManyData = async (req, res) => {
    const dataArray = req.body;
    try {
        const manyData = await News.insertMany(dataArray);
        return res.status(201).json(manyData);
    } catch (error) {
        return res.status(400).json({ message: `Many data not inserted : ${error.message}` })
    }
}

const deleteAll = async (req, res) => {
    try {
        const deleteAllData = await News.deleteMany({});
        return res.status(200).json({ message: `Delete all Data successfully` });
    } catch (error) {
        return res.status(400).json({ message: "Delete not happen" });
    }
};

const deleteById = async (req, res) => {
    const { id } = req.params;
    try {
        const deleteNews = await News.deleteOne({ _id: id });
        return res.status(200).json({ message: `${id} is delete successfully`, deleteNews })
    } catch (error) {
        return res.status(400).json({ message: `ID not deleted..${error.message}` })
    }
};

const updateInterest = async (req, res) => {
    const { id } = req.params;
    try {
        const updateNewsLike = await News.findByIdAndUpdate({ _id: id }, req.body, { new: true })
        return res.status(200).json({ message: `${id} update Successfully`, updateNewsLike })
    } catch (error) {
        return res.status(400).json({ message: `Likes not increase : ${error.message}` })
    }
}

module.exports = { getAllData, postData, insertManyData, deleteAll, deleteById, updateInterest }