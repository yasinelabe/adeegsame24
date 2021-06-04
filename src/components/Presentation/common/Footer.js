import React from 'react'

export default function Footer() {
    return (
        <div className="footer">
                <ul>
                    <li>
                        <a href="/"><i className="fa fa-home"></i></a>
                    </li>
                    <li>
                        <a href="/profile"><i className="fa fa-user"></i></a>
                    </li>
                    <li>
                        <a href="/faq"><i className="fa fa-question-circle"></i></a>
                    </li>
                    <li>
                        <a href="/change_password"><i className="fa fa-lock"></i></a>
                    </li>
                </ul>
        </div>
        
    )
}
