import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import bookLogo from "../../assets/book-icon.png"


function Welcome(props) {
    return (
        <div className='d-flex flex-column container-app bg-books justify-content-center align-items-center'>
            <img width="150px" src={bookLogo} alt="logo"/>
            <h2 className='main-title'>Welcome to the library !</h2>
            <div>
                <Link className='link btn btn-primary btn-main-page' to="/booklist"><FontAwesomeIcon icon={faBook} />Booklist</Link>
                <Link className='link btn btn-warning btn-main-page' to="/addbook"><FontAwesomeIcon icon={faPlus} />Add Book</Link>
            </div>
        </div>
    );
}

export default Welcome;