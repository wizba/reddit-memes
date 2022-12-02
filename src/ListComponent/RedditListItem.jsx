const RedditListItem = (props) => {
  const { item } = props;
  return (
    <div className="column">
      {item?.thumbnail && (
        <img
          className="my_img"
          src={item?.thumbnail}
          alt="...loading"
          style={{ width: '100%' }}
        />
      )}
      <div>
        <div>
          <div className="text d-flex align-items-center myColor2">
            <span>
              <CommentIcon />
            </span>
            <span className="comment comment_color">
              {item.num_comments} comments
            </span>
          </div>
        </div>
        <div>
          <a
            className="link"
            href={`https://www.reddit.com/${item.permalink}`}
            target="_blank"
          >
            {' '}
            <p className="text">
              <b>{item?.title}</b>
            </p>
          </a>
        </div>
        <div>
          <span className="text"> subreddit</span> :{' '}
          <span className="text"> {item?.subreddit}</span>
        </div>
      </div>
    </div>
  );
};


export default RedditListItem;