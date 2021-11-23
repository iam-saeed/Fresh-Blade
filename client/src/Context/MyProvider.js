import MyContext from './MyContext';

import React, { useState } from 'react'

const MyProvider = () => {
    const [state, setState] = useState([
        {
            date: '',
            name: '',
            time: ''
        }
    ])

    return (
        <MyContext.Provider value={{
            
        }}>
            
        </MyContext.Provider>
    )
}

export default MyProvider
