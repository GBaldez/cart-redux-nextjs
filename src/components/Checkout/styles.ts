import styled from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';
import Image  from  'next/image';
import Button from '../Button/Button';

export const CheckoutButton = styled(Button)`
    background-color: #f4f4ed;
    border-radius: 4px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 10px;
    width: 5rem;
    &:hover {
        background-color: #FFC107;
        cursor: pointer;
    }
`;
export const StyledDialogOverlay = styled(Dialog.Overlay)`
position: fixed;
top: 0;
right: 0;
width: calc(100% / 3);
height: 100vh;
background-color: #f4f4ed;
animation: slideIn .5s ease-in-out;


@keyframes slideIn {
0% {
    transform: translateX(100%);
}
100% {
    transform: translateX(0);
}
}

@media (max-width: 768px) {
    width: 100%;
}
`;

export const Wrapper = styled.div
`
height: 25rem;
overflow-y: auto;

&::-webkit-scrollbar {
    width: 10px;
}
&::-webkit-scrollbar-track {
    background: #fff;
    border-radius: 5px;
}
&::-webkit-scrollbar-thumb {
    background: #000;
    border-radius: 5px;
}
&::-webkit-scrollbar-thumb:hover {
    background: #FFC107;
}

`;
export const Title = styled.h2`
color: #232323;
margin: 1.5rem;
;`

export const Msg = styled.p`
color: #232323;
margin: 1.5rem;
text-align: center;`

export const Item = styled.div`
align-items: center;
background-color: #fff;
border-radius: 5px;
display: flex;
justify-content: space-between;
margin: 1.5rem;
padding: 1rem;
position: relative;
`
export const ItemImage = styled(Image)`
width: 3.5rem;
height: 3.5rem;
`;

export const ItemQuantity = styled.div`
background-color: #fff;
display: flex;
flex-direction: column;
align-self: flex-start;

& span {
    font-size: .7rem;
    font-weight: 300;
    margin-bottom: .2rem;
}

`;

export const QuantityDisplay = styled.div`
border: 1px solid #ccc;
border-radius: 5px;
align-items: center;
display: flex;
height: 1.5rem;

& :first-child{
    border-right: .5px solid #ccc;
}
& :last-child {
    border-left: .5px solid #ccc;
}
`
export const ItemName = styled.p`
font-weight: 400;
margin-right: .5rem;
`
export const Quantity = styled.p`
padding: .5rem;
`
export const QuantityChange = styled.button`
background-color: #fff;
border: none;
width: 1rem;
height: 1rem;
margin: .2rem;

&:hover {
    cursor: pointer;
    transform: scale(1.1);
}
`;

export const ItemPrice = styled.p`
font-weight: 600;

`
export const ItemRemove = styled.button`
background-color: black;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
height: 1.1rem;
width: 1.1rem;
color: #fff;
font-size: .7rem;
position: absolute;
top: -.4rem;
right: -.4rem;    
&:hover {
    cursor: pointer;
    background-color: #FFF;
    color: #000;
}
`;

export const Total = styled.div`
display: flex;
justify-content: space-between;
padding: 1.5rem;
& p {
    color: #000;
    font-weight: 600;
}
`; 
export const Checkout = styled.button`
background-color: #b388eb;
border: none;
width: 100%;
padding: 1.5rem;
color: #f4f4ed;
font-weight: 600;
font-size: 1.2rem;
&:hover {
    cursor: pointer;
    background-color: #FFF;
    color: #000;
}
`;
export const Container = styled.div`
position: absolute;
bottom: 0;
width: 100%;
`;
export const Close = styled(Dialog.Close)`
background-color: black;
border-radius: 50%;
color: #fff;
display: flex;
align-items: center;
justify-content: center;
height: 2rem;
width: 2rem;
position: absolute;
top: 1rem;
right: 1rem;
&:hover {
    cursor: pointer;
    background-color: #FFF;
    color: #000;
}
`;
