import "../assets/scss/mixins/_form.scss";

function FormComp() {
  return (
    <div className="form-container">
      <h3>Payment Information</h3>
      <br />
      <div >
        <form action="">
          <div>
            <label for="paymethod" className="form-label">Select Payment Method</label>
            <input
              type="text"
              id="paymethod"
              name="firstname"
              placeholder="Select Payment Method"
            />
          </div>

          <div>
            <label for="cardnumber" className="form-label">Card Number</label>
            <input
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
                  type="text"
                  id="expdate"
                  name="expdate"
                  placeholder="MM"
                  style={{marginRight:"15px"}}
                />
                <input
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
                type="text"
                id="country"
                name="country"
                placeholder="Country"
              />
            </div>
            
           
          </div>
          <div >
            <button className="form-button">Continue to Confirmation</button>
            </div>
        </form>
      </div>
    </div>
  );
}

export default FormComp;
