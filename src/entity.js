/*
 * @Author: Frorice 
 * @Date: 2018-01-06 15:34:57 
 * @Last Modified by: Frorice
 * @Last Modified time: 2018-01-06 15:49:54
 */
class Entity {
  constructor() {
    this.entities = [];
  }
  /**
   * add
   * 向实体中添加body或constraint
   * @param {Object | Array} object 
   * @memberof Entity
   */
  add(object) {
    this.entities = this.entities.concat(object);
  }
  /**
   * delete
   * 从实体中删除body或constraint
   * @param {Object | Array} object 
   * @memberof Entity
   */
  delete(object) {
    const objects = Array.prototype.concat([], object);
    objects.forEach((object) => {
      const index = this.entities.indexOf(Object);
      this.entities.splice(index, 1);
    })
  }
}

export default new Entity();