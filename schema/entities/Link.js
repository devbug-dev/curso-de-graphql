const LinkDef = `
# represta un link
type Link{
    # el id del link
    id:ID!
    url:String!
    description:String! @deprecated(reason:"ya no se usa")
}
`;
module.exports = LinkDef;
