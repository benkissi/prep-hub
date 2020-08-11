import React from 'react'
import { render } from '@testing-library/react-native';
import Input from "../Input"

describe('Input component', () => {
    it('should render', () => {
        const {getByPlaceholderText} = render(<Input placeholder="Test input"/>)

        const input = getByPlaceholderText(/Test input/)

        expect(input).toBeTruthy()
    })
})