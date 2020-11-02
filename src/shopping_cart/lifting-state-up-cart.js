import React, { Component } from "react";
import DanhSachSanPham from "./danh-sach-san-pham";
import Modal from "./modal";
import data from "./data.json";

export default class LiftingStateUpCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data,

      detail: {},

      cart: [],
    }

    this.detail = this.detail.bind(this);
    this.onCart = this.onCart.bind(this);
    this.onDel = this.onDel.bind(this);
    this.downNumber = this.downNumber.bind(this);
    this.upNumber = this.upNumber.bind(this);
  }
  detail(item) {
    this.setState({
      detail: item,
    });
  }
  onCart(item) {
    const cartNew = {
      maSP: item.maSP,
      tenSP: item.tenSP,
      hinhAnh: item.hinhAnh,
      soLuong: 1,
      donGia: item.giaBan,
    }

    let index = this.state.cart.findIndex(e => e.maSP == cartNew.maSP);
    let cart = [...this.state.cart];
    if (index == -1) {
      cart = [...this.state.cart, cartNew]
    } else {
      alert("Sản phẩm đã có trong giỏ hàng!");
    }
    this.setState({
      cart,
    });
  }
  onDel(item) {
    let { cart } = this.state;
    let index = cart.findIndex(e => e.maSP == item.maSP);

    if (index != -1) {
      cart.splice(index, 1);
    };
    this.setState({
      cart,
    });
  }
  downNumber(item) {
    let { cart } = this.state;
    let index = cart.findIndex(e => e.maSP == item.maSP);

    if (index != -1) {
      cart[index].soLuong -= 1;
      if (cart[index].soLuong < 1) {
        cart[index].soLuong = 1;
      }
    }

    this.setState({
      cart,
    })
  }
  upNumber(item) {
    let { cart } = this.state;
    let index = cart.findIndex(e => e.maSP == item.maSP);

    if (index != -1) {
      cart[index].soLuong += 1;
    }

    this.setState({
      cart,
    })
  }
  render() {
    let { detail, cart } = this.state;
    return (
      <div>
        <h3 className="title">Bài tập giỏ hàng</h3>
        <div className="container">
          <button
            className="btn btn-danger"
            data-toggle="modal"
            data-target="#modelId"
          >
            Giỏ hàng ({cart.length})
          </button>
        </div>
        <DanhSachSanPham data={this.state.data} detail={this.detail} onCart={this.onCart} />
        <Modal cart={cart} onDel={this.onDel} downNumber={this.downNumber} upNumber={this.upNumber} />
        {
          Object.keys(detail).length > 0 && (
            <div className="row">
              <div className="col-sm-5">
                <img className="img-fluid" src={detail.hinhAnh} alt={detail.tenSP} />
              </div>
              <div className="col-sm-7">
                <h3>Thông số kỹ thuật</h3>
                <table className="table">
                  <tbody>
                    <tr>
                      <td>Màn hình</td>
                      <td>{detail.tenSP}</td>
                    </tr>
                    <tr>
                      <td>Hệ điều hành</td>
                      <td>{detail.heDieuHanh}</td>
                    </tr>
                    <tr>
                      <td>Camera trước</td>
                      <td>{detail.cameraTruoc}</td>
                    </tr>
                    <tr>
                      <td>Camera sau</td>
                      <td>{detail.cameraSau}</td>
                    </tr>
                    <tr>
                      <td>RAM</td>
                      <td>{detail.ram}</td>
                    </tr>
                    <tr>
                      <td>ROM</td>
                      <td>{detail.rom}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )
        }
      </div>
    );
  }
}
