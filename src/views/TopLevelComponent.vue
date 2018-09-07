<template>
    <div>
 {{firstvalue}}
 {{secondvalue}}
 <nest2 :passed-value1='firstvalue' :passed-value2='secondvalue' />
    </div>
</template>

<script>
import Nest2 from '@/views/Nest2.vue'

export default {
    name: 'TopLevelComponent',
    components: {
        Nest2
    },
    props: {
        firstvalue: {type: String},
        secondvalue: {type: String}
    }
}

</script>
