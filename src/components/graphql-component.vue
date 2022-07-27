<template>
  <div class="max-w-lg mx-auto relative">
    <pre>
      <!-- {{ todos.data.allTodos.nodes }} -->
      <!-- document: -->
      {{ document }}
      <!-- {{ todos }} -->
    </pre>
  </div>
</template>
<script>
import { GET_ALL_TODOS_QUERY } from '../graphql/queries/allTodos'

export default {
  data() {
    return {
      todos: [],
      document: '',
    };
  },
  async mounted () {
    this.loading = true
    this.todos = await this.$apollo.query({ query: GET_ALL_TODOS_QUERY })
    this.loading = false
    console.log(this.todos.data.allTodos.nodes[0].document);
    const linkSource = `data:application/pdf;base64,${this.todos.data.allTodos.nodes[0].document}`;
    const downloadLink = document.createElement("a");
    const fileName = "abc.pdf";
    downloadLink.href = linkSource;
    downloadLink.download = fileName;
    downloadLink.click();
  },
};
</script>
