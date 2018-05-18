// const links = [
//   {
//     id: 1,
//     url: 'httssddsfsfd',
//     description: 'bla vla'
//   },
//   {
//     id: 2,
//     url: 'httssddsfsfd',
//     description: 'bla vla'
//   },
//   {
//     id: 3,
//     url: 'httssddsfsfd',
//     description: 'bla vla'
//   }
// ];
const Link = require('./../models/Link');

const resolvers = {
  Query: {
    allLinks: () => Link.query()
  },
  Mutation: {
    createLink: (_, params) => {
      const newLink = {
        id: 3,
        ...params.link
      };
      return newLink;
    }
  }
};
module.exports = resolvers;
