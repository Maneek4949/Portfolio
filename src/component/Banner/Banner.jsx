import { useState,useEffect } from "react";
import { Container ,Row, Col } from "react-bootstrap";
import HeaderImg from "../../assets/img/banner.png";
import './banner.css'

function Banner(){
    const [loopNum ,setLoopNum]=useState(0);
    const toRotate=["Web Developer","Web Designer" ,"Student"]
    const [deleting ,setDeleting]=useState(false)
    const [index,setIndex] = useState(1);
    const [text,setText]=useState("")
    const [delta,setDelta]=useState(300-Math.random()*100)
    const period=2000;


    useEffect(()=>{
        let ticker=setInterval(()=>{
            tick();
        },delta)
        return ()=>{ clearInterval(ticker)};
    },[text])

    const tick =()=>{
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i]
        let updatedText = deleting ? fullText.substring(0,text.length-1):fullText.substring(0,text.length+1)
        setText(updatedText);

        if (deleting){
            setDelta(prevDelta => prevDelta/2)

        }
        if (!deleting && updatedText === fullText){
            setDeleting(true)
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period)
        }
        else if(deleting && updatedText===""){
            setDeleting(false)
            setDelta(500)
            setLoopNum(loopNum + 1)
            setIndex(1);
        }
        else {
            setIndex(prevIndex => prevIndex + 1);
          }


    }




    return (
        <section className="banner" id="home">
        <Container>
        <Row className="align-items-center">
        <Col xs={12} md={6} xl={7} className="text">
        <span className="tagline"> Welcome to my Portfolio</span>
        <div className="intro">
        <h1>{`Hi I'm Manoj`} <span className="wrap">{text}</span></h1></div>
        <h5 className="info">
            A tech enthisiast and interested in reaching peep's<br></br> to
            share thoughts and learn somthing new.
          </h5>
        </Col>
        <Col xs={12} md={6} xl={5} className="me">
            <img src={HeaderImg} alt="Header Img"/>
        </Col>
        </Row>
        </Container>
        </section>

    )
}


export default Banner;