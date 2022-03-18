import { render, screen } from "@testing-library/react";
import Navbar from './Header/Navbar'



describe("Todo Test", ()=> {
    test("render learn react Navbar", () => {
        render(<Navbar />) ;
        const linkElement = screen.getByText(/home/i);
        console.log("home")
        expect(linkElement).toBeInTheDocument()
        screen.debug()
    }) 
})