import React, { Component } from "react";

export default class Modal extends Component {
  constructor(props) {
    super(props);

    this.renderCart = this.renderCart.bind(this);
    this.onDel = this.onDel.bind(this);
    this.onDownNumber = this.onDownNumber.bind(this);
    this.upNumber = this.upNumber.bind(this);
  }

  onDel(item) {
    this.props.onDel(item);
  }

  onDownNumber(item) {
    this.props.downNumber(item);
  }

  upNumber(item) {
    this.props.upNumber(item);
  }

  renderCart(cart) {
    return cart.map((item, index) => {
      return (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{item.tenSP}</td>
          <td>
            <img src={item.hinhAnh} width={50} alt={item.tenSP} />
          </td>
          <td>
            <button onClick={() => this.onDownNumber(item)}>-</button>{item.soLuong}<button onClick={() => this.upNumber(item)}>+</button>
          </td>
          <td>{item.donGia}</td>
          <td>{item.donGia * item.soLuong}</td>
          <td>
            <button className="btn btn-danger" onClick={() => this.onDel(item)}>Delete</button>
          </td>
        </tr>
      )
    })
  }
  render() {
    let { cart } = this.props;
    return (
      <div
        className="modal fade"
        id="modelId"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div
          className="modal-dialog"
          style={{ maxWidth: "1000px" }}
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Giỏ hàng</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Mã sản phẩm</th>
                    <th>tên sản phẩm</th>
                    <th>hình ảnh</th>
                    <th>số lượng</th>
                    <th>đơn giá</th>
                    <th>thành tiền</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    this.renderCart(cart)
                  }
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
