import React, { useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

const alanKey = 'c9f8c1261c34b8e3a9140f985c4bd3a32e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {

    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand:(command,articles) => {
                if(command === 'newHeadlines'){
                    console.log(articles);
                }
            }
        })
    },[])

    return(
        <div>
            <h1>AI NEWS</h1>
        </div>
    );
}

export default App;