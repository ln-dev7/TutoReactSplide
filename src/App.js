import data from "./data/data.js";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

function App() {
  return (
    <div className="container">
      <h1>Tutoriel React Splide</h1>
      <div className="cards">
        <Splide aria-label="Testimonials" options={{
          type: "loop",
          fixedWidth: "300px",
          focus: "center",
          isNavigation: true,
          autoplay: true,
          //perPage: 3,
        }}>
          {data.map((item) => (
            <SplideSlide key={item.id}>
              <div className="card">
                <img src={item.img} alt="img" />
                <h2>{item.name}</h2>
                <p>{item.text}</p>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
}

export default App;
