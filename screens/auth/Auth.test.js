import React from 'react'
import { render, fireEvent, cleanup  } from '@testing-library/react-native';
import { useSelector, useDispatch } from 'react-redux'; 
import Auth from './Auth'

jest.mock('react-redux', () => ({
  useSelector: jest.fn(() => ({loading: false })),
  useDispatch: () => jest.fn()
}));


describe('Auth', () => {
    afterEach(cleanup);
    it('should render sigin form', () => {
        const {getAllByText, getByText} = render(<Auth />)
        const siginTitle = getAllByText("Sign In")
        const teacherToggle = getByText('I am a teacher')

        expect(siginTitle.length).toBe(2)
        expect(teacherToggle).toBeTruthy()
    })
    it('should toggle code input when teacher toggle is pressed', () => {
        const {getByPlaceholderText, getByText, queryByPlaceholderText} = render(<Auth />)
        const teacherToggle = getByText('I am a teacher')
        const studentCodeInput = getByPlaceholderText('Enter student code')

        expect(studentCodeInput).toBeTruthy()

        fireEvent.press(teacherToggle)
        expect(studentCodeInput).toBeTruthy()
        expect(queryByPlaceholderText('Enter teacher code')).toBeTruthy()
    })
    it('should open signup form when signup toggle is pressed', () => {
        const {getByText, getAllByText} = render(<Auth />)
        const signupToggle = getByText('Sign up')

        fireEvent.press(signupToggle)
        const signupText = getAllByText('Sign Up')

        expect(signupText.length).toBe(2)
    })
})