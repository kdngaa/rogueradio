import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactAudioPlayer from 'react-audio-player';
import { getSongs } from '../../store/song.js'
import './Splash.css';


//import Swiper
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { width } from "dom7";

SwiperCore.use([EffectCoverflow, Pagination]);


function Splash() {
    const dispatch = useDispatch()


    const sessionUser = useSelector((state) => state.session.user)
    const songs = useSelector(state => state.song);
    console.log(songs)
    const songInfo = Object.values(songs)

    useEffect(() => {
        dispatch(getSongs())
    }, [dispatch])



    return (
        <>
            <img src="RogueRadio.png" alt="image" className='logo' />

            <h1 className="heading1">This Week's Top Streams</h1>
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
                        <img src={song.songImg} className="songImg" href={`/songs/${song.id}`} />
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
