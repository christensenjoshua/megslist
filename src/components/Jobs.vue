<template>
    <div class="jobs">
        <div class="row">
            <div class="col-12">
                <h3>Jobs</h3>
                <form>
                    <div class="form-row">
                        <div class="col">
                            <label class="sr-only" for="company">Company</label>
                            <input type="text" class="form-control" placeholder="Company" name="company" v-model="job.company">
                        </div>
                        <div class="col">
                            <label class="sr-only" for="title">Title</label>
                            <input type="text" class="form-control" placeholder="Title" name="title" v-model="job.title">
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
        </div>

    </div>
</template>


<script>
    export default {
        name: 'jobs',
        data() {
            return {
                jobs: [],
                job: {}
            }
        },
        computed: {},
        methods: {
            createJob() {
                this.jobs.push(this.job),
                    this.job = {}
            }
        },
        components: {}
    }
</script>


<style scoped>
</style>