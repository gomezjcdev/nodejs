const ENGINE_DB = process.env.ENGINE_DB;

const pathModels = ENGINE_DB === 'nosql' ? "./nosql" : "./psql";

const models = {
    usersModel: require(`${pathModels}/user`),
    tracksModel: require(`${pathModels}/tracks`),
    storageModel: require(`${pathModels}/storage`),
}

module.exports = models;