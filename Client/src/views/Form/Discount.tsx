import { useNavigate } from "react-router-dom";
import NavBar from "./navBar";

function Discount() {
  const navigate = useNavigate();

  const handlePrevious = () => {
    navigate(-1);
  };
  const handleNext = () => {
    navigate("/post/preview"); 
}
    return (
        <div>
          <div className="sticky top-0">
        <NavBar />
      </div>
          <div className="grid grid-cols-2 font-cairo gap-2 w-3/4 mx-auto">
            <div>
              <div className="text-2xl">Ofrece descuentos</div>
            <p>hacé que tu alojamiento se destaque para conseguir reservas más rápido y <br/> obtener tus primeras evaluaciones.</p>
            </div>
            
        <div className="flex">
          <div className="gap-1">
            <button className="flex flex-col items-center justify-center bg-transparent border border-black rounded-md w-96 mb-4">
              <span className="text-center">20% Promocion para anuncios nuevos</span>
              <p>Ofrecé un 20% de descunto en tus primeras 3 reservas.</p>
            </button>
            <button className="flex flex-col items-center justify-center bg-transparent border border-black rounded-md w-96 mb-4 ">
              <span className="text-center">10% de descuento semanal</span>
              <p>valido para estadías de 7 noches o más.</p>
            </button>
            <button className="flex flex-col items-center justify-center bg-transparent border border-black rounded-md w-96 mb-4 ">
              <span className="text-center">20% de descuento mensual</span>
              <p>valido para estadías de 28 noches o más.</p>
            </button>
          </div>
        </div>
        <div className="col-span-2 font-cairo-play flex justify-start ml-10">
          <button className="border border-argentina rounded p-1 w-32 mt-4 mr-2" onClick={handlePrevious}>Anterior</button>
          <button className="border border-argentina rounded p-1 w-32 mt-4" onClick={handleNext}>Siguiente</button>
        </div>
        </div>
        
          </div>
            
      
    );
  }
  
  export default Discount;