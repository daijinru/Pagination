# Pagination 分页
## 使用方式
  var pagination = new Pagination({
      dataSource: array, // 数据源格式请参考示例 [{},{},{}]
      index: number, // 默认页码
      limit: number, // 每组分页长度
      perpage: number, // 每页显示数量
      left: number, // 选中页码左边页码数
      active: string, // 选中样式
      content: string, // 插入内容目标元素
      pager: string // 插入分页目标元素
  }, fn1, fn2) // fn1 和 fn2 使用方法请参见示例
## 注意事项
  1.默认页码 index 不能小于1，或者不能大于最大页码数
  2.limit 必须 小于页码数 max
  3.left至少为1
  4.limit - left >= 2
