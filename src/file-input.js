/**
 * file-input
 * Version {{ VERSION }}
 */

export default class FI{
	
	/**********************************************************************
	 * Class Properties ***************************************************
	 **********************************************************************/

	// The version number
	static version = '{{ VERSION }}';

	// Array of file types, from types.json
	static #types = {};
	
	// Various event types for drag-n-drop
	static #dragEvents = ['drag', 'dragstart', 'dragend', 'dragover', 'dragenter', 'dragleave', 'drop'];
	static #dragoverEvents = ['dragover', 'dragenter'];
	static #dragendEvents = ['dragleave', 'dragend', 'drop'];
	static #dropEvents = ['drop'];

	// Can user select multiple files?
	#multi = false;
	
	// Acceptable file types
	#accept = [];

	// All user-selected files
	#files = [];

	// The hidden type=file input
	#hiddenInput = null;

	// Callbacks for when user selects files
	#callbacks = [];

	// Unaccepted file dropped callback
	#unacceptedCallbacks = [];

	// Elements that trigger the open function when clicked
	#attachedClickables = [];

	// Drag area elements
	#dragAreas = [];

	// Bound event handlers
	#boundHandlers = {};

	/**********************************************************************
	 * Class Constructor **************************************************
	 **********************************************************************/

	constructor(params){
		if(!!params.multi){
			this.#multi = true;
		} 
		if(Array.isArray(params.accept)){
			this.#accept = FI.#acceptTypes(params.accept);
		}
		this.#createInput();
		this.#boundHandlers.clickHandler = this.#clickHandler.bind(this);
		this.#boundHandlers.dragEventHandler = this.#dragEventHandler.bind(this);
		this.#boundHandlers.dragoverEventHandler = this.#dragoverEventHandler.bind(this);
		this.#boundHandlers.dragendEventHandler = this.#dragendEventHandler.bind(this);
		this.#boundHandlers.dropEventHandler = this.#dropEventHandler.bind(this);
	}
	
	/**********************************************************************
	 * Public Methods *****************************************************
	 **********************************************************************/

	/**
	 * Get the user-selected files
	 * @returns Array of Files
	 */
	getFiles(){
		return this.#files;
	}

	/**
	 * Returns the first user-selected file
	 * @returns File
	 */
	getFile(){
		return this.#files[0];
	}

	/**
	 * Clear the user selected files
	 * @returns this
	 */
	clearFiles(){
		this.#hiddenInput.value = '';
		this.#files = [];
		return this;
	}

	/**
	 * Add function to call when user selects a file or files, 
	 * functions are bound to the class instance
	 * @param Function fn 
	 * @returns this
	 */
	onFileSelect(fn){
		if(typeof fn === 'function'){
			this.#callbacks.push(fn.bind(this));
		}
		return this;
	}

	/**
	 * Remove function to call when user selects a file
	 * @param Function fn 
	 * @returns this
	 */
	offFileSelect(fn){
		this.#callbacks = this.#callbacks.filter(f=>f!==fn);
		return this;
	}

	/**
	 * Add function to call when user drops an unacceptable file type
	 * functions are bound to the class instance
	 * @param Function fn 
	 * @returns this
	 */
	onBadFileDrop(fn){
		if(typeof fn === 'function'){
			this.#unacceptedCallbacks.push(fn.bind(this));
		}
		return this;
	}

	/**
	 * Remove function to call when user drops an unacceptable file type
	 * @param Function fn 
	 * @returns this
	 */
	offBadFileDrop(fn){
		this.#unacceptedCallbacks = this.#unacceptedCallbacks.filter(f=>f!==fn);
		return this;
	}

	/**
	 * Open the hidden input
	 * @returns Promise - resolves after user selects a file, 
	 * 			or closes the dialog without selecting a file.
	 */
	open(){
		return new Promise(resolve=>{
			const handleNextChange = e => {
				this.#files.push(...e.target.files);
				this.#hiddenInput.removeEventListener('change', handleNextChange);
				this.#hiddenInput.removeEventListener('cancel', handleNextCancel);
				this.#callbacks.forEach(cb=>cb([...e.target.files]));
				resolve();
			};
			const handleNextCancel = e => {
				this.#hiddenInput.removeEventListener('change', handleNextChange);
				this.#hiddenInput.removeEventListener('cancel', handleNextCancel);
				resolve([]);
			};
			this.#hiddenInput.addEventListener('change', handleNextChange);
			this.#hiddenInput.addEventListener('cancel', handleNextCancel);
			this.#hiddenInput.click();
		});
	}

	/**
	 * Turn an element into a dragarea that will accept drag-and-drop files for this input
	 * @param Element ele
	 * @return this 
	 */
	attachToDragarea(ele, classOrStyles){
		this.#dragAreas.push({ele, classOrStyles});
		FI.#dragEvents.forEach(evt=>ele.addEventListener(evt, this.#boundHandlers.dragEventHandler));
		FI.#dragoverEvents.forEach(evt=>ele.addEventListener(evt, this.#boundHandlers.dragoverEventHandler));
		FI.#dragendEvents.forEach(evt=>ele.addEventListener(evt, this.#boundHandlers.dragendEventHandler));
		FI.#dropEvents.forEach(evt=>ele.addEventListener(evt, this.#boundHandlers.dropEventHandler));
		return this;
	}

	/**
	 * Attach an onclick listener to a button/link/element
	 * @param Element ele 
	 * @return this
	 */
	openOnClick(ele){
		this.#attachedClickables.push(ele);
		ele.addEventListener('click', this.#boundHandlers.clickHandler);
		return this;
	}

	/**
	 * Remove all event listeners so the instance can be garbage collected.
	 * @returns undefined
	 */
	destroy(){
		this.#attachedClickables.foreach(ele=>{
			ele.removeEventListener('click', this.#boundHandlers.clickHandler);
		});
		this.#dragAreas.forEach(area=>{
			this.#removeClassOrStyle(area.ele);
			FI.#dragEvents.forEach(evt=>area.ele.removeEventListener(evt, this.#boundHandlers.dragEventHandler));
			FI.#dragoverEvents.forEach(evt=>ele.removeEventListener(evt, this.#boundHandlers.dragoverEventHandler));
			FI.#dragendEvents.forEach(evt=>ele.removeEventListener(evt, this.#boundHandlers.dragendEventHandler));
			FI.#dropEvents.forEach(evt=>ele.removeEventListener(evt, this.#boundHandlers.dropEventHandler));
		});
		this.#files = [];
		this.#callbacks = [];
		this.#unacceptedCallbacks = [];
		this.#attachedClickables = [];
		this.#dragAreas = [];
	}

	/**
	 * Add an unsupported mime type
	 * @param String ext - The file extention 
	 * @param String[] mimetypes - String or Array of strings containing acceptable mimetypes
	 * @returns undefined
	 */
	static addMimeType(ext, mimetypes){
		ext = ext.toLowerCase().trim();
		if(ext.substr(0, 1) !== '.'){
			ext = "." + ext;
		}
		if(!FI.#types[ext]){
			FI.#types[ext] = [];
		} 
		if(!Array.isArray(mimetypes)){
			mimetypes = [mimetypes];
		} 
		mimetypes.forEach(type=>{
			FI.#types[ext].push(type.trim());
		});
	}

	/**
	 * Get the raw text of the file
	 * @param File file 
	 * @returns Promise - Resolves with a string representing the content of the file
	 */
	static getFileText(file){
		return new Promise((resolve, reject)=>{
			var reader = new FileReader;
			reader.onload = e=>resolve(e.target.result);
			reader.onabort = ()=>reject();
			reader.readAsText(file);
		});
	}
	
	/**
	 * Get the file as a DataURI
	 * @param File file 
	 * @returns Promise - Resolves with a string representing the DataURI of the file
	 */
	static getFileDataURI(file){
		return new Promise((resolve, reject)=>{
			var reader = new FileReader;
			reader.onload = e=>resolve(e.target.result);
			reader.onabort = ()=>reject();
			reader.readAsDataURL(file);
		});
	}

	/**********************************************************************
	 * Event handlers *****************************************************
	 **********************************************************************/

	// Click handler
	#clickHandler(e){
		e.preventDefault();
		this.open();
	}

	// Event handler for all the drag events
	#dragEventHandler(e){
		e.preventDefault();
		e.stopPropagation();
	}

	// Event handler for drag-over
	#dragoverEventHandler(e){
		this.#addClassOrStyle(e.currentTarget);
	}

	// Event handler for when the drag is completed
	#dragendEventHandler(e){
		this.#removeClassOrStyle(e.currentTarget);
	}

	// Event handler for when a file is dropped
	#dropEventHandler(e){
		let invalidFiles = [];
		let validFiles = [];
		[...e.dataTransfer.files].forEach(file=>{
			if(this.#isAcceptableType(file)){
				validFiles.push(file);
			}else{
				invalidFiles.push(file);
			}
		});
		if(validFiles.length){
			this.#files.push(...validFiles);
			this.#callbacks.forEach(cb=>cb());
		}
		if(invalidFiles.length){
			this.#unacceptedCallbacks.forEach(cb=>cb(invalidFiles));
		}
	}

	/**********************************************************************
	 * Private Methods ****************************************************
	 **********************************************************************/

	// Remove a classname or set of style properties from an element
	#removeClassOrStyle(ele){
		let i = this.#dragAreas.reduce((a,c,i)=>c.ele===ele?i:a,-1);
		let classOrStyles = this.#dragAreas[i].classOrStyles;
		if('string' === typeof classOrStyles){
			ele.classList.remove(classOrStyles);
		}else if('object' === typeof classOrStyles){
			Object.keys(classOrStyles).forEach(style=>{
				ele.style[style] = this.#dragAreas[i].s[style];
			});
			if(this.#dragAreas[i].s) delete this.#dragAreas[i].s;
		}
	}

	// Add a classname or set of style properties to an element
	#addClassOrStyle(ele){
		let i = this.#dragAreas.reduce((a,c,i)=>c.ele===ele?i:a,-1);
		let classOrStyles = this.#dragAreas[i].classOrStyles;
		if('string' === typeof classOrStyles){
			ele.classList.add(classOrStyles);
		}else if('object' === typeof classOrStyles){
			let s = {};
			Object.keys(classOrStyles).forEach(style=>{
				s[style] = ele.style[style];
				ele.style[style] = classOrStyles[style];
			});
			if(!this.#dragAreas[i].s) this.#dragAreas[i].s = s;
		}
	}

	// Create the hidden type=file input
	#createInput(){
		const inpt = document.createElement('input');
		inpt.setAttribute('type', 'file');
		inpt.setAttribute('accept', this.#accept.join(", "));
		inpt.style.zIndex = '-99999999';
		inpt.style.opacity = '0';
		inpt.style.position = 'absolute';
		inpt.style.display = 'none';
		if(this.#multi){
			inpt.setAttribute('multiple', 'multiple');
		}
		document.body.appendChild(inpt);
		this.#hiddenInput = inpt;
	}
	
	// Check if the file type is acceptable
	#isAcceptableType(file){
		if(!this.#accept.length) return true;
		let ext = file.name.includes(".") ? file.name.split('.').pop().toLowerCase().trim() : null;
		if(file.type && this.#accept.includes(file.type)){
			return true;
		}else if(ext && this.#accept.includes(`.${ext}`)){
			return true;
		}else{
			return false;
		}
	}

	// Normalizes the list of acceptable file types
	static #acceptTypes(types=[]){
		const accept = [];
		types = types.map(t=>t.toLowerCase().trim());
		for(let i=types.length; i--;){
			let type = types[i];
			if(FI.#types[type]){
				accept.push(...FI.#types[type]);
				accept.push(type);
			}
			if(FI.#types["."+type]){
				accept.push(...FI.#types["."+type]);
				accept.push("."+type);
			}
		}
		var exts = Object.keys(FI.#types);
		for(let i=exts.length; i--;){
			for(let n=FI.#types[exts[i]].length; n--;){
				if(types.indexOf(FI.#types[exts[i]][n])>-1){
					accept.push(...FI.#types[exts[i]]);
					accept.push(exts[i]);
				}
			}
		}
		return Array.from(new Set(accept)).sort();
	}

}
