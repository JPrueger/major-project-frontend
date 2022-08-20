<template>
  <div class="max-w-lg mx-auto relative">
    <pre>
      {{ allTodos }}
    </pre>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      allTodos: [],
    };
  },
  methods: {
    /**
     * GET Request for all todos
     */
    getAllTodos() {
      axios
        .get(
          // change to used IP here
          `http://10.0.0.4:8000/all-todos`
        )
        .then((res) => {
          this.allTodos = res.data;
        })
    },
  },
  /**
   * When page is mounted, getAllTodos() gets called
   */
  mounted() {
    this.getAllTodos();
  },
};
</script>
