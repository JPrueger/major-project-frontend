import Vue from 'vue'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'

const httpLink = new HttpLink({
    // change to used IP here
	uri: "http://10.0.0.4:5000/graphql",
});

// create the apollo client
export const apolloClient = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
    connectToDevTools: true
})

// install the Vue plugin
Vue.use(VueApollo)
export const apolloProvider = new VueApollo({
    defaultClient: apolloClient
})