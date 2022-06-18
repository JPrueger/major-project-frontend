import Vue from "vue";
import Router from "vue-router";
import GraphQL from "../components/graphql-component.vue";
import REST from "../components/rest-component.vue";

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: "/graphql",
			component: GraphQL,
		},
		{
			path: "/restful",
			component: REST,
		},
	],
});
