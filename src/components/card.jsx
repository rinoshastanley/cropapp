import React, { useState, useEffect } from 'react'

function CropCard(props) {
    const [image, setImage] = useState("");


    useEffect(() => {
        debugger
        if ((props?.imageArray || []).length > 0 && props.imageArray[0].image) {
            setImage(props.imageArray[0].image)
        }
    }, [])

    return (
        <div className="col-sm-3 col-md-6 col-lg-4" >
            <div className="card crop" style={{ width: '18rem' }}>
                <img src={image} className="card-img-top image" alt="..." />
                <div className="card-body crop-body">
                    <h5 className="card-title">{props.cropName}</h5>
                </div>
            </div>
        </div>

    )
}

export default CropCard