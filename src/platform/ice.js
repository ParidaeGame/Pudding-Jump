/*
 * @Author: Fun 
 * @Date: 2018-01-06 15:45:55 
 * @Last Modified by: Fun
 * @Last Modified time: 2018-01-06 16:10:08
 */
import Platform from './index'

export default class Ice extends Platform {
  constructor(options) {
    const defaultOptions = {
      friction: 1
    }
    // 覆盖默认参数
    Object.assign(options, defaultOption);
    super(options)
  }
}