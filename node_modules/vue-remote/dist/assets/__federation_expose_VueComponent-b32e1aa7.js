import { importShared } from './__federation_fn_import-ee7579e7.js';

const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const _sfc_main = {
    name: 'VueComponent'
  };
  
const {openBlock:_openBlock,createElementBlock:_createElementBlock} = await importShared('vue');


const _hoisted_1 = { style: {"color":"green"} };

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock("div", _hoisted_1, "vue"))
}
const VueComponent = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render]]);

export { VueComponent as default };
