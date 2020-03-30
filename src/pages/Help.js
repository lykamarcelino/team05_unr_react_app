import React from 'react';

const newblock = {
    backgroundColor: "whitesmoke",
    borderRadius: "50px",
    display: "block",
    width: "1200px",
    height: "600px",
    marginLeft: "220px",
    marginTop: "40px",
}

export const Help = () => (
    <>
    <div style={newblock}>
        <div style={{alignContent: 'center', marginLeft: '390px', marginTop: '20px', fontSize:'1.8em', fontWeight:'bold'}}> Welcome to Sales Forecasting!</div>
        <div style={{alignContent: 'left', marginLeft: '35px', marginTop: '20px', fontSize:'1.2em'}}>
            To generate a new report, click on the Generate tab. <br></br>
            Input your report details into the fields. <br></br>
            Click complete! <br></br>
        </div>
        <div style={{alignContent: 'center', marginLeft: '500px', fontSize:'1.2em', marginTop:'80px'}}> This will hold an image</div>
    </div>
    </>
)