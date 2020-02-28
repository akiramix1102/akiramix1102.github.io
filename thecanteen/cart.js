$(document).ready(function () {
  renderCart();
  getPrice();
  $('.pay').on('click',function(){
    window.location.href='payment.html';
  })
});

function renderCart() {
  var data = localStorage;
  $.each(data, function (key, value) {
    var key_condition = key.substr(0, 7);
    if (key_condition === 'product') {
      var per_data = $.parseJSON(value);
      console.log(per_data)

      $('.col-lg-8').append('<div class="' + key + '"></div>');
      $('.' + key).load('CartComponent.html');
      setTimeout(function () {

        $('.' + key).find('.img-product').attr('src', per_data.img);
        $('.' + key).find('.name-product').text(per_data.name);
        $('.' + key).find('.price-product').text(per_data.price);
        $('.' + key).find('#count').attr('data-product_key', key);
        $('.' + key).find('.delete').attr('data-product_key', key);
        $('.' + key).find('.plusItem').attr('data-product_key', key);

      }, 100);
    }
  });
};

function deleteItem(event) {
  var key = $(event).data('product_key');
  var anchor = $(event).parent().parent().parent().parent();
  console.log(anchor)
  anchor.remove();
  localStorage.removeItem(key);
}

function plusItem(event) {
  // count
  var getCount = $(event).parent().find('#count').text();
  var count=parseInt(getCount)+1;
  $(event).parent().find('#count').text(count)

  // Price
  var price=350000;
  var totalMoney=count*price;
  var convertTotalMoneyToString=totalMoney.toString();
  var finalMoney =convertTotalMoneyToString.replace(/\B(?=(\d{3})+(?!\d))/g, ".")+'đ';
  $(event).parent().parent().find('.price-product').text(finalMoney);
}

function minusItem(event) {
  var getCount = $(event).parent().find('#count').text();
  var count=getCount-1;
  if (count <= 0) {
      $(event).parent().find('#count').html('0');
      $(event).parent().parent().find('.price-product').text('0đ');
  } else {
    $(event).parent().find('#count').html(count);
    var price=350000;
    var totalMoney=count*price;
    var convertTotalMoneyToString=totalMoney.toString();
    var finalMoney =convertTotalMoneyToString.replace(/\B(?=(\d{3})+(?!\d))/g, ".")+'đ'; //regex
    $(event).parent().parent().find('.price-product').text(finalMoney);
  }
}
function getPrice(event){
  var parentEvent=$(event).parent();
  var provisional=parentEvent.find('.provisional-money-amount').text();
  var discount=parentEvent.find('.discount-amount').text();
  var transport_fee=parentEvent.find('.transport-fee-amount').text();
  var total=parentEvent.find('.total-money-amount').text();
  var setPrice={
      provisional: provisional,
      discount: discount,
      transport_fee: transport_fee,
      total: total
  };
  var jsonPrice=JSON.stringify(setPrice);
  localStorage.setItem('setPrice',jsonPrice);
}

function voucher(event){
  setTimeout(function(){
    var parentEvent=$(event).parent().parent();
    var discountAmout=parentEvent.find('.discount-amount');
    var totalMoney=parentEvent.find('.total-money-amount');
    var coupon='voucher'
    if(event.value==coupon)
    {
     $('#notice').text('Thành công.')
     discountAmout.text('50.000đ');
    //  var provisional=parentEvent.find('.provisional-money-amount').text();
    //  var provisionalSlice=provisional.slice(0,4);
    //  console.log(provisionalSlice)
    totalMoney.text('670.000đ')
    }
    else
    {
      $('#notice').text('Coupon nhập không đúng!')
      discountAmout.text('0đ')
      totalMoney.text('720.000đ')
    }
    if(event.value=='')
    {
      $('#notice').css('display','none')
      discountAmout.text('0đ')
      totalMoney.text('720.000đ')
    }
  },300)
}
