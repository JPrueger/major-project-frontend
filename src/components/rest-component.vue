<template>
  <div class="max-w-lg mx-auto relative">
    <pre>
      {{ pdf }}
    </pre>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      allTodos: [],
      // To-do: add object URL from PDF blob response
      pdf: '',
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
          `http://10.0.0.4:8000/alltodos`
        )
        .then((res) => {
          this.allTodos = res.data;
        })
        .catch(() => {
          this.error = true;
        });
    },
    getPDF() {
      axios
        .get(
          // change to used IP here
          `http://10.0.0.4:8000/download-pdf`
        )
        .then((res) => {
          this.pdf = res.data;
        })
        .catch(() => {
          this.error = true;
        });
    },
  },
  /**
   * When page is mounted, getAllTodos() gets called
   */
  mounted() {
    this.getAllTodos();
    this.getPDF();
  },
};
</script>
