import styled from 'styled-components'


export const HeaderArea = styled.div`
    background-color:#FFF;
    height:60px;
    border-bottom:1px solid #CCC;

.container{
    max-width:1000px;
    margin:auto;
    display:flex;
}

a{
    text-decoration:none;
}

.logo{
    flex:1;
    display:flex;
    align-items:center;
    height:60px;
    
    .logo1,
    .logo2,
    .logo3{
        font-size:27px;
        font-weight:bold;
    }
    .logo1{color:#FF0000}
    .logo2{color:#00FF00}
    .logo3{color:#0000FF}
}

`