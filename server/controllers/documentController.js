// server\controllers\documentController.js
const Document = require('../models/Document')
const cloudinary = require("cloudinary").v2;
require('dotenv').config();



exports.uploadDocument = async (req, res) => {
  try {
    const { docType } = req.body;
    const file = req.files.document;

    if (!file) {
      return res.status(400).json({ success: false, message: 'No file uploaded' });
    }

    const result = await cloudinary.uploader.upload(file.tempFilePath, {
      resource_type: "auto" ,
      folder:process.env.FOLDER_NAME
    });

    console.log("result" , result)

    const newDocument = new Document({
      docType,
      uri: result.secure_url,
      mime: result.format
    });

    await newDocument.save();

    res.status(201).json({ success: true, document: newDocument });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

