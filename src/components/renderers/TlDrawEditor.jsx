import { Tldraw } from 'tldraw'
import 'tldraw/tldraw.css'
import { useRef, useState } from 'react'

export default function TlDrawComponent() {
	const editorRef = useRef(null)
	const [pages,setPages] = useState([]);
	const [assets,setAssets] = useState([]);
	const [shapes,setShapes] = useState([]);
	const onEditorMount = (editor) => {
		editorRef.current = editor
	}
	const logEditorContent = () => {
		if (editorRef.current) {
			const editorShapes = editorRef.current.getCurrentPageShapes()
			const editorAssets = editorRef.current.getAssets()
			const editorPages = editorRef.current.getPages()
			setShapes(()=>[])
			console.log("Shapes:", shapes)
			console.log("Assets:", assets)
			console.log("Pages:", pages)
		} else {
			console.log("Editor not yet initialized.")
		}
	}

	return (
		<section className="drawing-section">
		<Tldraw onMount={onEditorMount}/>
		<button onClick={logEditorContent} className='btn btn-secondary'>Log Editor Content</button>
		<button 
			onClick={()=>{
				const activePageId = editorRef.current.getCurrentPageId();
				console.log(activePageId);
			}} 
			className='btn btn-secondary'
		>Log current Content</button>
		</section>
	)
}
