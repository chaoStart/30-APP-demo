var SelectCtrl = scriptUtil.getRegisterReactDom('htDiv2215');
var selectedData = SelectCtrl.getValue() * 1;
// console.log("alpha:"+SelectCtrl.checkValue) //alpha
var sum = 0, sum2 = 0, sum3 = 0;
var namespace = "cqy_zdwxy";
var dataSource = namespace + '.Template_1336';
scriptUtil.queryDataTable(
    {
        dataSource,
        filters: {
            distinct: true,
            pageIndex: 1,
            pageSize: 15,
        },
        version: 'V2'
    },
    function (res) {
        for (var i = 0; i < res.data.list.length; i++) {
            var Q = res.data.list[i]["cqy_zdwxy.Q"];
            var beta = res.data.list[i]["cqy_zdwxy.beta"];
            var czl = res.data.list[i]["cqy_zdwxy.czl"];
            var r = beta * czl / Q;
            // console.log('r',r)
            sum = sum + r;
        }
        console.log('sum', sum)
    }
);
var dataSource = namespace + '.Template_867';
scriptUtil.queryDataTable(
    {
        dataSource,
        filters: {
            distinct: true,
            pageIndex: 1,
            pageSize: 15,
        },
        version: 'V2'
    },
    function (res) {
        for (var i = 0; i < res.data.list.length; i++) {
            var Q2 = res.data.list[i]["cqy_zdwxy.Q2"];
            var beta2 = res.data.list[i]["cqy_zdwxy.beta2"];
            var czl2 = res.data.list[i]["cqy_zdwxy.czl2"];
            var r2 = beta2 * czl2 / Q2;
            sum2 = sum2 + r2;
        }
        console.log('sum2', sum2)
    }
);
var dataSource = namespace + '.Template_885';
scriptUtil.queryDataTable(
    {
        dataSource,
        filters: {
            distinct: true,
            pageIndex: 1,
            pageSize: 15,
        },
        version: 'V2'
    },
    function (res) {

        for (var i = 0; i < res.data.list.length; i++) {
            var Q3 = res.data.list[i]["cqy_zdwxy.Q3"];
            var beta3 = res.data.list[i]["cqy_zdwxy.beta3"];
            var czl3 = res.data.list[i]["cqy_zdwxy.czl3"];
            var r3 = beta3 * czl3 / Q3;
            sum3 = sum3 + r3;
        }
        console.log("total-3", sum, sum3, sum2, selectedData)
    }
);

setTimeout(
    function (res) {
        window.parent.postMessage({
            params: {
                r1: sum,
                r2: sum2,
                r3: sum3,
                r4: selectedData
            },
            code: 1
        }, '*')
    }, 1000)
data