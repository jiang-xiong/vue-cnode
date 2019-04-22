export const hidePanel = ({commit}) => {
  commit({
    type: 'mutationsIsShowPanel',
    isShowPanel: false,
    isShowArticle: true,
  });
};
