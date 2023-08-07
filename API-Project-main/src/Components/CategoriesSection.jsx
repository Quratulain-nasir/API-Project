import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function CategoriesSection() {

  const [categories, setCategories] = useState([])

  useEffect(() => {
    axios.get('https://dummyjson.com/products/categories').then(json => setCategories(json.data))

  }, [])

  useEffect(()=> {
    AOS.init({duration:2000});
  },[]);


  return (
    <>
    <div className="container" data-aos="zoom-in-up">
      <div className="my-5 text-center">
        <h1>Categories</h1>
        <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus illum, laudantium earum sit saepe dolore aperiam vitae ullam iusto deserunt, ipsam asperiores temporibus! Quis exercitationem neque porro nisi saepe autem?</p>
      </div>

      <div className="row">
        {
          categories.map((val, key) =>
            <div className="col-md-4 my-3" key={key}>
              <Link className='text-decoration-none' to={`/products/category/${val}`}>
                <Card>
                  <Card.Body>
                    <Card.Title>{val.toUpperCase()}</Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </div>
          )
        }
      </div>
    </div>
    </>
  )
}





// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import Card from 'react-bootstrap/Card';
// import { Link } from 'react-router-dom';
// import '../../styling/style.css';

// export default function CategoriesSection(props) {
//   const [activeTab, setActiveTab] = useState(1);
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     axios.get('https://dummyjson.com/products/categories')
//       .then(json => setCategories(json.data));
//   }, []);

//   return (
//     <>
//       <div className="container">
//         <div className="my-5 text-center">
//           <h1>Categories</h1>
//           <p className="text-secondary">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus illum, laudantium earum sit saepe dolore aperiam vitae ullam iusto deserunt, ipsam asperiores temporibus! Quis exercitationem neque porro nisi saepe autem?
//           </p>
//         </div>
//         <div className="row">
//           {categories.map((val, key) => (
//             <div className="col-md-4 my-3" key={key}>
//               <Link className="text-decoration-none" to={`/products/category/${val}`}>
//                 <Card>
//                   <Card.Body>
//                     <Card.Title>{key + 1} - {val.toUpperCase().replace('-', ' ')}</Card.Title>
//                   </Card.Body>
//                 </Card>
//               </Link>
//             </div>
//           ))}
//         </div>
//         <div className="row">
//           <ul className="flexState">
//             <li className={activeTab === 1 ? 'activepage' : 'pages'} onClick={() => setActiveTab(1)}>electrical items</li>
//             <li className={activeTab === 2 ? 'activepage' : 'pages'} onClick={() => setActiveTab(2)}>mans</li>
//             <li className={activeTab === 3 ? 'activepage' : 'pages'} onClick={() => setActiveTab(3)}>women</li>
//             <li className={activeTab === 4 ? 'activepage' : 'pages'} onClick={() => setActiveTab(4)}>man shirts</li>
//           </ul>
//         </div>
//       </div>
//       <div>
//         {activeTab === 1 ? (
//           <div>
//             <h1>hii</h1>
//           </div>
//         ) : activeTab === 2 ? (
//           <div>hello</div>
//         ) : activeTab === 3 ? (
//           <div>hello</div>
//         ): (
//           <div>bye</div>
//         )}
//       </div>
//     </>
//   );
// }
