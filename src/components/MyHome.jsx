import MyHeader from './MyHeader';
import MyCardPizza from './MyCardPizza';

const MyHome = () => (
  <>
    <MyHeader />
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center mb-4">
          <MyCardPizza
            name="Napolitana"
            price={5950}
            ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
            img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
          />
        </div>
        <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center mb-4">
          <MyCardPizza
            name="Española"
            price={6950}
            ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
            img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab"
          />
        </div>
        <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center mb-4">
          <MyCardPizza
            name="Pepperoni"
            price={6950}
            ingredients={["mozzarella", "pepperoni", "orégano"]}
            img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3"
          />
        </div>
      </div>
    </div>
  </>
);
export default MyHome;