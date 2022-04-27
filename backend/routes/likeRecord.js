const express = require('express');
const { query } = require('../db');
const pool = require('../db')

const router = express.Router();

// POST /like
// router.post('/like', async (req, res, next) => {
//     try {
//         const body = req.body;
//         console.log(body);
  
//         const result = await req.models.like.createLikeRecord(body.name, body.image_url, body.price, body.description
//           , body.creator_id, body.seller_id, body.owner_id, body.for_sale);
//         res.status(201).json(result);
  
//     } catch (err) {
//         console.error("Failed to create new NFT: ", err);
//         // res.status(500).
//     }
//   })