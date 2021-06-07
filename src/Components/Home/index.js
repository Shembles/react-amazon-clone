import React from 'react'
import Product from '../Product'
import "./index.css"

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                  className="home__image"
                  src="./Uploads/Images/banner6.jpg"
                  alt="Banner__logo"
                />
                <div className="home__row">
                    <Product
                       id="7567445"
                       title="Magic Bullet Blender, Small, Silver, 11 Piece Set"
                       price={149.99}
                       image="./Uploads/Images/Magic Bullet Blender, Small, Silver, 11 Piece Set.jpg"
                       rating={4}
                     />
                    <Product
                       id="26446545"
                       title="TC-Helicon Vocal Effects Processor (GOXLR)"
                       price={5999.99}
                       image="./Uploads/Images/TC-Helicon Vocal Effects Processor (GOXLR).jpg"
                       rating={5}
                     />
                    <Product
                       id="7560987"
                       title="Nintendo Switch Pro Controller"
                       price={199.99}
                       image="./Uploads/Images/Nintendo Switch Pro Controller.jpg"
                       rating={4}
                     />
                </div>
                <div className="home__row">
                    <Product
                       id="7568565"
                       title="Skullcandy Sesh Evo True Wireless In-Ear Earbud - True Black"
                       price={499.99}
                       image="./Uploads/Images/Skullcandy Sesh Evo True Wireless In-Ear Earbud - True Black.jpg"
                       rating={5}
                     />
                    <Product
                       id="2347445"
                       title="Fitbit Versa 2 Health and Fitness Smartwatch with Heart Rate, Music, Alexa Built-In, Sleep and Swim Tracking, Black/Carbon, One Size (S and L Bands Included)"
                       price={1299.99}
                       image="./Uploads/Images/Fitbit.jpg"
                       rating={3}
                     />
                </div>
                <div className="home__row">
                     <Product
                       id="1177543"
                       title="SAMSUNG 40-inch Class LED Smart FHD TV 1080P (UN40N5200AFXZA, 2019 Model) Repeat  TV 1080P (UN40N5200AFXZA, 2019 Model)"
                       price={6299.99}
                       image="./Uploads/Images/SAMSUNG 40-inch Class LED Smart FHD TV 1080P (UN40N5200AFXZA, 2019 Model).jpg"
                       rating={5}
                     />
                </div>
            </div>
        </div>
    )
}

export default Home
