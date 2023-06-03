import Section from "./Section";
import {useState} from 'react';

const About = () => {

    const [config, setConfig] = useState(1);

    return(
        <div>
            <h1 className="m-3 text-3xl font-extrabold flex justify-center">FAQ</h1>
            <div className="mx-5 sm:mx-10 md:mx-20 lg:mx-[100px]">
                <Section isVisible={config === 1} setIsVisible={()=>setConfig(config===1?0 : 1)} heading="Can I edit my order?" para="Your order can be edited before it reaches the restaurant. You could contact customer support team via chat or call to do so. Once order is placed and restaurant starts preparing your food, you may not edit its contents."/>

                <Section isVisible={config === 2} setIsVisible={()=>setConfig(config===2?0 : 2)} heading="I want to cancel my order." para="We will do our best to accommodate your request if the order is not placed to the restaurant (Customer service number: 080-987654321). Please note that we will have a right to charge a cancellation fee up to full order value to compensate our restaurant and delivery partners if your order has been confirmed.

    "/>

                <Section isVisible={config === 3} setIsVisible={()=>setConfig(config===3?0 : 3)} heading="Will Insta Food be accountable for quality/quantity?" para="Quantity and quality of the food is the restaurant's responsibility. However in case of issues with the quality or quantity, kindly submit your feedback and we will pass it on to the restaurant."/>

                <Section isVisible={config === 4} setIsVisible={()=>setConfig(config===4?0 : 4)} heading="Is there a minimum order value?" para="We have no minimum order value and you can order for any amount."/>

                <Section isVisible={config === 5} setIsVisible={()=>setConfig(config===5?0 : 5)} heading="Do you charge for delivery?" para="Delivery fee varies from city to city and is applicable if order value is below a certain amount. Additionally, certain restaurants might have fixed delivery fees. Delivery fee (if any) is specified on the 'Review Order' page."/>

                <Section isVisible={config === 6} setIsVisible={()=>setConfig(config===6?0 : 6)} heading="How long do you take to deliver?" para="Standard delivery times vary by the location selected and prevailing conditions. Once you select your location, an estimated delivery time is mentioned for each restaurant."/>

                <Section isVisible={config === 7} setIsVisible={()=>setConfig(config===7?0 : 7)} heading="What are your delivery hours?" para="Our delivery hours vary for different locations and depends on availability of supply from restaurant partners."/>

                <Section isVisible={config === 8} setIsVisible={()=>setConfig(config===8?0 : 8)} heading="Is single order from many restaurants possible?" para="We currently do not support this functionality. However, you can place orders for individual items from different restaurants."/>
            </div>
        </div>
    )
}

export default About;