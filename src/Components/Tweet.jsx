 import '../CSS/Tweet.css'
function Tweet ({content, likeCount}){
return (
<div className="tweet-rapper">
   <div>
   <div className="tweet-content">
       {content}
    </div>
   </div>
   <div className="likes">
     {likeCount} likes
   </div>
    
</div>
);
}

export default Tweet;