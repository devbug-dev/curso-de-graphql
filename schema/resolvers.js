const links = [
  {
    id: 1,
    url: 'httssddsfsfd',
    description: 'bla vla'
  },
  {
    id: 2,
    url: 'httssddsfsfd',
    description: 'bla vla'
  },
  {
    id: 3,
    url: 'httssddsfsfd',
    description: 'bla vla'
  }
];

const resolvers = {
  Query: {
    allLinks: () => links
  }
};
module.exports = resolvers;
