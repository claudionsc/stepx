import React from 'react'
import { TMStyle } from './StyleTamanhos'

export const Tamanhos = (props) => {
    return (
        <TMStyle>
            <input type="button" value='34' disable={props.disable34} className="tamanhos-btn" />
            <input type="button" value='35' disable={props.disable35} className="tamanhos-btn" />
            <input type="button" value='36' disable={props.disable36} className="tamanhos-btn" />
            <input type="button" value='37' disable={props.disable37} className="tamanhos-btn" />
            <input type="button" value='38' disable={props.disable38} className="tamanhos-btn" />
            <input type="button" value='39' disable={props.disable39} className="tamanhos-btn" />
            <input type="button" value='40' disable={props.disable40} className="tamanhos-btn" />
            <input type="button" value='41' disable={props.disable41} className="tamanhos-btn" />
            <input type="button" value='42' disable={props.disable42} className="tamanhos-btn" />
            <input type="button" value='43' disable={props.disable43} className="tamanhos-btn" />
            <input type="button" value='44' disable={props.disable44} className="tamanhos-btn" />
            <input type="button" value='45' disable={props.disable45} className="tamanhos-btn" />
            <input type="button" value='46' disable={props.disable46} className="tamanhos-btn" />
        </TMStyle>
    )
}
