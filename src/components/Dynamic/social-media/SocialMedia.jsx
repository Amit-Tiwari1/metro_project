import React from 'react';
import 'reactjs-popup/dist/index.css';
import { FacebookIcon, FacebookShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton, TelegramShareButton, TelegramIcon, } from "react-share";

const SocialMedia = () => {
    const ShareBtn = "https://play.google.com/store/apps/details?id=io.nowgray.lkometro"
    return (
        <>
            <div >
                <FacebookShareButton url={ShareBtn} quote={"NearByMetro"} hashtag={'#NearByMetro'}>
                    <FacebookIcon size={30} round={true} />&nbsp;&nbsp;
                </FacebookShareButton>
                <TwitterShareButton url={ShareBtn} title={'NearByMetro'}>
                    <TwitterIcon size={30} round={true} />&nbsp;&nbsp;
                </TwitterShareButton>
                <WhatsappShareButton url={ShareBtn}>
                    <WhatsappIcon size={30} round={true} />&nbsp;&nbsp;
                </WhatsappShareButton>
                <TelegramShareButton url={ShareBtn} title={"NearByMetro"}>
                    <TelegramIcon size={30} round={true} />
                </TelegramShareButton>
            </div>

        </>
    )
}

export default SocialMedia;