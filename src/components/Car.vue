<template>
    <div class="cars">
        <router-link class="btn btn-primary" :to="{name: 'Dashboard'}">Home</router-link>
        <router-link class="btn btn-primary" :to="{name: 'cars'}">Cars</router-link>
        <div class="row">
            <div v-if="car" class="col-4 item">
                <p>{{car.make}}</p>
                <p>{{car.model}}</p>
                <img :src="car.imgUrl" style="width:100%" />
                <p>{{car.year}}</p>
                <p>{{car.price}}</p>
                <p>{{car.description}}</p>
                <button class="btn btn-success" @click="bid(car)">Bid</button>
                <button class="btn btn-danger" @click="deleteCar(car.id)">Delete</button>
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
                return this.$store.state.cars.find(car => car.id == this.id)
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
                //need to handle what to do about drawing stuff on the individual car page.
                this.$store.dispatch("removeCar", id)
                this.$router.push({
                    name: 'cars'
                })
            }
        }
    }
</script>


<style scoped>
</style>