import Login from "./Login";
import logo from "./../logo.svg"
import { render, screen } from "@testing-library/react"


test('renders username input', () => {
    render(<Login/>);
    const inputUsername = screen.getByTestId(/usernameInput/i);
    expect(inputUsername).toBeInTheDocument();
})

test('renders username input', () => { 
    render(<Login/>);
    const inputPassword = screen.getByPlaceholderText(/password/i);
    expect(inputPassword).toBeInTheDocument();
})

test('renders login button', () => { 
    render(<Login/>);
    const button = screen.getByRole(/button/i);
    expect(button).toBeInTheDocument();
})

test('renders image', () => { 
    render(<Login/>);
    const img = screen.getByRole('img', { name: 'fancy-image' });
    expect(img).toHaveAttribute('src',logo)
    expect(img).toHaveAttribute('alt','logo')
})