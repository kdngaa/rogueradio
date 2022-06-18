import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactAudioPlayer from 'react-audio-player';
import { getSongs } from '../../store/song.js'
import './Splash.css';


//import Swiper
import SwiperCore, { EffectCoverflow, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide, Autoplay } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";




SwiperCore.use([EffectCoverflow, Pagination]);







function Splash() {
    const dispatch = useDispatch()


    const sessionUser = useSelector((state) => state.session.user)
    const songs = useSelector(state => state.song);

    const songInfo = Object.values(songs)







    useEffect(() => {
        dispatch(getSongs())
    }, [dispatch])



    return (
        <>
            <div className="carousel">
                {/* <img src="img_girl.jpg" alt="Girl in a jacket" width="500" height="600"/> */}
            </div>
            <h1 className="heading1">This Week's Picks</h1>
            <p className="underText">
                <img src="https://res.cloudinary.com/dv3gxfdon/image/upload/v1655593935/fast-forward_pnrnse.png" alt="Girl in a jacket" width="30" height="30" />
                Scroll and Browse
                <img src="https://res.cloudinary.com/dv3gxfdon/image/upload/v1655593909/fast-forward_oz3oh1.png" alt="Girl in a jacket" width="30" height="30" />
            </p>
            {/* <div className="topCards"> */}

            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                spaceBetween={50}
                slidesPerView={6}
                centeredSlides
                onSlideChange={() => console.log("slide change")}
                onSwiper={swiper => console.log(swiper)}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                {songInfo.map((song, idx) => (
                    <SwiperSlide key={idx}>
                        <a href={`/songs/${song.id}`}>  <img src={song.songImg} className="songImg" /></a>
                        <p className="songText">{`${song.title}`}</p>
                        <p className="songTextArtist">{`${song.artist}`}</p>
                        {/* <p className="songText"><ReactAudioPlayer
                            src={`${song.audioFile}`}
                            controls
                        /></p> */}
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* </div> */}
        </>

    )
}


export default Splash;
