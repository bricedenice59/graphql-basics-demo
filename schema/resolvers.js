const { fakeData } = require("../data/fetch");

const resolvers = {
  Query: {
    courses() {
      return fakeData;
    },
  },
};

module.exports = { resolvers };
