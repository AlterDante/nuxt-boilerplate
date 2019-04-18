export default {
  name: 'demo-vuex',
  data() {
    return {
      modalParams: {
        title: '',
        text: '',
        show: false,
      },

    }
  },
  methods: {
    getCountries() {
      this.$store.dispatch('countries/getCountries')
    },
    openModal() {
      this.$store.dispatch('modal/openModal')
    },
    setModalParams() {
      this.$store.dispatch('modal/setParams', this.modalParams)
    },
  },
  computed: {
    countriesList() {
      return this.$store.state.countries.list
    },
  },

}
