
if(document.readyState=='loading'){
    document.addEventListener('DOMContentLoaded',ready)
}else{
    ready()
}


function ready(){
    /*CLICK BUTTON XOA*/ 
    
    var removeButton=document.getElementsByClassName('btn-danger')
    for( var i= 0; i<removeButton.length; i++){
        var button=removeButton[i];
        button.addEventListener('click',removecart)
    }
    /**SO LUONG KHONG AM  */
    var quantityinput=document.getElementsByClassName('cart-quantity-input')
    for( var i= 0; i<quantityinput.length; i++){
        var input=quantityinput[i];
        input.addEventListener('change',quantitychange)
    }
    /**THEM VO GIO HANG */
    var additemcart=document.getElementsByClassName('btnpc')
    for( var i= 0; i<additemcart.length; i++){
        var button=additemcart[i];
        button.addEventListener('click',addtocart)
    }
    
}
/**CLICK BUTTON REMOVE */
function removecart(event){
    var buttonclickremoveitem= event.target
    buttonclickremoveitem.parentElement.parentElement.remove()
    updatemoneytotal()
    removecount()
    removeshipcode()
}
function removeshipcode(){
    var cartItems=document.getElementsByClassName('cart-items')[0]
    var cartRows=cartItems.getElementsByClassName('cart-row')
    var sale=0;
    var total=0;
    /** Cap Nhat gia va so luong san pham con lai trong gio hang sau khi xoa*/
    for( var i= 0; i<cartRows.length; i++){
      var cartRow=cartRows[i]
      var priceItem=cartRow.getElementsByClassName('cart-price-item')[0]
      var QuantityItem=cartRow.getElementsByClassName('cart-quantity-input')[0]
      var saleprice=cartRow.getElementsByClassName('cart-sale-item')[0]
      var Salemoney=parseFloat(saleprice.innerText)
      /*Cap nhat tong tien*/
      var price=parseFloat(priceItem.innerText)
      var quantity=QuantityItem.value
      total=total+(price*quantity)
      if(saleprice.innerText==''){
        Salemoney=0;
        }
        sale=(sale+(Salemoney*quantity))
    }
        var alltotalmoney=(total*1000000)

        
        var totalandsale=alltotalmoney-sale
        var shipcode=document.getElementsByClassName('ShipCode')[0]
        if(totalandsale==0){
            document.getElementsByClassName('ShipCode')[0].innerText=0+'đ'
        }
        shipcode=0;
        var totalshipsaleafterremoveall=totalandsale+shipcode
        document.getElementsByClassName('total-all-money')[0].innerText=Math.round(totalshipsaleafterremoveall).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')+'đ'

}

function removecount(){
    count-=1
    document.getElementsByClassName('count')[0].innerText=count
    if(count==0){
        document.getElementsByClassName('emptyproduct')[0].innerText='Bạn chưa có sản phẩm nào!'
    }else{
        document.getElementsByClassName('emptyproduct')[0].innerText='Bạn đã thêm '+count+' sản phẩm'
    }
    console.log(localStorage)
}
/**THAY DOI GIA TRI SO LUONG */
 function quantitychange(event){
    var input=event.target
    if(isNaN(input.value) || input.value <=0){
        input.value=1
    }
    updatemoneytotal()
 }
 //ADD SIZE
 /*(function() {
    'use strict'

var all_hl_btns = $('#highlightButtons > button');

all_hl_btns.click(function(){
    var value = $(this).text();
        document.getElementsByClassName('size')[0].innerText=value
});
}());*/

 /**ADD TO CART */
 function addtocart(event){
     var button=event.target
     var productitems=button.parentElement.parentElement
    var productName=productitems.getElementsByClassName('product__name')[0].innerText
    var price=productitems.getElementsByClassName('product__price')[0].innerText
    var image=productitems.getElementsByClassName('product__image')[0].src   
    var sale=productitems.getElementsByClassName('sale')[0].innerText 
    var size=productitems.getElementsByClassName('product__size')[0].value
    if(size>47 || size<25 || size==''){
        alert('Vui lòng chọn lại size giày thích hợp')
        return
    }
    /*console.log(productName,image,price)*/
    addItemToCart(productName,image,price,sale,size)

    /*addproducttocart(title,image,price)*/
    updatemoneytotal()
    reloadThePage()

}

let count=0
function addItemToCart(productName,image,price,sale,size){
    var cartRow=document.createElement('div')
    var cartItems=document.getElementsByClassName('cart-items')[0]
    var cartItemsName=cartItems.getElementsByClassName("cart-item-title")
    var sizeItem=cartItems.getElementsByClassName('size')

    for(var i=0; i<sizeItem.length && i<cartItemsName.length;i++){
        /**kiem tra neu ten trong gio hang bang ten san pham*/

        if(sizeItem[i].innerText == size &&cartItemsName[i].innerText==productName ){
            alert("Đã có trong giỏ hàng")
            return
        }
    
    }
    count+=1;
    alert("Đã thêm")
    document.getElementsByClassName('count')[0].innerText=count;

    document.getElementsByClassName('emptyproduct')[0].innerText='Bạn đã thêm '+count+' sản phẩm'
    var cartRowContents=`
         <div class="cart-item">
            <img class="product__image"class="cart-item-image" src="${image}"
            width="155px" height="165px"><br>
        </div>
        <div class="infoAddied">
            <span class="cart-item-title">${productName}</span><br>
            <p> Size: <span class="size">${size}</span></p>
            <div class="titleProductAdded">
                <div class="cart-price">
                    <span class="cart-price-item">${price} x </span>
                </div>
                    <div class="cart-quantity">
                    <p> <input class="cart-quantity-input" type="number" value="1"></p><br>
                    </div>
                </div>
                <p>Giảm: <span class="cart-sale-item">${sale}</span>
                </p>
            <button class="btn-danger" type="button">Remove</button>
        </div>`
        cartRow.innerHTML=cartRowContents
        cartRow.classList.add('cart-row')
        cartItems.append(cartRow)
        cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click',removecart)
        
        cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change',quantitychange)
}

/**TINH TONG TIEN */
function updatemoneytotal(){
    var cartItems=document.getElementsByClassName('cart-items')[0]
    var cartRows=cartItems.getElementsByClassName('cart-row')
    var sale=0;
    var total=0;
    /** Cap Nhat gia va so luong san pham con lai trong gio hang sau khi xoa*/
    for( var i= 0; i<cartRows.length; i++){
      var cartRow=cartRows[i]
      var priceItem=cartRow.getElementsByClassName('cart-price-item')[0]
      var QuantityItem=cartRow.getElementsByClassName('cart-quantity-input')[0]
      var saleprice=cartRow.getElementsByClassName('cart-sale-item')[0]
      var Salemoney=parseFloat(saleprice.innerText)
      /*Cap nhat tong tien*/
      var price=parseFloat(priceItem.innerText)
      var quantity=QuantityItem.value
      total=total+(price*quantity)
      
      if(saleprice.innerText==''){
        Salemoney=0;
        }
        sale=(sale+(Salemoney*quantity))
    }
        var alltotalmoney=(total*1000000)

        var shipcode=document.getElementsByClassName('ShipCode')[0]
        
        var totalandsale=alltotalmoney-sale
        if( totalandsale<1300000 &&totalandsale>0){
            shipcode=30000
            document.getElementsByClassName('ShipCode')[0].innerText=shipcode.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')+'đ'
             totalandship=alltotalmoney+shipcode-sale
        }else if(totalandsale>=1300000){
            shipcode=0
            document.getElementsByClassName('ShipCode')[0].innerText='MIỄN PHÍ'
             totalandship=alltotalmoney+shipcode-sale
        }
        
        document.getElementsByClassName('codesale')[0].innerText=sale.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')+'đ'
        document.getElementsByClassName('total-money')[0].innerText=Math.round(total*1000000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')+'đ'
        document.getElementsByClassName('total-all-money')[0].innerText=Math.round(alltotalmoney+shipcode-sale).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')+'đ'  

}
function reloadThePage(){
    window.addEventListener('beforeunload',()=>{
        event.preventDefault()
        event.returnValue=""
    })
} 
