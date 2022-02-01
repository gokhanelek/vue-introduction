const app = Vue.createApp({
    data() {
        return {
            showBorder: false,
            redBG: false,
            boxClass: "border red",
            bgColor: "yellow"
        }
    },
    computed: {
        boxClasses() {
            return { border: this.showBorder, red: this.redBG };
        }
    }
})

app.mount("#app");