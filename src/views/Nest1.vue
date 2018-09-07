<template>
    <div>
        <div> Nest 1 Passed Value 1: {{passedValue1}}</div>
        <div> Nest 1 Passed Value 2: {{passedValue2}}</div>
    </div>
</template>

<script>
export default {
    name: 'Nest1',
    props: {
        passedValue1: {type: String, default: 'eeee'},
        passedValue2: {type: String, default: 'ffff'}
    }
}
</script>