import { Store } from "vuex"
import { State } from "."

export default (store: Store<State>) => {
    store.subscribe((mu, state) => {
        console.log(`[LOGGER] name: ${mu.type}, payload: ${mu.payload}`)
    })
}