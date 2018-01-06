/*
 * @Author: Frorice 
 * @Date: 2018-01-06 15:45:55 
 * @Last Modified by: Frorice
 * @Last Modified time: 2018-01-06 16:10:08
 */
import Matter from '../lib/matter-dev';
const { Bodies } = Matter;
export default class Platform {
  constructor(options) {
    const defaultOptions = {
      x: 0,
      y: 0,
      width: 150,
      height: 35
    }
    // 覆盖默认参数
    Object.assign(this.options, defaultOption, options);
    // 平台的刚体，约束等
    this.bodies = [];
  }
  /**
   * create
   * 创建一个长方形刚体
   * @memberof Platform
   */
  create() {
    const { options } = this
    this.bodies.push(Bodies.rectangle(options));
  }
  /**
   * addEntity
   * 向平台添加刚体或约束
   * @param {Object | Array} entity 
   * @memberof Platform
   */
  addEntity(entity) {
    this.bodies = this.bodies.concat(entity);
  }
}