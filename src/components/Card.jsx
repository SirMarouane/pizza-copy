import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Json from "../assets/json/pizza.json"
import marg from "./../assets/pizza/margaritha.jpg"
import chickentwist from "./../assets/pizza/chickenTwist.jpg"
import falafel from "./../assets/pizza/falafel.png"
import gardenLovers from "./../assets/pizza/gardenLovers.jpg"
import pepperoni from "./../assets/pizza/pepperoni.jpg"
import thon from "./../assets/pizza/thon.jpg"
import quatrefromages from "./../assets/pizza/4fromages.jpg"
import pizza8 from "./../assets/pizza/pizza8.png"
import logo from "./../assets/pizza/logo2.png"
import panier from "./../assets/pizza/paniers.png"

export default function card() {
  const tabImage = [marg, chickentwist, falafel, gardenLovers, pepperoni, thon, quatrefromages, pizza8]
  const {id} = useParams()

  const pizza = Json[id]
  return (

    <div className='h-screen bg-black'>
        <div className='bg-[#660000] '>
          <div className="navbar h-20 border-white border-b-8 w-[100%]">
              <div className="flex-1">
                  <a className="btn btn-ghost w-64 "><img src={logo} alt="" /></a>
              </div>
              <div className="flex-none">
                  <div className="dropdown dropdown-end">
                      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                          <div className="indicator">
                              <img src={panier} alt="" />
                              {/* <span className="badge badge-sm indicator-item">8</span> */}
                          </div>
                      </div>
                      <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                              <div className="card-body">
                                  <span className="font-bold text-lg">8 Items</span>
                                  <span className="text-info">Subtotal: $999</span>

                                  <div className="card-actions">
                                      <button className="btn btn-primary btn-block">View cart</button>
                                  </div>
                              </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
        <div className='flex flex-wrap justify-between gap-10 ps-80 pr-80 bg-black text-white'>
                <div  className='flex flex-col' >
                    <Link to={`/`} className="mt-10 mb-10 btn btn-neutral border-none text-white bg-[#660000] text-2xl p-2 rounded-md w-32 text-center">Retour</Link> 
                    <div className='flex justify-center items-center gap-36'>
                        <img className='border-[1px]  rounded-xl h-[500px]' src={tabImage[id]} alt="" width="800px"/>
                        <div>
                            <div className=' font-bold text-7xl text-[#dfb732]  pb-8'>
                              {pizza.nom}
                            </div>
                            <div className='flex gap-52  font-semibold '>
                                <div className='leading-10'>
                                    <p>Ingrédients: <span className='font-extrabold text-3xl '><br/>{pizza.ingredients.join(", ")}</span></p>
                                    <p>Type:<span className=' font-extrabold text-3xl '> <br/>{pizza.type}</span></p>
                                    <p>Prix:<span className=' font-extrabold text-3xl text-[#dfb732]'> <br/>€{pizza.prix}</span></p>
                                </div>
                            </div> 
                            <button className="mt-10 mb-10 h-8 btn btn-neutral border-none text-white bg-[#dfb732] text-2xl rounded-md w-[100%] text-center">Acheter</button>                     
                        </div>
                    </div>
                </div>
        </div>
    </div>
  )
}


