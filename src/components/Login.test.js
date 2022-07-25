import Login from "./Login";
import logo from "./../logo.svg"
import { fireEvent, render, screen } from "@testing-library/react"


test('renders username input', () => {
    render(<Login/>);
    const usernameEl = screen.getByTestId(/usernameInput/i);
    expect(usernameEl).toBeInTheDocument();
})

test('renders username input', () => { 
    render(<Login/>);
    const passwordEl = screen.getByPlaceholderText(/password/i);
    expect(passwordEl).toBeInTheDocument();
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
    const usernameEl = screen.getByTestId('usernameInput');
    expect(usernameEl.value).toBe("");
})

test('password input should be empty', () => {
    render(<Login/>);
    const passwordEl = screen.getByPlaceholderText('password');
    expect(passwordEl.value).toBe("");
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

test('password should change', () => {
    render(<Login/>);
    const passwordInputEl = screen.getByPlaceholderText(/password/i);
    const testValue = "pass"
    fireEvent.change(passwordInputEl,{ target: {value: testValue}})
    expect(passwordInputEl.value).toBe(testValue);
})

test('button should be able when username and password input are not empty', ()=>{
    render(<Login/>);
    const usernameInputEl = screen.getByPlaceholderText(/username/i);
    const passwordInputEl = screen.getByPlaceholderText(/password/i);
    const buttonEl = screen.getByRole('button');
    const testValue1 = "Miriam";
    const testValue2 = "pass";
    fireEvent.change(usernameInputEl,{ target: {value: testValue1}});
    fireEvent.change(passwordInputEl,{ target: {value: testValue2}});

    expect(buttonEl).not.toBeDisabled();

})