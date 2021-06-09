const { ApolloServer, gql } = require("apollo-server-lambda")
const faunadb = require("faunadb")
q = faunadb.query
axios = require("axios"),
  require("dotenv").config()

const client = new faunadb.Client({
  secret: 'fnAEKSVO8TACCgR-RESNyH1H0R9etSjSkceYEEzm',
})

const typeDefs = gql`
  type Query {
    getAllLollies: [Lolly!]
    getLollyByPath(lollyPath: String!): Lolly
  }
  type Lolly {
    recipientName: String!
    sendersName: String!
    message: String!
    flavorTop: String!
    flavorMid: String!
    flavorBot: String!
    lollyPath: String!
  }
  type Mutation {
    createLolly(
      recipientName: String!
      sendersName: String!
      message: String!
      flavorTop: String!
      flavorMid: String!
      flavorBot: String!
      lollyPath: String!
    ): Lolly
  }
`

const resolvers = {
  Query: {
    getAllLollies: async () => {
      var result = await client.query(
        q.Map(
          q.Paginate(q.Documents(q.Collection("lolly"))),
          q.Lambda(x => q.Get(x))
        )
      )

      return result.data.map(d => {
        return {
          recipientName: d.data.recipientName,
          sendersName: d.data.sendersName,
          flavorTop: d.data.flavorTop,
          flavorMid: d.data.flavorMid,
          flavorBot: d.data.flavorBot,
          message: d.data.message,
          lollyPath: d.data.lollyPath,
        }
      })
    },
    getLollyByPath: async (_, { lollyPath }) => {
      try {
        console.log(lollyPath)
        var result = await client.query(
          q.Get(q.Match(q.Index("lolly_by_slug"), lollyPath))
        )
        return result.data
      } catch (e) {
        return e.toString()
      }
    },
  },
  Mutation: {
    createLolly: async (_, args) => {
      try {
        const result = await client.query(
          q.Create(q.Collection("lolly"), {
            data: args,
          })
        )
        axios
          .post("https://api.netlify.com/build_hooks/60b0bfd7f36a24d0d2514763")
          .then(function (response) {
            console.log(response)
          })
          .catch(function (error) {
            console.error(error)
          })

        return result.data
      } catch (error) {
        return error.toString()
      }
    },
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})
const handler = server.createHandler();

module.exports = { handler };