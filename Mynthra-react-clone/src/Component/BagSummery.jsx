
const BagSummery =() =>{

    const bagsummery = {
        totalItem: 3,
        totalMRP: 1500,
        totalDiscount: 300,
        finalPayment : 1299
    };

  return (
    <div className="bag-summary">
    <div className="bag-details-container">
    <div className="price-header">PRICE DETAILS ({bagsummery.totalItem} Items) </div>
    <div className="price-item">
      <span className="price-item-tag">Total MRP</span>
      <span className="price-item-value">₹{bagsummery.totalMRP}</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Discount on MRP</span>
      <span className="price-item-value priceDetail-base-discount">-₹{bagsummery.totalDiscount}</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Convenience Fee</span>
      <span className="price-item-value">₹99</span>
    </div>
    <hr />
    <div className="price-footer">
      <span className="price-item-tag">Total Amount</span>
      <span className="price-item-value">₹{bagsummery.finalPayment}</span>
    </div>
  </div>
  <button className="btn-place-order">
    <div className="css-xjhrni">PLACE ORDER</div>
  </button>
  </div>
  )
}

export default BagSummery
