import { ApolloClient, ApolloLink, InMemoryCache } from "@apollo/client";
import { RestLink } from "apollo-link-rest";


const restLink = new RestLink({
  uri: 'http://localhost:6969/graphql',
});
 
// Configure the ApolloClient with the default cache and RestLink
export const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache(),
});