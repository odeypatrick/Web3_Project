import { useState } from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";

const Verify = () => {  
    const [data, setData] = useState("Not Found");    

    return (
        <div className="verify-page">
            <h1>Verify Code</h1>
            <div className="wrapper">
            <>
            <BarcodeScannerComponent
                width={500}
                height={500}
                onUpdate={(err, result) => {
                if (result) setData(result.text);
                else setData("Not Found");
                }}
            />
            <p>{data}</p>
            </>
            </div>
        </div>
    )
}

export default Verify
