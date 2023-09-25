    import React from 'react'
    import AOS from 'aos';
    import 'aos/dist/aos.css';
    import { useEffect } from 'react';

    function Prof() {
    useEffect(()=>{
        AOS.init()
    }, [])     
    return (
        <div className='fullProficiency'>
            <div className="proficiencyTitle">
                <h1 data-aos="fade-up">Proficiency</h1>
            </div>

            <div className='sectionProficiency' data-aos="fade-up">
                <div className="leftProf">
                    <div className="proftitle left"><h1>Language</h1></div>
                    {/* ID */}
                    <div className="skillContainer" data-aos="zoom-in">

                        <div className="skillimage fornode">
                            <img src="./public/indonesia.png" alt="" width={50} />
                            <p>Indonesia</p>
                        </div>
                        <div className="skillinfo adv">
                            <h1>Advanced</h1>
                        </div>
                        
                    </div>
                    {/* English */}
                    <div className="skillContainer" data-aos="zoom-in">

                        <div className="skillimage fornode">
                            <img src="./public/inggris.png" alt="" width={50} />
                            <p>English</p>
                        </div>
                        <div className="skillinfo imdt">
                            <h1>Intermediate</h1>
                        </div>
                        
                    </div>
                </div>

    {/* BATAS */}

                <div className="midProf">
                    <div className="proftitle mid"><h1>Software</h1></div>
                    {/* AE */}
                    <div className="skillContainer" data-aos="zoom-in">

                        <div className="skillimage ">
                            <img src="./public/ae.png" alt="" width={50} />
                            <p>AfterEffect</p>
                        </div>
                        <div className="skillinfo adv">
                            <h1>Advanced</h1>
                        </div>
                        
                    </div>
                    {/* PR */}
                    <div className="skillContainer" data-aos="zoom-in">

                        <div className="skillimage forprpro">
                            <img src="./public/prpro.png" alt="" width={50} />
                            <p>PremierePro</p>
                        </div>
                        <div className="skillinfo adv">
                            <h1>Advanced</h1>
                        </div>
                        
                    </div>
                    {/* COREL */}
                    <div className="skillContainer" data-aos="zoom-in">

                        <div className="skillimage forcorel">
                            <img className='lurus1' src="./public/corel.png" alt="" width={50} />
                            <p>CorelDraw</p>
                        </div>
                        <div className="skillinfo adv">
                            <h1>Advanced</h1>
                        </div>
                        
                    </div>
                    {/* PHOTOSHOP */}
                    <div className="skillContainer" data-aos="zoom-in">

                        <div className="skillimage forpshop">
                            <img className='lurus1' src="./public/ps.png" alt="" width={50} />
                            <p>Photoshop</p>
                        </div>
                        <div className="skillinfo bgnr">
                            <h1>Beginner</h1>
                        </div>
                        
                    </div>
                    {/* VSCODE */}
                    <div className="skillContainer" data-aos="zoom-in">

                        <div className="skillimage forvscode">
                            <img className='lurus1' src="./public/vscode.png" alt="" width={50} />
                            <p>VSCode</p>
                        </div>
                        <div className="skillinfo imdt">
                            <h1>Intermediate</h1>
                        </div>
                        
                    </div>
                    {/* WINBOX */}
                    <div className="skillContainer" data-aos="zoom-in">

                        <div className="skillimage forwinbox">
                            <img className='lurus1' src="./public/winbox.png" alt="" width={50} />
                            <p>WinBox</p>
                        </div>
                        <div className="skillinfo bgnr">
                            <h1>Beginner</h1>
                        </div>
                        
                    </div>
                </div>
                
    {/* BATAS */}
        
                <div className="rightProf">
                    <div className="proftitle right"><h1>Technology</h1></div>
                    {/* html */}
                    <div className="skillContainer" data-aos="zoom-in">

                        <div className="skillimage ">
                            <img src="./public/html.png" alt="" width={50} />
                            <p>HTML</p>
                        </div>
                        <div className="skillinfo adv">
                            <h1>Advanced</h1>
                        </div>
                        
                    </div>
                    {/* css */}
                    <div className="skillContainer" data-aos="zoom-in">

                        <div className="skillimage ">
                            <img src="./public/css.png" alt="" width={50} />
                            <p>CSS</p>
                        </div>
                        <div className="skillinfo imdt">
                            <h1>Intermediate</h1>
                        </div>
                        
                    </div>
                    {/* js */}
                    <div className="skillContainer" data-aos="zoom-in">

                        <div className="skillimage forjs">
                            <img src="./public/js.png" alt="" width={50} />
                            <p>Javascript</p>
                        </div>
                        <div className="skillinfo imdt">
                            <h1>Intermediate</h1>
                        </div>
                        
                    </div>
                    {/* c++ */}
                    <div className="skillContainer" data-aos="zoom-in">

                        <div className="skillimage forc">
                            <img src="./public/c++.png" alt="" width={50} />
                            <p>C++</p>
                        </div>
                        <div className="skillinfo imdt">
                            <h1>Intermediate</h1>
                        </div>
                        
                    </div>
                    {/* react */}
                    <div className="skillContainer" data-aos="zoom-in">

                        <div className="skillimage forreact">
                            <img src="./public/react.png" alt="" width={50} />
                            <p>React</p>
                        </div>
                        <div className="skillinfo bgnr">
                            <h1>Beginner</h1>
                        </div>
                        
                    </div>
                    {/* node */}
                    <div className="skillContainer" data-aos="zoom-in">

                        <div className="skillimage fornode">
                            <img src="./public/node.png" alt="" width={50} />
                            <p>NodeJs</p>
                        </div>
                        <div className="skillinfo bgnr">
                            <h1>Beginner</h1>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
    }

    export default Prof