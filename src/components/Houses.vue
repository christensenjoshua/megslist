<template>
    <div class="houses">
        <div class="row">
            <div class="col-12">
                <router-link class="btn btn-primary" :to="{name: 'Dashboard'}">Home</router-link>
                <h3>Houses</h3>
                <form>
                    <div class="form-row">
                        <div class="col">
                            <label class="sr-only" for="bedrooms">Bedrooms</label>
                            <input type="number" class="form-control" placeholder="Bedrooms" name="bedrooms" v-model="house.bedrooms">
                        </div>
                        <div class="col">
                            <label class="sr-only" for="bathrooms">Bathrooms</label>
                            <input type="number" class="form-control" placeholder="Bathrooms" name="bathrooms" v-model="house.bathrooms">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col">
                            <label class="sr-only" for="imgUrl">Image URL</label>
                            <input type="text" class="form-control" placeholder="Image URL" name="imgUrl" v-model="house.imgUrl">
                        </div>
                        <div class="col">
                            <label class="sr-only" for="levels">Levels</label>
                            <input type="number" class="form-control" placeholder="Levels" name="levels" v-model="house.levels">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col">
                            <label class="sr-only" for="year">Year</label>
                            <input type="number" class="form-control" placeholder="Year" name="year" v-model="house.year">
                        </div>
                        <div class="col">
                            <label class="sr-only" for="price">Price</label>
                            <input type="number" class="form-control" placeholder="Price" name="price" v-model="house.price">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col">
                            <label class="sr-only" for="description">Description</label>
                            <input type="text" class="form-control" placeholder="Description" name="description" v-model="house.description">
                        </div>
                    </div>
                    <button class="btn btn-primary" type="button" @click="createHouse">Create</button>
                </form>
            </div>
            <div class="col-4 item" v-for="(house, index) in houses">
                <p>{{house.bedrooms}}</p>
                <p>{{house.bathrooms}}</p>
                <img :src="house.imgUrl" style="width:100%" />
                <p>{{house.levels}}</p>
                <p>{{house.years}}</p>
                <p>{{house.price}}</p>
                <p>{{house.description}}</p>
                <button class="btn btn-success" @click="bid(house)">Bid</button>
                <button class="btn btn-danger" @click="deleteHouse(house._id)">Delete</button>
            </div>
        </div>

    </div>
</template>


<script>
    export default {
        name: 'houses',
        data() {
            return {
                house: {}
            }
        },
        computed: {
            houses() {
                return this.$store.state.houses
            }
        },
        methods: {
            createHouse() {
                this.$store.dispatch('addHouse', this.house)
                this.house = {}
            },
            bid(house) {
                house.price += 1000
                this.$store.dispatch('editHouse', house)
            },
            deleteHouse(id) {
                this.$store.dispatch('removeHouse', id)
            }
        },
        components: {}
    }
</script>


<style scoped>
</style>