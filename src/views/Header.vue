<template>
  <div id='container'>
      <h1>{{headertext}}</h1>
    <br >
  </div>
</template>
<script>
export default {
    name: 'Header',
    data () {
        return {
            headertext: 'Header text'
        }
    }

}
</script>
