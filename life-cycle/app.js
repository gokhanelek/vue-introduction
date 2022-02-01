const app = Vue.createApp({
    data() {
        return {
            title: "Test Başlığın",
            itemList: []
        }
    },
    beforeCreate() {
        console.log("before create");
    },
    created() {
        console.log("created");
        setTimeout(() => {
            this.itemList = [1, 2, 3, 4, 5, 6];
        }, 1000);

        setTimeout(() => {
            this.title = "Test başlığı değişti";
        }, 2000);
    },
    beforeMount() {
        console.log("before mount");
    },
    mounted() {
        console.log("mounted");
    },
    beforeUpdate() {
        console.log("before update");
    },
    updated() {
        console.log("Upadeted");
    },
    beforeUnmount() {
        console.log("before unmount");
    },
    unmounted() {
        console.log("unmounted");
    },
})

app.mount("#app");

setTimeout(() => {
    app.unmount();
}, 5000);