import { useState } from "react";
import { FormControl, FormGroup, TextField, Button } from "@material-ui/core";
import "../FromSendTweet/FromSendTweet.css";

export default function FromSendTweet(props) {
    const { sendTweet } = props;
    const [formValue, setFormValue] = useState({
        name: "" ,
        tweet: ""
    });

    const onFormChangue = event => {setFormValue
        ({...formValue,
            [event.target.name]: [event.target.value] 
        });

    };

    return (
        <div className="from-send-tweet">
            <h2 className="from-send-tweet-title">Enviar tweet</h2>
            <form 
            className="from-send-tweet-form" 
            onSubmit={event => sendTweet(event, formValue)} 
            onChange={onFormChangue}
            >
                <FormControl>
                <FormGroup>
                    <TextField className="from-send-tweet-name"
                    type="text"
                    name="name"
                    placeholder="Nombre de usuario"
                    margin="normal"/>
                
                </FormGroup>
                <FormGroup>
                    <TextField className="from-send-tweet-area"
                    name="tweet"
                    multiline
                    rows="6"
                    placeholder="Escribe tu tweet"
                    margin="normal"/>
                </FormGroup>
                <FormGroup>
                    <Button type="submit">Enviar Tweet</Button>
                </FormGroup>
            </FormControl>

            </form>


        </div>


    );

}