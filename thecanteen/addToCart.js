// $(document).ready(function(){
//     renderComponents();
// });
function addToCart(event)
{
    var parentDiv=$(event).parent();
    var name=parentDiv.find('.name-product').text();
    console.log(name);
    var img=parentDiv.find('.img-product').attr('src');
    console.log(img);
    var price=parentDiv.find('.price-product').text();
    console.log(price);
    var product_key = $(event).data('product_key');
    console.log(product_key);
    var data = {
        name: name,
        img: img,
        price: price
      };
      var jsonData = JSON.stringify(data)

  localStorage.setItem(product_key, jsonData);
}