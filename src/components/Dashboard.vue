<template>
  <div>
    <h1>Dashboard</h1>
    <b-badge variant="primary">Hello Bootstrap</b-badge>
    <p :class="$style.red">
        This should be red
    </p>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({
})
export default class Dashboard extends Vue {

}

</script>

<style lang="sass" module>
@import 'src/sass/main.sass'
</style>