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
                <p>{{house.year}}</p>
                <p>{{house.price}}</p>
                <p>{{house.description}}</p>
                <button class="btn btn-success" @click="bid(house)">Bid</button>
                <button class="btn btn-danger" @click="deleteHouse(house.id)">Delete</button>
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#editModal" @click="changeHouse(house)">
                    Edit
                </button>
            </div>
            <div class="modal" id="editModal" tabindex="-1" role="dialog">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Edit House</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="form-row">
                                    <div class="col">
                                        <label class="sr-only" for="bedrooms">Bedrooms</label>
                                        <input type="number" class="form-control" placeholder="Bedrooms" name="bedrooms" v-model="aHouse.bedrooms">
                                    </div>
                                    <div class="col">
                                        <label class="sr-only" for="bathrooms">Bathrooms</label>
                                        <input type="number" class="form-control" placeholder="Bathrooms" name="bathrooms" v-model="aHouse.bathrooms">
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="col">
                                        <label class="sr-only" for="imgUrl">Image URL</label>
                                        <input type="text" class="form-control" placeholder="Image URL" name="imgUrl" v-model="aHouse.imgUrl">
                                    </div>
                                    <div class="col">
                                        <label class="sr-only" for="levels">Levels</label>
                                        <input type="number" class="form-control" placeholder="Levels" name="levels" v-model="aHouse.levels">
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="col">
                                        <label class="sr-only" for="year">Year</label>
                                        <input type="number" class="form-control" placeholder="Year" name="year" v-model="aHouse.year">
                                    </div>
                                    <div class="col">
                                        <label class="sr-only" for="price">Price</label>
                                        <input type="number" class="form-control" placeholder="Price" name="price" v-model="aHouse.price">
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="col">
                                        <label class="sr-only" for="description">Description</label>
                                        <input type="text" class="form-control" placeholder="Description" name="description" v-model="aHouse.description">
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary" @click="editHouse(aHouse)" data-dismiss="modal">Save
                                changes
                            </button>
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'houses',
        data() {
            return {
                house: {},
                aHouse: {}
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
            editHouse(aHouse) {
                this.$store.dispatch('editHouse', aHouse)
            },
            deleteHouse(id) {
                this.$store.dispatch('removeHouse', id)
            },
            changeHouse(house) {
                let keys = Object.keys(house)
                let copyHouse = {}
                keys.forEach(key => {
                    copyHouse[key] = house[key]
                })
                this.aHouse = copyHouse
            }
        },
        components: {}
    }
</script>


<style scoped>
</style>