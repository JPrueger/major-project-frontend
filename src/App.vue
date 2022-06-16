<template>
  <div class="max-w-lg mx-auto relative">
    <!-- {{ projectUsers }} -->
    <!-- <p>von https://stackabuse.com/building-graphql-apis-with-vue-js-and-apollo-client/: </p> -->
    <pre>
      {{ todos.data.allTodos.nodes }}
    </pre>
  </div>
</template>
<script>
import axios from "axios";
import { GET_ALL_TODOS_QUERY } from './graphql/queries/allTodos'

export default {
  data() {
    return {
      projectUsers: [],
      project_id: 1,
      todos: [],
    };
  },
  async mounted () {
    this.loading = true
    this.todos = await this.$apollo.query({ query: GET_ALL_TODOS_QUERY })
    this.loading = false
  },
  // apollo: {
  //   getAllUsers: {
  //     query: GET_ALL_USERS_QUERY
  //   },
  // },
  methods: {
    /**
     * Test request
     */
    getAllUsersForThisProject() {
      axios
        .get(
            `http://10.0.0.2:8000/user/all-users/`
        )
        .then((res) => {
          this.projectUsers = res.data;
        })
        .catch(() => {
          this.error = true;
        });
    },
  },
  // /**
  //  * When page is mounted, getAllUsersForThisProject() and getAllUsersForThisProject() gets called
  //  */
  // mounted() {
  //   this.getAllUsersForThisProject();
  // },
};
</script>
