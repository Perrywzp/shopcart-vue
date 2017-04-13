/**
 * Created by perry on 17/4/12.
 */
var vm = new Vue({
    el: "#app",
    data: {
        totalMoney: 0,
        productList:[]
    },
    filters: {

    },
    mounted: function(){
        this.cartView();
    },
    methods: {
        cartView: function(){
            var _this = this;
            this.$http.get("data/account.json", {"id": 22}).then(function(res){
                _this.productList = res.result.list;
            })
        }
    }
});