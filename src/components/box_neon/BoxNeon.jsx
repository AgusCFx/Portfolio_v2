import './boxNeon.css'

export const BoxNeon = ({component, rhomb}) => {
    return(
        <div className="boxNeon">
            <div className="neonLeftUp__container">
                <div className="neonLeftUp"></div>
            </div>
            {component}
            {rhomb && <div className="neonsRhomb">
                    <div className="neonsRhomb__Rhomb rhomb1" />
                    <div className="neonsRhomb__Rhomb rhomb2" />
                    <div className="neonsRhomb__Rhomb rhomb3" />
                </div>
            }
        </div>
    )
}