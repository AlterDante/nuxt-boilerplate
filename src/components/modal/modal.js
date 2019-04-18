export default {
  name: 'modal',
  methods: {
    closeModal() {
      this.$store.dispatch('modal/closeModal')
    },
  },
  computed: {
    showModal() {
      return this.$store.state.modal.show
    },
    title() {
      return this.$store.state.modal.title
    },
    text() {
      return this.$store.state.modal.text
    },
  },
}
