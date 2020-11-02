import React, { Component } from "react";
import SanPham from "./san-pham";

export default class DanhSachSanPham extends Component {
  constructor(props) {
    super(props);

    this.onChangeItem = this.onChangeItem.bind(this);
    this.onCart = this.onCart.bind(this);
  }
  onChangeItem(item) {
    this.props.detail(item);
  }
  onCart(item) {
    this.props.onCart(item);
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          {
            this.props.data.map((item, index) => {
              return (
                <SanPham key={index} item={item} onChangeItem={this.onChangeItem} onCart={this.onCart} />
              )
            })
          }
        </div>
      </div>
    );
  }
}
