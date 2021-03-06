import React, {useContext, useEffect} from 'react';
import Navbar from '../layouts/navbar';
import Footer from '../layouts/footer';
import SideBar from '../layouts/sidebar';
import CodeList from './codeList';
import { GlobalContext } from '../context/StateManager';


export default function Home({history}) {

    const { loggedIn } = useContext(GlobalContext)

   

    return (
        <>
            <Navbar/>
            <section className='section'>
                <div className='container'>
                    <div className='columns'>
                        <div className='column is-3'>
                            <div className='box'>
                                <SideBar/>
                            </div>
                        </div>
                        <div className='column is-9'>
                                <CodeList/>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}
