import React from 'react';


import { Cards, Charts, CountryPicker} from './components';

import styles from './App.module.css';
import { fetchdata} from './api';
import corona from './images/corona.jpg';


class App extends React.Component {

 state = {
     data: {},
     country: '',
 }

    async componentDidMount() {
        const fetcheddata = await fetchdata();
        this.setState({data:fetcheddata});
    }
    
    handleCountryChange = async (country) => {

        const fetcheddata = await fetchdata(country);

         this.setState({data:fetcheddata, country: country});
    }




    render() {
        const {data,country} = this.state;
        return(
        <div className={styles.container}>
            <img className={styles.image} src={corona} />
           <Cards data={data} />
           <CountryPicker handleCountryChange={this.handleCountryChange} />
           <Charts data={data}  country={country}/>
        </div>
        )
    }
}

export default App;