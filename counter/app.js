const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            counter2: 0
        }
    },
    computed: {
        getCounterResult() {
            return this.counter > 7 ? "BÜYÜK" : "KÜÇÜK";
        },
        getCounter2Result() {
            return this.counter2 > 7 ? "BÜYÜK" : "KÜÇÜK";
        },
    },
    watch: {
        counter(newValue, oldValue) {
            console.log("Counter", oldValue, "=>", newValue);
        },
        getCounterResult(newValue, oldValue) {
            console.log("Result", oldValue, "=>", newValue);
        }
    }
}).mount('#app')