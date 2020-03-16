import React, { useState, useEffect } from 'react'

import { AppState } from 'react-native'

import List from './screens/list'


export default () => {


    const [ appState, setAppState ] = useState(null)


    useEffect( () => AppState.addEventListener('change', setAppState), [])
    
    return(
        <List appState={appState} />
    )
}