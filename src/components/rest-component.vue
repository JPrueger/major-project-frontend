<template>
  <div class="max-w-lg mx-auto relative">
    <pre>
      {{ projectUsers }}
    </pre>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      projectUsers: [],
    };
  },
  methods: {
    /**
     * Test request
     */
    getAllUsersForThisProject() {
      axios
        .get(
          // change to used IP here
          `http://192.168.0.115:8000/alltodos`
        )
        .then((res) => {
          this.projectUsers = res.data;
        })
        .catch(() => {
          this.error = true;
        });
    },
  },
  /**
   * When page is mounted, getAllUsersForThisProject() and getAllUsersForThisProject() gets called
   */
  mounted() {
    this.getAllUsersForThisProject();
  },
};
</script>
