import React from 'react'
import Profissional from './Profissionais/index'

const index = () => {
    return (
        <div>
            <div>
                <h1>Equipe especializada em cuidar dos seus cabelos</h1>
            </div>
            <div>
                <div>
                    <Profissional />
                    <Profissional />
                </div>
                <div>
                    <Profissional />
                    <Profissional />
                </div>
            </div>
            <div>
                <Button />
            </div>
        </div>
    )
}

export default index
