import { Resolvers } from "./types";

export const resolvers: Resolvers = {
    Query: {
        /**
         * parent:
         * parent is the returned value of the resolver for
         * this field's parent. This will be useful when dealing
         * with resolver chains.
         * args:
         * args is an object that contains all
         * GraphQL arguments that were provided for
         * the field by the GraphQL operation.
         * When querying for a specific item
         * (such as a specific listing instead of all listings),
         * in client-land we'll make a query with an id argument
         * that will be accessible via this args parameter in server-land.
         * contextValue:
         * contextValue is an object shared across all resolvers
         * that are executing for a particular operation.
         * The resolver needs this argument to share state,
         * like authentication information,
         * a database connection, or in our case the RESTDataSource.
         * info:
         * info contains information about the operation's
         * execution state, including the field name,
         * the path to the field from the root, and more.
         * It's not used as frequently as the others,
         * but it can be useful for more advanced actions
         * like setting cache policies at the resolver level.
         */
        featuredListings: (_: any, __: any, {dataSources}: any) => {
            return dataSources.listingAPI.getFeaturedListings();
        },
    }
}