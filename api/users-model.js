const db = require('../database/dbConfig')


module.exports = {
    add,
    findUsers,
    findUsersBy,
    findBy
}

function add(userBody){
    return db('users')
            .insert(userBody, 'id')
            .then(ids => {
                const [id] = ids;

                return findUsersBy({id})//this will also return the password property, would need a separate find by id method to avoid showing that
            })
}


function findUsers(){
    return db('users')
            .select('id', 'username')
}

function findUsersBy(propertyValue){
    return db('users')
            .select('id', 'username', 'password')
            .where(propertyValue)
            .first()
}

function findBy(propertyValue){
    return db('users')
            .select('id', 'username')
            .where(propertyValue)
            
}