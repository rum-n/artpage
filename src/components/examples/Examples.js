import React from 'react';
import './styles.css';
import violin from './../../assets/violin.jpeg';
import sparrow from './../../assets/sparrow.png';
import flower from './../../assets/flower.jpg';

const Examples = () => {
    return (
        <section>
            <div className='examples-wrapper'>
                <div className='art-example'>
                    <img src={sparrow} alt='Little Sparrow' />
                    <p className='art-title'>Little Sparrow</p>
                    <p className='painter'>Dony Boyadzhieva, 2018</p>
                    <a className='art-link' href='/doni'>View gallery &#8594;</a>
                </div>
                <div className='art-example'>
                    <img src={flower} alt='Protea Flower' />
                    <p className='art-title'>Protea Watercolor</p>
                    <p className='painter'>Violeta Boyadzhieva, 2018</p>
                    <a className='art-link' href='#'>View gallery &#8594;</a>
                </div>
                <div className='art-example'>
                    <img src={violin} alt='Violinist' />
                    <p className='art-title'>The Violinist</p>
                    <p className='painter'>Rumen Manev Sr., 2018</p>
                    <a className='art-link' href='#'>View gallery &#8594;</a>
                </div>
            </div>
        </section>
    )
}

export default Examples; 