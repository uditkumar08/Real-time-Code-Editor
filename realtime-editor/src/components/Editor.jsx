import React, { useEffect } from 'react'
import CodeMirror from 'codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/addon/edit/closetag'
import 'codemirror/addon/edit/closebrackets'


import 'codemirror/mode/javascript/javascript'


export const Editor = () => {
     useEffect(()=>{
        async function init() {
            CodeMirror.fromTextArea(document.getElementById('realTimeEditor'),{
                mode:{name:'javascript',json:true},
                theme:'dracula',
                autoCloseBrackets:true,
                autoCloseTags:true,
                lineNumbers:true
            })
        }
        init();
    },[])
  return (
   

    <textarea id='realTimeEditor'></textarea>
  )
}
