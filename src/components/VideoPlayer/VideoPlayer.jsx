import {useRef, useMemo, useState, useEffect} from 'react';
import {usePlyr} from 'plyr-react';
import PropTypes from 'prop-types';
import 'plyr-react/plyr.css';
import './VideoPlayer.css';
// import captions from './captions.js';

export default function VideoPlayer({ videoSrc, captions = [] }) {
    // console.log("captions diterima: ", captions);
    const apiRef = useRef(null);
    const [currentCaption, setCurrentCaption] = useState('');

    const plyrParams = useMemo(
        () => ({
            source: {
                type: 'video',
                sources: [{ src: videoSrc, type: 'video/mp4'}],
            },
            options: {
                muted: false,
                volume: 1,
                keyboard: { focused: true, global: false },
            },
        }),
        [videoSrc]
    );

    const videoRef = usePlyr(apiRef, plyrParams);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.code !== "Space") return;

            const container = apiRef.current?.plyr?.elements?.container;
            const video = apiRef.current?.plyr?.media;
            if (!video || !container) return;

            const tag = document.activeElement.tagName;
            if (tag === "BUTTON") {
                document.activeElement.blur();
            }
            e.preventDefault();
            e.stopPropagation();

            if (video.paused) {
                video.play();
                container.classList.add("plyr--playing");
                container.classList.remove("plyr--paused");
            } else {
                video.pause();
                container.classList.remove("plyr--playing");
                container.classList.add("plyr--paused");
            }
        };

        window.addEventListener("keydown", handleKeyDown, true);
        return () => {
            window.removeEventListener("keydown", handleKeyDown, true);
        }
    }, []);

    useEffect(() => {
        let video = null;
        let handleTimeUpdate = null;

        const interval = setInterval(() => {
            video = apiRef.current?.plyr?.media;
            if (!video) return;

            clearInterval(interval);

            handleTimeUpdate = () => {
                const time = video.currentTime;
                const active = [...captions].reverse().find((c) => time >= c.time);
                console.log("waktu:", time, "caption:", active);
                setCurrentCaption(active ? active.text : "");
            };

            video.addEventListener("timeupdate", handleTimeUpdate);
        }, 200);

        return () => {
            clearInterval(interval);
            if (video && handleTimeUpdate) {
                video.removeEventListener("timeupdate", handleTimeUpdate);
            }
        };
    }, [captions]);

    return (
        <div className='w-full max-w-6xl mx-auto mt-7'>
            <div className='w-full overflow-hidden'>
                <video ref={videoRef} className='plyr-react plyr'/>
            </div>
            <p className='text-[#a2a2a8] text-left font-semibold mt-5 text-sm lg:text-base'>{currentCaption}</p>
        </div>
    )
}

VideoPlayer.propTypes = {
    videoSrc: PropTypes.string.isRequired,
    captions: PropTypes.arrayOf(
        PropTypes.shape({
            time: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
        })
    ),
};