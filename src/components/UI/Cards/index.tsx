import React from 'react'
import "./style.css"
import { MaskText } from '@/components';
import { Header } from '../OffersSection/styles';
import Image from 'next/image';
import featured_mobile_banner from '../../../../public/images/featured_mobile_banner.png';

function Cards() {

return (
<div className=' mt-10'>
     <Header>
       <MaskText phrases={["Leatest Projects"]} tag="h1" />
       <MaskText phrases={["Experience the future of banking with RAFT. We're",'here to empower your financial journey.',]} tag="p" />
     </Header>
    <div className="cards-container">
    <ul id="cards">
        <li className="card" id="card1">
            <div className=" p-[30px]  rounded-[50px] h-[80vh] flex justify-center items-center transition-all duration-300 bg-[#52B2CF] ">
            <div className=' w-full'>
                <Image
                    src={featured_mobile_banner}
                    alt="featured_mobile_banner"
                    width={400}
                    height={400}
                    draggable="false"
                    className=' object-cover w-auto'
                />
            </div>
              <div className=' w-3/6'></div>
            </div>
        </li>
        <li className="card" id="card2">
            <div className="card-body">
                <h2>Card 2</h2>
            </div>
        </li>
        <li className="card" id="card3">
            <div className="card-body">
                <h2>Card 3</h2>
            </div>
        </li>
        <li className="card" id="card4">
            <div className="card-body">
                <h2>Card 4</h2>
            </div>
        </li>
    </ul>
</div>
</div>
  )

}

export default Cards