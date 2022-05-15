const ENGINE_DB = process.env.ENGINE_DB;

const getProperties = () => {
  const data = {
    nosql: {
      id: '_id'
    },
    psql: {
      id: 'id'
    }
  }
  return data[ENGINE_DB]
}

module.exports = getProperties