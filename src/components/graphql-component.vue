<template>
  <div class="max-w-lg mx-auto relative">
    <pre>
      {{ todos }}
    </pre>
  </div>
</template>
<script>
import { GET_ALL_TODOS_QUERY } from '../graphql/queries/allTodos'

export default {
  data() {
    return {
      todos: [],
    };
  },
  async mounted () {
    this.todos = await this.$apollo.query({ query: GET_ALL_TODOS_QUERY })
  },
};
</script>
