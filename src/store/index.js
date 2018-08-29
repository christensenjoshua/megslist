import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'
import firebase from 'firebase/app'
import db from '../utils/firebaseInit'

let api = axios.create({
    baseURL: 'https://bcw-gregslist.herokuapp.com/api/',
    timeout: 3000
})

vue.use(vuex)

let store = new vuex.Store({
    state: {
        cars: [],
        houses: [],
        jobs: []
    },
    mutations: {
        setCars(state, payload) {
            state.cars = payload
        },
        setHouses(state, payload) {
            state.houses = payload
        },
        setJobs(state, payload) {
            state.jobs = payload
        }
    },
    actions: {
        getAllCars({ commit, dispatch }) {
            db.collection('cars').get().then(querySnapSnot => {
                let cars = []
                querySnapSnot.forEach(doc => {
                    let car = doc.data()
                    car.id = doc.id
                    cars.push(car)
                })
                commit('setCars', cars)
            })
        },
        addCar({ commit, dispatch }, newCar) {
            db.collection('cars').add(newCar).then(doc => {
                dispatch('getAllCars')
            })
        },
        editCar({ commit, dispatch }, car) {
            db.collection('cars').doc(car.id).set(car).then(() => {
                dispatch('getAllCars')
            })
        },
        removeCar({ commit, dispatch }, id) {
            db.collection('cars').doc(id).delete().then(() => {
                dispatch('getAllCars')
            })
        },
        getAllHouses({ commit, dispatch }) {
            db.collection('houses').get().then(querySnapShot => {
                let houses = []
                querySnapShot.forEach(doc => {
                    let house = doc.data()
                    house.id = doc.id
                    houses.push(house)
                })
                commit('setHouses', houses)
            })

        },
        addHouse({ commit, dispatch }, newHouse) {
            db.collection('houses').add(newHouse).then(doc => {
                dispatch('getAllHouses')
            })
        },
        editHouse({ commit, dispatch }, house) {
            db.collection('houses').doc(house.id).set(house).then(() => {
                dispatch('getAllHouses')
            })
        },
        removeHouse({ commit, dispatch }, id) {
            db.collection('houses').doc(id).delete().then(() => {
                dispatch()
            })
        },
        getAllJobs({ commit, dispatch }) {
            db.collection('jobs').get().then(querySnapShot => {
                let jobs = []
                querySnapShot.forEach(doc => {
                    let job = doc.data()
                    job.id = doc.id
                    jobs.push(job)
                })
                commit('setJobs', jobs)
            })
        },
        addJob({ commit, dispatch }, newJob) {
            db.collection('jobs').add(newJob).then(doc => {
                dispatch('getAllJobs')
            })
        },
        editJob({ commit, dispatch }, job) {
            db.collection('jobs').doc(job.id).set(job).then(() => {
                dispatch('getAllJobs')
            })
        },
        removeJob({ commit, dispatch }, id) {
            db.collection('jobs').doc(id).delete().then(() => {
                dispatch('getAllJobs')
            })
        },
    }
})

export default store