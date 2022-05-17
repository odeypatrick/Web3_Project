import QRCode from "react-qr-code";

const Verify = () => {
    return (
        <div className="verify-page">
            <h1>Verify Code</h1>
            <div style={{ background: 'white', padding: '16px' }}>
                <QRCode value="mossoi"/>
            </div>
        </div>
    )
}

export default Verify
