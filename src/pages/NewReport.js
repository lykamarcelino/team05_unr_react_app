import React from 'react';

const newblock = {
    backgroundColor: "whitesmoke",
    borderRadius: "50px",
    display: "block",
    width: "1200px",
    height: "600px",
    textAlign: "center",
    marginLeft: "270px",
    marginTop: "40px",
    alignContent: "center"
}

export const NewReport = (props) => (
    <div style={newblock}> Generate a New Report </div>
)