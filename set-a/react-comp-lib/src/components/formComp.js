import "../assets/scss/component/_form.scss";
import ButtonComp from "./buttonComp";
import InputComp from "./inputComp";

function FormComp() {
  const mr = { marginRight: "25px" };

  function submitPayment(){
   console.log("button clickedddddd")
  }

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

          <div style={{ display: "inline-flex", width: "100%" }}>
            <div style={{ marginRight: "25px", width: "100%" }}>
              <InputComp
                for="expdate"
                label="Expiry Date"
                type="text"
                id="expdate"
                name="expdate"
                placeholder="MM"
              />
            </div>

            <div
              style={{ marginRight: "25px", marginTop: "19px", width: "100%" }}
            >
              <InputComp
                type="text"
                id="expdate"
                name="expdate"
                placeholder="YY"
              />
            </div>

            <div style={{ width: "100%" }}>
              <InputComp
                for="expdate"
                label="CVC/CVV"
                type="text"
                id="expdate"
                name="expdate"
                placeholder="CVV"
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
          <div className="inline-input" style={{ width: "100%" }}>
            <div style={{ width: "100%", marginRight: "25px" }}>
              <InputComp
                for="postalcode"
                label="Postal Code"
                type="text"
                id="postalcode"
                name="postalcode"
                placeholder="Postal Code"
              />
            </div>
            <div style={{ width: "100%" }}>
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
          <ButtonComp type="button" onSelect={submitPayment}>Continue to Confirmation</ButtonComp>
        </form>
      </div>
    </div>
  );
}

export default FormComp;
