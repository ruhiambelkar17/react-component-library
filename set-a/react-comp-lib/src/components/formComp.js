import "../assets/scss/component/_form.scss";
import ButtonComp from "./buttonComp";

function FormComp() {
  return (
    <div className="form-container">
      <h3>Payment Information</h3>
      <br />
      <div >
        <form action="">
          <div>
            <label for="paymethod" className="form-label">Select Payment Method</label>
            <div style={{display:"inline-flex",width:"100%"}}>
                <div className="form-input" style={{marginRight:"25px"}}>
                    <input id="visa" type="radio" />
                    <label className="form-label" for="visa">Visa</label>
                </div>
                
                <div className="form-input"style ={{marginRight:"25px"}} >
                    <input type="radio" id="Mastercard" />
                    <label className="form-label" for="Mastercard">Mastercard</label>
                </div>
                <div className="form-input"  >
                    <input type="radio" id="PayPal" />
                    <label className="form-label" for="PayPal" >PayPal</label>
                </div>
            </div>
          </div>

          <div>
            <label for="cardnumber" className="form-label">Card Number</label>
            <input
            className="form-input"
              type="text"
              id="cardnumber"
              name="cardnumber"
              placeholder="0000-0000-0000-0000"
            />
          </div>
          <div className="inline-input">
            <div className="column-input">
              <label for="expdate" className="form-label">Expiry Date</label>
              <div className="inline-input">
                <input
                className="form-input"
                  type="text"
                  id="expdate"
                  name="expdate"
                  placeholder="MM"
                  style={{marginRight:"15px"}}
                />
                <input
                className="form-input"
                  type="text"
                  id="expdate"
                  name="expdate"
                  placeholder="YYYY"
                />
              </div>
            </div>
            <div className="column-input" style={{display:"flex",justifyContent:"end"}}>
              <label for="cvv" className="form-label">Cvv</label>
              <input
              className="form-input"
                type="password"
                id="cvv"
                name="cvv"
                placeholder="cvv"

              />
            </div>
          </div>

          <div>
            <label for="cardholder" className="form-label">Card Holder's name</label>
            <input
            className="form-input"
              type="text"
              id="cardholder"
              name="cardholder"
              placeholder="card holder's name.."
            />
          </div>
          <div className="inline-input">
            <div className="column-input">
              <label for="postalcode" className="form-label">Postal Code</label>
              <div className="inline-input">
                <input
                className="form-input"
                  type="text"
                  id="postalcode"
                  name="postalcode"
                  placeholder="Postal Code"
                />
              </div>
            </div>
            <div className="column-input">
              <label for="country"className="form-label">Country</label>
              <input
              className="form-input"
                type="text"
                id="country"
                name="country"
                placeholder="Country"
              />
            </div>
            
           
          </div>
          <ButtonComp>Continue to Confirmation</ButtonComp>
        </form>
      </div>
    </div>
  );
}

export default FormComp;
