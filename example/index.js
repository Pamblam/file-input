import FI from '../dist/file-input.js';

const btn = document.getElementById('fi-btn');
const da = document.getElementById('dd');
const prev = document.getElementById('preview');

new FI({accept: ["png", "jpg"]})				// Create a file-input instance that accepts only PNG and JPG files
	.attachToDragarea(da, 'ddupload-hover') 	// Attach the input to the drag area and give it some styles on hover
	.openOnClick(btn) 							// Attach the input ot a button
	.onFileSelect(async function(){ 			// Show the image when a file is selected
		const file = this.getFile();
		this.clearFiles();
		const uri = await FI.getFileDataURI(file);
		prev.innerHTML = `<p>${file.name}</p><img src='${uri}'>`;
	})
	.onBadFileDrop(function(files){				// If they drag and drop something that isn't a png or jpg
		prev.innerHTML = `<p><i>${files[0].name}</i> is not an acceptable file type.</p>`;
	});