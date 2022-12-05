import styled from "styled-components";

export const FormContainer = styled.div`
    width: 100%;
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
`

export const FormHeader = styled.div`
    top: 30px;
    font-size: 24px;
    font-family: 'Open sans', sans-serif;
`

export const FormBody = styled.div`
    display: flex;
    flex-direction: column;
`

export const FormFooter = styled.div`
    margin: 3em;
`

export const Form = styled.div`
    margin-top: 2em;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: fit-content;
`

export const Label = styled.label`
    font-size: 18px;
`

export const Input = styled.input`
    margin-top: 6px;
    min-width: 18em;
    height: 37px;
    padding: 0px 10px;
    font-size: 16px;
    background-color: #a2e1e6;
    border: 0;
    border-radius: 4px;
    margin-bottom: 31px;
    transition: all 250ms ease-in-out;
`