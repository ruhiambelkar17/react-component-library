import "../assets/scss/component/_form.scss";
import ButtonComp from "./buttonComp";
import InputComp from "./inputComp";

function FormComp() {
  const mr = { marginRight: "25px" };
  return (
    <div className="form-container">
      <h3>Payment Information</h3>
      <br />
      <div>
        <form action="">
          <div>
            <label for="paymethod" className="form-label">
              Select Payment Method
            </label>
            <div style={{ display: "inline-flex", width: "100%" }}>
              <div className="form-input" style={{ marginRight: "25px" }}>
                <input id="visa" type="radio" />
                <label className="form-label" for="visa">
                  Visa
                </label>
              </div>

              <div className="form-input" style={{ marginRight: "25px" }}>
                <input type="radio" id="Mastercard" />
                <label className="form-label" for="Mastercard">
                  Mastercard
                </label>
              </div>
              <div className="form-input">
                <input type="radio" id="PayPal" />
                <label className="form-label" for="PayPal">
                  PayPal
                </label>
              </div>
            </div>
          </div>

          <div>
            <InputComp
              for="cardnumber"
              label="Card Number"
              type="text"
              id="cardnumber"
              name="cardnumber"
              placeholder="0000-0000-0000-0000"
            ></InputComp>
          </div>
          <div className="inline-input" style={{maxWidth:"100%"}}>
            <div style={{ marginRight: "15px" }} className="column-input">
              <InputComp
                for="expdate"
                label="Expiry Date"
                type="text"
                id="expdate"
                name="expdate"
                placeholder="MM"
              />
            </div>
            <div className="column-input">
              <InputComp
                for="expdate"
                label="Expiry Date"
                type="text"
                id="expdate"
                name="expdate"
                placeholder="YYYY"
              />
            </div>

            <div className="column-input">
              <InputComp
                for="cvv"
                label="Cvv"
                type="password"
                id="cvv"
                name="cvv"
                placeholder="cvv"
              />
            </div>
          </div>

          <div>
            <InputComp
              for="cardholder"
              label="Card Holder's name"
              type="text"
              id="cardholder"
              name="cardholder"
              placeholder="card holder's name.."
            />
          </div>
          <div className="inline-input">
            <div className="column-input">
              <InputComp
                for="postalcode"
                label="Postal Code"
                type="text"
                id="postalcode"
                name="postalcode"
                placeholder="Postal Code"
              />
            </div>
            <div className="column-input">
              <InputComp
                for="country"
                label="Country"
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
