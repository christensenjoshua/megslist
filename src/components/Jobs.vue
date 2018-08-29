<template>
    <div class="jobs">
        <div class="row">
            <div class="col-12">
                <router-link class="btn btn-primary" :to="{name: 'Dashboard'}">Home</router-link>
                <h3>Jobs</h3>
                <form>
                    <div class="form-row">
                        <div class="col">
                            <label class="sr-only" for="company">Company</label>
                            <input type="text" class="form-control" placeholder="Company" name="company" v-model="job.company">
                        </div>
                        <div class="col">
                            <label class="sr-only" for="jobTitle">Title</label>
                            <input type="text" class="form-control" placeholder="Title" name="jobTitle" v-model="job.jobTitle">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col">
                            <label class="sr-only" for="hours">Hours</label>
                            <input type="number" class="form-control" placeholder="Hours" name="hours" v-model="job.hours">
                        </div>
                        <div class="col">
                            <label class="sr-only" for="rate">Rate</label>
                            <input type="number" class="form-control" placeholder="Rate" name="rate" v-model="job.rate">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col">
                            <label class="sr-only" for="description">Description</label>
                            <input type="text" class="form-control" placeholder="Description" name="description" v-model="job.description">
                        </div>
                    </div>
                    <button class="btn btn-primary" type="button" @click="createJob">Create</button>
                </form>
            </div>
            <div class="col-4 item" v-for="(job, index) in jobs">
                <p>{{job.company}}</p>
                <p>{{job.jobTitle}}</p>
                <p>{{job.rate}}</p>
                <p>{{job.description}}</p>
                <button class="btn btn-success" @click="bid(job)">Bid</button>
                <button class="btn btn-danger" @click="deleteJob(job.id)">Delete</button>
            </div>
        </div>

    </div>
</template>


<script>
    export default {
        name: 'jobs',
        data() {
            return {
                job: {}
            }
        },
        computed: {
            jobs() {
                return this.$store.state.jobs
            }
        },
        methods: {
            createJob() {
                this.$store.dispatch('addJob', this.job)
                this.job = {}
            },
            bid(job) {
                job.rate -= 1
                this.$store.dispatch('editJob', job)
            },
            deleteJob(id) {
                this.$store.dispatch('removeJob', id)
            }
        },
        components: {}
    }
</script>


<style scoped>
</style>