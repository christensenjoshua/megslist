import vue from 'vue'
import vuex from 'vuex'

vue.use(vuex)

let store = new vuex.Store({
    state: {
        cars: [],
        houses: [],
        jobs: []
    },
    mutations: {
        setCar(state, newCar) {
            state.cars.push(newCar)
        },
        removeCar(state, index) {
            state.cars.splice(index, 1)
        },
        setHouse(state, newHouse) {
            state.houses.push(newHouse)
        },
        removeHouse(state, index) {
            state.houses.splice(index, 1)
        },
        setJob(state, newJob) {
            state.jobs.push(newJob)
        },
        removeJob(state, index) {
            state.jobs.splice(index, 1)
        }
    },
    actions: {
        addCar({ commit, dispatch }, newCar) {
            commit("setCar", newCar)
        },
        removeCar({ commit, dispatch }, index) {
            commit("removeCar", index)
        },
        addHouse({ commit, dispatch }, newHouse) {
            commit('setHouse', newHouse)
        },
        removeHouse({ commit, dispatch }, index) {
            commit('removeHouse', index)
        },
        addJob({ commit, dispatch }, newJob) {
            commit('setJob', newJob)
        },
        removeJob({ commit, dispatch }, index) {
            commit('removeJob', index)
        }
    }
})

export default store