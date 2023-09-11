import { render, screen } from '@testing-library/react'
//import RestaurantCard from '../../../components/restaurantCard/restaurantCard.jsx';
import { getDBPToppings } from '@/services/plateData.js';
import { getDBRestaurant } from '@/services/restaurantsData';



describe("Home", () => {
    test("Traer Toppings", async () => {
        //render(<RestaurantCard/>)
        //const HorarioElement = screen.getByText(/Horario:/i)
        const data = await getDBPToppings()
        expect(data.length).toBeGreaterThan(0);

    })
    test("Traer info de un restaurante en específico", async () => {
        //render(<RestaurantCard/>)
        //const HorarioElement = screen.getByText(/Horario:/i)
        const data = await getDBRestaurant('17Odg0azGShbXQIkatCq')
        console.log(data)
        expect(Object.keys(data).length).toBeGreaterThan(0);
    })
    test("Traer info de un restaurante en específico erroneo", async () => {
        //render(<RestaurantCard/>)
        //const HorarioElement = screen.getByText(/Horario:/i)
        const data = await getDBRestaurant('goku')
        console.log(data)
        expect(Object.keys(data).length).toBe(0);
    })

})