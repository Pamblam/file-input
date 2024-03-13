import FI from '../dist/file-input.js';

const btn = document.getElementById('fi-btn');
const da = document.getElementById('dd');
const prev = document.getElementById('preview');

new FI({accept: ["png", "jpg"]})
	.attachToDragarea(da, {border:'2px solid red'})
	.openOnClick(btn)
	.onFileSelect(async function(){
		const file = this.getFile();
		this.clearFiles();
		const uri = await FI.getFileDataURI(file);
		prev.innerHTML = `<p>${file.name}</p><img src='${uri}' style='width: 100%'>`;
	})
	.onBadFileDrop(function(files){
		prev.innerHTML = `<p><i>${files[0].name}</i> is not an acceptable file type.</p>`;
	});