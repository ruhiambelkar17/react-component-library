import "../assets/scss/component/_form.scss";

export default function ButtonComp(props){
    return (
        <div >
            <button className="form-button">{props.children}</button>
            </div>
    )
};