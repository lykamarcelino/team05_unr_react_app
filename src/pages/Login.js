//Currently has the connect to QuickBooks button, redirect goes to Oauth page of the React app, need to close the window
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../src/static/Cloud_Logo.png';
import Background from '../static/Default_Dark.jpg';
import '../App.css';
const backgroundStyle = {
    backgroundImage: `url(${Background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh'
}

const roundedblock = {
    borderRadius: '50px',
    border: 'white',
    padding: '100px',
    width: '500px',
    height: '300px',
    background: '#F5F5F5',
    display: 'block',
    marginTop: '200px',
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
    alignContent: 'center',
    fontWeight: 'bold'
}

export default class Login extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            display: false
        };
    }

    componentDidMount() {
        this.init();
    }

    async init() {
        let script1 = document.createElement('script')
        script1.src = "https://appcenter.intuit.com/Content/IA/intuit.ipp.anywhere-1.3.3.js"
        script1.type = "text/javascript"
        script1.onload = () => {
            let script2 = document.createElement('script')
            script2.src = "https://js.appcenter.intuit.com/Content/IA/intuit.ipp.anywhere-1.3.3.js"
            script2.type = "text/javascript"
            script2.onload = () => {
                let script3 = document.createElement('script')
                script3.innerHTML = `
          intuit.ipp.anywhere.setup({
            grantUrl: 'http://localhost:8080/connectToQuickbooks',
            datasources: {
                quickbooks : true,
                payments : true
            },
              paymentOptions:{
                intuitReferred : true
            }
          });
        `
                script3.type = "text/javascript"

                document.getElementsByTagName("head")[0].appendChild(script3)
            }
            document.getElementsByTagName("head")[0].appendChild(script2)
        }
        document.getElementsByTagName("head")[0].appendChild(script1)
    }

    render() {

        return (
            <div style={backgroundStyle}>
                <h3>Sales Forecasting
                    <img src={Logo} alt="Main Logo" hspace="20"/>
                </h3>
                <div style={roundedblock}>
                    Sign in with QuickBooks
                    <br></br>
                    <div dangerouslySetInnerHTML={{__html: "<ipp:connectToIntuit></ipp:connectToIntuit>"}}></div>
                </div>
            </div>
        );
    }
}
