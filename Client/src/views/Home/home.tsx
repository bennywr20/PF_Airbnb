import SearchBar from "../../components/searchBar/searchBar";
import CardsContainer from "../../components/cardContainer/cardContainer";
import ScrollToTopButton from "../../components/scrollButton/ScrollToTopButton";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { AnyAction } from "redux";
import getProperties from "../../redux/actions/getProperties";
import { useLocation, useNavigate } from "react-router-dom";

function Home() {
    const dispatch = useDispatch();
    const properties = useSelector((state: any) => state.properties);
    const location = useLocation();
    const navigate = useNavigate();
    const pages = useSelector((state: any) => state.pages)

    // Obtener el valor actual del parámetro "page" de la URL
    const searchParams = new URLSearchParams(location.search);
    const currentPage = parseInt(searchParams.get("page") || "0", 10);

    const changeQuery = (increment: number) => {
        // Calcular el nuevo valor de la página
        const newPage = currentPage + increment;

        // Actualizar el valor del parámetro "page" en la URL
        searchParams.set("page", newPage.toString());
        navigate(`?${searchParams.toString()}`);
    };

    const fetchData = async () => {
        await dispatch(getProperties(`?${searchParams.toString()}`) as unknown as AnyAction);
    };
    

    useEffect(() => {
        if(location.search === '') navigate(`?page=0`)
        if(location.search.includes("page")) fetchData()    
    }, [dispatch, location]);

    return (
        <div>
            <div style={{ position: 'relative', zIndex: '10000' }}>
                <SearchBar />
            </div>
            <div style={{ position: 'relative', zIndex: '0' }}>
                <CardsContainer properties={properties} />
            </div>
            {currentPage > 0 && <button name="Prev" onClick={() => changeQuery(-1)}><i className="fa-solid fa-angles-left text-lg text-argentina"></i></button>}
            <br />
            {currentPage < pages - 1 && <button name="Next" onClick={() => changeQuery(1)}><i className="fa-solid fa-angles-right text-lg text-argentina"></i></button>}
            <br></br>
            <ScrollToTopButton />
        </div>
    );
}

export default Home;
