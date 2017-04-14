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
        formatRmb: function(value, type){
            return "￥"+value.toFixed(2)+type;
        }
    },
    mounted: function(){
        this.cartView();
    },
    methods: {
        cartView: function(){
            var _this = this;
            this.$http.get("data/cart.json", {"id": 22}).then(function(res){
                _this.productList = res.body.result.productList;
                _this.totalMoney = res.body.result.totalMoney;
            })
        },
        addCount: function(item, type){
            if(type>0){
                item.productQuentity++;
            }else{
                (item.productQuentity > 0) && item.productQuentity--;
            }

            this.totalMoney = this.productList.map((x)=>{
                return x.productQuentity * x.productPrice;
            }).reduce((x,y)=>{return x+y;})
        }
    }
});