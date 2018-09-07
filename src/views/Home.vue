<template>
    <div>
        <br><br><br><br>
        <input type='button' @click='nextPage()' name="clickme" value="Click Me">

    </div>
</template>

<script>
export default {
    name: 'Home',
    data () {
        return {
            value1: 'Aaa',
            value2: 'Bbb'
        }
    },
    methods: {
        nextPage (){
            this.$store.dispatch('setChickenSoup', 'Chicken Soup with Stars')
            this.$router.push({ 
                name: 'TopLevelComponent', 
                params: {
                    firstvalue: this.value1,
                    secondvalue: this.value2
                }
            })
        }
    }
}
</script>
