import './app.css';
import Clipboard from 'clipboard';
import showdown from 'showdown';

require("./showdown-plugins/showdown-prettify-for-wechat.js");
require("./showdown-plugins/showdown-github-task-list.js");
require("./showdown-plugins/showdown-footnote.js");
require("./google-code-prettify/run_prettify.js");

let MarkDown = {
    init(){
        let self = this;
        
        self.bindEvent();
    },
    bindEvent(){
        let self = this;
        let $preview = self.getE('.j-action-preview');
        let $copy = self.getE('.j-action-copy');

        self.copy();
        $preview.addEventListener('click',self.preview.bind(self),false);
    },
    preview(){
        let self = this;
        let markedownVal = self.getE('.j-markdown').value;
        let converter =  new showdown.Converter({
            extensions: ['prettify', 'tasklist', 'footnote'],
            tables: true
        });
        
        self.getE('.js-preview').innerHTML = converter.makeHtml(markedownVal);
        PR.prettyPrint();
    },
    copy(){
        new Clipboard('.j-action-copy');
    },
    getE(select){
        return document.querySelector(select);
    }
}

MarkDown.init();