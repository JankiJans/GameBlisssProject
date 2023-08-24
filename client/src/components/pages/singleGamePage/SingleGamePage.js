import { getProductsById } from "../../../redux/productsRedux"
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { API_URL } from "../../../config";
import { useState, useEffect } from "react";

const SingleGamePage = () => {
    const [productData, setproductData] = useState(false);

    const { id } = useParams();
    console.log(id)
    const prod = useSelector((state) => getProductsById(state, id));

    useEffect(() => {
        if (!productData && prod) {
          setproductData(prod);
        }
        
        if (!productData && !prod) {
          fetch(API_URL + '/products/' + id)
            .then((res) => {
              if (res.status === 200) {
                return res.json().then((product) => {
                  setproductData(product);
                });
              }
            });
        }
      }, [productData, prod, id]);

return (
    <div>
        <h1>ID PRODUCT</h1>
    </div>
)
}

export default SingleGamePage