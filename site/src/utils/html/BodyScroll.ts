export default class BodyScroll {
  /**
   * Block
   * @param {boolean} block
   */
  public static block(block: boolean): void {
    if (block) {
      document.documentElement.style.overflowY = 'hidden';
    } else {
      document.documentElement.style.overflowY = 'auto';
    }
  }
}
