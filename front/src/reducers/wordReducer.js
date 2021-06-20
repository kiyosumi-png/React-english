export const WordReducer = (state, action) => {
    switch (action.type) {
        case 'addWord':
            return [
                ...state,
                {
                    japanese: action.word.japanese,
                    english: action.word.english,
                },
            ];
        default:
            return state;
    }
};
