import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Home(){

    const [scrollY, setScrollY] = useState(0);

    window.addEventListener("scroll", function(){
        setScrollY(window.scrollY);
    });

    return(
        <div style={{width: "100%"}}>
            <img className="main-pano" src={require("../Image/Pano.png")} alt="logo" width="100%" height="100%" style={{transform: "scale("+ (1 - Math.min(Math.max((scrollY) * 0.005 / 10, 0), 0.5)) +")", borderRadius: (scrollY) / 10 * 30 }}/> 
            <div className="main-text" style={{transform: "scale("+ Math.min(Math.max((scrollY + 900) / 1000, 0), 1.4) +")", zIndex: 1, overflowX: "hidden", position: "absolute"}}>
                <p style={{color: "#92DDC8"}} className="spaced">UNREAL ENGINE</p>
                <p className="spaced">SUPERCHARGED</p>
            </div>
            <div style={{top: "100vh", position: "absolute"}}>
                <div className="spaced">
                    <div style={{display: "flex", flexDirection: "row", alignItems: "center", height: 120}}>
                        <p className="fakeh1" style={{color: "#92DDC8"}}>UNREAL</p><p className="fakeh1">IFY</p><h2 style={{color: "#92DDC8"}}>[ uhn-ree-uhl-uh-fahy]</h2>
                    </div>
                    <p>
                    Unrealify is a coding assistant driven by the community for the community. By adding features to Unreal and automating the boring stuff, we streamline your development experiance. 
                    </p>
                </div>
                    <iframe width="100%" height="500" src="https://www.youtube.com/embed/dHL4DvmwEb8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <div className="spaced">
                    <p className="fakeh1" style={{color: "#92DDC8", marginTop: 0, marginBottom: 0}}>FEATURES</p>
                </div>
                <div id="features"> 
                    <center style={{backgroundColor: "#000"}}>
                        <div style={{maxWidth: 1000}}>
                            <Carousel infiniteLoop={true} showArrows={true} autoPlay={true}>
                                <div>
                                    <img src={require("../Image/Carousel/1.png")} alt="logo" width="100%" height="100%"/>
                                </div>
                                <div>
                                    <img src={require("../Image/Carousel/2.png")} alt="logo" width="100%" height="100%"/>
                                </div>
                                <div>
                                    <img src={require("../Image/Carousel/3.png")} alt="logo" width="100%" height="100%"/>
                                </div>
                                <div>
                                    <img src={require("../Image/Carousel/4.png")} alt="logo" width="100%" height="100%"/>
                                </div>
                            </Carousel>
                        </div>
                    </center>
                    <div className="spaced">
                        <h2 style={{color: "#92DDC8", marginTop: 0, marginBottom: 0}}>
                        WHY UNREALIFY?
                        </h2>
                        <p>
                            <b>It's Light!</b>
                            <br/>
                            Unrealify uses the native Python user interface library and hand-created componets to ensure cross-platform compatability without bloat. 
                            <br/>
                            <br/>
                            <b>It's Versatile!</b>
                            <br />
                            Unrealify is all you'll need, anywhere: it can be used for any Unreal 4/5 project on/for any platform!
                            <br />
                            <br />
                            <b>It's Personal!</b>
                            <br />
                            Unrealify can be customized to your needs. Whether you are a C++/Blueprint developer, customize the app in the settings to suit your needs!
                            <br/>
                            <br/>
                            <b>It's Open Source!</b>
                            <br />
                            Meanings you can see the code it runs on and contribute to it. No hidden code, no strings attached.
                            <br />
                            <br />
                            <b>It's Community-Driven!</b>
                            <br />
                            Others can contribute snippets for you to use! In this community-driven software, everyone benifits from sharing.
                        </p>
                    </div>
                </div>
                <div id="download" className="spaced"> 
                    <p className="fakeh1" style={{color: "#92DDC8", marginTop: 0, marginBottom: 0}}>DOWNLOAD</p>
                    <div style={{display: "flex", flexDirection: "row", alignItems: "center", height: 120, paddingBottom: 50}}>
                        <p>Download Unrealify packaged or from source below. To report a bug or contribute, file an issue/PR in the GitHub repository. The documentation has instructions for installing and using Unrealify.
                            <br/>
                            <br/>
                            Happy Coding!
                        </p>
                    </div>
                    <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", height: 120, paddingBottom: 150, paddingTop: 100}}>
                        <a href="https://github.com/Cowland-Game-Studios/Unrealify/releases" target="_blank">
                            <img src={require("../Image/Buttons/Download.png")} alt="download" width="250" height="250"/>
                        </a>
                        <a href="https://github.com/Cowland-Game-Studios/Unrealify" target="_blank">
                            <img src={require("../Image/Buttons/GitHub.png")} alt="github" width="250" height="250"/>
                        </a>
                        <a href="https://www.youtube.com/channel/UCMcfj1Phz3G9xH0fUF_o9Jw" target="_blank">
                            <img src={require("../Image/Buttons/Youtube.png")} alt="docs" width="250" height="250"/>
                        </a>
                        <a href="https://cowlandgamestudios.itch.io/" target="_blank">
                            <img src={require("../Image/Buttons/Itch.png")} alt="itch" width="250" height="250"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}