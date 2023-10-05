import styled from 'styled-components'

export const Header = styled.header`
    display: flex;
    justify-content: space-around;
    padding: 2rem 0 ;

    >ul{
        display: flex;
        gap: 2rem;
        
        >li{
            text-transform: capitalize;
            display: flex;
            align-items: center;
            justify-content: center;
            &:first-child{
                margin-right: 2.5rem;
            }
        }
       
    }

    ul:nth-child(2){
        li:nth-child(1){ 
           margin: 1rem;
        }
        li:nth-child(2){ 
            img{
                height: 50px;
            }
        }
    }

    .currentPage{
        box-shadow: 0  2px red;
    }
`;