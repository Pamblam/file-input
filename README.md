
## file-input.js

v. 1.0.7

A javascript library to simplify client-side handling of user-inputted files. file-input is the sequel to [fileUpload](https://github.com/Pamblam/fileUpload) sans jQuery. Check out [the example](https://pamblam.github.io/file-input/example/) and it's [source code](https://github.com/Pamblam/file-input/blob/master/example/index.html#L23).

### Usage

#### Constructor

Create an new instance of the file-input object.

```js
const fi = new FI({
	// The button that will open the file input
	// dialog. Omit this if you only want a drag-and-drop
	// interface.
	button: btn,

	// Any file extensions that you want to allow in 
	// your file input or drag area. Omit this
	// option to allow all files.
	accept: ["png", "jpg"],

	// An element in the DOM that will serve as
	// the drag-and-drop area for your file input.
	// Omit this option if you only want a button.
	dragarea: da,

	// A class that will be added to the drag area
	// when the user drags a file over it. Omit this
	// option if you only want a button.
	dragenterclass: 'ddupload-hover',

	// Allow the user to choose more than one file if set 
	// to `true`. The default is `false`.
	multi: false
});
```

#### `get_files()`

Get an array of files (blobs) in the input.

```js
var files = fi.get_files();
```

#### `get_file_text(file)`

Get a promise that resolves with the raw text of a file.

```js
var file_text = await fi.get_file_text(files[0]);
```

#### `get_file_datauri(file)`

Get a promise that resolves with a data URL of a file.

```js
var datauri = await fi.get_file_text(files[0]);
div.innerHTML = `<img src='${datauri}'>`;
```

#### `clear_files()`

Remove all the files currently in the input.

```js
fi.clear_files();
```

#### `destroy()`

Destroy and detach the file-input object.

```js
fi.destroy();
```

#### Events

When a file is added, a	`fi-files-added` event will be fired on both the button
and the dragarea elements, if they exist. The file-input object will be attached
to the event's `detail` property.

```js
btn.addEventListener('fi-files-added', async function(e){
	const file = e.detail.get_files()[0];
	const uri = await e.detail.get_file_datauri(file);
	prev.innerHTML = `<p>${file.name}</p><img src='${uri}'>`;
});
```

#### Extensions

You can add support for any extentions that are not recognised out of the box with the static method: `FI.addMimeType`:

```js
var extention = '.xxx';
var mimeType = 'text/xxx';
FI.addMimeType(extention, mimeType);

const fi = new FI({
	accept: ["xxx"]
});
```

file-input recognizes these extentions out of the box.


| Extension | Content-Type |
|-------|-------|
| **.3dm** | x-world/x-3dmf |
| **.3dmf** | x-world/x-3dmf |
| **.a** | application/octet-stream |
| **.aab** | application/x-authorware-bin |
| **.aam** | application/x-authorware-map |
| **.aas** | application/x-authorware-seg |
| **.abc** | text/vnd.abc |
| **.acgi** | text/html |
| **.afl** | video/animaflex |
| **.ai** | application/postscript |
| **.aif** | audio/aiff<br>audio/x-aiff |
| **.aifc** | audio/aiff<br>audio/x-aiff |
| **.aiff** | audio/aiff<br>audio/x-aiff |
| **.aim** | application/x-aim |
| **.aip** | text/x-audiosoft-intra |
| **.ani** | application/x-navi-animation |
| **.aos** | application/x-nokia-9000-communicator-add-on-software |
| **.aps** | application/mime |
| **.arc** | application/octet-stream |
| **.arj** | application/arj<br>application/octet-stream |
| **.art** | image/x-jg |
| **.asf** | video/x-ms-asf |
| **.asm** | text/x-asm |
| **.asp** | text/asp |
| **.asx** | application/x-mplayer2<br>video/x-ms-asf<br>video/x-ms-asf-plugin |
| **.au** | audio/basic<br>audio/x-au |
| **.avi** | application/x-troff-msvideo<br>video/avi<br>video/msvideo<br>video/x-msvideo |
| **.avs** | video/avs-video |
| **.bcpio** | application/x-bcpio |
| **.bin** | application/mac-binary<br>application/macbinary<br>application/octet-stream<br>application/x-binary<br>application/x-macbinary |
| **.bm** | image/bmp |
| **.bmp** | image/bmp<br>image/x-windows-bmp |
| **.boo** | application/book |
| **.book** | application/book |
| **.boz** | application/x-bzip2 |
| **.bsh** | application/x-bsh |
| **.bz** | application/x-bzip |
| **.bz2** | application/x-bzip2 |
| **.c** | text/plain<br>text/x-c |
| **.c++** | text/plain |
| **.cat** | application/vnd.ms-pki.seccat |
| **.cc** | text/plain<br>text/x-c |
| **.ccad** | application/clariscad |
| **.cco** | application/x-cocoa |
| **.cdf** | application/cdf<br>application/x-cdf<br>application/x-netcdf |
| **.cer** | application/pkix-cert<br>application/x-x509-ca-cert |
| **.cha** | application/x-chat |
| **.chat** | application/x-chat |
| **.class** | application/java<br>application/java-byte-code<br>application/x-java-class |
| **.com** | application/octet-stream<br>text/plain |
| **.conf** | text/plain |
| **.cpio** | application/x-cpio |
| **.cpp** | text/x-c |
| **.cpt** | application/mac-compactpro<br>application/x-compactpro<br>application/x-cpt |
| **.crl** | application/pkcs-crl<br>application/pkix-crl |
| **.crt** | application/pkix-cert<br>application/x-x509-ca-cert<br>application/x-x509-user-cert |
| **.csh** | application/x-csh<br>text/x-script.csh |
| **.css** | application/x-pointplus<br>text/css |
| **.csv** | text/csv |
| **.cxx** | text/plain |
| **.dcr** | application/x-director |
| **.deepv** | application/x-deepv |
| **.def** | text/plain |
| **.der** | application/x-x509-ca-cert |
| **.dif** | video/x-dv |
| **.dir** | application/x-director |
| **.dl** | video/dl<br>video/x-dl |
| **.doc** | application/msword |
| **.dot** | application/msword |
| **.dp** | application/commonground |
| **.drw** | application/drafting |
| **.dump** | application/octet-stream |
| **.dv** | video/x-dv |
| **.dvi** | application/x-dvi |
| **.dwf** | drawing/x-dwf (old)<br>model/vnd.dwf |
| **.dwg** | application/acad<br>image/vnd.dwg<br>image/x-dwg |
| **.dxf** | application/dxf<br>image/vnd.dwg<br>image/x-dwg |
| **.dxr** | application/x-director |
| **.el** | text/x-script.elisp |
| **.elc** | application/x-bytecode.elisp (compiled elisp)<br>application/x-elc |
| **.env** | application/x-envoy |
| **.eps** | application/postscript |
| **.es** | application/x-esrehber |
| **.etx** | text/x-setext |
| **.evy** | application/envoy<br>application/x-envoy |
| **.exe** | application/octet-stream |
| **.f** | text/plain<br>text/x-fortran |
| **.f77** | text/x-fortran |
| **.f90** | text/plain<br>text/x-fortran |
| **.fdf** | application/vnd.fdf |
| **.fif** | application/fractals<br>image/fif |
| **.fli** | video/fli<br>video/x-fli |
| **.flo** | image/florian |
| **.flx** | text/vnd.fmi.flexstor |
| **.fmf** | video/x-atomic3d-feature |
| **.for** | text/plain<br>text/x-fortran |
| **.fpx** | image/vnd.fpx<br>image/vnd.net-fpx |
| **.frl** | application/freeloader |
| **.funk** | audio/make |
| **.g** | text/plain |
| **.g3** | image/g3fax |
| **.gif** | image/gif |
| **.gl** | video/gl<br>video/x-gl |
| **.gsd** | audio/x-gsm |
| **.gsm** | audio/x-gsm |
| **.gsp** | application/x-gsp |
| **.gss** | application/x-gss |
| **.gtar** | application/x-gtar |
| **.gz** | application/x-compressed<br>application/x-gzip |
| **.gzip** | application/x-gzip<br>multipart/x-gzip |
| **.h** | text/plain<br>text/x-h |
| **.hdf** | application/x-hdf |
| **.help** | application/x-helpfile |
| **.hgl** | application/vnd.hp-hpgl |
| **.hh** | text/plain<br>text/x-h |
| **.hlb** | text/x-script |
| **.hlp** | application/hlp<br>application/x-helpfile<br>application/x-winhelp |
| **.hpg** | application/vnd.hp-hpgl |
| **.hpgl** | application/vnd.hp-hpgl |
| **.hqx** | application/binhex<br>application/binhex4<br>application/mac-binhex<br>application/mac-binhex40<br>application/x-binhex40<br>application/x-mac-binhex40 |
| **.hta** | application/hta |
| **.htc** | text/x-component |
| **.htm** | text/html |
| **.html** | text/html |
| **.htmls** | text/html |
| **.htt** | text/webviewhtml |
| **.htx** | text/html |
| **.ice** | x-conference/x-cooltalk |
| **.ico** | image/x-icon |
| **.idc** | text/plain |
| **.ief** | image/ief |
| **.iefs** | image/ief |
| **.iges** | application/iges<br>model/iges |
| **.igs** | application/iges<br>model/iges |
| **.ima** | application/x-ima |
| **.imap** | application/x-httpd-imap |
| **.inf** | application/inf |
| **.ins** | application/x-internett-signup |
| **.ip** | application/x-ip2 |
| **.isu** | video/x-isvideo |
| **.it** | audio/it |
| **.iv** | application/x-inventor |
| **.ivr** | i-world/i-vrml |
| **.ivy** | application/x-livescreen |
| **.jam** | audio/x-jam |
| **.jav** | text/plain<br>text/x-java-source |
| **.java** | text/plain<br>text/x-java-source |
| **.jcm** | application/x-java-commerce |
| **.jfif** | image/jpeg<br>image/pjpeg |
| **.jfif-tbnl** | image/jpeg |
| **.jpe** | image/jpeg<br>image/pjpeg |
| **.jpeg** | image/jpeg<br>image/pjpeg |
| **.jpg** | image/jpeg<br>image/pjpeg |
| **.jps** | image/x-jps |
| **.js** | application/x-javascript |
| **.jut** | image/jutvision |
| **.kar** | audio/midi<br>music/x-karaoke |
| **.ksh** | application/x-ksh<br>text/x-script.ksh |
| **.la** | audio/nspaudio<br>audio/x-nspaudio |
| **.lam** | audio/x-liveaudio |
| **.latex** | application/x-latex |
| **.lha** | application/lha<br>application/octet-stream<br>application/x-lha |
| **.lhx** | application/octet-stream |
| **.list** | text/plain |
| **.lma** | audio/nspaudio<br>audio/x-nspaudio |
| **.log** | text/plain |
| **.lsp** | application/x-lisp<br>text/x-script.lisp |
| **.lst** | text/plain |
| **.lsx** | text/x-la-asf |
| **.ltx** | application/x-latex |
| **.lzh** | application/octet-stream<br>application/x-lzh |
| **.lzx** | application/lzx<br>application/octet-stream<br>application/x-lzx |
| **.m** | text/plain<br>text/x-m |
| **.m1v** | video/mpeg |
| **.m2a** | audio/mpeg |
| **.m2v** | video/mpeg |
| **.m3u** | audio/x-mpequrl |
| **.man** | application/x-troff-man |
| **.map** | application/x-navimap |
| **.mar** | text/plain |
| **.mbd** | application/mbedlet |
| **.mc$** | application/x-magic-cap-package-1.0 |
| **.mcd** | application/mcad<br>application/x-mathcad |
| **.mcf** | image/vasa<br>text/mcf |
| **.mcp** | application/netmc |
| **.me** | application/x-troff-me |
| **.mht** | message/rfc822 |
| **.mhtml** | message/rfc822 |
| **.mid** | application/x-midi<br>audio/midi<br>audio/x-mid<br>audio/x-midi<br>music/crescendo<br>x-music/x-midi |
| **.midi** | application/x-midi<br>audio/midi<br>audio/x-mid<br>audio/x-midi<br>music/crescendo<br>x-music/x-midi |
| **.mif** | application/x-frame<br>application/x-mif |
| **.mime** | message/rfc822<br>www/mime |
| **.mjf** | audio/x-vnd.audioexplosion.mjuicemediafile |
| **.mjpg** | video/x-motion-jpeg |
| **.mm** | application/base64<br>application/x-meme |
| **.mme** | application/base64 |
| **.mod** | audio/mod<br>audio/x-mod |
| **.moov** | video/quicktime |
| **.mov** | video/quicktime |
| **.movie** | video/x-sgi-movie |
| **.mp2** | audio/mpeg<br>audio/x-mpeg<br>video/mpeg<br>video/x-mpeg<br>video/x-mpeq2a |
| **.mp3** | audio/mpeg3<br>audio/x-mpeg-3<br>video/mpeg<br>video/x-mpeg |
| **.mpa** | audio/mpeg<br>video/mpeg |
| **.mpc** | application/x-project |
| **.mpe** | video/mpeg |
| **.mpeg** | video/mpeg |
| **.mpg** | audio/mpeg<br>video/mpeg |
| **.mpga** | audio/mpeg |
| **.mpp** | application/vnd.ms-project |
| **.mpt** | application/x-project |
| **.mpv** | application/x-project |
| **.mpx** | application/x-project |
| **.mrc** | application/marc |
| **.ms** | application/x-troff-ms |
| **.mv** | video/x-sgi-movie |
| **.my** | audio/make |
| **.mzz** | application/x-vnd.audioexplosion.mzz |
| **.nap** | image/naplps |
| **.naplps** | image/naplps |
| **.nc** | application/x-netcdf |
| **.ncm** | application/vnd.nokia.configuration-message |
| **.nif** | image/x-niff |
| **.niff** | image/x-niff |
| **.nix** | application/x-mix-transfer |
| **.nsc** | application/x-conference |
| **.nvd** | application/x-navidoc |
| **.o** | application/octet-stream |
| **.oda** | application/oda |
| **.omc** | application/x-omc |
| **.omcd** | application/x-omcdatamaker |
| **.omcr** | application/x-omcregerator |
| **.p** | text/x-pascal |
| **.p10** | application/pkcs10<br>application/x-pkcs10 |
| **.p12** | application/pkcs-12<br>application/x-pkcs12 |
| **.p7a** | application/x-pkcs7-signature |
| **.p7c** | application/pkcs7-mime<br>application/x-pkcs7-mime |
| **.p7m** | application/pkcs7-mime<br>application/x-pkcs7-mime |
| **.p7r** | application/x-pkcs7-certreqresp |
| **.p7s** | application/pkcs7-signature |
| **.part** | application/pro_eng |
| **.pas** | text/pascal |
| **.pbm** | image/x-portable-bitmap |
| **.pcl** | application/vnd.hp-pcl<br>application/x-pcl |
| **.pct** | image/x-pict |
| **.pcx** | image/x-pcx |
| **.pdb** | chemical/x-pdb |
| **.pdf** | application/pdf |
| **.pfunk** | audio/make<br>audio/make.my.funk |
| **.pgm** | image/x-portable-graymap<br>image/x-portable-greymap |
| **.pic** | image/pict |
| **.pict** | image/pict |
| **.pkg** | application/x-newton-compatible-pkg |
| **.pko** | application/vnd.ms-pki.pko |
| **.pl** | text/plain<br>text/x-script.perl |
| **.plx** | application/x-pixclscript |
| **.pm** | image/x-xpixmap<br>text/x-script.perl-module |
| **.pm4** | application/x-pagemaker |
| **.pm5** | application/x-pagemaker |
| **.png** | image/png |
| **.pnm** | application/x-portable-anymap<br>image/x-portable-anymap |
| **.pot** | application/mspowerpoint<br>application/vnd.ms-powerpoint |
| **.pov** | model/x-pov |
| **.ppa** | application/vnd.ms-powerpoint |
| **.ppm** | image/x-portable-pixmap |
| **.pps** | application/mspowerpoint<br>application/vnd.ms-powerpoint |
| **.ppt** | application/mspowerpoint<br>application/powerpoint<br>application/vnd.ms-powerpoint<br>application/x-mspowerpoint |
| **.ppz** | application/mspowerpoint |
| **.pre** | application/x-freelance |
| **.prt** | application/pro_eng |
| **.ps** | application/postscript |
| **.psd** | application/octet-stream |
| **.pvu** | paleovu/x-pv |
| **.pwz** | application/vnd.ms-powerpoint |
| **.py** | text/x-script.phyton |
| **.pyc** | applicaiton/x-bytecode.python |
| **.qcp** | audio/vnd.qcelp |
| **.qd3** | x-world/x-3dmf |
| **.qd3d** | x-world/x-3dmf |
| **.qif** | image/x-quicktime |
| **.qt** | video/quicktime |
| **.qtc** | video/x-qtc |
| **.qti** | image/x-quicktime |
| **.qtif** | image/x-quicktime |
| **.ra** | audio/x-pn-realaudio<br>audio/x-pn-realaudio-plugin<br>audio/x-realaudio |
| **.ram** | audio/x-pn-realaudio |
| **.ras** | application/x-cmu-raster<br>image/cmu-raster<br>image/x-cmu-raster |
| **.rast** | image/cmu-raster |
| **.rexx** | text/x-script.rexx |
| **.rf** | image/vnd.rn-realflash |
| **.rgb** | image/x-rgb |
| **.rm** | application/vnd.rn-realmedia<br>audio/x-pn-realaudio |
| **.rmi** | audio/mid |
| **.rmm** | audio/x-pn-realaudio |
| **.rmp** | audio/x-pn-realaudio<br>audio/x-pn-realaudio-plugin |
| **.rng** | application/ringing-tones<br>application/vnd.nokia.ringing-tone |
| **.rnx** | application/vnd.rn-realplayer |
| **.roff** | application/x-troff |
| **.rp** | image/vnd.rn-realpix |
| **.rpm** | audio/x-pn-realaudio-plugin |
| **.rt** | text/richtext<br>text/vnd.rn-realtext |
| **.rtf** | application/rtf<br>application/x-rtf<br>text/richtext |
| **.rtx** | application/rtf<br>text/richtext |
| **.rv** | video/vnd.rn-realvideo |
| **.s** | text/x-asm |
| **.s3m** | audio/s3m |
| **.saveme** | application/octet-stream |
| **.sbk** | application/x-tbook |
| **.scm** | application/x-lotusscreencam<br>text/x-script.guile<br>text/x-script.scheme<br>video/x-scm |
| **.sdml** | text/plain |
| **.sdp** | application/sdp<br>application/x-sdp |
| **.sdr** | application/sounder |
| **.sea** | application/sea<br>application/x-sea |
| **.set** | application/set |
| **.sgm** | text/sgml<br>text/x-sgml |
| **.sgml** | text/sgml<br>text/x-sgml |
| **.sh** | application/x-bsh<br>application/x-sh<br>application/x-shar<br>text/x-script.sh |
| **.shar** | application/x-bsh<br>application/x-shar |
| **.shtml** | text/html<br>text/x-server-parsed-html |
| **.sid** | audio/x-psid |
| **.sit** | application/x-sit<br>application/x-stuffit |
| **.skd** | application/x-koan |
| **.skm** | application/x-koan |
| **.skp** | application/x-koan |
| **.skt** | application/x-koan |
| **.sl** | application/x-seelogo |
| **.smi** | application/smil |
| **.smil** | application/smil |
| **.snd** | audio/basic<br>audio/x-adpcm |
| **.sol** | application/solids |
| **.spc** | application/x-pkcs7-certificates<br>text/x-speech |
| **.spl** | application/futuresplash |
| **.spr** | application/x-sprite |
| **.sprite** | application/x-sprite |
| **.src** | application/x-wais-source |
| **.ssi** | text/x-server-parsed-html |
| **.ssm** | application/streamingmedia |
| **.sst** | application/vnd.ms-pki.certstore |
| **.step** | application/step |
| **.stl** | application/sla<br>application/vnd.ms-pki.stl<br>application/x-navistyle |
| **.stp** | application/step |
| **.sv4cpio** | application/x-sv4cpio |
| **.sv4crc** | application/x-sv4crc |
| **.svf** | image/vnd.dwg<br>image/x-dwg |
| **.svr** | application/x-world<br>x-world/x-svr |
| **.swf** | application/x-shockwave-flash |
| **.t** | application/x-troff |
| **.talk** | text/x-speech |
| **.tar** | application/x-tar |
| **.tbk** | application/toolbook<br>application/x-tbook |
| **.tcl** | application/x-tcl<br>text/x-script.tcl |
| **.tcsh** | text/x-script.tcsh |
| **.tex** | application/x-tex |
| **.texi** | application/x-texinfo |
| **.texinfo** | application/x-texinfo |
| **.text** | application/plain<br>text/plain |
| **.tgz** | application/gnutar<br>application/x-compressed |
| **.tif** | image/tiff<br>image/x-tiff |
| **.tiff** | image/tiff<br>image/x-tiff |
| **.tr** | application/x-troff |
| **.tsi** | audio/tsp-audio |
| **.tsp** | application/dsptype<br>audio/tsplayer |
| **.tsv** | text/tab-separated-values |
| **.turbot** | image/florian |
| **.txt** | text/plain |
| **.uil** | text/x-uil |
| **.uni** | text/uri-list |
| **.unis** | text/uri-list |
| **.unv** | application/i-deas |
| **.uri** | text/uri-list |
| **.uris** | text/uri-list |
| **.ustar** | application/x-ustar<br>multipart/x-ustar |
| **.uu** | application/octet-stream<br>text/x-uuencode |
| **.uue** | text/x-uuencode |
| **.vcd** | application/x-cdlink |
| **.vcs** | text/x-vcalendar |
| **.vda** | application/vda |
| **.vdo** | video/vdo |
| **.vew** | application/groupwise |
| **.viv** | video/vivo<br>video/vnd.vivo |
| **.vivo** | video/vivo<br>video/vnd.vivo |
| **.vmd** | application/vocaltec-media-desc |
| **.vmf** | application/vocaltec-media-file |
| **.voc** | audio/voc<br>audio/x-voc |
| **.vos** | video/vosaic |
| **.vox** | audio/voxware |
| **.vqe** | audio/x-twinvq-plugin |
| **.vqf** | audio/x-twinvq |
| **.vql** | audio/x-twinvq-plugin |
| **.vrml** | application/x-vrml<br>model/vrml<br>x-world/x-vrml |
| **.vrt** | x-world/x-vrt |
| **.vsd** | application/x-visio |
| **.vst** | application/x-visio |
| **.vsw** | application/x-visio |
| **.w60** | application/wordperfect6.0 |
| **.w61** | application/wordperfect6.1 |
| **.w6w** | application/msword |
| **.wav** | audio/wav<br>audio/x-wav |
| **.wb1** | application/x-qpro |
| **.wbmp** | image/vnd.wap.wbmp |
| **.web** | application/vnd.xara |
| **.wiz** | application/msword |
| **.wk1** | application/x-123 |
| **.wmf** | windows/metafile |
| **.wml** | text/vnd.wap.wml |
| **.wmlc** | application/vnd.wap.wmlc |
| **.wmls** | text/vnd.wap.wmlscript |
| **.wmlsc** | application/vnd.wap.wmlscriptc |
| **.word** | application/msword |
| **.wp** | application/wordperfect |
| **.wp5** | application/wordperfect<br>application/wordperfect6.0 |
| **.wp6** | application/wordperfect |
| **.wpd** | application/wordperfect<br>application/x-wpwin |
| **.wq1** | application/x-lotus |
| **.wri** | application/mswrite<br>application/x-wri |
| **.wrl** | application/x-world<br>model/vrml<br>x-world/x-vrml |
| **.wrz** | model/vrml<br>x-world/x-vrml |
| **.wsc** | text/scriplet |
| **.wsrc** | application/x-wais-source |
| **.wtk** | application/x-wintalk |
| **.xbm** | image/x-xbitmap<br>image/x-xbm<br>image/xbm |
| **.xdr** | video/x-amt-demorun |
| **.xgz** | xgl/drawing |
| **.xif** | image/vnd.xiff |
| **.xl** | application/excel |
| **.xla** | application/excel<br>application/x-excel<br>application/x-msexcel |
| **.xlb** | application/excel<br>application/vnd.ms-excel<br>application/x-excel |
| **.xlc** | application/excel<br>application/vnd.ms-excel<br>application/x-excel |
| **.xld** | application/excel<br>application/x-excel |
| **.xlk** | application/excel<br>application/x-excel |
| **.xll** | application/excel<br>application/vnd.ms-excel<br>application/x-excel |
| **.xlm** | application/excel<br>application/vnd.ms-excel<br>application/x-excel |
| **.xls** | application/excel<br>application/vnd.ms-excel<br>application/x-excel<br>application/x-msexcel |
| **.xlsx** | application/vnd.openxmlformats-officedocument.spreadsheetml.sheet |
| **.xlt** | application/excel<br>application/x-excel |
| **.xlv** | application/excel<br>application/x-excel |
| **.xlw** | application/excel<br>application/vnd.ms-excel<br>application/x-excel<br>application/x-msexcel |
| **.xm** | audio/xm |
| **.xml** | application/xml<br>text/xml |
| **.xmz** | xgl/movie |
| **.xpix** | application/x-vnd.ls-xpix |
| **.xpm** | image/x-xpixmap<br>image/xpm |
| **.x-png** | image/png |
| **.xsr** | video/x-amt-showrun |
| **.xwd** | image/x-xwd<br>image/x-xwindowdump |
| **.xyz** | chemical/x-pdb |
| **.z** | application/x-compress<br>application/x-compressed |
| **.zip** | application/x-compressed<br>application/x-zip-compressed<br>application/zip<br>multipart/x-zip |
| **.zoo** | application/octet-stream |
| **.zsh** | text/x-script.zsh |
