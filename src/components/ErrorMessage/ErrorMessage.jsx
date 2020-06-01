import React from 'react'

import './ErrorMessage.scss'

const ErrorMessage = ({error, toggleClose})=>{
        return (<div className="container__error">
            <div className="close-buttom">
                <i class="fas fa-times" onClick={()=>toggleClose('')}></i>
            </div>
            <div className="icon__wrapper">
                <i class="fas fa-exclamation-triangle"></i>
            </div>
            <h1 className="title">Opps... Algo deu errado</h1>
            <p className="error">{error}</p>
        </div>
    )
}

export default ErrorMessage