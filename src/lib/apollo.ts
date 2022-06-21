import { ApolloClient, InMemoryCache } from "@apollo/client"



export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oithxs06cb01xtal9k6lg2/master',
    cache: new InMemoryCache()
})

