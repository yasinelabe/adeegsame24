import React from 'react'
import Header from './common/Header'
import Nav from './common/Nav'

export default function Notfound() {
    return (
        <div>
            <Header/>
        <div className="notfound">
            <h4><i className="fa fa-exclamation"></i></h4>
            <small>Page not found</small>
            <a href="/" className="button">Back To Home</a>
        </div>
        </div>

    )
}
