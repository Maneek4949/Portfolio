import { useState,useEffect } from "react";
import AvtaarImg from "../../assets/img/Banner1.png";
import hand from "../../assets/img/hand.png";

function Banner(){
    const [loopNum ,setLoopNum]=useState(0);
    const toRotate=["Full Stack Deveplor","React Developer" , "Dreamer"]
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
        <section className="mt-40" id="home">
        <div className="container mx-auto">
            <div className="grid md:grid-cols-3 gap-4">
                <div className="md:col-span-2 flex flex-col justify-center h-full">
                    <span className="relative bottom-1 text-xl"> Welcome to my Portfolio</span>
                    <h1 >Hi {"I'm Manoj "}<span className="bg-gradient-to-r from-fuchsia-700 to-indigo-800 text-transparent bg-clip-text">{ " "+text}</span></h1>
                    <h5 className="text-xl opacity-80">A tech enthisiast and eager to innovate.</h5>
                </div>
                <div className="relative">
                <img  src={AvtaarImg} alt="avImg"/>
                <img className='absolute bottom-0 animate-waving-hand' src={hand} alt="hand"/>
                </div>
                
            </div>
        </div>
        </section>

    )
}


export default Banner;