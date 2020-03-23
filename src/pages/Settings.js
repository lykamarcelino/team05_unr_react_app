import React from 'react';

const newblock = {
    backgroundColor: "whitesmoke",
    borderRadius: "50px",
    display: "block",
    width: "1200px",
    height: "600px",
    marginLeft: "220px",
    marginTop: "40px"
}

export const Settings = (props) => (
    <>
        <div style={newblock}>
            <div style={{alignContent: 'center', marginLeft: '500px', marginTop: '20px', fontSize:'1.8em', fontWeight:'bold'}}> User Settings</div>
            <div style={{alignContent: 'left', marginLeft: '35px', marginTop: '20px', fontSize:'1.2em'}}>
            </div>
            <div style={{alignContent: 'center', marginLeft: '500px', fontSize:'1.2em', marginTop:'80px'}}></div>
        </div>
    </>
)