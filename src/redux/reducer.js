import { ADD_POST } from './actionsTypes';

const avatar1 =
  'https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg';
const postImg1 =
  'https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale';

const avatar2 =
  'https://pbs.twimg.com/profile_images/1065602761201463296/GxH3TeKR_400x400.jpg';
const postImg2 =
  'https://pbs.twimg.com/media/E7xxQMZWQAQUPz1?format=jpg&name=small';

const initialState = {
  posts: [
    {
      id: 0,
      name: 'Anakin skywalker',
      avatar: avatar1,
      nickname: '@dart_vader',
      content: 'WTF? Who is Ray? Why she is Skywalker? Luke...?',
      image: postImg1,
      date: 'Feb 26',
    },
    {
      id: 1,
      name: 'EspresoTV',
      avatar: avatar2,
      nickname: '@EspresoTV',
      content:
        'Фестиваль Ідей 2021 оголосив програму.',
      image: postImg2,
      date: '1:04 PM · Aug 2, 2021·Espreso RSS Tweet',
    },
  ],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            id: state.posts.length + 1,
            avatar: action.payload.postAvatar,
            nickname: action.payload.postNick,
            name: action.payload.postAuthor,
            content: action.payload.textPost,
            image: action.payload.postImg,
            date: new Date().toString().slice(4, 10),
          },
        ],
      };
    }
    default:
      return state;
  }
}

export default rootReducer;