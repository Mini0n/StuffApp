console.log('code0.js');

var inv1 = angular.module('invoice1', []);

inv1.controller('inv1Ctrl', function(){

  //-- vars ----
  this.qty = 1;
  this.cost = 2;
  this.inCurr = 'EUR';
  this.currArr = ['MXN', 'USD', 'EUR', 'CNY'];
  this.mxnToCurrRates = {
    MXN: 1,
    USD: 18.57,
    EUR: 23.08,
    CNY: 2.94
  };

  this.convertCurr = function(value, inCurr, outCurr){
    return value*this.mxnToCurrRates[outCurr];
  }

  this.pay = function(){
    console.log('Merci bcp');
  }

  this.total = function(outCurr){
    return this.convertCurr(this.qty*this.cost, this.inCurr, outCurr);
  }

});