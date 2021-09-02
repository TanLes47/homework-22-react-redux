import './addPost.css';
import { ADD_POST } from '../redux/actionsTypes';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { authors } from './authors';

function AddPost() {
  const dispatch = useDispatch();

  const defaultText = 'Welcome to the family red #ModelY @teslaownersSV';
  const defaultImg =
    'https://pbs.twimg.com/media/E-NN9jtVkAIWmv2?format=jpg&name=large';
  const defaultAuthor = 'markfriendler';
  const defaultAvatar =
    'https://twitter.com/markfriedler/photo';
  const defaultNick = '@markfriendler';

  const [textPost, setTextPost] = useState(defaultText);
  const [postImg, setPostImg] = useState(defaultImg);
  const [postAuthor, setPostAuthor] = useState(defaultAuthor);
  const [postAvatar, setPostAvatar] = useState(defaultAvatar);
  const [postNick, setPostNick] = useState(defaultNick);

  const filter = (name) => {
    const result = authors
      .filter((author) => author.name === name)
      .map((author) => {
        return {
          nickname: author.nickname,
          avatar: author.avatar,
        };
      });
    return result;
  };

  useEffect(() => {
    const filterAuthor = filter(postAuthor);
    setPostAvatar(filterAuthor[0].avatar);
    setPostNick(filterAuthor[0].nickname);
  }, [postAuthor]);

  const handlePostTextChange = (event) => {
    setTextPost(event.target.value);
  };

  const handlePostImgChange = (event) => {
    setPostImg(event.target.value);
  };
  const handlePostAuthorChange = (event) => {
    setPostAuthor(event.target.value);
  };

  const handlePostAdd = (event) => {
    event.preventDefault();
    dispatch({
      type: ADD_POST,
      payload: {
        textPost,
        postImg,
        postAuthor,
        postAvatar,
        postNick,
      },
    });
  };

  return (
    <form className="add-post">
      <div className="add-post__head">
        <p className="add-post__text">Add new Post</p>
      </div>
      <div className="add-post__body">
        <textarea
          className="new-text"
          onChange={handlePostTextChange}
          name="post-text"
          placeholder="Add post text"
          value={textPost}
        ></textarea>
        <input
          className="new-img"
          onChange={handlePostImgChange}
          placeholder="Add link to image"
          name="post-img"
          value={postImg}
          type="text"
        />
        <div className="add-post-select-author">
          <span>Select author</span>
          <select
            className="select-author"
            onChange={handlePostAuthorChange}
            name="post-author"
            value={postAuthor}
            id=""
          >
            {authors.map((author, i) => {
              return (
                <option key={i} value={author.name}>
                  {author.name}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div className="add-post__footer">
        <button className="btn-add-post" onClick={handlePostAdd}>
          Add post
        </button>
      </div>
    </form>
  );
}

export default AddPost;