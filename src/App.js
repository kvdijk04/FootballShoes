import './App.css';
import React, { Component } from 'react';
class App extends Component {
  render (){
  return(
  <React.Fragment>
    <header2>
  <div className="allcontainheader" style={{width: '1400px', margin: 'auto', display: 'flex'}}>
    <div className="logoimage" style={{display: 'flex'}}>
    <img className="product__image1" src="logo4-removebg-preview.png" width="100px" height="100px" style={{}} />
      <img className="product__image1" src="logo1-removebg-preview__2_-removebg-preview.png" width="100px" height="100px" style={{}} />
    </div>
    <div className="allcontainerheader1" style={{width: '1080px', margin: 'auto'}}>
      <div className="container">
        <div className="navbar" style={{}}>
          <nav style={{}}>
            <ul style={{width: '450px', padding: '1px', textAlign: 'center'}} className="menutop">
              <li style={{position: 'relative', marginRight: '10px'}}><button className="tablink" onclick="openPage('TC', this, 'white')" id="defaultOpen">Trang Chủ</button></li>
              <li style={{position: 'relative'}}><button className="tablink" onclick="openPage('LH', this, 'white')">Liên Hệ</button></li>
              <li style={{position: 'relative'}}><button className="tablink" onclick="openPage('GT', this, 'white')">Giới Thiệu</button></li>
              {/*-----------------cart payment-------------------------------*/}
              <li><a href> <img className="cartimageinside" src="cart.png" width="20px" height="20px" /></a>
                <div className="countitem"><span className="count">0</span></div> 
                <ul className="cartpayment" id="cart">
                  <div className=" cart-items">
                    <div className="GIOHANGCUABAN">
                      <strong>GIỎ HÀNG CỦA BẠN:</strong><br />
                    </div>
                    <i className="emptyproduct">Bạn chưa có sản phẩm nào!</i>
                  </div>
                  <div className="total">
                    <button className="btntt" type="button">Thanh Toán ➜</button> 
                    <strong>TÓM TẮT ĐƠN HÀNG:</strong>
                    <div className="smallorder">
                      <div className="originprice">
                        <div className="pricenotsale">
                          <p className="total-title">Tổng sản phẩm: <span className="total-money" /></p>
                        </div>
                        <div className="saleitem">
                          <p className="sale"> Khuyến mãi: <span className="codesale" /></p>
                        </div>
                      </div>
                      <p className="ShipTitle">Giao Hàng: <span className="ShipCode" /></p>
                      <p className="total-money1">Tổng:<span className="total-all-money" /></p>
                    </div>      
                    <div className="logobank">
                      <img src="visa.png" />
                    </div>                         
                  </div>  
                </ul> 
              </li>
            </ul>
          </nav>
        </div>
      </div> 
      <img className="menuimage" src="menu.png" width="20px" height="20px" onclick="menutoggle()" />
      <div className="container2" style={{marginLeft: '-25px', marginTop: '20px'}}>
        <div className="navbar1" style={{margin: 'auto', width: '850px'}}>
          <nav style={{flex: 1, textAlign: 'center'}}>
            <ul style={{display: 'inline-block', listStyleType: 'style type none'}} id="menuitems">
              <li style={{position: 'relative', fontSize: '17px', marginLeft: '3px', marginRight: '3px', fontWeight: 'bold'}}><button className="tablink" onclick="openPage('Nam', this,'white')" id="Mn">Nam</button></li>
              <li style={{position: 'relative', fontSize: '17px', marginLeft: '3px', marginRight: '3px', fontWeight: 'bold'}}><button className="tablink" onclick="openPage('Nu', this, 'white')" id="Wm">Nữ</button></li>
              <li style={{position: 'relative', fontSize: '17px', marginLeft: '3px', marginRight: '3px', fontWeight: 'bold'}}><button className="tablink" onclick="openPage('TreEm', this, 'white')">Trẻ em</button></li>
              <li style={{position: 'relative', fontSize: '17px', marginLeft: '3px', marginRight: '3px'}}> <button className="tablink">Thể Thao</button>
                <ul className="sub-menu1">
                  <div className="running" style={{}}>
                    <div className="footballmenu" style={{display: 'flex', borderBottom: '2px solid black', padding: '1px', margin: '15px'}}>
                      <img className="product__image" src="logo4-removebg-preview.png" width="75px" height="75px" style={{marginTop: '20px'}} />
                      <p style={{marginTop: '50px', fontSize: '20px', fontWeight: 'bold', marginLeft: '50px',marginRight:'50px'}}>football</p>
                    </div>
                    <img className="product__image" src="footballposter.jpg" width="200px" height="215px" />
                    <div className="footballproduct" style={{textAlign: 'left', marginLeft: '20px'}}>
                      <ul>
                        <li><button className="tablink" onclick="openPage('copa', this, 'whitesmoke')">Giày Copa</button></li><br />
                        <li><button className="tablink" onclick="openPage('xf', this, 'whitesmoke')">Giày X</button></li><br />
                        <li><button className="tablink" onclick="openPage('nemeziz', this,'whitesmoke')">Giày Nemeziz</button></li><br />
                        <li><button className="tablink" onclick="openPage('predator', this, 'whitesmoke')">Giày Predator</button></li><br /><br /><br />
                      </ul>
                    </div>
                  </div>
                  <div className="running" style={{marginLeft: '105px'}}>
                    <div className="runningmenu" style={{display: 'flex', borderBottom: '2px solid black', padding: '1px', margin: '15px'}}>
                      <img className="product__image" src="logo4-removebg-preview.png" width="75px" height="75px" style={{marginTop: '20px'}} />
                      <p style={{marginTop: '50px', fontSize: '20px', fontWeight: 'bold', marginLeft: '50px'}}>running</p>
                    </div>
                    <img className="product__image" src="runningposter.jpg" width="200px" height="215px" />
                    <div className="runningproduct" style={{textAlign: 'left', marginLeft: '20px'}}>
                      <ul>
                        <li><button className="tablink" onclick="openPage('ut', this, 'whitesmoke')">Ultraboost</button></li><br />
                        <li><button className="tablink" onclick="openPage('alp', this, 'whitesmoke')">Alphabounce</button></li><br /><br /><br /><br /><br />
                      </ul>
                    </div>
                  </div>
                  <div className="footballnike" style={{marginLeft: '105px'}}>
                    <div className="jordanmenu" style={{display: 'flex', borderBottom: '2px solid black', padding: '2px', margin: '15px'}}>
                      <img className="product__image" src="logo1-removebg-preview__2_-removebg-preview.png" width="70px" height="70px" style={{marginTop: '20px'}} />
                      <p style={{marginTop: '50px', fontSize: '20px', fontWeight: 'bold', marginLeft: '50px'}}>football</p>
                    </div>
                    <img className="product__image" src="footballposter1.jpg" width="250px" height="215px" />
                    <div className="footballnike" style={{textAlign: 'left', marginLeft: '20px'}}>
                      <ul>
                        <li><button className="tablink" onclick="openPage('mercurial', this,'whitesmoke')">Nike Mercurial</button></li><br />
                        <li><button className="tablink" onclick="openPage('phantom', this, 'whitesmoke')">Nike Phantom</button></li><br /><br /><br /><br /><br />
                      </ul>
                    </div>
                  </div>
                  <div className="runnig" style={{marginLeft: '105px'}}>
                    <div className="runningmenu" style={{display: 'flex', borderBottom: '2px solid black', padding: '3px', margin: '15px'}}>
                      <img className="product__image" src="logo1-removebg-preview__2_-removebg-preview.png" width="70px" height="70px" style={{marginTop: '20px'}} />
                      <p style={{marginTop: '50px', fontSize: '20px', fontWeight: 'bold', marginLeft: '50px'}}>running</p>
                    </div>
                    <img className="product__image" src="runningnikeposter.jpg" width="200px" height="215px" />
                    <div className="runningproduct" style={{textAlign: 'left', marginLeft: '20px'}}>
                      <ul>
                        <li><button className="tablink" onclick="openPage('zx', this, 'whitesmoke')">Nike ZoomX</button></li><br />
                        <li><button className="tablink" onclick="openPage('az', this, 'whitesmoke')">Nike Air Zoom</button></li><br />
                        <li><button className="tablink" onclick="openPage('am', this, 'whitesmoke')">Nike Air Max</button></li><br />
                        <li><button className="tablink" onclick="openPage('jr', this, 'whitesmoke')">Nike Joyride</button></li><br /><br /><br />
                        <br />
                      </ul>
                    </div>
                  </div>
                </ul>                    
              </li>
              <li style={{position: 'relative', fontSize: '17px', marginLeft: '10px', marginRight: '10px', fontWeight: 'bold'}}><button className="tablink">Nhãn Hiệu</button>
                <ul className="sub-menu">
                  <div className="originals" style={{}}>
                    <div className="orginalsmenu" style={{display: 'flex', borderBottom: '2px solid  rgba(5, 103, 231, 0.863)', padding: '3px', margin: '20px'}}>
                      <img className="product__image" src="1-removebg-preview.png" width="65px" height="65px" style={{marginTop: '10px', marginBottom: '10px'}} />
                      <p style={{marginTop: '35px', fontSize: '20px', color: 'rgba(5, 103, 231, 0.863)', fontWeight: 'bold', marginLeft: '30px'}}>originals</p>
                    </div>
                    <img className="product__image" src="originalposter.jpg" width="200px" height="210px" />
                    <div className="originalsproduct" style={{textAlign: 'left', marginLeft: '20px'}}>
                      <ul>
                        <li><button style={{fontSize: '13px', width: '100px'}} className="tablink" onclick="openPage('Shoesm', this,'whitesmoke')">Stan Smith</button></li><br />
                        <li><button style={{fontSize: '13px', width: '100px'}} className="tablink" onclick="openPage('Shoeyz', this, 'whitesmoke')">Yeezy</button></li><br />
                        <li><button style={{fontSize: '13px', width: '100px'}} className="tablink" onclick="openPage('Shoess', this, 'whitesmoke')">Super Star</button></li><br />
                        <li><button style={{fontSize: '13px', width: '100px'}} className="tablink" onclick="openPage('Shoenmd', this,'whitesmoke')">NMD</button></li><br /><br /><br />
                      </ul>
                    </div>
                  </div>
                  <div className="jordan" style={{marginLeft: '120px'}}>
                    <div className="jordanmenu" style={{display: 'flex', borderBottom: '2px solid black', padding: '2px', margin: '15px'}}>
                      <img className="product__image" src="logo2-removebg-preview.png" width="70px" height="70px" style={{marginTop: '20px'}} />
                      <p style={{marginTop: '50px', fontSize: '20px', fontWeight: 'bold', marginLeft: '50px'}}>jordan</p>
                    </div>
                    <img className="product__image" src="jordanposter.jpg" width="200px" height="215px" />
                    <div className="jordanproduct" style={{textAlign: 'left', marginLeft: '20px'}}>
                      <ul>
                        <li><button style={{fontSize: '13px', width: '100px'}} className="tablink" onclick="openPage('xxxv', this,'whitesmoke')">Air Jordan XXXV</button></li><br />
                        <li><button style={{fontSize: '13px', width: '100px'}} className="tablink" onclick="openPage('jd1', this, 'whitesmoke')">All Jordan 1</button></li><br /><br /><br /><br /><br />
                      </ul>
                    </div>
                  </div>
                </ul>
              </li>
              <li style={{position: 'relative', fontSize: '17px', marginLeft: '3px', marginRight: '3px', fontWeight: 'bold'}}><button className="tablink" onclick="openPage('KM', this,'whitesmoke')" id="Sle">Khuyến Mãi</button></li>
            </ul>
          </nav>
        </div>
      </div>
    </div> 
  </div></header2>

  <div className="banner">
    <video autoPlay muted loop id="myVideo">
      <source src="mecurialvideo.mp4" type="video/mp4" />
    </video>          
  </div>
  <div className="nhanbiet">
    <h1 style={{fontSize: '30px'}}>CÁC ĐẶC ĐIỂM NỔI BẬT</h1>
    <div className="row">
      <div className="col-4">
        <img className="product__image" src="mcnb.png" />
        <h1>KHÔNG DỪNG LẠI, KHÔNG BAO GIỜ
        </h1>
        <p>Phiên bản rút gọn của Flyknit upper là phiên bản đầu tiên thuộc loại này. Việc sử dụng số lượng vật liệu tối thiểu chỉ để lại những gì thực sự cần thiết trong khi giảm trọng lượng của nó trong quá trình này.</p><br />
      </div>
      <div className="col-4">
        <img className="product__image" src="mcnb2.png" />
        <h1>Dig In, Take Off
        </h1>
        <p>Tấm lót bàn chân trước có vùng Nike Aerotrak với các rãnh để tăng tốc bùng nổ. Các đinh tán của Chevron cung cấp lực kéo đa hướng theo từng bước.
        </p><br /><br />
      </div>
      <div className="col-4">
        <img className="product__image" src="mcnb1.png" />
        <h1>Grip and Go
        </h1>
        <p>Công nghệ NikeGrip trên đế giúp chân bạn không bị trượt khi thi đấu nóng lên.
        </p><br /><br /><br /><br />
      </div>
    </div>
  </div>
  <div className="thongso">
    <h1>THÔNG SỐ</h1>
    <div className="thongsongang">
      <ul className="cot">
        <li>Có dây buộc</li>
        <li>Thân giày bằng vải dệt kim
        </li>
        <li>Cảm giác ôm sát</li>
        <li>Lớp lót bằng vải dệt</li>
      </ul>
      <ul className="cot">
        <li>Đế giữa Boost
        </li>
        <li>Đế ngoài bằng cao su</li>
        <li>Mã sản phẩm: FY5727
        </li>
      </ul>
    </div>
  </div>
  <div className="small-container" id="small-container">
  </div>
  <h1>BỘ SƯU TẬP</h1>
  <div className="row">
    <div className="col-4">
      <div className="zoom">
        <img className="product__image" src="mc.jpg" />
        <p3>football</p3><br /><br />
        <h2 className="product__name">Nike Mercurial Air DragonFly</h2><br />
        <p6>Giảm: <span className="sale">900000 đ</span></p6>
        <p className="sale" />
        <p>Size: 25-47</p>
        <p5>Vui lòng chọn size: <input type="number" className="product__size" min={25} max={47} defaultValue={25} /> cm</p5><br /><br /><br />
        <p2>Giá: </p2><p2 className="product__price">1.200.000 đ</p2><br /><br />
        <button className="btnpc" type="button">Add To Cart</button>
      </div>
    </div>
    <div className="col-4">
      <div className="zoom">
        <img className="product__image" src="mc1.jpg" />
        <p3>football</p3><br /><br />
        <h2 className="product__name">Nike Mercurial Air CR7</h2><br />
        <p6>Giảm: <span className="sale">900000 đ</span></p6>
        <p className="sale" />
        <p>Size: 25-47</p>
        <p5>Vui lòng chọn size: <input type="number" className="product__size" min={25} max={47} defaultValue={25} /> cm</p5><br /><br /><br />
        <p2>Giá: </p2><p2 className="product__price">1.200.000 đ</p2><br /><br />
        <button className="btnpc" type="button">Add To Cart</button>
      </div>
    </div>
    <div className="col-4">
      <div className="zoom">
        <img className="product__image" src="mc3.jpg" />
        <p3>football</p3><br /><br />
        <h2 className="product__name">Nike Mercurial Air WhiteGreen</h2><br />
        <p6>Giảm: <span className="sale">900000 đ</span></p6>
        <p className="sale" />
        <p>Size: 25-47</p>
        <p5>Vui lòng chọn size: <input type="number" className="product__size" min={25} max={47} defaultValue={25} /> cm</p5><br /><br /><br />
        <p2>Giá: </p2><p2 className="product__price">1.200.000 đ</p2><br /><br />
        <button className="btnpc" type="button">Add To Cart</button>
      </div>
    </div>
    <div className="col-4">
      <div className="zoom">
        <img className="product__image" src="mc4.jpg" />
        <p3>football</p3><br /><br />
        <h2 className="product__name">Nike Mercurial Air BlackPanther</h2><br />
        <p6>Giảm: <span className="sale">900000 đ</span></p6>
        <p className="sale" />
        <p>Size: 25-47</p>
        <p5>Vui lòng chọn size: <input type="number" className="product__size" min={25} max={47} defaultValue={25} /> cm</p5><br /><br /><br />
        <p2>Giá: </p2><p2 className="product__price">1.200.000 đ</p2><br /><br />
        <button className="btnpc" type="button">Add To Cart</button>
      </div>
    </div>
    <div className="col-4">
      <div className="zoom">
        <img className="product__image" src="mc5.jpg" />
        <p3>football</p3><br /><br />
        <h2 className="product__name">Nike Mercurial Air Neymar10</h2><br />
        <p6>Giảm: <span className="sale">900000 đ</span></p6>
        <p className="sale" />
        <p>Size: 25-47</p>
        <p5>Vui lòng chọn size: <input type="number" className="product__size" min={25} max={47} defaultValue={25} /> cm</p5><br /><br /><br />
        <p2>Giá: </p2><p2 className="product__price">1.200.000 đ</p2><br /><br />
        <button className="btnpc" type="button">Add To Cart</button>
      </div>
    </div>
</div>


  </React.Fragment>

  );
  }
}
export default App;
