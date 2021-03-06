import React from 'react'
import {PageArea} from './styled'
import {ErrorMessage, PageContainer, PageTitle} from'../../components/MainComponents'
import {doLogin} from '../../helpers/AuthHandler'
import useApi from '../../helpers/OlxAPI'


const Page = () => {

    const api = useApi();

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [rememberPassword, setRememberPassword] = React.useState(false);
    const [disabled, setDisabled] = React.useState(false);
    const [error, setError] = React.useState('');

    const handleSubmit = async (event) =>{
        event.preventDefault();
        setDisabled(true);

        const json = await api.login(email, password);

        if(json.error){
            setError(json.error)
        } else {
            doLogin(json.token, rememberPassword);
            window.location.href = '/';
        }

    }

    return(<> 
        <PageContainer>
            <PageTitle>Login</PageTitle>
                <PageArea>

                    {error &&
                        <ErrorMessage>{error}</ErrorMessage>
                    } 

                    <form onSubmit={handleSubmit}>
                        <label className="area">
                            <div className="area--title">Email</div>
                            <div className="area--input">
                                <input 
                                    type="email" 
                                    disabled={disabled}
                                    onChange={(event) => setEmail(event.target.value) }
                                    value={email}
                                    required="required"
                                />

                            </div>
                        </label>

                        <label className="area">
                            <div className="area--title">Senha</div>
                            <div className="area--input">
                                <input 
                                    type="password" 
                                    disabled={disabled}
                                    onChange={ (event) => setPassword(event.target.value)}
                                    value={password}
                                    required="required"
                                />
                            </div>
                        </label>

                        <label className="area">
                            <div className="area--title">Lembrar senha</div>
                            <div className="area--input">
                                <input 
                                    type="checkbox" 
                                    disabled={disabled}
                                    onChange={ () => setRememberPassword(!rememberPassword)}
                                    checked={rememberPassword}
                                />
                            </div>
                        </label>

                        <label className="area">
                            <div className="area--title"></div>
                            <div className="area--input">
                                <button disabled={disabled}>Fazer Login</button>
                            </div>
                        </label>
                    </form>
                </PageArea>
        </PageContainer>
    </>)
}

export default Page;

