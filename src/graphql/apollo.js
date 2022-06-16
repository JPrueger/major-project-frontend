import Vue from 'vue'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'

const httpLink = new HttpLink({
    uri: 'http://10.0.0.2:5000/graphql'
})

// Create the apollo client
export const apolloClient = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
    connectToDevTools: true
})

// Install the Vue plugin

Vue.use(VueApollo)

export const apolloProvider = new VueApollo({
    defaultClient: apolloClient
})