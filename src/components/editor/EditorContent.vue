<script>
import { h } from 'vue' 
import documentModel from '../../assets/document-model'
export default {
    name: 'EditorContent',
    data() {
        return {
            document: []
        }    
    },
    render() {
        return h('div', { class: 'editor-content'}, this.renderDocument())
    },
    methods: {
        renderDocument() {
            if(this.document.length <= 0) {
                this.getDocumentModel().then(res => {
                    this.document = res
                })
            }
            const renderArray = []
            this.document.forEach(item => {
                renderArray.puch(h(item.insert, { id: item.id, class: this.typeAttributes(item.attrs)}, this.renderNodes(item.content)))
            })
            return renderArray
        },
        async getDocumentModel() {
            return await documentModel()
        },
        renderNodes(nodes) {
            let contentNode = ''
            if(typeof nodes === 'object' && Array.isArray(nodes)) {
                if(nodes.length >= 1) {
                    contentNode = []
                nodes.forEach(node => {
                    if(typeof node  == 'object' && node !== null) {
                        if(node.insert == 'span') {
                            contentNode.push(h(node.insert, {id: node.id, class: this.toggleAtrributes(node.attrs)}, 
                            this.subNode(node.content)))
                        }
                    } else {
                        contentNode.push(h('span', {}, node))
                    }
                })
                }
            } else {
                contentNode = nodes
            }
            return contentNode

        },
        typeAttributes(nodeAttrs){
            return[
                { 'left:text': this.checkAttribute(nodeAttrs, 'align', 'left')},
                { 'center:text': this.checkAttribute(nodeAttrs, 'align', 'center')},
                { 'right:text': this.checkAttribute(nodeAttrs, 'align', 'right')},
                { 'justify:text': this.checkAttribute(nodeAttrs, 'align', 'justify')}
            ]
        },
        checkAttribute(node, attr, value = ''){
            let checkAttr = false
            if(value === '') {
                checkAttr =  (typeof node === 'object' && attr in node) ? node[attr] : false
            }else {
                checkAttr =  (typeof node === 'object' && attr in node && node[attr] === value) ? true: false
            }
            return checkAttr
        },
        toggleAtrributes(nodeAttrs) {

            return [
                {'bold:text': this.checkAttribute(nodeAttrs, 'bold')},
                {'italic:text': this.checkAttribute(nodeAttrs, 'italic')},
                {'underline:text': this.checkAttribute(nodeAttrs, 'underline')},
                {'strikethrough:text': this.checkAttribute(nodeAttrs, 'strikethrough')}
            ]
        },
        subNode(nodes) {
            let content =  nodes
            if(typeof nodes === 'object' && Array.isArray(nodes)) {
                content = this.renderNodes(nodes)
            }
            return content
        }
    }
}
</script>