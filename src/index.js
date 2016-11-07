import AssetCropping from './asset-cropping';
import AssetDetachment from './asset-detachment';
import AssetListPostCropHandler from './asset-list-post-crop-handler';
import AssetUploader from './asset-uploader';
import BoxToggles from './box-toggles';
import CocoonHooks from './cocoon-hooks';
import DropdownHelper from './dropdown-helper';
import Dropdown from './dropdown';
import Editor from './editor';
import Expandable from './expandable';
import Flash from './flash';
import FocusError from './focus-error';
import GenericClassToggler from './generic-class-toggler';
import I18nFields from './i18n-fields';
import ItemVersionAutosave from './item-version-autosave';
import ModalWindows from './modal-windows';
import MultipleAssetAttachment from './multiple-asset-attachment';
import NavItemToggle from './nav-item-toggle';
import NestedLists from './nested-lists';
import NumberToWords from './number-to-words';
import ProtectChanges from './protect-changes';
import RailsValidations from './rails-validations';
import SortableNestedFields from './sortable-nested-fields';
import TenonContent from './tenon-content';
import Tabs from './tabs';
import ToggleMainNav from './toggle-main-nav';

// Modal Handlers
import AssetAttachment from './modal-handlers/asset-attachment';
import ItemVersionIndex from './modal-handlers/item-version-index';
import NewItemVersion from './modal-handlers/new-item-version';
import TenonContentAssetAttachment from './modal-handlers/tenon-content-asset-attachment';
import TenonContentAssetLink from './modal-handlers/tenon-content-asset-link';
import TenonContentImageAssetLink from './modal-handlers/tenon-content-image-asset-link';
import TenonContentLibrary from './modal-handlers/tenon-content-library';

const modalHandlers = {
  AssetAttachment,
  ItemVersionIndex,
  NewItemVersion,
  TenonContentAssetAttachment,
  TenonContentAssetLink,
  TenonContentImageAsset,
  TenonContentLibrary
};

export {
  AssetCropping,
  AssetDetachment,
  AssetListPostCropHandler,
  AssetUploader,
  BoxToggles,
  CocoonHooks,
  DropdownHelper,
  Dropdown,
  Editor,
  Expandable,
  Flash,
  FocusError,
  GenericClassToggler,
  I18nFields,
  ItemVersionAutosave,
  modalHandlers,
  ModalWindows,
  MultipleAssetAttachment,
  NavItemToggle,
  NestedLists,
  NumberToWords,
  ProtectChanges,
  RailsValidations,
  SortableNestedFields,
  TenonContent,
  Tabs,
  ToggleMainNav
};
