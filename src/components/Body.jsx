import React from 'react'
import marg from "./../assets/pizza/margaritha.jpg"
import chickentwist from "./../assets/pizza/chickenTwist.jpg"
import falafel from "./../assets/pizza/falafel.png"
import gardenLovers from "./../assets/pizza/gardenLovers.jpg"
import pepperoni from "./../assets/pizza/pepperoni.jpg"
import thon from "./../assets/pizza/thon.jpg"
import quatrefromages from "./../assets/pizza/4fromages.jpg"
import pizza8 from "./../assets/pizza/pizza8.png"
import Json from "../assets/json/pizza.json"
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addArticle } from '../features/panier/panierSlice'
import { useSelector } from 'react-redux'

export default function Main() {
    const tabImage = [marg, chickentwist, falafel, gardenLovers, pepperoni, thon, quatrefromages, pizza8]
    const dispatch = useDispatch()
    const panierDisplay = useSelector((state) => state.panier.value)
    ;
    return (
    <div >
        <h1 className='text-6xl text-[#660000] font-extrabold text-center p-20'>Nos pizzas</h1>
    <div className='flex flex-wrap justify-center gap-20'>
    {
        Json.map((pizza, key) => {
            return(
                <div key={key}  className='p-5 '>
                    <Link key={key} to={`/pizza/${key}`} className="hover:translate-y-[-5px] hover:ease-in-out duration-150 card w-80 p-1 shadow-md shadow-gray-500 overflow-hidden bg-black/90 border-white border-x-2 rounded-xl">
                        <figure><img src={tabImage[key]} className='max-w-xs transition duration-300 ease-in-out hover:scale-110 rounded-xl' alt="" /></figure>
                        <div className="card-body h-64 text-white flex justify-center items-center">
                            <h2 className="card-title text-3xl">
                                {pizza.nom}
                                {/* <div className="badge badge-secondary">Promo</div> */}
                            </h2>

                            <p className='text-xl text-center text-[#dfb732]  font-semibold'>Ingrédients: <br/><span className='text-white font-light text-sm'>{pizza.ingredients.join(", ")} </span></p>
                            <div className="card-actions items-center flex-col">
                            <div> <p className='text-2xl text-[#dfb732]  font-extrabold'>€{pizza.prix} </p></div>
                             
                            </div>
                        </div>
                    </Link>
                    <button onClick={() => {dispatch(addArticle(pizza))}} className="btn btn-neutral border-none text-white bg-[#660000] text-2xl p-2 rounded-md w-32 text-center">Acheter</button> 
                </div>
            
            
            )
        })
    }
        </div>
    </div>
  )
}
