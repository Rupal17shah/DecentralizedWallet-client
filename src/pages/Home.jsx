import React from 'react'

const Home = () => {
    return (
        <>

            <section className='body-bg'>
                <div className='body-bg-screen'>
                    <div className='hero-section-content'>
                        <div className='hero-txt'>
                            <h1 className='hero-text'>B<span className='blue-text'>lock</span>Stream</h1>
                            <p className='hero-text'>stream of INFINITY</p>
                            <p className='hero-text'>earn INFINITY, trade INFINITY</p>
                            <h2>
                                <div onClick={() => { alert("dfsdifuh") }} className='button'>Get Started</div></h2>
                        </div>
                        <div>
                            <img className='herosvg' src='/Images/herosvg.png' alt='hero' />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='readme-section'></div>
            </section>
        </>
    )
}

export default Home