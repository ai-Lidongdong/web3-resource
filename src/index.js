// 暴露一个工具函数
module.exports = {
  add: (a, b) => a + b,
  formatDate: (date) => new Date(date).toLocaleString()
};