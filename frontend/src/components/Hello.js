import React from 'react'

const Hello = () => {
    // return (
    //     <div>
    //         <h1> Hello David - Hello.js </h1>
    //     </div>
    // )

    return React.createElement(
        'div',
        {id: 'HelloDIV', className: 'HelloDIV'},
        React.createElement(
            'h1', 
            {id: 'HelloH1', className: 'HelloH1'}, 
            'Hello David Element'
        )
    )
}

export default Hello