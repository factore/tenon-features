TenonContentAssetAttachment = require('./tenon-content-asset-attachment')

class TenonContentAssetLink extends TenonContentAssetAttachment
  _setFields: ($li) =>
    $link = $('<a />').attr('href', $li.data('style-urls')['original'])
    selected = @$browseButton.getSelection().getSelectedText()
    text = if selected.length then selected else 'Asset Link'
    $link.html(text)
    @$browseButton.insertHtml($link[0].outerHTML)

  # Create a virtual input to hold the data
  _getAssetField: =>
    $('<input />').attr('type', 'hidden')

module.exports = TenonContentAssetLink
