import React from 'react'
import Banner from './Banner'
import Info from './Info'
import '../style/Home.css';
import Product from './Product';

function Home() {
    return (
        <div className='home'>
            <Banner/>
            <Info/>
            <div className="home__document">
                <p className='home__documentText'>
                Nukushare Agro Limited is an innovative agricultural 
                technology service company that is working to increase farmers’ 
                access and use of the most improved seeds and other critically needed 
                farm inputs in Africa. The team leverages digital technologies to enable 
                farmers to get timely access to quality and affordable improved hybrid seeds 
                and other agricultural services. The Nukushare Agro initiative is aimed at improving 
                farmers’ productivity, resilience to changing climate conditions, and post-harvest management. 
                The team’s use of technology and unique ability to ensure traceability of each seed pack distributed 
                enables it to eliminate fake seeds and makes it the most preferred in the creation of value for its customers 
                and consumers.
                </p>
            </div>

            <div className="home__productTitle">
                <h1 className='title'>Our Products</h1>
            </div>

            <div className="home__products">
                <Product 
                img="https://media-eu.camilyo.software/media-eu/static/1521/102.jpg" 
                title="Rice Seeds"/>
                <Product 
                img="https://media-eu.camilyo.software/media-eu/static/1521/105.png" 
                title="Soybeans Seeds"/>
                <Product 
                img="https://media-eu.camilyo.software/media-eu/static/1521/103.png" 
                title="Maize Seeds"/>
                <Product 
                img="https://media-eu.camilyo.software/media-eu/static/1521/104.jpg" 
                title="Cowpea Seeds"/>
            </div>

            <div className="home__partners">
                <h1 className="home__partnersTitle">
                Our Impacts
                </h1>
            </div>
            <div className="home__partnerDetail">
                <div className="home__partnerDetailLeft">
                    <img 
                    src="https://media-eu.camilyo.software/media-eu/static/1502/540.png" 
                    alt="Zero hunger"/>
                </div>
                <div className="home__partnerDetailRight">
                    <div className="home__partnerDetailRightPage1">
                        <p>
                        Nukushare Agro empowers farmers by giving them 
                    sustainable access to high quality certified 
                    improved seeds and other Agro inputs and services that 
                    optimize farmer productivity, profitability, and economic growth. 
                    Increased income of our farmers ensures Nukushare Agro 
                    contribution towards the Sustainable Development Goal 1, No Poverty.
                        </p>
                    </div>
                    <div className="home__partnerDetailRightPage1">
                    <strong>Zero Hunger</strong>
                        <p>
                       
                        Increased
                        productivity of crops from our certified hybrid seeds ensures farmers 
                        harvest enough foods to feed the growing population.  We hence work 
                        diligently in achieving Sustainable Goal 2; Zero Hunger, by ensuring 
                        there is enough food to feed every individual.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
