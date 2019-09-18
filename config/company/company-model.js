require('dotenv').config();
const db = require('../../data/dbConfig');

module.exports = {
    get: function() {
        return db('company')
    },
    getById: function(id) {
        return db('company')
                .where({ id })
                .first()
                .then(project => {
                    console.log('getById', company)
                    if (project) {
                        return getByProject(id).then(roles => {
                            project.roles = roles;
                            return project;
                        });
                    } else {
                        return null;
                    }
                })
    },
    insert: function(project) {
        return db('company')
        .insert(project, 'id')
        .then(([id]) => this.get(id));
    },
    update: function(id, body){
        return db('company')
            .where({id})
            .first()
            .update(body)
            .then(count => {
                if(count > 0){
                    return db('company')
                    .where({id})
                    .first()
                } else {
                    return null
                }
            })
    },
    delete: function(id){
        return db('company')
            .where({id})
            .del()
    }
}