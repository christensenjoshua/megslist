<template>
  <div class="dashboard">
    <div class="row">
      <div class="col-12">
        <h1>Dashboard</h1>
        <router-link class="btn btn-primary" :to="{name: 'cars'}">Cars</router-link>
        <router-link class="btn btn-primary" :to="{name: 'houses'}">Houses</router-link>
        <router-link class="btn btn-primary" :to="{name: 'jobs'}">Jobs</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import Cars from './Cars'
  import Houses from './Houses'
  import Jobs from './Jobs'
  export default {
    name: 'dashboard',
    data() {
      return {
        showCars: true,
        showHouses: false,
        showJobs: false
      }
    },
    methods: {
      toggleCars() {
        this.showCars = true
        this.showHouses = false
        this.showJobs = false
      },
      toggleHouses() {
        this.showCars = false
        this.showHouses = true
        this.showJobs = false
      },
      toggleJobs() {
        this.showCars = false
        this.showHouses = false
        this.showJobs = true
      }
    },
    components: {
      Cars,
      Houses,
      Jobs
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }
</style>