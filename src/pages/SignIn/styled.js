import styled from 'styled-components'

export const PageArea = styled.div`
    form{
        background-color:white;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        padding:10px;
        border-radius:5px;
    }

    .area{
        max-width:500px;
        display:flex;
        padding:10px;
        align-items:center;
    }

    .area--title{
        width:100px;
        text-align:right;
        padding-right:10px;
        font-size:14px;
        font-weight:bold;
    }

    .area--input{
        flex:1;
    }

    input{
        outline:none;
        padding:5px;
        width:100%;
        font-size:14px;
        border-radius:5px;
        border:1px solid #CCC;
        transition:all ease 0.4s;

        &:focus{
            border:1px solid #333
        }
    }

    input[type="checkbox"]{
        width:fit-content;
    }

    button{
        background-color:#00B9FF;
        padding:10px 15px;
        outline:0;
        border:0;
        color:white;
        border-radius:3px;
        cursor:pointer;
        font-size:15px;

        &:hover{
        background-color:#006FCE
        }

    }

    

`