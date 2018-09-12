<template>
    <div>
        <Message v-for="(msg, index) in messages" :message="msg" :key="index" />
        <button @click="fetchMessages(lastFetchedMessageDate)">Fetch a message</button>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
// import { mapGetters, mapActions } from "vuex";
import Message from "./Message.vue";

@Component({
  components: {
    Message,
  },
})
export default class Messages extends Vue {

}

</script>

