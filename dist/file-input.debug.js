/**
 * file-input
 * Version 2.1.48
 */

export default class FI{
	
	/**********************************************************************
	 * Class Properties ***************************************************
	 **********************************************************************/

	// The version number
	static version = '2.1.48';

	// Array of file types, from types.json
	static #types = {
	".3dm": [
		"x-world/x-3dmf"
	],
	".3dmf": [
		"x-world/x-3dmf"
	],
	".a": [
		"application/octet-stream"
	],
	".aab": [
		"application/x-authorware-bin"
	],
	".aam": [
		"application/x-authorware-map"
	],
	".aas": [
		"application/x-authorware-seg"
	],
	".abc": [
		"text/vnd.abc"
	],
	".acgi": [
		"text/html"
	],
	".afl": [
		"video/animaflex"
	],
	".ai": [
		"application/postscript"
	],
	".aif": [
		"audio/aiff",
		"audio/x-aiff"
	],
	".aifc": [
		"audio/aiff",
		"audio/x-aiff"
	],
	".aiff": [
		"audio/aiff",
		"audio/x-aiff"
	],
	".aim": [
		"application/x-aim"
	],
	".aip": [
		"text/x-audiosoft-intra"
	],
	".ani": [
		"application/x-navi-animation"
	],
	".aos": [
		"application/x-nokia-9000-communicator-add-on-software"
	],
	".aps": [
		"application/mime"
	],
	".arc": [
		"application/octet-stream"
	],
	".arj": [
		"application/arj",
		"application/octet-stream"
	],
	".art": [
		"image/x-jg"
	],
	".asf": [
		"video/x-ms-asf"
	],
	".asm": [
		"text/x-asm"
	],
	".asp": [
		"text/asp"
	],
	".asx": [
		"application/x-mplayer2",
		"video/x-ms-asf",
		"video/x-ms-asf-plugin"
	],
	".au": [
		"audio/basic",
		"audio/x-au"
	],
	".avi": [
		"application/x-troff-msvideo",
		"video/avi",
		"video/msvideo",
		"video/x-msvideo"
	],
	".avs": [
		"video/avs-video"
	],
	".bcpio": [
		"application/x-bcpio"
	],
	".bin": [
		"application/mac-binary",
		"application/macbinary",
		"application/octet-stream",
		"application/x-binary",
		"application/x-macbinary"
	],
	".bm": [
		"image/bmp"
	],
	".bmp": [
		"image/bmp",
		"image/x-windows-bmp"
	],
	".boo": [
		"application/book"
	],
	".book": [
		"application/book"
	],
	".boz": [
		"application/x-bzip2"
	],
	".bsh": [
		"application/x-bsh"
	],
	".bz": [
		"application/x-bzip"
	],
	".bz2": [
		"application/x-bzip2"
	],
	".c": [
		"text/plain",
		"text/x-c"
	],
	".c++": [
		"text/plain"
	],
	".cat": [
		"application/vnd.ms-pki.seccat"
	],
	".cc": [
		"text/plain",
		"text/x-c"
	],
	".ccad": [
		"application/clariscad"
	],
	".cco": [
		"application/x-cocoa"
	],
	".cdf": [
		"application/cdf",
		"application/x-cdf",
		"application/x-netcdf"
	],
	".cer": [
		"application/pkix-cert",
		"application/x-x509-ca-cert"
	],
	".cha": [
		"application/x-chat"
	],
	".chat": [
		"application/x-chat"
	],
	".class": [
		"application/java",
		"application/java-byte-code",
		"application/x-java-class"
	],
	".com": [
		"application/octet-stream",
		"text/plain"
	],
	".conf": [
		"text/plain"
	],
	".cpio": [
		"application/x-cpio"
	],
	".cpp": [
		"text/x-c"
	],
	".cpt": [
		"application/mac-compactpro",
		"application/x-compactpro",
		"application/x-cpt"
	],
	".crl": [
		"application/pkcs-crl",
		"application/pkix-crl"
	],
	".crt": [
		"application/pkix-cert",
		"application/x-x509-ca-cert",
		"application/x-x509-user-cert"
	],
	".csh": [
		"application/x-csh",
		"text/x-script.csh"
	],
	".css": [
		"application/x-pointplus",
		"text/css"
	],
	".csv": [
		"text/csv"
	],
	".cxx": [
		"text/plain"
	],
	".dcr": [
		"application/x-director"
	],
	".deepv": [
		"application/x-deepv"
	],
	".def": [
		"text/plain"
	],
	".der": [
		"application/x-x509-ca-cert"
	],
	".dif": [
		"video/x-dv"
	],
	".dir": [
		"application/x-director"
	],
	".dl": [
		"video/dl",
		"video/x-dl"
	],
	".doc": [
		"application/msword"
	],
	".dot": [
		"application/msword"
	],
	".dp": [
		"application/commonground"
	],
	".drw": [
		"application/drafting"
	],
	".dump": [
		"application/octet-stream"
	],
	".dv": [
		"video/x-dv"
	],
	".dvi": [
		"application/x-dvi"
	],
	".dwf": [
		"drawing/x-dwf (old)",
		"model/vnd.dwf"
	],
	".dwg": [
		"application/acad",
		"image/vnd.dwg",
		"image/x-dwg"
	],
	".dxf": [
		"application/dxf",
		"image/vnd.dwg",
		"image/x-dwg"
	],
	".dxr": [
		"application/x-director"
	],
	".el": [
		"text/x-script.elisp"
	],
	".elc": [
		"application/x-bytecode.elisp (compiled elisp)",
		"application/x-elc"
	],
	".env": [
		"application/x-envoy"
	],
	".eps": [
		"application/postscript"
	],
	".es": [
		"application/x-esrehber"
	],
	".etx": [
		"text/x-setext"
	],
	".evy": [
		"application/envoy",
		"application/x-envoy"
	],
	".exe": [
		"application/octet-stream"
	],
	".f": [
		"text/plain",
		"text/x-fortran"
	],
	".f77": [
		"text/x-fortran"
	],
	".f90": [
		"text/plain",
		"text/x-fortran"
	],
	".fdf": [
		"application/vnd.fdf"
	],
	".fif": [
		"application/fractals",
		"image/fif"
	],
	".fli": [
		"video/fli",
		"video/x-fli"
	],
	".flo": [
		"image/florian"
	],
	".flx": [
		"text/vnd.fmi.flexstor"
	],
	".fmf": [
		"video/x-atomic3d-feature"
	],
	".for": [
		"text/plain",
		"text/x-fortran"
	],
	".fpx": [
		"image/vnd.fpx",
		"image/vnd.net-fpx"
	],
	".frl": [
		"application/freeloader"
	],
	".funk": [
		"audio/make"
	],
	".g": [
		"text/plain"
	],
	".g3": [
		"image/g3fax"
	],
	".gif": [
		"image/gif"
	],
	".gl": [
		"video/gl",
		"video/x-gl"
	],
	".gsd": [
		"audio/x-gsm"
	],
	".gsm": [
		"audio/x-gsm"
	],
	".gsp": [
		"application/x-gsp"
	],
	".gss": [
		"application/x-gss"
	],
	".gtar": [
		"application/x-gtar"
	],
	".gz": [
		"application/x-compressed",
		"application/x-gzip"
	],
	".gzip": [
		"application/x-gzip",
		"multipart/x-gzip"
	],
	".h": [
		"text/plain",
		"text/x-h"
	],
	".hdf": [
		"application/x-hdf"
	],
	".help": [
		"application/x-helpfile"
	],
	".hgl": [
		"application/vnd.hp-hpgl"
	],
	".hh": [
		"text/plain",
		"text/x-h"
	],
	".hlb": [
		"text/x-script"
	],
	".hlp": [
		"application/hlp",
		"application/x-helpfile",
		"application/x-winhelp"
	],
	".hpg": [
		"application/vnd.hp-hpgl"
	],
	".hpgl": [
		"application/vnd.hp-hpgl"
	],
	".hqx": [
		"application/binhex",
		"application/binhex4",
		"application/mac-binhex",
		"application/mac-binhex40",
		"application/x-binhex40",
		"application/x-mac-binhex40"
	],
	".hta": [
		"application/hta"
	],
	".htc": [
		"text/x-component"
	],
	".htm": [
		"text/html"
	],
	".html": [
		"text/html"
	],
	".htmls": [
		"text/html"
	],
	".htt": [
		"text/webviewhtml"
	],
	".htx": [
		"text/html"
	],
	".ice": [
		"x-conference/x-cooltalk"
	],
	".ico": [
		"image/x-icon"
	],
	".idc": [
		"text/plain"
	],
	".ief": [
		"image/ief"
	],
	".iefs": [
		"image/ief"
	],
	".iges": [
		"application/iges",
		"model/iges"
	],
	".igs": [
		"application/iges",
		"model/iges"
	],
	".ima": [
		"application/x-ima"
	],
	".imap": [
		"application/x-httpd-imap"
	],
	".inf": [
		"application/inf"
	],
	".ins": [
		"application/x-internett-signup"
	],
	".ip": [
		"application/x-ip2"
	],
	".isu": [
		"video/x-isvideo"
	],
	".it": [
		"audio/it"
	],
	".iv": [
		"application/x-inventor"
	],
	".ivr": [
		"i-world/i-vrml"
	],
	".ivy": [
		"application/x-livescreen"
	],
	".jam": [
		"audio/x-jam"
	],
	".jav": [
		"text/plain",
		"text/x-java-source"
	],
	".java": [
		"text/plain",
		"text/x-java-source"
	],
	".jcm": [
		"application/x-java-commerce"
	],
	".jfif": [
		"image/jpeg",
		"image/pjpeg"
	],
	".jfif-tbnl": [
		"image/jpeg"
	],
	".jpe": [
		"image/jpeg",
		"image/pjpeg"
	],
	".jpeg": [
		"image/jpeg",
		"image/pjpeg"
	],
	".jpg": [
		"image/jpeg",
		"image/pjpeg"
	],
	".jps": [
		"image/x-jps"
	],
	".js": [
		"application/x-javascript"
	],
	".jut": [
		"image/jutvision"
	],
	".kar": [
		"audio/midi",
		"music/x-karaoke"
	],
	".ksh": [
		"application/x-ksh",
		"text/x-script.ksh"
	],
	".la": [
		"audio/nspaudio",
		"audio/x-nspaudio"
	],
	".lam": [
		"audio/x-liveaudio"
	],
	".latex": [
		"application/x-latex"
	],
	".lha": [
		"application/lha",
		"application/octet-stream",
		"application/x-lha"
	],
	".lhx": [
		"application/octet-stream"
	],
	".list": [
		"text/plain"
	],
	".lma": [
		"audio/nspaudio",
		"audio/x-nspaudio"
	],
	".log": [
		"text/plain"
	],
	".lsp": [
		"application/x-lisp",
		"text/x-script.lisp"
	],
	".lst": [
		"text/plain"
	],
	".lsx": [
		"text/x-la-asf"
	],
	".ltx": [
		"application/x-latex"
	],
	".lzh": [
		"application/octet-stream",
		"application/x-lzh"
	],
	".lzx": [
		"application/lzx",
		"application/octet-stream",
		"application/x-lzx"
	],
	".m": [
		"text/plain",
		"text/x-m"
	],
	".m1v": [
		"video/mpeg"
	],
	".m2a": [
		"audio/mpeg"
	],
	".m2v": [
		"video/mpeg"
	],
	".m3u": [
		"audio/x-mpequrl"
	],
	".man": [
		"application/x-troff-man"
	],
	".map": [
		"application/x-navimap"
	],
	".mar": [
		"text/plain"
	],
	".mbd": [
		"application/mbedlet"
	],
	".mc$": [
		"application/x-magic-cap-package-1.0"
	],
	".mcd": [
		"application/mcad",
		"application/x-mathcad"
	],
	".mcf": [
		"image/vasa",
		"text/mcf"
	],
	".mcp": [
		"application/netmc"
	],
	".me": [
		"application/x-troff-me"
	],
	".mht": [
		"message/rfc822"
	],
	".mhtml": [
		"message/rfc822"
	],
	".mid": [
		"application/x-midi",
		"audio/midi",
		"audio/x-mid",
		"audio/x-midi",
		"music/crescendo",
		"x-music/x-midi"
	],
	".midi": [
		"application/x-midi",
		"audio/midi",
		"audio/x-mid",
		"audio/x-midi",
		"music/crescendo",
		"x-music/x-midi"
	],
	".mif": [
		"application/x-frame",
		"application/x-mif"
	],
	".mime": [
		"message/rfc822",
		"www/mime"
	],
	".mjf": [
		"audio/x-vnd.audioexplosion.mjuicemediafile"
	],
	".mjpg": [
		"video/x-motion-jpeg"
	],
	".mm": [
		"application/base64",
		"application/x-meme"
	],
	".mme": [
		"application/base64"
	],
	".mod": [
		"audio/mod",
		"audio/x-mod"
	],
	".moov": [
		"video/quicktime"
	],
	".mov": [
		"video/quicktime"
	],
	".movie": [
		"video/x-sgi-movie"
	],
	".mp2": [
		"audio/mpeg",
		"audio/x-mpeg",
		"video/mpeg",
		"video/x-mpeg",
		"video/x-mpeq2a"
	],
	".mp3": [
		"audio/mpeg3",
		"audio/x-mpeg-3",
		"video/mpeg",
		"video/x-mpeg"
	],
	".mpa": [
		"audio/mpeg",
		"video/mpeg"
	],
	".mpc": [
		"application/x-project"
	],
	".mpe": [
		"video/mpeg"
	],
	".mpeg": [
		"video/mpeg"
	],
	".mpg": [
		"audio/mpeg",
		"video/mpeg"
	],
	".mpga": [
		"audio/mpeg"
	],
	".mpp": [
		"application/vnd.ms-project"
	],
	".mpt": [
		"application/x-project"
	],
	".mpv": [
		"application/x-project"
	],
	".mpx": [
		"application/x-project"
	],
	".mrc": [
		"application/marc"
	],
	".ms": [
		"application/x-troff-ms"
	],
	".mv": [
		"video/x-sgi-movie"
	],
	".my": [
		"audio/make"
	],
	".mzz": [
		"application/x-vnd.audioexplosion.mzz"
	],
	".nap": [
		"image/naplps"
	],
	".naplps": [
		"image/naplps"
	],
	".nc": [
		"application/x-netcdf"
	],
	".ncm": [
		"application/vnd.nokia.configuration-message"
	],
	".nif": [
		"image/x-niff"
	],
	".niff": [
		"image/x-niff"
	],
	".nix": [
		"application/x-mix-transfer"
	],
	".nsc": [
		"application/x-conference"
	],
	".nvd": [
		"application/x-navidoc"
	],
	".o": [
		"application/octet-stream"
	],
	".oda": [
		"application/oda"
	],
	".omc": [
		"application/x-omc"
	],
	".omcd": [
		"application/x-omcdatamaker"
	],
	".omcr": [
		"application/x-omcregerator"
	],
	".p": [
		"text/x-pascal"
	],
	".p10": [
		"application/pkcs10",
		"application/x-pkcs10"
	],
	".p12": [
		"application/pkcs-12",
		"application/x-pkcs12"
	],
	".p7a": [
		"application/x-pkcs7-signature"
	],
	".p7c": [
		"application/pkcs7-mime",
		"application/x-pkcs7-mime"
	],
	".p7m": [
		"application/pkcs7-mime",
		"application/x-pkcs7-mime"
	],
	".p7r": [
		"application/x-pkcs7-certreqresp"
	],
	".p7s": [
		"application/pkcs7-signature"
	],
	".part": [
		"application/pro_eng"
	],
	".pas": [
		"text/pascal"
	],
	".pbm": [
		"image/x-portable-bitmap"
	],
	".pcl": [
		"application/vnd.hp-pcl",
		"application/x-pcl"
	],
	".pct": [
		"image/x-pict"
	],
	".pcx": [
		"image/x-pcx"
	],
	".pdb": [
		"chemical/x-pdb"
	],
	".pdf": [
		"application/pdf"
	],
	".pfunk": [
		"audio/make",
		"audio/make.my.funk"
	],
	".pgm": [
		"image/x-portable-graymap",
		"image/x-portable-greymap"
	],
	".pic": [
		"image/pict"
	],
	".pict": [
		"image/pict"
	],
	".pkg": [
		"application/x-newton-compatible-pkg"
	],
	".pko": [
		"application/vnd.ms-pki.pko"
	],
	".pl": [
		"text/plain",
		"text/x-script.perl"
	],
	".plx": [
		"application/x-pixclscript"
	],
	".pm": [
		"image/x-xpixmap",
		"text/x-script.perl-module"
	],
	".pm4": [
		"application/x-pagemaker"
	],
	".pm5": [
		"application/x-pagemaker"
	],
	".png": [
		"image/png"
	],
	".pnm": [
		"application/x-portable-anymap",
		"image/x-portable-anymap"
	],
	".pot": [
		"application/mspowerpoint",
		"application/vnd.ms-powerpoint"
	],
	".pov": [
		"model/x-pov"
	],
	".ppa": [
		"application/vnd.ms-powerpoint"
	],
	".ppm": [
		"image/x-portable-pixmap"
	],
	".pps": [
		"application/mspowerpoint",
		"application/vnd.ms-powerpoint"
	],
	".ppt": [
		"application/mspowerpoint",
		"application/powerpoint",
		"application/vnd.ms-powerpoint",
		"application/x-mspowerpoint"
	],
	".ppz": [
		"application/mspowerpoint"
	],
	".pre": [
		"application/x-freelance"
	],
	".prt": [
		"application/pro_eng"
	],
	".ps": [
		"application/postscript"
	],
	".psd": [
		"application/octet-stream"
	],
	".pvu": [
		"paleovu/x-pv"
	],
	".pwz": [
		"application/vnd.ms-powerpoint"
	],
	".py": [
		"text/x-script.phyton"
	],
	".pyc": [
		"applicaiton/x-bytecode.python"
	],
	".qcp": [
		"audio/vnd.qcelp"
	],
	".qd3": [
		"x-world/x-3dmf"
	],
	".qd3d": [
		"x-world/x-3dmf"
	],
	".qif": [
		"image/x-quicktime"
	],
	".qt": [
		"video/quicktime"
	],
	".qtc": [
		"video/x-qtc"
	],
	".qti": [
		"image/x-quicktime"
	],
	".qtif": [
		"image/x-quicktime"
	],
	".ra": [
		"audio/x-pn-realaudio",
		"audio/x-pn-realaudio-plugin",
		"audio/x-realaudio"
	],
	".ram": [
		"audio/x-pn-realaudio"
	],
	".ras": [
		"application/x-cmu-raster",
		"image/cmu-raster",
		"image/x-cmu-raster"
	],
	".rast": [
		"image/cmu-raster"
	],
	".rexx": [
		"text/x-script.rexx"
	],
	".rf": [
		"image/vnd.rn-realflash"
	],
	".rgb": [
		"image/x-rgb"
	],
	".rm": [
		"application/vnd.rn-realmedia",
		"audio/x-pn-realaudio"
	],
	".rmi": [
		"audio/mid"
	],
	".rmm": [
		"audio/x-pn-realaudio"
	],
	".rmp": [
		"audio/x-pn-realaudio",
		"audio/x-pn-realaudio-plugin"
	],
	".rng": [
		"application/ringing-tones",
		"application/vnd.nokia.ringing-tone"
	],
	".rnx": [
		"application/vnd.rn-realplayer"
	],
	".roff": [
		"application/x-troff"
	],
	".rp": [
		"image/vnd.rn-realpix"
	],
	".rpm": [
		"audio/x-pn-realaudio-plugin"
	],
	".rt": [
		"text/richtext",
		"text/vnd.rn-realtext"
	],
	".rtf": [
		"application/rtf",
		"application/x-rtf",
		"text/richtext"
	],
	".rtx": [
		"application/rtf",
		"text/richtext"
	],
	".rv": [
		"video/vnd.rn-realvideo"
	],
	".s": [
		"text/x-asm"
	],
	".s3m": [
		"audio/s3m"
	],
	".saveme": [
		"application/octet-stream"
	],
	".sbk": [
		"application/x-tbook"
	],
	".scm": [
		"application/x-lotusscreencam",
		"text/x-script.guile",
		"text/x-script.scheme",
		"video/x-scm"
	],
	".sdml": [
		"text/plain"
	],
	".sdp": [
		"application/sdp",
		"application/x-sdp"
	],
	".sdr": [
		"application/sounder"
	],
	".sea": [
		"application/sea",
		"application/x-sea"
	],
	".set": [
		"application/set"
	],
	".sgm": [
		"text/sgml",
		"text/x-sgml"
	],
	".sgml": [
		"text/sgml",
		"text/x-sgml"
	],
	".sh": [
		"application/x-bsh",
		"application/x-sh",
		"application/x-shar",
		"text/x-script.sh"
	],
	".shar": [
		"application/x-bsh",
		"application/x-shar"
	],
	".shtml": [
		"text/html",
		"text/x-server-parsed-html"
	],
	".sid": [
		"audio/x-psid"
	],
	".sit": [
		"application/x-sit",
		"application/x-stuffit"
	],
	".skd": [
		"application/x-koan"
	],
	".skm": [
		"application/x-koan"
	],
	".skp": [
		"application/x-koan"
	],
	".skt": [
		"application/x-koan"
	],
	".sl": [
		"application/x-seelogo"
	],
	".smi": [
		"application/smil"
	],
	".smil": [
		"application/smil"
	],
	".snd": [
		"audio/basic",
		"audio/x-adpcm"
	],
	".sol": [
		"application/solids"
	],
	".spc": [
		"application/x-pkcs7-certificates",
		"text/x-speech"
	],
	".spl": [
		"application/futuresplash"
	],
	".spr": [
		"application/x-sprite"
	],
	".sprite": [
		"application/x-sprite"
	],
	".src": [
		"application/x-wais-source"
	],
	".ssi": [
		"text/x-server-parsed-html"
	],
	".ssm": [
		"application/streamingmedia"
	],
	".sst": [
		"application/vnd.ms-pki.certstore"
	],
	".step": [
		"application/step"
	],
	".stl": [
		"application/sla",
		"application/vnd.ms-pki.stl",
		"application/x-navistyle"
	],
	".stp": [
		"application/step"
	],
	".sv4cpio": [
		"application/x-sv4cpio"
	],
	".sv4crc": [
		"application/x-sv4crc"
	],
	".svf": [
		"image/vnd.dwg",
		"image/x-dwg"
	],
	".svr": [
		"application/x-world",
		"x-world/x-svr"
	],
	".swf": [
		"application/x-shockwave-flash"
	],
	".t": [
		"application/x-troff"
	],
	".talk": [
		"text/x-speech"
	],
	".tar": [
		"application/x-tar"
	],
	".tbk": [
		"application/toolbook",
		"application/x-tbook"
	],
	".tcl": [
		"application/x-tcl",
		"text/x-script.tcl"
	],
	".tcsh": [
		"text/x-script.tcsh"
	],
	".tex": [
		"application/x-tex"
	],
	".texi": [
		"application/x-texinfo"
	],
	".texinfo": [
		"application/x-texinfo"
	],
	".text": [
		"application/plain",
		"text/plain"
	],
	".tgz": [
		"application/gnutar",
		"application/x-compressed"
	],
	".tif": [
		"image/tiff",
		"image/x-tiff"
	],
	".tiff": [
		"image/tiff",
		"image/x-tiff"
	],
	".tr": [
		"application/x-troff"
	],
	".tsi": [
		"audio/tsp-audio"
	],
	".tsp": [
		"application/dsptype",
		"audio/tsplayer"
	],
	".tsv": [
		"text/tab-separated-values"
	],
	".turbot": [
		"image/florian"
	],
	".txt": [
		"text/plain"
	],
	".uil": [
		"text/x-uil"
	],
	".uni": [
		"text/uri-list"
	],
	".unis": [
		"text/uri-list"
	],
	".unv": [
		"application/i-deas"
	],
	".uri": [
		"text/uri-list"
	],
	".uris": [
		"text/uri-list"
	],
	".ustar": [
		"application/x-ustar",
		"multipart/x-ustar"
	],
	".uu": [
		"application/octet-stream",
		"text/x-uuencode"
	],
	".uue": [
		"text/x-uuencode"
	],
	".vcd": [
		"application/x-cdlink"
	],
	".vcs": [
		"text/x-vcalendar"
	],
	".vda": [
		"application/vda"
	],
	".vdo": [
		"video/vdo"
	],
	".vew": [
		"application/groupwise"
	],
	".viv": [
		"video/vivo",
		"video/vnd.vivo"
	],
	".vivo": [
		"video/vivo",
		"video/vnd.vivo"
	],
	".vmd": [
		"application/vocaltec-media-desc"
	],
	".vmf": [
		"application/vocaltec-media-file"
	],
	".voc": [
		"audio/voc",
		"audio/x-voc"
	],
	".vos": [
		"video/vosaic"
	],
	".vox": [
		"audio/voxware"
	],
	".vqe": [
		"audio/x-twinvq-plugin"
	],
	".vqf": [
		"audio/x-twinvq"
	],
	".vql": [
		"audio/x-twinvq-plugin"
	],
	".vrml": [
		"application/x-vrml",
		"model/vrml",
		"x-world/x-vrml"
	],
	".vrt": [
		"x-world/x-vrt"
	],
	".vsd": [
		"application/x-visio"
	],
	".vst": [
		"application/x-visio"
	],
	".vsw": [
		"application/x-visio"
	],
	".w60": [
		"application/wordperfect6.0"
	],
	".w61": [
		"application/wordperfect6.1"
	],
	".w6w": [
		"application/msword"
	],
	".wav": [
		"audio/wav",
		"audio/x-wav"
	],
	".wb1": [
		"application/x-qpro"
	],
	".wbmp": [
		"image/vnd.wap.wbmp"
	],
	".web": [
		"application/vnd.xara"
	],
	".wiz": [
		"application/msword"
	],
	".wk1": [
		"application/x-123"
	],
	".wmf": [
		"windows/metafile"
	],
	".wml": [
		"text/vnd.wap.wml"
	],
	".wmlc": [
		"application/vnd.wap.wmlc"
	],
	".wmls": [
		"text/vnd.wap.wmlscript"
	],
	".wmlsc": [
		"application/vnd.wap.wmlscriptc"
	],
	".word": [
		"application/msword"
	],
	".wp": [
		"application/wordperfect"
	],
	".wp5": [
		"application/wordperfect",
		"application/wordperfect6.0"
	],
	".wp6": [
		"application/wordperfect"
	],
	".wpd": [
		"application/wordperfect",
		"application/x-wpwin"
	],
	".wq1": [
		"application/x-lotus"
	],
	".wri": [
		"application/mswrite",
		"application/x-wri"
	],
	".wrl": [
		"application/x-world",
		"model/vrml",
		"x-world/x-vrml"
	],
	".wrz": [
		"model/vrml",
		"x-world/x-vrml"
	],
	".wsc": [
		"text/scriplet"
	],
	".wsrc": [
		"application/x-wais-source"
	],
	".wtk": [
		"application/x-wintalk"
	],
	".xbm": [
		"image/x-xbitmap",
		"image/x-xbm",
		"image/xbm"
	],
	".xdr": [
		"video/x-amt-demorun"
	],
	".xgz": [
		"xgl/drawing"
	],
	".xif": [
		"image/vnd.xiff"
	],
	".xl": [
		"application/excel"
	],
	".xla": [
		"application/excel",
		"application/x-excel",
		"application/x-msexcel"
	],
	".xlb": [
		"application/excel",
		"application/vnd.ms-excel",
		"application/x-excel"
	],
	".xlc": [
		"application/excel",
		"application/vnd.ms-excel",
		"application/x-excel"
	],
	".xld": [
		"application/excel",
		"application/x-excel"
	],
	".xlk": [
		"application/excel",
		"application/x-excel"
	],
	".xll": [
		"application/excel",
		"application/vnd.ms-excel",
		"application/x-excel"
	],
	".xlm": [
		"application/excel",
		"application/vnd.ms-excel",
		"application/x-excel"
	],
	".xls": [
		"application/excel",
		"application/vnd.ms-excel",
		"application/x-excel",
		"application/x-msexcel"
	],
	".xlsx": [
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
	],
	".xlt": [
		"application/excel",
		"application/x-excel"
	],
	".xlv": [
		"application/excel",
		"application/x-excel"
	],
	".xlw": [
		"application/excel",
		"application/vnd.ms-excel",
		"application/x-excel",
		"application/x-msexcel"
	],
	".xm": [
		"audio/xm"
	],
	".xml": [
		"application/xml",
		"text/xml"
	],
	".xmz": [
		"xgl/movie"
	],
	".xpix": [
		"application/x-vnd.ls-xpix"
	],
	".xpm": [
		"image/x-xpixmap",
		"image/xpm"
	],
	".x-png": [
		"image/png"
	],
	".xsr": [
		"video/x-amt-showrun"
	],
	".xwd": [
		"image/x-xwd",
		"image/x-xwindowdump"
	],
	".xyz": [
		"chemical/x-pdb"
	],
	".z": [
		"application/x-compress",
		"application/x-compressed"
	],
	".zip": [
		"application/x-compressed",
		"application/x-zip-compressed",
		"application/zip",
		"multipart/x-zip"
	],
	".zoo": [
		"application/octet-stream"
	],
	".zsh": [
		"text/x-script.zsh"
	]
};
	
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
	 * @param Boolean skipCallbacks - Skip any callbacks defined by onFileSelect()
	 * @returns Promise - resolves after user selects a file, 
	 * 			or closes the dialog without selecting a file.
	 */
	open(skipCallbacks=false){
		return new Promise(resolve=>{
			let handleNextChange, handleNextCancel;
			handleNextChange = e => {
				this.#files.push(...e.target.files);
				this.#hiddenInput.removeEventListener('change', handleNextChange);
				this.#hiddenInput.removeEventListener('cancel', handleNextCancel);
				let newFiles = [...e.target.files];
				let event = this.#getFilePickedEvent(newFiles);
				if(!skipCallbacks){
					this.#callbacks.forEach(cb=>cb(event));
				} 
				resolve(newFiles);
			};
			handleNextCancel = e => {
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
		this.#attachedClickables.forEach(ele=>{
			ele.removeEventListener('click', this.#boundHandlers.clickHandler);
		});
		this.#dragAreas.forEach(area=>{
			this.#removeClassOrStyle(area.ele);
			FI.#dragEvents.forEach(evt=>area.ele.removeEventListener(evt, this.#boundHandlers.dragEventHandler));
			FI.#dragoverEvents.forEach(evt=>area.ele.removeEventListener(evt, this.#boundHandlers.dragoverEventHandler));
			FI.#dragendEvents.forEach(evt=>area.ele.removeEventListener(evt, this.#boundHandlers.dragendEventHandler));
			FI.#dropEvents.forEach(evt=>area.ele.removeEventListener(evt, this.#boundHandlers.dropEventHandler));
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
			let event = this.#getFilePickedEvent(validFiles, e.currentTarget);
			this.#files.push(...validFiles);
			this.#callbacks.forEach(cb=>cb(event));
		}
		if(invalidFiles.length){
			this.#unacceptedCallbacks.forEach(cb=>cb(invalidFiles));
		}
	}

	/**********************************************************************
	 * Private Methods ****************************************************
	 **********************************************************************/

	#getFilePickedEvent(newFiles, dragTarget){
		let event = new CustomEvent('fi.added', {
			bubbles: true,
			detail: {
				dragTarget, 
				newFiles, 
				context: this,
				allFiles: this.#files
			}
		});
		(dragTarget || document).dispatchEvent(event);
		return event;
	}

	// Remove a classname or set of style properties from an element
	#removeClassOrStyle(ele){
		let i = this.#dragAreas.reduce((a,c,i)=>c.ele===ele?i:a,-1);
		let classOrStyles = this.#dragAreas[i].classOrStyles;
		if('string' === typeof classOrStyles){
			ele.classList.remove(classOrStyles);
		}else if('object' === typeof classOrStyles){
			if(this.#dragAreas[i].s){
				Object.keys(classOrStyles).forEach(style=>{
					ele.style[style] = this.#dragAreas[i].s[style];
				});
				delete this.#dragAreas[i].s;
			}
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
