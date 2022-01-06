import React from 'react'

const index = (props) => {
    return (
        <div>
            <div>
                <img 
                    src={props.src}
                    alt={props.alt}
                />
            </div>
            <div>
                <div>
                    <p>Lorem Ipsum sit a met is a solor s/qouci</p>
                </div>
                <div>
                    <p></p>
                </div>
                <div>
                    <button>Agendar horário</button>
                </div>
            </div>
        </div>
    )
}

export default index
