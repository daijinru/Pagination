(function(window, document) {
    var Pagination = function(options, fn1, fn2) {
        if (typeof fn1 !== "function" || typeof fn2 !== "function") { console.log("fn1 和 fn2 必须是正确的回调函数");
            return }
        if (typeof options.index !== "number" || typeof options.limit !== "number" || typeof options.perpage !== "number" || typeof options.left !== "number" || typeof options.active !== "string" || typeof options.content !== "string" || typeof options.pager !== "string") { console.log("请输入正确参数");
            return }
        this.output_el = {};
        this.output_pager = {};
        Object.defineProperty(this.output_el, "content", { get: function() {
                return document.getElementById(options.content).innerHTML }, set: function(el) { document.getElementById(options.content).innerHTML = el } });
        Object.defineProperty(this.output_pager, "content", { get: function() {
                return document.getElementById(options.pager).innerHTML }, set: function(el) { document.getElementById(options.pager).innerHTML = el } });
        if (options.active) { this.active = options.active }
        this.index = options.index;
        this.num = this.index - 1;
        this.limit = options.limit;
        this.perpage = options.perpage;
        this.left = options.left;
        this.pager = options.pager;
        this.fn1 = fn1;
        this.fn2 = fn2;
        if (typeof options.dataSource == "string") { this.data = JSON.parse(options.dataSource) } else { this.data = options.dataSource } };
    Pagination.prototype.init = function() { this.output_el_array = this.el_array();
        this.max = this.output_el_array.length;
        this.set_el();
        this.set_pager() };
    Pagination.prototype.set_page = function(index) { this.num = index - 1;
        this.set_el();
        this.index = index;
        this.set_pager() };
    Pagination.prototype.arrow_left = function() {
        var index = this.index;
        if (index < 2) { index = 2 }
        this.num = index - 2;
        this.set_el();
        this.index = index - 1;
        this.set_pager() };
    Pagination.prototype.arrow_right = function() {
        var index = this.index;
        if (index > this.max - 1) { index = this.max - 1 }
        this.num = index;
        this.set_el();
        this.index = index + 1;
        this.set_pager() };
    Pagination.prototype.set_el = function() {
        try {
            if (this.index < 1 || this.index > this.max) {
                throw "默认页码 index 不能小于1，或者不能大于最大页码数，最大页码数可在 Console 查看,请修改默认页码！" } } catch (err) { alert(err);
            location.reload() }
        var el_array_dom = this.fn1.call(this, this.output_el_array, this.num);
        el_array_dom = el_array_dom.join("");
        this.output_el.content = el_array_dom };
    Pagination.prototype.set_pager = function() {
        var output_pager_array = this.pager_array();
        var pager_array_dom = this.fn2.call(this, output_pager_array);
        pager_array_dom = pager_array_dom.join("");
        this.output_pager.content = pager_array_dom;
        if (this.active) {
            var index = output_pager_array.indexOf(this.index);
            document.getElementById(this.pager).childNodes[index].className = this.active } };
    Pagination.prototype.el_array = function() {
        var limit = [],
            m = 0,
            output = [],
            data = this.data,
            perpage = this.perpage;
        for (var i = 0; i < data.length; i++) { limit.push(i);
            if (limit.length == perpage) { output.push(data.slice(m, i + 1));
                limit.splice(0, limit.length);
                m = i + 1 } }
        if (data.length % perpage > 0) {
            var end = -(data.length % perpage);
            output.push(data.slice(end)) }
        return output };
    Pagination.prototype.pager_array = function() {
        var pager = [];
        var k = 0;
        var page = this.index;
        var max = this.max;
        var limit = this.limit;
        var divide_left = this.left;
        console.log("页码数：" + max);
        try {
            if (limit > max) {
                throw "警告：limit 必须 小于页码数 max!请修改参数" }
            if (divide_left < 1) {
                throw "警告：left至少为1！请修改参数" }
            if (limit - divide_left < 2) {
                throw "警告：必须limit - left >= 2,请修改参数" } } catch (err) { alert(err);
            location.reload() }
        var left = page - divide_left;
        var right = page + (limit - divide_left - 1);
        for (var i = 0; i < limit; i++) {
            if (left > 0) { k = i + left }
            if (left <= 0) { k = i + 1 }
            if (right > max) { k = max - limit + 1 + i }
            pager.push(k) }
        return pager };
    window.Pagination = Pagination })(window, document);
