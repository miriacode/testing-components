import Login from "./Login";
import logo from "./../logo.svg"
import { fireEvent, render, screen } from "@testing-library/react"


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

test('username input should be empty', () => {
    render(<Login/>);
    const username = screen.getByTestId('usernameInput');
    expect(username.value).toBe("");
})

test('password input should be empty', () => {
    render(<Login/>);
    const password = screen.getByPlaceholderText('password');
    expect(password.value).toBe("");
})

test('button should be disabled', () => {
    render(<Login/>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
})

test('username should change', () => {
    render(<Login/>);
    const usernameInputEl = screen.getByPlaceholderText(/username/i);
    const testValue = "Miriam"
    fireEvent.change(usernameInputEl,{ target: {value: testValue}})
    expect(usernameInputEl.value).toBe(testValue);
})