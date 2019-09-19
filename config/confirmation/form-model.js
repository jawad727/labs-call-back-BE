require('dotenv').config();

const knex = require('knex')

const Twitter = require('twitter');

const client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

const knexConfig = {
    client: 'sqlite3',
    connection: {
        filename: './data/CallComplain.db3'
    },
    useNullAsDefault: true
};

const db = knex(knexConfig);

module.exports = {
    getPosts,
    getPostByUser,
    addPost,
    postTweet,
    updatePost
};

function getPosts() {
    return db('form');
}

function getPostByUser(id) {
    return db('form')
      .where({ UID: id })
      
  }

function getByID(id) {
    return db('form')
      .where({ id: id })
      .first();
  }

function addPost(post) {
    return db('form')
    .insert(post)
    .then(ids => {
      return getByID(ids[0])
    });
}

function postTweet(tweets) { 
    client.post('statuses/update', tweets)
    .then(tweet => {
        console.log(tweet)
    })
    .catch(error => {
        console.log(error)
})
}

function updatePost(id, body) {
        return db('form')
            .where({id: id})
            .first()
            .update(body)
            .then(count => {
                if(count > 0){
                    return db('form')
                    .where({id: id})
                    .first()
                } else {
                    return null
                }
            })
    }