import TweetList from "./TweetList";
import AddTweet from "./AddTweet"; // Corrected the import path
import { useState } from "react";

const initialDummyTweets = [
  { id: 0, content: "We have a new tweet called as threads", likeCount: 3 },
  { id: 1, content: "what should we post??", likeCount: 4 },
  { id: 2, content: "what is up with the tech community?", likeCount: 2 },
];

function Twitter() {
  const [tweets, setTweets] = useState(initialDummyTweets);

  const handleAddTweet = (text) => {
    let nextId =(tweets.length > 0) ? tweets[tweets.length - 1].id+1 : 0; // Increment the id for the next tweet
    setTweets([
      ...tweets,
      {
        id: nextId,
        content: text,
        likeCount: Math.floor(Math.random() * 10), // Fix typo: 'floor' to 'Math.floor'
        id : nextId
      },
    ]);
  };

  return (
    <>
      <AddTweet onAddTweet={handleAddTweet}  />
      <TweetList tweets={tweets} />
    </>
  );
}

export default Twitter;

