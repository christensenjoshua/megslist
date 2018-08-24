<template>
    <div class="cars">
        <router-link class="btn btn-primary" :to="{name: 'Dashboard'}">Home</router-link>
        <div class="row">
            <div v-if="car._id" class="col-4 item">
                <p>{{car.make}}</p>
                <p>{{car.model}}</p>
                <img :src="car.imgUrl" style="width:100%" />
                <p>{{car.year}}</p>
                <p>{{car.price}}</p>
                <p>{{car.description}}</p>
                <button class="btn btn-success" @click="bid(car)">Bid</button>
                <button class="btn btn-danger" @click="deleteCar(car._id)">Delete</button>
            </div>
        </div>

    </div>
</template>


<script>
    export default {
        name: 'car',
        props: ['id'],
        data() {
            return {
            }
        },
        computed: {
            car() {
                return this.$store.state.cars.find(car => car._id == this.id)
            }
        },
        methods: {
            createCar() {
                this.$store.dispatch("addCar", this.car)
                this.car = {}
            },
            bid(car) {
                car.price += 100
                this.$store.dispatch('editCar', car)
            },
            deleteCar(id) {
                this.$store.dispatch("removeCar", id)
            }
        }
    }
</script>


<style scoped>
</style>