const nestedLists = {
  setSubpageTitleSize: function() {
    $.each($('li.subpage'), function() {
      const parentSize = $(this).parents('li.subpage').length;
      const setWidth = 300 - (parentSize * 10) + 'px';
      const padding = parentSize * 10;

      $(this).find('div.item-title').css({
        width: setWidth,
        paddingLeft: padding + 'px'
      });
    });
  }
};

export default nestedLists;
