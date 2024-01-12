import "../assets/scss/component/_form.scss";

export default function ButtonComp(props){
    return (
        <div >
            <button className="form-button" type={props.type}  onClick={props.onSelect}>{props.children}</button>
            </div>
    )
};