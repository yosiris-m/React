import React from "react";
import MediaCard from "./MediaCard";
import img from "./images/thomas.jpg";

class MediaList extends React.Component {
  render() {
    // const data = [{ name: "pepe", date: "26/05/2021" }];
    // const cards = data.map((card) => (
    //   <MediaCard name={card.name} date={card.date} />
    // ));

    return (
      <div>
        <h1>Media list</h1>
        <div>
          <MediaCard
            name="Maria Carla"
            date="Lunes 31 de junio de 2021"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            repudiandae iure architecto in ea vel quas fugiat odit quam nesciunt
            sed tenetur voluptatem est, voluptas harum fugit omnis, natus
            sapiente!Lorem ipsum dolor sit consectetur adipisicing elit.
            Molestias repudiandae."
            likes="37"
            photo={img}
            favorite={false}
          />
          <MediaCard
            name="Jose angel"
            date="Lunes 31 de junio de 2050"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            repudiandae iure architecto in ea vel quas fugiat odit quam nesciunt
            sed tenetur voluptatem est, voluptas harum fugit omnis, natus
            sapiente!Lorem ipsum dolor sit consectetur adipisicing elit.
            Molestias repudiandae."
            likes="1000"
            photo="https://image.freepik.com/vector-gratis/pajaro-cardenal-azul-exotico_1067-159.jpg?1"
            favorite={true}
          />
          <MediaCard
            name="santiago martes"
            date="Miercoles 31 de junio de 2035"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            repudiandae iure architecto in ea vel quas fugiat odit quam nesciunt
            sed tenetur voluptatem est, voluptas harum fugit omnis, natus
            sapiente!Lorem ipsum dolor sit consectetur adipisicing elit.
            Molestias repudiandae."
            likes="10"
            photo="https://ciudadideal.eltelegrafo.com.ec/media/k2/items/cache/f0bcc910b70b69a2592d941ea69ed2d0_XL.jpg"
            favorite={true}
          />
        </div>
      </div>
    );
  }
}

export default MediaList;
