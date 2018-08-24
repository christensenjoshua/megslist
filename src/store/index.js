import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'

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
            api.get('cars').then(res => {
                commit('setCars', res.data.data)
            })
        },
        addCar({ commit, dispatch }, newCar) {
            api.post('cars', newCar).then(res => {
                dispatch('getAllCars')
            })
        },
        editCar({ commit, dispatch }, car) {
            api.put('cars/' + car._id, car).then(res => {
                dispatch('getAllCars')
            })
        },
        removeCar({ commit, dispatch }, id) {
            api.delete('cars/' + id).then(res => {
                dispatch('getAllCars')
            })
        },
        getAllHouses({ commit, dispatch }) {
            api.get('houses').then(res => {
                commit('setHouses', res.data.data)
            })
        },
        addHouse({ commit, dispatch }, newHouse) {
            api.post('houses', newHouse).then(res => {
                dispatch('getAllHouses')
            })
        },
        editHouse({ commit, dispatch }, house) {
            api.put('houses/' + house._id, house).then(res => {
                dispatch('getAllHouses')
            })
        },
        removeHouse({ commit, dispatch }, id) {
            api.delete('/houses/' + id).then(res => {
                dispatch('getAllHouses')
            })
        },
        getAllJobs({ commit, dispatch }) {
            api.get('jobs').then(res => {
                commit('setJobs', res.data.data)
            })
        },
        addJob({ commit, dispatch }, newJob) {
            api.post('jobs', newJob).then(res => {
                dispatch('getAllJobs')
            })
        },
        editJob({ commit, dispatch }, job) {
            api.put('jobs/' + job._id, job).then(res => {
                dispatch('getAllJobs')
            })
        },
        removeJob({ commit, dispatch }, id) {
            api.delete('jobs/' + id).then(res => {
                dispatch('getAllJobs')
            })
        },
    }
})

export default store