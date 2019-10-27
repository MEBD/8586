export default class Translate {
  /**
  *Install
  *@param Vue
   */
  public static install(Vue: any): void {
    Vue.mixin({
      /**
      *Created
       */
      created() {
        this.$t = this.$store.state.locale[this.$store.state.locale.current];
      },
    });
  }
}
