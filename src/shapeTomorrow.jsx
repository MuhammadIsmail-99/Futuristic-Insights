import ShapeTomorrowImage from "./assets/shapeTomorrowImage.svg";

function ShapeTomorrow() {
    return (
        <div style={{ position: 'relative', marginTop: '40px' }}>
            <img src={ShapeTomorrowImage} alt="Group of friends taking a selfie" style={{ width: '100%', height: 'auto' }} />
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: 'white',
                fontSize: '3em',
                padding: '1em 2em',
                fontFamily: '"Chakra Petch", sans-serif', 
            }}>
                #Shape Tomorrow
            </div>
        </div>
    );
}

export default ShapeTomorrow;
