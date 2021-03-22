import styled from 'styled-components'


export const HeaderArea = styled.div`
    background-color:#FFF;
    height:60px;
    border-bottom:1px solid #CCC;

a{
    text-decoration:none;
}

.container{
    max-width:1000px;
    margin:auto;
    display:flex;

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

    nav{
        padding-top:10px;
        padding-bottom:10px;

        ul, li{
            margin:0;
            padding:0;
            list-style:none;
        }

        ul{
            display:flex;
            align-items:center;
            height:40px
        }

        li{
            margin-left:20px;
            margin-right:20px;
        
            a{
                color:black;
                font-size:14px;

                &:hover{
                    color:#999;
                }

                &.button{ /* quando achar um <a> que tenha a class .button, aplique o css*/ 
                    background-color:#FF8100;
                    border-radius:4px;
                    color:white;
                    padding:5px 10px;

                    &:hover{
                        background-color:#E57706
                    }
                }
            }
        }

    }


}

`