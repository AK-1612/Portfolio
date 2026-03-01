import React from 'react';

const Section = ({ id, title, children, className = '' }) => {
    return (
        <section id={id} className={`section ${className}`}>
            <div className="container">
                {title && (
                    <div className="section-header">
                        <h2 className="section-title">{title}</h2>
                    </div>
                )}
                <div className="section-content">
                    {children}
                </div>
            </div>
        </section>
    );
};

export default Section;
