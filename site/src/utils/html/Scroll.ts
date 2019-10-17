export default class Scroll {
  /**
   * Install
   * @param Vue
   */
  public static install(Vue: any): void {
    Vue.mixin({
      /**
       * Created
       */
      created() {
        /**
         * $getGameImage
         * @param {number} i
         * @returns {string}
         */
        this.$scrollTo = (to: any): void => {
          const scrollToElement = require('scroll-to-element');
          scrollToElement(to, {
            offset: -50,
            ease: 'in-out-quint',
            duration: 600,
          });
        };
      },
    });
  }
}

