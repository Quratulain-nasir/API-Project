import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function CategoryPage() {
    useEffect(()=> {
        AOS.init({duration:2000});
      },[]);

    const { categoryName } = useParams()
    const [products, setProducts] = useState([])


    useEffect(() => {
        axios.get(`https://dummyjson.com/products/category/${categoryName}`).then(json => setProducts(json.data.products))

    }, [categoryName])



    return (

        <div className="container" data-aos="zoom-in-up">
            <div className="my-5 text-center">
                <h1>{categoryName.toUpperCase()}</h1>
                <p className="text-secondary"  data-aos="fade-up-left">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, officia nihil! Nemo sunt reprehenderit voluptates amet itaque libero in unde, molestias illo veniam, dolore veritatis eaque ipsum. Molestiae, nam architecto!</p>
            </div>
{/* 
            <div className="row">
                {
                    products.map((val, key) =>

                        <div className="col-md-6 my-4" key={key} data-aos="fade-up" data-aos-duration="3000" >
                            <Link className='text-decoration-none' to={`/products/${val.id}`}>
                                <Card>
                                    <Card.Img variant="top" src={val.thumbnail} />
                                    <Card.Body>
                                        <Card.Title>{val.title} - {val.price}$</Card.Title>
                                        <Card.Text>{val.description}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </div>
                    )
                }
            </div> */}


              <div className="row">

                            {
                                products.map((val, key) =>
                                    <div className="col-md-3 my-3" key={key}>
                                        <div className="card">
                                            <img src={val.thumbnail} className="card-img-top" alt="..."
                                                style={{
                                                    width: '100%',
                                                    height: '30vh',
                                                    objectFit: 'contain'
                                                }}
                                            />
                                            <div className="card-body">
                                                <div className="d-flex justify-content-between align-items-center mb-2">
                                                    <h6 className="card-title">{val.title.length > 20 ? val.title.slice(0, 20) + '...' : val.title} </h6>
                                                    <span className="badge bg-secondary">{val.price}$</span>
                                                </div>
                                                <p className="card-text">
                                                    {val.description.length > 50 ? val.description.slice(0, 50) + '...' : val.description}
                                                </p>
                                                <div className="d-grid">
                                                    <button className="btn btn-outline-dark" type="button" onClick={() => addtoCart(val)}>
                                                        Add to Cart
                                                    </button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                )
                            }

                        </div>
        </div>
    )
}