# Pagination 分页

## 使用方式

  var pagination = new Pagination({ <br />
      dataSource: array, // 数据源格式请参考示例 [{},{},{}] <br />
      index: number, // 默认页码 <br />
      limit: number, // 每组分页长度 <br />
      perpage: number, // 每页显示数量 <br />
      left: number, // 选中页码左边页码数 <br />
      active: string, // 选中样式 <br />
      content: string, // 插入内容目标元素 <br />
      pager: string // 插入分页目标元素 <br />
  }, function(result, num) { <br />
        return html = result[num].map((item) => { <br />
            return ( <br />
                `element` 字符串模版 <br />
            ) <br />
        }) <br />
    }, function(result) { <br />
        return html = result.map((item) => { <br />
            return ( <br />
                `element` 字符串模版 <br />
            ) <br />
        }) <br />
    })  // fn1 和 fn2 具体使用方法请参见示例 <br />
  
## 注意事项

  1.默认页码 index 不能小于1，或者不能大于最大页码数 <br />
  2.limit 必须 小于页码数 max <br />
  3.left至少为1 <br />
  4.limit - left >= 2 <br />
