TenonContentAssetAttachment = require('./tenon-content-asset-attachment')
ModalWindows = require('../modal-windows')

class TenonContentImageAssetLink extends TenonContentAssetAttachment
  _setFields: (e, data) =>
    $input = @$browseButton.closest('div').find('input')
    $input[0].value = data.originalPath
    Tenon.activeImageControlsLinkForm.saveForm()
    ModalWindows.closeModals()

module.exports = TenonContentImageAssetLink
