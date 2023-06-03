import Section from "./Section";
import {useState} from 'react';

const About = () => {

    const [config, setConfig] = useState(1);

    return(
        <div>
            <Section isVisible={config === 1} setIsVisible={()=>setConfig(config===1?0 : 1)} heading="Heading1" para="paragraph1"/>

            <Section isVisible={config === 2} setIsVisible={()=>setConfig(config===2?0 : 2)} heading="heading2" para="paragraph2"/>

            <Section isVisible={config === 3} setIsVisible={()=>setConfig(config===3?0 : 3)} heading="heading3" para="paragraph3"/>
        </div>
    )
}

export default About;