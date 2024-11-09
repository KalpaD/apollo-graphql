import {ApolloServer} from "@apollo/server";
import {startStandaloneServer} from "@apollo/server/standalone";
import {readFileSync} from "fs";
import path from "path";
import {gql} from "graphql-tag"
import {DocumentNode} from "graphql";
import {resolvers} from "./resolvers";
import {ListingAPI} from "./datasources/listing-api";


const typeDefs: DocumentNode = gql(
    readFileSync(path.resolve(__dirname, "./schema.graphql"), {
        encoding: "utf-8",
    })
);

async function startApolloServer() {
    const server = new ApolloServer({typeDefs, resolvers});

    const {url} = await startStandaloneServer(server, {
        context: async () => {
            // To take advantage of the RESTDataSource's caching capabilities,
            // we need to pass in the server's cache to our instance of ListingAPI.
            const {cache} = server;
            return {
                dataSources: {
                    listingAPI: new ListingAPI({cache}),
                },
            };
        },
    });
    console.log(`
    🚀  Server is running!
    📭  Query at ${url}
    `)
}

startApolloServer();





