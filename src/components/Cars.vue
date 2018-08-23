<template>
    <div class="cars">
        <div class="row">
            <div class="col-12">
                <h3>Cars</h3>
                <form>
                    <div class="form-row">
                        <div class="col">
                            <label class="sr-only" for="make">Make</label>
                            <input type="text" class="form-control" placeholder="Make" name="make" v-model="car.make">
                        </div>
                        <div class="col">
                            <label class="sr-only" for="model">Model</label>
                            <input type="text" class="form-control" placeholder="Model" name="model" v-model="car.model">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col">
                            <label class="sr-only" for="imgUrl">Image URL</label>
                            <input type="text" class="form-control" placeholder="Image URL" name="imgUrl" v-model="car.imgUrl">
                        </div>
                        <div class="col">
                            <label class="sr-only" for="year">Year</label>
                            <input type="number" class="form-control" placeholder="Year" name="year" v-model="car.year">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col">
                            <label class="sr-only" for="price">Price</label>
                            <input type="number" class="form-control" placeholder="Price" name="price" v-model="car.price">
                        </div>
                        <div class="col">
                            <label class="sr-only" for="description">Description</label>
                            <input type="text" class="form-control" placeholder="Description" name="description" v-model="car.description">
                        </div>
                    </div>
                    <button class="btn btn-primary" type="button" @click="createCar">Create</button>
                </form>
            </div>
            <div class="col-4" v-for="(car, index) in cars">
                <p>{{car.make}}</p>
                <p>{{car.model}}</p>
                <img :src="car.imgUrl" style="width:100%" />
                <p>{{car.year}}</p>
                <p>{{car.price}}</p>
                <p>{{car.description}}</p>
                <button class="btn btn-danger" @click="deleteCar(index)">Delete</button>
            </div>
        </div>

    </div>
</template>


<script>
    export default {
        name: 'cars',
        data() {
            return {
                car: {}
            }
        },
        computed: {
            cars() {
                return this.$store.state.cars
            }
        },
        methods: {
            createCar() {
                this.$store.dispatch("addCar", this.car)
                this.car = {}
            },
            deleteCar(index) {
                this.$store.dispatch("removeCar", index)
            }
        },
        components: {}
    }
</script>


<style scoped>
</style>