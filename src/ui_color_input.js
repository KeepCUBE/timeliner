/**
 * Created by ddos on 15.04.17.
 */
const Theme = require('./theme'),
  Do = require('do.js'),
  style = require('./utils').style,
  type = require('./utils').inputType,
  firstDefined = require('./utils').firstDefined
;

/**************************/
// ColorUI
/**************************/

function ColorUI (config) {
  config = config || {}
  config.regex = /^#[A-F,a-f,0-9]{6}$/g

  var span = document.createElement('input')

  type(span, 'color')

  style(span, {
    textAlign: 'center',
    fontSize: '10px',
    padding: '1px',
    cursor: 'pointer',
    width: '40px',
    margin: 0,
    marginRight: '10px',
    appearance: 'none',
    outline: 'none',
    border: 0,
    background: 'none',
    color: Theme.c
  });

  var me = this

  var state, value = 0, unchanged_value;

  this.onChange = new Do()

  span.addEventListener('change', function(e) {
    console.log('color span changed', span.value);
    value = span.value;

    fireChange();
  });


  function fireChange() {
    me.onChange.fire(value, true);
  }

  this.dom = span

  this.setValue = function (value) {
    if(value == 0 || Number(value)) {
      value = '#000000'
    }

    if(!config.regex.test(value)) {
      return
    }
    span.value = value
  }

  this.paint = function() {
    if (value && document.activeElement !== span) {
      span.value = value;
    }
  };

}

module.exports = ColorUI;