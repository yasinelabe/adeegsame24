import React from 'react'

export default function Faq() {
    return (
        <section className="cd-faq js-cd-faq container max-width-md margin-top-lg margin-bottom-lg">
            <ul className="cd-faq__categories">
                <li><a className="cd-faq__category cd-faq__category-selected truncate" href="#basics">Basics</a></li>
                <li><a className="cd-faq__category truncate" href="#mobile">Mobile</a></li>
                <li>{/* ... */}</li>
                {/* ... */}
            </ul> {/* cd-faq__categories */}
            <div className="cd-faq__items">
                <ul id="basics" className="cd-faq__group">
                    <li className="cd-faq__title"><h2>Basics</h2></li>
                    <li className="cd-faq__item">
                        <a className="cd-faq__trigger" href="#0"><span>How do I change my password?</span></a>
                        <div className="cd-faq__content">
                            <div className="text-component">
                                {/* content here */}
                            </div>
                        </div> {/* cd-faq__content */}
                    </li>
                    <li className="cd-faq__item">
                        <a className="cd-faq__trigger" href="#0"><span>How do I sign up?</span></a>
                        <div className="cd-faq__content">
                            <div className="text-component">
                                {/* content here */}
                            </div>
                        </div> {/* cd-faq__content */}
                    </li>
                    <li className="cd-faq__item">{/* ... */}</li>
                    {/* ... */}
                </ul> {/* cd-faq__group */}
                <ul id="mobile" className="cd-faq__group">
                    {/* ... */}
                </ul> {/* cd-faq__group */}
                {/* ... */}
            </div> {/* cd-faq__items */}
            <a href="#0" className="cd-faq__close-panel text-replace">Close</a>
            <div className="cd-faq__overlay" aria-hidden="true" />
        </section>
      
    )
}
