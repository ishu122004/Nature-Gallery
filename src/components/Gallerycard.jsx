function GalleryCard(props) {
  return (
    <div className="bg-white rounded-xl shadow-md grid hover:shadow-2xl hover:translate-y-1 transition duration-700 ease-in-out overflow-hidden">

      <img
        src={props.img}
        alt={props.brand}
        className="w-full h-56 object-cover rounded-t-xl"
      />

      <div className="grid grid-cols-1 justify-items-center items-center gap-2 bg-orange-900 w-full p-3 rounded-b-xl">
        <h2 className="text-2xl font-bold text-orange-100">
          {props.brand}
        </h2>

        <p className="text-orange-100 text-center">
          {props.about}
        </p>

        <button className="bg-orange-100 rounded-xl text-orange-950 p-2 w-32 hover:bg-orange-900 hover:text-orange-100 hover:shadow-sm hover:shadow-orange-100 transition-all duration-700">
          <a href="https://www.google.com/">View Details</a>
        </button>
      </div>

    </div>
  );
}

export default GalleryCard;