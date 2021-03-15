import React from 'react';

import ListCreate from  './ListCreate'
import ListEdit from './ListEdit'
import GamesDisplay from './GamesDisplay';

const Index = (props) => {
    return(
        <div>
            <GamesDisplay />
            <ListCreate />
            <ListEdit />
        </div>
    )
}

export default Index;