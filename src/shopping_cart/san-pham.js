import React, { Component } from "react";

export default class SanPham extends Component {
  constructor(props) {
    super(props);

    this.onChangeItem = this.onChangeItem.bind(this);
    this.onCart = this.onCart.bind(this);
  }
  onChangeItem(item) {
    this.props.onChangeItem(item);
  }
  onCart(item) {
    this.props.onCart(item);
  }
  render() {
    let { item } = this.props;
    return (
      <div className="col-sm-4">
        <div className="card">
          <img className="card-img-top" src={item.hinhAnh} alt="" />
          <div className="card-body">
            <h4 className="card-title">{item.tenSP}</h4>
            <button className="btn btn-success" onClick={() => this.onChangeItem(item)}>Chi tiết</button>
            <button className="btn btn-danger" onClick={() => this.onCart(item)}>Thêm giỏ hàng</button>
          </div>
        </div>
      </div>
    );
  }
}
