import {useState} from "react";
import "./SendTweet.css";
import {Fab} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import moment from "moment";
import ModalContainer from "../ModalContainer/Index";
import FromSendTweet from "../FromSendTweet/Index";
import {TWEETS_STORAGE} from "../../utils/constants";


export default function SendTweet(props) {
    const { setToastProps, allTweets } = props;
    const [isOpenModal, setIsOpenModal] = useState (false)

    const openModal = () => {
        setIsOpenModal(true);
    };

    const closeModal = () => {
        setIsOpenModal(false);
    };

    const sendTweet = (event, formValue) => {
        event.preventDefault();
        const { name , tweet} = formValue;
        let allTweetsArray = [];

        if(allTweets) {
            allTweetsArray = allTweets;
        }

        if(!name || !tweet) {
            console.log("WARNING: todos los campos son obligatorios.")
            setToastProps({
                open: true,
                text: "WARNING: todos los campos son obligatorios."
            });
        } else {
            formValue.time = moment();
            allTweetsArray.push(formValue);
            localStorage.setItem(TWEETS_STORAGE, JSON.stringify(allTweetsArray));
            console.log("Tweet enviado correctamente")
            setToastProps({
                open: true,
                text: "Tweet enviado correctamente"
            });
            closeModal();
        }
        allTweetsArray = [];
    };

    return (
        <div className="sendtweet">
            <Fab
            
            className="sendtweet_open-modal"
            color= "primary"
            aria-label="add"
            onClick={openModal}>
                <AddIcon/>
            </Fab>
            <ModalContainer isOpenModal={isOpenModal} closeModal={closeModal}>
                <FromSendTweet sendTweet={sendTweet} />
                
            </ModalContainer>
        </div>
    );
}