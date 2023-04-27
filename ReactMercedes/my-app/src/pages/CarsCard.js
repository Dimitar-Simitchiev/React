export default function CarsCard({
    cars
}){
return(
    <>
       
    <h1>
    {cars.type}
    </h1>
  <p >
  €{cars.price} 
  </p>
  <img src={cars.img} alt="MercedesAbout" width="300" height="200"/>
  </>
)
}
