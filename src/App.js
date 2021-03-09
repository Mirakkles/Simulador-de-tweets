import {useState, useEffect} from "react";
import Header from "./Componentes/Header/Header/index";
import {Container, Snackbar} from '@material-ui/core';
import SendTweet from "./Componentes/SendTweet/Index";
import ListTweets from "./Componentes/ListTweets/Index";

import { TWEETS_STORAGE } from "./utils/constants";

function App() {
  const [toastProps, setToastProps] = useState({
    open: false,
    text: null
  });

  const [reloadTweets, setReloadTweets] = useState(false);

  const [allTweets, setAllTweets] = useState ([]);
  useEffect(() => {
    const AllTweetStorage = localStorage.getItem(TWEETS_STORAGE);
    const allTweetsArray = JSON.parse(AllTweetStorage);
    setAllTweets(allTweetsArray);
    setReloadTweets(false)
    
  }, [reloadTweets]);

  const deleteTweet = (index) => {
    allTweets.splice(index, 1);
    setAllTweets(allTweets);
    localStorage.setItem(TWEETS_STORAGE, JSON.stringify(allTweets));
    setReloadTweets(true);
  };



  return (
    <div className="App">
      <Container className="tweets-simulator" maxWidth={false}>
        <Header/>
        <SendTweet setToastProps={setToastProps} allTweets={allTweets}/>
        <ListTweets allTweets={allTweets} deleteTweet={deleteTweet}/>
      <Snackbar
      anchorOrigin={{
        vertical: "top",
        horizontal: "right"
      }}

      open={toastProps.open}
      autoHideDuration= {1000}
      message={<span id="message-id">{toastProps.text}</span>}
      
      
      />
      </Container>
      
    </div>
  );
}

export default App;
