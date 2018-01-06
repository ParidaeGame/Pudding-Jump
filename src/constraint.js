/*
 * @Author: Fun 
 * @Date: 2018-01-06 15:45:55 
 * @Last Modified by: Fun
 * @Last Modified time: 2018-01-06 16:10:08
 */
import Matter from '../lib/matter-dev';
const { constraint } = Matter;

class Consfixed {
  constructor(options) {
    this.constraint = new constraint(options);
  }
}

export default { Consfixed }
