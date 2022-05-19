import { useState } from 'react'
// import BarcodeScannerComponent from "react-qr-barcode-scanner";
import { QrReader } from 'react-qr-reader';
import './Verify.css'

const Verify = () => {  
    const [data, setData] = useState("Not Found");
    const [products, setProducts] = useState([
        {
            id: "100",
            name: "Syrup",
            image: "https://images.pexels.com/photos/1275893/pexels-photo-1275893.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
    ])
    const [currentProduct, setCurrentProduct] = useState([])

    return (
        <div className="verify-page">
            <div className="container">
            <h1>Verify Product</h1>
            <div className="wrapper flex">
                <div className="scan">
                    <QrReader
                        onResult={(result, error) => {
                        if (!!result) {
                            setData(result?.text);
                            setCurrentProduct(products.filter(product => product.id == result?.text))
                            // console.log(result.text)
                        }

                        if (!!error) {
                            console.info(error);
                        }
                        }}
                        style={{ width: '100%'}}
                    />
                    <h2>Value: {data}</h2>
                </div>

                <div className="product-info">
                    <h2>Product details</h2>
                    <div className="details">
                        <div className="detail-item flex">
                            <div>
                                <p><b>Product Id:</b> {currentProduct[0]?.id}</p>
                                <p><b>Product name:</b> {currentProduct[0]?.name}</p>
                            </div>
                            <div className="product-image">
                                <img src={currentProduct[0]?.image} alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Verify
