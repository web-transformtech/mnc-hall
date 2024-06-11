// import { useEffect } from 'react';
import './App.css';
import Home from './Pages/Home';

function App() {
    // // Redirect to old Domain to New Domain Code Don't Delete This Code...
    // const oldLink = window.location.origin + window.location.pathname;
    // // console.log(oldLink);
    // const newLink = `https://mncvel.com/`;
    // // console.log(newLink);

    // const Redirect = () => {
    //     if (oldLink !== newLink) {
    //         window.location.href = `https://mncvel.com`;
    //     }
    // };

    // useEffect(() => {
    //     Redirect();
    // }, []);
    // // Redirect to old Domain to New Domain Code Don't Delete This Code...
    return (
        <>
            <Home />
        </>
    );
}

export default App;
