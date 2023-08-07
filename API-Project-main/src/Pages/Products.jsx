import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import Loader from '../Components/Loader'
import {CartContext} from '../context/addtoCart/context'
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../styling/style.css'
import HeaderSection from '../Components/HeaderSection';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
export default function Products() {


    const [products, setProducts] = useState([])
    const [loader, setLoader] = useState(true)

    const {state,dispatch} = useContext(CartContext)

    useEffect(() => {
        axios.get('https://dummyjson.com/products').then(json => {
            setProducts(json.data.products);
            setLoader(false)
        })
    }, [])

    const addtoCart = (item) => {
        // console.log(item)
        dispatch(
            {
                type : "ADD_TO_CART",
                payload : item
            }
        )
    }


       useEffect(()=> {
        AOS.init({duration:2000});
      },[]);
    }

   return (
    <>
    <HeaderSection/>
        {
            loader
                ?
                <Loader />
                :
             <div className='container' data-aos="zoom-in-up">
                                 <div className="card text-bg-light" data-aos="zoom-in-up"></div>
                                <div className="my-5 text-center">
                                   <h2>Products</h2>
                                   <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, nihil.</p>
                   </div>
            <div className="container">
            <div className="col-12 mt-5 my-6">
                        <h1 className=' text-center'>Products</h1>
                        
                    </div>

                <div className="container mt-3"data-aos="fade-up">
                    <div className="row" data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">

                        {
                            products.map((product, key) =>
                                <div className="col-md-4 mb-4" key={key}>
                                    <Link to={`/products/${product.id}`} className='text-decoration-none'>
                                        <Card className="card">
                                            <Card.Img variant="top" src={val.thumbnail} className="card-img-top" alt="..." 
                                            style={{
                                                width: '100%',
                                                height: '30vh',
                                                objectFit: 'contain'
                                            }}
                                                />
                                            <Card.Body>
                                                <Card.Title className="d-flex justify-content-between align-items-center mb-2">
                                                    <h6 className="card-title">{val.title.length > 20 ? val.title.slice(0, 20) + '...' : val.title} </h6>
                                                    <span className="badge bg-secondary">{val.price}$</span></Card.Title>
                                                <Card.Text>{val.description.length > 50 ? val.description.slice(0, 50) + '...' : val.description}
                                                <button className="btn btn-outline-dark" type="button" onClick={() => addtoCart(val)}>
                                                        Add to Cart
                                                    </button>
                                                </Card.Text>
                                            </Card.Body>
                                            </Card>
                                    </Link>
                                </div>
                            )
                                        }
                    </div>
                </div>
            </div>
            </div>
            }
      </>
      );