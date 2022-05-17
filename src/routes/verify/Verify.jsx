import { useState } from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import './Verify.css'

const Verify = () => {  
    const [data, setData] = useState("Not Found");
    const [torchOn, setTorchOn] = useState(false);   

    return (
        <div className="verify-page">
            <div className="container">
            <h1>Verify Code</h1>
            <div className="wrapper flex">
                <div className="scan">
                <BarcodeScannerComponent
                        width={350}
                        height={350}
                        torch={torchOn}
                        onUpdate={(err, result) => {
                            if (result) {
                                setData(result.text)
                            }
                            else {
                                setData("Not Found")
                                // setError("Not recognised")
                            };
                        }}
                    />
                <p>{data}</p>
                </div>

                <div className="product-info">
                    <h2>Product details</h2>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Verify
