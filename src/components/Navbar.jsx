import React, { useState, useEffect } from 'react'
import './../App.css';
import logo from "./../assets/pizza/logo2.png"
import panier from "./../assets/pizza/paniers.png"
import remove from "./../assets/pizza/supprimer.png"
import { useDispatch, useSelector } from 'react-redux';
import { removeArticle } from '../features/panier/panierSlice';


export default function Navbar() {
    const panierDisplay = useSelector((state) => state.panier.value);
    const dispatch = useDispatch()
    const [sum, setSum] = useState(0);
    
    const sumPanier = () => {
        let total = 0;
        for (let i = 0; i < panierDisplay.length; i++) {
            console.log('prix de ma pizza ' + panierDisplay[i].prix);
            total += panierDisplay[i].prix;
        }
        setSum(total);
        console.log('prix total ' + total);
    }
    
    useEffect(() => {
        sumPanier();
    }, [panierDisplay]);

  return (
    <div className='bg-[#660000]'>
        <div className="navbar h-20 border-white border-b-8 w-[100%]">
            <div className="flex-1">
                <a className="btn btn-ghost w-64 "><img src={logo} alt=""/></a>
            </div>

            <div className="flex-none">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <img src={panier} alt="" />
                            <span className="badge badge-sm indicator-item ">{panierDisplay.length}</span>
                        </div>
                    </div>
                    <div tabIndex={0} className=" z-[1] card card-compact dropdown-content w-96 bg-white shadow mt-7 rounded-md">
                            <div className="card-body ">
                                <span className="font-extrabold text-xl text-gray-400 "><span className='text-black text-3xl'>Panier d'achat</span> <br/>{panierDisplay.length} pizza(s)</span>
                                <hr className='border-dashed border-gray-300 border-[1px]'/>
                                <div>
                                {
                                   panierDisplay.map((element, key) => {
                                        return(
                                            <div key={key}>
                                                <div className='flex text-black text-3xl'>
                                                    <p>{element.nom}</p>
                                                    <p className='text-end'>€{element.prix},00</p>
                                                </div>
                                                <div className='flex p-4 text-xl text-black justify-end'>
                                                    <button onClick={() => {dispatch(removeArticle(element[key]))}}><img src={remove} alt=""  width={"20%"}/></button>
                                                </div>
                                                <hr className='border-dashed border-gray-300 border-[1px]' />
                                            </div>
                                        )
                                   })
                                }
                                </div>
                                <span className="text-black font-extrabold text-xl">Total: 
                                    {sum}€
                                </span>
                                <div className="card-actions">
                                    <button className="btn bg-black btn-block text-white text-xl">Commander</button>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='h-screen bg-white imageBg flex flex-col items-center justify-center text-7xl'>
            <p className='backdrop-blur-lg text-center align-middle p-10 text-white'>Pizzeria <span className='text-[#660000] font-semibold'>Da Moreno </span><br /><span className='italic font-extralight text-black text-4xl'>Mamma Mia che è pizza !</span></p>
           
        </div>
    </div>
  )
}
