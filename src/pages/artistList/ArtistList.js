import React from 'react';
import './styles.css';
import violin from './../../assets/violin.jpeg';
import sparrow from './../../assets/sparrow.png';
import flower from './../../assets/flower.jpg';
// import logo from './../../assets/logo.png';
import Footer from './../../components/footer/Footer';
import Nav from './../../components/nav/Nav';

const ArtistList = () => {
    return (
        <React.Fragment>
            <Nav/>
            <div className='main'>
                <h1>All artists</h1>
                <div className='artists-wrapper'>
                    <div className='artist-card'>
                        <img src={sparrow} alt='Little Sparrow' />
                        <p className='art-title'>Little Sparrow</p>
                        <p className='painter'>Dony Boyadzhieva, 2018</p>
                        <a className='art-link' href='/doni'>View gallery &#8594;</a>
                    </div>
                    <div className='artist-card'>
                        <img src={flower} alt='Protea Flower' />
                        <p className='art-title'>Protea Watercolor</p>
                        <p className='painter'>Violeta Boyadzhieva, 2018</p>
                        <a className='art-link' href='#'>View gallery &#8594;</a>
                    </div>
                    <div className='artist-card'>
                        <img src={violin} alt='Violinist' />
                        <p className='art-title'>The Violinist</p>
                        <p className='painter'>Rumen Manev Sr., 2018</p>
                        <a className='art-link' href='#'>View gallery &#8594;</a>
                    </div>
                </div>
                <Footer/>
            </div>  
        </React.Fragment>   
    )
}

export default ArtistList; 