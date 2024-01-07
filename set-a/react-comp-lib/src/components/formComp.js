import '../assets/css/styles.css';

function FormComp(){

    return (
        <div >
            <h3>Payment Information</h3>
            <br />
            <form>
                <div className='inline-input'>
                    <label for="PayMethod" >Select Payment Method</label><br />
                    <input type="text" />
                </div>
            </form>
        </div>
    )

}

export default FormComp;