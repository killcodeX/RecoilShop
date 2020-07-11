import React from 'react';
import {
    Link
  } from "react-router-dom";
  

export default function Navbar() {
    return (
        <>
            <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <div className="navbar-item">Your Code Store</div>
                </div>
                <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="btns">
                            <Link class="button is-primary" to="/addcode"><strong>Add Snippet</strong></Link>
                        </div>
                    </div>
                </div>
            </nav>  
        </>
    )
}