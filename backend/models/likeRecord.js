const knex = require('../database/knex')

const LIKERECORD_TABLE = 'likeRecord'

const createLikeRecord = async (liked_nft, liked_user_id) => { 
    const query = knex(LIKERECORD_TABLE).insert({ liked_nft, liked_user_id });
    const result = await query;
    return result;
}

module.exports = { 
    createLikeRecord, 

}