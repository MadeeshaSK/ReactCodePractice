import {Button} from '@mui/material';
import CustomButton from './view/CustomButton';
import Counter from './view/counter';

import React, { useState } from 'react';

function App2() {
    const [countNumber, setCountNumber] = useState(0);

    const handleDownloadFunction =()=> {
        console.log('Download started')
    }
    const handleUploadFunction =()=> {
        console.log('Upload started')
    }

    return (
        <div>
            <Button
                variant='contained'
                onClick={()=>{
                    alert('Hello')
                }}
            >Downloadbtn</Button>
            <Button
                variant='contained'
                onClick={()=>{
                    console.log('Hello')
                }}
            >Uploadbtn</Button>
            <Button
                style={
                    {
                        backgroundColor:'red',
                        color:'white'
                    }
                }
            >Click</Button>
            <CustomButton
                label = "Download"
                onClick={handleDownloadFunction}
                style={{}}
            />
            <CustomButton
                label = "Upload"
                onClick={handleUploadFunction}
                style={{}}
            />
            <div>
                <button
                    onClick={()=>{
                        setCountNumber(countNumber+1)
                    }}
                >Increase Count

                </button>
                <Counter count={countNumber}/>
            </div>
        </div>
    )
}

export default App2