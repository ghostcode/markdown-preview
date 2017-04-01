import './app.css';
import Marked,{Renderer} from "marked";
import HighLight from 'highlight.js';
import Clipboard from 'clipboard';

// import showdown from 'showdown';


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

        // Create your custom renderer.
        const renderer = new Renderer();

        renderer.code = (code, language) => {
            language = language ? language : 'js'
            let highlighted = HighLight.highlight(language,code).value;

            // console.log(highlighted)
            
            let highlighted1 = highlighted.replace(/\n/g,function(match){
                console.log(match)
                return match + '<br/>';
            })

            return `<pre><code class="hljs">${highlighted1}</code></pre>`
        };

        Marked.setOptions({
            langPrefix:'hljs ',
            renderer
        });

        self.getE('.js-preview').innerHTML = Marked(markedownVal);
    },
    copy(){
        new Clipboard('.j-action-copy');
    },
    getE(select){
        return document.querySelector(select);
    }
}

MarkDown.init();