import React from "react";
import {Columns, Container } from './styles';
import { ThemeContext } from 'styled-components';
import { useContext } from 'react';
import HeadImg from '../../assets/img/404.png';

/* interface Props {
    toggleTheme(): void
}
 */
const Head: React.FC = () =>{

    const { colors, title } = useContext(ThemeContext);
    
    return(
        <Container>
                <Columns>
                    Hello!<br/>
                    My name is Rafael, I am from Brazil<br/> 
                    Welcomne my Website!                 
                </Columns>

                <Columns>
                    <img src={HeadImg} alt="devrafael" />
                </Columns>     
        </Container>        
    );
};

export default Head;