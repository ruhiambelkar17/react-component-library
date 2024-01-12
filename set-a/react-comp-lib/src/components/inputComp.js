import "../assets/scss/component/_form.scss";

export default function InputComp(props){
    return (
        <div>
            <label for={props.for} className="form-label">{props.label}</label>
            <input
        className="form-input"
              type={props.type}
              id={props.id}
              name={props.name}
              placeholder={props.placeholder}
              
            />
        </div>
    )
}