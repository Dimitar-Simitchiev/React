import { useState } from "react";
import { useNavigate, } from "react-router-dom";


const AddEmployee = () => {
    // state variables
    const randomId = function(length = 6) {
        return Math.random().toString(36).substring(2, length+2);
      };
    const [_id, idchange] = useState(randomId);
  
    const [type, typechange] = useState('');
    const [price, pricechange] = useState('');
    const [img, imgchange] = useState('');

    const navigate=useNavigate();

    // functions
    const handlesubmit = (e) => {
        e.preventDefault();
        const empobj = {type, price, img ,_id};
        
        console.log(empobj);

        fetch("http://localhost:3030/jsonstore/mercedes", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(empobj)
        }).then(() => {
            console.log(empobj);
            navigate(-1);
        }).catch((err) => {
            console.log(err.message);
        })
    }



    return (
        <div>

            <form className="container" onSubmit={handlesubmit}>
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <div className="form-group">
                            <label> TYPE OF CAR</label>
                            <input value={type} onChange={e => typechange(e.target.value)} className="form-control" required></input>
                            {type.length == 0 && <span className="errormessage"> Please enter the type</span>}
                        </div>
                        <div className="form-group">
                            <label>Price       </label>
                            <input value={price} onChange={e => pricechange(e.target.value)} className="form-control" required></input>
                            {price.length == 0 && <span className="errormessage">Please enter the Price</span>}
                        </div>
                        <div className="form-group">
                            <label>Picture</label>
                            <input value={img} onChange={e => imgchange(e.target.value)} className="form-control" ></input>

                        </div>
                        <div className="form-group">
                            <br></br>
                            <button className="btn btn-success" type="submit">Submit</button>
                        </div>
                    </div>
                </div>
            </form>

        </div>
    );
}

export default AddEmployee;