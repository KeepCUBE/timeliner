(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Do(parent) {
	var listeners = [];
	this.do = function(callback) {
		listeners.push(callback);
	};
	this.undo = function(callback) {
		listeners.splice(listeners.indexOf(callback), 1);
	};
	this.fire = function() {
		for (var v = 0; v < listeners.length; v++) {
			listeners[v].apply(parent, arguments);
		}
	};
}

if (typeof(module) === 'object') module.exports = Do;

},{}],2:[function(require,module,exports){
module.exports={
  "version": "1.6.0"
}
},{}],3:[function(require,module,exports){
module.exports={
	"unitsPerEm": 1792,
	"ascender": 1536,
	"descender": -256,
	"fonts": {
		"plus": {
			"advanceWidth": 1408,
			"commands": "M,1408,800 C,1408,853,1365,896,1312,896 L,896,896 L,896,1312 C,896,1365,853,1408,800,1408 L,608,1408 C,555,1408,512,1365,512,1312 L,512,896 L,96,896 C,43,896,0,853,0,800 L,0,608 C,0,555,43,512,96,512 L,512,512 L,512,96 C,512,43,555,0,608,0 L,800,0 C,853,0,896,43,896,96 L,896,512 L,1312,512 C,1365,512,1408,555,1408,608 Z"
		},
		"minus": {
			"advanceWidth": 1408,
			"commands": "M,1408,800 C,1408,853,1365,896,1312,896 L,96,896 C,43,896,0,853,0,800 L,0,608 C,0,555,43,512,96,512 L,1312,512 C,1365,512,1408,555,1408,608 Z"
		},
		"ok": {
			"advanceWidth": 1792,
			"commands": "M,1671,970 C,1671,995,1661,1020,1643,1038 L,1507,1174 C,1489,1192,1464,1202,1439,1202 C,1414,1202,1389,1192,1371,1174 L,715,517 L,421,812 C,403,830,378,840,353,840 C,328,840,303,830,285,812 L,149,676 C,131,658,121,633,121,608 C,121,583,131,558,149,540 L,511,178 L,647,42 C,665,24,690,14,715,14 C,740,14,765,24,783,42 L,919,178 L,1643,902 C,1661,920,1671,945,1671,970 Z"
		},
		"remove": {
			"advanceWidth": 1408,
			"commands": "M,1298,214 C,1298,239,1288,264,1270,282 L,976,576 L,1270,870 C,1288,888,1298,913,1298,938 C,1298,963,1288,988,1270,1006 L,1134,1142 C,1116,1160,1091,1170,1066,1170 C,1041,1170,1016,1160,998,1142 L,704,848 L,410,1142 C,392,1160,367,1170,342,1170 C,317,1170,292,1160,274,1142 L,138,1006 C,120,988,110,963,110,938 C,110,913,120,888,138,870 L,432,576 L,138,282 C,120,264,110,239,110,214 C,110,189,120,164,138,146 L,274,10 C,292,-8,317,-18,342,-18 C,367,-18,392,-8,410,10 L,704,304 L,998,10 C,1016,-8,1041,-18,1066,-18 C,1091,-18,1116,-8,1134,10 L,1270,146 C,1288,164,1298,189,1298,214 Z"
		},
		"zoom_in": {
			"advanceWidth": 1664,
			"commands": "M,1024,736 C,1024,753,1009,768,992,768 L,768,768 L,768,992 C,768,1009,753,1024,736,1024 L,672,1024 C,655,1024,640,1009,640,992 L,640,768 L,416,768 C,399,768,384,753,384,736 L,384,672 C,384,655,399,640,416,640 L,640,640 L,640,416 C,640,399,655,384,672,384 L,736,384 C,753,384,768,399,768,416 L,768,640 L,992,640 C,1009,640,1024,655,1024,672 M,1152,704 C,1152,457,951,256,704,256 C,457,256,256,457,256,704 C,256,951,457,1152,704,1152 C,951,1152,1152,951,1152,704 M,1664,-128 C,1664,-94,1650,-61,1627,-38 L,1284,305 C,1365,422,1408,562,1408,704 C,1408,1093,1093,1408,704,1408 C,315,1408,0,1093,0,704 C,0,315,315,0,704,0 C,846,0,986,43,1103,124 L,1446,-218 C,1469,-242,1502,-256,1536,-256 C,1607,-256,1664,-199,1664,-128 Z"
		},
		"zoom_out": {
			"advanceWidth": 1664,
			"commands": "M,1024,736 C,1024,753,1009,768,992,768 L,416,768 C,399,768,384,753,384,736 L,384,672 C,384,655,399,640,416,640 L,992,640 C,1009,640,1024,655,1024,672 M,1152,704 C,1152,457,951,256,704,256 C,457,256,256,457,256,704 C,256,951,457,1152,704,1152 C,951,1152,1152,951,1152,704 M,1664,-128 C,1664,-94,1650,-61,1627,-38 L,1284,305 C,1365,422,1408,562,1408,704 C,1408,1093,1093,1408,704,1408 C,315,1408,0,1093,0,704 C,0,315,315,0,704,0 C,846,0,986,43,1103,124 L,1446,-218 C,1469,-242,1502,-256,1536,-256 C,1607,-256,1664,-199,1664,-128 Z"
		},
		"cog": {
			"advanceWidth": 1536,
			"commands": "M,1024,640 C,1024,499,909,384,768,384 C,627,384,512,499,512,640 C,512,781,627,896,768,896 C,909,896,1024,781,1024,640 M,1536,749 C,1536,766,1524,782,1507,785 L,1324,813 C,1314,846,1300,879,1283,911 C,1317,958,1354,1002,1388,1048 C,1393,1055,1396,1062,1396,1071 C,1396,1079,1394,1087,1389,1093 C,1347,1152,1277,1214,1224,1263 C,1217,1269,1208,1273,1199,1273 C,1190,1273,1181,1270,1175,1264 L,1033,1157 C,1004,1172,974,1184,943,1194 L,915,1378 C,913,1395,897,1408,879,1408 L,657,1408 C,639,1408,625,1396,621,1380 C,605,1320,599,1255,592,1194 C,561,1184,530,1171,501,1156 L,363,1263 C,355,1269,346,1273,337,1273 C,303,1273,168,1127,144,1094 C,139,1087,135,1080,135,1071 C,135,1062,139,1054,145,1047 C,182,1002,218,957,252,909 C,236,879,223,849,213,817 L,27,789 C,12,786,0,768,0,753 L,0,531 C,0,514,12,498,29,495 L,212,468 C,222,434,236,401,253,369 C,219,322,182,278,148,232 C,143,225,140,218,140,209 C,140,201,142,193,147,186 C,189,128,259,66,312,18 C,319,11,328,7,337,7 C,346,7,355,10,362,16 L,503,123 C,532,108,562,96,593,86 L,621,-98 C,623,-115,639,-128,657,-128 L,879,-128 C,897,-128,911,-116,915,-100 C,931,-40,937,25,944,86 C,975,96,1006,109,1035,124 L,1173,16 C,1181,11,1190,7,1199,7 C,1233,7,1368,154,1392,186 C,1398,193,1401,200,1401,209 C,1401,218,1397,227,1391,234 C,1354,279,1318,323,1284,372 C,1300,401,1312,431,1323,463 L,1508,491 C,1524,494,1536,512,1536,527 Z"
		},
		"trash": {
			"advanceWidth": 1408,
			"commands": "M,512,800 C,512,818,498,832,480,832 L,416,832 C,398,832,384,818,384,800 L,384,224 C,384,206,398,192,416,192 L,480,192 C,498,192,512,206,512,224 M,768,800 C,768,818,754,832,736,832 L,672,832 C,654,832,640,818,640,800 L,640,224 C,640,206,654,192,672,192 L,736,192 C,754,192,768,206,768,224 M,1024,800 C,1024,818,1010,832,992,832 L,928,832 C,910,832,896,818,896,800 L,896,224 C,896,206,910,192,928,192 L,992,192 C,1010,192,1024,206,1024,224 M,1152,76 C,1152,28,1125,0,1120,0 L,288,0 C,283,0,256,28,256,76 L,256,1024 L,1152,1024 L,1152,76 M,480,1152 L,529,1269 C,532,1273,540,1279,546,1280 L,863,1280 C,868,1279,877,1273,880,1269 L,928,1152 M,1408,1120 C,1408,1138,1394,1152,1376,1152 L,1067,1152 L,997,1319 C,977,1368,917,1408,864,1408 L,544,1408 C,491,1408,431,1368,411,1319 L,341,1152 L,32,1152 C,14,1152,0,1138,0,1120 L,0,1056 C,0,1038,14,1024,32,1024 L,128,1024 L,128,72 C,128,-38,200,-128,288,-128 L,1120,-128 C,1208,-128,1280,-34,1280,76 L,1280,1024 L,1376,1024 C,1394,1024,1408,1038,1408,1056 Z"
		},
		"file_alt": {
			"advanceWidth": 1536,
			"commands": "M,1468,1156 L,1156,1468 C,1119,1505,1045,1536,992,1536 L,96,1536 C,43,1536,0,1493,0,1440 L,0,-160 C,0,-213,43,-256,96,-256 L,1440,-256 C,1493,-256,1536,-213,1536,-160 L,1536,992 C,1536,1045,1505,1119,1468,1156 M,1024,1400 C,1041,1394,1058,1385,1065,1378 L,1378,1065 C,1385,1058,1394,1041,1400,1024 L,1024,1024 M,1408,-128 L,128,-128 L,128,1408 L,896,1408 L,896,992 C,896,939,939,896,992,896 L,1408,896 Z"
		},
		"download_alt": {
			"advanceWidth": 1664,
			"commands": "M,1280,192 C,1280,157,1251,128,1216,128 C,1181,128,1152,157,1152,192 C,1152,227,1181,256,1216,256 C,1251,256,1280,227,1280,192 M,1536,192 C,1536,157,1507,128,1472,128 C,1437,128,1408,157,1408,192 C,1408,227,1437,256,1472,256 C,1507,256,1536,227,1536,192 M,1664,416 C,1664,469,1621,512,1568,512 L,1104,512 L,968,376 C,931,340,883,320,832,320 C,781,320,733,340,696,376 L,561,512 L,96,512 C,43,512,0,469,0,416 L,0,96 C,0,43,43,0,96,0 L,1568,0 C,1621,0,1664,43,1664,96 M,1339,985 C,1329,1008,1306,1024,1280,1024 L,1024,1024 L,1024,1472 C,1024,1507,995,1536,960,1536 L,704,1536 C,669,1536,640,1507,640,1472 L,640,1024 L,384,1024 C,358,1024,335,1008,325,985 C,315,961,320,933,339,915 L,787,467 C,799,454,816,448,832,448 C,848,448,865,454,877,467 L,1325,915 C,1344,933,1349,961,1339,985 Z"
		},
		"repeat": {
			"advanceWidth": 1536,
			"commands": "M,1536,1280 C,1536,1306,1520,1329,1497,1339 C,1473,1349,1445,1344,1427,1325 L,1297,1196 C,1156,1329,965,1408,768,1408 C,345,1408,0,1063,0,640 C,0,217,345,-128,768,-128 C,997,-128,1213,-27,1359,149 C,1369,162,1369,181,1357,192 L,1220,330 C,1213,336,1204,339,1195,339 C,1186,338,1177,334,1172,327 C,1074,200,927,128,768,128 C,486,128,256,358,256,640 C,256,922,486,1152,768,1152 C,899,1152,1023,1102,1117,1015 L,979,877 C,960,859,955,831,965,808 C,975,784,998,768,1024,768 L,1472,768 C,1507,768,1536,797,1536,832 Z"
		},
		"pencil": {
			"advanceWidth": 1536,
			"commands": "M,363,0 L,256,0 L,256,128 L,128,128 L,128,235 L,219,326 L,454,91 M,886,928 C,886,922,884,916,879,911 L,337,369 C,332,364,326,362,320,362 C,307,362,298,371,298,384 C,298,390,300,396,305,401 L,847,943 C,852,948,858,950,864,950 C,877,950,886,941,886,928 M,832,1120 L,0,288 L,0,-128 L,416,-128 L,1248,704 M,1515,1024 C,1515,1058,1501,1091,1478,1115 L,1243,1349 C,1219,1373,1186,1387,1152,1387 C,1118,1387,1085,1373,1062,1349 L,896,1184 L,1312,768 L,1478,934 C,1501,957,1515,990,1515,1024 Z"
		},
		"edit": {
			"advanceWidth": 1792,
			"commands": "M,888,352 L,832,352 L,832,448 L,736,448 L,736,504 L,852,620 L,1004,468 M,1328,1072 C,1337,1063,1336,1048,1327,1039 L,977,689 C,968,680,953,679,944,688 C,935,697,936,712,945,721 L,1295,1071 C,1304,1080,1319,1081,1328,1072 M,1408,478 C,1408,491,1400,502,1388,507 C,1376,512,1363,510,1353,500 L,1289,436 C,1283,430,1280,422,1280,414 L,1280,288 C,1280,200,1208,128,1120,128 L,288,128 C,200,128,128,200,128,288 L,128,1120 C,128,1208,200,1280,288,1280 L,1120,1280 C,1135,1280,1150,1278,1165,1274 C,1176,1270,1188,1273,1197,1282 L,1246,1331 C,1254,1339,1257,1349,1255,1360 C,1253,1370,1246,1379,1237,1383 C,1200,1400,1160,1408,1120,1408 L,288,1408 C,129,1408,0,1279,0,1120 L,0,288 C,0,129,129,0,288,0 L,1120,0 C,1279,0,1408,129,1408,288 M,1312,1216 L,640,544 L,640,256 L,928,256 L,1600,928 M,1756,1084 C,1793,1121,1793,1183,1756,1220 L,1604,1372 C,1567,1409,1505,1409,1468,1372 L,1376,1280 L,1664,992 L,1756,1084 Z"
		},
		"play": {
			"advanceWidth": 1408,
			"commands": "M,1384,609 C,1415,626,1415,654,1384,671 L,56,1409 C,25,1426,0,1411,0,1376 L,0,-96 C,0,-131,25,-146,56,-129 Z"
		},
		"pause": {
			"advanceWidth": 1536,
			"commands": "M,1536,1344 C,1536,1379,1507,1408,1472,1408 L,960,1408 C,925,1408,896,1379,896,1344 L,896,-64 C,896,-99,925,-128,960,-128 L,1472,-128 C,1507,-128,1536,-99,1536,-64 M,640,1344 C,640,1379,611,1408,576,1408 L,64,1408 C,29,1408,0,1379,0,1344 L,0,-64 C,0,-99,29,-128,64,-128 L,576,-128 C,611,-128,640,-99,640,-64 Z"
		},
		"stop": {
			"advanceWidth": 1536,
			"commands": "M,1536,1344 C,1536,1379,1507,1408,1472,1408 L,64,1408 C,29,1408,0,1379,0,1344 L,0,-64 C,0,-99,29,-128,64,-128 L,1472,-128 C,1507,-128,1536,-99,1536,-64 Z"
		},
		"resize_full": {
			"advanceWidth": 1536,
			"commands": "M,755,480 C,755,488,751,497,745,503 L,631,617 C,625,623,616,627,608,627 C,600,627,591,623,585,617 L,253,285 L,109,429 C,97,441,81,448,64,448 C,29,448,0,419,0,384 L,0,-64 C,0,-99,29,-128,64,-128 L,512,-128 C,547,-128,576,-99,576,-64 C,576,-47,569,-31,557,-19 L,413,125 L,745,457 C,751,463,755,472,755,480 M,1536,1344 C,1536,1379,1507,1408,1472,1408 L,1024,1408 C,989,1408,960,1379,960,1344 C,960,1327,967,1311,979,1299 L,1123,1155 L,791,823 C,785,817,781,808,781,800 C,781,792,785,783,791,777 L,905,663 C,911,657,920,653,928,653 C,936,653,945,657,951,663 L,1283,995 L,1427,851 C,1439,839,1455,832,1472,832 C,1507,832,1536,861,1536,896 Z"
		},
		"resize_small": {
			"advanceWidth": 1536,
			"commands": "M,768,576 C,768,611,739,640,704,640 L,256,640 C,221,640,192,611,192,576 C,192,559,199,543,211,531 L,355,387 L,23,55 C,17,49,13,40,13,32 C,13,24,17,15,23,9 L,137,-105 C,143,-111,152,-115,160,-115 C,168,-115,177,-111,183,-105 L,515,227 L,659,83 C,671,71,687,64,704,64 C,739,64,768,93,768,128 M,1523,1248 C,1523,1256,1519,1265,1513,1271 L,1399,1385 C,1393,1391,1384,1395,1376,1395 C,1368,1395,1359,1391,1353,1385 L,1021,1053 L,877,1197 C,865,1209,849,1216,832,1216 C,797,1216,768,1187,768,1152 L,768,704 C,768,669,797,640,832,640 L,1280,640 C,1315,640,1344,669,1344,704 C,1344,721,1337,737,1325,749 L,1181,893 L,1513,1225 C,1519,1231,1523,1240,1523,1248 Z"
		},
		"eye_open": {
			"advanceWidth": 1792,
			"commands": "M,1664,576 C,1493,312,1217,128,896,128 C,575,128,299,312,128,576 C,223,723,353,849,509,929 C,469,861,448,783,448,704 C,448,457,649,256,896,256 C,1143,256,1344,457,1344,704 C,1344,783,1323,861,1283,929 C,1439,849,1569,723,1664,576 M,944,960 C,944,934,922,912,896,912 C,782,912,688,818,688,704 C,688,678,666,656,640,656 C,614,656,592,678,592,704 C,592,871,729,1008,896,1008 C,922,1008,944,986,944,960 M,1792,576 C,1792,601,1784,624,1772,645 C,1588,947,1251,1152,896,1152 C,541,1152,204,947,20,645 C,8,624,0,601,0,576 C,0,551,8,528,20,507 C,204,205,541,0,896,0 C,1251,0,1588,204,1772,507 C,1784,528,1792,551,1792,576 Z"
		},
		"eye_close": {
			"advanceWidth": 1792,
			"commands": "M,555,201 C,379,280,232,415,128,576 C,223,723,353,849,509,929 C,469,861,448,783,448,704 C,448,561,517,426,633,342 M,944,960 C,944,934,922,912,896,912 C,782,912,688,819,688,704 C,688,678,666,656,640,656 C,614,656,592,678,592,704 C,592,871,729,1008,896,1008 C,922,1008,944,986,944,960 M,1307,1151 C,1307,1162,1301,1172,1291,1178 C,1270,1190,1176,1248,1158,1248 C,1146,1248,1136,1242,1130,1232 L,1076,1135 C,1017,1146,956,1152,896,1152 C,527,1152,218,949,20,645 C,7,625,0,600,0,576 C,0,551,7,527,20,507 C,135,327,298,177,492,89 C,482,72,448,18,448,2 C,448,-10,454,-20,464,-26 C,485,-38,580,-96,598,-96 C,609,-96,620,-90,626,-80 L,675,9 C,886,386,1095,765,1306,1142 C,1307,1144,1307,1149,1307,1151 M,1344,704 C,1344,732,1341,760,1336,788 L,1056,286 C,1229,352,1344,518,1344,704 M,1792,576 C,1792,602,1785,623,1772,645 C,1694,774,1569,899,1445,982 L,1382,870 C,1495,792,1590,691,1664,576 C,1508,334,1261,157,970,132 L,896,0 C,1197,0,1467,137,1663,362 C,1702,407,1741,456,1772,507 C,1785,529,1792,550,1792,576 Z"
		},
		"folder_open": {
			"advanceWidth": 1920,
			"commands": "M,1879,584 C,1879,629,1828,640,1792,640 L,704,640 C,616,640,498,586,440,518 L,104,122 C,88,104,73,80,73,56 C,73,11,124,0,160,0 L,1248,0 C,1336,0,1454,54,1512,122 L,1848,518 C,1864,536,1879,560,1879,584 M,1536,928 C,1536,1051,1435,1152,1312,1152 L,768,1152 L,768,1184 C,768,1307,667,1408,544,1408 L,224,1408 C,101,1408,0,1307,0,1184 L,0,224 C,0,216,1,207,1,199 L,6,205 L,343,601 C,424,697,579,768,704,768 L,1536,768 Z"
		},
		"signin": {
			"advanceWidth": 1536,
			"commands": "M,1184,640 C,1184,657,1177,673,1165,685 L,621,1229 C,609,1241,593,1248,576,1248 C,541,1248,512,1219,512,1184 L,512,896 L,64,896 C,29,896,0,867,0,832 L,0,448 C,0,413,29,384,64,384 L,512,384 L,512,96 C,512,61,541,32,576,32 C,593,32,609,39,621,51 L,1165,595 C,1177,607,1184,623,1184,640 M,1536,992 C,1536,1151,1407,1280,1248,1280 L,928,1280 C,883,1280,896,1212,896,1184 C,896,1147,935,1152,960,1152 L,1248,1152 C,1336,1152,1408,1080,1408,992 L,1408,288 C,1408,200,1336,128,1248,128 L,928,128 C,883,128,896,60,896,32 C,896,15,911,0,928,0 L,1248,0 C,1407,0,1536,129,1536,288 Z"
		},
		"upload_alt": {
			"advanceWidth": 1664,
			"commands": "M,1280,64 C,1280,29,1251,0,1216,0 C,1181,0,1152,29,1152,64 C,1152,99,1181,128,1216,128 C,1251,128,1280,99,1280,64 M,1536,64 C,1536,29,1507,0,1472,0 C,1437,0,1408,29,1408,64 C,1408,99,1437,128,1472,128 C,1507,128,1536,99,1536,64 M,1664,288 C,1664,341,1621,384,1568,384 L,1141,384 C,1114,310,1043,256,960,256 L,704,256 C,621,256,550,310,523,384 L,96,384 C,43,384,0,341,0,288 L,0,-32 C,0,-85,43,-128,96,-128 L,1568,-128 C,1621,-128,1664,-85,1664,-32 M,1339,936 C,1349,959,1344,987,1325,1005 L,877,1453 C,865,1466,848,1472,832,1472 C,816,1472,799,1466,787,1453 L,339,1005 C,320,987,315,959,325,936 C,335,912,358,896,384,896 L,640,896 L,640,448 C,640,413,669,384,704,384 L,960,384 C,995,384,1024,413,1024,448 L,1024,896 L,1280,896 C,1306,896,1329,912,1339,936 Z"
		},
		"save": {
			"advanceWidth": 1536,
			"commands": "M,384,0 L,384,384 L,1152,384 L,1152,0 M,1280,0 L,1280,416 C,1280,469,1237,512,1184,512 L,352,512 C,299,512,256,469,256,416 L,256,0 L,128,0 L,128,1280 L,256,1280 L,256,864 C,256,811,299,768,352,768 L,928,768 C,981,768,1024,811,1024,864 L,1024,1280 C,1044,1280,1083,1264,1097,1250 L,1378,969 C,1391,956,1408,915,1408,896 L,1408,0 M,896,928 C,896,911,881,896,864,896 L,672,896 C,655,896,640,911,640,928 L,640,1248 C,640,1265,655,1280,672,1280 L,864,1280 C,881,1280,896,1265,896,1248 L,896,928 M,1536,896 C,1536,949,1506,1022,1468,1060 L,1188,1340 C,1150,1378,1077,1408,1024,1408 L,96,1408 C,43,1408,0,1365,0,1312 L,0,-32 C,0,-85,43,-128,96,-128 L,1440,-128 C,1493,-128,1536,-85,1536,-32 Z"
		},
		"undo": {
			"advanceWidth": 1536,
			"commands": "M,1536,640 C,1536,1063,1191,1408,768,1408 C,571,1408,380,1329,239,1196 L,109,1325 C,91,1344,63,1349,40,1339 C,16,1329,0,1306,0,1280 L,0,832 C,0,797,29,768,64,768 L,512,768 C,538,768,561,784,571,808 C,581,831,576,859,557,877 L,420,1015 C,513,1102,637,1152,768,1152 C,1050,1152,1280,922,1280,640 C,1280,358,1050,128,768,128 C,609,128,462,200,364,327 C,359,334,350,338,341,339 C,332,339,323,336,316,330 L,179,192 C,168,181,167,162,177,149 C,323,-27,539,-128,768,-128 C,1191,-128,1536,217,1536,640 Z"
		},
		"paste": {
			"advanceWidth": 1792,
			"commands": "M,768,-128 L,768,1024 L,1152,1024 L,1152,608 C,1152,555,1195,512,1248,512 L,1664,512 L,1664,-128 M,1024,1312 C,1024,1295,1009,1280,992,1280 L,288,1280 C,271,1280,256,1295,256,1312 L,256,1376 C,256,1393,271,1408,288,1408 L,992,1408 C,1009,1408,1024,1393,1024,1376 L,1024,1312 M,1280,640 L,1280,939 L,1579,640 M,1792,512 C,1792,565,1762,638,1724,676 L,1316,1084 C,1305,1095,1293,1104,1280,1112 L,1280,1440 C,1280,1493,1237,1536,1184,1536 L,96,1536 C,43,1536,0,1493,0,1440 L,0,96 C,0,43,43,0,96,0 L,640,0 L,640,-160 C,640,-213,683,-256,736,-256 L,1696,-256 C,1749,-256,1792,-213,1792,-160 Z"
		},
		"folder_open_alt": {
			"advanceWidth": 1920,
			"commands": "M,1781,605 C,1781,590,1772,577,1763,566 L,1469,203 C,1435,161,1365,128,1312,128 L,224,128 C,202,128,171,135,171,163 C,171,178,180,191,189,203 L,483,566 C,517,607,587,640,640,640 L,1728,640 C,1750,640,1781,633,1781,605 M,640,768 C,549,768,442,717,384,646 L,128,331 L,128,1184 C,128,1237,171,1280,224,1280 L,544,1280 C,597,1280,640,1237,640,1184 L,640,1120 C,640,1067,683,1024,736,1024 L,1312,1024 C,1365,1024,1408,981,1408,928 L,1408,768 M,1909,605 C,1909,629,1904,652,1894,673 C,1864,737,1796,768,1728,768 L,1536,768 L,1536,928 C,1536,1051,1435,1152,1312,1152 L,768,1152 L,768,1184 C,768,1307,667,1408,544,1408 L,224,1408 C,101,1408,0,1307,0,1184 L,0,224 C,0,101,101,0,224,0 L,1312,0 C,1402,0,1511,52,1568,122 L,1863,485 C,1890,519,1909,561,1909,605 Z"
		}
	}
}
},{}],4:[function(require,module,exports){

var DEFAULT_TIME_SCALE = 60;

// Dimensions
module.exports = {
	LINE_HEIGHT: 26,
	DIAMOND_SIZE: 10,
	MARKER_TRACK_HEIGHT: 60,
	width: 600,
	height: 130,
	TIMELINE_SCROLL_HEIGHT: 0,
	LEFT_PANE_WIDTH: 250,
	time_scale: DEFAULT_TIME_SCALE, // number of pixels to 1 second
    default_length: 20, // seconds
};

},{}],5:[function(require,module,exports){
//default
module.exports = {
	// photoshop colors
	a: '#343434',
	b: '#535353',
	c: '#b8b8b8',
	d: '#d6d6d6',
};

//keepcube
module.exports = {
  // photoshop colors
  a: '#FFFFFF',
  b: '#F0F0F0',
  c: '#000000',
  d: '#0F0F0F',
};

},{}],6:[function(require,module,exports){
/*
 * @author Joshua Koo http://joshuakoo.com
 */

var undo = require('./util_undo'),
	Dispatcher = require('./util_dispatcher'),
	Theme = require('./theme'),
	UndoManager = undo.UndoManager,
	UndoState = undo.UndoState,
	Settings = require('./settings'),
	utils = require('./utils'),
	LayerCabinet = require('./view_layer_cabinet'),
	TimelinePanel = require('./view_panel'),
	package_json = require('../package.json'),
	IconButton = require('./ui_icon_button'),
	style = utils.style,
	saveToFile = utils.saveToFile,
	openAs = utils.openAs,
	STORAGE_PREFIX = utils.STORAGE_PREFIX,
	ScrollBar = require('./ui_scrollbar'),
	DataStore = require('./util_datastore')
	;

var Z_INDEX = 999;

function LayerProp(name) {
	this.name = name;
	this.values = [];

	this._value = 0;

	this._color = '#' + (Math.random() * 0xffffff | 0).toString(16);
	/*
	this.max
	this.min
	this.step
	*/
}

function Timeliner(target, targetEl) {
	// Dispatcher for coordination
	var dispatcher = new Dispatcher();

	// Data
	var data = new DataStore();
	var layer_store = data.get('layers');
	var layers = layer_store.value;

	window._data = data; // expose it for debugging

	// Undo manager
	var undo_manager = new UndoManager(dispatcher);

	// Views
	var timeline = new TimelinePanel(data, dispatcher);
	var layer_panel = new LayerCabinet(data, dispatcher);

	setTimeout(function() {
		// hack!
		undo_manager.save(new UndoState(data, 'Loaded'), true);
	});

	dispatcher.on('keyframe', function(layer, value) {
		var index = layers.indexOf(layer);

		var t = data.get('ui:currentTime').value;
		var v = utils.findTimeinLayer(layer, t);

		// console.log(v, '...keyframe index', index, utils.format_friendly_seconds(t), typeof(v));
		// console.log('layer', layer, value);

		if (typeof(v) === 'number') {
			layer.values.splice(v, 0, {
				time: t,
				value: value,
				_color: '#' + (Math.random() * 0xffffff | 0).toString(16)
			});

			undo_manager.save(new UndoState(data, 'Add Keyframe'));
		} else {
			console.log('remove from index', v);
			layer.values.splice(v.index, 1);

			undo_manager.save(new UndoState(data, 'Remove Keyframe'));
		}

		repaintAll();

	});

	dispatcher.on('keyframe.move', function(layer, value) {
		undo_manager.save(new UndoState(data, 'Move Keyframe'));
	});

	// dispatcher.fire('value.change', layer, me.value);
	dispatcher.on('value.change', function(layer, value, dont_save) {
		if (layer._mute) return;

		var t = data.get('ui:currentTime').value;
		var v = utils.findTimeinLayer(layer, t);

		// console.log(v, 'value.change', layer, value, utils.format_friendly_seconds(t), typeof(v));
		if (typeof(v) === 'number') {
			layer.values.splice(v, 0, {
				time: t,
				value: value,
				_color: '#' + (Math.random() * 0xffffff | 0).toString(16)
			});
			if (!dont_save) undo_manager.save(new UndoState(data, 'Add value'));
		} else {
			v.object.value = value;
			if (!dont_save) undo_manager.save(new UndoState(data, 'Update value'));
		}

		repaintAll();
	});

	dispatcher.on('action:solo', function(layer, solo) {
		layer._solo = solo;

		console.log(layer, solo);

		// When a track is solo-ed, playback only changes values
		// of that layer.
	});

	dispatcher.on('action:mute', function(layer, mute) {
		layer._mute = mute;

		// When a track is mute, playback does not play
		// frames of those muted layers.

		// also feels like hidden feature in photoshop

		// when values are updated, eg. from slider,
		// no tweens will be created.
		// we can decide also to "lock in" layers
		// no changes to tween will be made etc.
	});

	dispatcher.on('ease', function(layer, ease_type) {
		var t = data.get('ui:currentTime').value;
		var v = utils.timeAtLayer(layer, t);
		// console.log('Ease Change > ', layer, value, v);
		if (v && v.entry) {
			v.entry.tween  = ease_type;
		}

		undo_manager.save(new UndoState(data, 'Add Ease'));

		repaintAll();
	});

	var start_play = null,
		played_from = 0; // requires some more tweaking

	dispatcher.on('controls.toggle_play', function() {
		if (start_play) {
			pausePlaying();
		} else {
			startPlaying();
		}
	});

	dispatcher.on('controls.restart_play', function() {
		if (!start_play) {
			startPlaying();
		}

		setCurrentTime(played_from);
	});

	dispatcher.on('controls.play', startPlaying);
	dispatcher.on('controls.pause', pausePlaying);

	function startPlaying() {
		// played_from = timeline.current_frame;
		start_play = performance.now() - data.get('ui:currentTime').value * 1000;
		layer_panel.setControlStatus(true);
		// dispatcher.fire('controls.status', true);
	}

	function pausePlaying() {
		start_play = null;
		layer_panel.setControlStatus(false);
		// dispatcher.fire('controls.status', false);
	}

	dispatcher.on('controls.stop', function() {
		if (start_play !== null) pausePlaying();
		setCurrentTime(0);
	});

	var currentTimeStore = data.get('ui:currentTime');
	dispatcher.on('time.update', setCurrentTime);

	dispatcher.on('update.scrollTime', function(v) {
		v = Math.max(0, v);
		data.get('ui:scrollTime').value = v;
		repaintAll();
	});


	function setCurrentTime(value) {
		value = Math.max(0, value);
		currentTimeStore.value = value;

		if (start_play) start_play = performance.now() - value * 1000;
		repaintAll();
		// layer_panel.repaint(s);
	}

	dispatcher.on('target.notify', function(name, value) {
		if (target) target[name] = value;
	});

	dispatcher.on('update.scale', function(v) {
		console.log('range', v);
		data.get('ui:timeScale').value = v;

		timeline.repaint();
	});

	// handle undo / redo
	dispatcher.on('controls.undo', function() {
		var history = undo_manager.undo();
		data.setJSONString(history.state);

		updateState();
	});

	dispatcher.on('controls.redo', function() {
		var history = undo_manager.redo();
		data.setJSONString(history.state);

		updateState();
	});

	/*
		Paint Routines
	*/

	function paint() {
		requestAnimationFrame(paint);

		if (start_play) {
			var t = (performance.now() - start_play) / 1000;
			setCurrentTime(t);


			if (t > data.get('ui:totalTime').value) {
				// simple loop
				start_play = performance.now();
			}
		}

		if (needsResize) {
			div.style.width = width + 'px';
			div.style.height = height + 'px';

			restyle(layer_panel.dom, timeline.dom);

			timeline.resize();
			repaintAll();
			needsResize = false;

			dispatcher.fire('resize');
		}

		timeline._paint();
	}

	paint();

	/*
		End Paint Routines
	*/

	function save(name) {
		if (!name) name = 'autosave';

		var json = data.getJSONString();

		try {
			localStorage[STORAGE_PREFIX + name] = json;
			dispatcher.fire('save:done');
		} catch (e) {
			console.log('Cannot save', name, json);
		}
	}

	function saveAs(name) {
		if (!name) name = data.get('name').value;
		name = prompt('Pick a name to save to (localStorage)', name);
		if (name) {
			data.data.name = name;
			save(name);
		}
	}

	function saveSimply() {
		var name = data.get('name').value;
		if (name) {
			save(name);
		} else {
			saveAs(name);
		}
	}

	function exportJSON() {
		var json = data.getJSONString();
		var ret = prompt('Hit OK to download otherwise Copy and Paste JSON', json);

		console.log(JSON.stringify(data.data, null, '\t'));
		if (!ret) return;

		// make json downloadable
		json = data.getJSONString('\t');
		var fileName = 'timeliner-test' + '.json';

		saveToFile(json, fileName);
	}

	function loadJSONString(o) {
		// should catch and check errors here
		var json = JSON.parse(o);
		load(json);
	}

	function load(o) {
		data.setJSON(o);
		//
		if (data.getValue('ui') === undefined) {
			data.setValue('ui', {
				currentTime: 0,
				totalTime: Settings.default_length,
				scrollTime: 0,
				timeScale: Settings.time_scale
			});
		}

		undo_manager.clear();
		undo_manager.save(new UndoState(data, 'Loaded'), true);

		updateState();
	}

	function updateState() {
		layers = layer_store.value; // FIXME: support Arrays
		layer_panel.setState(layer_store);
		timeline.setState(layer_store);

		repaintAll();
	}

	function repaintAll() {
		var content_height = layers.length * Settings.LINE_HEIGHT;
		scrollbar.setLength(Settings.TIMELINE_SCROLL_HEIGHT / content_height);

		layer_panel.repaint();
		timeline.repaint();
	}

	function promptImport() {
		var json = prompt('Paste JSON in here to Load');
		if (!json) return;
		console.log('Loading.. ', json);
		loadJSONString(json);
	}

	function open(title) {
		if (title) {
			loadJSONString(localStorage[STORAGE_PREFIX + title]);
		}
	}

	this.openLocalSave = open;

	dispatcher.on('import', function() {
		promptImport();
	}.bind(this));

	dispatcher.on('new', function() {
		data.blank();
		updateState();
	});

	dispatcher.on('openfile', function() {
		openAs(function(data) {
			// console.log('loaded ' + data);
			loadJSONString(data);
		}, div);
	});

	dispatcher.on('open', open);
	dispatcher.on('export', exportJSON);

	dispatcher.on('save', saveSimply);
	dispatcher.on('save_as', saveAs);

	// Expose API
	this.save = save;
	this.load = load;

	/*
		Start DOM Stuff (should separate file)
	*/

	var div = document.createElement('div');
	div.style.cssText = 'position: absolute;';
	div.style.top = '22px';

	var pane = document.createElement('div');

	style(pane, {
		position: 'fixed',
		top: '20px',
		left: '20px',
		margin: 0,
		border: '1px solid ' + Theme.a,
		padding: 0,
		overflow: 'hidden',
		backgroundColor: Theme.a,
		color: Theme.d,
		zIndex: Z_INDEX,
		fontFamily: 'monospace',
		fontSize: '12px'
	});


	var header_styles = {
		position: 'absolute',
		top: '0px',
		width: '100%',
		height: '22px',
		lineHeight: '22px',
		overflow: 'hidden'
	};

	var button_styles = {
		width: '20px',
		height: '20px',
		padding: '2px',
		marginRight: '2px'
	};

	var pane_title = document.createElement('div');
	style(pane_title, header_styles, {
		borderBottom: '1px solid ' + Theme.b,
		textAlign: 'center'
	});

	var title_bar = document.createElement('span');
	pane_title.appendChild(title_bar);

	title_bar.innerHTML = 'Timeliner ' + package_json.version;
	pane_title.appendChild(title_bar);

	var top_right_bar = document.createElement('div');
	style(top_right_bar, header_styles, {
		textAlign: 'right'
	});

	pane_title.appendChild(top_right_bar);

	// resize minimize
	// var resize_small = new IconButton(10, 'resize_small', 'minimize', dispatcher);
	// top_right_bar.appendChild(resize_small.dom);

	// resize full
	var resize_full = new IconButton(10, 'resize_full', 'maximize', dispatcher);
	style(resize_full.dom, button_styles, { marginRight: '2px' });
	top_right_bar.appendChild(resize_full.dom);

	var pane_status = document.createElement('div');

	var footer_styles = {
		position: 'absolute',
		width: '100%',
		height: '22px',
		lineHeight: '22px',
		bottom: '0',
		// padding: '2px',
		background: Theme.a,
		fontSize: '11px'
	};

	style(pane_status, footer_styles, {
		borderTop: '1px solid ' + Theme.b,
	});

	pane.appendChild(div);
	//pane.appendChild(pane_status);
	//pane.appendChild(pane_title);

	var label_status = document.createElement('span');
	label_status.textContent = 'hello!';
	label_status.style.marginLeft = '10px';

	this.setStatus = function(text) {
		label_status.textContent = text;
	};

	dispatcher.on('state:save', function(description) {
		dispatcher.fire('status', description);
		save('autosave');
	});

	dispatcher.on('status', this.setStatus);

	var bottom_right = document.createElement('div');
	style(bottom_right, footer_styles, {
		textAlign: 'right'
	});


	// var button_save = document.createElement('button');
	// style(button_save, button_styles);
	// button_save.textContent = 'Save';
	// button_save.onclick = function() {
	// 	save();
	// };

	// var button_load = document.createElement('button');
	// style(button_load, button_styles);
	// button_load.textContent = 'Import';
	// button_load.onclick = this.promptLoad;

	// var button_open = document.createElement('button');
	// style(button_open, button_styles);
	// button_open.textContent = 'Open';
	// button_open.onclick = this.promptOpen;


	// bottom_right.appendChild(button_load);
	// bottom_right.appendChild(button_save);
	// bottom_right.appendChild(button_open);

	pane_status.appendChild(label_status);
	pane_status.appendChild(bottom_right);


	/**/
	// zoom in
	var zoom_in = new IconButton(12, 'zoom_in', 'zoom in', dispatcher);
	// zoom out
	var zoom_out = new IconButton(12, 'zoom_out', 'zoom out', dispatcher);
	// settings
	var cog = new IconButton(12, 'cog', 'settings', dispatcher);

	// bottom_right.appendChild(zoom_in.dom);
	// bottom_right.appendChild(zoom_out.dom);
	// bottom_right.appendChild(cog.dom);

	// add layer
	var plus = new IconButton(12, 'plus', 'New Layer', dispatcher);
	plus.onClick(function() {
		var name = prompt('Layer name?');
		addLayer(name);

		undo_manager.save(new UndoState(data, 'Layer added'));

		repaintAll();
	});
	style(plus.dom, button_styles);
	bottom_right.appendChild(plus.dom);


	// trash
	var trash = new IconButton(12, 'trash', 'Delete save', dispatcher);
	trash.onClick(function() {
		var name = data.get('name').value;
		if (name && localStorage[STORAGE_PREFIX + name]) {
			var ok = confirm('Are you sure you wish to delete ' + name + '?');
			if (ok) {
				delete localStorage[STORAGE_PREFIX + name];
				dispatcher.fire('status', name + ' deleted');
				dispatcher.fire('save:done');
			}
		}
	});
	style(trash.dom, button_styles, { marginRight: '2px' });
	bottom_right.appendChild(trash.dom);


	// pane_status.appendChild(document.createTextNode(' | TODO <Dock Full | Dock Botton | Snap Window Edges | zoom in | zoom out | Settings | help>'));

	/*
			End DOM Stuff
	*/

	var ghostpane = document.createElement('div');
	ghostpane.id = 'ghostpane';
	style(ghostpane, {
		background: '#999',
		opacity: 0.2,
		position: 'fixed',
		margin: 0,
		padding: 0,
		zIndex: (Z_INDEX - 1),
		// transition: 'all 0.25s ease-in-out',
		transitionProperty: 'top, left, width, height, opacity',
 		transitionDuration: '0.25s',
		transitionTimingFunction: 'ease-in-out'
	});


	//
	// Handle DOM Views
	//

	// Shadow Root
	var root
	if(targetEl) {
		root = targetEl
	} else {
		root = document.createElement('timeliner');
		document.body.appendChild(root);
	}
	if (root.createShadowRoot) root = root.createShadowRoot();

	window.r = root;

	// var iframe = document.createElement('iframe');
	// document.body.appendChild(iframe);
	// root = iframe.contentDocument.body;

	root.appendChild(pane);
	root.appendChild(ghostpane);

	div.appendChild(layer_panel.dom);
	div.appendChild(timeline.dom);

	var scrollbar = new ScrollBar(200, 10);
	//div.appendChild(scrollbar.dom);

	// percentages
	scrollbar.onScroll.do(function(type, scrollTo) {
		switch(type) {
			case 'scrollto':
				layer_panel.scrollTo(scrollTo);
				timeline.scrollTo(scrollTo);
				break;
	//		case 'pageup':
	// 			scrollTop -= pageOffset;
	// 			me.draw();
	// 			me.updateScrollbar();
	// 			break;
	// 		case 'pagedown':
	// 			scrollTop += pageOffset;
	// 			me.draw();
	// 			me.updateScrollbar();
	// 			break;
		}
	});



	// document.addEventListener('keypress', function(e) {
	// 	console.log('kp', e);
	// });
	// document.addEventListener('keyup', function(e) {
	// 	if (undo) console.log('UNDO');

	// 	console.log('kd', e);
	// });

	// TODO: Keyboard Shortcuts
	// Esc - Stop and review to last played from / to the start?
	// Space - play / pause from current position
	// Enter - play all
	// k - keyframe

	document.addEventListener('keydown', function(e) {
		var play = e.keyCode == 32; // space
		var enter = e.keyCode == 13; //
		var undo = e.metaKey && e.keyCode == 91 && !e.shiftKey;

		var active = document.activeElement;
		// console.log( active.nodeName );

		if (active.nodeName.match(/(INPUT|BUTTON|SELECT|TIMELINER)/)) {
			active.blur();
		}

		if (play) {
			dispatcher.fire('controls.toggle_play');
		}
		else if (enter) {
			// FIXME: Return should play from the start or last played from?
			dispatcher.fire('controls.restart_play');
			// dispatcher.fire('controls.undo');
		}
		else if (e.keyCode == 27) {
			// Esc = stop. FIXME: should rewind head to last played from or Last pointed from?
			dispatcher.fire('controls.pause');
		}
		else console.log('keydown', e.keyCode);
	});

	var needsResize = true;

	function resize(width, height) {
		// data.get('ui:bounds').value = {
		// 	width: width,
		// 	height: height
		// };
		// TODO: remove ugly hardcodes
		width -= 4;
		height -= 44;

		Settings.width = width - Settings.LEFT_PANE_WIDTH;
		Settings.height = height;

		Settings.TIMELINE_SCROLL_HEIGHT = height - Settings.MARKER_TRACK_HEIGHT;
		var scrollable_height = Settings.TIMELINE_SCROLL_HEIGHT;

		scrollbar.setHeight(scrollable_height - 2);
		// scrollbar.setThumb

		style(scrollbar.dom, {
			top: Settings.MARKER_TRACK_HEIGHT + 'px',
			left: (width - 16) + 'px',
		});

		needsResize = true;
	}

	function restyle(left, right) {
		left.style.cssText = 'position: absolute; left: 0px; top: 0px; height: ' + Settings.height + 'px;';
		style(left, {
			// background: Theme.a,
			overflow: 'hidden'
		});
		left.style.width = Settings.LEFT_PANE_WIDTH + 'px';

		// right.style.cssText = 'position: absolute; top: 0px;';
		right.style.position = 'absolute';
		right.style.top = '0px';
		right.style.left = Settings.LEFT_PANE_WIDTH + 'px';
	}

	function addLayer(name) {
		var layer = new LayerProp(name);

		layers = layer_store.value;
		layers.push(layer);

		layer_panel.setState(layer_store);
	}

	this.addLayer = addLayer;

	this.setTarget = function(t) {
		timeline = t;
	};

	function getValueRanges(ranges, interval) {
		interval = interval ? interval : 0.15;
		ranges = ranges ? ranges : 2;

		// not optimized!
		var t = data.get('ui:currentTime').value;

		var values = [];

		for (var u = -ranges; u <= ranges; u++) {
			// if (u == 0) continue;
			var o = {};

			for (var l = 0; l < layers.length; l++) {
				var layer = layers[l];
				var m = utils.timeAtLayer(layer, t + u * interval);
				o[layer.name] = m.value;
			}

			values.push(o);

		}

		return values;
	}

	this.getValues = getValueRanges;

	(function DockingWindow() {
		"use strict";

		// Minimum resizable area
		var minWidth = 100;
		var minHeight = 80;

		// Thresholds
		var FULLSCREEN_MARGINS = 2;
		var SNAP_MARGINS = 8;
		var MARGINS = 2;

		// End of what's configurable.

		var clicked = null;
		var onRightEdge, onBottomEdge, onLeftEdge, onTopEdge;

		var preSnapped;

		var b, x, y;

		var redraw = false;

		// var pane = document.getElementById('pane');
		// var ghostpane = document.getElementById('ghostpane');

		var mouseOnTitle = false;
		var snapType;

		pane_title.addEventListener('mouseover', function() {
			mouseOnTitle = true;
		});

		pane_title.addEventListener('mouseout', function() {
			mouseOnTitle = false;
		});

		resize_full.onClick(function() {
			// TOOD toggle back to restored size
			if (!preSnapped) preSnapped = {
				width: b.width,
				height: b.height
			};

			snapType = 'full-screen';
			resizeEdges();
		});

		// pane_status.addEventListener('mouseover', function() {
		// 	mouseOnTitle = true;
		// });

		// pane_status.addEventListener('mouseout', function() {
		// 	mouseOnTitle = false;
		// });

		window.addEventListener('resize', function() {
			if (snapType)
				resizeEdges();
			else
				needsResize = true;
		});

		// utils
		function setBounds(element, x, y, w, h) {
			element.style.left = x + 'px';
			element.style.top = y + 'px';
			element.style.width = w + 'px';
			element.style.height = h + 'px';

			if (element === pane) {
				resize(w, h);
			}
		}

		function hintHide() {
			setBounds(ghostpane, b.left, b.top, b.width, b.height);
			ghostpane.style.opacity = 0;
		}

		setBounds(pane, 0, 0, Settings.width, Settings.height);
		setBounds(ghostpane, 0, 0, Settings.width, Settings.height);

		// Mouse events
		pane.addEventListener('mousedown', onMouseDown);
		document.addEventListener('mousemove', onMove);
		document.addEventListener('mouseup', onUp);

		// Touch events
		pane.addEventListener('touchstart', onTouchDown);
		document.addEventListener('touchmove', onTouchMove);
		document.addEventListener('touchend', onTouchEnd);


		function onTouchDown(e) {
			onDown(e.touches[0]);
			e.preventDefault();
		}

		function onTouchMove(e) {
			onMove(e.touches[0]);
		}

		function onTouchEnd(e) {
			if (e.touches.length == 0) onUp(e.changedTouches[0]);
		}

		function onMouseDown(e) {
			onDown(e);
		}

		function onDown(e) {
			calc(e);

			var isResizing = onRightEdge || onBottomEdge || onTopEdge || onLeftEdge;
			var isMoving = !isResizing && canMove();

			clicked = {
				x: x,
				y: y,
				cx: e.clientX,
				cy: e.clientY,
				w: b.width,
				h: b.height,
				isResizing: isResizing,
				isMoving: isMoving,
				onTopEdge: onTopEdge,
				onLeftEdge: onLeftEdge,
				onRightEdge: onRightEdge,
				onBottomEdge: onBottomEdge
			};

			if (isResizing || isMoving) {
				e.preventDefault();
				e.stopPropagation();
			}
		}

		function canMove() {
			return mouseOnTitle;
			// return x > 0 && x < b.width && y > 0 && y < b.height
			// && y < 18;
		}

		function calc(e) {
			b = pane.getBoundingClientRect();
			x = e.clientX - b.left;
			y = e.clientY - b.top;

			onTopEdge = y < MARGINS;
			onLeftEdge = x < MARGINS;
			onRightEdge = x >= b.width - MARGINS;
			onBottomEdge = y >= b.height - MARGINS;
		}

		var e; // current mousemove event

		function onMove(ee) {
			e = ee;
			calc(e);

			redraw = true;
		}

		function animate() {

			requestAnimationFrame(animate);

			if (!redraw) return;

			redraw = false;

		}

		function checks() {
			/*
			var rightScreenEdge, bottomScreenEdge;

			rightScreenEdge = window.innerWidth - MARGINS;
			bottomScreenEdge = window.innerHeight - MARGINS;

			// Edge Checkings
			// hintFull();
			if (b.top < FULLSCREEN_MARGINS || b.left < FULLSCREEN_MARGINS || b.right > window.innerWidth - FULLSCREEN_MARGINS || b.bottom > window.innerHeight - FULLSCREEN_MARGINS)
				return 'full-screen';

			// hintTop();
			if (b.top < MARGINS) return 'snap-top-edge';

			// hintLeft();
			if (b.left < MARGINS) return 'snap-left-edge';

			// hintRight();
			if (b.right > rightScreenEdge) return 'snap-right-edge';

			// hintBottom();
			if (b.bottom > bottomScreenEdge) return 'snap-bottom-edge';
			*/

			if (e.clientY < FULLSCREEN_MARGINS) return 'full-screen';

			if (e.clientY < SNAP_MARGINS) return 'snap-top-edge';

			// hintLeft();
			if (e.clientX < SNAP_MARGINS) return 'snap-left-edge';

			// hintRight();
			if (window.innerWidth - e.clientX < SNAP_MARGINS) return 'snap-right-edge';

			// hintBottom();
			if (window.innerHeight- e.clientY < SNAP_MARGINS) return 'snap-bottom-edge';

		}

		animate();

		function resizeEdges() {
			switch(snapType) {
				case 'full-screen':
					// hintFull();
					setBounds(pane, 0, 0, window.innerWidth, window.innerHeight);
					break;
				case 'snap-top-edge':
					// hintTop();
					setBounds(pane, 0, 0, window.innerWidth, window.innerHeight / 2);
					break;
				case 'snap-left-edge':
					// hintLeft();
					setBounds(pane, 0, 0, window.innerWidth / 2, window.innerHeight);
					break;
				case 'snap-right-edge':
					setBounds(pane, window.innerWidth / 2, 0, window.innerWidth / 2, window.innerHeight);
					break;
				case 'snap-bottom-edge':
					setBounds(pane, 0, window.innerHeight / 2, window.innerWidth, window.innerHeight / 2);
					break;
			}
		}

		function onUp(e) {
			calc(e);

			if (clicked && clicked.isMoving) {
				// Snap
				snapType = checks();
				if (snapType) {
					preSnapped = {
						width: b.width,
						height: b.height
					};
					resizeEdges();
				} else {
					preSnapped = null;
				}

				hintHide();

			}

			clicked = null;

		}
	})();

}

window.Timeliner = Timeliner;

},{"../package.json":2,"./settings":4,"./theme":5,"./ui_icon_button":9,"./ui_scrollbar":11,"./util_datastore":12,"./util_dispatcher":13,"./util_undo":16,"./utils":17,"./view_layer_cabinet":19,"./view_panel":20}],7:[function(require,module,exports){
var handleDrag = require('./util_handle_drag');

function Canvas(w, h) {

	var canvas, ctx, width, height, dpr;

	var canvasItems = [];
	var child;

	function create() {
		canvas = document.createElement('canvas');
		ctx = canvas.getContext('2d');
	}

	function setSize(w, h) {
		width = w;
		height = h;
		dpr = window.devicePixelRatio;
		canvas.width = width * dpr;
		canvas.height = height * dpr;
		canvas.style.width = width + 'px';
		canvas.style.height = height + 'px';

		if (child) child.setSize(w, h);
	}

	function paint(ctx) {
		if (child) {
			if (!child.paint) console.warn('implement repaint()')
			child.paint(ctx);
		}

		var item;
		for (var i = 0; i < canvasItems.length; i++) {
			item = canvasItems[i];
			item.paint()
		}
	}

	function repaint() {
		paint(ctx);
	}

	function add(item) {
		canvasItems.push(item)
	}

	function remove(item) {
		canvasItems.splice(canvasItems.indexOf(item), 1);
	}

	function uses(c) {
		child = c;
		child.add = this.add;
		child.remove = this.remove;
	}

	create();
	setSize(w, h);
	this.setSize = setSize;
	this.repaint = repaint;
	this.uses = uses;

	this.dom = canvas;

	handleDrag(canvas,
		function down(e) {
			if (child.onDown) { child.onDown(e) };
		},
		function move(e) {
			if (child.onMove) { child.onMove(e) };
		},
		function up(e) {
			if (child.onUp) { child.onUp(e) };
		}
		// function hit(e) {
		// 	if (child.onHit) { child.onHit(e) };
		// }
	);
}


module.exports = Canvas;

/*
 * Usage: canvas = new Canvas(width, height);
 * canvas.resize();
 */

// children
// 1: override repaint
// 2: add objects
// Canvas.uses(CanvasChild);
// CanvasItem
// width, height, x, y
// allow Drag
// allow Click
// mouseOver
// 


},{"./util_handle_drag":14}],8:[function(require,module,exports){
/**
 * Created by ddos on 15.04.17.
 */
const Theme = require('./theme'),
  Do = require('do.js'),
  style = require('./utils').style,
  type = require('./utils').inputType,
  firstDefined = require('./utils').firstDefined
;

/**************************/
// ColorUI
/**************************/

function ColorUI (config) {
  config = config || {}
  config.regex = /^#[A-F,a-f,0-9]{6}$/g

  var span = document.createElement('input')

  type(span, 'color')

  style(span, {
    textAlign: 'center',
    fontSize: '10px',
    padding: '1px',
    cursor: 'pointer',
    width: '40px',
    margin: 0,
    marginRight: '10px',
    appearance: 'none',
    outline: 'none',
    border: 0,
    background: 'none',
    color: Theme.c
  });

  var me = this

  var state, value = 0, unchanged_value;

  this.onChange = new Do()

  span.addEventListener('change', function(e) {
    console.log('color span changed', span.value);
    value = span.value;

    fireChange();
  });


  function fireChange() {
    me.onChange.fire(value, true);
  }

  this.dom = span

  this.setValue = function (value) {
    if(value == 0 || Number(value)) {
      value = '#000000'
    }

    if(!config.regex.test(value)) {
      return
    }
    span.value = value
  }

  this.paint = function() {
    if (value && document.activeElement !== span) {
      span.value = value;
    }
  };

}

module.exports = ColorUI;
},{"./theme":5,"./utils":17,"do.js":1}],9:[function(require,module,exports){
var font = require('./font.json'),
	Theme = require('./theme'),
	style = require('./utils').style;

var dp;

function IconButton(size, icon, tooltip, dp) {
	var iconStyle = {
		padding: '0.2em 0.4em',
		margin: '0em',
		background: 'none',
		outline: 'none',
		fontSize: '16px',
		border: 'none',
		borderRadius: '0.2em',
	};

	var button = document.createElement('button');
	style(button, iconStyle);

	var canvas = document.createElement('canvas');
	var ctx = canvas.getContext('2d');

	button.appendChild(canvas);

	this.ctx = ctx;
	this.dom = button;
	this.canvas = canvas;

	var me = this;
	this.size = size;
	var dpr = 1;

	this.resize = function() {
		dpr = window.devicePixelRatio;
		var height = size;

		var glyph = font.fonts[icon];

		canvas.height = height * dpr;
		canvas.style.height = height + 'px';

		var scale = height / font.unitsPerEm;
		var width = glyph.advanceWidth * scale + 0.5 | 0;

		width += 2;
		height += 2;

		canvas.width = width * dpr;
		canvas.style.width = width + 'px';

		ctx.fillStyle = Theme.c;
		me.draw();
	};

	if (dp) dp.on('resize', this.resize);

	this.setSize = function(s) {
		size = s;
		this.resize();
	};

	this.setIcon = function(icon) {
		me.icon = icon;

		if (!font.fonts[icon]) console.warn('Font icon not found!');
		this.resize();
	};

	this.onClick = function(e) {
		button.addEventListener('click', e);
	};

	var LONG_HOLD_DURATION = 500;
	var longHoldTimer;

	this.onLongHold = function(f) {
		// not most elagent but oh wells.
		function startHold(e) {
			e.preventDefault();
			e.stopPropagation();
			longHoldTimer = setTimeout(function() {
				if (longHoldTimer) {
					console.log('LONG HOLD-ED!');
					f();
				}
			}, LONG_HOLD_DURATION);
		}

		function clearLongHoldTimer() {
			clearTimeout(longHoldTimer);
		}
		
		button.addEventListener('mousedown', startHold);
		button.addEventListener('touchstart', startHold);
		button.addEventListener('mouseup', clearLongHoldTimer);
		button.addEventListener('mouseout', clearLongHoldTimer);
		button.addEventListener('touchend', clearLongHoldTimer);
	};

	this.setTip = function(tip) {
		tooltip = tip;
	};

	var borders = {
		border: '1px solid ' + Theme.b,
		// boxShadow: Theme.b + ' 1px 1px'
	};

	var no_borders = {
		border: '1px solid transparent',
		// boxShadow: 'none'
	};

	var normal = 'none'; // Theme.b;
	var up = Theme.c;
	var down = Theme.b;

	button.style.background = normal;
	style(button, no_borders);

	button.addEventListener('mouseover', function() {
		// button.style.background = up;
		style(button, borders);
		
		ctx.fillStyle = Theme.d;
		// me.dropshadow = true;
		ctx.shadowColor = Theme.b;
		ctx.shadowBlur = 0.5 * dpr;
		ctx.shadowOffsetX = 1 * dpr;
		ctx.shadowOffsetY = 1 * dpr;
		me.draw();

		if (tooltip && dp) dp.fire('status', 'button: ' + tooltip);
	});

	button.addEventListener('mousedown', function() {
		button.style.background = down;
		// ctx.fillStyle = Theme.b;
		// me.draw();
	});

	button.addEventListener('mouseup', function() {
		// ctx.fillStyle = Theme.d;
		button.style.background = normal;
		style(button, borders);
		// me.draw();
	});

	button.addEventListener('mouseout', function() {
		// ctx.fillStyle = Theme.c;
		

		button.style.background = normal;
		style(button, no_borders);
		me.dropshadow = false;
		ctx.fillStyle = Theme.c;
		ctx.shadowColor = null;
		ctx.shadowBlur = 0;
		ctx.shadowOffsetX = 0;
		ctx.shadowOffsetY = 0;
		me.draw();
	});

	if (icon) this.setIcon(icon);
}

IconButton.prototype.CMD_MAP = {
	M: 'moveTo',
	L: 'lineTo',
	Q: 'quadraticCurveTo',
	C: 'bezierCurveTo',
	Z: 'closePath'
};

IconButton.prototype.draw = function() {
	if (!this.icon) return;

	var ctx = this.ctx;

	var glyph = font.fonts[this.icon];

	var height = this.size;
	var dpr = window.devicePixelRatio;
	var scale = height / font.unitsPerEm * dpr;
	var path_commands =  glyph.commands.split(' ');

	ctx.save();
	ctx.clearRect(0, 0, this.canvas.width * dpr, this.canvas.height * dpr);

	if (this.dropshadow) {
		ctx.save();
		ctx.fillStyle = Theme.b;
		ctx.translate(1.5 * dpr, 1.5 * dpr);
		ctx.scale(scale, -scale);
		ctx.translate(0 , -font.ascender);
		ctx.beginPath();

		for (var i = 0, il = path_commands.length; i < il; i++) {
			var cmds = path_commands[i].split(',');
			var params = cmds.slice(1);

			ctx[this.CMD_MAP[cmds[0]]].apply(ctx, params);
		}
		ctx.fill();
		ctx.restore();
	}

	ctx.scale(scale, -scale);
	ctx.translate(0, -font.ascender);
	ctx.beginPath();

	for (var i = 0, il = path_commands.length; i < il; i++) {
		var cmds = path_commands[i].split(',');
		var params = cmds.slice(1);

		ctx[this.CMD_MAP[cmds[0]]].apply(ctx, params);
	}
	ctx.fill();
	ctx.restore();

	/*
	var triangle = height / 3 * dpr;
	ctx.save();
	// ctx.translate(dpr * 2, 0);
	// ctx.fillRect(this.canvas.width - triangle, this.canvas.height - triangle, triangle, triangle);
	ctx.beginPath();
	ctx.moveTo(this.canvas.width - triangle, this.canvas.height - triangle / 2);
	ctx.lineTo(this.canvas.width, this.canvas.height - triangle / 2);
	ctx.lineTo(this.canvas.width - triangle / 2, this.canvas.height);
	ctx.fill();
	ctx.restore();
	*/
};

module.exports = IconButton;
},{"./font.json":3,"./theme":5,"./utils":17}],10:[function(require,module,exports){
var Theme = require('./theme'),
	Do = require('do.js'),
	handleDrag = require('./util_handle_drag'),
	style = require('./utils').style,
	firstDefined = require('./utils').firstDefined
	;

/**************************/
// NumberUI
/**************************/

function NumberUI(config) {
	config = config || {};
	var min = config.min === undefined ? -Infinity : config.min;

	// config.xstep and config.ystep allow configuring adjustment
	// speed across each axis.
	// config.wheelStep and config.wheelStepFine allow configuring
	// adjustment speed for mousewheel, and mousewheel while holding <alt>

	// If only config.step is specified, all other adjustment speeds
	// are set to the same value.
	var xstep = firstDefined(config.xstep, config.step, 0.001);
	var ystep = firstDefined(config.ystep, config.step, 0.1);
	var wheelStep = firstDefined(config.wheelStep, ystep);
	var wheelStepFine = firstDefined(config.wheelStepFine, xstep);

	var precision = config.precision || 3;
	// Range
	// Max

	var span = document.createElement('input');
	// span.type = 'number'; // spinner
	
	style(span, {
		textAlign: 'center',
		fontSize: '10px',
		padding: '1px',
		cursor: 'ns-resize',
		width: '40px',
		margin: 0,
		marginRight: '10px',
		appearance: 'none',
		outline: 'none',
		border: 0,
		background: 'none',
		borderBottom: '1px dotted '+ Theme.c,
		color: Theme.c
	});

	var me = this;
	var state, value = 0, unchanged_value;

	this.onChange = new Do();

	span.addEventListener('change', function(e) {
		console.log('input changed', span.value);
		value = parseFloat(span.value, 10);

		fireChange();
	});

	// Allow keydown presses in inputs, don't allow parent to block them
	span.addEventListener('keydown', function(e) {
		e.stopPropagation();
	})

	span.addEventListener('focus', function(e) {
		span.setSelectionRange(0, span.value.length);
	})

	span.addEventListener('wheel', function(e) {
		// Disregard pixel/line/page scrolling and just
		// use event direction.
		var inc = e.deltaY > 0? 1 : -1;
		if(e.altKey) {
			inc *= wheelStepFine;
		} else {
			inc *= wheelStep;
		}
		value = clamp(value + inc);
		fireChange();
	})

	handleDrag(span, onDown, onMove, onUp);

	function clamp(value) {
		return Math.max(min, value);
	}

	function onUp(e) {
		if (e.moved) fireChange();
		else {
			// single click
			span.focus();
		}
	}

	function onMove(e) {
		var dx = e.dx;
		var dy = e.dy;
	
		value = unchanged_value + (dx * xstep) + (dy * -ystep);

		value = clamp(value);

		// value = +value.toFixed(precision); // or toFixed toPrecision
		me.onChange.fire(value, true);
	}

	function onDown(e) {
		unchanged_value = value;
	}

	function fireChange() {
		me.onChange.fire(value);
	}

	this.dom = span;

	// public
	this.setValue = function(v) {
		value = v;
		span.value = value.toFixed(precision);
	};

	this.paint = function() {
		if (value && document.activeElement !== span) {
			span.value = value.toFixed(precision);
		}
	};
}

module.exports = NumberUI;

},{"./theme":5,"./util_handle_drag":14,"./utils":17,"do.js":1}],11:[function(require,module,exports){
var SimpleEvent = require('do.js');
var utils = require('./utils');

// ********** class: ScrollBar ****************** //
/*
	Simple UI widget that displays a scrolltrack 
	and slider, that fires some scroll events
*/
// ***********************************************

var scrolltrack_style = {
	// float: 'right',
	position: 'absolute',
	// right: '0',
	// top: '0',
	// bottom: '0',
	background: '-webkit-gradient(linear, left top, right top, color-stop(0, rgb(29,29,29)), color-stop(0.6, rgb(50,50,50)) )',
	border: '1px solid rgb(29, 29, 29)',
	// zIndex: '1000',
	textAlign: 'center',
	cursor: 'pointer'
};

var scrollbar_style = {
	background: '-webkit-gradient(linear, left top, right top, color-stop(0.2, rgb(88,88,88)), color-stop(0.6, rgb(64,64,64)) )',
	border: '1px solid rgb(25,25,25)',
	// position: 'absolute',
	position: 'relative',
	borderRadius: '6px'
};

function ScrollBar(h, w, dispatcher) {

	var SCROLLBAR_WIDTH = w ? w : 12;
	var SCROLLBAR_MARGIN = 3;
	var SCROLL_WIDTH = SCROLLBAR_WIDTH + SCROLLBAR_MARGIN * 2;
	var MIN_BAR_LENGTH = 25;

	var scrolltrack = document.createElement('div');
	utils.style(scrolltrack, scrolltrack_style);

	var scrolltrackHeight = h - 2;
	scrolltrack.style.height = scrolltrackHeight + 'px';
	scrolltrack.style.width = SCROLL_WIDTH + 'px';;

	// var scrollTop = 0;
	var scrollbar = document.createElement('div');
	// scrollbar.className = 'scrollbar';
	utils.style(scrollbar, scrollbar_style);
	scrollbar.style.width = SCROLLBAR_WIDTH + 'px';
	scrollbar.style.height = h / 2;
	scrollbar.style.top = 0;
	scrollbar.style.left = SCROLLBAR_MARGIN + 'px'; // 0; //S

	scrolltrack.appendChild(scrollbar);

	var me = this;

	var bar_length, bar_y;

	// Sets lengths of scrollbar by percentage
	this.setLength = function(l) {
		// limit 0..1
		l = Math.max(Math.min(1, l), 0);
		l *= scrolltrackHeight;
		bar_length = Math.max(l, MIN_BAR_LENGTH);
		scrollbar.style.height = bar_length + 'px';
	};

	this.setHeight = function(height) {
		h = height;

		scrolltrackHeight = h - 2;
		scrolltrack.style.height = scrolltrackHeight + 'px' ;
	};

	// Moves scrollbar to position by Percentage
	this.setPosition = function(p) {
		p = Math.max(Math.min(1, p), 0);
		var emptyTrack = scrolltrackHeight - bar_length;
		bar_y = p * emptyTrack;
		scrollbar.style.top = bar_y + 'px';
	};

	this.setLength(1);
	this.setPosition(0);
	this.onScroll = new SimpleEvent();

	var mouse_down_grip;

	function onDown(event) {
		event.preventDefault();

		if (event.target == scrollbar) {
			mouse_down_grip = event.clientY;
			document.addEventListener('mousemove', onMove, false);
			document.addEventListener('mouseup', onUp, false);
		} else {
			if (event.clientY < bar_y) {
				me.onScroll.fire('pageup');
			} else if (event.clientY > (bar_y + bar_length)) {
				me.onScroll.fire('pagedown');
			}
			// if want to drag scroller to empty track instead
			// me.setPosition(event.clientY / (scrolltrackHeight - 1));
		}
	}

	function onMove(event) {
		event.preventDefault();

		// event.target == scrollbar
		var emptyTrack = scrolltrackHeight - bar_length;
		var scrollto = (event.clientY - mouse_down_grip) / emptyTrack;

		// clamp limits to 0..1
		if (scrollto > 1) scrollto = 1;
		if (scrollto < 0) scrollto = 0;
		me.setPosition(scrollto);
		me.onScroll.fire('scrollto', scrollto);
	}

	function onUp(event) {
		onMove(event);
		document.removeEventListener('mousemove', onMove, false);
		document.removeEventListener('mouseup', onUp, false);
	}

	scrolltrack.addEventListener('mousedown', onDown, false);
	this.dom = scrolltrack;

}

module.exports = ScrollBar;
},{"./utils":17,"do.js":1}],12:[function(require,module,exports){
var package_json = require('../package.json'),
	Settings = require('./settings'),
	Do = require('do.js');

// Data Store with a source of truth
function DataStore() {
	this.DELIMITER = ':';
	this.blank();
	this.onOpen = new Do();
	this.onSave = new Do();

	this.listeners = [];
}

DataStore.prototype.addListener = function(path, cb) {
	this.listeners.push({
		path: path,
		callback: cb
	});
};

DataStore.prototype.blank = function() {
	var data = {};

	data.version = package_json.version;
	data.modified = new Date().toString();
	data.title = 'Untitled';

	data.ui = {
		currentTime: 0,
		totalTime: Settings.default_length,
		scrollTime: 0,
		timeScale: Settings.time_scale
	};

	data.layers = [];

	this.data = data;
};

DataStore.prototype.update = function() {
	var data = this.data;

	data.version = package_json.version;
	data.modified = new Date().toString();
};

DataStore.prototype.setJSONString = function(data) {
	this.data = JSON.parse(data);
};

DataStore.prototype.setJSON = function(data) {
	this.data = data;
};

DataStore.prototype.getJSONString = function(format) {
	return JSON.stringify(this.data, null, format);
};

DataStore.prototype.getValue = function(paths) {
	var descend = paths.split(this.DELIMITER);
	var reference = this.data;
	for (var i = 0, il = descend.length; i < il; i++) {
		var path = descend[i];
		if (reference[path] === undefined) {
			console.warn('Cant find ' + paths);
			return;
		}
		reference = reference[path];
	}
	return reference;
};

DataStore.prototype.setValue = function(paths, value) {
  console.log(paths)
	var descend = paths.split(this.DELIMITER);
	var reference = this.data;
	for (var i = 0, il = descend.length - 1; path = descend[i], i < il ; i++) {
		reference = reference[path];
	}
	reference[path] = value;

	this.listeners.forEach(function(l) {
		if (paths.indexOf(l.path) > -1) l.callback();
	})
};

DataStore.prototype.get = function(path, suffix) {
	if (suffix) path = suffix + this.DELIMITER + path;
	return new DataProx(this, path);
};

function DataProx(store, path) {
	this.path = path;
	this.store = store;
}

DataProx.prototype = {
	get value() {
		return this.store.getValue(this.path);
	},
	set value(val) {
		this.store.setValue(this.path, val);
	}
};

DataProx.prototype.get = function(path) {
	return this.store.get(path, this.path);
};

module.exports = DataStore;

},{"../package.json":2,"./settings":4,"do.js":1}],13:[function(require,module,exports){
/**************************/
// Dispatcher
/**************************/

function Dispatcher() {

	var event_listeners = {

	};

	function on(type, listener) {
		if (!(type in event_listeners)) {
			event_listeners[type] = [];
		}
		var listeners = event_listeners[type];
		listeners.push(listener);
	}

	function fire(type) {
		var args = Array.prototype.slice.call(arguments);
		args.shift();
		var listeners = event_listeners[type];
		if (!listeners) return;
		for (var i = 0; i < listeners.length; i++) {
			var listener = listeners[i];
			listener.apply(listener, args);
		}
	}

	this.on = on;
	this.fire = fire;

}

module.exports = Dispatcher;
},{}],14:[function(require,module,exports){
function handleDrag(element, ondown, onmove, onup, down_criteria) {
	var pointer = null;
	var bounds = element.getBoundingClientRect();
	
	element.addEventListener('mousedown', onMouseDown);

	function onMouseDown(e) {
		handleStart(e);

		if (down_criteria && !down_criteria(pointer)) {
			pointer = null;
			return;
		}

		
		document.addEventListener('mousemove', onMouseMove);
		document.addEventListener('mouseup', onMouseUp);
		
		ondown(pointer);

		e.preventDefault();
	}
	
	function onMouseMove(e) {
		handleMove(e);
		onmove(pointer);
	}

	function handleStart(e) {
		bounds = element.getBoundingClientRect();
		var currentx = e.clientX, currenty = e.clientY;
		pointer = {
			startx: currentx,
			starty: currenty,
			x: currentx,
			y: currenty,
			dx: 0,
			dy: 0,
			offsetx: currentx - bounds.left,
			offsety: currenty - bounds.top,
			moved: false
		};
	}
	
	function handleMove(e) {
		bounds = element.getBoundingClientRect();
		var currentx = e.clientX,
		currenty = e.clientY,
		offsetx = currentx - bounds.left,
		offsety = currenty - bounds.top;
		pointer.x = currentx;
		pointer.y = currenty;
		pointer.dx = e.clientX - pointer.startx;
		pointer.dy = e.clientY - pointer.starty;
		pointer.offsetx = offsetx;
		pointer.offsety = offsety;

		// If the pointer dx/dy is _ever_ non-zero, then it's moved
		pointer.moved = pointer.moved || pointer.dx !== 0 || pointer.dy !== 0;
	}
	
	function onMouseUp(e) {
		handleMove(e);
		onup(pointer);
		pointer = null;
		
		document.removeEventListener('mousemove', onMouseMove);
		document.removeEventListener('mouseup', onMouseUp);
	}

	element.addEventListener('touchstart', onTouchStart);

	function onTouchStart(te) {
		
		if (te.touches.length == 1) {
			
			var e = te.touches[0];
			if (down_criteria && !down_criteria(e)) return;
			te.preventDefault();
			handleStart(e);
			ondown(pointer);
		}
		
		element.addEventListener('touchmove', onTouchMove);
		element.addEventListener('touchend', onTouchEnd);
	}
	
	function onTouchMove(te) {
		var e = te.touches[0];
		onMouseMove(e);
	}

	function onTouchEnd(e) {
		// var e = e.touches[0];
		onMouseUp(e);
		element.removeEventListener('touchmove', onTouchMove);
		element.removeEventListener('touchend', onTouchEnd);
	}


	this.release = function() {
		element.removeEventListener('mousedown', onMouseDown);
		element.removeEventListener('touchstart', onTouchStart);
	};
}

module.exports = handleDrag;

},{}],15:[function(require,module,exports){
/**************************/
// Tweens
/**************************/

var Tweens = {
/*
	none: function(k) {
		return 0;
	},
*/
	linear: function(k) {
		return k;
	},
/*
	quadEaseIn: function(k) {
		return k * k;
	},
	quadEaseOut: function(k) {
		return - k * ( k - 2 );
	},
	quadEaseInOut: function(k) {
		if ( ( k *= 2 ) < 1 ) return 0.5 * k * k;
		return - 0.5 * ( --k * ( k - 2 ) - 1 );
	}
*/
};

module.exports = Tweens;
},{}],16:[function(require,module,exports){
/**************************/
// Undo Manager
/**************************/

function UndoState(state, description) {
	// this.state = JSON.stringify(state);
	this.state = state.getJSONString();
	this.description = description;
}

function UndoManager(dispatcher, max) {
	this.dispatcher = dispatcher;
	this.MAX_ITEMS = max || 100;
	this.clear();
}

UndoManager.prototype.save = function(state, suppress) {
	var states = this.states;
	var next_index = this.index + 1;
	var to_remove = states.length - next_index;
	states.splice(next_index, to_remove, state);

	if (states.length > this.MAX_ITEMS) {
		states.shift();
	}

	this.index = states.length - 1;

	// console.log('Undo State Saved: ', state.description);
	if (!suppress) this.dispatcher.fire('state:save', state.description);
};

UndoManager.prototype.clear = function() {
	this.states = [];
	this.index = -1;
	// FIXME: leave default state or always leave one state?
};

UndoManager.prototype.canUndo = function() {
	return this.index > 0;
	// && this.states.length > 1
};

UndoManager.prototype.canRedo = function() {
	return this.index < this.states.length - 1;
};

UndoManager.prototype.undo = function() {
	if (this.canUndo()) {
		this.dispatcher.fire('status', 'Undo: ' + this.get().description);
		this.index--;
	} else {
		this.dispatcher.fire('status', 'Nothing to undo');
	}

	return this.get();
};

UndoManager.prototype.redo = function() {
	if (this.canRedo()) {
		this.index++;
		this.dispatcher.fire('status', 'Redo: ' + this.get().description);
	} else {
		this.dispatcher.fire('status', 'Nothing to redo');
	}

	return this.get();
};

UndoManager.prototype.get = function() {
	return this.states[this.index];
};

module.exports = {
	UndoState: UndoState,
	UndoManager: UndoManager
};
},{}],17:[function(require,module,exports){
var
	Tweens = require('./util_tween');

module.exports = {
	STORAGE_PREFIX: 'timeliner-',
	Z_INDEX: 999,
	firstDefined: firstDefined,
	style: style,
	saveToFile: saveToFile,
	openAs: openAs,
	format_friendly_seconds: format_friendly_seconds,
	findTimeinLayer: findTimeinLayer,
	timeAtLayer: timeAtLayer,
	proxy_ctx: proxy_ctx,
	inputType: inputType
};

/**************************/
// Utils
/**************************/

function firstDefined() {
	for(var i = 0; i < arguments.length; i++) {
		if(typeof arguments[i] !== 'undefined') {
			return arguments[i];
		}
	}
	return undefined;
}

function style(element, var_args) {
	for (var i = 1; i < arguments.length; ++i) {
		var styles = arguments[i];
		for (var s in styles) {
			element.style[s] = styles[s];
		}
	}
}

function inputType (element, type) {
	element.setAttribute('type', type)
}

function saveToFile(string, filename) {
	var a = document.createElement("a");
	document.body.appendChild(a);
	a.style = "display: none";

	var blob = new Blob([string], { type: 'octet/stream' }), // application/json
		url = window.URL.createObjectURL(blob);
	
	a.href = url;
	a.download = filename;

	fakeClick(a);

	setTimeout(function() {
		// cleanup and revoke
		window.URL.revokeObjectURL(url);
		document.body.removeChild(a);
	}, 500);
}



var input, openCallback;

function handleFileSelect(evt) {
	var files = evt.target.files; // FileList object

	console.log('handle file select', files.length);

	var f = files[0];
	if (!f) return;
	// Can try to do MINE match
	// if (!f.type.match('application/json')) {
	//   return;
	// }
	console.log('match', f.type);

	var reader = new FileReader();

	// Closure to capture the file information.
	reader.onload = function(e) {
		var data = e.target.result;
		openCallback(data);
	};
	
	reader.readAsText(f);

	input.value = '';
}


function openAs(callback, target) {
	console.log('openfile...');
	openCallback = callback;

	if (!input) {
		input = document.createElement('input');
		input.style.display = 'none';
		input.type = 'file';
		input.addEventListener('change', handleFileSelect);
		target = target || document.body;
		target.appendChild(input);
	}
	
	fakeClick(input);
}

function fakeClick(target) {
	var e = document.createEvent("MouseEvents");
	e.initMouseEvent(
		'click', true, false, window, 0, 0, 0, 0, 0,
		false, false, false, false, 0, null
	);
	target.dispatchEvent(e);
}

function format_friendly_seconds(s, type) {
	// TODO Refactor to 60fps???
	// 20 mins * 60 sec = 1080 
	// 1080s * 60fps = 1080 * 60 < Number.MAX_SAFE_INTEGER

	var raw_secs = s | 0;
	var secs_micro = s % 60;
	var secs = raw_secs % 60;
	var raw_mins = raw_secs / 60 | 0;
	var mins = raw_mins % 60;
	var hours = raw_mins / 60 | 0;

	var secs_str = (secs / 100).toFixed(2).substring(2);

	var str = mins + ':' + secs_str;

	if (s % 1 > 0) {
		var t2 = (s % 1) * 60;
		if (type === 'frames') str = secs + '+' + t2.toFixed(0) + 'f';
		else str += ((s % 1).toFixed(2)).substring(1);
		// else str = mins + ':' + secs_micro;
		// else str = secs_micro + 's'; /// .toFixed(2)
	}
	return str;	
}

// get object at time
function findTimeinLayer(layer, time) {
	var values = layer.values;
	var i, il;

	// TODO optimize by checking time / binary search

	for (i=0, il=values.length; i<il; i++) {
		var value = values[i];
		if (value.time === time) {
			return {
				index: i,
				object: value
			};
		} else if (value.time > time) {
			return i;
		}
	}

	return i;
}


function timeAtLayer(layer, t) {
	// Find the value of layer at t seconds.
	// this expect layer to be sorted
	// not the most optimized for now, but would do.

	var values = layer.values;
	var i, il, entry, prev_entry;

	il = values.length;

	// can't do anything
	if (il === 0) return;

	if (layer._mute) return

	// find boundary cases
	entry = values[0];
	if (t < entry.time) {
		return {
			value: entry.value,
			can_tween: false, // cannot tween
			keyframe: false // not on keyframe
		};
	}

	for (i=0; i<il; i++) {
		prev_entry = entry;
		entry = values[i];

		if (t === entry.time) {
			// only exception is on the last KF, where we display tween from prev entry
			if (i === il - 1) {
				return {
					// index: i,
					entry: prev_entry,
					tween: prev_entry.tween,
					can_tween: il > 1,
					value: entry.value,
					keyframe: true
				};
			}
			return {
				// index: i,
				entry: entry,
				tween: entry.tween,
				can_tween: il > 1,
				value: entry.value,
				keyframe: true // il > 1
			};
		}
		if (t < entry.time) {
			// possibly a tween
/*
			if (!prev_entry.tween) { // or if value is none
				return {
					value: prev_entry.value,
					tween: false,
					entry: prev_entry,
					can_tween: true,
					keyframe: false
				};
			}
*/

			// calculate tween
/*
			var time_diff = entry.time - prev_entry.time;
			var value_diff = entry.value - prev_entry.value;
			var tween = prev_entry.tween;

			var dt = t - prev_entry.time;
			var k = dt / time_diff;
			var new_value = prev_entry.value + Tweens[tween](k) * value_diff;
*/
      // calculate color tween
			var time_diff = entry.time - prev_entry.time;

			if(entry.value == 0) {
				rgb = {r: 0, g: 0, b: 0}
			} else {
				var entryRGB = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(entry.value);
				rgb = {
							r: parseInt(entryRGB[1], 16),
							g: parseInt(entryRGB[2], 16),
							b: parseInt(entryRGB[3], 16)
				};
			}

      if(prev_entry.value == 0) {
        prev_rgb = {r: 0, g: 0, b: 0}
      } else {
        var prev_entryRGB = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(prev_entry.value);
        prev_rgb = {
          r: parseInt(prev_entryRGB[1], 16),
          g: parseInt(prev_entryRGB[2], 16),
          b: parseInt(prev_entryRGB[3], 16)
        };
      }

			 var dt = t - prev_entry.time;
			 var k = dt / time_diff;

			 var value_diff, newVal = {}
			 value_diff = {
				 r: rgb.r - prev_rgb.r,
				 g: rgb.g - prev_rgb.g,
				 b: rgb.b - prev_rgb.b
			 }

			 newVal.r = prev_rgb.r + Tweens['linear'](k) * value_diff.r;
			 newVal.g = prev_rgb.g + Tweens['linear'](k) * value_diff.g;
			 newVal.b = prev_rgb.b + Tweens['linear'](k) * value_diff.b;

			 console.log(newVal)
       newVal = rgbToHex(newVal.r, newVal.g, newVal.b)

			return {
				entry: prev_entry,
				value: newVal,
				tween: prev_entry.tween,
				can_tween: true,
				keyframe: false
			};
		}
	}
	// time is after all entries
	return {
		value: entry.value,
		can_tween: false,
		keyframe: false
	}; 

}

function componentToHex(c) {
  var hex = Math.round(c).toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}


function proxy_ctx(ctx) {
	// Creates a proxy 2d context wrapper which 
	// allows the fluent / chaining API.
	var wrapper = {};

	function proxy_function(c) {
		return function() {
			// Warning: this doesn't return value of function call
			ctx[c].apply(ctx, arguments);
			return wrapper;
		};
	}

	function proxy_property(c) {
		return function(v) {
			ctx[c] = v;
			return wrapper;
		};
	}

	wrapper.run = function(args) {
		args(wrapper);
		return wrapper;
	};

	for (var c in ctx) {
		// if (!ctx.hasOwnProperty(c)) continue;
		// console.log(c, typeof(ctx[c]), ctx.hasOwnProperty(c));
		// string, number, boolean, function, object

		var type = typeof(ctx[c]);
		switch(type) {
			case 'object':
				break;
			case 'function':
				wrapper[c] = proxy_function(c);
				break;
			default:
				wrapper[c] = proxy_property(c);
				break;
		}
	}

	return wrapper;
}

},{"./util_tween":15}],18:[function(require,module,exports){
var
	Theme = require('./theme'),
	UINumber = require('./ui_number'),
	UIColor = require('./ui_color_input'),
	Tweens = require('./util_tween'),
	Settings = require('./settings'),
	utils = require('./utils')
;

// TODO - tagged by index instead, work off layers.

function LayerView(layer, dispatcher) {
	var dom = document.createElement('div');

	var label = document.createElement('span');
	
	label.style.cssText = 'font-size: 12px; padding: 4px;';

	var dropdown = document.createElement('select');
	var option;
	dropdown.style.cssText = 'font-size: 10px; width: 60px; margin: 0; float: right; text-align: right;';

	for (var k in Tweens) {
		option = document.createElement('option');
		option.text = k;
		dropdown.appendChild(option);
	}

	dropdown.addEventListener('change', function(e) {
		dispatcher.fire('ease', layer, dropdown.value);
	});
	var height = (Settings.LINE_HEIGHT - 1);

	var keyframe_button = document.createElement('button');
	keyframe_button.innerHTML = '&#9672;'; // '&diams;' &#9671; 9679 9670 9672
	keyframe_button.style.cssText = 'background: none; font-size: 12px; padding: 0px; font-family: monospace; float: right; width: 20px; height: ' + height + 'px; border-style:none; outline: none;'; //  border-style:inset;
	
	keyframe_button.addEventListener('click', function(e) {
		console.log('clicked:keyframing...', state.get('_value').value);
		dispatcher.fire('keyframe', layer, state.get('_value').value);
	});

	/*
	// Prev Keyframe
	var button = document.createElement('button');
	button.textContent = '<';
	button.style.cssText = 'font-size: 12px; padding: 1px; ';
	dom.appendChild(button);

	// Next Keyframe
	button = document.createElement('button');
	button.textContent = '>';
	button.style.cssText = 'font-size: 12px; padding: 1px; ';
	dom.appendChild(button);

	
	*/

	function ToggleButton(text) {
		// for css based button see http://codepen.io/mallendeo/pen/eLIiG

		var button = document.createElement('button');
		button.textContent = text;

		utils.style(button, {
			fontSize: '12px',
			padding: '1px',
			borderSize: '2px',
			outline: 'none',
			background: '#fff'
		});

		this.pressed = false;

		button.onclick = function() {
			this.pressed = !this.pressed;

			utils.style(button, {
				borderStyle: this.pressed ? 'inset' : 'outset', // inset outset groove ridge
			})

			if (this.onClick) this.onClick();
		}.bind(this);

		this.dom = button;

	}

/*
	// Solo
	var solo_toggle = new ToggleButton('S');
	dom.appendChild(solo_toggle.dom);

	solo_toggle.onClick = function() {
		dispatcher.fire('action:solo', layer, solo_toggle.pressed);
	}

	// Mute
	var mute_toggle = new ToggleButton('M');
	dom.appendChild(mute_toggle.dom);

	mute_toggle.onClick = function() {
		dispatcher.fire('action:mute', layer, mute_toggle.pressed);
	}
*/


	var number = new UIColor(layer, dispatcher);

	number.onChange.do(function(value, done) {
		state.get('_value').value = value;
		dispatcher.fire('value.change', layer, value, done);
	});

	utils.style(number.dom, {
		float: 'right'
	});

	dom.appendChild(label);
	dom.appendChild(keyframe_button);
	dom.appendChild(number.dom);
	//dom.appendChild(dropdown);
	

	utils.style(dom, {
		textAlign: 'left',
		margin: '0px 0px 0px 5px',
		borderBottom: '1px solid ' + Theme.b,
		top: 0,
		left: 0,
		height: (Settings.LINE_HEIGHT - 1 ) + 'px',
		color: Theme.c
	});

	this.dom = dom;

	this.repaint = repaint;
	var state;

	this.setState = function(l, s) {
		layer = l;
		state = s;

		var tmp_value = state.get('_value');
		if (tmp_value.value === undefined) {
			tmp_value.value = 0;
		}

		number.setValue(tmp_value.value);
		label.textContent = state.get('name').value;

		repaint();
	};

	function repaint(s) {

		dropdown.style.opacity = 0;
		dropdown.disabled = true;
		keyframe_button.style.color = Theme.b;
		// keyframe_button.disabled = false;
		// keyframe_button.style.borderStyle = 'solid';

		var tween = null;
		var o = utils.timeAtLayer(layer, s);

		if (!o) return;

		if (o.can_tween) {
			dropdown.style.opacity = 1;
			dropdown.disabled = false;
			// if (o.tween)
			dropdown.value = o.tween ? o.tween : 'none';
			if (dropdown.value === 'none') dropdown.style.opacity = 0.5;
		}

		if (o.keyframe) {
			keyframe_button.style.color = Theme.c;
			// keyframe_button.disabled = true;
			// keyframe_button.style.borderStyle = 'inset';
		}

		state.get('_value').value = o.value;
		number.setValue(o.value);
		number.paint();

		dispatcher.fire('target.notify', layer.name, o.value);
	}

}

module.exports = LayerView;

},{"./settings":4,"./theme":5,"./ui_color_input":8,"./ui_number":10,"./util_tween":15,"./utils":17}],19:[function(require,module,exports){
var Settings = require('./settings'),
	ViewLayer = require('./view_layer'),
	IconButton = require('./ui_icon_button'),
	style = require('./utils').style,
	Theme = require('./theme'),
	STORAGE_PREFIX = require('./utils').STORAGE_PREFIX,
	UINumber = require('./ui_number'),
	UIColor = require('./ui_number')
	;

function LayerCabinet(data, dispatcher) {
	var layer_store = data.get('layers');

	var div = document.createElement('div');

	var top = document.createElement('div');
	top.style.cssText = 'margin: 0px; top: 0; left: 0; height: ' + Settings.MARKER_TRACK_HEIGHT + 'px';
	// top.style.textAlign = 'right';

	var layer_scroll = document.createElement('div');
	style(layer_scroll, {
		position: 'absolute',
		top: Settings.MARKER_TRACK_HEIGHT + 'px',
		// height: (Settings.height - Settings.MARKER_TRACK_HEIGHT) + 'px'
		left: 0,
		right: 0,
		bottom: 0,
		overflow: 'hidden'
	});

	div.appendChild(layer_scroll);

	var playing = false;


	var button_styles = {
		width: '22px',
		height: '22px',
		padding: '2px'
	};

	var op_button_styles = {
		width: '32px',
		padding: '3px 4px 3px 4px'
	};


	var play_button = new IconButton(16, 'play', 'play', dispatcher);
	style(play_button.dom, button_styles, { marginTop: '2px' } );
	play_button.onClick(function(e) {
		e.preventDefault();
		dispatcher.fire('controls.toggle_play');
	});

	var stop_button = new IconButton(16, 'stop', 'stop', dispatcher);
	style(stop_button.dom, button_styles, { marginTop: '2px' } );
	stop_button.onClick(function(e) {
		dispatcher.fire('controls.stop');
	});


	var undo_button = new IconButton(16, 'undo', 'undo', dispatcher);
	style(undo_button.dom, op_button_styles);
	undo_button.onClick(function() {
		dispatcher.fire('controls.undo');
	});

	var redo_button = new IconButton(16, 'repeat', 'redo', dispatcher);
	style(redo_button.dom, op_button_styles);
	redo_button.onClick(function() {
		dispatcher.fire('controls.redo');
	});

	var range = document.createElement('input');
	range.type = "range";
	range.value = 0;
	range.min = -1;
	range.max = +1;
	range.step = 0.125;

	style(range, {
		width: '90px',
		margin: '0px',
		marginLeft: '2px',
		marginRight: '2px'
	});

	var draggingRange = 0;

	range.addEventListener('mousedown', function() {
		draggingRange = 1;
	});

	range.addEventListener('mouseup', function() {
		draggingRange = 0;
		changeRange();
	});

	range.addEventListener('mousemove', function() {
		if (!draggingRange) return;
		changeRange();
	});

	div.appendChild(top);

	var time_options = {
		min: 0,
		step: 0.125
	};

	var currentTime = new UINumber(time_options);
	var totalTime = new UINumber(time_options);

	var currentTimeStore = data.get('ui:currentTime');
	var totalTimeStore = data.get('ui:totalTime');

	// UI2StoreBind(view, datastore) {
	// 	view.onChange.do(function(v) {
	// 		datastore.value = view;
	// 	})

	// 	datastore.onChange.do(function(v) {
	// 		view.setValue = v;
	// 	})
	// }

	currentTime.onChange.do(function(value, done) {
		dispatcher.fire('time.update', value);
		// repaint();
	});

	totalTime.onChange.do(function(value, done) {
		totalTimeStore.value = value;
		repaint();
		var val = (Number(range.value) + 1)/2
		console.log(val*data.get('ui:totalTime').value)
    dispatcher.fire('update.scale', val/data.get('ui:totalTime').value);
    //dispatcher.fire('update.scale', Math.pow(100, -range.value) );
	});

	// Play Controls
	top.appendChild(currentTime.dom);
	top.appendChild(document.createTextNode('/')); // 0:00:00 / 0:10:00
	top.appendChild(totalTime.dom)
	top.appendChild(play_button.dom);
	top.appendChild(stop_button.dom);
	top.appendChild(range);


	var operations_div = document.createElement('div');
	style(operations_div, {
		marginTop: '4px',
		// borderBottom: '1px solid ' + Theme.b
	});
	//top.appendChild(operations_div);


	// open _alt
	var file_open = new IconButton(16, 'folder_open_alt', 'Open', dispatcher);
	style(file_open.dom, op_button_styles);
	operations_div.appendChild(file_open.dom);

	function populateOpen() {
		while (dropdown.length) {
			dropdown.remove(0);
		}

		var option;
		option = document.createElement('option');
		option.text = 'New';
		option.value = '*new*';
		dropdown.add(option);

		option = document.createElement('option');
		option.text = 'Import JSON';
		option.value = '*import*';
		dropdown.add(option);

		// Doesn't work
		// option = document.createElement('option');
		// option.text = 'Select File';
		// option.value = '*select*';
		// dropdown.add(option);

		option = document.createElement('option');
		option.text = '==Open==';
		option.disabled = true;
		option.selected = true;
		dropdown.add(option);

		var regex = new RegExp(STORAGE_PREFIX + '(.*)');
		for (var key in localStorage) {
			// console.log(key);

			var match = regex.exec(key);
			if (match) {
				option = document.createElement('option');
				option.text = match[1];

				dropdown.add(option);
			}
		}

	}

	// listen on other tabs
	window.addEventListener('storage', function(e) {
		var regex = new RegExp(STORAGE_PREFIX + '(.*)');
		if (regex.exec(e.key)) {
			populateOpen();
		}
	});

	dispatcher.on('save:done', populateOpen);

	var dropdown = document.createElement('select');

	style(dropdown, {
		position: 'absolute',
		// right: 0,
		// margin: 0,
		opacity: 0,
		width: '16px',
		height: '16px',
		// zIndex: 1,
	});

	dropdown.addEventListener('change', function(e) {
		// console.log('changed', dropdown.length, dropdown.value);

		switch (dropdown.value) {
			case '*new*':
				dispatcher.fire('new');
				break;
			case '*import*':
				dispatcher.fire('import');
				break;
			case '*select*':
				dispatcher.fire('openfile');
				break;
			default:
				dispatcher.fire('open', dropdown.value);
				break;
		}
	});

	file_open.dom.insertBefore(dropdown, file_open.dom.firstChild);

	populateOpen();

	// // json import
	// var import_json = new IconButton(16, 'signin', 'Import JSON', dispatcher);
	// operations_div.appendChild(import_json.dom);
	// import_json.onClick(function() {
	// 	dispatcher.fire('import');
	// });

	// // new
	// var file_alt = new IconButton(16, 'file_alt', 'New', dispatcher);
	// operations_div.appendChild(file_alt.dom);

	// save
	var save = new IconButton(16, 'save', 'Save', dispatcher);
	style(save.dom, op_button_styles);
	operations_div.appendChild(save.dom);
	save.onClick(function() {
		dispatcher.fire('save');
	});

	// save as
	var save_as = new IconButton(16, 'paste', 'Save as', dispatcher);
	style(save_as.dom, op_button_styles);
	operations_div.appendChild(save_as.dom);
	save_as.onClick(function() {
		dispatcher.fire('save_as');
	});

	// download json (export)
	var download_alt = new IconButton(16, 'download_alt', 'Download / Export JSON to file', dispatcher);
	style(download_alt.dom, op_button_styles);
	operations_div.appendChild(download_alt.dom);
	download_alt.onClick(function() {
		dispatcher.fire('export');
	});

	var upload_alt = new IconButton(16, 'upload_alt', 'Load from file', dispatcher);
	style(upload_alt.dom, op_button_styles);
	operations_div.appendChild(upload_alt.dom);
	upload_alt.onClick(function() {
		dispatcher.fire('openfile');
	});

	var span = document.createElement('span');
	span.style.width = '20px';
	span.style.display = 'inline-block';
	operations_div.appendChild(span);

	operations_div.appendChild(undo_button.dom);
	operations_div.appendChild(redo_button.dom);
	operations_div.appendChild(document.createElement('br'));

	// Cloud Download / Upload edit pencil

	/*
	// // show layer
	// var eye_open = new IconButton(16, 'eye_open', 'eye_open', dispatcher);
	// operations_div.appendChild(eye_open.dom);

	// // hide / disable layer
	// var eye_close = new IconButton(16, 'eye_close', 'eye_close', dispatcher);
	// operations_div.appendChild(eye_close.dom);


	// remove layer
	var minus = new IconButton(16, 'minus', 'minus', dispatcher);
	operations_div.appendChild(minus.dom);

	// check
	var ok = new IconButton(16, 'ok', 'ok', dispatcher);
	operations_div.appendChild(ok.dom);

	// cross
	var remove = new IconButton(16, 'remove', 'remove', dispatcher);
	operations_div.appendChild(remove.dom);

	*/


	// range.addEventListener('change', changeRange);


	function convertPercentToTime(t) {
		var min_time = 10 * 60; // 10 minutes
		min_time = data.get('ui:totalTime').value;
		var max_time = 1;
		var v = Settings.width * 0.8 / (t * (max_time - min_time) + min_time);
		return v;
	}

	function convertTimeToPercent(v) {
		var min_time = 10 * 60; // 10 minutes
		min_time = data.get('ui:totalTime').value;
		var max_time = 1;
		var t  = ((Settings.width * 0.8 / v) - min_time)  / (max_time - min_time);
		return t;
	}

	function changeRange() {

		dispatcher.fire('update.scale', Math.pow(100, -range.value) );
	}

	var layer_uis = [], visible_layers = 0;
	var unused_layers = [];

	this.layers = layer_uis;

	this.setControlStatus = function(v) {
		playing = v;
		if (playing) {
			play_button.setIcon('pause');
			play_button.setTip('pause');
		}
		else {
			play_button.setIcon('play');
			play_button.setTip('play');
		}
	};

	this.setState = function(state) {

		layer_store = state;
		layers = layer_store.value;
		// layers = state;
		console.log(layer_uis.length, layers);
		var i, layer;
		for (i = 0; i < layers.length; i++) {
			layer = layers[i];

			if (!layer_uis[i]) {
				var layer_ui;
				if (unused_layers.length) {
					layer_ui = unused_layers.pop();
					layer_ui.dom.style.display = 'block';
				} else {
					// new
					layer_ui = new ViewLayer(layer, dispatcher);
					layer_scroll.appendChild(layer_ui.dom);
				}
				layer_uis.push(layer_ui);
			}

			// layer_uis[i].setState(layer);
		}

		console.log('Total layers (view, hidden, total)', layer_uis.length, unused_layers.length,
			layer_uis.length + unused_layers.length);

	};

	function repaint(s) {

		s = currentTimeStore.value;
		currentTime.setValue(s);
		totalTime.setValue(totalTimeStore.value);
		currentTime.paint();
		totalTime.paint();

		var i;

		s = s || 0;
		for (i = layer_uis.length; i-- > 0;) {
			// quick hack
			if (i >= layers.length) {
				layer_uis[i].dom.style.display = 'none';
				unused_layers.push(layer_uis.pop());
				continue;
			}

			layer_uis[i].setState(layers[i], layer_store.get(i));
			// layer_uis[i].setState('layers'+':'+i);
			layer_uis[i].repaint(s);
		}

		visible_layers = layer_uis.length;

	}

	this.repaint = repaint;
	this.setState(layer_store);

	this.scrollTo = function(x) {
		layer_scroll.scrollTop = x * (layer_scroll.scrollHeight - layer_scroll.clientHeight);
	};

	this.dom = div;

	repaint();
}

module.exports = LayerCabinet;

},{"./settings":4,"./theme":5,"./ui_icon_button":9,"./ui_number":10,"./utils":17,"./view_layer":18}],20:[function(require,module,exports){
var
	Settings = require('./settings'),
	Theme = require('./theme'),
	utils = require('./utils'),
	proxy_ctx = utils.proxy_ctx,
	Tweens = require('./util_tween'),
	handleDrag = require('./util_handle_drag'),
	ScrollCanvas = require('./view_time_scroller'),
	Canvas = require('./ui_canvas')
	;

var
	LINE_HEIGHT = Settings.LINE_HEIGHT,
	DIAMOND_SIZE = Settings.DIAMOND_SIZE,
	TIME_SCROLLER_HEIGHT = 35,
	MARKER_TRACK_HEIGHT = 25,
	LEFT_PANE_WIDTH = Settings.LEFT_PANE_WIDTH,
	time_scale = Settings.time_scale,
	TOP = 10;


var frame_start = 0; // this is the current scroll position.


/*
 * This class contains the view for the right main section of timeliner
 */


// TODO
// dirty rendering
// drag block
// DON'T use time.update for everything

var tickMark1;
var tickMark2;
var tickMark3;

function time_scaled() {
	/*
	 * Subdivison LOD
	 * time_scale refers to number of pixels per unit
	 * Eg. 1 inch - 60s, 1 inch - 60fps, 1 inch - 6 mins
	 */
	var div = 60;

	tickMark1 = time_scale / div;
	tickMark2 = 2 * tickMark1;
	tickMark3 = 10 * tickMark1;

}

time_scaled();


/**************************/
// Timeline Panel
/**************************/

function TimelinePanel(data, dispatcher) {

	var dpr = window.devicePixelRatio;
	var canvas = document.createElement('canvas');

	var scrollTop = 0, scrollLeft = 0, SCROLL_HEIGHT;
	var layers = data.get('layers').value;

	this.scrollTo = function(s, y) {
		scrollTop = s * Math.max(layers.length * LINE_HEIGHT - SCROLL_HEIGHT, 0);
		repaint();
	};

	this.resize = function() {
		var h = (Settings.height - TIME_SCROLLER_HEIGHT);
		dpr = window.devicePixelRatio;
		canvas.width = Settings.width * dpr;
		canvas.height = h * dpr;
		canvas.style.width = Settings.width + 'px';
		canvas.style.height = h + 'px';
		SCROLL_HEIGHT = Settings.height - TIME_SCROLLER_HEIGHT;
		scroll_canvas.setSize(Settings.width, TIME_SCROLLER_HEIGHT);
	};

	var div = document.createElement('div');

	var scroll_canvas = new Canvas(Settings.width, TIME_SCROLLER_HEIGHT);
	// data.addListener('ui', repaint );

	utils.style(canvas, {
		position: 'absolute',
		top: TIME_SCROLLER_HEIGHT + 'px',
		left: '0px'
	});

	utils.style(scroll_canvas.dom, {
		position: 'absolute',
		top: '0px',
		left: '10px'
	});

	scroll_canvas.uses(new ScrollCanvas(dispatcher, data));


	div.appendChild(canvas);
	div.appendChild(scroll_canvas.dom);

	// this.dom = canvas;
	this.dom = div;
	this.resize();

	var ctx = canvas.getContext('2d');
	var ctx_wrap = proxy_ctx(ctx);

	var currentTime; // measured in seconds
	// technically it could be in frames or  have it in string format (0:00:00:1-60)

	var LEFT_GUTTER = 20;
	var i, x, y, il, j;

	var needsRepaint = false;
	var renderItems = [];

	function EasingRect(x1, y1, x2, y2, frame, frame2, values, layer, j) {
		var self = this;

		this.path = function() {
			ctx_wrap.beginPath()
			.rect(x1, y1, x2-x1, y2-y1)
			.closePath();
		};

		this.paint = function() {
			this.path();
			ctx.fillStyle = frame._color;
			ctx.fill();
		};

		this.mouseover = function() {
			canvas.style.cursor = 'pointer'; // pointer move ew-resize
		};

		this.mouseout = function() {
			canvas.style.cursor = 'default';
		};

		this.mousedrag = function(e) {
			var t1 = x_to_time(x1 + e.dx);
			t1 = Math.max(0, t1);
			// TODO limit moving to neighbours
			frame.time = t1;

			var t2 = x_to_time(x2 + e.dx);
			t2 = Math.max(0, t2);
			frame2.time = t2;

			// dispatcher.fire('time.update', t1);
		};
	}

	function Diamond(frame, y) {
		var x, y2;

		x = time_to_x(frame.time);
		y2 = y + LINE_HEIGHT * 0.5  - DIAMOND_SIZE / 2;

		var self = this;

		var isOver = false;

		this.path = function(ctx_wrap) {
			ctx_wrap
				.beginPath()
				.moveTo(x, y2)
				.lineTo(x + DIAMOND_SIZE / 2, y2 + DIAMOND_SIZE / 2)
				.lineTo(x, y2 + DIAMOND_SIZE)
				.lineTo(x - DIAMOND_SIZE / 2, y2 + DIAMOND_SIZE / 2)
				.closePath();
		};

		this.paint = function(ctx_wrap) {
			self.path(ctx_wrap);
			if (!isOver)
				ctx_wrap.fillStyle(Theme.c);
			else
				ctx_wrap.fillStyle('yellow'); // Theme.d

			ctx_wrap.fill()
			.stroke();
		};

		this.mouseover = function() {
			isOver = true;
			canvas.style.cursor = 'move'; // pointer move ew-resize
			self.paint(ctx_wrap);
		};

		this.mouseout = function() {
			isOver = false;
			canvas.style.cursor = 'default';
			self.paint(ctx_wrap);
		};

		this.mousedrag = function(e) {
			var t = x_to_time(x + e.dx);
			t = Math.max(0, t);
			// TODO limit moving to neighbours
			frame.time = t;
			dispatcher.fire('time.update', t);
			// console.log('frame', frame);
			// console.log(s, format_friendly_seconds(s), this);
		};

	}

	function repaint() {
		needsRepaint = true;
	}


	function drawLayerContents() {
		renderItems = [];
		// horizontal Layer lines
		for (i = 0, il = layers.length; i <= il; i++) {
			ctx.strokeStyle = Theme.b;
			ctx.beginPath();
			y = i * LINE_HEIGHT;
			y = ~~y - 0.5;

			ctx_wrap
			.moveTo(0, y)
			.lineTo(width, y)
			.stroke();
		}


		var frame, frame2, j;

		// Draw Easing Rects
		for (i = 0; i < il; i++) {
			// check for keyframes
			var layer = layers[i];
			var values = layer.values;

			y = i * LINE_HEIGHT;

			for (j = 0; j < values.length - 1; j++) {
				frame = values[j];
				frame2 = values[j + 1];

				// Draw Tween Rect
				x = time_to_x(frame.time);
				x2 = time_to_x(frame2.time);

				if (!frame.tween || frame.tween == 'none') continue;

				var y1 = y + 2;
				var y2 = y + LINE_HEIGHT - 2;

				renderItems.push(new EasingRect(x, y1, x2, y2, frame, frame2));

				// // draw easing graph
				// var color = parseInt(frame._color.substring(1,7), 16);
				// color = 0xffffff ^ color;
				// color = color.toString(16);           // convert to hex
				// color = '#' + ('000000' + color).slice(-6);

				// ctx.strokeStyle = color;
				// var x3;
				// ctx.beginPath();
				// ctx.moveTo(x, y2);
				// var dy = y1 - y2;
				// var dx = x2 - x;

				// for (x3=x; x3 < x2; x3++) {
				// 	ctx.lineTo(x3, y2 + Tweens[frame.tween]((x3 - x)/dx) * dy);
				// }
				// ctx.stroke();
			}

			for (j = 0; j < values.length; j++) {
				// Dimonds
				frame = values[j];
				renderItems.push(new Diamond(frame, y));
			}
		}

		// render items
		var item;
		for (i = 0, il = renderItems.length; i < il; i++) {
			item = renderItems[i];
			item.paint(ctx_wrap);
		}
	}

	function setTimeScale() {

		var v = data.get('ui:timeScale').value;
		if (time_scale !== v) {
			time_scale = v;
			time_scaled();
		}
	}

	var over = null;
	var mousedownItem = null;

	function check() {
		var item;
		var last_over = over;
		// over = [];
		over = null;
		for (i = renderItems.length; i-- > 0;) {
			item = renderItems[i];
			item.path(ctx_wrap);

			if (ctx.isPointInPath(pointer.x * dpr, pointer.y * dpr)) {
				// over.push(item);
				over = item;
				break;
			}
		}

		// clear old mousein
		if (last_over && last_over != over) {
			item = last_over;
			if (item.mouseout) item.mouseout();
		}

		if (over) {
			item = over;
			if (item.mouseover) item.mouseover();

			if (mousedown2) {
				mousedownItem = item;
			}
		}



		// console.log(pointer)
	}

	function pointerEvents() {
		if (!pointer) return;

		ctx_wrap
			.save()
			.scale(dpr, dpr)
			.translate(0, MARKER_TRACK_HEIGHT)
			.beginPath()
			.rect(0, 0, Settings.width, SCROLL_HEIGHT)
			.translate(-scrollLeft, -scrollTop)
			.clip()
				.run(check)
			.restore();
	}

	function _paint() {
		if (!needsRepaint) {
			pointerEvents();
			return;
		}

		scroll_canvas.repaint();

		setTimeScale();

		currentTime = data.get('ui:currentTime').value;
		frame_start =  data.get('ui:scrollTime').value;

		/**************************/
		// background

		ctx.fillStyle = Theme.a;
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.save();
		ctx.scale(dpr, dpr);

		//

		ctx.lineWidth = 1; // .5, 1, 2

		width = Settings.width;
		height = Settings.height;

		var units = time_scale / tickMark1;
		var offsetUnits = (frame_start * time_scale) % units;

		var count = (width - LEFT_GUTTER + offsetUnits) / units;

		// console.log('time_scale', time_scale, 'tickMark1', tickMark1, 'units', units, 'offsetUnits', offsetUnits, frame_start);

		// time_scale = pixels to 1 second (40)
		// tickMark1 = marks per second (marks / s)
		// units = pixels to every mark (40)

		// labels only
		for (i = 0; i < count; i++) {
			x = i * units + LEFT_GUTTER - offsetUnits;

			// vertical lines
			ctx.strokeStyle = Theme.b;
			ctx.beginPath();
			ctx.moveTo(x, 0);
			ctx.lineTo(x, height);
			ctx.stroke();

			ctx.fillStyle = Theme.d;
			ctx.textAlign = 'center';

			var t = (i * units - offsetUnits) / time_scale + frame_start;
			t = utils.format_friendly_seconds(t);
			ctx.fillText(t, x, 38);
		}

		units = time_scale / tickMark2;
		count = (width - LEFT_GUTTER + offsetUnits) / units;

		// marker lines - main
		for (i = 0; i < count; i++) {
			ctx.strokeStyle = Theme.c;
			ctx.beginPath();
			x = i * units + LEFT_GUTTER - offsetUnits;
			ctx.moveTo(x, MARKER_TRACK_HEIGHT - 0);
			ctx.lineTo(x, MARKER_TRACK_HEIGHT - 16);
			ctx.stroke();
		}

		var mul = tickMark3 / tickMark2;
		units = time_scale / tickMark3;
		count = (width - LEFT_GUTTER + offsetUnits) / units;

		// small ticks
		for (i = 0; i < count; i++) {
			if (i % mul === 0) continue;
			ctx.strokeStyle = Theme.c;
			ctx.beginPath();
			x = i * units + LEFT_GUTTER - offsetUnits;
			ctx.moveTo(x, MARKER_TRACK_HEIGHT - 0);
			ctx.lineTo(x, MARKER_TRACK_HEIGHT - 10);
			ctx.stroke();
		}

		// Encapsulate a scroll rect for the layers
		ctx_wrap
			.save()
			.translate(0, MARKER_TRACK_HEIGHT)
			.beginPath()
			.rect(0, 0, Settings.width, SCROLL_HEIGHT)
			.translate(-scrollLeft, -scrollTop)
			.clip()
				.run(drawLayerContents)
			.restore();

		// Current Marker / Cursor
		ctx.strokeStyle = 'red'; // Theme.c
		x = (currentTime - frame_start) * time_scale + LEFT_GUTTER;

		var txt = utils.format_friendly_seconds(currentTime);
		var textWidth = ctx.measureText(txt).width;

		var base_line = MARKER_TRACK_HEIGHT - 5, half_rect = textWidth / 2 + 4;

		ctx.beginPath();
		ctx.moveTo(x, base_line);
		ctx.lineTo(x, height);
		ctx.stroke();

		ctx.fillStyle = 'red'; // black
		ctx.textAlign = 'center';
		ctx.beginPath();
		ctx.moveTo(x, base_line + 5);
		ctx.lineTo(x + 5, base_line);
		ctx.lineTo(x + half_rect, base_line);
		ctx.lineTo(x + half_rect, base_line - 14);
		ctx.lineTo(x - half_rect, base_line - 14);
		ctx.lineTo(x - half_rect, base_line);
		ctx.lineTo(x - 5, base_line);
		ctx.closePath();
		ctx.fill();

		ctx.fillStyle = 'white';
		ctx.fillText(txt, x, base_line - 4);

		ctx.restore();

		needsRepaint = false;
		// pointerEvents();

	}

	function y_to_track(y) {
		if (y - MARKER_TRACK_HEIGHT < 0) return -1;
		return (y - MARKER_TRACK_HEIGHT + scrollTop) / LINE_HEIGHT | 0;
	}


	function x_to_time(x) {
		var units = time_scale / tickMark3;

		// return frame_start + (x - LEFT_GUTTER) / time_scale;

		return frame_start + ((x - LEFT_GUTTER) / units | 0) / tickMark3;
	}

	function time_to_x(s) {
		var ds = s - frame_start;
		ds *= time_scale;
		ds += LEFT_GUTTER;

		return ds;
	}

	var me = this;
	this.repaint = repaint;
	this._paint = _paint;

	repaint();

	var mousedown = false, selection = false;

	var dragObject;
	var canvasBounds;

	document.addEventListener('mousemove', onMouseMove);

	canvas.addEventListener('dblclick', function(e) {
		canvasBounds = canvas.getBoundingClientRect();
		var mx = e.clientX - canvasBounds.left , my = e.clientY - canvasBounds.top;


		var track = y_to_track(my);
		var s = x_to_time(mx);


		dispatcher.fire('keyframe', layers[track], currentTime);

	});

	function onMouseMove(e) {
		canvasBounds = canvas.getBoundingClientRect();
		var mx = e.clientX - canvasBounds.left , my = e.clientY - canvasBounds.top;
		onPointerMove(mx, my);
	}

	var pointerdidMoved = false;
	var pointer = null;

	function onPointerMove(x, y) {
		if (mousedownItem) return;
		pointerdidMoved = true;
		pointer = {x: x, y: y};
	}

	canvas.addEventListener('mouseout', function() {
		pointer = null;
	});

	var mousedown2 = false, mouseDownThenMove = false;
	handleDrag(canvas, function down(e) {
			mousedown2 = true;
			pointer = {
				x: e.offsetx,
				y: e.offsety
			};
			pointerEvents();

			if (!mousedownItem) dispatcher.fire('time.update', x_to_time(e.offsetx));
			// Hit criteria
		}, function move(e) {
			mousedown2 = false;
			if (mousedownItem) {
				mouseDownThenMove = true;
				if (mousedownItem.mousedrag) {
					mousedownItem.mousedrag(e);
				}
			} else {
				dispatcher.fire('time.update', x_to_time(e.offsetx));
			}
		}, function up(e) {
			if (mouseDownThenMove) {
				dispatcher.fire('keyframe.move');
			}
			else {
				dispatcher.fire('time.update', x_to_time(e.offsetx));
			}
			mousedown2 = false;
			mousedownItem = null;
			mouseDownThenMove = false;
		}
	);

	this.setState = function(state) {
		layers = state.value;
		repaint();
	};

}

module.exports = TimelinePanel;

},{"./settings":4,"./theme":5,"./ui_canvas":7,"./util_handle_drag":14,"./util_tween":15,"./utils":17,"./view_time_scroller":21}],21:[function(require,module,exports){
var
	Theme = require('./theme'),
	utils = require('./utils'),
	proxy_ctx = utils.proxy_ctx,
	handleDrag = require('./util_handle_drag')
	;


function Rect() {
	
}

Rect.prototype.set = function(x, y, w, h, color, outline) {
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.color = color;
	this.outline = outline;
};

Rect.prototype.paint = function(ctx) {
	ctx.fillStyle = Theme.b;  // // 'yellow';
	ctx.strokeStyle = Theme.c;

	this.shape(ctx);

	ctx.stroke();
	ctx.fill();
};

Rect.prototype.shape = function(ctx) {
	ctx.beginPath();
	ctx.rect(this.x, this.y, this.w, this.h);
};

Rect.prototype.contains = function(x, y) {
	return x >= this.x && y >= this.y
	 && x <= this.x + this.w && y <= this.y + this.h;
};



function ScrollCanvas(dispatcher, data) {
	var width, height;

	this.setSize = function(w, h) {
		width = w;
		height = h;
	}

	var TOP_SCROLL_TRACK = 20;
	var MARGINS = 15;

	var scroller = {
		left: 0,
		grip_length: 0,
		k: 1
	};

	var scrollRect = new Rect();

	this.paint = function(ctx) {
		var totalTime = data.get('ui:totalTime').value;
		var scrollTime = data.get('ui:scrollTime').value;
		var currentTime = data.get('ui:currentTime').value;
		
		var pixels_per_second = data.get('ui:timeScale').value;

		ctx.save();

		var w = width - 2 * MARGINS;
		var h = 16; // TOP_SCROLL_TRACK;
		var h2 = h;


		ctx.clearRect(0, 0, width, height);
		ctx.translate(MARGINS, 5);

		// outline scroller
		ctx.beginPath();
		ctx.strokeStyle = Theme.b;
		ctx.rect(0, 0, w, h);
		ctx.stroke();
		
		var totalTimePixels = totalTime * pixels_per_second;
		var k = w / totalTimePixels;
		scroller.k = k;

		var grip_length = w * k;

		scroller.grip_length = grip_length;

		scroller.left = scrollTime / totalTime * w;
		
		scrollRect.set(scroller.left, 0, scroller.grip_length, h);
		scrollRect.paint(ctx);

		var r = currentTime / totalTime * w;		

		ctx.fillStyle =  Theme.c;
		ctx.lineWidth = 2;
		
		ctx.beginPath();
		
		// circle
		// ctx.arc(r, h2 / 2, h2 / 1.5, 0, Math.PI * 2);

		// line
		ctx.rect(r, 0, 2, h + 5);
		ctx.fill()

		ctx.fillText(currentTime && currentTime.toFixed(2), r, h + 14);
		// ctx.fillText(currentTime && currentTime.toFixed(3), 10, 10);
		ctx.fillText(totalTime, 300, 14);

		ctx.restore();
	}

	/** Handles dragging for scroll bar **/

	var draggingx = null;

	this.onDown = function(e) {
		// console.log('ondown', e);

		if (scrollRect.contains(e.offsetx - MARGINS, e.offsety -5)) {
			draggingx = scroller.left;
			return;
		}
		
		var totalTime = data.get('ui:totalTime').value;
		var pixels_per_second = data.get('ui:timeScale').value;
		var w = width - 2 * MARGINS;

		var t = (e.offsetx - MARGINS) / w * totalTime;
		// t = Math.max(0, t);

		// data.get('ui:currentTime').value = t;
		dispatcher.fire('time.update', t);
		
	};

	this.onMove = function move(e) {
		if (draggingx != null) {
			var totalTime = data.get('ui:totalTime').value;
			var w = width - 2 * MARGINS;
			
			dispatcher.fire('update.scrollTime', 
				(draggingx + e.dx)  / w * totalTime);

		} else {
			this.onDown(e);	
		}
		
	};

	this.onUp = function(e) {
		draggingx = null;
	}

	/*** End handling for scrollbar ***/
}

module.exports = ScrollCanvas;
},{"./theme":5,"./util_handle_drag":14,"./utils":17}]},{},[6])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvZG8uanMvZG8uanMiLCJwYWNrYWdlLmpzb24iLCJzcmMvZm9udC5qc29uIiwic3JjL3NldHRpbmdzLmpzIiwic3JjL3RoZW1lLmpzIiwic3JjL3RpbWVsaW5lci5qcyIsInNyYy91aV9jYW52YXMuanMiLCJzcmMvdWlfY29sb3JfaW5wdXQuanMiLCJzcmMvdWlfaWNvbl9idXR0b24uanMiLCJzcmMvdWlfbnVtYmVyLmpzIiwic3JjL3VpX3Njcm9sbGJhci5qcyIsInNyYy91dGlsX2RhdGFzdG9yZS5qcyIsInNyYy91dGlsX2Rpc3BhdGNoZXIuanMiLCJzcmMvdXRpbF9oYW5kbGVfZHJhZy5qcyIsInNyYy91dGlsX3R3ZWVuLmpzIiwic3JjL3V0aWxfdW5kby5qcyIsInNyYy91dGlscy5qcyIsInNyYy92aWV3X2xheWVyLmpzIiwic3JjL3ZpZXdfbGF5ZXJfY2FiaW5ldC5qcyIsInNyYy92aWV3X3BhbmVsLmpzIiwic3JjL3ZpZXdfdGltZV9zY3JvbGxlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNWhDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdElBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcklBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9HQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9MQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6YkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeGxCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZnVuY3Rpb24gRG8ocGFyZW50KSB7XG5cdHZhciBsaXN0ZW5lcnMgPSBbXTtcblx0dGhpcy5kbyA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG5cdFx0bGlzdGVuZXJzLnB1c2goY2FsbGJhY2spO1xuXHR9O1xuXHR0aGlzLnVuZG8gPSBmdW5jdGlvbihjYWxsYmFjaykge1xuXHRcdGxpc3RlbmVycy5zcGxpY2UobGlzdGVuZXJzLmluZGV4T2YoY2FsbGJhY2spLCAxKTtcblx0fTtcblx0dGhpcy5maXJlID0gZnVuY3Rpb24oKSB7XG5cdFx0Zm9yICh2YXIgdiA9IDA7IHYgPCBsaXN0ZW5lcnMubGVuZ3RoOyB2KyspIHtcblx0XHRcdGxpc3RlbmVyc1t2XS5hcHBseShwYXJlbnQsIGFyZ3VtZW50cyk7XG5cdFx0fVxuXHR9O1xufVxuXG5pZiAodHlwZW9mKG1vZHVsZSkgPT09ICdvYmplY3QnKSBtb2R1bGUuZXhwb3J0cyA9IERvO1xuIiwibW9kdWxlLmV4cG9ydHM9e1xuICBcInZlcnNpb25cIjogXCIxLjYuMFwiXG59IiwibW9kdWxlLmV4cG9ydHM9e1xuXHRcInVuaXRzUGVyRW1cIjogMTc5Mixcblx0XCJhc2NlbmRlclwiOiAxNTM2LFxuXHRcImRlc2NlbmRlclwiOiAtMjU2LFxuXHRcImZvbnRzXCI6IHtcblx0XHRcInBsdXNcIjoge1xuXHRcdFx0XCJhZHZhbmNlV2lkdGhcIjogMTQwOCxcblx0XHRcdFwiY29tbWFuZHNcIjogXCJNLDE0MDgsODAwIEMsMTQwOCw4NTMsMTM2NSw4OTYsMTMxMiw4OTYgTCw4OTYsODk2IEwsODk2LDEzMTIgQyw4OTYsMTM2NSw4NTMsMTQwOCw4MDAsMTQwOCBMLDYwOCwxNDA4IEMsNTU1LDE0MDgsNTEyLDEzNjUsNTEyLDEzMTIgTCw1MTIsODk2IEwsOTYsODk2IEMsNDMsODk2LDAsODUzLDAsODAwIEwsMCw2MDggQywwLDU1NSw0Myw1MTIsOTYsNTEyIEwsNTEyLDUxMiBMLDUxMiw5NiBDLDUxMiw0Myw1NTUsMCw2MDgsMCBMLDgwMCwwIEMsODUzLDAsODk2LDQzLDg5Niw5NiBMLDg5Niw1MTIgTCwxMzEyLDUxMiBDLDEzNjUsNTEyLDE0MDgsNTU1LDE0MDgsNjA4IFpcIlxuXHRcdH0sXG5cdFx0XCJtaW51c1wiOiB7XG5cdFx0XHRcImFkdmFuY2VXaWR0aFwiOiAxNDA4LFxuXHRcdFx0XCJjb21tYW5kc1wiOiBcIk0sMTQwOCw4MDAgQywxNDA4LDg1MywxMzY1LDg5NiwxMzEyLDg5NiBMLDk2LDg5NiBDLDQzLDg5NiwwLDg1MywwLDgwMCBMLDAsNjA4IEMsMCw1NTUsNDMsNTEyLDk2LDUxMiBMLDEzMTIsNTEyIEMsMTM2NSw1MTIsMTQwOCw1NTUsMTQwOCw2MDggWlwiXG5cdFx0fSxcblx0XHRcIm9rXCI6IHtcblx0XHRcdFwiYWR2YW5jZVdpZHRoXCI6IDE3OTIsXG5cdFx0XHRcImNvbW1hbmRzXCI6IFwiTSwxNjcxLDk3MCBDLDE2NzEsOTk1LDE2NjEsMTAyMCwxNjQzLDEwMzggTCwxNTA3LDExNzQgQywxNDg5LDExOTIsMTQ2NCwxMjAyLDE0MzksMTIwMiBDLDE0MTQsMTIwMiwxMzg5LDExOTIsMTM3MSwxMTc0IEwsNzE1LDUxNyBMLDQyMSw4MTIgQyw0MDMsODMwLDM3OCw4NDAsMzUzLDg0MCBDLDMyOCw4NDAsMzAzLDgzMCwyODUsODEyIEwsMTQ5LDY3NiBDLDEzMSw2NTgsMTIxLDYzMywxMjEsNjA4IEMsMTIxLDU4MywxMzEsNTU4LDE0OSw1NDAgTCw1MTEsMTc4IEwsNjQ3LDQyIEMsNjY1LDI0LDY5MCwxNCw3MTUsMTQgQyw3NDAsMTQsNzY1LDI0LDc4Myw0MiBMLDkxOSwxNzggTCwxNjQzLDkwMiBDLDE2NjEsOTIwLDE2NzEsOTQ1LDE2NzEsOTcwIFpcIlxuXHRcdH0sXG5cdFx0XCJyZW1vdmVcIjoge1xuXHRcdFx0XCJhZHZhbmNlV2lkdGhcIjogMTQwOCxcblx0XHRcdFwiY29tbWFuZHNcIjogXCJNLDEyOTgsMjE0IEMsMTI5OCwyMzksMTI4OCwyNjQsMTI3MCwyODIgTCw5NzYsNTc2IEwsMTI3MCw4NzAgQywxMjg4LDg4OCwxMjk4LDkxMywxMjk4LDkzOCBDLDEyOTgsOTYzLDEyODgsOTg4LDEyNzAsMTAwNiBMLDExMzQsMTE0MiBDLDExMTYsMTE2MCwxMDkxLDExNzAsMTA2NiwxMTcwIEMsMTA0MSwxMTcwLDEwMTYsMTE2MCw5OTgsMTE0MiBMLDcwNCw4NDggTCw0MTAsMTE0MiBDLDM5MiwxMTYwLDM2NywxMTcwLDM0MiwxMTcwIEMsMzE3LDExNzAsMjkyLDExNjAsMjc0LDExNDIgTCwxMzgsMTAwNiBDLDEyMCw5ODgsMTEwLDk2MywxMTAsOTM4IEMsMTEwLDkxMywxMjAsODg4LDEzOCw4NzAgTCw0MzIsNTc2IEwsMTM4LDI4MiBDLDEyMCwyNjQsMTEwLDIzOSwxMTAsMjE0IEMsMTEwLDE4OSwxMjAsMTY0LDEzOCwxNDYgTCwyNzQsMTAgQywyOTIsLTgsMzE3LC0xOCwzNDIsLTE4IEMsMzY3LC0xOCwzOTIsLTgsNDEwLDEwIEwsNzA0LDMwNCBMLDk5OCwxMCBDLDEwMTYsLTgsMTA0MSwtMTgsMTA2NiwtMTggQywxMDkxLC0xOCwxMTE2LC04LDExMzQsMTAgTCwxMjcwLDE0NiBDLDEyODgsMTY0LDEyOTgsMTg5LDEyOTgsMjE0IFpcIlxuXHRcdH0sXG5cdFx0XCJ6b29tX2luXCI6IHtcblx0XHRcdFwiYWR2YW5jZVdpZHRoXCI6IDE2NjQsXG5cdFx0XHRcImNvbW1hbmRzXCI6IFwiTSwxMDI0LDczNiBDLDEwMjQsNzUzLDEwMDksNzY4LDk5Miw3NjggTCw3NjgsNzY4IEwsNzY4LDk5MiBDLDc2OCwxMDA5LDc1MywxMDI0LDczNiwxMDI0IEwsNjcyLDEwMjQgQyw2NTUsMTAyNCw2NDAsMTAwOSw2NDAsOTkyIEwsNjQwLDc2OCBMLDQxNiw3NjggQywzOTksNzY4LDM4NCw3NTMsMzg0LDczNiBMLDM4NCw2NzIgQywzODQsNjU1LDM5OSw2NDAsNDE2LDY0MCBMLDY0MCw2NDAgTCw2NDAsNDE2IEMsNjQwLDM5OSw2NTUsMzg0LDY3MiwzODQgTCw3MzYsMzg0IEMsNzUzLDM4NCw3NjgsMzk5LDc2OCw0MTYgTCw3NjgsNjQwIEwsOTkyLDY0MCBDLDEwMDksNjQwLDEwMjQsNjU1LDEwMjQsNjcyIE0sMTE1Miw3MDQgQywxMTUyLDQ1Nyw5NTEsMjU2LDcwNCwyNTYgQyw0NTcsMjU2LDI1Niw0NTcsMjU2LDcwNCBDLDI1Niw5NTEsNDU3LDExNTIsNzA0LDExNTIgQyw5NTEsMTE1MiwxMTUyLDk1MSwxMTUyLDcwNCBNLDE2NjQsLTEyOCBDLDE2NjQsLTk0LDE2NTAsLTYxLDE2MjcsLTM4IEwsMTI4NCwzMDUgQywxMzY1LDQyMiwxNDA4LDU2MiwxNDA4LDcwNCBDLDE0MDgsMTA5MywxMDkzLDE0MDgsNzA0LDE0MDggQywzMTUsMTQwOCwwLDEwOTMsMCw3MDQgQywwLDMxNSwzMTUsMCw3MDQsMCBDLDg0NiwwLDk4Niw0MywxMTAzLDEyNCBMLDE0NDYsLTIxOCBDLDE0NjksLTI0MiwxNTAyLC0yNTYsMTUzNiwtMjU2IEMsMTYwNywtMjU2LDE2NjQsLTE5OSwxNjY0LC0xMjggWlwiXG5cdFx0fSxcblx0XHRcInpvb21fb3V0XCI6IHtcblx0XHRcdFwiYWR2YW5jZVdpZHRoXCI6IDE2NjQsXG5cdFx0XHRcImNvbW1hbmRzXCI6IFwiTSwxMDI0LDczNiBDLDEwMjQsNzUzLDEwMDksNzY4LDk5Miw3NjggTCw0MTYsNzY4IEMsMzk5LDc2OCwzODQsNzUzLDM4NCw3MzYgTCwzODQsNjcyIEMsMzg0LDY1NSwzOTksNjQwLDQxNiw2NDAgTCw5OTIsNjQwIEMsMTAwOSw2NDAsMTAyNCw2NTUsMTAyNCw2NzIgTSwxMTUyLDcwNCBDLDExNTIsNDU3LDk1MSwyNTYsNzA0LDI1NiBDLDQ1NywyNTYsMjU2LDQ1NywyNTYsNzA0IEMsMjU2LDk1MSw0NTcsMTE1Miw3MDQsMTE1MiBDLDk1MSwxMTUyLDExNTIsOTUxLDExNTIsNzA0IE0sMTY2NCwtMTI4IEMsMTY2NCwtOTQsMTY1MCwtNjEsMTYyNywtMzggTCwxMjg0LDMwNSBDLDEzNjUsNDIyLDE0MDgsNTYyLDE0MDgsNzA0IEMsMTQwOCwxMDkzLDEwOTMsMTQwOCw3MDQsMTQwOCBDLDMxNSwxNDA4LDAsMTA5MywwLDcwNCBDLDAsMzE1LDMxNSwwLDcwNCwwIEMsODQ2LDAsOTg2LDQzLDExMDMsMTI0IEwsMTQ0NiwtMjE4IEMsMTQ2OSwtMjQyLDE1MDIsLTI1NiwxNTM2LC0yNTYgQywxNjA3LC0yNTYsMTY2NCwtMTk5LDE2NjQsLTEyOCBaXCJcblx0XHR9LFxuXHRcdFwiY29nXCI6IHtcblx0XHRcdFwiYWR2YW5jZVdpZHRoXCI6IDE1MzYsXG5cdFx0XHRcImNvbW1hbmRzXCI6IFwiTSwxMDI0LDY0MCBDLDEwMjQsNDk5LDkwOSwzODQsNzY4LDM4NCBDLDYyNywzODQsNTEyLDQ5OSw1MTIsNjQwIEMsNTEyLDc4MSw2MjcsODk2LDc2OCw4OTYgQyw5MDksODk2LDEwMjQsNzgxLDEwMjQsNjQwIE0sMTUzNiw3NDkgQywxNTM2LDc2NiwxNTI0LDc4MiwxNTA3LDc4NSBMLDEzMjQsODEzIEMsMTMxNCw4NDYsMTMwMCw4NzksMTI4Myw5MTEgQywxMzE3LDk1OCwxMzU0LDEwMDIsMTM4OCwxMDQ4IEMsMTM5MywxMDU1LDEzOTYsMTA2MiwxMzk2LDEwNzEgQywxMzk2LDEwNzksMTM5NCwxMDg3LDEzODksMTA5MyBDLDEzNDcsMTE1MiwxMjc3LDEyMTQsMTIyNCwxMjYzIEMsMTIxNywxMjY5LDEyMDgsMTI3MywxMTk5LDEyNzMgQywxMTkwLDEyNzMsMTE4MSwxMjcwLDExNzUsMTI2NCBMLDEwMzMsMTE1NyBDLDEwMDQsMTE3Miw5NzQsMTE4NCw5NDMsMTE5NCBMLDkxNSwxMzc4IEMsOTEzLDEzOTUsODk3LDE0MDgsODc5LDE0MDggTCw2NTcsMTQwOCBDLDYzOSwxNDA4LDYyNSwxMzk2LDYyMSwxMzgwIEMsNjA1LDEzMjAsNTk5LDEyNTUsNTkyLDExOTQgQyw1NjEsMTE4NCw1MzAsMTE3MSw1MDEsMTE1NiBMLDM2MywxMjYzIEMsMzU1LDEyNjksMzQ2LDEyNzMsMzM3LDEyNzMgQywzMDMsMTI3MywxNjgsMTEyNywxNDQsMTA5NCBDLDEzOSwxMDg3LDEzNSwxMDgwLDEzNSwxMDcxIEMsMTM1LDEwNjIsMTM5LDEwNTQsMTQ1LDEwNDcgQywxODIsMTAwMiwyMTgsOTU3LDI1Miw5MDkgQywyMzYsODc5LDIyMyw4NDksMjEzLDgxNyBMLDI3LDc4OSBDLDEyLDc4NiwwLDc2OCwwLDc1MyBMLDAsNTMxIEMsMCw1MTQsMTIsNDk4LDI5LDQ5NSBMLDIxMiw0NjggQywyMjIsNDM0LDIzNiw0MDEsMjUzLDM2OSBDLDIxOSwzMjIsMTgyLDI3OCwxNDgsMjMyIEMsMTQzLDIyNSwxNDAsMjE4LDE0MCwyMDkgQywxNDAsMjAxLDE0MiwxOTMsMTQ3LDE4NiBDLDE4OSwxMjgsMjU5LDY2LDMxMiwxOCBDLDMxOSwxMSwzMjgsNywzMzcsNyBDLDM0Niw3LDM1NSwxMCwzNjIsMTYgTCw1MDMsMTIzIEMsNTMyLDEwOCw1NjIsOTYsNTkzLDg2IEwsNjIxLC05OCBDLDYyMywtMTE1LDYzOSwtMTI4LDY1NywtMTI4IEwsODc5LC0xMjggQyw4OTcsLTEyOCw5MTEsLTExNiw5MTUsLTEwMCBDLDkzMSwtNDAsOTM3LDI1LDk0NCw4NiBDLDk3NSw5NiwxMDA2LDEwOSwxMDM1LDEyNCBMLDExNzMsMTYgQywxMTgxLDExLDExOTAsNywxMTk5LDcgQywxMjMzLDcsMTM2OCwxNTQsMTM5MiwxODYgQywxMzk4LDE5MywxNDAxLDIwMCwxNDAxLDIwOSBDLDE0MDEsMjE4LDEzOTcsMjI3LDEzOTEsMjM0IEMsMTM1NCwyNzksMTMxOCwzMjMsMTI4NCwzNzIgQywxMzAwLDQwMSwxMzEyLDQzMSwxMzIzLDQ2MyBMLDE1MDgsNDkxIEMsMTUyNCw0OTQsMTUzNiw1MTIsMTUzNiw1MjcgWlwiXG5cdFx0fSxcblx0XHRcInRyYXNoXCI6IHtcblx0XHRcdFwiYWR2YW5jZVdpZHRoXCI6IDE0MDgsXG5cdFx0XHRcImNvbW1hbmRzXCI6IFwiTSw1MTIsODAwIEMsNTEyLDgxOCw0OTgsODMyLDQ4MCw4MzIgTCw0MTYsODMyIEMsMzk4LDgzMiwzODQsODE4LDM4NCw4MDAgTCwzODQsMjI0IEMsMzg0LDIwNiwzOTgsMTkyLDQxNiwxOTIgTCw0ODAsMTkyIEMsNDk4LDE5Miw1MTIsMjA2LDUxMiwyMjQgTSw3NjgsODAwIEMsNzY4LDgxOCw3NTQsODMyLDczNiw4MzIgTCw2NzIsODMyIEMsNjU0LDgzMiw2NDAsODE4LDY0MCw4MDAgTCw2NDAsMjI0IEMsNjQwLDIwNiw2NTQsMTkyLDY3MiwxOTIgTCw3MzYsMTkyIEMsNzU0LDE5Miw3NjgsMjA2LDc2OCwyMjQgTSwxMDI0LDgwMCBDLDEwMjQsODE4LDEwMTAsODMyLDk5Miw4MzIgTCw5MjgsODMyIEMsOTEwLDgzMiw4OTYsODE4LDg5Niw4MDAgTCw4OTYsMjI0IEMsODk2LDIwNiw5MTAsMTkyLDkyOCwxOTIgTCw5OTIsMTkyIEMsMTAxMCwxOTIsMTAyNCwyMDYsMTAyNCwyMjQgTSwxMTUyLDc2IEMsMTE1MiwyOCwxMTI1LDAsMTEyMCwwIEwsMjg4LDAgQywyODMsMCwyNTYsMjgsMjU2LDc2IEwsMjU2LDEwMjQgTCwxMTUyLDEwMjQgTCwxMTUyLDc2IE0sNDgwLDExNTIgTCw1MjksMTI2OSBDLDUzMiwxMjczLDU0MCwxMjc5LDU0NiwxMjgwIEwsODYzLDEyODAgQyw4NjgsMTI3OSw4NzcsMTI3Myw4ODAsMTI2OSBMLDkyOCwxMTUyIE0sMTQwOCwxMTIwIEMsMTQwOCwxMTM4LDEzOTQsMTE1MiwxMzc2LDExNTIgTCwxMDY3LDExNTIgTCw5OTcsMTMxOSBDLDk3NywxMzY4LDkxNywxNDA4LDg2NCwxNDA4IEwsNTQ0LDE0MDggQyw0OTEsMTQwOCw0MzEsMTM2OCw0MTEsMTMxOSBMLDM0MSwxMTUyIEwsMzIsMTE1MiBDLDE0LDExNTIsMCwxMTM4LDAsMTEyMCBMLDAsMTA1NiBDLDAsMTAzOCwxNCwxMDI0LDMyLDEwMjQgTCwxMjgsMTAyNCBMLDEyOCw3MiBDLDEyOCwtMzgsMjAwLC0xMjgsMjg4LC0xMjggTCwxMTIwLC0xMjggQywxMjA4LC0xMjgsMTI4MCwtMzQsMTI4MCw3NiBMLDEyODAsMTAyNCBMLDEzNzYsMTAyNCBDLDEzOTQsMTAyNCwxNDA4LDEwMzgsMTQwOCwxMDU2IFpcIlxuXHRcdH0sXG5cdFx0XCJmaWxlX2FsdFwiOiB7XG5cdFx0XHRcImFkdmFuY2VXaWR0aFwiOiAxNTM2LFxuXHRcdFx0XCJjb21tYW5kc1wiOiBcIk0sMTQ2OCwxMTU2IEwsMTE1NiwxNDY4IEMsMTExOSwxNTA1LDEwNDUsMTUzNiw5OTIsMTUzNiBMLDk2LDE1MzYgQyw0MywxNTM2LDAsMTQ5MywwLDE0NDAgTCwwLC0xNjAgQywwLC0yMTMsNDMsLTI1Niw5NiwtMjU2IEwsMTQ0MCwtMjU2IEMsMTQ5MywtMjU2LDE1MzYsLTIxMywxNTM2LC0xNjAgTCwxNTM2LDk5MiBDLDE1MzYsMTA0NSwxNTA1LDExMTksMTQ2OCwxMTU2IE0sMTAyNCwxNDAwIEMsMTA0MSwxMzk0LDEwNTgsMTM4NSwxMDY1LDEzNzggTCwxMzc4LDEwNjUgQywxMzg1LDEwNTgsMTM5NCwxMDQxLDE0MDAsMTAyNCBMLDEwMjQsMTAyNCBNLDE0MDgsLTEyOCBMLDEyOCwtMTI4IEwsMTI4LDE0MDggTCw4OTYsMTQwOCBMLDg5Niw5OTIgQyw4OTYsOTM5LDkzOSw4OTYsOTkyLDg5NiBMLDE0MDgsODk2IFpcIlxuXHRcdH0sXG5cdFx0XCJkb3dubG9hZF9hbHRcIjoge1xuXHRcdFx0XCJhZHZhbmNlV2lkdGhcIjogMTY2NCxcblx0XHRcdFwiY29tbWFuZHNcIjogXCJNLDEyODAsMTkyIEMsMTI4MCwxNTcsMTI1MSwxMjgsMTIxNiwxMjggQywxMTgxLDEyOCwxMTUyLDE1NywxMTUyLDE5MiBDLDExNTIsMjI3LDExODEsMjU2LDEyMTYsMjU2IEMsMTI1MSwyNTYsMTI4MCwyMjcsMTI4MCwxOTIgTSwxNTM2LDE5MiBDLDE1MzYsMTU3LDE1MDcsMTI4LDE0NzIsMTI4IEMsMTQzNywxMjgsMTQwOCwxNTcsMTQwOCwxOTIgQywxNDA4LDIyNywxNDM3LDI1NiwxNDcyLDI1NiBDLDE1MDcsMjU2LDE1MzYsMjI3LDE1MzYsMTkyIE0sMTY2NCw0MTYgQywxNjY0LDQ2OSwxNjIxLDUxMiwxNTY4LDUxMiBMLDExMDQsNTEyIEwsOTY4LDM3NiBDLDkzMSwzNDAsODgzLDMyMCw4MzIsMzIwIEMsNzgxLDMyMCw3MzMsMzQwLDY5NiwzNzYgTCw1NjEsNTEyIEwsOTYsNTEyIEMsNDMsNTEyLDAsNDY5LDAsNDE2IEwsMCw5NiBDLDAsNDMsNDMsMCw5NiwwIEwsMTU2OCwwIEMsMTYyMSwwLDE2NjQsNDMsMTY2NCw5NiBNLDEzMzksOTg1IEMsMTMyOSwxMDA4LDEzMDYsMTAyNCwxMjgwLDEwMjQgTCwxMDI0LDEwMjQgTCwxMDI0LDE0NzIgQywxMDI0LDE1MDcsOTk1LDE1MzYsOTYwLDE1MzYgTCw3MDQsMTUzNiBDLDY2OSwxNTM2LDY0MCwxNTA3LDY0MCwxNDcyIEwsNjQwLDEwMjQgTCwzODQsMTAyNCBDLDM1OCwxMDI0LDMzNSwxMDA4LDMyNSw5ODUgQywzMTUsOTYxLDMyMCw5MzMsMzM5LDkxNSBMLDc4Nyw0NjcgQyw3OTksNDU0LDgxNiw0NDgsODMyLDQ0OCBDLDg0OCw0NDgsODY1LDQ1NCw4NzcsNDY3IEwsMTMyNSw5MTUgQywxMzQ0LDkzMywxMzQ5LDk2MSwxMzM5LDk4NSBaXCJcblx0XHR9LFxuXHRcdFwicmVwZWF0XCI6IHtcblx0XHRcdFwiYWR2YW5jZVdpZHRoXCI6IDE1MzYsXG5cdFx0XHRcImNvbW1hbmRzXCI6IFwiTSwxNTM2LDEyODAgQywxNTM2LDEzMDYsMTUyMCwxMzI5LDE0OTcsMTMzOSBDLDE0NzMsMTM0OSwxNDQ1LDEzNDQsMTQyNywxMzI1IEwsMTI5NywxMTk2IEMsMTE1NiwxMzI5LDk2NSwxNDA4LDc2OCwxNDA4IEMsMzQ1LDE0MDgsMCwxMDYzLDAsNjQwIEMsMCwyMTcsMzQ1LC0xMjgsNzY4LC0xMjggQyw5OTcsLTEyOCwxMjEzLC0yNywxMzU5LDE0OSBDLDEzNjksMTYyLDEzNjksMTgxLDEzNTcsMTkyIEwsMTIyMCwzMzAgQywxMjEzLDMzNiwxMjA0LDMzOSwxMTk1LDMzOSBDLDExODYsMzM4LDExNzcsMzM0LDExNzIsMzI3IEMsMTA3NCwyMDAsOTI3LDEyOCw3NjgsMTI4IEMsNDg2LDEyOCwyNTYsMzU4LDI1Niw2NDAgQywyNTYsOTIyLDQ4NiwxMTUyLDc2OCwxMTUyIEMsODk5LDExNTIsMTAyMywxMTAyLDExMTcsMTAxNSBMLDk3OSw4NzcgQyw5NjAsODU5LDk1NSw4MzEsOTY1LDgwOCBDLDk3NSw3ODQsOTk4LDc2OCwxMDI0LDc2OCBMLDE0NzIsNzY4IEMsMTUwNyw3NjgsMTUzNiw3OTcsMTUzNiw4MzIgWlwiXG5cdFx0fSxcblx0XHRcInBlbmNpbFwiOiB7XG5cdFx0XHRcImFkdmFuY2VXaWR0aFwiOiAxNTM2LFxuXHRcdFx0XCJjb21tYW5kc1wiOiBcIk0sMzYzLDAgTCwyNTYsMCBMLDI1NiwxMjggTCwxMjgsMTI4IEwsMTI4LDIzNSBMLDIxOSwzMjYgTCw0NTQsOTEgTSw4ODYsOTI4IEMsODg2LDkyMiw4ODQsOTE2LDg3OSw5MTEgTCwzMzcsMzY5IEMsMzMyLDM2NCwzMjYsMzYyLDMyMCwzNjIgQywzMDcsMzYyLDI5OCwzNzEsMjk4LDM4NCBDLDI5OCwzOTAsMzAwLDM5NiwzMDUsNDAxIEwsODQ3LDk0MyBDLDg1Miw5NDgsODU4LDk1MCw4NjQsOTUwIEMsODc3LDk1MCw4ODYsOTQxLDg4Niw5MjggTSw4MzIsMTEyMCBMLDAsMjg4IEwsMCwtMTI4IEwsNDE2LC0xMjggTCwxMjQ4LDcwNCBNLDE1MTUsMTAyNCBDLDE1MTUsMTA1OCwxNTAxLDEwOTEsMTQ3OCwxMTE1IEwsMTI0MywxMzQ5IEMsMTIxOSwxMzczLDExODYsMTM4NywxMTUyLDEzODcgQywxMTE4LDEzODcsMTA4NSwxMzczLDEwNjIsMTM0OSBMLDg5NiwxMTg0IEwsMTMxMiw3NjggTCwxNDc4LDkzNCBDLDE1MDEsOTU3LDE1MTUsOTkwLDE1MTUsMTAyNCBaXCJcblx0XHR9LFxuXHRcdFwiZWRpdFwiOiB7XG5cdFx0XHRcImFkdmFuY2VXaWR0aFwiOiAxNzkyLFxuXHRcdFx0XCJjb21tYW5kc1wiOiBcIk0sODg4LDM1MiBMLDgzMiwzNTIgTCw4MzIsNDQ4IEwsNzM2LDQ0OCBMLDczNiw1MDQgTCw4NTIsNjIwIEwsMTAwNCw0NjggTSwxMzI4LDEwNzIgQywxMzM3LDEwNjMsMTMzNiwxMDQ4LDEzMjcsMTAzOSBMLDk3Nyw2ODkgQyw5NjgsNjgwLDk1Myw2NzksOTQ0LDY4OCBDLDkzNSw2OTcsOTM2LDcxMiw5NDUsNzIxIEwsMTI5NSwxMDcxIEMsMTMwNCwxMDgwLDEzMTksMTA4MSwxMzI4LDEwNzIgTSwxNDA4LDQ3OCBDLDE0MDgsNDkxLDE0MDAsNTAyLDEzODgsNTA3IEMsMTM3Niw1MTIsMTM2Myw1MTAsMTM1Myw1MDAgTCwxMjg5LDQzNiBDLDEyODMsNDMwLDEyODAsNDIyLDEyODAsNDE0IEwsMTI4MCwyODggQywxMjgwLDIwMCwxMjA4LDEyOCwxMTIwLDEyOCBMLDI4OCwxMjggQywyMDAsMTI4LDEyOCwyMDAsMTI4LDI4OCBMLDEyOCwxMTIwIEMsMTI4LDEyMDgsMjAwLDEyODAsMjg4LDEyODAgTCwxMTIwLDEyODAgQywxMTM1LDEyODAsMTE1MCwxMjc4LDExNjUsMTI3NCBDLDExNzYsMTI3MCwxMTg4LDEyNzMsMTE5NywxMjgyIEwsMTI0NiwxMzMxIEMsMTI1NCwxMzM5LDEyNTcsMTM0OSwxMjU1LDEzNjAgQywxMjUzLDEzNzAsMTI0NiwxMzc5LDEyMzcsMTM4MyBDLDEyMDAsMTQwMCwxMTYwLDE0MDgsMTEyMCwxNDA4IEwsMjg4LDE0MDggQywxMjksMTQwOCwwLDEyNzksMCwxMTIwIEwsMCwyODggQywwLDEyOSwxMjksMCwyODgsMCBMLDExMjAsMCBDLDEyNzksMCwxNDA4LDEyOSwxNDA4LDI4OCBNLDEzMTIsMTIxNiBMLDY0MCw1NDQgTCw2NDAsMjU2IEwsOTI4LDI1NiBMLDE2MDAsOTI4IE0sMTc1NiwxMDg0IEMsMTc5MywxMTIxLDE3OTMsMTE4MywxNzU2LDEyMjAgTCwxNjA0LDEzNzIgQywxNTY3LDE0MDksMTUwNSwxNDA5LDE0NjgsMTM3MiBMLDEzNzYsMTI4MCBMLDE2NjQsOTkyIEwsMTc1NiwxMDg0IFpcIlxuXHRcdH0sXG5cdFx0XCJwbGF5XCI6IHtcblx0XHRcdFwiYWR2YW5jZVdpZHRoXCI6IDE0MDgsXG5cdFx0XHRcImNvbW1hbmRzXCI6IFwiTSwxMzg0LDYwOSBDLDE0MTUsNjI2LDE0MTUsNjU0LDEzODQsNjcxIEwsNTYsMTQwOSBDLDI1LDE0MjYsMCwxNDExLDAsMTM3NiBMLDAsLTk2IEMsMCwtMTMxLDI1LC0xNDYsNTYsLTEyOSBaXCJcblx0XHR9LFxuXHRcdFwicGF1c2VcIjoge1xuXHRcdFx0XCJhZHZhbmNlV2lkdGhcIjogMTUzNixcblx0XHRcdFwiY29tbWFuZHNcIjogXCJNLDE1MzYsMTM0NCBDLDE1MzYsMTM3OSwxNTA3LDE0MDgsMTQ3MiwxNDA4IEwsOTYwLDE0MDggQyw5MjUsMTQwOCw4OTYsMTM3OSw4OTYsMTM0NCBMLDg5NiwtNjQgQyw4OTYsLTk5LDkyNSwtMTI4LDk2MCwtMTI4IEwsMTQ3MiwtMTI4IEMsMTUwNywtMTI4LDE1MzYsLTk5LDE1MzYsLTY0IE0sNjQwLDEzNDQgQyw2NDAsMTM3OSw2MTEsMTQwOCw1NzYsMTQwOCBMLDY0LDE0MDggQywyOSwxNDA4LDAsMTM3OSwwLDEzNDQgTCwwLC02NCBDLDAsLTk5LDI5LC0xMjgsNjQsLTEyOCBMLDU3NiwtMTI4IEMsNjExLC0xMjgsNjQwLC05OSw2NDAsLTY0IFpcIlxuXHRcdH0sXG5cdFx0XCJzdG9wXCI6IHtcblx0XHRcdFwiYWR2YW5jZVdpZHRoXCI6IDE1MzYsXG5cdFx0XHRcImNvbW1hbmRzXCI6IFwiTSwxNTM2LDEzNDQgQywxNTM2LDEzNzksMTUwNywxNDA4LDE0NzIsMTQwOCBMLDY0LDE0MDggQywyOSwxNDA4LDAsMTM3OSwwLDEzNDQgTCwwLC02NCBDLDAsLTk5LDI5LC0xMjgsNjQsLTEyOCBMLDE0NzIsLTEyOCBDLDE1MDcsLTEyOCwxNTM2LC05OSwxNTM2LC02NCBaXCJcblx0XHR9LFxuXHRcdFwicmVzaXplX2Z1bGxcIjoge1xuXHRcdFx0XCJhZHZhbmNlV2lkdGhcIjogMTUzNixcblx0XHRcdFwiY29tbWFuZHNcIjogXCJNLDc1NSw0ODAgQyw3NTUsNDg4LDc1MSw0OTcsNzQ1LDUwMyBMLDYzMSw2MTcgQyw2MjUsNjIzLDYxNiw2MjcsNjA4LDYyNyBDLDYwMCw2MjcsNTkxLDYyMyw1ODUsNjE3IEwsMjUzLDI4NSBMLDEwOSw0MjkgQyw5Nyw0NDEsODEsNDQ4LDY0LDQ0OCBDLDI5LDQ0OCwwLDQxOSwwLDM4NCBMLDAsLTY0IEMsMCwtOTksMjksLTEyOCw2NCwtMTI4IEwsNTEyLC0xMjggQyw1NDcsLTEyOCw1NzYsLTk5LDU3NiwtNjQgQyw1NzYsLTQ3LDU2OSwtMzEsNTU3LC0xOSBMLDQxMywxMjUgTCw3NDUsNDU3IEMsNzUxLDQ2Myw3NTUsNDcyLDc1NSw0ODAgTSwxNTM2LDEzNDQgQywxNTM2LDEzNzksMTUwNywxNDA4LDE0NzIsMTQwOCBMLDEwMjQsMTQwOCBDLDk4OSwxNDA4LDk2MCwxMzc5LDk2MCwxMzQ0IEMsOTYwLDEzMjcsOTY3LDEzMTEsOTc5LDEyOTkgTCwxMTIzLDExNTUgTCw3OTEsODIzIEMsNzg1LDgxNyw3ODEsODA4LDc4MSw4MDAgQyw3ODEsNzkyLDc4NSw3ODMsNzkxLDc3NyBMLDkwNSw2NjMgQyw5MTEsNjU3LDkyMCw2NTMsOTI4LDY1MyBDLDkzNiw2NTMsOTQ1LDY1Nyw5NTEsNjYzIEwsMTI4Myw5OTUgTCwxNDI3LDg1MSBDLDE0MzksODM5LDE0NTUsODMyLDE0NzIsODMyIEMsMTUwNyw4MzIsMTUzNiw4NjEsMTUzNiw4OTYgWlwiXG5cdFx0fSxcblx0XHRcInJlc2l6ZV9zbWFsbFwiOiB7XG5cdFx0XHRcImFkdmFuY2VXaWR0aFwiOiAxNTM2LFxuXHRcdFx0XCJjb21tYW5kc1wiOiBcIk0sNzY4LDU3NiBDLDc2OCw2MTEsNzM5LDY0MCw3MDQsNjQwIEwsMjU2LDY0MCBDLDIyMSw2NDAsMTkyLDYxMSwxOTIsNTc2IEMsMTkyLDU1OSwxOTksNTQzLDIxMSw1MzEgTCwzNTUsMzg3IEwsMjMsNTUgQywxNyw0OSwxMyw0MCwxMywzMiBDLDEzLDI0LDE3LDE1LDIzLDkgTCwxMzcsLTEwNSBDLDE0MywtMTExLDE1MiwtMTE1LDE2MCwtMTE1IEMsMTY4LC0xMTUsMTc3LC0xMTEsMTgzLC0xMDUgTCw1MTUsMjI3IEwsNjU5LDgzIEMsNjcxLDcxLDY4Nyw2NCw3MDQsNjQgQyw3MzksNjQsNzY4LDkzLDc2OCwxMjggTSwxNTIzLDEyNDggQywxNTIzLDEyNTYsMTUxOSwxMjY1LDE1MTMsMTI3MSBMLDEzOTksMTM4NSBDLDEzOTMsMTM5MSwxMzg0LDEzOTUsMTM3NiwxMzk1IEMsMTM2OCwxMzk1LDEzNTksMTM5MSwxMzUzLDEzODUgTCwxMDIxLDEwNTMgTCw4NzcsMTE5NyBDLDg2NSwxMjA5LDg0OSwxMjE2LDgzMiwxMjE2IEMsNzk3LDEyMTYsNzY4LDExODcsNzY4LDExNTIgTCw3NjgsNzA0IEMsNzY4LDY2OSw3OTcsNjQwLDgzMiw2NDAgTCwxMjgwLDY0MCBDLDEzMTUsNjQwLDEzNDQsNjY5LDEzNDQsNzA0IEMsMTM0NCw3MjEsMTMzNyw3MzcsMTMyNSw3NDkgTCwxMTgxLDg5MyBMLDE1MTMsMTIyNSBDLDE1MTksMTIzMSwxNTIzLDEyNDAsMTUyMywxMjQ4IFpcIlxuXHRcdH0sXG5cdFx0XCJleWVfb3BlblwiOiB7XG5cdFx0XHRcImFkdmFuY2VXaWR0aFwiOiAxNzkyLFxuXHRcdFx0XCJjb21tYW5kc1wiOiBcIk0sMTY2NCw1NzYgQywxNDkzLDMxMiwxMjE3LDEyOCw4OTYsMTI4IEMsNTc1LDEyOCwyOTksMzEyLDEyOCw1NzYgQywyMjMsNzIzLDM1Myw4NDksNTA5LDkyOSBDLDQ2OSw4NjEsNDQ4LDc4Myw0NDgsNzA0IEMsNDQ4LDQ1Nyw2NDksMjU2LDg5NiwyNTYgQywxMTQzLDI1NiwxMzQ0LDQ1NywxMzQ0LDcwNCBDLDEzNDQsNzgzLDEzMjMsODYxLDEyODMsOTI5IEMsMTQzOSw4NDksMTU2OSw3MjMsMTY2NCw1NzYgTSw5NDQsOTYwIEMsOTQ0LDkzNCw5MjIsOTEyLDg5Niw5MTIgQyw3ODIsOTEyLDY4OCw4MTgsNjg4LDcwNCBDLDY4OCw2NzgsNjY2LDY1Niw2NDAsNjU2IEMsNjE0LDY1Niw1OTIsNjc4LDU5Miw3MDQgQyw1OTIsODcxLDcyOSwxMDA4LDg5NiwxMDA4IEMsOTIyLDEwMDgsOTQ0LDk4Niw5NDQsOTYwIE0sMTc5Miw1NzYgQywxNzkyLDYwMSwxNzg0LDYyNCwxNzcyLDY0NSBDLDE1ODgsOTQ3LDEyNTEsMTE1Miw4OTYsMTE1MiBDLDU0MSwxMTUyLDIwNCw5NDcsMjAsNjQ1IEMsOCw2MjQsMCw2MDEsMCw1NzYgQywwLDU1MSw4LDUyOCwyMCw1MDcgQywyMDQsMjA1LDU0MSwwLDg5NiwwIEMsMTI1MSwwLDE1ODgsMjA0LDE3NzIsNTA3IEMsMTc4NCw1MjgsMTc5Miw1NTEsMTc5Miw1NzYgWlwiXG5cdFx0fSxcblx0XHRcImV5ZV9jbG9zZVwiOiB7XG5cdFx0XHRcImFkdmFuY2VXaWR0aFwiOiAxNzkyLFxuXHRcdFx0XCJjb21tYW5kc1wiOiBcIk0sNTU1LDIwMSBDLDM3OSwyODAsMjMyLDQxNSwxMjgsNTc2IEMsMjIzLDcyMywzNTMsODQ5LDUwOSw5MjkgQyw0NjksODYxLDQ0OCw3ODMsNDQ4LDcwNCBDLDQ0OCw1NjEsNTE3LDQyNiw2MzMsMzQyIE0sOTQ0LDk2MCBDLDk0NCw5MzQsOTIyLDkxMiw4OTYsOTEyIEMsNzgyLDkxMiw2ODgsODE5LDY4OCw3MDQgQyw2ODgsNjc4LDY2Niw2NTYsNjQwLDY1NiBDLDYxNCw2NTYsNTkyLDY3OCw1OTIsNzA0IEMsNTkyLDg3MSw3MjksMTAwOCw4OTYsMTAwOCBDLDkyMiwxMDA4LDk0NCw5ODYsOTQ0LDk2MCBNLDEzMDcsMTE1MSBDLDEzMDcsMTE2MiwxMzAxLDExNzIsMTI5MSwxMTc4IEMsMTI3MCwxMTkwLDExNzYsMTI0OCwxMTU4LDEyNDggQywxMTQ2LDEyNDgsMTEzNiwxMjQyLDExMzAsMTIzMiBMLDEwNzYsMTEzNSBDLDEwMTcsMTE0Niw5NTYsMTE1Miw4OTYsMTE1MiBDLDUyNywxMTUyLDIxOCw5NDksMjAsNjQ1IEMsNyw2MjUsMCw2MDAsMCw1NzYgQywwLDU1MSw3LDUyNywyMCw1MDcgQywxMzUsMzI3LDI5OCwxNzcsNDkyLDg5IEMsNDgyLDcyLDQ0OCwxOCw0NDgsMiBDLDQ0OCwtMTAsNDU0LC0yMCw0NjQsLTI2IEMsNDg1LC0zOCw1ODAsLTk2LDU5OCwtOTYgQyw2MDksLTk2LDYyMCwtOTAsNjI2LC04MCBMLDY3NSw5IEMsODg2LDM4NiwxMDk1LDc2NSwxMzA2LDExNDIgQywxMzA3LDExNDQsMTMwNywxMTQ5LDEzMDcsMTE1MSBNLDEzNDQsNzA0IEMsMTM0NCw3MzIsMTM0MSw3NjAsMTMzNiw3ODggTCwxMDU2LDI4NiBDLDEyMjksMzUyLDEzNDQsNTE4LDEzNDQsNzA0IE0sMTc5Miw1NzYgQywxNzkyLDYwMiwxNzg1LDYyMywxNzcyLDY0NSBDLDE2OTQsNzc0LDE1NjksODk5LDE0NDUsOTgyIEwsMTM4Miw4NzAgQywxNDk1LDc5MiwxNTkwLDY5MSwxNjY0LDU3NiBDLDE1MDgsMzM0LDEyNjEsMTU3LDk3MCwxMzIgTCw4OTYsMCBDLDExOTcsMCwxNDY3LDEzNywxNjYzLDM2MiBDLDE3MDIsNDA3LDE3NDEsNDU2LDE3NzIsNTA3IEMsMTc4NSw1MjksMTc5Miw1NTAsMTc5Miw1NzYgWlwiXG5cdFx0fSxcblx0XHRcImZvbGRlcl9vcGVuXCI6IHtcblx0XHRcdFwiYWR2YW5jZVdpZHRoXCI6IDE5MjAsXG5cdFx0XHRcImNvbW1hbmRzXCI6IFwiTSwxODc5LDU4NCBDLDE4NzksNjI5LDE4MjgsNjQwLDE3OTIsNjQwIEwsNzA0LDY0MCBDLDYxNiw2NDAsNDk4LDU4Niw0NDAsNTE4IEwsMTA0LDEyMiBDLDg4LDEwNCw3Myw4MCw3Myw1NiBDLDczLDExLDEyNCwwLDE2MCwwIEwsMTI0OCwwIEMsMTMzNiwwLDE0NTQsNTQsMTUxMiwxMjIgTCwxODQ4LDUxOCBDLDE4NjQsNTM2LDE4NzksNTYwLDE4NzksNTg0IE0sMTUzNiw5MjggQywxNTM2LDEwNTEsMTQzNSwxMTUyLDEzMTIsMTE1MiBMLDc2OCwxMTUyIEwsNzY4LDExODQgQyw3NjgsMTMwNyw2NjcsMTQwOCw1NDQsMTQwOCBMLDIyNCwxNDA4IEMsMTAxLDE0MDgsMCwxMzA3LDAsMTE4NCBMLDAsMjI0IEMsMCwyMTYsMSwyMDcsMSwxOTkgTCw2LDIwNSBMLDM0Myw2MDEgQyw0MjQsNjk3LDU3OSw3NjgsNzA0LDc2OCBMLDE1MzYsNzY4IFpcIlxuXHRcdH0sXG5cdFx0XCJzaWduaW5cIjoge1xuXHRcdFx0XCJhZHZhbmNlV2lkdGhcIjogMTUzNixcblx0XHRcdFwiY29tbWFuZHNcIjogXCJNLDExODQsNjQwIEMsMTE4NCw2NTcsMTE3Nyw2NzMsMTE2NSw2ODUgTCw2MjEsMTIyOSBDLDYwOSwxMjQxLDU5MywxMjQ4LDU3NiwxMjQ4IEMsNTQxLDEyNDgsNTEyLDEyMTksNTEyLDExODQgTCw1MTIsODk2IEwsNjQsODk2IEMsMjksODk2LDAsODY3LDAsODMyIEwsMCw0NDggQywwLDQxMywyOSwzODQsNjQsMzg0IEwsNTEyLDM4NCBMLDUxMiw5NiBDLDUxMiw2MSw1NDEsMzIsNTc2LDMyIEMsNTkzLDMyLDYwOSwzOSw2MjEsNTEgTCwxMTY1LDU5NSBDLDExNzcsNjA3LDExODQsNjIzLDExODQsNjQwIE0sMTUzNiw5OTIgQywxNTM2LDExNTEsMTQwNywxMjgwLDEyNDgsMTI4MCBMLDkyOCwxMjgwIEMsODgzLDEyODAsODk2LDEyMTIsODk2LDExODQgQyw4OTYsMTE0Nyw5MzUsMTE1Miw5NjAsMTE1MiBMLDEyNDgsMTE1MiBDLDEzMzYsMTE1MiwxNDA4LDEwODAsMTQwOCw5OTIgTCwxNDA4LDI4OCBDLDE0MDgsMjAwLDEzMzYsMTI4LDEyNDgsMTI4IEwsOTI4LDEyOCBDLDg4MywxMjgsODk2LDYwLDg5NiwzMiBDLDg5NiwxNSw5MTEsMCw5MjgsMCBMLDEyNDgsMCBDLDE0MDcsMCwxNTM2LDEyOSwxNTM2LDI4OCBaXCJcblx0XHR9LFxuXHRcdFwidXBsb2FkX2FsdFwiOiB7XG5cdFx0XHRcImFkdmFuY2VXaWR0aFwiOiAxNjY0LFxuXHRcdFx0XCJjb21tYW5kc1wiOiBcIk0sMTI4MCw2NCBDLDEyODAsMjksMTI1MSwwLDEyMTYsMCBDLDExODEsMCwxMTUyLDI5LDExNTIsNjQgQywxMTUyLDk5LDExODEsMTI4LDEyMTYsMTI4IEMsMTI1MSwxMjgsMTI4MCw5OSwxMjgwLDY0IE0sMTUzNiw2NCBDLDE1MzYsMjksMTUwNywwLDE0NzIsMCBDLDE0MzcsMCwxNDA4LDI5LDE0MDgsNjQgQywxNDA4LDk5LDE0MzcsMTI4LDE0NzIsMTI4IEMsMTUwNywxMjgsMTUzNiw5OSwxNTM2LDY0IE0sMTY2NCwyODggQywxNjY0LDM0MSwxNjIxLDM4NCwxNTY4LDM4NCBMLDExNDEsMzg0IEMsMTExNCwzMTAsMTA0MywyNTYsOTYwLDI1NiBMLDcwNCwyNTYgQyw2MjEsMjU2LDU1MCwzMTAsNTIzLDM4NCBMLDk2LDM4NCBDLDQzLDM4NCwwLDM0MSwwLDI4OCBMLDAsLTMyIEMsMCwtODUsNDMsLTEyOCw5NiwtMTI4IEwsMTU2OCwtMTI4IEMsMTYyMSwtMTI4LDE2NjQsLTg1LDE2NjQsLTMyIE0sMTMzOSw5MzYgQywxMzQ5LDk1OSwxMzQ0LDk4NywxMzI1LDEwMDUgTCw4NzcsMTQ1MyBDLDg2NSwxNDY2LDg0OCwxNDcyLDgzMiwxNDcyIEMsODE2LDE0NzIsNzk5LDE0NjYsNzg3LDE0NTMgTCwzMzksMTAwNSBDLDMyMCw5ODcsMzE1LDk1OSwzMjUsOTM2IEMsMzM1LDkxMiwzNTgsODk2LDM4NCw4OTYgTCw2NDAsODk2IEwsNjQwLDQ0OCBDLDY0MCw0MTMsNjY5LDM4NCw3MDQsMzg0IEwsOTYwLDM4NCBDLDk5NSwzODQsMTAyNCw0MTMsMTAyNCw0NDggTCwxMDI0LDg5NiBMLDEyODAsODk2IEMsMTMwNiw4OTYsMTMyOSw5MTIsMTMzOSw5MzYgWlwiXG5cdFx0fSxcblx0XHRcInNhdmVcIjoge1xuXHRcdFx0XCJhZHZhbmNlV2lkdGhcIjogMTUzNixcblx0XHRcdFwiY29tbWFuZHNcIjogXCJNLDM4NCwwIEwsMzg0LDM4NCBMLDExNTIsMzg0IEwsMTE1MiwwIE0sMTI4MCwwIEwsMTI4MCw0MTYgQywxMjgwLDQ2OSwxMjM3LDUxMiwxMTg0LDUxMiBMLDM1Miw1MTIgQywyOTksNTEyLDI1Niw0NjksMjU2LDQxNiBMLDI1NiwwIEwsMTI4LDAgTCwxMjgsMTI4MCBMLDI1NiwxMjgwIEwsMjU2LDg2NCBDLDI1Niw4MTEsMjk5LDc2OCwzNTIsNzY4IEwsOTI4LDc2OCBDLDk4MSw3NjgsMTAyNCw4MTEsMTAyNCw4NjQgTCwxMDI0LDEyODAgQywxMDQ0LDEyODAsMTA4MywxMjY0LDEwOTcsMTI1MCBMLDEzNzgsOTY5IEMsMTM5MSw5NTYsMTQwOCw5MTUsMTQwOCw4OTYgTCwxNDA4LDAgTSw4OTYsOTI4IEMsODk2LDkxMSw4ODEsODk2LDg2NCw4OTYgTCw2NzIsODk2IEMsNjU1LDg5Niw2NDAsOTExLDY0MCw5MjggTCw2NDAsMTI0OCBDLDY0MCwxMjY1LDY1NSwxMjgwLDY3MiwxMjgwIEwsODY0LDEyODAgQyw4ODEsMTI4MCw4OTYsMTI2NSw4OTYsMTI0OCBMLDg5Niw5MjggTSwxNTM2LDg5NiBDLDE1MzYsOTQ5LDE1MDYsMTAyMiwxNDY4LDEwNjAgTCwxMTg4LDEzNDAgQywxMTUwLDEzNzgsMTA3NywxNDA4LDEwMjQsMTQwOCBMLDk2LDE0MDggQyw0MywxNDA4LDAsMTM2NSwwLDEzMTIgTCwwLC0zMiBDLDAsLTg1LDQzLC0xMjgsOTYsLTEyOCBMLDE0NDAsLTEyOCBDLDE0OTMsLTEyOCwxNTM2LC04NSwxNTM2LC0zMiBaXCJcblx0XHR9LFxuXHRcdFwidW5kb1wiOiB7XG5cdFx0XHRcImFkdmFuY2VXaWR0aFwiOiAxNTM2LFxuXHRcdFx0XCJjb21tYW5kc1wiOiBcIk0sMTUzNiw2NDAgQywxNTM2LDEwNjMsMTE5MSwxNDA4LDc2OCwxNDA4IEMsNTcxLDE0MDgsMzgwLDEzMjksMjM5LDExOTYgTCwxMDksMTMyNSBDLDkxLDEzNDQsNjMsMTM0OSw0MCwxMzM5IEMsMTYsMTMyOSwwLDEzMDYsMCwxMjgwIEwsMCw4MzIgQywwLDc5NywyOSw3NjgsNjQsNzY4IEwsNTEyLDc2OCBDLDUzOCw3NjgsNTYxLDc4NCw1NzEsODA4IEMsNTgxLDgzMSw1NzYsODU5LDU1Nyw4NzcgTCw0MjAsMTAxNSBDLDUxMywxMTAyLDYzNywxMTUyLDc2OCwxMTUyIEMsMTA1MCwxMTUyLDEyODAsOTIyLDEyODAsNjQwIEMsMTI4MCwzNTgsMTA1MCwxMjgsNzY4LDEyOCBDLDYwOSwxMjgsNDYyLDIwMCwzNjQsMzI3IEMsMzU5LDMzNCwzNTAsMzM4LDM0MSwzMzkgQywzMzIsMzM5LDMyMywzMzYsMzE2LDMzMCBMLDE3OSwxOTIgQywxNjgsMTgxLDE2NywxNjIsMTc3LDE0OSBDLDMyMywtMjcsNTM5LC0xMjgsNzY4LC0xMjggQywxMTkxLC0xMjgsMTUzNiwyMTcsMTUzNiw2NDAgWlwiXG5cdFx0fSxcblx0XHRcInBhc3RlXCI6IHtcblx0XHRcdFwiYWR2YW5jZVdpZHRoXCI6IDE3OTIsXG5cdFx0XHRcImNvbW1hbmRzXCI6IFwiTSw3NjgsLTEyOCBMLDc2OCwxMDI0IEwsMTE1MiwxMDI0IEwsMTE1Miw2MDggQywxMTUyLDU1NSwxMTk1LDUxMiwxMjQ4LDUxMiBMLDE2NjQsNTEyIEwsMTY2NCwtMTI4IE0sMTAyNCwxMzEyIEMsMTAyNCwxMjk1LDEwMDksMTI4MCw5OTIsMTI4MCBMLDI4OCwxMjgwIEMsMjcxLDEyODAsMjU2LDEyOTUsMjU2LDEzMTIgTCwyNTYsMTM3NiBDLDI1NiwxMzkzLDI3MSwxNDA4LDI4OCwxNDA4IEwsOTkyLDE0MDggQywxMDA5LDE0MDgsMTAyNCwxMzkzLDEwMjQsMTM3NiBMLDEwMjQsMTMxMiBNLDEyODAsNjQwIEwsMTI4MCw5MzkgTCwxNTc5LDY0MCBNLDE3OTIsNTEyIEMsMTc5Miw1NjUsMTc2Miw2MzgsMTcyNCw2NzYgTCwxMzE2LDEwODQgQywxMzA1LDEwOTUsMTI5MywxMTA0LDEyODAsMTExMiBMLDEyODAsMTQ0MCBDLDEyODAsMTQ5MywxMjM3LDE1MzYsMTE4NCwxNTM2IEwsOTYsMTUzNiBDLDQzLDE1MzYsMCwxNDkzLDAsMTQ0MCBMLDAsOTYgQywwLDQzLDQzLDAsOTYsMCBMLDY0MCwwIEwsNjQwLC0xNjAgQyw2NDAsLTIxMyw2ODMsLTI1Niw3MzYsLTI1NiBMLDE2OTYsLTI1NiBDLDE3NDksLTI1NiwxNzkyLC0yMTMsMTc5MiwtMTYwIFpcIlxuXHRcdH0sXG5cdFx0XCJmb2xkZXJfb3Blbl9hbHRcIjoge1xuXHRcdFx0XCJhZHZhbmNlV2lkdGhcIjogMTkyMCxcblx0XHRcdFwiY29tbWFuZHNcIjogXCJNLDE3ODEsNjA1IEMsMTc4MSw1OTAsMTc3Miw1NzcsMTc2Myw1NjYgTCwxNDY5LDIwMyBDLDE0MzUsMTYxLDEzNjUsMTI4LDEzMTIsMTI4IEwsMjI0LDEyOCBDLDIwMiwxMjgsMTcxLDEzNSwxNzEsMTYzIEMsMTcxLDE3OCwxODAsMTkxLDE4OSwyMDMgTCw0ODMsNTY2IEMsNTE3LDYwNyw1ODcsNjQwLDY0MCw2NDAgTCwxNzI4LDY0MCBDLDE3NTAsNjQwLDE3ODEsNjMzLDE3ODEsNjA1IE0sNjQwLDc2OCBDLDU0OSw3NjgsNDQyLDcxNywzODQsNjQ2IEwsMTI4LDMzMSBMLDEyOCwxMTg0IEMsMTI4LDEyMzcsMTcxLDEyODAsMjI0LDEyODAgTCw1NDQsMTI4MCBDLDU5NywxMjgwLDY0MCwxMjM3LDY0MCwxMTg0IEwsNjQwLDExMjAgQyw2NDAsMTA2Nyw2ODMsMTAyNCw3MzYsMTAyNCBMLDEzMTIsMTAyNCBDLDEzNjUsMTAyNCwxNDA4LDk4MSwxNDA4LDkyOCBMLDE0MDgsNzY4IE0sMTkwOSw2MDUgQywxOTA5LDYyOSwxOTA0LDY1MiwxODk0LDY3MyBDLDE4NjQsNzM3LDE3OTYsNzY4LDE3MjgsNzY4IEwsMTUzNiw3NjggTCwxNTM2LDkyOCBDLDE1MzYsMTA1MSwxNDM1LDExNTIsMTMxMiwxMTUyIEwsNzY4LDExNTIgTCw3NjgsMTE4NCBDLDc2OCwxMzA3LDY2NywxNDA4LDU0NCwxNDA4IEwsMjI0LDE0MDggQywxMDEsMTQwOCwwLDEzMDcsMCwxMTg0IEwsMCwyMjQgQywwLDEwMSwxMDEsMCwyMjQsMCBMLDEzMTIsMCBDLDE0MDIsMCwxNTExLDUyLDE1NjgsMTIyIEwsMTg2Myw0ODUgQywxODkwLDUxOSwxOTA5LDU2MSwxOTA5LDYwNSBaXCJcblx0XHR9XG5cdH1cbn0iLCJcbnZhciBERUZBVUxUX1RJTUVfU0NBTEUgPSA2MDtcblxuLy8gRGltZW5zaW9uc1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdExJTkVfSEVJR0hUOiAyNixcblx0RElBTU9ORF9TSVpFOiAxMCxcblx0TUFSS0VSX1RSQUNLX0hFSUdIVDogNjAsXG5cdHdpZHRoOiA2MDAsXG5cdGhlaWdodDogMTMwLFxuXHRUSU1FTElORV9TQ1JPTExfSEVJR0hUOiAwLFxuXHRMRUZUX1BBTkVfV0lEVEg6IDI1MCxcblx0dGltZV9zY2FsZTogREVGQVVMVF9USU1FX1NDQUxFLCAvLyBudW1iZXIgb2YgcGl4ZWxzIHRvIDEgc2Vjb25kXG4gICAgZGVmYXVsdF9sZW5ndGg6IDIwLCAvLyBzZWNvbmRzXG59O1xuIiwiLy9kZWZhdWx0XG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0Ly8gcGhvdG9zaG9wIGNvbG9yc1xuXHRhOiAnIzM0MzQzNCcsXG5cdGI6ICcjNTM1MzUzJyxcblx0YzogJyNiOGI4YjgnLFxuXHRkOiAnI2Q2ZDZkNicsXG59O1xuXG4vL2tlZXBjdWJlXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy8gcGhvdG9zaG9wIGNvbG9yc1xuICBhOiAnI0ZGRkZGRicsXG4gIGI6ICcjRjBGMEYwJyxcbiAgYzogJyMwMDAwMDAnLFxuICBkOiAnIzBGMEYwRicsXG59O1xuIiwiLypcbiAqIEBhdXRob3IgSm9zaHVhIEtvbyBodHRwOi8vam9zaHVha29vLmNvbVxuICovXG5cbnZhciB1bmRvID0gcmVxdWlyZSgnLi91dGlsX3VuZG8nKSxcblx0RGlzcGF0Y2hlciA9IHJlcXVpcmUoJy4vdXRpbF9kaXNwYXRjaGVyJyksXG5cdFRoZW1lID0gcmVxdWlyZSgnLi90aGVtZScpLFxuXHRVbmRvTWFuYWdlciA9IHVuZG8uVW5kb01hbmFnZXIsXG5cdFVuZG9TdGF0ZSA9IHVuZG8uVW5kb1N0YXRlLFxuXHRTZXR0aW5ncyA9IHJlcXVpcmUoJy4vc2V0dGluZ3MnKSxcblx0dXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyksXG5cdExheWVyQ2FiaW5ldCA9IHJlcXVpcmUoJy4vdmlld19sYXllcl9jYWJpbmV0JyksXG5cdFRpbWVsaW5lUGFuZWwgPSByZXF1aXJlKCcuL3ZpZXdfcGFuZWwnKSxcblx0cGFja2FnZV9qc29uID0gcmVxdWlyZSgnLi4vcGFja2FnZS5qc29uJyksXG5cdEljb25CdXR0b24gPSByZXF1aXJlKCcuL3VpX2ljb25fYnV0dG9uJyksXG5cdHN0eWxlID0gdXRpbHMuc3R5bGUsXG5cdHNhdmVUb0ZpbGUgPSB1dGlscy5zYXZlVG9GaWxlLFxuXHRvcGVuQXMgPSB1dGlscy5vcGVuQXMsXG5cdFNUT1JBR0VfUFJFRklYID0gdXRpbHMuU1RPUkFHRV9QUkVGSVgsXG5cdFNjcm9sbEJhciA9IHJlcXVpcmUoJy4vdWlfc2Nyb2xsYmFyJyksXG5cdERhdGFTdG9yZSA9IHJlcXVpcmUoJy4vdXRpbF9kYXRhc3RvcmUnKVxuXHQ7XG5cbnZhciBaX0lOREVYID0gOTk5O1xuXG5mdW5jdGlvbiBMYXllclByb3AobmFtZSkge1xuXHR0aGlzLm5hbWUgPSBuYW1lO1xuXHR0aGlzLnZhbHVlcyA9IFtdO1xuXG5cdHRoaXMuX3ZhbHVlID0gMDtcblxuXHR0aGlzLl9jb2xvciA9ICcjJyArIChNYXRoLnJhbmRvbSgpICogMHhmZmZmZmYgfCAwKS50b1N0cmluZygxNik7XG5cdC8qXG5cdHRoaXMubWF4XG5cdHRoaXMubWluXG5cdHRoaXMuc3RlcFxuXHQqL1xufVxuXG5mdW5jdGlvbiBUaW1lbGluZXIodGFyZ2V0LCB0YXJnZXRFbCkge1xuXHQvLyBEaXNwYXRjaGVyIGZvciBjb29yZGluYXRpb25cblx0dmFyIGRpc3BhdGNoZXIgPSBuZXcgRGlzcGF0Y2hlcigpO1xuXG5cdC8vIERhdGFcblx0dmFyIGRhdGEgPSBuZXcgRGF0YVN0b3JlKCk7XG5cdHZhciBsYXllcl9zdG9yZSA9IGRhdGEuZ2V0KCdsYXllcnMnKTtcblx0dmFyIGxheWVycyA9IGxheWVyX3N0b3JlLnZhbHVlO1xuXG5cdHdpbmRvdy5fZGF0YSA9IGRhdGE7IC8vIGV4cG9zZSBpdCBmb3IgZGVidWdnaW5nXG5cblx0Ly8gVW5kbyBtYW5hZ2VyXG5cdHZhciB1bmRvX21hbmFnZXIgPSBuZXcgVW5kb01hbmFnZXIoZGlzcGF0Y2hlcik7XG5cblx0Ly8gVmlld3Ncblx0dmFyIHRpbWVsaW5lID0gbmV3IFRpbWVsaW5lUGFuZWwoZGF0YSwgZGlzcGF0Y2hlcik7XG5cdHZhciBsYXllcl9wYW5lbCA9IG5ldyBMYXllckNhYmluZXQoZGF0YSwgZGlzcGF0Y2hlcik7XG5cblx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHQvLyBoYWNrIVxuXHRcdHVuZG9fbWFuYWdlci5zYXZlKG5ldyBVbmRvU3RhdGUoZGF0YSwgJ0xvYWRlZCcpLCB0cnVlKTtcblx0fSk7XG5cblx0ZGlzcGF0Y2hlci5vbigna2V5ZnJhbWUnLCBmdW5jdGlvbihsYXllciwgdmFsdWUpIHtcblx0XHR2YXIgaW5kZXggPSBsYXllcnMuaW5kZXhPZihsYXllcik7XG5cblx0XHR2YXIgdCA9IGRhdGEuZ2V0KCd1aTpjdXJyZW50VGltZScpLnZhbHVlO1xuXHRcdHZhciB2ID0gdXRpbHMuZmluZFRpbWVpbkxheWVyKGxheWVyLCB0KTtcblxuXHRcdC8vIGNvbnNvbGUubG9nKHYsICcuLi5rZXlmcmFtZSBpbmRleCcsIGluZGV4LCB1dGlscy5mb3JtYXRfZnJpZW5kbHlfc2Vjb25kcyh0KSwgdHlwZW9mKHYpKTtcblx0XHQvLyBjb25zb2xlLmxvZygnbGF5ZXInLCBsYXllciwgdmFsdWUpO1xuXG5cdFx0aWYgKHR5cGVvZih2KSA9PT0gJ251bWJlcicpIHtcblx0XHRcdGxheWVyLnZhbHVlcy5zcGxpY2UodiwgMCwge1xuXHRcdFx0XHR0aW1lOiB0LFxuXHRcdFx0XHR2YWx1ZTogdmFsdWUsXG5cdFx0XHRcdF9jb2xvcjogJyMnICsgKE1hdGgucmFuZG9tKCkgKiAweGZmZmZmZiB8IDApLnRvU3RyaW5nKDE2KVxuXHRcdFx0fSk7XG5cblx0XHRcdHVuZG9fbWFuYWdlci5zYXZlKG5ldyBVbmRvU3RhdGUoZGF0YSwgJ0FkZCBLZXlmcmFtZScpKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc29sZS5sb2coJ3JlbW92ZSBmcm9tIGluZGV4Jywgdik7XG5cdFx0XHRsYXllci52YWx1ZXMuc3BsaWNlKHYuaW5kZXgsIDEpO1xuXG5cdFx0XHR1bmRvX21hbmFnZXIuc2F2ZShuZXcgVW5kb1N0YXRlKGRhdGEsICdSZW1vdmUgS2V5ZnJhbWUnKSk7XG5cdFx0fVxuXG5cdFx0cmVwYWludEFsbCgpO1xuXG5cdH0pO1xuXG5cdGRpc3BhdGNoZXIub24oJ2tleWZyYW1lLm1vdmUnLCBmdW5jdGlvbihsYXllciwgdmFsdWUpIHtcblx0XHR1bmRvX21hbmFnZXIuc2F2ZShuZXcgVW5kb1N0YXRlKGRhdGEsICdNb3ZlIEtleWZyYW1lJykpO1xuXHR9KTtcblxuXHQvLyBkaXNwYXRjaGVyLmZpcmUoJ3ZhbHVlLmNoYW5nZScsIGxheWVyLCBtZS52YWx1ZSk7XG5cdGRpc3BhdGNoZXIub24oJ3ZhbHVlLmNoYW5nZScsIGZ1bmN0aW9uKGxheWVyLCB2YWx1ZSwgZG9udF9zYXZlKSB7XG5cdFx0aWYgKGxheWVyLl9tdXRlKSByZXR1cm47XG5cblx0XHR2YXIgdCA9IGRhdGEuZ2V0KCd1aTpjdXJyZW50VGltZScpLnZhbHVlO1xuXHRcdHZhciB2ID0gdXRpbHMuZmluZFRpbWVpbkxheWVyKGxheWVyLCB0KTtcblxuXHRcdC8vIGNvbnNvbGUubG9nKHYsICd2YWx1ZS5jaGFuZ2UnLCBsYXllciwgdmFsdWUsIHV0aWxzLmZvcm1hdF9mcmllbmRseV9zZWNvbmRzKHQpLCB0eXBlb2YodikpO1xuXHRcdGlmICh0eXBlb2YodikgPT09ICdudW1iZXInKSB7XG5cdFx0XHRsYXllci52YWx1ZXMuc3BsaWNlKHYsIDAsIHtcblx0XHRcdFx0dGltZTogdCxcblx0XHRcdFx0dmFsdWU6IHZhbHVlLFxuXHRcdFx0XHRfY29sb3I6ICcjJyArIChNYXRoLnJhbmRvbSgpICogMHhmZmZmZmYgfCAwKS50b1N0cmluZygxNilcblx0XHRcdH0pO1xuXHRcdFx0aWYgKCFkb250X3NhdmUpIHVuZG9fbWFuYWdlci5zYXZlKG5ldyBVbmRvU3RhdGUoZGF0YSwgJ0FkZCB2YWx1ZScpKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0di5vYmplY3QudmFsdWUgPSB2YWx1ZTtcblx0XHRcdGlmICghZG9udF9zYXZlKSB1bmRvX21hbmFnZXIuc2F2ZShuZXcgVW5kb1N0YXRlKGRhdGEsICdVcGRhdGUgdmFsdWUnKSk7XG5cdFx0fVxuXG5cdFx0cmVwYWludEFsbCgpO1xuXHR9KTtcblxuXHRkaXNwYXRjaGVyLm9uKCdhY3Rpb246c29sbycsIGZ1bmN0aW9uKGxheWVyLCBzb2xvKSB7XG5cdFx0bGF5ZXIuX3NvbG8gPSBzb2xvO1xuXG5cdFx0Y29uc29sZS5sb2cobGF5ZXIsIHNvbG8pO1xuXG5cdFx0Ly8gV2hlbiBhIHRyYWNrIGlzIHNvbG8tZWQsIHBsYXliYWNrIG9ubHkgY2hhbmdlcyB2YWx1ZXNcblx0XHQvLyBvZiB0aGF0IGxheWVyLlxuXHR9KTtcblxuXHRkaXNwYXRjaGVyLm9uKCdhY3Rpb246bXV0ZScsIGZ1bmN0aW9uKGxheWVyLCBtdXRlKSB7XG5cdFx0bGF5ZXIuX211dGUgPSBtdXRlO1xuXG5cdFx0Ly8gV2hlbiBhIHRyYWNrIGlzIG11dGUsIHBsYXliYWNrIGRvZXMgbm90IHBsYXlcblx0XHQvLyBmcmFtZXMgb2YgdGhvc2UgbXV0ZWQgbGF5ZXJzLlxuXG5cdFx0Ly8gYWxzbyBmZWVscyBsaWtlIGhpZGRlbiBmZWF0dXJlIGluIHBob3Rvc2hvcFxuXG5cdFx0Ly8gd2hlbiB2YWx1ZXMgYXJlIHVwZGF0ZWQsIGVnLiBmcm9tIHNsaWRlcixcblx0XHQvLyBubyB0d2VlbnMgd2lsbCBiZSBjcmVhdGVkLlxuXHRcdC8vIHdlIGNhbiBkZWNpZGUgYWxzbyB0byBcImxvY2sgaW5cIiBsYXllcnNcblx0XHQvLyBubyBjaGFuZ2VzIHRvIHR3ZWVuIHdpbGwgYmUgbWFkZSBldGMuXG5cdH0pO1xuXG5cdGRpc3BhdGNoZXIub24oJ2Vhc2UnLCBmdW5jdGlvbihsYXllciwgZWFzZV90eXBlKSB7XG5cdFx0dmFyIHQgPSBkYXRhLmdldCgndWk6Y3VycmVudFRpbWUnKS52YWx1ZTtcblx0XHR2YXIgdiA9IHV0aWxzLnRpbWVBdExheWVyKGxheWVyLCB0KTtcblx0XHQvLyBjb25zb2xlLmxvZygnRWFzZSBDaGFuZ2UgPiAnLCBsYXllciwgdmFsdWUsIHYpO1xuXHRcdGlmICh2ICYmIHYuZW50cnkpIHtcblx0XHRcdHYuZW50cnkudHdlZW4gID0gZWFzZV90eXBlO1xuXHRcdH1cblxuXHRcdHVuZG9fbWFuYWdlci5zYXZlKG5ldyBVbmRvU3RhdGUoZGF0YSwgJ0FkZCBFYXNlJykpO1xuXG5cdFx0cmVwYWludEFsbCgpO1xuXHR9KTtcblxuXHR2YXIgc3RhcnRfcGxheSA9IG51bGwsXG5cdFx0cGxheWVkX2Zyb20gPSAwOyAvLyByZXF1aXJlcyBzb21lIG1vcmUgdHdlYWtpbmdcblxuXHRkaXNwYXRjaGVyLm9uKCdjb250cm9scy50b2dnbGVfcGxheScsIGZ1bmN0aW9uKCkge1xuXHRcdGlmIChzdGFydF9wbGF5KSB7XG5cdFx0XHRwYXVzZVBsYXlpbmcoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3RhcnRQbGF5aW5nKCk7XG5cdFx0fVxuXHR9KTtcblxuXHRkaXNwYXRjaGVyLm9uKCdjb250cm9scy5yZXN0YXJ0X3BsYXknLCBmdW5jdGlvbigpIHtcblx0XHRpZiAoIXN0YXJ0X3BsYXkpIHtcblx0XHRcdHN0YXJ0UGxheWluZygpO1xuXHRcdH1cblxuXHRcdHNldEN1cnJlbnRUaW1lKHBsYXllZF9mcm9tKTtcblx0fSk7XG5cblx0ZGlzcGF0Y2hlci5vbignY29udHJvbHMucGxheScsIHN0YXJ0UGxheWluZyk7XG5cdGRpc3BhdGNoZXIub24oJ2NvbnRyb2xzLnBhdXNlJywgcGF1c2VQbGF5aW5nKTtcblxuXHRmdW5jdGlvbiBzdGFydFBsYXlpbmcoKSB7XG5cdFx0Ly8gcGxheWVkX2Zyb20gPSB0aW1lbGluZS5jdXJyZW50X2ZyYW1lO1xuXHRcdHN0YXJ0X3BsYXkgPSBwZXJmb3JtYW5jZS5ub3coKSAtIGRhdGEuZ2V0KCd1aTpjdXJyZW50VGltZScpLnZhbHVlICogMTAwMDtcblx0XHRsYXllcl9wYW5lbC5zZXRDb250cm9sU3RhdHVzKHRydWUpO1xuXHRcdC8vIGRpc3BhdGNoZXIuZmlyZSgnY29udHJvbHMuc3RhdHVzJywgdHJ1ZSk7XG5cdH1cblxuXHRmdW5jdGlvbiBwYXVzZVBsYXlpbmcoKSB7XG5cdFx0c3RhcnRfcGxheSA9IG51bGw7XG5cdFx0bGF5ZXJfcGFuZWwuc2V0Q29udHJvbFN0YXR1cyhmYWxzZSk7XG5cdFx0Ly8gZGlzcGF0Y2hlci5maXJlKCdjb250cm9scy5zdGF0dXMnLCBmYWxzZSk7XG5cdH1cblxuXHRkaXNwYXRjaGVyLm9uKCdjb250cm9scy5zdG9wJywgZnVuY3Rpb24oKSB7XG5cdFx0aWYgKHN0YXJ0X3BsYXkgIT09IG51bGwpIHBhdXNlUGxheWluZygpO1xuXHRcdHNldEN1cnJlbnRUaW1lKDApO1xuXHR9KTtcblxuXHR2YXIgY3VycmVudFRpbWVTdG9yZSA9IGRhdGEuZ2V0KCd1aTpjdXJyZW50VGltZScpO1xuXHRkaXNwYXRjaGVyLm9uKCd0aW1lLnVwZGF0ZScsIHNldEN1cnJlbnRUaW1lKTtcblxuXHRkaXNwYXRjaGVyLm9uKCd1cGRhdGUuc2Nyb2xsVGltZScsIGZ1bmN0aW9uKHYpIHtcblx0XHR2ID0gTWF0aC5tYXgoMCwgdik7XG5cdFx0ZGF0YS5nZXQoJ3VpOnNjcm9sbFRpbWUnKS52YWx1ZSA9IHY7XG5cdFx0cmVwYWludEFsbCgpO1xuXHR9KTtcblxuXG5cdGZ1bmN0aW9uIHNldEN1cnJlbnRUaW1lKHZhbHVlKSB7XG5cdFx0dmFsdWUgPSBNYXRoLm1heCgwLCB2YWx1ZSk7XG5cdFx0Y3VycmVudFRpbWVTdG9yZS52YWx1ZSA9IHZhbHVlO1xuXG5cdFx0aWYgKHN0YXJ0X3BsYXkpIHN0YXJ0X3BsYXkgPSBwZXJmb3JtYW5jZS5ub3coKSAtIHZhbHVlICogMTAwMDtcblx0XHRyZXBhaW50QWxsKCk7XG5cdFx0Ly8gbGF5ZXJfcGFuZWwucmVwYWludChzKTtcblx0fVxuXG5cdGRpc3BhdGNoZXIub24oJ3RhcmdldC5ub3RpZnknLCBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuXHRcdGlmICh0YXJnZXQpIHRhcmdldFtuYW1lXSA9IHZhbHVlO1xuXHR9KTtcblxuXHRkaXNwYXRjaGVyLm9uKCd1cGRhdGUuc2NhbGUnLCBmdW5jdGlvbih2KSB7XG5cdFx0Y29uc29sZS5sb2coJ3JhbmdlJywgdik7XG5cdFx0ZGF0YS5nZXQoJ3VpOnRpbWVTY2FsZScpLnZhbHVlID0gdjtcblxuXHRcdHRpbWVsaW5lLnJlcGFpbnQoKTtcblx0fSk7XG5cblx0Ly8gaGFuZGxlIHVuZG8gLyByZWRvXG5cdGRpc3BhdGNoZXIub24oJ2NvbnRyb2xzLnVuZG8nLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgaGlzdG9yeSA9IHVuZG9fbWFuYWdlci51bmRvKCk7XG5cdFx0ZGF0YS5zZXRKU09OU3RyaW5nKGhpc3Rvcnkuc3RhdGUpO1xuXG5cdFx0dXBkYXRlU3RhdGUoKTtcblx0fSk7XG5cblx0ZGlzcGF0Y2hlci5vbignY29udHJvbHMucmVkbycsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBoaXN0b3J5ID0gdW5kb19tYW5hZ2VyLnJlZG8oKTtcblx0XHRkYXRhLnNldEpTT05TdHJpbmcoaGlzdG9yeS5zdGF0ZSk7XG5cblx0XHR1cGRhdGVTdGF0ZSgpO1xuXHR9KTtcblxuXHQvKlxuXHRcdFBhaW50IFJvdXRpbmVzXG5cdCovXG5cblx0ZnVuY3Rpb24gcGFpbnQoKSB7XG5cdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKHBhaW50KTtcblxuXHRcdGlmIChzdGFydF9wbGF5KSB7XG5cdFx0XHR2YXIgdCA9IChwZXJmb3JtYW5jZS5ub3coKSAtIHN0YXJ0X3BsYXkpIC8gMTAwMDtcblx0XHRcdHNldEN1cnJlbnRUaW1lKHQpO1xuXG5cblx0XHRcdGlmICh0ID4gZGF0YS5nZXQoJ3VpOnRvdGFsVGltZScpLnZhbHVlKSB7XG5cdFx0XHRcdC8vIHNpbXBsZSBsb29wXG5cdFx0XHRcdHN0YXJ0X3BsYXkgPSBwZXJmb3JtYW5jZS5ub3coKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAobmVlZHNSZXNpemUpIHtcblx0XHRcdGRpdi5zdHlsZS53aWR0aCA9IHdpZHRoICsgJ3B4Jztcblx0XHRcdGRpdi5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyAncHgnO1xuXG5cdFx0XHRyZXN0eWxlKGxheWVyX3BhbmVsLmRvbSwgdGltZWxpbmUuZG9tKTtcblxuXHRcdFx0dGltZWxpbmUucmVzaXplKCk7XG5cdFx0XHRyZXBhaW50QWxsKCk7XG5cdFx0XHRuZWVkc1Jlc2l6ZSA9IGZhbHNlO1xuXG5cdFx0XHRkaXNwYXRjaGVyLmZpcmUoJ3Jlc2l6ZScpO1xuXHRcdH1cblxuXHRcdHRpbWVsaW5lLl9wYWludCgpO1xuXHR9XG5cblx0cGFpbnQoKTtcblxuXHQvKlxuXHRcdEVuZCBQYWludCBSb3V0aW5lc1xuXHQqL1xuXG5cdGZ1bmN0aW9uIHNhdmUobmFtZSkge1xuXHRcdGlmICghbmFtZSkgbmFtZSA9ICdhdXRvc2F2ZSc7XG5cblx0XHR2YXIganNvbiA9IGRhdGEuZ2V0SlNPTlN0cmluZygpO1xuXG5cdFx0dHJ5IHtcblx0XHRcdGxvY2FsU3RvcmFnZVtTVE9SQUdFX1BSRUZJWCArIG5hbWVdID0ganNvbjtcblx0XHRcdGRpc3BhdGNoZXIuZmlyZSgnc2F2ZTpkb25lJyk7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0Y29uc29sZS5sb2coJ0Nhbm5vdCBzYXZlJywgbmFtZSwganNvbik7XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gc2F2ZUFzKG5hbWUpIHtcblx0XHRpZiAoIW5hbWUpIG5hbWUgPSBkYXRhLmdldCgnbmFtZScpLnZhbHVlO1xuXHRcdG5hbWUgPSBwcm9tcHQoJ1BpY2sgYSBuYW1lIHRvIHNhdmUgdG8gKGxvY2FsU3RvcmFnZSknLCBuYW1lKTtcblx0XHRpZiAobmFtZSkge1xuXHRcdFx0ZGF0YS5kYXRhLm5hbWUgPSBuYW1lO1xuXHRcdFx0c2F2ZShuYW1lKTtcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBzYXZlU2ltcGx5KCkge1xuXHRcdHZhciBuYW1lID0gZGF0YS5nZXQoJ25hbWUnKS52YWx1ZTtcblx0XHRpZiAobmFtZSkge1xuXHRcdFx0c2F2ZShuYW1lKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c2F2ZUFzKG5hbWUpO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIGV4cG9ydEpTT04oKSB7XG5cdFx0dmFyIGpzb24gPSBkYXRhLmdldEpTT05TdHJpbmcoKTtcblx0XHR2YXIgcmV0ID0gcHJvbXB0KCdIaXQgT0sgdG8gZG93bmxvYWQgb3RoZXJ3aXNlIENvcHkgYW5kIFBhc3RlIEpTT04nLCBqc29uKTtcblxuXHRcdGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGRhdGEuZGF0YSwgbnVsbCwgJ1xcdCcpKTtcblx0XHRpZiAoIXJldCkgcmV0dXJuO1xuXG5cdFx0Ly8gbWFrZSBqc29uIGRvd25sb2FkYWJsZVxuXHRcdGpzb24gPSBkYXRhLmdldEpTT05TdHJpbmcoJ1xcdCcpO1xuXHRcdHZhciBmaWxlTmFtZSA9ICd0aW1lbGluZXItdGVzdCcgKyAnLmpzb24nO1xuXG5cdFx0c2F2ZVRvRmlsZShqc29uLCBmaWxlTmFtZSk7XG5cdH1cblxuXHRmdW5jdGlvbiBsb2FkSlNPTlN0cmluZyhvKSB7XG5cdFx0Ly8gc2hvdWxkIGNhdGNoIGFuZCBjaGVjayBlcnJvcnMgaGVyZVxuXHRcdHZhciBqc29uID0gSlNPTi5wYXJzZShvKTtcblx0XHRsb2FkKGpzb24pO1xuXHR9XG5cblx0ZnVuY3Rpb24gbG9hZChvKSB7XG5cdFx0ZGF0YS5zZXRKU09OKG8pO1xuXHRcdC8vXG5cdFx0aWYgKGRhdGEuZ2V0VmFsdWUoJ3VpJykgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0ZGF0YS5zZXRWYWx1ZSgndWknLCB7XG5cdFx0XHRcdGN1cnJlbnRUaW1lOiAwLFxuXHRcdFx0XHR0b3RhbFRpbWU6IFNldHRpbmdzLmRlZmF1bHRfbGVuZ3RoLFxuXHRcdFx0XHRzY3JvbGxUaW1lOiAwLFxuXHRcdFx0XHR0aW1lU2NhbGU6IFNldHRpbmdzLnRpbWVfc2NhbGVcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdHVuZG9fbWFuYWdlci5jbGVhcigpO1xuXHRcdHVuZG9fbWFuYWdlci5zYXZlKG5ldyBVbmRvU3RhdGUoZGF0YSwgJ0xvYWRlZCcpLCB0cnVlKTtcblxuXHRcdHVwZGF0ZVN0YXRlKCk7XG5cdH1cblxuXHRmdW5jdGlvbiB1cGRhdGVTdGF0ZSgpIHtcblx0XHRsYXllcnMgPSBsYXllcl9zdG9yZS52YWx1ZTsgLy8gRklYTUU6IHN1cHBvcnQgQXJyYXlzXG5cdFx0bGF5ZXJfcGFuZWwuc2V0U3RhdGUobGF5ZXJfc3RvcmUpO1xuXHRcdHRpbWVsaW5lLnNldFN0YXRlKGxheWVyX3N0b3JlKTtcblxuXHRcdHJlcGFpbnRBbGwoKTtcblx0fVxuXG5cdGZ1bmN0aW9uIHJlcGFpbnRBbGwoKSB7XG5cdFx0dmFyIGNvbnRlbnRfaGVpZ2h0ID0gbGF5ZXJzLmxlbmd0aCAqIFNldHRpbmdzLkxJTkVfSEVJR0hUO1xuXHRcdHNjcm9sbGJhci5zZXRMZW5ndGgoU2V0dGluZ3MuVElNRUxJTkVfU0NST0xMX0hFSUdIVCAvIGNvbnRlbnRfaGVpZ2h0KTtcblxuXHRcdGxheWVyX3BhbmVsLnJlcGFpbnQoKTtcblx0XHR0aW1lbGluZS5yZXBhaW50KCk7XG5cdH1cblxuXHRmdW5jdGlvbiBwcm9tcHRJbXBvcnQoKSB7XG5cdFx0dmFyIGpzb24gPSBwcm9tcHQoJ1Bhc3RlIEpTT04gaW4gaGVyZSB0byBMb2FkJyk7XG5cdFx0aWYgKCFqc29uKSByZXR1cm47XG5cdFx0Y29uc29sZS5sb2coJ0xvYWRpbmcuLiAnLCBqc29uKTtcblx0XHRsb2FkSlNPTlN0cmluZyhqc29uKTtcblx0fVxuXG5cdGZ1bmN0aW9uIG9wZW4odGl0bGUpIHtcblx0XHRpZiAodGl0bGUpIHtcblx0XHRcdGxvYWRKU09OU3RyaW5nKGxvY2FsU3RvcmFnZVtTVE9SQUdFX1BSRUZJWCArIHRpdGxlXSk7XG5cdFx0fVxuXHR9XG5cblx0dGhpcy5vcGVuTG9jYWxTYXZlID0gb3BlbjtcblxuXHRkaXNwYXRjaGVyLm9uKCdpbXBvcnQnLCBmdW5jdGlvbigpIHtcblx0XHRwcm9tcHRJbXBvcnQoKTtcblx0fS5iaW5kKHRoaXMpKTtcblxuXHRkaXNwYXRjaGVyLm9uKCduZXcnLCBmdW5jdGlvbigpIHtcblx0XHRkYXRhLmJsYW5rKCk7XG5cdFx0dXBkYXRlU3RhdGUoKTtcblx0fSk7XG5cblx0ZGlzcGF0Y2hlci5vbignb3BlbmZpbGUnLCBmdW5jdGlvbigpIHtcblx0XHRvcGVuQXMoZnVuY3Rpb24oZGF0YSkge1xuXHRcdFx0Ly8gY29uc29sZS5sb2coJ2xvYWRlZCAnICsgZGF0YSk7XG5cdFx0XHRsb2FkSlNPTlN0cmluZyhkYXRhKTtcblx0XHR9LCBkaXYpO1xuXHR9KTtcblxuXHRkaXNwYXRjaGVyLm9uKCdvcGVuJywgb3Blbik7XG5cdGRpc3BhdGNoZXIub24oJ2V4cG9ydCcsIGV4cG9ydEpTT04pO1xuXG5cdGRpc3BhdGNoZXIub24oJ3NhdmUnLCBzYXZlU2ltcGx5KTtcblx0ZGlzcGF0Y2hlci5vbignc2F2ZV9hcycsIHNhdmVBcyk7XG5cblx0Ly8gRXhwb3NlIEFQSVxuXHR0aGlzLnNhdmUgPSBzYXZlO1xuXHR0aGlzLmxvYWQgPSBsb2FkO1xuXG5cdC8qXG5cdFx0U3RhcnQgRE9NIFN0dWZmIChzaG91bGQgc2VwYXJhdGUgZmlsZSlcblx0Ki9cblxuXHR2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGRpdi5zdHlsZS5jc3NUZXh0ID0gJ3Bvc2l0aW9uOiBhYnNvbHV0ZTsnO1xuXHRkaXYuc3R5bGUudG9wID0gJzIycHgnO1xuXG5cdHZhciBwYW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cblx0c3R5bGUocGFuZSwge1xuXHRcdHBvc2l0aW9uOiAnZml4ZWQnLFxuXHRcdHRvcDogJzIwcHgnLFxuXHRcdGxlZnQ6ICcyMHB4Jyxcblx0XHRtYXJnaW46IDAsXG5cdFx0Ym9yZGVyOiAnMXB4IHNvbGlkICcgKyBUaGVtZS5hLFxuXHRcdHBhZGRpbmc6IDAsXG5cdFx0b3ZlcmZsb3c6ICdoaWRkZW4nLFxuXHRcdGJhY2tncm91bmRDb2xvcjogVGhlbWUuYSxcblx0XHRjb2xvcjogVGhlbWUuZCxcblx0XHR6SW5kZXg6IFpfSU5ERVgsXG5cdFx0Zm9udEZhbWlseTogJ21vbm9zcGFjZScsXG5cdFx0Zm9udFNpemU6ICcxMnB4J1xuXHR9KTtcblxuXG5cdHZhciBoZWFkZXJfc3R5bGVzID0ge1xuXHRcdHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuXHRcdHRvcDogJzBweCcsXG5cdFx0d2lkdGg6ICcxMDAlJyxcblx0XHRoZWlnaHQ6ICcyMnB4Jyxcblx0XHRsaW5lSGVpZ2h0OiAnMjJweCcsXG5cdFx0b3ZlcmZsb3c6ICdoaWRkZW4nXG5cdH07XG5cblx0dmFyIGJ1dHRvbl9zdHlsZXMgPSB7XG5cdFx0d2lkdGg6ICcyMHB4Jyxcblx0XHRoZWlnaHQ6ICcyMHB4Jyxcblx0XHRwYWRkaW5nOiAnMnB4Jyxcblx0XHRtYXJnaW5SaWdodDogJzJweCdcblx0fTtcblxuXHR2YXIgcGFuZV90aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRzdHlsZShwYW5lX3RpdGxlLCBoZWFkZXJfc3R5bGVzLCB7XG5cdFx0Ym9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICcgKyBUaGVtZS5iLFxuXHRcdHRleHRBbGlnbjogJ2NlbnRlcidcblx0fSk7XG5cblx0dmFyIHRpdGxlX2JhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0cGFuZV90aXRsZS5hcHBlbmRDaGlsZCh0aXRsZV9iYXIpO1xuXG5cdHRpdGxlX2Jhci5pbm5lckhUTUwgPSAnVGltZWxpbmVyICcgKyBwYWNrYWdlX2pzb24udmVyc2lvbjtcblx0cGFuZV90aXRsZS5hcHBlbmRDaGlsZCh0aXRsZV9iYXIpO1xuXG5cdHZhciB0b3BfcmlnaHRfYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdHN0eWxlKHRvcF9yaWdodF9iYXIsIGhlYWRlcl9zdHlsZXMsIHtcblx0XHR0ZXh0QWxpZ246ICdyaWdodCdcblx0fSk7XG5cblx0cGFuZV90aXRsZS5hcHBlbmRDaGlsZCh0b3BfcmlnaHRfYmFyKTtcblxuXHQvLyByZXNpemUgbWluaW1pemVcblx0Ly8gdmFyIHJlc2l6ZV9zbWFsbCA9IG5ldyBJY29uQnV0dG9uKDEwLCAncmVzaXplX3NtYWxsJywgJ21pbmltaXplJywgZGlzcGF0Y2hlcik7XG5cdC8vIHRvcF9yaWdodF9iYXIuYXBwZW5kQ2hpbGQocmVzaXplX3NtYWxsLmRvbSk7XG5cblx0Ly8gcmVzaXplIGZ1bGxcblx0dmFyIHJlc2l6ZV9mdWxsID0gbmV3IEljb25CdXR0b24oMTAsICdyZXNpemVfZnVsbCcsICdtYXhpbWl6ZScsIGRpc3BhdGNoZXIpO1xuXHRzdHlsZShyZXNpemVfZnVsbC5kb20sIGJ1dHRvbl9zdHlsZXMsIHsgbWFyZ2luUmlnaHQ6ICcycHgnIH0pO1xuXHR0b3BfcmlnaHRfYmFyLmFwcGVuZENoaWxkKHJlc2l6ZV9mdWxsLmRvbSk7XG5cblx0dmFyIHBhbmVfc3RhdHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cblx0dmFyIGZvb3Rlcl9zdHlsZXMgPSB7XG5cdFx0cG9zaXRpb246ICdhYnNvbHV0ZScsXG5cdFx0d2lkdGg6ICcxMDAlJyxcblx0XHRoZWlnaHQ6ICcyMnB4Jyxcblx0XHRsaW5lSGVpZ2h0OiAnMjJweCcsXG5cdFx0Ym90dG9tOiAnMCcsXG5cdFx0Ly8gcGFkZGluZzogJzJweCcsXG5cdFx0YmFja2dyb3VuZDogVGhlbWUuYSxcblx0XHRmb250U2l6ZTogJzExcHgnXG5cdH07XG5cblx0c3R5bGUocGFuZV9zdGF0dXMsIGZvb3Rlcl9zdHlsZXMsIHtcblx0XHRib3JkZXJUb3A6ICcxcHggc29saWQgJyArIFRoZW1lLmIsXG5cdH0pO1xuXG5cdHBhbmUuYXBwZW5kQ2hpbGQoZGl2KTtcblx0Ly9wYW5lLmFwcGVuZENoaWxkKHBhbmVfc3RhdHVzKTtcblx0Ly9wYW5lLmFwcGVuZENoaWxkKHBhbmVfdGl0bGUpO1xuXG5cdHZhciBsYWJlbF9zdGF0dXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdGxhYmVsX3N0YXR1cy50ZXh0Q29udGVudCA9ICdoZWxsbyEnO1xuXHRsYWJlbF9zdGF0dXMuc3R5bGUubWFyZ2luTGVmdCA9ICcxMHB4JztcblxuXHR0aGlzLnNldFN0YXR1cyA9IGZ1bmN0aW9uKHRleHQpIHtcblx0XHRsYWJlbF9zdGF0dXMudGV4dENvbnRlbnQgPSB0ZXh0O1xuXHR9O1xuXG5cdGRpc3BhdGNoZXIub24oJ3N0YXRlOnNhdmUnLCBmdW5jdGlvbihkZXNjcmlwdGlvbikge1xuXHRcdGRpc3BhdGNoZXIuZmlyZSgnc3RhdHVzJywgZGVzY3JpcHRpb24pO1xuXHRcdHNhdmUoJ2F1dG9zYXZlJyk7XG5cdH0pO1xuXG5cdGRpc3BhdGNoZXIub24oJ3N0YXR1cycsIHRoaXMuc2V0U3RhdHVzKTtcblxuXHR2YXIgYm90dG9tX3JpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdHN0eWxlKGJvdHRvbV9yaWdodCwgZm9vdGVyX3N0eWxlcywge1xuXHRcdHRleHRBbGlnbjogJ3JpZ2h0J1xuXHR9KTtcblxuXG5cdC8vIHZhciBidXR0b25fc2F2ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHQvLyBzdHlsZShidXR0b25fc2F2ZSwgYnV0dG9uX3N0eWxlcyk7XG5cdC8vIGJ1dHRvbl9zYXZlLnRleHRDb250ZW50ID0gJ1NhdmUnO1xuXHQvLyBidXR0b25fc2F2ZS5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG5cdC8vIFx0c2F2ZSgpO1xuXHQvLyB9O1xuXG5cdC8vIHZhciBidXR0b25fbG9hZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHQvLyBzdHlsZShidXR0b25fbG9hZCwgYnV0dG9uX3N0eWxlcyk7XG5cdC8vIGJ1dHRvbl9sb2FkLnRleHRDb250ZW50ID0gJ0ltcG9ydCc7XG5cdC8vIGJ1dHRvbl9sb2FkLm9uY2xpY2sgPSB0aGlzLnByb21wdExvYWQ7XG5cblx0Ly8gdmFyIGJ1dHRvbl9vcGVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cdC8vIHN0eWxlKGJ1dHRvbl9vcGVuLCBidXR0b25fc3R5bGVzKTtcblx0Ly8gYnV0dG9uX29wZW4udGV4dENvbnRlbnQgPSAnT3Blbic7XG5cdC8vIGJ1dHRvbl9vcGVuLm9uY2xpY2sgPSB0aGlzLnByb21wdE9wZW47XG5cblxuXHQvLyBib3R0b21fcmlnaHQuYXBwZW5kQ2hpbGQoYnV0dG9uX2xvYWQpO1xuXHQvLyBib3R0b21fcmlnaHQuYXBwZW5kQ2hpbGQoYnV0dG9uX3NhdmUpO1xuXHQvLyBib3R0b21fcmlnaHQuYXBwZW5kQ2hpbGQoYnV0dG9uX29wZW4pO1xuXG5cdHBhbmVfc3RhdHVzLmFwcGVuZENoaWxkKGxhYmVsX3N0YXR1cyk7XG5cdHBhbmVfc3RhdHVzLmFwcGVuZENoaWxkKGJvdHRvbV9yaWdodCk7XG5cblxuXHQvKiovXG5cdC8vIHpvb20gaW5cblx0dmFyIHpvb21faW4gPSBuZXcgSWNvbkJ1dHRvbigxMiwgJ3pvb21faW4nLCAnem9vbSBpbicsIGRpc3BhdGNoZXIpO1xuXHQvLyB6b29tIG91dFxuXHR2YXIgem9vbV9vdXQgPSBuZXcgSWNvbkJ1dHRvbigxMiwgJ3pvb21fb3V0JywgJ3pvb20gb3V0JywgZGlzcGF0Y2hlcik7XG5cdC8vIHNldHRpbmdzXG5cdHZhciBjb2cgPSBuZXcgSWNvbkJ1dHRvbigxMiwgJ2NvZycsICdzZXR0aW5ncycsIGRpc3BhdGNoZXIpO1xuXG5cdC8vIGJvdHRvbV9yaWdodC5hcHBlbmRDaGlsZCh6b29tX2luLmRvbSk7XG5cdC8vIGJvdHRvbV9yaWdodC5hcHBlbmRDaGlsZCh6b29tX291dC5kb20pO1xuXHQvLyBib3R0b21fcmlnaHQuYXBwZW5kQ2hpbGQoY29nLmRvbSk7XG5cblx0Ly8gYWRkIGxheWVyXG5cdHZhciBwbHVzID0gbmV3IEljb25CdXR0b24oMTIsICdwbHVzJywgJ05ldyBMYXllcicsIGRpc3BhdGNoZXIpO1xuXHRwbHVzLm9uQ2xpY2soZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5hbWUgPSBwcm9tcHQoJ0xheWVyIG5hbWU/Jyk7XG5cdFx0YWRkTGF5ZXIobmFtZSk7XG5cblx0XHR1bmRvX21hbmFnZXIuc2F2ZShuZXcgVW5kb1N0YXRlKGRhdGEsICdMYXllciBhZGRlZCcpKTtcblxuXHRcdHJlcGFpbnRBbGwoKTtcblx0fSk7XG5cdHN0eWxlKHBsdXMuZG9tLCBidXR0b25fc3R5bGVzKTtcblx0Ym90dG9tX3JpZ2h0LmFwcGVuZENoaWxkKHBsdXMuZG9tKTtcblxuXG5cdC8vIHRyYXNoXG5cdHZhciB0cmFzaCA9IG5ldyBJY29uQnV0dG9uKDEyLCAndHJhc2gnLCAnRGVsZXRlIHNhdmUnLCBkaXNwYXRjaGVyKTtcblx0dHJhc2gub25DbGljayhmdW5jdGlvbigpIHtcblx0XHR2YXIgbmFtZSA9IGRhdGEuZ2V0KCduYW1lJykudmFsdWU7XG5cdFx0aWYgKG5hbWUgJiYgbG9jYWxTdG9yYWdlW1NUT1JBR0VfUFJFRklYICsgbmFtZV0pIHtcblx0XHRcdHZhciBvayA9IGNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2lzaCB0byBkZWxldGUgJyArIG5hbWUgKyAnPycpO1xuXHRcdFx0aWYgKG9rKSB7XG5cdFx0XHRcdGRlbGV0ZSBsb2NhbFN0b3JhZ2VbU1RPUkFHRV9QUkVGSVggKyBuYW1lXTtcblx0XHRcdFx0ZGlzcGF0Y2hlci5maXJlKCdzdGF0dXMnLCBuYW1lICsgJyBkZWxldGVkJyk7XG5cdFx0XHRcdGRpc3BhdGNoZXIuZmlyZSgnc2F2ZTpkb25lJyk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcblx0c3R5bGUodHJhc2guZG9tLCBidXR0b25fc3R5bGVzLCB7IG1hcmdpblJpZ2h0OiAnMnB4JyB9KTtcblx0Ym90dG9tX3JpZ2h0LmFwcGVuZENoaWxkKHRyYXNoLmRvbSk7XG5cblxuXHQvLyBwYW5lX3N0YXR1cy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnIHwgVE9ETyA8RG9jayBGdWxsIHwgRG9jayBCb3R0b24gfCBTbmFwIFdpbmRvdyBFZGdlcyB8IHpvb20gaW4gfCB6b29tIG91dCB8IFNldHRpbmdzIHwgaGVscD4nKSk7XG5cblx0Lypcblx0XHRcdEVuZCBET00gU3R1ZmZcblx0Ki9cblxuXHR2YXIgZ2hvc3RwYW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGdob3N0cGFuZS5pZCA9ICdnaG9zdHBhbmUnO1xuXHRzdHlsZShnaG9zdHBhbmUsIHtcblx0XHRiYWNrZ3JvdW5kOiAnIzk5OScsXG5cdFx0b3BhY2l0eTogMC4yLFxuXHRcdHBvc2l0aW9uOiAnZml4ZWQnLFxuXHRcdG1hcmdpbjogMCxcblx0XHRwYWRkaW5nOiAwLFxuXHRcdHpJbmRleDogKFpfSU5ERVggLSAxKSxcblx0XHQvLyB0cmFuc2l0aW9uOiAnYWxsIDAuMjVzIGVhc2UtaW4tb3V0Jyxcblx0XHR0cmFuc2l0aW9uUHJvcGVydHk6ICd0b3AsIGxlZnQsIHdpZHRoLCBoZWlnaHQsIG9wYWNpdHknLFxuIFx0XHR0cmFuc2l0aW9uRHVyYXRpb246ICcwLjI1cycsXG5cdFx0dHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uOiAnZWFzZS1pbi1vdXQnXG5cdH0pO1xuXG5cblx0Ly9cblx0Ly8gSGFuZGxlIERPTSBWaWV3c1xuXHQvL1xuXG5cdC8vIFNoYWRvdyBSb290XG5cdHZhciByb290XG5cdGlmKHRhcmdldEVsKSB7XG5cdFx0cm9vdCA9IHRhcmdldEVsXG5cdH0gZWxzZSB7XG5cdFx0cm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RpbWVsaW5lcicpO1xuXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocm9vdCk7XG5cdH1cblx0aWYgKHJvb3QuY3JlYXRlU2hhZG93Um9vdCkgcm9vdCA9IHJvb3QuY3JlYXRlU2hhZG93Um9vdCgpO1xuXG5cdHdpbmRvdy5yID0gcm9vdDtcblxuXHQvLyB2YXIgaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XG5cdC8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcblx0Ly8gcm9vdCA9IGlmcmFtZS5jb250ZW50RG9jdW1lbnQuYm9keTtcblxuXHRyb290LmFwcGVuZENoaWxkKHBhbmUpO1xuXHRyb290LmFwcGVuZENoaWxkKGdob3N0cGFuZSk7XG5cblx0ZGl2LmFwcGVuZENoaWxkKGxheWVyX3BhbmVsLmRvbSk7XG5cdGRpdi5hcHBlbmRDaGlsZCh0aW1lbGluZS5kb20pO1xuXG5cdHZhciBzY3JvbGxiYXIgPSBuZXcgU2Nyb2xsQmFyKDIwMCwgMTApO1xuXHQvL2Rpdi5hcHBlbmRDaGlsZChzY3JvbGxiYXIuZG9tKTtcblxuXHQvLyBwZXJjZW50YWdlc1xuXHRzY3JvbGxiYXIub25TY3JvbGwuZG8oZnVuY3Rpb24odHlwZSwgc2Nyb2xsVG8pIHtcblx0XHRzd2l0Y2godHlwZSkge1xuXHRcdFx0Y2FzZSAnc2Nyb2xsdG8nOlxuXHRcdFx0XHRsYXllcl9wYW5lbC5zY3JvbGxUbyhzY3JvbGxUbyk7XG5cdFx0XHRcdHRpbWVsaW5lLnNjcm9sbFRvKHNjcm9sbFRvKTtcblx0XHRcdFx0YnJlYWs7XG5cdC8vXHRcdGNhc2UgJ3BhZ2V1cCc6XG5cdC8vIFx0XHRcdHNjcm9sbFRvcCAtPSBwYWdlT2Zmc2V0O1xuXHQvLyBcdFx0XHRtZS5kcmF3KCk7XG5cdC8vIFx0XHRcdG1lLnVwZGF0ZVNjcm9sbGJhcigpO1xuXHQvLyBcdFx0XHRicmVhaztcblx0Ly8gXHRcdGNhc2UgJ3BhZ2Vkb3duJzpcblx0Ly8gXHRcdFx0c2Nyb2xsVG9wICs9IHBhZ2VPZmZzZXQ7XG5cdC8vIFx0XHRcdG1lLmRyYXcoKTtcblx0Ly8gXHRcdFx0bWUudXBkYXRlU2Nyb2xsYmFyKCk7XG5cdC8vIFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fSk7XG5cblxuXG5cdC8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgZnVuY3Rpb24oZSkge1xuXHQvLyBcdGNvbnNvbGUubG9nKCdrcCcsIGUpO1xuXHQvLyB9KTtcblx0Ly8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBmdW5jdGlvbihlKSB7XG5cdC8vIFx0aWYgKHVuZG8pIGNvbnNvbGUubG9nKCdVTkRPJyk7XG5cblx0Ly8gXHRjb25zb2xlLmxvZygna2QnLCBlKTtcblx0Ly8gfSk7XG5cblx0Ly8gVE9ETzogS2V5Ym9hcmQgU2hvcnRjdXRzXG5cdC8vIEVzYyAtIFN0b3AgYW5kIHJldmlldyB0byBsYXN0IHBsYXllZCBmcm9tIC8gdG8gdGhlIHN0YXJ0P1xuXHQvLyBTcGFjZSAtIHBsYXkgLyBwYXVzZSBmcm9tIGN1cnJlbnQgcG9zaXRpb25cblx0Ly8gRW50ZXIgLSBwbGF5IGFsbFxuXHQvLyBrIC0ga2V5ZnJhbWVcblxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24oZSkge1xuXHRcdHZhciBwbGF5ID0gZS5rZXlDb2RlID09IDMyOyAvLyBzcGFjZVxuXHRcdHZhciBlbnRlciA9IGUua2V5Q29kZSA9PSAxMzsgLy9cblx0XHR2YXIgdW5kbyA9IGUubWV0YUtleSAmJiBlLmtleUNvZGUgPT0gOTEgJiYgIWUuc2hpZnRLZXk7XG5cblx0XHR2YXIgYWN0aXZlID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcblx0XHQvLyBjb25zb2xlLmxvZyggYWN0aXZlLm5vZGVOYW1lICk7XG5cblx0XHRpZiAoYWN0aXZlLm5vZGVOYW1lLm1hdGNoKC8oSU5QVVR8QlVUVE9OfFNFTEVDVHxUSU1FTElORVIpLykpIHtcblx0XHRcdGFjdGl2ZS5ibHVyKCk7XG5cdFx0fVxuXG5cdFx0aWYgKHBsYXkpIHtcblx0XHRcdGRpc3BhdGNoZXIuZmlyZSgnY29udHJvbHMudG9nZ2xlX3BsYXknKTtcblx0XHR9XG5cdFx0ZWxzZSBpZiAoZW50ZXIpIHtcblx0XHRcdC8vIEZJWE1FOiBSZXR1cm4gc2hvdWxkIHBsYXkgZnJvbSB0aGUgc3RhcnQgb3IgbGFzdCBwbGF5ZWQgZnJvbT9cblx0XHRcdGRpc3BhdGNoZXIuZmlyZSgnY29udHJvbHMucmVzdGFydF9wbGF5Jyk7XG5cdFx0XHQvLyBkaXNwYXRjaGVyLmZpcmUoJ2NvbnRyb2xzLnVuZG8nKTtcblx0XHR9XG5cdFx0ZWxzZSBpZiAoZS5rZXlDb2RlID09IDI3KSB7XG5cdFx0XHQvLyBFc2MgPSBzdG9wLiBGSVhNRTogc2hvdWxkIHJld2luZCBoZWFkIHRvIGxhc3QgcGxheWVkIGZyb20gb3IgTGFzdCBwb2ludGVkIGZyb20/XG5cdFx0XHRkaXNwYXRjaGVyLmZpcmUoJ2NvbnRyb2xzLnBhdXNlJyk7XG5cdFx0fVxuXHRcdGVsc2UgY29uc29sZS5sb2coJ2tleWRvd24nLCBlLmtleUNvZGUpO1xuXHR9KTtcblxuXHR2YXIgbmVlZHNSZXNpemUgPSB0cnVlO1xuXG5cdGZ1bmN0aW9uIHJlc2l6ZSh3aWR0aCwgaGVpZ2h0KSB7XG5cdFx0Ly8gZGF0YS5nZXQoJ3VpOmJvdW5kcycpLnZhbHVlID0ge1xuXHRcdC8vIFx0d2lkdGg6IHdpZHRoLFxuXHRcdC8vIFx0aGVpZ2h0OiBoZWlnaHRcblx0XHQvLyB9O1xuXHRcdC8vIFRPRE86IHJlbW92ZSB1Z2x5IGhhcmRjb2Rlc1xuXHRcdHdpZHRoIC09IDQ7XG5cdFx0aGVpZ2h0IC09IDQ0O1xuXG5cdFx0U2V0dGluZ3Mud2lkdGggPSB3aWR0aCAtIFNldHRpbmdzLkxFRlRfUEFORV9XSURUSDtcblx0XHRTZXR0aW5ncy5oZWlnaHQgPSBoZWlnaHQ7XG5cblx0XHRTZXR0aW5ncy5USU1FTElORV9TQ1JPTExfSEVJR0hUID0gaGVpZ2h0IC0gU2V0dGluZ3MuTUFSS0VSX1RSQUNLX0hFSUdIVDtcblx0XHR2YXIgc2Nyb2xsYWJsZV9oZWlnaHQgPSBTZXR0aW5ncy5USU1FTElORV9TQ1JPTExfSEVJR0hUO1xuXG5cdFx0c2Nyb2xsYmFyLnNldEhlaWdodChzY3JvbGxhYmxlX2hlaWdodCAtIDIpO1xuXHRcdC8vIHNjcm9sbGJhci5zZXRUaHVtYlxuXG5cdFx0c3R5bGUoc2Nyb2xsYmFyLmRvbSwge1xuXHRcdFx0dG9wOiBTZXR0aW5ncy5NQVJLRVJfVFJBQ0tfSEVJR0hUICsgJ3B4Jyxcblx0XHRcdGxlZnQ6ICh3aWR0aCAtIDE2KSArICdweCcsXG5cdFx0fSk7XG5cblx0XHRuZWVkc1Jlc2l6ZSA9IHRydWU7XG5cdH1cblxuXHRmdW5jdGlvbiByZXN0eWxlKGxlZnQsIHJpZ2h0KSB7XG5cdFx0bGVmdC5zdHlsZS5jc3NUZXh0ID0gJ3Bvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogMHB4OyB0b3A6IDBweDsgaGVpZ2h0OiAnICsgU2V0dGluZ3MuaGVpZ2h0ICsgJ3B4Oyc7XG5cdFx0c3R5bGUobGVmdCwge1xuXHRcdFx0Ly8gYmFja2dyb3VuZDogVGhlbWUuYSxcblx0XHRcdG92ZXJmbG93OiAnaGlkZGVuJ1xuXHRcdH0pO1xuXHRcdGxlZnQuc3R5bGUud2lkdGggPSBTZXR0aW5ncy5MRUZUX1BBTkVfV0lEVEggKyAncHgnO1xuXG5cdFx0Ly8gcmlnaHQuc3R5bGUuY3NzVGV4dCA9ICdwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogMHB4Oyc7XG5cdFx0cmlnaHQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuXHRcdHJpZ2h0LnN0eWxlLnRvcCA9ICcwcHgnO1xuXHRcdHJpZ2h0LnN0eWxlLmxlZnQgPSBTZXR0aW5ncy5MRUZUX1BBTkVfV0lEVEggKyAncHgnO1xuXHR9XG5cblx0ZnVuY3Rpb24gYWRkTGF5ZXIobmFtZSkge1xuXHRcdHZhciBsYXllciA9IG5ldyBMYXllclByb3AobmFtZSk7XG5cblx0XHRsYXllcnMgPSBsYXllcl9zdG9yZS52YWx1ZTtcblx0XHRsYXllcnMucHVzaChsYXllcik7XG5cblx0XHRsYXllcl9wYW5lbC5zZXRTdGF0ZShsYXllcl9zdG9yZSk7XG5cdH1cblxuXHR0aGlzLmFkZExheWVyID0gYWRkTGF5ZXI7XG5cblx0dGhpcy5zZXRUYXJnZXQgPSBmdW5jdGlvbih0KSB7XG5cdFx0dGltZWxpbmUgPSB0O1xuXHR9O1xuXG5cdGZ1bmN0aW9uIGdldFZhbHVlUmFuZ2VzKHJhbmdlcywgaW50ZXJ2YWwpIHtcblx0XHRpbnRlcnZhbCA9IGludGVydmFsID8gaW50ZXJ2YWwgOiAwLjE1O1xuXHRcdHJhbmdlcyA9IHJhbmdlcyA/IHJhbmdlcyA6IDI7XG5cblx0XHQvLyBub3Qgb3B0aW1pemVkIVxuXHRcdHZhciB0ID0gZGF0YS5nZXQoJ3VpOmN1cnJlbnRUaW1lJykudmFsdWU7XG5cblx0XHR2YXIgdmFsdWVzID0gW107XG5cblx0XHRmb3IgKHZhciB1ID0gLXJhbmdlczsgdSA8PSByYW5nZXM7IHUrKykge1xuXHRcdFx0Ly8gaWYgKHUgPT0gMCkgY29udGludWU7XG5cdFx0XHR2YXIgbyA9IHt9O1xuXG5cdFx0XHRmb3IgKHZhciBsID0gMDsgbCA8IGxheWVycy5sZW5ndGg7IGwrKykge1xuXHRcdFx0XHR2YXIgbGF5ZXIgPSBsYXllcnNbbF07XG5cdFx0XHRcdHZhciBtID0gdXRpbHMudGltZUF0TGF5ZXIobGF5ZXIsIHQgKyB1ICogaW50ZXJ2YWwpO1xuXHRcdFx0XHRvW2xheWVyLm5hbWVdID0gbS52YWx1ZTtcblx0XHRcdH1cblxuXHRcdFx0dmFsdWVzLnB1c2gobyk7XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gdmFsdWVzO1xuXHR9XG5cblx0dGhpcy5nZXRWYWx1ZXMgPSBnZXRWYWx1ZVJhbmdlcztcblxuXHQoZnVuY3Rpb24gRG9ja2luZ1dpbmRvdygpIHtcblx0XHRcInVzZSBzdHJpY3RcIjtcblxuXHRcdC8vIE1pbmltdW0gcmVzaXphYmxlIGFyZWFcblx0XHR2YXIgbWluV2lkdGggPSAxMDA7XG5cdFx0dmFyIG1pbkhlaWdodCA9IDgwO1xuXG5cdFx0Ly8gVGhyZXNob2xkc1xuXHRcdHZhciBGVUxMU0NSRUVOX01BUkdJTlMgPSAyO1xuXHRcdHZhciBTTkFQX01BUkdJTlMgPSA4O1xuXHRcdHZhciBNQVJHSU5TID0gMjtcblxuXHRcdC8vIEVuZCBvZiB3aGF0J3MgY29uZmlndXJhYmxlLlxuXG5cdFx0dmFyIGNsaWNrZWQgPSBudWxsO1xuXHRcdHZhciBvblJpZ2h0RWRnZSwgb25Cb3R0b21FZGdlLCBvbkxlZnRFZGdlLCBvblRvcEVkZ2U7XG5cblx0XHR2YXIgcHJlU25hcHBlZDtcblxuXHRcdHZhciBiLCB4LCB5O1xuXG5cdFx0dmFyIHJlZHJhdyA9IGZhbHNlO1xuXG5cdFx0Ly8gdmFyIHBhbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFuZScpO1xuXHRcdC8vIHZhciBnaG9zdHBhbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2hvc3RwYW5lJyk7XG5cblx0XHR2YXIgbW91c2VPblRpdGxlID0gZmFsc2U7XG5cdFx0dmFyIHNuYXBUeXBlO1xuXG5cdFx0cGFuZV90aXRsZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBmdW5jdGlvbigpIHtcblx0XHRcdG1vdXNlT25UaXRsZSA9IHRydWU7XG5cdFx0fSk7XG5cblx0XHRwYW5lX3RpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgZnVuY3Rpb24oKSB7XG5cdFx0XHRtb3VzZU9uVGl0bGUgPSBmYWxzZTtcblx0XHR9KTtcblxuXHRcdHJlc2l6ZV9mdWxsLm9uQ2xpY2soZnVuY3Rpb24oKSB7XG5cdFx0XHQvLyBUT09EIHRvZ2dsZSBiYWNrIHRvIHJlc3RvcmVkIHNpemVcblx0XHRcdGlmICghcHJlU25hcHBlZCkgcHJlU25hcHBlZCA9IHtcblx0XHRcdFx0d2lkdGg6IGIud2lkdGgsXG5cdFx0XHRcdGhlaWdodDogYi5oZWlnaHRcblx0XHRcdH07XG5cblx0XHRcdHNuYXBUeXBlID0gJ2Z1bGwtc2NyZWVuJztcblx0XHRcdHJlc2l6ZUVkZ2VzKCk7XG5cdFx0fSk7XG5cblx0XHQvLyBwYW5lX3N0YXR1cy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBmdW5jdGlvbigpIHtcblx0XHQvLyBcdG1vdXNlT25UaXRsZSA9IHRydWU7XG5cdFx0Ly8gfSk7XG5cblx0XHQvLyBwYW5lX3N0YXR1cy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIGZ1bmN0aW9uKCkge1xuXHRcdC8vIFx0bW91c2VPblRpdGxlID0gZmFsc2U7XG5cdFx0Ly8gfSk7XG5cblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiAoc25hcFR5cGUpXG5cdFx0XHRcdHJlc2l6ZUVkZ2VzKCk7XG5cdFx0XHRlbHNlXG5cdFx0XHRcdG5lZWRzUmVzaXplID0gdHJ1ZTtcblx0XHR9KTtcblxuXHRcdC8vIHV0aWxzXG5cdFx0ZnVuY3Rpb24gc2V0Qm91bmRzKGVsZW1lbnQsIHgsIHksIHcsIGgpIHtcblx0XHRcdGVsZW1lbnQuc3R5bGUubGVmdCA9IHggKyAncHgnO1xuXHRcdFx0ZWxlbWVudC5zdHlsZS50b3AgPSB5ICsgJ3B4Jztcblx0XHRcdGVsZW1lbnQuc3R5bGUud2lkdGggPSB3ICsgJ3B4Jztcblx0XHRcdGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gaCArICdweCc7XG5cblx0XHRcdGlmIChlbGVtZW50ID09PSBwYW5lKSB7XG5cdFx0XHRcdHJlc2l6ZSh3LCBoKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBoaW50SGlkZSgpIHtcblx0XHRcdHNldEJvdW5kcyhnaG9zdHBhbmUsIGIubGVmdCwgYi50b3AsIGIud2lkdGgsIGIuaGVpZ2h0KTtcblx0XHRcdGdob3N0cGFuZS5zdHlsZS5vcGFjaXR5ID0gMDtcblx0XHR9XG5cblx0XHRzZXRCb3VuZHMocGFuZSwgMCwgMCwgU2V0dGluZ3Mud2lkdGgsIFNldHRpbmdzLmhlaWdodCk7XG5cdFx0c2V0Qm91bmRzKGdob3N0cGFuZSwgMCwgMCwgU2V0dGluZ3Mud2lkdGgsIFNldHRpbmdzLmhlaWdodCk7XG5cblx0XHQvLyBNb3VzZSBldmVudHNcblx0XHRwYW5lLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG9uTW91c2VEb3duKTtcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdmUpO1xuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvblVwKTtcblxuXHRcdC8vIFRvdWNoIGV2ZW50c1xuXHRcdHBhbmUuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIG9uVG91Y2hEb3duKTtcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBvblRvdWNoTW92ZSk7XG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBvblRvdWNoRW5kKTtcblxuXG5cdFx0ZnVuY3Rpb24gb25Ub3VjaERvd24oZSkge1xuXHRcdFx0b25Eb3duKGUudG91Y2hlc1swXSk7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gb25Ub3VjaE1vdmUoZSkge1xuXHRcdFx0b25Nb3ZlKGUudG91Y2hlc1swXSk7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gb25Ub3VjaEVuZChlKSB7XG5cdFx0XHRpZiAoZS50b3VjaGVzLmxlbmd0aCA9PSAwKSBvblVwKGUuY2hhbmdlZFRvdWNoZXNbMF0pO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIG9uTW91c2VEb3duKGUpIHtcblx0XHRcdG9uRG93bihlKTtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBvbkRvd24oZSkge1xuXHRcdFx0Y2FsYyhlKTtcblxuXHRcdFx0dmFyIGlzUmVzaXppbmcgPSBvblJpZ2h0RWRnZSB8fCBvbkJvdHRvbUVkZ2UgfHwgb25Ub3BFZGdlIHx8IG9uTGVmdEVkZ2U7XG5cdFx0XHR2YXIgaXNNb3ZpbmcgPSAhaXNSZXNpemluZyAmJiBjYW5Nb3ZlKCk7XG5cblx0XHRcdGNsaWNrZWQgPSB7XG5cdFx0XHRcdHg6IHgsXG5cdFx0XHRcdHk6IHksXG5cdFx0XHRcdGN4OiBlLmNsaWVudFgsXG5cdFx0XHRcdGN5OiBlLmNsaWVudFksXG5cdFx0XHRcdHc6IGIud2lkdGgsXG5cdFx0XHRcdGg6IGIuaGVpZ2h0LFxuXHRcdFx0XHRpc1Jlc2l6aW5nOiBpc1Jlc2l6aW5nLFxuXHRcdFx0XHRpc01vdmluZzogaXNNb3ZpbmcsXG5cdFx0XHRcdG9uVG9wRWRnZTogb25Ub3BFZGdlLFxuXHRcdFx0XHRvbkxlZnRFZGdlOiBvbkxlZnRFZGdlLFxuXHRcdFx0XHRvblJpZ2h0RWRnZTogb25SaWdodEVkZ2UsXG5cdFx0XHRcdG9uQm90dG9tRWRnZTogb25Cb3R0b21FZGdlXG5cdFx0XHR9O1xuXG5cdFx0XHRpZiAoaXNSZXNpemluZyB8fCBpc01vdmluZykge1xuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gY2FuTW92ZSgpIHtcblx0XHRcdHJldHVybiBtb3VzZU9uVGl0bGU7XG5cdFx0XHQvLyByZXR1cm4geCA+IDAgJiYgeCA8IGIud2lkdGggJiYgeSA+IDAgJiYgeSA8IGIuaGVpZ2h0XG5cdFx0XHQvLyAmJiB5IDwgMTg7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gY2FsYyhlKSB7XG5cdFx0XHRiID0gcGFuZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRcdHggPSBlLmNsaWVudFggLSBiLmxlZnQ7XG5cdFx0XHR5ID0gZS5jbGllbnRZIC0gYi50b3A7XG5cblx0XHRcdG9uVG9wRWRnZSA9IHkgPCBNQVJHSU5TO1xuXHRcdFx0b25MZWZ0RWRnZSA9IHggPCBNQVJHSU5TO1xuXHRcdFx0b25SaWdodEVkZ2UgPSB4ID49IGIud2lkdGggLSBNQVJHSU5TO1xuXHRcdFx0b25Cb3R0b21FZGdlID0geSA+PSBiLmhlaWdodCAtIE1BUkdJTlM7XG5cdFx0fVxuXG5cdFx0dmFyIGU7IC8vIGN1cnJlbnQgbW91c2Vtb3ZlIGV2ZW50XG5cblx0XHRmdW5jdGlvbiBvbk1vdmUoZWUpIHtcblx0XHRcdGUgPSBlZTtcblx0XHRcdGNhbGMoZSk7XG5cblx0XHRcdHJlZHJhdyA9IHRydWU7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gYW5pbWF0ZSgpIHtcblxuXHRcdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuXG5cdFx0XHRpZiAoIXJlZHJhdykgcmV0dXJuO1xuXG5cdFx0XHRyZWRyYXcgPSBmYWxzZTtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGNoZWNrcygpIHtcblx0XHRcdC8qXG5cdFx0XHR2YXIgcmlnaHRTY3JlZW5FZGdlLCBib3R0b21TY3JlZW5FZGdlO1xuXG5cdFx0XHRyaWdodFNjcmVlbkVkZ2UgPSB3aW5kb3cuaW5uZXJXaWR0aCAtIE1BUkdJTlM7XG5cdFx0XHRib3R0b21TY3JlZW5FZGdlID0gd2luZG93LmlubmVySGVpZ2h0IC0gTUFSR0lOUztcblxuXHRcdFx0Ly8gRWRnZSBDaGVja2luZ3Ncblx0XHRcdC8vIGhpbnRGdWxsKCk7XG5cdFx0XHRpZiAoYi50b3AgPCBGVUxMU0NSRUVOX01BUkdJTlMgfHwgYi5sZWZ0IDwgRlVMTFNDUkVFTl9NQVJHSU5TIHx8IGIucmlnaHQgPiB3aW5kb3cuaW5uZXJXaWR0aCAtIEZVTExTQ1JFRU5fTUFSR0lOUyB8fCBiLmJvdHRvbSA+IHdpbmRvdy5pbm5lckhlaWdodCAtIEZVTExTQ1JFRU5fTUFSR0lOUylcblx0XHRcdFx0cmV0dXJuICdmdWxsLXNjcmVlbic7XG5cblx0XHRcdC8vIGhpbnRUb3AoKTtcblx0XHRcdGlmIChiLnRvcCA8IE1BUkdJTlMpIHJldHVybiAnc25hcC10b3AtZWRnZSc7XG5cblx0XHRcdC8vIGhpbnRMZWZ0KCk7XG5cdFx0XHRpZiAoYi5sZWZ0IDwgTUFSR0lOUykgcmV0dXJuICdzbmFwLWxlZnQtZWRnZSc7XG5cblx0XHRcdC8vIGhpbnRSaWdodCgpO1xuXHRcdFx0aWYgKGIucmlnaHQgPiByaWdodFNjcmVlbkVkZ2UpIHJldHVybiAnc25hcC1yaWdodC1lZGdlJztcblxuXHRcdFx0Ly8gaGludEJvdHRvbSgpO1xuXHRcdFx0aWYgKGIuYm90dG9tID4gYm90dG9tU2NyZWVuRWRnZSkgcmV0dXJuICdzbmFwLWJvdHRvbS1lZGdlJztcblx0XHRcdCovXG5cblx0XHRcdGlmIChlLmNsaWVudFkgPCBGVUxMU0NSRUVOX01BUkdJTlMpIHJldHVybiAnZnVsbC1zY3JlZW4nO1xuXG5cdFx0XHRpZiAoZS5jbGllbnRZIDwgU05BUF9NQVJHSU5TKSByZXR1cm4gJ3NuYXAtdG9wLWVkZ2UnO1xuXG5cdFx0XHQvLyBoaW50TGVmdCgpO1xuXHRcdFx0aWYgKGUuY2xpZW50WCA8IFNOQVBfTUFSR0lOUykgcmV0dXJuICdzbmFwLWxlZnQtZWRnZSc7XG5cblx0XHRcdC8vIGhpbnRSaWdodCgpO1xuXHRcdFx0aWYgKHdpbmRvdy5pbm5lcldpZHRoIC0gZS5jbGllbnRYIDwgU05BUF9NQVJHSU5TKSByZXR1cm4gJ3NuYXAtcmlnaHQtZWRnZSc7XG5cblx0XHRcdC8vIGhpbnRCb3R0b20oKTtcblx0XHRcdGlmICh3aW5kb3cuaW5uZXJIZWlnaHQtIGUuY2xpZW50WSA8IFNOQVBfTUFSR0lOUykgcmV0dXJuICdzbmFwLWJvdHRvbS1lZGdlJztcblxuXHRcdH1cblxuXHRcdGFuaW1hdGUoKTtcblxuXHRcdGZ1bmN0aW9uIHJlc2l6ZUVkZ2VzKCkge1xuXHRcdFx0c3dpdGNoKHNuYXBUeXBlKSB7XG5cdFx0XHRcdGNhc2UgJ2Z1bGwtc2NyZWVuJzpcblx0XHRcdFx0XHQvLyBoaW50RnVsbCgpO1xuXHRcdFx0XHRcdHNldEJvdW5kcyhwYW5lLCAwLCAwLCB3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnc25hcC10b3AtZWRnZSc6XG5cdFx0XHRcdFx0Ly8gaGludFRvcCgpO1xuXHRcdFx0XHRcdHNldEJvdW5kcyhwYW5lLCAwLCAwLCB3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0IC8gMik7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ3NuYXAtbGVmdC1lZGdlJzpcblx0XHRcdFx0XHQvLyBoaW50TGVmdCgpO1xuXHRcdFx0XHRcdHNldEJvdW5kcyhwYW5lLCAwLCAwLCB3aW5kb3cuaW5uZXJXaWR0aCAvIDIsIHdpbmRvdy5pbm5lckhlaWdodCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ3NuYXAtcmlnaHQtZWRnZSc6XG5cdFx0XHRcdFx0c2V0Qm91bmRzKHBhbmUsIHdpbmRvdy5pbm5lcldpZHRoIC8gMiwgMCwgd2luZG93LmlubmVyV2lkdGggLyAyLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdzbmFwLWJvdHRvbS1lZGdlJzpcblx0XHRcdFx0XHRzZXRCb3VuZHMocGFuZSwgMCwgd2luZG93LmlubmVySGVpZ2h0IC8gMiwgd2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCAvIDIpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIG9uVXAoZSkge1xuXHRcdFx0Y2FsYyhlKTtcblxuXHRcdFx0aWYgKGNsaWNrZWQgJiYgY2xpY2tlZC5pc01vdmluZykge1xuXHRcdFx0XHQvLyBTbmFwXG5cdFx0XHRcdHNuYXBUeXBlID0gY2hlY2tzKCk7XG5cdFx0XHRcdGlmIChzbmFwVHlwZSkge1xuXHRcdFx0XHRcdHByZVNuYXBwZWQgPSB7XG5cdFx0XHRcdFx0XHR3aWR0aDogYi53aWR0aCxcblx0XHRcdFx0XHRcdGhlaWdodDogYi5oZWlnaHRcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdHJlc2l6ZUVkZ2VzKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cHJlU25hcHBlZCA9IG51bGw7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRoaW50SGlkZSgpO1xuXG5cdFx0XHR9XG5cblx0XHRcdGNsaWNrZWQgPSBudWxsO1xuXG5cdFx0fVxuXHR9KSgpO1xuXG59XG5cbndpbmRvdy5UaW1lbGluZXIgPSBUaW1lbGluZXI7XG4iLCJ2YXIgaGFuZGxlRHJhZyA9IHJlcXVpcmUoJy4vdXRpbF9oYW5kbGVfZHJhZycpO1xuXG5mdW5jdGlvbiBDYW52YXModywgaCkge1xuXG5cdHZhciBjYW52YXMsIGN0eCwgd2lkdGgsIGhlaWdodCwgZHByO1xuXG5cdHZhciBjYW52YXNJdGVtcyA9IFtdO1xuXHR2YXIgY2hpbGQ7XG5cblx0ZnVuY3Rpb24gY3JlYXRlKCkge1xuXHRcdGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuXHRcdGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXHR9XG5cblx0ZnVuY3Rpb24gc2V0U2l6ZSh3LCBoKSB7XG5cdFx0d2lkdGggPSB3O1xuXHRcdGhlaWdodCA9IGg7XG5cdFx0ZHByID0gd2luZG93LmRldmljZVBpeGVsUmF0aW87XG5cdFx0Y2FudmFzLndpZHRoID0gd2lkdGggKiBkcHI7XG5cdFx0Y2FudmFzLmhlaWdodCA9IGhlaWdodCAqIGRwcjtcblx0XHRjYW52YXMuc3R5bGUud2lkdGggPSB3aWR0aCArICdweCc7XG5cdFx0Y2FudmFzLnN0eWxlLmhlaWdodCA9IGhlaWdodCArICdweCc7XG5cblx0XHRpZiAoY2hpbGQpIGNoaWxkLnNldFNpemUodywgaCk7XG5cdH1cblxuXHRmdW5jdGlvbiBwYWludChjdHgpIHtcblx0XHRpZiAoY2hpbGQpIHtcblx0XHRcdGlmICghY2hpbGQucGFpbnQpIGNvbnNvbGUud2FybignaW1wbGVtZW50IHJlcGFpbnQoKScpXG5cdFx0XHRjaGlsZC5wYWludChjdHgpO1xuXHRcdH1cblxuXHRcdHZhciBpdGVtO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgY2FudmFzSXRlbXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGl0ZW0gPSBjYW52YXNJdGVtc1tpXTtcblx0XHRcdGl0ZW0ucGFpbnQoKVxuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIHJlcGFpbnQoKSB7XG5cdFx0cGFpbnQoY3R4KTtcblx0fVxuXG5cdGZ1bmN0aW9uIGFkZChpdGVtKSB7XG5cdFx0Y2FudmFzSXRlbXMucHVzaChpdGVtKVxuXHR9XG5cblx0ZnVuY3Rpb24gcmVtb3ZlKGl0ZW0pIHtcblx0XHRjYW52YXNJdGVtcy5zcGxpY2UoY2FudmFzSXRlbXMuaW5kZXhPZihpdGVtKSwgMSk7XG5cdH1cblxuXHRmdW5jdGlvbiB1c2VzKGMpIHtcblx0XHRjaGlsZCA9IGM7XG5cdFx0Y2hpbGQuYWRkID0gdGhpcy5hZGQ7XG5cdFx0Y2hpbGQucmVtb3ZlID0gdGhpcy5yZW1vdmU7XG5cdH1cblxuXHRjcmVhdGUoKTtcblx0c2V0U2l6ZSh3LCBoKTtcblx0dGhpcy5zZXRTaXplID0gc2V0U2l6ZTtcblx0dGhpcy5yZXBhaW50ID0gcmVwYWludDtcblx0dGhpcy51c2VzID0gdXNlcztcblxuXHR0aGlzLmRvbSA9IGNhbnZhcztcblxuXHRoYW5kbGVEcmFnKGNhbnZhcyxcblx0XHRmdW5jdGlvbiBkb3duKGUpIHtcblx0XHRcdGlmIChjaGlsZC5vbkRvd24pIHsgY2hpbGQub25Eb3duKGUpIH07XG5cdFx0fSxcblx0XHRmdW5jdGlvbiBtb3ZlKGUpIHtcblx0XHRcdGlmIChjaGlsZC5vbk1vdmUpIHsgY2hpbGQub25Nb3ZlKGUpIH07XG5cdFx0fSxcblx0XHRmdW5jdGlvbiB1cChlKSB7XG5cdFx0XHRpZiAoY2hpbGQub25VcCkgeyBjaGlsZC5vblVwKGUpIH07XG5cdFx0fVxuXHRcdC8vIGZ1bmN0aW9uIGhpdChlKSB7XG5cdFx0Ly8gXHRpZiAoY2hpbGQub25IaXQpIHsgY2hpbGQub25IaXQoZSkgfTtcblx0XHQvLyB9XG5cdCk7XG59XG5cblxubW9kdWxlLmV4cG9ydHMgPSBDYW52YXM7XG5cbi8qXG4gKiBVc2FnZTogY2FudmFzID0gbmV3IENhbnZhcyh3aWR0aCwgaGVpZ2h0KTtcbiAqIGNhbnZhcy5yZXNpemUoKTtcbiAqL1xuXG4vLyBjaGlsZHJlblxuLy8gMTogb3ZlcnJpZGUgcmVwYWludFxuLy8gMjogYWRkIG9iamVjdHNcbi8vIENhbnZhcy51c2VzKENhbnZhc0NoaWxkKTtcbi8vIENhbnZhc0l0ZW1cbi8vIHdpZHRoLCBoZWlnaHQsIHgsIHlcbi8vIGFsbG93IERyYWdcbi8vIGFsbG93IENsaWNrXG4vLyBtb3VzZU92ZXJcbi8vIFxuXG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgZGRvcyBvbiAxNS4wNC4xNy5cbiAqL1xuY29uc3QgVGhlbWUgPSByZXF1aXJlKCcuL3RoZW1lJyksXG4gIERvID0gcmVxdWlyZSgnZG8uanMnKSxcbiAgc3R5bGUgPSByZXF1aXJlKCcuL3V0aWxzJykuc3R5bGUsXG4gIHR5cGUgPSByZXF1aXJlKCcuL3V0aWxzJykuaW5wdXRUeXBlLFxuICBmaXJzdERlZmluZWQgPSByZXF1aXJlKCcuL3V0aWxzJykuZmlyc3REZWZpbmVkXG47XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8vIENvbG9yVUlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuZnVuY3Rpb24gQ29sb3JVSSAoY29uZmlnKSB7XG4gIGNvbmZpZyA9IGNvbmZpZyB8fCB7fVxuICBjb25maWcucmVnZXggPSAvXiNbQS1GLGEtZiwwLTldezZ9JC9nXG5cbiAgdmFyIHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG5cbiAgdHlwZShzcGFuLCAnY29sb3InKVxuXG4gIHN0eWxlKHNwYW4sIHtcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgIGZvbnRTaXplOiAnMTBweCcsXG4gICAgcGFkZGluZzogJzFweCcsXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgd2lkdGg6ICc0MHB4JyxcbiAgICBtYXJnaW46IDAsXG4gICAgbWFyZ2luUmlnaHQ6ICcxMHB4JyxcbiAgICBhcHBlYXJhbmNlOiAnbm9uZScsXG4gICAgb3V0bGluZTogJ25vbmUnLFxuICAgIGJvcmRlcjogMCxcbiAgICBiYWNrZ3JvdW5kOiAnbm9uZScsXG4gICAgY29sb3I6IFRoZW1lLmNcbiAgfSk7XG5cbiAgdmFyIG1lID0gdGhpc1xuXG4gIHZhciBzdGF0ZSwgdmFsdWUgPSAwLCB1bmNoYW5nZWRfdmFsdWU7XG5cbiAgdGhpcy5vbkNoYW5nZSA9IG5ldyBEbygpXG5cbiAgc3Bhbi5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbihlKSB7XG4gICAgY29uc29sZS5sb2coJ2NvbG9yIHNwYW4gY2hhbmdlZCcsIHNwYW4udmFsdWUpO1xuICAgIHZhbHVlID0gc3Bhbi52YWx1ZTtcblxuICAgIGZpcmVDaGFuZ2UoKTtcbiAgfSk7XG5cblxuICBmdW5jdGlvbiBmaXJlQ2hhbmdlKCkge1xuICAgIG1lLm9uQ2hhbmdlLmZpcmUodmFsdWUsIHRydWUpO1xuICB9XG5cbiAgdGhpcy5kb20gPSBzcGFuXG5cbiAgdGhpcy5zZXRWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmKHZhbHVlID09IDAgfHwgTnVtYmVyKHZhbHVlKSkge1xuICAgICAgdmFsdWUgPSAnIzAwMDAwMCdcbiAgICB9XG5cbiAgICBpZighY29uZmlnLnJlZ2V4LnRlc3QodmFsdWUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgc3Bhbi52YWx1ZSA9IHZhbHVlXG4gIH1cblxuICB0aGlzLnBhaW50ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHZhbHVlICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgIT09IHNwYW4pIHtcbiAgICAgIHNwYW4udmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gIH07XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb2xvclVJOyIsInZhciBmb250ID0gcmVxdWlyZSgnLi9mb250Lmpzb24nKSxcblx0VGhlbWUgPSByZXF1aXJlKCcuL3RoZW1lJyksXG5cdHN0eWxlID0gcmVxdWlyZSgnLi91dGlscycpLnN0eWxlO1xuXG52YXIgZHA7XG5cbmZ1bmN0aW9uIEljb25CdXR0b24oc2l6ZSwgaWNvbiwgdG9vbHRpcCwgZHApIHtcblx0dmFyIGljb25TdHlsZSA9IHtcblx0XHRwYWRkaW5nOiAnMC4yZW0gMC40ZW0nLFxuXHRcdG1hcmdpbjogJzBlbScsXG5cdFx0YmFja2dyb3VuZDogJ25vbmUnLFxuXHRcdG91dGxpbmU6ICdub25lJyxcblx0XHRmb250U2l6ZTogJzE2cHgnLFxuXHRcdGJvcmRlcjogJ25vbmUnLFxuXHRcdGJvcmRlclJhZGl1czogJzAuMmVtJyxcblx0fTtcblxuXHR2YXIgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cdHN0eWxlKGJ1dHRvbiwgaWNvblN0eWxlKTtcblxuXHR2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG5cdHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuXHRidXR0b24uYXBwZW5kQ2hpbGQoY2FudmFzKTtcblxuXHR0aGlzLmN0eCA9IGN0eDtcblx0dGhpcy5kb20gPSBidXR0b247XG5cdHRoaXMuY2FudmFzID0gY2FudmFzO1xuXG5cdHZhciBtZSA9IHRoaXM7XG5cdHRoaXMuc2l6ZSA9IHNpemU7XG5cdHZhciBkcHIgPSAxO1xuXG5cdHRoaXMucmVzaXplID0gZnVuY3Rpb24oKSB7XG5cdFx0ZHByID0gd2luZG93LmRldmljZVBpeGVsUmF0aW87XG5cdFx0dmFyIGhlaWdodCA9IHNpemU7XG5cblx0XHR2YXIgZ2x5cGggPSBmb250LmZvbnRzW2ljb25dO1xuXG5cdFx0Y2FudmFzLmhlaWdodCA9IGhlaWdodCAqIGRwcjtcblx0XHRjYW52YXMuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgJ3B4JztcblxuXHRcdHZhciBzY2FsZSA9IGhlaWdodCAvIGZvbnQudW5pdHNQZXJFbTtcblx0XHR2YXIgd2lkdGggPSBnbHlwaC5hZHZhbmNlV2lkdGggKiBzY2FsZSArIDAuNSB8IDA7XG5cblx0XHR3aWR0aCArPSAyO1xuXHRcdGhlaWdodCArPSAyO1xuXG5cdFx0Y2FudmFzLndpZHRoID0gd2lkdGggKiBkcHI7XG5cdFx0Y2FudmFzLnN0eWxlLndpZHRoID0gd2lkdGggKyAncHgnO1xuXG5cdFx0Y3R4LmZpbGxTdHlsZSA9IFRoZW1lLmM7XG5cdFx0bWUuZHJhdygpO1xuXHR9O1xuXG5cdGlmIChkcCkgZHAub24oJ3Jlc2l6ZScsIHRoaXMucmVzaXplKTtcblxuXHR0aGlzLnNldFNpemUgPSBmdW5jdGlvbihzKSB7XG5cdFx0c2l6ZSA9IHM7XG5cdFx0dGhpcy5yZXNpemUoKTtcblx0fTtcblxuXHR0aGlzLnNldEljb24gPSBmdW5jdGlvbihpY29uKSB7XG5cdFx0bWUuaWNvbiA9IGljb247XG5cblx0XHRpZiAoIWZvbnQuZm9udHNbaWNvbl0pIGNvbnNvbGUud2FybignRm9udCBpY29uIG5vdCBmb3VuZCEnKTtcblx0XHR0aGlzLnJlc2l6ZSgpO1xuXHR9O1xuXG5cdHRoaXMub25DbGljayA9IGZ1bmN0aW9uKGUpIHtcblx0XHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlKTtcblx0fTtcblxuXHR2YXIgTE9OR19IT0xEX0RVUkFUSU9OID0gNTAwO1xuXHR2YXIgbG9uZ0hvbGRUaW1lcjtcblxuXHR0aGlzLm9uTG9uZ0hvbGQgPSBmdW5jdGlvbihmKSB7XG5cdFx0Ly8gbm90IG1vc3QgZWxhZ2VudCBidXQgb2ggd2VsbHMuXG5cdFx0ZnVuY3Rpb24gc3RhcnRIb2xkKGUpIHtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRsb25nSG9sZFRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYgKGxvbmdIb2xkVGltZXIpIHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnTE9ORyBIT0xELUVEIScpO1xuXHRcdFx0XHRcdGYoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgTE9OR19IT0xEX0RVUkFUSU9OKTtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBjbGVhckxvbmdIb2xkVGltZXIoKSB7XG5cdFx0XHRjbGVhclRpbWVvdXQobG9uZ0hvbGRUaW1lcik7XG5cdFx0fVxuXHRcdFxuXHRcdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBzdGFydEhvbGQpO1xuXHRcdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0Jywgc3RhcnRIb2xkKTtcblx0XHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGNsZWFyTG9uZ0hvbGRUaW1lcik7XG5cdFx0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgY2xlYXJMb25nSG9sZFRpbWVyKTtcblx0XHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBjbGVhckxvbmdIb2xkVGltZXIpO1xuXHR9O1xuXG5cdHRoaXMuc2V0VGlwID0gZnVuY3Rpb24odGlwKSB7XG5cdFx0dG9vbHRpcCA9IHRpcDtcblx0fTtcblxuXHR2YXIgYm9yZGVycyA9IHtcblx0XHRib3JkZXI6ICcxcHggc29saWQgJyArIFRoZW1lLmIsXG5cdFx0Ly8gYm94U2hhZG93OiBUaGVtZS5iICsgJyAxcHggMXB4J1xuXHR9O1xuXG5cdHZhciBub19ib3JkZXJzID0ge1xuXHRcdGJvcmRlcjogJzFweCBzb2xpZCB0cmFuc3BhcmVudCcsXG5cdFx0Ly8gYm94U2hhZG93OiAnbm9uZSdcblx0fTtcblxuXHR2YXIgbm9ybWFsID0gJ25vbmUnOyAvLyBUaGVtZS5iO1xuXHR2YXIgdXAgPSBUaGVtZS5jO1xuXHR2YXIgZG93biA9IFRoZW1lLmI7XG5cblx0YnV0dG9uLnN0eWxlLmJhY2tncm91bmQgPSBub3JtYWw7XG5cdHN0eWxlKGJ1dHRvbiwgbm9fYm9yZGVycyk7XG5cblx0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGZ1bmN0aW9uKCkge1xuXHRcdC8vIGJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kID0gdXA7XG5cdFx0c3R5bGUoYnV0dG9uLCBib3JkZXJzKTtcblx0XHRcblx0XHRjdHguZmlsbFN0eWxlID0gVGhlbWUuZDtcblx0XHQvLyBtZS5kcm9wc2hhZG93ID0gdHJ1ZTtcblx0XHRjdHguc2hhZG93Q29sb3IgPSBUaGVtZS5iO1xuXHRcdGN0eC5zaGFkb3dCbHVyID0gMC41ICogZHByO1xuXHRcdGN0eC5zaGFkb3dPZmZzZXRYID0gMSAqIGRwcjtcblx0XHRjdHguc2hhZG93T2Zmc2V0WSA9IDEgKiBkcHI7XG5cdFx0bWUuZHJhdygpO1xuXG5cdFx0aWYgKHRvb2x0aXAgJiYgZHApIGRwLmZpcmUoJ3N0YXR1cycsICdidXR0b246ICcgKyB0b29sdGlwKTtcblx0fSk7XG5cblx0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGZ1bmN0aW9uKCkge1xuXHRcdGJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kID0gZG93bjtcblx0XHQvLyBjdHguZmlsbFN0eWxlID0gVGhlbWUuYjtcblx0XHQvLyBtZS5kcmF3KCk7XG5cdH0pO1xuXG5cdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZnVuY3Rpb24oKSB7XG5cdFx0Ly8gY3R4LmZpbGxTdHlsZSA9IFRoZW1lLmQ7XG5cdFx0YnV0dG9uLnN0eWxlLmJhY2tncm91bmQgPSBub3JtYWw7XG5cdFx0c3R5bGUoYnV0dG9uLCBib3JkZXJzKTtcblx0XHQvLyBtZS5kcmF3KCk7XG5cdH0pO1xuXG5cdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIGZ1bmN0aW9uKCkge1xuXHRcdC8vIGN0eC5maWxsU3R5bGUgPSBUaGVtZS5jO1xuXHRcdFxuXG5cdFx0YnV0dG9uLnN0eWxlLmJhY2tncm91bmQgPSBub3JtYWw7XG5cdFx0c3R5bGUoYnV0dG9uLCBub19ib3JkZXJzKTtcblx0XHRtZS5kcm9wc2hhZG93ID0gZmFsc2U7XG5cdFx0Y3R4LmZpbGxTdHlsZSA9IFRoZW1lLmM7XG5cdFx0Y3R4LnNoYWRvd0NvbG9yID0gbnVsbDtcblx0XHRjdHguc2hhZG93Qmx1ciA9IDA7XG5cdFx0Y3R4LnNoYWRvd09mZnNldFggPSAwO1xuXHRcdGN0eC5zaGFkb3dPZmZzZXRZID0gMDtcblx0XHRtZS5kcmF3KCk7XG5cdH0pO1xuXG5cdGlmIChpY29uKSB0aGlzLnNldEljb24oaWNvbik7XG59XG5cbkljb25CdXR0b24ucHJvdG90eXBlLkNNRF9NQVAgPSB7XG5cdE06ICdtb3ZlVG8nLFxuXHRMOiAnbGluZVRvJyxcblx0UTogJ3F1YWRyYXRpY0N1cnZlVG8nLFxuXHRDOiAnYmV6aWVyQ3VydmVUbycsXG5cdFo6ICdjbG9zZVBhdGgnXG59O1xuXG5JY29uQnV0dG9uLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24oKSB7XG5cdGlmICghdGhpcy5pY29uKSByZXR1cm47XG5cblx0dmFyIGN0eCA9IHRoaXMuY3R4O1xuXG5cdHZhciBnbHlwaCA9IGZvbnQuZm9udHNbdGhpcy5pY29uXTtcblxuXHR2YXIgaGVpZ2h0ID0gdGhpcy5zaXplO1xuXHR2YXIgZHByID0gd2luZG93LmRldmljZVBpeGVsUmF0aW87XG5cdHZhciBzY2FsZSA9IGhlaWdodCAvIGZvbnQudW5pdHNQZXJFbSAqIGRwcjtcblx0dmFyIHBhdGhfY29tbWFuZHMgPSAgZ2x5cGguY29tbWFuZHMuc3BsaXQoJyAnKTtcblxuXHRjdHguc2F2ZSgpO1xuXHRjdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoICogZHByLCB0aGlzLmNhbnZhcy5oZWlnaHQgKiBkcHIpO1xuXG5cdGlmICh0aGlzLmRyb3BzaGFkb3cpIHtcblx0XHRjdHguc2F2ZSgpO1xuXHRcdGN0eC5maWxsU3R5bGUgPSBUaGVtZS5iO1xuXHRcdGN0eC50cmFuc2xhdGUoMS41ICogZHByLCAxLjUgKiBkcHIpO1xuXHRcdGN0eC5zY2FsZShzY2FsZSwgLXNjYWxlKTtcblx0XHRjdHgudHJhbnNsYXRlKDAgLCAtZm9udC5hc2NlbmRlcik7XG5cdFx0Y3R4LmJlZ2luUGF0aCgpO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDAsIGlsID0gcGF0aF9jb21tYW5kcy5sZW5ndGg7IGkgPCBpbDsgaSsrKSB7XG5cdFx0XHR2YXIgY21kcyA9IHBhdGhfY29tbWFuZHNbaV0uc3BsaXQoJywnKTtcblx0XHRcdHZhciBwYXJhbXMgPSBjbWRzLnNsaWNlKDEpO1xuXG5cdFx0XHRjdHhbdGhpcy5DTURfTUFQW2NtZHNbMF1dXS5hcHBseShjdHgsIHBhcmFtcyk7XG5cdFx0fVxuXHRcdGN0eC5maWxsKCk7XG5cdFx0Y3R4LnJlc3RvcmUoKTtcblx0fVxuXG5cdGN0eC5zY2FsZShzY2FsZSwgLXNjYWxlKTtcblx0Y3R4LnRyYW5zbGF0ZSgwLCAtZm9udC5hc2NlbmRlcik7XG5cdGN0eC5iZWdpblBhdGgoKTtcblxuXHRmb3IgKHZhciBpID0gMCwgaWwgPSBwYXRoX2NvbW1hbmRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHtcblx0XHR2YXIgY21kcyA9IHBhdGhfY29tbWFuZHNbaV0uc3BsaXQoJywnKTtcblx0XHR2YXIgcGFyYW1zID0gY21kcy5zbGljZSgxKTtcblxuXHRcdGN0eFt0aGlzLkNNRF9NQVBbY21kc1swXV1dLmFwcGx5KGN0eCwgcGFyYW1zKTtcblx0fVxuXHRjdHguZmlsbCgpO1xuXHRjdHgucmVzdG9yZSgpO1xuXG5cdC8qXG5cdHZhciB0cmlhbmdsZSA9IGhlaWdodCAvIDMgKiBkcHI7XG5cdGN0eC5zYXZlKCk7XG5cdC8vIGN0eC50cmFuc2xhdGUoZHByICogMiwgMCk7XG5cdC8vIGN0eC5maWxsUmVjdCh0aGlzLmNhbnZhcy53aWR0aCAtIHRyaWFuZ2xlLCB0aGlzLmNhbnZhcy5oZWlnaHQgLSB0cmlhbmdsZSwgdHJpYW5nbGUsIHRyaWFuZ2xlKTtcblx0Y3R4LmJlZ2luUGF0aCgpO1xuXHRjdHgubW92ZVRvKHRoaXMuY2FudmFzLndpZHRoIC0gdHJpYW5nbGUsIHRoaXMuY2FudmFzLmhlaWdodCAtIHRyaWFuZ2xlIC8gMik7XG5cdGN0eC5saW5lVG8odGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCAtIHRyaWFuZ2xlIC8gMik7XG5cdGN0eC5saW5lVG8odGhpcy5jYW52YXMud2lkdGggLSB0cmlhbmdsZSAvIDIsIHRoaXMuY2FudmFzLmhlaWdodCk7XG5cdGN0eC5maWxsKCk7XG5cdGN0eC5yZXN0b3JlKCk7XG5cdCovXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEljb25CdXR0b247IiwidmFyIFRoZW1lID0gcmVxdWlyZSgnLi90aGVtZScpLFxuXHREbyA9IHJlcXVpcmUoJ2RvLmpzJyksXG5cdGhhbmRsZURyYWcgPSByZXF1aXJlKCcuL3V0aWxfaGFuZGxlX2RyYWcnKSxcblx0c3R5bGUgPSByZXF1aXJlKCcuL3V0aWxzJykuc3R5bGUsXG5cdGZpcnN0RGVmaW5lZCA9IHJlcXVpcmUoJy4vdXRpbHMnKS5maXJzdERlZmluZWRcblx0O1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vLyBOdW1iZXJVSVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5mdW5jdGlvbiBOdW1iZXJVSShjb25maWcpIHtcblx0Y29uZmlnID0gY29uZmlnIHx8IHt9O1xuXHR2YXIgbWluID0gY29uZmlnLm1pbiA9PT0gdW5kZWZpbmVkID8gLUluZmluaXR5IDogY29uZmlnLm1pbjtcblxuXHQvLyBjb25maWcueHN0ZXAgYW5kIGNvbmZpZy55c3RlcCBhbGxvdyBjb25maWd1cmluZyBhZGp1c3RtZW50XG5cdC8vIHNwZWVkIGFjcm9zcyBlYWNoIGF4aXMuXG5cdC8vIGNvbmZpZy53aGVlbFN0ZXAgYW5kIGNvbmZpZy53aGVlbFN0ZXBGaW5lIGFsbG93IGNvbmZpZ3VyaW5nXG5cdC8vIGFkanVzdG1lbnQgc3BlZWQgZm9yIG1vdXNld2hlZWwsIGFuZCBtb3VzZXdoZWVsIHdoaWxlIGhvbGRpbmcgPGFsdD5cblxuXHQvLyBJZiBvbmx5IGNvbmZpZy5zdGVwIGlzIHNwZWNpZmllZCwgYWxsIG90aGVyIGFkanVzdG1lbnQgc3BlZWRzXG5cdC8vIGFyZSBzZXQgdG8gdGhlIHNhbWUgdmFsdWUuXG5cdHZhciB4c3RlcCA9IGZpcnN0RGVmaW5lZChjb25maWcueHN0ZXAsIGNvbmZpZy5zdGVwLCAwLjAwMSk7XG5cdHZhciB5c3RlcCA9IGZpcnN0RGVmaW5lZChjb25maWcueXN0ZXAsIGNvbmZpZy5zdGVwLCAwLjEpO1xuXHR2YXIgd2hlZWxTdGVwID0gZmlyc3REZWZpbmVkKGNvbmZpZy53aGVlbFN0ZXAsIHlzdGVwKTtcblx0dmFyIHdoZWVsU3RlcEZpbmUgPSBmaXJzdERlZmluZWQoY29uZmlnLndoZWVsU3RlcEZpbmUsIHhzdGVwKTtcblxuXHR2YXIgcHJlY2lzaW9uID0gY29uZmlnLnByZWNpc2lvbiB8fCAzO1xuXHQvLyBSYW5nZVxuXHQvLyBNYXhcblxuXHR2YXIgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cdC8vIHNwYW4udHlwZSA9ICdudW1iZXInOyAvLyBzcGlubmVyXG5cdFxuXHRzdHlsZShzcGFuLCB7XG5cdFx0dGV4dEFsaWduOiAnY2VudGVyJyxcblx0XHRmb250U2l6ZTogJzEwcHgnLFxuXHRcdHBhZGRpbmc6ICcxcHgnLFxuXHRcdGN1cnNvcjogJ25zLXJlc2l6ZScsXG5cdFx0d2lkdGg6ICc0MHB4Jyxcblx0XHRtYXJnaW46IDAsXG5cdFx0bWFyZ2luUmlnaHQ6ICcxMHB4Jyxcblx0XHRhcHBlYXJhbmNlOiAnbm9uZScsXG5cdFx0b3V0bGluZTogJ25vbmUnLFxuXHRcdGJvcmRlcjogMCxcblx0XHRiYWNrZ3JvdW5kOiAnbm9uZScsXG5cdFx0Ym9yZGVyQm90dG9tOiAnMXB4IGRvdHRlZCAnKyBUaGVtZS5jLFxuXHRcdGNvbG9yOiBUaGVtZS5jXG5cdH0pO1xuXG5cdHZhciBtZSA9IHRoaXM7XG5cdHZhciBzdGF0ZSwgdmFsdWUgPSAwLCB1bmNoYW5nZWRfdmFsdWU7XG5cblx0dGhpcy5vbkNoYW5nZSA9IG5ldyBEbygpO1xuXG5cdHNwYW4uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oZSkge1xuXHRcdGNvbnNvbGUubG9nKCdpbnB1dCBjaGFuZ2VkJywgc3Bhbi52YWx1ZSk7XG5cdFx0dmFsdWUgPSBwYXJzZUZsb2F0KHNwYW4udmFsdWUsIDEwKTtcblxuXHRcdGZpcmVDaGFuZ2UoKTtcblx0fSk7XG5cblx0Ly8gQWxsb3cga2V5ZG93biBwcmVzc2VzIGluIGlucHV0cywgZG9uJ3QgYWxsb3cgcGFyZW50IHRvIGJsb2NrIHRoZW1cblx0c3Bhbi5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24oZSkge1xuXHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdH0pXG5cblx0c3Bhbi5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGZ1bmN0aW9uKGUpIHtcblx0XHRzcGFuLnNldFNlbGVjdGlvblJhbmdlKDAsIHNwYW4udmFsdWUubGVuZ3RoKTtcblx0fSlcblxuXHRzcGFuLmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgZnVuY3Rpb24oZSkge1xuXHRcdC8vIERpc3JlZ2FyZCBwaXhlbC9saW5lL3BhZ2Ugc2Nyb2xsaW5nIGFuZCBqdXN0XG5cdFx0Ly8gdXNlIGV2ZW50IGRpcmVjdGlvbi5cblx0XHR2YXIgaW5jID0gZS5kZWx0YVkgPiAwPyAxIDogLTE7XG5cdFx0aWYoZS5hbHRLZXkpIHtcblx0XHRcdGluYyAqPSB3aGVlbFN0ZXBGaW5lO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpbmMgKj0gd2hlZWxTdGVwO1xuXHRcdH1cblx0XHR2YWx1ZSA9IGNsYW1wKHZhbHVlICsgaW5jKTtcblx0XHRmaXJlQ2hhbmdlKCk7XG5cdH0pXG5cblx0aGFuZGxlRHJhZyhzcGFuLCBvbkRvd24sIG9uTW92ZSwgb25VcCk7XG5cblx0ZnVuY3Rpb24gY2xhbXAodmFsdWUpIHtcblx0XHRyZXR1cm4gTWF0aC5tYXgobWluLCB2YWx1ZSk7XG5cdH1cblxuXHRmdW5jdGlvbiBvblVwKGUpIHtcblx0XHRpZiAoZS5tb3ZlZCkgZmlyZUNoYW5nZSgpO1xuXHRcdGVsc2Uge1xuXHRcdFx0Ly8gc2luZ2xlIGNsaWNrXG5cdFx0XHRzcGFuLmZvY3VzKCk7XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gb25Nb3ZlKGUpIHtcblx0XHR2YXIgZHggPSBlLmR4O1xuXHRcdHZhciBkeSA9IGUuZHk7XG5cdFxuXHRcdHZhbHVlID0gdW5jaGFuZ2VkX3ZhbHVlICsgKGR4ICogeHN0ZXApICsgKGR5ICogLXlzdGVwKTtcblxuXHRcdHZhbHVlID0gY2xhbXAodmFsdWUpO1xuXG5cdFx0Ly8gdmFsdWUgPSArdmFsdWUudG9GaXhlZChwcmVjaXNpb24pOyAvLyBvciB0b0ZpeGVkIHRvUHJlY2lzaW9uXG5cdFx0bWUub25DaGFuZ2UuZmlyZSh2YWx1ZSwgdHJ1ZSk7XG5cdH1cblxuXHRmdW5jdGlvbiBvbkRvd24oZSkge1xuXHRcdHVuY2hhbmdlZF92YWx1ZSA9IHZhbHVlO1xuXHR9XG5cblx0ZnVuY3Rpb24gZmlyZUNoYW5nZSgpIHtcblx0XHRtZS5vbkNoYW5nZS5maXJlKHZhbHVlKTtcblx0fVxuXG5cdHRoaXMuZG9tID0gc3BhbjtcblxuXHQvLyBwdWJsaWNcblx0dGhpcy5zZXRWYWx1ZSA9IGZ1bmN0aW9uKHYpIHtcblx0XHR2YWx1ZSA9IHY7XG5cdFx0c3Bhbi52YWx1ZSA9IHZhbHVlLnRvRml4ZWQocHJlY2lzaW9uKTtcblx0fTtcblxuXHR0aGlzLnBhaW50ID0gZnVuY3Rpb24oKSB7XG5cdFx0aWYgKHZhbHVlICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgIT09IHNwYW4pIHtcblx0XHRcdHNwYW4udmFsdWUgPSB2YWx1ZS50b0ZpeGVkKHByZWNpc2lvbik7XG5cdFx0fVxuXHR9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE51bWJlclVJO1xuIiwidmFyIFNpbXBsZUV2ZW50ID0gcmVxdWlyZSgnZG8uanMnKTtcbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxuLy8gKioqKioqKioqKiBjbGFzczogU2Nyb2xsQmFyICoqKioqKioqKioqKioqKioqKiAvL1xuLypcblx0U2ltcGxlIFVJIHdpZGdldCB0aGF0IGRpc3BsYXlzIGEgc2Nyb2xsdHJhY2sgXG5cdGFuZCBzbGlkZXIsIHRoYXQgZmlyZXMgc29tZSBzY3JvbGwgZXZlbnRzXG4qL1xuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblxudmFyIHNjcm9sbHRyYWNrX3N0eWxlID0ge1xuXHQvLyBmbG9hdDogJ3JpZ2h0Jyxcblx0cG9zaXRpb246ICdhYnNvbHV0ZScsXG5cdC8vIHJpZ2h0OiAnMCcsXG5cdC8vIHRvcDogJzAnLFxuXHQvLyBib3R0b206ICcwJyxcblx0YmFja2dyb3VuZDogJy13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgdG9wLCBjb2xvci1zdG9wKDAsIHJnYigyOSwyOSwyOSkpLCBjb2xvci1zdG9wKDAuNiwgcmdiKDUwLDUwLDUwKSkgKScsXG5cdGJvcmRlcjogJzFweCBzb2xpZCByZ2IoMjksIDI5LCAyOSknLFxuXHQvLyB6SW5kZXg6ICcxMDAwJyxcblx0dGV4dEFsaWduOiAnY2VudGVyJyxcblx0Y3Vyc29yOiAncG9pbnRlcidcbn07XG5cbnZhciBzY3JvbGxiYXJfc3R5bGUgPSB7XG5cdGJhY2tncm91bmQ6ICctd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIHJpZ2h0IHRvcCwgY29sb3Itc3RvcCgwLjIsIHJnYig4OCw4OCw4OCkpLCBjb2xvci1zdG9wKDAuNiwgcmdiKDY0LDY0LDY0KSkgKScsXG5cdGJvcmRlcjogJzFweCBzb2xpZCByZ2IoMjUsMjUsMjUpJyxcblx0Ly8gcG9zaXRpb246ICdhYnNvbHV0ZScsXG5cdHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuXHRib3JkZXJSYWRpdXM6ICc2cHgnXG59O1xuXG5mdW5jdGlvbiBTY3JvbGxCYXIoaCwgdywgZGlzcGF0Y2hlcikge1xuXG5cdHZhciBTQ1JPTExCQVJfV0lEVEggPSB3ID8gdyA6IDEyO1xuXHR2YXIgU0NST0xMQkFSX01BUkdJTiA9IDM7XG5cdHZhciBTQ1JPTExfV0lEVEggPSBTQ1JPTExCQVJfV0lEVEggKyBTQ1JPTExCQVJfTUFSR0lOICogMjtcblx0dmFyIE1JTl9CQVJfTEVOR1RIID0gMjU7XG5cblx0dmFyIHNjcm9sbHRyYWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdHV0aWxzLnN0eWxlKHNjcm9sbHRyYWNrLCBzY3JvbGx0cmFja19zdHlsZSk7XG5cblx0dmFyIHNjcm9sbHRyYWNrSGVpZ2h0ID0gaCAtIDI7XG5cdHNjcm9sbHRyYWNrLnN0eWxlLmhlaWdodCA9IHNjcm9sbHRyYWNrSGVpZ2h0ICsgJ3B4Jztcblx0c2Nyb2xsdHJhY2suc3R5bGUud2lkdGggPSBTQ1JPTExfV0lEVEggKyAncHgnOztcblxuXHQvLyB2YXIgc2Nyb2xsVG9wID0gMDtcblx0dmFyIHNjcm9sbGJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHQvLyBzY3JvbGxiYXIuY2xhc3NOYW1lID0gJ3Njcm9sbGJhcic7XG5cdHV0aWxzLnN0eWxlKHNjcm9sbGJhciwgc2Nyb2xsYmFyX3N0eWxlKTtcblx0c2Nyb2xsYmFyLnN0eWxlLndpZHRoID0gU0NST0xMQkFSX1dJRFRIICsgJ3B4Jztcblx0c2Nyb2xsYmFyLnN0eWxlLmhlaWdodCA9IGggLyAyO1xuXHRzY3JvbGxiYXIuc3R5bGUudG9wID0gMDtcblx0c2Nyb2xsYmFyLnN0eWxlLmxlZnQgPSBTQ1JPTExCQVJfTUFSR0lOICsgJ3B4JzsgLy8gMDsgLy9TXG5cblx0c2Nyb2xsdHJhY2suYXBwZW5kQ2hpbGQoc2Nyb2xsYmFyKTtcblxuXHR2YXIgbWUgPSB0aGlzO1xuXG5cdHZhciBiYXJfbGVuZ3RoLCBiYXJfeTtcblxuXHQvLyBTZXRzIGxlbmd0aHMgb2Ygc2Nyb2xsYmFyIGJ5IHBlcmNlbnRhZ2Vcblx0dGhpcy5zZXRMZW5ndGggPSBmdW5jdGlvbihsKSB7XG5cdFx0Ly8gbGltaXQgMC4uMVxuXHRcdGwgPSBNYXRoLm1heChNYXRoLm1pbigxLCBsKSwgMCk7XG5cdFx0bCAqPSBzY3JvbGx0cmFja0hlaWdodDtcblx0XHRiYXJfbGVuZ3RoID0gTWF0aC5tYXgobCwgTUlOX0JBUl9MRU5HVEgpO1xuXHRcdHNjcm9sbGJhci5zdHlsZS5oZWlnaHQgPSBiYXJfbGVuZ3RoICsgJ3B4Jztcblx0fTtcblxuXHR0aGlzLnNldEhlaWdodCA9IGZ1bmN0aW9uKGhlaWdodCkge1xuXHRcdGggPSBoZWlnaHQ7XG5cblx0XHRzY3JvbGx0cmFja0hlaWdodCA9IGggLSAyO1xuXHRcdHNjcm9sbHRyYWNrLnN0eWxlLmhlaWdodCA9IHNjcm9sbHRyYWNrSGVpZ2h0ICsgJ3B4JyA7XG5cdH07XG5cblx0Ly8gTW92ZXMgc2Nyb2xsYmFyIHRvIHBvc2l0aW9uIGJ5IFBlcmNlbnRhZ2Vcblx0dGhpcy5zZXRQb3NpdGlvbiA9IGZ1bmN0aW9uKHApIHtcblx0XHRwID0gTWF0aC5tYXgoTWF0aC5taW4oMSwgcCksIDApO1xuXHRcdHZhciBlbXB0eVRyYWNrID0gc2Nyb2xsdHJhY2tIZWlnaHQgLSBiYXJfbGVuZ3RoO1xuXHRcdGJhcl95ID0gcCAqIGVtcHR5VHJhY2s7XG5cdFx0c2Nyb2xsYmFyLnN0eWxlLnRvcCA9IGJhcl95ICsgJ3B4Jztcblx0fTtcblxuXHR0aGlzLnNldExlbmd0aCgxKTtcblx0dGhpcy5zZXRQb3NpdGlvbigwKTtcblx0dGhpcy5vblNjcm9sbCA9IG5ldyBTaW1wbGVFdmVudCgpO1xuXG5cdHZhciBtb3VzZV9kb3duX2dyaXA7XG5cblx0ZnVuY3Rpb24gb25Eb3duKGV2ZW50KSB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdGlmIChldmVudC50YXJnZXQgPT0gc2Nyb2xsYmFyKSB7XG5cdFx0XHRtb3VzZV9kb3duX2dyaXAgPSBldmVudC5jbGllbnRZO1xuXHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3ZlLCBmYWxzZSk7XG5cdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25VcCwgZmFsc2UpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoZXZlbnQuY2xpZW50WSA8IGJhcl95KSB7XG5cdFx0XHRcdG1lLm9uU2Nyb2xsLmZpcmUoJ3BhZ2V1cCcpO1xuXHRcdFx0fSBlbHNlIGlmIChldmVudC5jbGllbnRZID4gKGJhcl95ICsgYmFyX2xlbmd0aCkpIHtcblx0XHRcdFx0bWUub25TY3JvbGwuZmlyZSgncGFnZWRvd24nKTtcblx0XHRcdH1cblx0XHRcdC8vIGlmIHdhbnQgdG8gZHJhZyBzY3JvbGxlciB0byBlbXB0eSB0cmFjayBpbnN0ZWFkXG5cdFx0XHQvLyBtZS5zZXRQb3NpdGlvbihldmVudC5jbGllbnRZIC8gKHNjcm9sbHRyYWNrSGVpZ2h0IC0gMSkpO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIG9uTW92ZShldmVudCkge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHQvLyBldmVudC50YXJnZXQgPT0gc2Nyb2xsYmFyXG5cdFx0dmFyIGVtcHR5VHJhY2sgPSBzY3JvbGx0cmFja0hlaWdodCAtIGJhcl9sZW5ndGg7XG5cdFx0dmFyIHNjcm9sbHRvID0gKGV2ZW50LmNsaWVudFkgLSBtb3VzZV9kb3duX2dyaXApIC8gZW1wdHlUcmFjaztcblxuXHRcdC8vIGNsYW1wIGxpbWl0cyB0byAwLi4xXG5cdFx0aWYgKHNjcm9sbHRvID4gMSkgc2Nyb2xsdG8gPSAxO1xuXHRcdGlmIChzY3JvbGx0byA8IDApIHNjcm9sbHRvID0gMDtcblx0XHRtZS5zZXRQb3NpdGlvbihzY3JvbGx0byk7XG5cdFx0bWUub25TY3JvbGwuZmlyZSgnc2Nyb2xsdG8nLCBzY3JvbGx0byk7XG5cdH1cblxuXHRmdW5jdGlvbiBvblVwKGV2ZW50KSB7XG5cdFx0b25Nb3ZlKGV2ZW50KTtcblx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdmUsIGZhbHNlKTtcblx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25VcCwgZmFsc2UpO1xuXHR9XG5cblx0c2Nyb2xsdHJhY2suYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgb25Eb3duLCBmYWxzZSk7XG5cdHRoaXMuZG9tID0gc2Nyb2xsdHJhY2s7XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTY3JvbGxCYXI7IiwidmFyIHBhY2thZ2VfanNvbiA9IHJlcXVpcmUoJy4uL3BhY2thZ2UuanNvbicpLFxuXHRTZXR0aW5ncyA9IHJlcXVpcmUoJy4vc2V0dGluZ3MnKSxcblx0RG8gPSByZXF1aXJlKCdkby5qcycpO1xuXG4vLyBEYXRhIFN0b3JlIHdpdGggYSBzb3VyY2Ugb2YgdHJ1dGhcbmZ1bmN0aW9uIERhdGFTdG9yZSgpIHtcblx0dGhpcy5ERUxJTUlURVIgPSAnOic7XG5cdHRoaXMuYmxhbmsoKTtcblx0dGhpcy5vbk9wZW4gPSBuZXcgRG8oKTtcblx0dGhpcy5vblNhdmUgPSBuZXcgRG8oKTtcblxuXHR0aGlzLmxpc3RlbmVycyA9IFtdO1xufVxuXG5EYXRhU3RvcmUucHJvdG90eXBlLmFkZExpc3RlbmVyID0gZnVuY3Rpb24ocGF0aCwgY2IpIHtcblx0dGhpcy5saXN0ZW5lcnMucHVzaCh7XG5cdFx0cGF0aDogcGF0aCxcblx0XHRjYWxsYmFjazogY2Jcblx0fSk7XG59O1xuXG5EYXRhU3RvcmUucHJvdG90eXBlLmJsYW5rID0gZnVuY3Rpb24oKSB7XG5cdHZhciBkYXRhID0ge307XG5cblx0ZGF0YS52ZXJzaW9uID0gcGFja2FnZV9qc29uLnZlcnNpb247XG5cdGRhdGEubW9kaWZpZWQgPSBuZXcgRGF0ZSgpLnRvU3RyaW5nKCk7XG5cdGRhdGEudGl0bGUgPSAnVW50aXRsZWQnO1xuXG5cdGRhdGEudWkgPSB7XG5cdFx0Y3VycmVudFRpbWU6IDAsXG5cdFx0dG90YWxUaW1lOiBTZXR0aW5ncy5kZWZhdWx0X2xlbmd0aCxcblx0XHRzY3JvbGxUaW1lOiAwLFxuXHRcdHRpbWVTY2FsZTogU2V0dGluZ3MudGltZV9zY2FsZVxuXHR9O1xuXG5cdGRhdGEubGF5ZXJzID0gW107XG5cblx0dGhpcy5kYXRhID0gZGF0YTtcbn07XG5cbkRhdGFTdG9yZS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oKSB7XG5cdHZhciBkYXRhID0gdGhpcy5kYXRhO1xuXG5cdGRhdGEudmVyc2lvbiA9IHBhY2thZ2VfanNvbi52ZXJzaW9uO1xuXHRkYXRhLm1vZGlmaWVkID0gbmV3IERhdGUoKS50b1N0cmluZygpO1xufTtcblxuRGF0YVN0b3JlLnByb3RvdHlwZS5zZXRKU09OU3RyaW5nID0gZnVuY3Rpb24oZGF0YSkge1xuXHR0aGlzLmRhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xufTtcblxuRGF0YVN0b3JlLnByb3RvdHlwZS5zZXRKU09OID0gZnVuY3Rpb24oZGF0YSkge1xuXHR0aGlzLmRhdGEgPSBkYXRhO1xufTtcblxuRGF0YVN0b3JlLnByb3RvdHlwZS5nZXRKU09OU3RyaW5nID0gZnVuY3Rpb24oZm9ybWF0KSB7XG5cdHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzLmRhdGEsIG51bGwsIGZvcm1hdCk7XG59O1xuXG5EYXRhU3RvcmUucHJvdG90eXBlLmdldFZhbHVlID0gZnVuY3Rpb24ocGF0aHMpIHtcblx0dmFyIGRlc2NlbmQgPSBwYXRocy5zcGxpdCh0aGlzLkRFTElNSVRFUik7XG5cdHZhciByZWZlcmVuY2UgPSB0aGlzLmRhdGE7XG5cdGZvciAodmFyIGkgPSAwLCBpbCA9IGRlc2NlbmQubGVuZ3RoOyBpIDwgaWw7IGkrKykge1xuXHRcdHZhciBwYXRoID0gZGVzY2VuZFtpXTtcblx0XHRpZiAocmVmZXJlbmNlW3BhdGhdID09PSB1bmRlZmluZWQpIHtcblx0XHRcdGNvbnNvbGUud2FybignQ2FudCBmaW5kICcgKyBwYXRocyk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHJlZmVyZW5jZSA9IHJlZmVyZW5jZVtwYXRoXTtcblx0fVxuXHRyZXR1cm4gcmVmZXJlbmNlO1xufTtcblxuRGF0YVN0b3JlLnByb3RvdHlwZS5zZXRWYWx1ZSA9IGZ1bmN0aW9uKHBhdGhzLCB2YWx1ZSkge1xuICBjb25zb2xlLmxvZyhwYXRocylcblx0dmFyIGRlc2NlbmQgPSBwYXRocy5zcGxpdCh0aGlzLkRFTElNSVRFUik7XG5cdHZhciByZWZlcmVuY2UgPSB0aGlzLmRhdGE7XG5cdGZvciAodmFyIGkgPSAwLCBpbCA9IGRlc2NlbmQubGVuZ3RoIC0gMTsgcGF0aCA9IGRlc2NlbmRbaV0sIGkgPCBpbCA7IGkrKykge1xuXHRcdHJlZmVyZW5jZSA9IHJlZmVyZW5jZVtwYXRoXTtcblx0fVxuXHRyZWZlcmVuY2VbcGF0aF0gPSB2YWx1ZTtcblxuXHR0aGlzLmxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uKGwpIHtcblx0XHRpZiAocGF0aHMuaW5kZXhPZihsLnBhdGgpID4gLTEpIGwuY2FsbGJhY2soKTtcblx0fSlcbn07XG5cbkRhdGFTdG9yZS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24ocGF0aCwgc3VmZml4KSB7XG5cdGlmIChzdWZmaXgpIHBhdGggPSBzdWZmaXggKyB0aGlzLkRFTElNSVRFUiArIHBhdGg7XG5cdHJldHVybiBuZXcgRGF0YVByb3godGhpcywgcGF0aCk7XG59O1xuXG5mdW5jdGlvbiBEYXRhUHJveChzdG9yZSwgcGF0aCkge1xuXHR0aGlzLnBhdGggPSBwYXRoO1xuXHR0aGlzLnN0b3JlID0gc3RvcmU7XG59XG5cbkRhdGFQcm94LnByb3RvdHlwZSA9IHtcblx0Z2V0IHZhbHVlKCkge1xuXHRcdHJldHVybiB0aGlzLnN0b3JlLmdldFZhbHVlKHRoaXMucGF0aCk7XG5cdH0sXG5cdHNldCB2YWx1ZSh2YWwpIHtcblx0XHR0aGlzLnN0b3JlLnNldFZhbHVlKHRoaXMucGF0aCwgdmFsKTtcblx0fVxufTtcblxuRGF0YVByb3gucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKHBhdGgpIHtcblx0cmV0dXJuIHRoaXMuc3RvcmUuZ2V0KHBhdGgsIHRoaXMucGF0aCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IERhdGFTdG9yZTtcbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8vIERpc3BhdGNoZXJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuZnVuY3Rpb24gRGlzcGF0Y2hlcigpIHtcblxuXHR2YXIgZXZlbnRfbGlzdGVuZXJzID0ge1xuXG5cdH07XG5cblx0ZnVuY3Rpb24gb24odHlwZSwgbGlzdGVuZXIpIHtcblx0XHRpZiAoISh0eXBlIGluIGV2ZW50X2xpc3RlbmVycykpIHtcblx0XHRcdGV2ZW50X2xpc3RlbmVyc1t0eXBlXSA9IFtdO1xuXHRcdH1cblx0XHR2YXIgbGlzdGVuZXJzID0gZXZlbnRfbGlzdGVuZXJzW3R5cGVdO1xuXHRcdGxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGZpcmUodHlwZSkge1xuXHRcdHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcblx0XHRhcmdzLnNoaWZ0KCk7XG5cdFx0dmFyIGxpc3RlbmVycyA9IGV2ZW50X2xpc3RlbmVyc1t0eXBlXTtcblx0XHRpZiAoIWxpc3RlbmVycykgcmV0dXJuO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgbGlzdGVuZXIgPSBsaXN0ZW5lcnNbaV07XG5cdFx0XHRsaXN0ZW5lci5hcHBseShsaXN0ZW5lciwgYXJncyk7XG5cdFx0fVxuXHR9XG5cblx0dGhpcy5vbiA9IG9uO1xuXHR0aGlzLmZpcmUgPSBmaXJlO1xuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gRGlzcGF0Y2hlcjsiLCJmdW5jdGlvbiBoYW5kbGVEcmFnKGVsZW1lbnQsIG9uZG93biwgb25tb3ZlLCBvbnVwLCBkb3duX2NyaXRlcmlhKSB7XG5cdHZhciBwb2ludGVyID0gbnVsbDtcblx0dmFyIGJvdW5kcyA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFxuXHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG9uTW91c2VEb3duKTtcblxuXHRmdW5jdGlvbiBvbk1vdXNlRG93bihlKSB7XG5cdFx0aGFuZGxlU3RhcnQoZSk7XG5cblx0XHRpZiAoZG93bl9jcml0ZXJpYSAmJiAhZG93bl9jcml0ZXJpYShwb2ludGVyKSkge1xuXHRcdFx0cG9pbnRlciA9IG51bGw7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0XG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpO1xuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbk1vdXNlVXApO1xuXHRcdFxuXHRcdG9uZG93bihwb2ludGVyKTtcblxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0fVxuXHRcblx0ZnVuY3Rpb24gb25Nb3VzZU1vdmUoZSkge1xuXHRcdGhhbmRsZU1vdmUoZSk7XG5cdFx0b25tb3ZlKHBvaW50ZXIpO1xuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlU3RhcnQoZSkge1xuXHRcdGJvdW5kcyA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0dmFyIGN1cnJlbnR4ID0gZS5jbGllbnRYLCBjdXJyZW50eSA9IGUuY2xpZW50WTtcblx0XHRwb2ludGVyID0ge1xuXHRcdFx0c3RhcnR4OiBjdXJyZW50eCxcblx0XHRcdHN0YXJ0eTogY3VycmVudHksXG5cdFx0XHR4OiBjdXJyZW50eCxcblx0XHRcdHk6IGN1cnJlbnR5LFxuXHRcdFx0ZHg6IDAsXG5cdFx0XHRkeTogMCxcblx0XHRcdG9mZnNldHg6IGN1cnJlbnR4IC0gYm91bmRzLmxlZnQsXG5cdFx0XHRvZmZzZXR5OiBjdXJyZW50eSAtIGJvdW5kcy50b3AsXG5cdFx0XHRtb3ZlZDogZmFsc2Vcblx0XHR9O1xuXHR9XG5cdFxuXHRmdW5jdGlvbiBoYW5kbGVNb3ZlKGUpIHtcblx0XHRib3VuZHMgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdHZhciBjdXJyZW50eCA9IGUuY2xpZW50WCxcblx0XHRjdXJyZW50eSA9IGUuY2xpZW50WSxcblx0XHRvZmZzZXR4ID0gY3VycmVudHggLSBib3VuZHMubGVmdCxcblx0XHRvZmZzZXR5ID0gY3VycmVudHkgLSBib3VuZHMudG9wO1xuXHRcdHBvaW50ZXIueCA9IGN1cnJlbnR4O1xuXHRcdHBvaW50ZXIueSA9IGN1cnJlbnR5O1xuXHRcdHBvaW50ZXIuZHggPSBlLmNsaWVudFggLSBwb2ludGVyLnN0YXJ0eDtcblx0XHRwb2ludGVyLmR5ID0gZS5jbGllbnRZIC0gcG9pbnRlci5zdGFydHk7XG5cdFx0cG9pbnRlci5vZmZzZXR4ID0gb2Zmc2V0eDtcblx0XHRwb2ludGVyLm9mZnNldHkgPSBvZmZzZXR5O1xuXG5cdFx0Ly8gSWYgdGhlIHBvaW50ZXIgZHgvZHkgaXMgX2V2ZXJfIG5vbi16ZXJvLCB0aGVuIGl0J3MgbW92ZWRcblx0XHRwb2ludGVyLm1vdmVkID0gcG9pbnRlci5tb3ZlZCB8fCBwb2ludGVyLmR4ICE9PSAwIHx8IHBvaW50ZXIuZHkgIT09IDA7XG5cdH1cblx0XG5cdGZ1bmN0aW9uIG9uTW91c2VVcChlKSB7XG5cdFx0aGFuZGxlTW92ZShlKTtcblx0XHRvbnVwKHBvaW50ZXIpO1xuXHRcdHBvaW50ZXIgPSBudWxsO1xuXHRcdFxuXHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcblx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Nb3VzZVVwKTtcblx0fVxuXG5cdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIG9uVG91Y2hTdGFydCk7XG5cblx0ZnVuY3Rpb24gb25Ub3VjaFN0YXJ0KHRlKSB7XG5cdFx0XG5cdFx0aWYgKHRlLnRvdWNoZXMubGVuZ3RoID09IDEpIHtcblx0XHRcdFxuXHRcdFx0dmFyIGUgPSB0ZS50b3VjaGVzWzBdO1xuXHRcdFx0aWYgKGRvd25fY3JpdGVyaWEgJiYgIWRvd25fY3JpdGVyaWEoZSkpIHJldHVybjtcblx0XHRcdHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRoYW5kbGVTdGFydChlKTtcblx0XHRcdG9uZG93bihwb2ludGVyKTtcblx0XHR9XG5cdFx0XG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBvblRvdWNoTW92ZSk7XG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIG9uVG91Y2hFbmQpO1xuXHR9XG5cdFxuXHRmdW5jdGlvbiBvblRvdWNoTW92ZSh0ZSkge1xuXHRcdHZhciBlID0gdGUudG91Y2hlc1swXTtcblx0XHRvbk1vdXNlTW92ZShlKTtcblx0fVxuXG5cdGZ1bmN0aW9uIG9uVG91Y2hFbmQoZSkge1xuXHRcdC8vIHZhciBlID0gZS50b3VjaGVzWzBdO1xuXHRcdG9uTW91c2VVcChlKTtcblx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIG9uVG91Y2hNb3ZlKTtcblx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgb25Ub3VjaEVuZCk7XG5cdH1cblxuXG5cdHRoaXMucmVsZWFzZSA9IGZ1bmN0aW9uKCkge1xuXHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgb25Nb3VzZURvd24pO1xuXHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIG9uVG91Y2hTdGFydCk7XG5cdH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFuZGxlRHJhZztcbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8vIFR3ZWVuc1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG52YXIgVHdlZW5zID0ge1xuLypcblx0bm9uZTogZnVuY3Rpb24oaykge1xuXHRcdHJldHVybiAwO1xuXHR9LFxuKi9cblx0bGluZWFyOiBmdW5jdGlvbihrKSB7XG5cdFx0cmV0dXJuIGs7XG5cdH0sXG4vKlxuXHRxdWFkRWFzZUluOiBmdW5jdGlvbihrKSB7XG5cdFx0cmV0dXJuIGsgKiBrO1xuXHR9LFxuXHRxdWFkRWFzZU91dDogZnVuY3Rpb24oaykge1xuXHRcdHJldHVybiAtIGsgKiAoIGsgLSAyICk7XG5cdH0sXG5cdHF1YWRFYXNlSW5PdXQ6IGZ1bmN0aW9uKGspIHtcblx0XHRpZiAoICggayAqPSAyICkgPCAxICkgcmV0dXJuIDAuNSAqIGsgKiBrO1xuXHRcdHJldHVybiAtIDAuNSAqICggLS1rICogKCBrIC0gMiApIC0gMSApO1xuXHR9XG4qL1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBUd2VlbnM7IiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLy8gVW5kbyBNYW5hZ2VyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbmZ1bmN0aW9uIFVuZG9TdGF0ZShzdGF0ZSwgZGVzY3JpcHRpb24pIHtcblx0Ly8gdGhpcy5zdGF0ZSA9IEpTT04uc3RyaW5naWZ5KHN0YXRlKTtcblx0dGhpcy5zdGF0ZSA9IHN0YXRlLmdldEpTT05TdHJpbmcoKTtcblx0dGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xufVxuXG5mdW5jdGlvbiBVbmRvTWFuYWdlcihkaXNwYXRjaGVyLCBtYXgpIHtcblx0dGhpcy5kaXNwYXRjaGVyID0gZGlzcGF0Y2hlcjtcblx0dGhpcy5NQVhfSVRFTVMgPSBtYXggfHwgMTAwO1xuXHR0aGlzLmNsZWFyKCk7XG59XG5cblVuZG9NYW5hZ2VyLnByb3RvdHlwZS5zYXZlID0gZnVuY3Rpb24oc3RhdGUsIHN1cHByZXNzKSB7XG5cdHZhciBzdGF0ZXMgPSB0aGlzLnN0YXRlcztcblx0dmFyIG5leHRfaW5kZXggPSB0aGlzLmluZGV4ICsgMTtcblx0dmFyIHRvX3JlbW92ZSA9IHN0YXRlcy5sZW5ndGggLSBuZXh0X2luZGV4O1xuXHRzdGF0ZXMuc3BsaWNlKG5leHRfaW5kZXgsIHRvX3JlbW92ZSwgc3RhdGUpO1xuXG5cdGlmIChzdGF0ZXMubGVuZ3RoID4gdGhpcy5NQVhfSVRFTVMpIHtcblx0XHRzdGF0ZXMuc2hpZnQoKTtcblx0fVxuXG5cdHRoaXMuaW5kZXggPSBzdGF0ZXMubGVuZ3RoIC0gMTtcblxuXHQvLyBjb25zb2xlLmxvZygnVW5kbyBTdGF0ZSBTYXZlZDogJywgc3RhdGUuZGVzY3JpcHRpb24pO1xuXHRpZiAoIXN1cHByZXNzKSB0aGlzLmRpc3BhdGNoZXIuZmlyZSgnc3RhdGU6c2F2ZScsIHN0YXRlLmRlc2NyaXB0aW9uKTtcbn07XG5cblVuZG9NYW5hZ2VyLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uKCkge1xuXHR0aGlzLnN0YXRlcyA9IFtdO1xuXHR0aGlzLmluZGV4ID0gLTE7XG5cdC8vIEZJWE1FOiBsZWF2ZSBkZWZhdWx0IHN0YXRlIG9yIGFsd2F5cyBsZWF2ZSBvbmUgc3RhdGU/XG59O1xuXG5VbmRvTWFuYWdlci5wcm90b3R5cGUuY2FuVW5kbyA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcy5pbmRleCA+IDA7XG5cdC8vICYmIHRoaXMuc3RhdGVzLmxlbmd0aCA+IDFcbn07XG5cblVuZG9NYW5hZ2VyLnByb3RvdHlwZS5jYW5SZWRvID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzLmluZGV4IDwgdGhpcy5zdGF0ZXMubGVuZ3RoIC0gMTtcbn07XG5cblVuZG9NYW5hZ2VyLnByb3RvdHlwZS51bmRvID0gZnVuY3Rpb24oKSB7XG5cdGlmICh0aGlzLmNhblVuZG8oKSkge1xuXHRcdHRoaXMuZGlzcGF0Y2hlci5maXJlKCdzdGF0dXMnLCAnVW5kbzogJyArIHRoaXMuZ2V0KCkuZGVzY3JpcHRpb24pO1xuXHRcdHRoaXMuaW5kZXgtLTtcblx0fSBlbHNlIHtcblx0XHR0aGlzLmRpc3BhdGNoZXIuZmlyZSgnc3RhdHVzJywgJ05vdGhpbmcgdG8gdW5kbycpO1xuXHR9XG5cblx0cmV0dXJuIHRoaXMuZ2V0KCk7XG59O1xuXG5VbmRvTWFuYWdlci5wcm90b3R5cGUucmVkbyA9IGZ1bmN0aW9uKCkge1xuXHRpZiAodGhpcy5jYW5SZWRvKCkpIHtcblx0XHR0aGlzLmluZGV4Kys7XG5cdFx0dGhpcy5kaXNwYXRjaGVyLmZpcmUoJ3N0YXR1cycsICdSZWRvOiAnICsgdGhpcy5nZXQoKS5kZXNjcmlwdGlvbik7XG5cdH0gZWxzZSB7XG5cdFx0dGhpcy5kaXNwYXRjaGVyLmZpcmUoJ3N0YXR1cycsICdOb3RoaW5nIHRvIHJlZG8nKTtcblx0fVxuXG5cdHJldHVybiB0aGlzLmdldCgpO1xufTtcblxuVW5kb01hbmFnZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcy5zdGF0ZXNbdGhpcy5pbmRleF07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0VW5kb1N0YXRlOiBVbmRvU3RhdGUsXG5cdFVuZG9NYW5hZ2VyOiBVbmRvTWFuYWdlclxufTsiLCJ2YXJcblx0VHdlZW5zID0gcmVxdWlyZSgnLi91dGlsX3R3ZWVuJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRTVE9SQUdFX1BSRUZJWDogJ3RpbWVsaW5lci0nLFxuXHRaX0lOREVYOiA5OTksXG5cdGZpcnN0RGVmaW5lZDogZmlyc3REZWZpbmVkLFxuXHRzdHlsZTogc3R5bGUsXG5cdHNhdmVUb0ZpbGU6IHNhdmVUb0ZpbGUsXG5cdG9wZW5Bczogb3BlbkFzLFxuXHRmb3JtYXRfZnJpZW5kbHlfc2Vjb25kczogZm9ybWF0X2ZyaWVuZGx5X3NlY29uZHMsXG5cdGZpbmRUaW1laW5MYXllcjogZmluZFRpbWVpbkxheWVyLFxuXHR0aW1lQXRMYXllcjogdGltZUF0TGF5ZXIsXG5cdHByb3h5X2N0eDogcHJveHlfY3R4LFxuXHRpbnB1dFR5cGU6IGlucHV0VHlwZVxufTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLy8gVXRpbHNcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuZnVuY3Rpb24gZmlyc3REZWZpbmVkKCkge1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0aWYodHlwZW9mIGFyZ3VtZW50c1tpXSAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdHJldHVybiBhcmd1bWVudHNbaV07XG5cdFx0fVxuXHR9XG5cdHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIHN0eWxlKGVsZW1lbnQsIHZhcl9hcmdzKSB7XG5cdGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgKytpKSB7XG5cdFx0dmFyIHN0eWxlcyA9IGFyZ3VtZW50c1tpXTtcblx0XHRmb3IgKHZhciBzIGluIHN0eWxlcykge1xuXHRcdFx0ZWxlbWVudC5zdHlsZVtzXSA9IHN0eWxlc1tzXTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gaW5wdXRUeXBlIChlbGVtZW50LCB0eXBlKSB7XG5cdGVsZW1lbnQuc2V0QXR0cmlidXRlKCd0eXBlJywgdHlwZSlcbn1cblxuZnVuY3Rpb24gc2F2ZVRvRmlsZShzdHJpbmcsIGZpbGVuYW1lKSB7XG5cdHZhciBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG5cdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYSk7XG5cdGEuc3R5bGUgPSBcImRpc3BsYXk6IG5vbmVcIjtcblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtzdHJpbmddLCB7IHR5cGU6ICdvY3RldC9zdHJlYW0nIH0pLCAvLyBhcHBsaWNhdGlvbi9qc29uXG5cdFx0dXJsID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cdFxuXHRhLmhyZWYgPSB1cmw7XG5cdGEuZG93bmxvYWQgPSBmaWxlbmFtZTtcblxuXHRmYWtlQ2xpY2soYSk7XG5cblx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHQvLyBjbGVhbnVwIGFuZCByZXZva2Vcblx0XHR3aW5kb3cuVVJMLnJldm9rZU9iamVjdFVSTCh1cmwpO1xuXHRcdGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoYSk7XG5cdH0sIDUwMCk7XG59XG5cblxuXG52YXIgaW5wdXQsIG9wZW5DYWxsYmFjaztcblxuZnVuY3Rpb24gaGFuZGxlRmlsZVNlbGVjdChldnQpIHtcblx0dmFyIGZpbGVzID0gZXZ0LnRhcmdldC5maWxlczsgLy8gRmlsZUxpc3Qgb2JqZWN0XG5cblx0Y29uc29sZS5sb2coJ2hhbmRsZSBmaWxlIHNlbGVjdCcsIGZpbGVzLmxlbmd0aCk7XG5cblx0dmFyIGYgPSBmaWxlc1swXTtcblx0aWYgKCFmKSByZXR1cm47XG5cdC8vIENhbiB0cnkgdG8gZG8gTUlORSBtYXRjaFxuXHQvLyBpZiAoIWYudHlwZS5tYXRjaCgnYXBwbGljYXRpb24vanNvbicpKSB7XG5cdC8vICAgcmV0dXJuO1xuXHQvLyB9XG5cdGNvbnNvbGUubG9nKCdtYXRjaCcsIGYudHlwZSk7XG5cblx0dmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG5cblx0Ly8gQ2xvc3VyZSB0byBjYXB0dXJlIHRoZSBmaWxlIGluZm9ybWF0aW9uLlxuXHRyZWFkZXIub25sb2FkID0gZnVuY3Rpb24oZSkge1xuXHRcdHZhciBkYXRhID0gZS50YXJnZXQucmVzdWx0O1xuXHRcdG9wZW5DYWxsYmFjayhkYXRhKTtcblx0fTtcblx0XG5cdHJlYWRlci5yZWFkQXNUZXh0KGYpO1xuXG5cdGlucHV0LnZhbHVlID0gJyc7XG59XG5cblxuZnVuY3Rpb24gb3BlbkFzKGNhbGxiYWNrLCB0YXJnZXQpIHtcblx0Y29uc29sZS5sb2coJ29wZW5maWxlLi4uJyk7XG5cdG9wZW5DYWxsYmFjayA9IGNhbGxiYWNrO1xuXG5cdGlmICghaW5wdXQpIHtcblx0XHRpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cdFx0aW5wdXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRpbnB1dC50eXBlID0gJ2ZpbGUnO1xuXHRcdGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGhhbmRsZUZpbGVTZWxlY3QpO1xuXHRcdHRhcmdldCA9IHRhcmdldCB8fCBkb2N1bWVudC5ib2R5O1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChpbnB1dCk7XG5cdH1cblx0XG5cdGZha2VDbGljayhpbnB1dCk7XG59XG5cbmZ1bmN0aW9uIGZha2VDbGljayh0YXJnZXQpIHtcblx0dmFyIGUgPSBkb2N1bWVudC5jcmVhdGVFdmVudChcIk1vdXNlRXZlbnRzXCIpO1xuXHRlLmluaXRNb3VzZUV2ZW50KFxuXHRcdCdjbGljaycsIHRydWUsIGZhbHNlLCB3aW5kb3csIDAsIDAsIDAsIDAsIDAsXG5cdFx0ZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIDAsIG51bGxcblx0KTtcblx0dGFyZ2V0LmRpc3BhdGNoRXZlbnQoZSk7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdF9mcmllbmRseV9zZWNvbmRzKHMsIHR5cGUpIHtcblx0Ly8gVE9ETyBSZWZhY3RvciB0byA2MGZwcz8/P1xuXHQvLyAyMCBtaW5zICogNjAgc2VjID0gMTA4MCBcblx0Ly8gMTA4MHMgKiA2MGZwcyA9IDEwODAgKiA2MCA8IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSXG5cblx0dmFyIHJhd19zZWNzID0gcyB8IDA7XG5cdHZhciBzZWNzX21pY3JvID0gcyAlIDYwO1xuXHR2YXIgc2VjcyA9IHJhd19zZWNzICUgNjA7XG5cdHZhciByYXdfbWlucyA9IHJhd19zZWNzIC8gNjAgfCAwO1xuXHR2YXIgbWlucyA9IHJhd19taW5zICUgNjA7XG5cdHZhciBob3VycyA9IHJhd19taW5zIC8gNjAgfCAwO1xuXG5cdHZhciBzZWNzX3N0ciA9IChzZWNzIC8gMTAwKS50b0ZpeGVkKDIpLnN1YnN0cmluZygyKTtcblxuXHR2YXIgc3RyID0gbWlucyArICc6JyArIHNlY3Nfc3RyO1xuXG5cdGlmIChzICUgMSA+IDApIHtcblx0XHR2YXIgdDIgPSAocyAlIDEpICogNjA7XG5cdFx0aWYgKHR5cGUgPT09ICdmcmFtZXMnKSBzdHIgPSBzZWNzICsgJysnICsgdDIudG9GaXhlZCgwKSArICdmJztcblx0XHRlbHNlIHN0ciArPSAoKHMgJSAxKS50b0ZpeGVkKDIpKS5zdWJzdHJpbmcoMSk7XG5cdFx0Ly8gZWxzZSBzdHIgPSBtaW5zICsgJzonICsgc2Vjc19taWNybztcblx0XHQvLyBlbHNlIHN0ciA9IHNlY3NfbWljcm8gKyAncyc7IC8vLyAudG9GaXhlZCgyKVxuXHR9XG5cdHJldHVybiBzdHI7XHRcbn1cblxuLy8gZ2V0IG9iamVjdCBhdCB0aW1lXG5mdW5jdGlvbiBmaW5kVGltZWluTGF5ZXIobGF5ZXIsIHRpbWUpIHtcblx0dmFyIHZhbHVlcyA9IGxheWVyLnZhbHVlcztcblx0dmFyIGksIGlsO1xuXG5cdC8vIFRPRE8gb3B0aW1pemUgYnkgY2hlY2tpbmcgdGltZSAvIGJpbmFyeSBzZWFyY2hcblxuXHRmb3IgKGk9MCwgaWw9dmFsdWVzLmxlbmd0aDsgaTxpbDsgaSsrKSB7XG5cdFx0dmFyIHZhbHVlID0gdmFsdWVzW2ldO1xuXHRcdGlmICh2YWx1ZS50aW1lID09PSB0aW1lKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRpbmRleDogaSxcblx0XHRcdFx0b2JqZWN0OiB2YWx1ZVxuXHRcdFx0fTtcblx0XHR9IGVsc2UgaWYgKHZhbHVlLnRpbWUgPiB0aW1lKSB7XG5cdFx0XHRyZXR1cm4gaTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gaTtcbn1cblxuXG5mdW5jdGlvbiB0aW1lQXRMYXllcihsYXllciwgdCkge1xuXHQvLyBGaW5kIHRoZSB2YWx1ZSBvZiBsYXllciBhdCB0IHNlY29uZHMuXG5cdC8vIHRoaXMgZXhwZWN0IGxheWVyIHRvIGJlIHNvcnRlZFxuXHQvLyBub3QgdGhlIG1vc3Qgb3B0aW1pemVkIGZvciBub3csIGJ1dCB3b3VsZCBkby5cblxuXHR2YXIgdmFsdWVzID0gbGF5ZXIudmFsdWVzO1xuXHR2YXIgaSwgaWwsIGVudHJ5LCBwcmV2X2VudHJ5O1xuXG5cdGlsID0gdmFsdWVzLmxlbmd0aDtcblxuXHQvLyBjYW4ndCBkbyBhbnl0aGluZ1xuXHRpZiAoaWwgPT09IDApIHJldHVybjtcblxuXHRpZiAobGF5ZXIuX211dGUpIHJldHVyblxuXG5cdC8vIGZpbmQgYm91bmRhcnkgY2FzZXNcblx0ZW50cnkgPSB2YWx1ZXNbMF07XG5cdGlmICh0IDwgZW50cnkudGltZSkge1xuXHRcdHJldHVybiB7XG5cdFx0XHR2YWx1ZTogZW50cnkudmFsdWUsXG5cdFx0XHRjYW5fdHdlZW46IGZhbHNlLCAvLyBjYW5ub3QgdHdlZW5cblx0XHRcdGtleWZyYW1lOiBmYWxzZSAvLyBub3Qgb24ga2V5ZnJhbWVcblx0XHR9O1xuXHR9XG5cblx0Zm9yIChpPTA7IGk8aWw7IGkrKykge1xuXHRcdHByZXZfZW50cnkgPSBlbnRyeTtcblx0XHRlbnRyeSA9IHZhbHVlc1tpXTtcblxuXHRcdGlmICh0ID09PSBlbnRyeS50aW1lKSB7XG5cdFx0XHQvLyBvbmx5IGV4Y2VwdGlvbiBpcyBvbiB0aGUgbGFzdCBLRiwgd2hlcmUgd2UgZGlzcGxheSB0d2VlbiBmcm9tIHByZXYgZW50cnlcblx0XHRcdGlmIChpID09PSBpbCAtIDEpIHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHQvLyBpbmRleDogaSxcblx0XHRcdFx0XHRlbnRyeTogcHJldl9lbnRyeSxcblx0XHRcdFx0XHR0d2VlbjogcHJldl9lbnRyeS50d2Vlbixcblx0XHRcdFx0XHRjYW5fdHdlZW46IGlsID4gMSxcblx0XHRcdFx0XHR2YWx1ZTogZW50cnkudmFsdWUsXG5cdFx0XHRcdFx0a2V5ZnJhbWU6IHRydWVcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC8vIGluZGV4OiBpLFxuXHRcdFx0XHRlbnRyeTogZW50cnksXG5cdFx0XHRcdHR3ZWVuOiBlbnRyeS50d2Vlbixcblx0XHRcdFx0Y2FuX3R3ZWVuOiBpbCA+IDEsXG5cdFx0XHRcdHZhbHVlOiBlbnRyeS52YWx1ZSxcblx0XHRcdFx0a2V5ZnJhbWU6IHRydWUgLy8gaWwgPiAxXG5cdFx0XHR9O1xuXHRcdH1cblx0XHRpZiAodCA8IGVudHJ5LnRpbWUpIHtcblx0XHRcdC8vIHBvc3NpYmx5IGEgdHdlZW5cbi8qXG5cdFx0XHRpZiAoIXByZXZfZW50cnkudHdlZW4pIHsgLy8gb3IgaWYgdmFsdWUgaXMgbm9uZVxuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdHZhbHVlOiBwcmV2X2VudHJ5LnZhbHVlLFxuXHRcdFx0XHRcdHR3ZWVuOiBmYWxzZSxcblx0XHRcdFx0XHRlbnRyeTogcHJldl9lbnRyeSxcblx0XHRcdFx0XHRjYW5fdHdlZW46IHRydWUsXG5cdFx0XHRcdFx0a2V5ZnJhbWU6IGZhbHNlXG5cdFx0XHRcdH07XG5cdFx0XHR9XG4qL1xuXG5cdFx0XHQvLyBjYWxjdWxhdGUgdHdlZW5cbi8qXG5cdFx0XHR2YXIgdGltZV9kaWZmID0gZW50cnkudGltZSAtIHByZXZfZW50cnkudGltZTtcblx0XHRcdHZhciB2YWx1ZV9kaWZmID0gZW50cnkudmFsdWUgLSBwcmV2X2VudHJ5LnZhbHVlO1xuXHRcdFx0dmFyIHR3ZWVuID0gcHJldl9lbnRyeS50d2VlbjtcblxuXHRcdFx0dmFyIGR0ID0gdCAtIHByZXZfZW50cnkudGltZTtcblx0XHRcdHZhciBrID0gZHQgLyB0aW1lX2RpZmY7XG5cdFx0XHR2YXIgbmV3X3ZhbHVlID0gcHJldl9lbnRyeS52YWx1ZSArIFR3ZWVuc1t0d2Vlbl0oaykgKiB2YWx1ZV9kaWZmO1xuKi9cbiAgICAgIC8vIGNhbGN1bGF0ZSBjb2xvciB0d2VlblxuXHRcdFx0dmFyIHRpbWVfZGlmZiA9IGVudHJ5LnRpbWUgLSBwcmV2X2VudHJ5LnRpbWU7XG5cblx0XHRcdGlmKGVudHJ5LnZhbHVlID09IDApIHtcblx0XHRcdFx0cmdiID0ge3I6IDAsIGc6IDAsIGI6IDB9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YXIgZW50cnlSR0IgPSAvXiM/KFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pJC9pLmV4ZWMoZW50cnkudmFsdWUpO1xuXHRcdFx0XHRyZ2IgPSB7XG5cdFx0XHRcdFx0XHRcdHI6IHBhcnNlSW50KGVudHJ5UkdCWzFdLCAxNiksXG5cdFx0XHRcdFx0XHRcdGc6IHBhcnNlSW50KGVudHJ5UkdCWzJdLCAxNiksXG5cdFx0XHRcdFx0XHRcdGI6IHBhcnNlSW50KGVudHJ5UkdCWzNdLCAxNilcblx0XHRcdFx0fTtcblx0XHRcdH1cblxuICAgICAgaWYocHJldl9lbnRyeS52YWx1ZSA9PSAwKSB7XG4gICAgICAgIHByZXZfcmdiID0ge3I6IDAsIGc6IDAsIGI6IDB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcHJldl9lbnRyeVJHQiA9IC9eIz8oW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkkL2kuZXhlYyhwcmV2X2VudHJ5LnZhbHVlKTtcbiAgICAgICAgcHJldl9yZ2IgPSB7XG4gICAgICAgICAgcjogcGFyc2VJbnQocHJldl9lbnRyeVJHQlsxXSwgMTYpLFxuICAgICAgICAgIGc6IHBhcnNlSW50KHByZXZfZW50cnlSR0JbMl0sIDE2KSxcbiAgICAgICAgICBiOiBwYXJzZUludChwcmV2X2VudHJ5UkdCWzNdLCAxNilcbiAgICAgICAgfTtcbiAgICAgIH1cblxuXHRcdFx0IHZhciBkdCA9IHQgLSBwcmV2X2VudHJ5LnRpbWU7XG5cdFx0XHQgdmFyIGsgPSBkdCAvIHRpbWVfZGlmZjtcblxuXHRcdFx0IHZhciB2YWx1ZV9kaWZmLCBuZXdWYWwgPSB7fVxuXHRcdFx0IHZhbHVlX2RpZmYgPSB7XG5cdFx0XHRcdCByOiByZ2IuciAtIHByZXZfcmdiLnIsXG5cdFx0XHRcdCBnOiByZ2IuZyAtIHByZXZfcmdiLmcsXG5cdFx0XHRcdCBiOiByZ2IuYiAtIHByZXZfcmdiLmJcblx0XHRcdCB9XG5cblx0XHRcdCBuZXdWYWwuciA9IHByZXZfcmdiLnIgKyBUd2VlbnNbJ2xpbmVhciddKGspICogdmFsdWVfZGlmZi5yO1xuXHRcdFx0IG5ld1ZhbC5nID0gcHJldl9yZ2IuZyArIFR3ZWVuc1snbGluZWFyJ10oaykgKiB2YWx1ZV9kaWZmLmc7XG5cdFx0XHQgbmV3VmFsLmIgPSBwcmV2X3JnYi5iICsgVHdlZW5zWydsaW5lYXInXShrKSAqIHZhbHVlX2RpZmYuYjtcblxuXHRcdFx0IGNvbnNvbGUubG9nKG5ld1ZhbClcbiAgICAgICBuZXdWYWwgPSByZ2JUb0hleChuZXdWYWwuciwgbmV3VmFsLmcsIG5ld1ZhbC5iKVxuXG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRlbnRyeTogcHJldl9lbnRyeSxcblx0XHRcdFx0dmFsdWU6IG5ld1ZhbCxcblx0XHRcdFx0dHdlZW46IHByZXZfZW50cnkudHdlZW4sXG5cdFx0XHRcdGNhbl90d2VlbjogdHJ1ZSxcblx0XHRcdFx0a2V5ZnJhbWU6IGZhbHNlXG5cdFx0XHR9O1xuXHRcdH1cblx0fVxuXHQvLyB0aW1lIGlzIGFmdGVyIGFsbCBlbnRyaWVzXG5cdHJldHVybiB7XG5cdFx0dmFsdWU6IGVudHJ5LnZhbHVlLFxuXHRcdGNhbl90d2VlbjogZmFsc2UsXG5cdFx0a2V5ZnJhbWU6IGZhbHNlXG5cdH07IFxuXG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudFRvSGV4KGMpIHtcbiAgdmFyIGhleCA9IE1hdGgucm91bmQoYykudG9TdHJpbmcoMTYpO1xuICByZXR1cm4gaGV4Lmxlbmd0aCA9PSAxID8gXCIwXCIgKyBoZXggOiBoZXg7XG59XG5cbmZ1bmN0aW9uIHJnYlRvSGV4KHIsIGcsIGIpIHtcbiAgcmV0dXJuIFwiI1wiICsgY29tcG9uZW50VG9IZXgocikgKyBjb21wb25lbnRUb0hleChnKSArIGNvbXBvbmVudFRvSGV4KGIpO1xufVxuXG5cbmZ1bmN0aW9uIHByb3h5X2N0eChjdHgpIHtcblx0Ly8gQ3JlYXRlcyBhIHByb3h5IDJkIGNvbnRleHQgd3JhcHBlciB3aGljaCBcblx0Ly8gYWxsb3dzIHRoZSBmbHVlbnQgLyBjaGFpbmluZyBBUEkuXG5cdHZhciB3cmFwcGVyID0ge307XG5cblx0ZnVuY3Rpb24gcHJveHlfZnVuY3Rpb24oYykge1xuXHRcdHJldHVybiBmdW5jdGlvbigpIHtcblx0XHRcdC8vIFdhcm5pbmc6IHRoaXMgZG9lc24ndCByZXR1cm4gdmFsdWUgb2YgZnVuY3Rpb24gY2FsbFxuXHRcdFx0Y3R4W2NdLmFwcGx5KGN0eCwgYXJndW1lbnRzKTtcblx0XHRcdHJldHVybiB3cmFwcGVyO1xuXHRcdH07XG5cdH1cblxuXHRmdW5jdGlvbiBwcm94eV9wcm9wZXJ0eShjKSB7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uKHYpIHtcblx0XHRcdGN0eFtjXSA9IHY7XG5cdFx0XHRyZXR1cm4gd3JhcHBlcjtcblx0XHR9O1xuXHR9XG5cblx0d3JhcHBlci5ydW4gPSBmdW5jdGlvbihhcmdzKSB7XG5cdFx0YXJncyh3cmFwcGVyKTtcblx0XHRyZXR1cm4gd3JhcHBlcjtcblx0fTtcblxuXHRmb3IgKHZhciBjIGluIGN0eCkge1xuXHRcdC8vIGlmICghY3R4Lmhhc093blByb3BlcnR5KGMpKSBjb250aW51ZTtcblx0XHQvLyBjb25zb2xlLmxvZyhjLCB0eXBlb2YoY3R4W2NdKSwgY3R4Lmhhc093blByb3BlcnR5KGMpKTtcblx0XHQvLyBzdHJpbmcsIG51bWJlciwgYm9vbGVhbiwgZnVuY3Rpb24sIG9iamVjdFxuXG5cdFx0dmFyIHR5cGUgPSB0eXBlb2YoY3R4W2NdKTtcblx0XHRzd2l0Y2godHlwZSkge1xuXHRcdFx0Y2FzZSAnb2JqZWN0Jzpcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdmdW5jdGlvbic6XG5cdFx0XHRcdHdyYXBwZXJbY10gPSBwcm94eV9mdW5jdGlvbihjKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHR3cmFwcGVyW2NdID0gcHJveHlfcHJvcGVydHkoYyk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiB3cmFwcGVyO1xufVxuIiwidmFyXG5cdFRoZW1lID0gcmVxdWlyZSgnLi90aGVtZScpLFxuXHRVSU51bWJlciA9IHJlcXVpcmUoJy4vdWlfbnVtYmVyJyksXG5cdFVJQ29sb3IgPSByZXF1aXJlKCcuL3VpX2NvbG9yX2lucHV0JyksXG5cdFR3ZWVucyA9IHJlcXVpcmUoJy4vdXRpbF90d2VlbicpLFxuXHRTZXR0aW5ncyA9IHJlcXVpcmUoJy4vc2V0dGluZ3MnKSxcblx0dXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJylcbjtcblxuLy8gVE9ETyAtIHRhZ2dlZCBieSBpbmRleCBpbnN0ZWFkLCB3b3JrIG9mZiBsYXllcnMuXG5cbmZ1bmN0aW9uIExheWVyVmlldyhsYXllciwgZGlzcGF0Y2hlcikge1xuXHR2YXIgZG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cblx0dmFyIGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXHRcblx0bGFiZWwuc3R5bGUuY3NzVGV4dCA9ICdmb250LXNpemU6IDEycHg7IHBhZGRpbmc6IDRweDsnO1xuXG5cdHZhciBkcm9wZG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuXHR2YXIgb3B0aW9uO1xuXHRkcm9wZG93bi5zdHlsZS5jc3NUZXh0ID0gJ2ZvbnQtc2l6ZTogMTBweDsgd2lkdGg6IDYwcHg7IG1hcmdpbjogMDsgZmxvYXQ6IHJpZ2h0OyB0ZXh0LWFsaWduOiByaWdodDsnO1xuXG5cdGZvciAodmFyIGsgaW4gVHdlZW5zKSB7XG5cdFx0b3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG5cdFx0b3B0aW9uLnRleHQgPSBrO1xuXHRcdGRyb3Bkb3duLmFwcGVuZENoaWxkKG9wdGlvbik7XG5cdH1cblxuXHRkcm9wZG93bi5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbihlKSB7XG5cdFx0ZGlzcGF0Y2hlci5maXJlKCdlYXNlJywgbGF5ZXIsIGRyb3Bkb3duLnZhbHVlKTtcblx0fSk7XG5cdHZhciBoZWlnaHQgPSAoU2V0dGluZ3MuTElORV9IRUlHSFQgLSAxKTtcblxuXHR2YXIga2V5ZnJhbWVfYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cdGtleWZyYW1lX2J1dHRvbi5pbm5lckhUTUwgPSAnJiM5NjcyOyc7IC8vICcmZGlhbXM7JyAmIzk2NzE7IDk2NzkgOTY3MCA5NjcyXG5cdGtleWZyYW1lX2J1dHRvbi5zdHlsZS5jc3NUZXh0ID0gJ2JhY2tncm91bmQ6IG5vbmU7IGZvbnQtc2l6ZTogMTJweDsgcGFkZGluZzogMHB4OyBmb250LWZhbWlseTogbW9ub3NwYWNlOyBmbG9hdDogcmlnaHQ7IHdpZHRoOiAyMHB4OyBoZWlnaHQ6ICcgKyBoZWlnaHQgKyAncHg7IGJvcmRlci1zdHlsZTpub25lOyBvdXRsaW5lOiBub25lOyc7IC8vICBib3JkZXItc3R5bGU6aW5zZXQ7XG5cdFxuXHRrZXlmcmFtZV9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG5cdFx0Y29uc29sZS5sb2coJ2NsaWNrZWQ6a2V5ZnJhbWluZy4uLicsIHN0YXRlLmdldCgnX3ZhbHVlJykudmFsdWUpO1xuXHRcdGRpc3BhdGNoZXIuZmlyZSgna2V5ZnJhbWUnLCBsYXllciwgc3RhdGUuZ2V0KCdfdmFsdWUnKS52YWx1ZSk7XG5cdH0pO1xuXG5cdC8qXG5cdC8vIFByZXYgS2V5ZnJhbWVcblx0dmFyIGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHRidXR0b24udGV4dENvbnRlbnQgPSAnPCc7XG5cdGJ1dHRvbi5zdHlsZS5jc3NUZXh0ID0gJ2ZvbnQtc2l6ZTogMTJweDsgcGFkZGluZzogMXB4OyAnO1xuXHRkb20uYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuXHQvLyBOZXh0IEtleWZyYW1lXG5cdGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHRidXR0b24udGV4dENvbnRlbnQgPSAnPic7XG5cdGJ1dHRvbi5zdHlsZS5jc3NUZXh0ID0gJ2ZvbnQtc2l6ZTogMTJweDsgcGFkZGluZzogMXB4OyAnO1xuXHRkb20uYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuXHRcblx0Ki9cblxuXHRmdW5jdGlvbiBUb2dnbGVCdXR0b24odGV4dCkge1xuXHRcdC8vIGZvciBjc3MgYmFzZWQgYnV0dG9uIHNlZSBodHRwOi8vY29kZXBlbi5pby9tYWxsZW5kZW8vcGVuL2VMSWlHXG5cblx0XHR2YXIgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cdFx0YnV0dG9uLnRleHRDb250ZW50ID0gdGV4dDtcblxuXHRcdHV0aWxzLnN0eWxlKGJ1dHRvbiwge1xuXHRcdFx0Zm9udFNpemU6ICcxMnB4Jyxcblx0XHRcdHBhZGRpbmc6ICcxcHgnLFxuXHRcdFx0Ym9yZGVyU2l6ZTogJzJweCcsXG5cdFx0XHRvdXRsaW5lOiAnbm9uZScsXG5cdFx0XHRiYWNrZ3JvdW5kOiAnI2ZmZidcblx0XHR9KTtcblxuXHRcdHRoaXMucHJlc3NlZCA9IGZhbHNlO1xuXG5cdFx0YnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcblx0XHRcdHRoaXMucHJlc3NlZCA9ICF0aGlzLnByZXNzZWQ7XG5cblx0XHRcdHV0aWxzLnN0eWxlKGJ1dHRvbiwge1xuXHRcdFx0XHRib3JkZXJTdHlsZTogdGhpcy5wcmVzc2VkID8gJ2luc2V0JyA6ICdvdXRzZXQnLCAvLyBpbnNldCBvdXRzZXQgZ3Jvb3ZlIHJpZGdlXG5cdFx0XHR9KVxuXG5cdFx0XHRpZiAodGhpcy5vbkNsaWNrKSB0aGlzLm9uQ2xpY2soKTtcblx0XHR9LmJpbmQodGhpcyk7XG5cblx0XHR0aGlzLmRvbSA9IGJ1dHRvbjtcblxuXHR9XG5cbi8qXG5cdC8vIFNvbG9cblx0dmFyIHNvbG9fdG9nZ2xlID0gbmV3IFRvZ2dsZUJ1dHRvbignUycpO1xuXHRkb20uYXBwZW5kQ2hpbGQoc29sb190b2dnbGUuZG9tKTtcblxuXHRzb2xvX3RvZ2dsZS5vbkNsaWNrID0gZnVuY3Rpb24oKSB7XG5cdFx0ZGlzcGF0Y2hlci5maXJlKCdhY3Rpb246c29sbycsIGxheWVyLCBzb2xvX3RvZ2dsZS5wcmVzc2VkKTtcblx0fVxuXG5cdC8vIE11dGVcblx0dmFyIG11dGVfdG9nZ2xlID0gbmV3IFRvZ2dsZUJ1dHRvbignTScpO1xuXHRkb20uYXBwZW5kQ2hpbGQobXV0ZV90b2dnbGUuZG9tKTtcblxuXHRtdXRlX3RvZ2dsZS5vbkNsaWNrID0gZnVuY3Rpb24oKSB7XG5cdFx0ZGlzcGF0Y2hlci5maXJlKCdhY3Rpb246bXV0ZScsIGxheWVyLCBtdXRlX3RvZ2dsZS5wcmVzc2VkKTtcblx0fVxuKi9cblxuXG5cdHZhciBudW1iZXIgPSBuZXcgVUlDb2xvcihsYXllciwgZGlzcGF0Y2hlcik7XG5cblx0bnVtYmVyLm9uQ2hhbmdlLmRvKGZ1bmN0aW9uKHZhbHVlLCBkb25lKSB7XG5cdFx0c3RhdGUuZ2V0KCdfdmFsdWUnKS52YWx1ZSA9IHZhbHVlO1xuXHRcdGRpc3BhdGNoZXIuZmlyZSgndmFsdWUuY2hhbmdlJywgbGF5ZXIsIHZhbHVlLCBkb25lKTtcblx0fSk7XG5cblx0dXRpbHMuc3R5bGUobnVtYmVyLmRvbSwge1xuXHRcdGZsb2F0OiAncmlnaHQnXG5cdH0pO1xuXG5cdGRvbS5hcHBlbmRDaGlsZChsYWJlbCk7XG5cdGRvbS5hcHBlbmRDaGlsZChrZXlmcmFtZV9idXR0b24pO1xuXHRkb20uYXBwZW5kQ2hpbGQobnVtYmVyLmRvbSk7XG5cdC8vZG9tLmFwcGVuZENoaWxkKGRyb3Bkb3duKTtcblx0XG5cblx0dXRpbHMuc3R5bGUoZG9tLCB7XG5cdFx0dGV4dEFsaWduOiAnbGVmdCcsXG5cdFx0bWFyZ2luOiAnMHB4IDBweCAwcHggNXB4Jyxcblx0XHRib3JkZXJCb3R0b206ICcxcHggc29saWQgJyArIFRoZW1lLmIsXG5cdFx0dG9wOiAwLFxuXHRcdGxlZnQ6IDAsXG5cdFx0aGVpZ2h0OiAoU2V0dGluZ3MuTElORV9IRUlHSFQgLSAxICkgKyAncHgnLFxuXHRcdGNvbG9yOiBUaGVtZS5jXG5cdH0pO1xuXG5cdHRoaXMuZG9tID0gZG9tO1xuXG5cdHRoaXMucmVwYWludCA9IHJlcGFpbnQ7XG5cdHZhciBzdGF0ZTtcblxuXHR0aGlzLnNldFN0YXRlID0gZnVuY3Rpb24obCwgcykge1xuXHRcdGxheWVyID0gbDtcblx0XHRzdGF0ZSA9IHM7XG5cblx0XHR2YXIgdG1wX3ZhbHVlID0gc3RhdGUuZ2V0KCdfdmFsdWUnKTtcblx0XHRpZiAodG1wX3ZhbHVlLnZhbHVlID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHRtcF92YWx1ZS52YWx1ZSA9IDA7XG5cdFx0fVxuXG5cdFx0bnVtYmVyLnNldFZhbHVlKHRtcF92YWx1ZS52YWx1ZSk7XG5cdFx0bGFiZWwudGV4dENvbnRlbnQgPSBzdGF0ZS5nZXQoJ25hbWUnKS52YWx1ZTtcblxuXHRcdHJlcGFpbnQoKTtcblx0fTtcblxuXHRmdW5jdGlvbiByZXBhaW50KHMpIHtcblxuXHRcdGRyb3Bkb3duLnN0eWxlLm9wYWNpdHkgPSAwO1xuXHRcdGRyb3Bkb3duLmRpc2FibGVkID0gdHJ1ZTtcblx0XHRrZXlmcmFtZV9idXR0b24uc3R5bGUuY29sb3IgPSBUaGVtZS5iO1xuXHRcdC8vIGtleWZyYW1lX2J1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuXHRcdC8vIGtleWZyYW1lX2J1dHRvbi5zdHlsZS5ib3JkZXJTdHlsZSA9ICdzb2xpZCc7XG5cblx0XHR2YXIgdHdlZW4gPSBudWxsO1xuXHRcdHZhciBvID0gdXRpbHMudGltZUF0TGF5ZXIobGF5ZXIsIHMpO1xuXG5cdFx0aWYgKCFvKSByZXR1cm47XG5cblx0XHRpZiAoby5jYW5fdHdlZW4pIHtcblx0XHRcdGRyb3Bkb3duLnN0eWxlLm9wYWNpdHkgPSAxO1xuXHRcdFx0ZHJvcGRvd24uZGlzYWJsZWQgPSBmYWxzZTtcblx0XHRcdC8vIGlmIChvLnR3ZWVuKVxuXHRcdFx0ZHJvcGRvd24udmFsdWUgPSBvLnR3ZWVuID8gby50d2VlbiA6ICdub25lJztcblx0XHRcdGlmIChkcm9wZG93bi52YWx1ZSA9PT0gJ25vbmUnKSBkcm9wZG93bi5zdHlsZS5vcGFjaXR5ID0gMC41O1xuXHRcdH1cblxuXHRcdGlmIChvLmtleWZyYW1lKSB7XG5cdFx0XHRrZXlmcmFtZV9idXR0b24uc3R5bGUuY29sb3IgPSBUaGVtZS5jO1xuXHRcdFx0Ly8ga2V5ZnJhbWVfYnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcblx0XHRcdC8vIGtleWZyYW1lX2J1dHRvbi5zdHlsZS5ib3JkZXJTdHlsZSA9ICdpbnNldCc7XG5cdFx0fVxuXG5cdFx0c3RhdGUuZ2V0KCdfdmFsdWUnKS52YWx1ZSA9IG8udmFsdWU7XG5cdFx0bnVtYmVyLnNldFZhbHVlKG8udmFsdWUpO1xuXHRcdG51bWJlci5wYWludCgpO1xuXG5cdFx0ZGlzcGF0Y2hlci5maXJlKCd0YXJnZXQubm90aWZ5JywgbGF5ZXIubmFtZSwgby52YWx1ZSk7XG5cdH1cblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IExheWVyVmlldztcbiIsInZhciBTZXR0aW5ncyA9IHJlcXVpcmUoJy4vc2V0dGluZ3MnKSxcblx0Vmlld0xheWVyID0gcmVxdWlyZSgnLi92aWV3X2xheWVyJyksXG5cdEljb25CdXR0b24gPSByZXF1aXJlKCcuL3VpX2ljb25fYnV0dG9uJyksXG5cdHN0eWxlID0gcmVxdWlyZSgnLi91dGlscycpLnN0eWxlLFxuXHRUaGVtZSA9IHJlcXVpcmUoJy4vdGhlbWUnKSxcblx0U1RPUkFHRV9QUkVGSVggPSByZXF1aXJlKCcuL3V0aWxzJykuU1RPUkFHRV9QUkVGSVgsXG5cdFVJTnVtYmVyID0gcmVxdWlyZSgnLi91aV9udW1iZXInKSxcblx0VUlDb2xvciA9IHJlcXVpcmUoJy4vdWlfbnVtYmVyJylcblx0O1xuXG5mdW5jdGlvbiBMYXllckNhYmluZXQoZGF0YSwgZGlzcGF0Y2hlcikge1xuXHR2YXIgbGF5ZXJfc3RvcmUgPSBkYXRhLmdldCgnbGF5ZXJzJyk7XG5cblx0dmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG5cdHZhciB0b3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0dG9wLnN0eWxlLmNzc1RleHQgPSAnbWFyZ2luOiAwcHg7IHRvcDogMDsgbGVmdDogMDsgaGVpZ2h0OiAnICsgU2V0dGluZ3MuTUFSS0VSX1RSQUNLX0hFSUdIVCArICdweCc7XG5cdC8vIHRvcC5zdHlsZS50ZXh0QWxpZ24gPSAncmlnaHQnO1xuXG5cdHZhciBsYXllcl9zY3JvbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0c3R5bGUobGF5ZXJfc2Nyb2xsLCB7XG5cdFx0cG9zaXRpb246ICdhYnNvbHV0ZScsXG5cdFx0dG9wOiBTZXR0aW5ncy5NQVJLRVJfVFJBQ0tfSEVJR0hUICsgJ3B4Jyxcblx0XHQvLyBoZWlnaHQ6IChTZXR0aW5ncy5oZWlnaHQgLSBTZXR0aW5ncy5NQVJLRVJfVFJBQ0tfSEVJR0hUKSArICdweCdcblx0XHRsZWZ0OiAwLFxuXHRcdHJpZ2h0OiAwLFxuXHRcdGJvdHRvbTogMCxcblx0XHRvdmVyZmxvdzogJ2hpZGRlbidcblx0fSk7XG5cblx0ZGl2LmFwcGVuZENoaWxkKGxheWVyX3Njcm9sbCk7XG5cblx0dmFyIHBsYXlpbmcgPSBmYWxzZTtcblxuXG5cdHZhciBidXR0b25fc3R5bGVzID0ge1xuXHRcdHdpZHRoOiAnMjJweCcsXG5cdFx0aGVpZ2h0OiAnMjJweCcsXG5cdFx0cGFkZGluZzogJzJweCdcblx0fTtcblxuXHR2YXIgb3BfYnV0dG9uX3N0eWxlcyA9IHtcblx0XHR3aWR0aDogJzMycHgnLFxuXHRcdHBhZGRpbmc6ICczcHggNHB4IDNweCA0cHgnXG5cdH07XG5cblxuXHR2YXIgcGxheV9idXR0b24gPSBuZXcgSWNvbkJ1dHRvbigxNiwgJ3BsYXknLCAncGxheScsIGRpc3BhdGNoZXIpO1xuXHRzdHlsZShwbGF5X2J1dHRvbi5kb20sIGJ1dHRvbl9zdHlsZXMsIHsgbWFyZ2luVG9wOiAnMnB4JyB9ICk7XG5cdHBsYXlfYnV0dG9uLm9uQ2xpY2soZnVuY3Rpb24oZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRkaXNwYXRjaGVyLmZpcmUoJ2NvbnRyb2xzLnRvZ2dsZV9wbGF5Jyk7XG5cdH0pO1xuXG5cdHZhciBzdG9wX2J1dHRvbiA9IG5ldyBJY29uQnV0dG9uKDE2LCAnc3RvcCcsICdzdG9wJywgZGlzcGF0Y2hlcik7XG5cdHN0eWxlKHN0b3BfYnV0dG9uLmRvbSwgYnV0dG9uX3N0eWxlcywgeyBtYXJnaW5Ub3A6ICcycHgnIH0gKTtcblx0c3RvcF9idXR0b24ub25DbGljayhmdW5jdGlvbihlKSB7XG5cdFx0ZGlzcGF0Y2hlci5maXJlKCdjb250cm9scy5zdG9wJyk7XG5cdH0pO1xuXG5cblx0dmFyIHVuZG9fYnV0dG9uID0gbmV3IEljb25CdXR0b24oMTYsICd1bmRvJywgJ3VuZG8nLCBkaXNwYXRjaGVyKTtcblx0c3R5bGUodW5kb19idXR0b24uZG9tLCBvcF9idXR0b25fc3R5bGVzKTtcblx0dW5kb19idXR0b24ub25DbGljayhmdW5jdGlvbigpIHtcblx0XHRkaXNwYXRjaGVyLmZpcmUoJ2NvbnRyb2xzLnVuZG8nKTtcblx0fSk7XG5cblx0dmFyIHJlZG9fYnV0dG9uID0gbmV3IEljb25CdXR0b24oMTYsICdyZXBlYXQnLCAncmVkbycsIGRpc3BhdGNoZXIpO1xuXHRzdHlsZShyZWRvX2J1dHRvbi5kb20sIG9wX2J1dHRvbl9zdHlsZXMpO1xuXHRyZWRvX2J1dHRvbi5vbkNsaWNrKGZ1bmN0aW9uKCkge1xuXHRcdGRpc3BhdGNoZXIuZmlyZSgnY29udHJvbHMucmVkbycpO1xuXHR9KTtcblxuXHR2YXIgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXHRyYW5nZS50eXBlID0gXCJyYW5nZVwiO1xuXHRyYW5nZS52YWx1ZSA9IDA7XG5cdHJhbmdlLm1pbiA9IC0xO1xuXHRyYW5nZS5tYXggPSArMTtcblx0cmFuZ2Uuc3RlcCA9IDAuMTI1O1xuXG5cdHN0eWxlKHJhbmdlLCB7XG5cdFx0d2lkdGg6ICc5MHB4Jyxcblx0XHRtYXJnaW46ICcwcHgnLFxuXHRcdG1hcmdpbkxlZnQ6ICcycHgnLFxuXHRcdG1hcmdpblJpZ2h0OiAnMnB4J1xuXHR9KTtcblxuXHR2YXIgZHJhZ2dpbmdSYW5nZSA9IDA7XG5cblx0cmFuZ2UuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZnVuY3Rpb24oKSB7XG5cdFx0ZHJhZ2dpbmdSYW5nZSA9IDE7XG5cdH0pO1xuXG5cdHJhbmdlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBmdW5jdGlvbigpIHtcblx0XHRkcmFnZ2luZ1JhbmdlID0gMDtcblx0XHRjaGFuZ2VSYW5nZSgpO1xuXHR9KTtcblxuXHRyYW5nZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBmdW5jdGlvbigpIHtcblx0XHRpZiAoIWRyYWdnaW5nUmFuZ2UpIHJldHVybjtcblx0XHRjaGFuZ2VSYW5nZSgpO1xuXHR9KTtcblxuXHRkaXYuYXBwZW5kQ2hpbGQodG9wKTtcblxuXHR2YXIgdGltZV9vcHRpb25zID0ge1xuXHRcdG1pbjogMCxcblx0XHRzdGVwOiAwLjEyNVxuXHR9O1xuXG5cdHZhciBjdXJyZW50VGltZSA9IG5ldyBVSU51bWJlcih0aW1lX29wdGlvbnMpO1xuXHR2YXIgdG90YWxUaW1lID0gbmV3IFVJTnVtYmVyKHRpbWVfb3B0aW9ucyk7XG5cblx0dmFyIGN1cnJlbnRUaW1lU3RvcmUgPSBkYXRhLmdldCgndWk6Y3VycmVudFRpbWUnKTtcblx0dmFyIHRvdGFsVGltZVN0b3JlID0gZGF0YS5nZXQoJ3VpOnRvdGFsVGltZScpO1xuXG5cdC8vIFVJMlN0b3JlQmluZCh2aWV3LCBkYXRhc3RvcmUpIHtcblx0Ly8gXHR2aWV3Lm9uQ2hhbmdlLmRvKGZ1bmN0aW9uKHYpIHtcblx0Ly8gXHRcdGRhdGFzdG9yZS52YWx1ZSA9IHZpZXc7XG5cdC8vIFx0fSlcblxuXHQvLyBcdGRhdGFzdG9yZS5vbkNoYW5nZS5kbyhmdW5jdGlvbih2KSB7XG5cdC8vIFx0XHR2aWV3LnNldFZhbHVlID0gdjtcblx0Ly8gXHR9KVxuXHQvLyB9XG5cblx0Y3VycmVudFRpbWUub25DaGFuZ2UuZG8oZnVuY3Rpb24odmFsdWUsIGRvbmUpIHtcblx0XHRkaXNwYXRjaGVyLmZpcmUoJ3RpbWUudXBkYXRlJywgdmFsdWUpO1xuXHRcdC8vIHJlcGFpbnQoKTtcblx0fSk7XG5cblx0dG90YWxUaW1lLm9uQ2hhbmdlLmRvKGZ1bmN0aW9uKHZhbHVlLCBkb25lKSB7XG5cdFx0dG90YWxUaW1lU3RvcmUudmFsdWUgPSB2YWx1ZTtcblx0XHRyZXBhaW50KCk7XG5cdFx0dmFyIHZhbCA9IChOdW1iZXIocmFuZ2UudmFsdWUpICsgMSkvMlxuXHRcdGNvbnNvbGUubG9nKHZhbCpkYXRhLmdldCgndWk6dG90YWxUaW1lJykudmFsdWUpXG4gICAgZGlzcGF0Y2hlci5maXJlKCd1cGRhdGUuc2NhbGUnLCB2YWwvZGF0YS5nZXQoJ3VpOnRvdGFsVGltZScpLnZhbHVlKTtcbiAgICAvL2Rpc3BhdGNoZXIuZmlyZSgndXBkYXRlLnNjYWxlJywgTWF0aC5wb3coMTAwLCAtcmFuZ2UudmFsdWUpICk7XG5cdH0pO1xuXG5cdC8vIFBsYXkgQ29udHJvbHNcblx0dG9wLmFwcGVuZENoaWxkKGN1cnJlbnRUaW1lLmRvbSk7XG5cdHRvcC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnLycpKTsgLy8gMDowMDowMCAvIDA6MTA6MDBcblx0dG9wLmFwcGVuZENoaWxkKHRvdGFsVGltZS5kb20pXG5cdHRvcC5hcHBlbmRDaGlsZChwbGF5X2J1dHRvbi5kb20pO1xuXHR0b3AuYXBwZW5kQ2hpbGQoc3RvcF9idXR0b24uZG9tKTtcblx0dG9wLmFwcGVuZENoaWxkKHJhbmdlKTtcblxuXG5cdHZhciBvcGVyYXRpb25zX2RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRzdHlsZShvcGVyYXRpb25zX2Rpdiwge1xuXHRcdG1hcmdpblRvcDogJzRweCcsXG5cdFx0Ly8gYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICcgKyBUaGVtZS5iXG5cdH0pO1xuXHQvL3RvcC5hcHBlbmRDaGlsZChvcGVyYXRpb25zX2Rpdik7XG5cblxuXHQvLyBvcGVuIF9hbHRcblx0dmFyIGZpbGVfb3BlbiA9IG5ldyBJY29uQnV0dG9uKDE2LCAnZm9sZGVyX29wZW5fYWx0JywgJ09wZW4nLCBkaXNwYXRjaGVyKTtcblx0c3R5bGUoZmlsZV9vcGVuLmRvbSwgb3BfYnV0dG9uX3N0eWxlcyk7XG5cdG9wZXJhdGlvbnNfZGl2LmFwcGVuZENoaWxkKGZpbGVfb3Blbi5kb20pO1xuXG5cdGZ1bmN0aW9uIHBvcHVsYXRlT3BlbigpIHtcblx0XHR3aGlsZSAoZHJvcGRvd24ubGVuZ3RoKSB7XG5cdFx0XHRkcm9wZG93bi5yZW1vdmUoMCk7XG5cdFx0fVxuXG5cdFx0dmFyIG9wdGlvbjtcblx0XHRvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcblx0XHRvcHRpb24udGV4dCA9ICdOZXcnO1xuXHRcdG9wdGlvbi52YWx1ZSA9ICcqbmV3Kic7XG5cdFx0ZHJvcGRvd24uYWRkKG9wdGlvbik7XG5cblx0XHRvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcblx0XHRvcHRpb24udGV4dCA9ICdJbXBvcnQgSlNPTic7XG5cdFx0b3B0aW9uLnZhbHVlID0gJyppbXBvcnQqJztcblx0XHRkcm9wZG93bi5hZGQob3B0aW9uKTtcblxuXHRcdC8vIERvZXNuJ3Qgd29ya1xuXHRcdC8vIG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuXHRcdC8vIG9wdGlvbi50ZXh0ID0gJ1NlbGVjdCBGaWxlJztcblx0XHQvLyBvcHRpb24udmFsdWUgPSAnKnNlbGVjdConO1xuXHRcdC8vIGRyb3Bkb3duLmFkZChvcHRpb24pO1xuXG5cdFx0b3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG5cdFx0b3B0aW9uLnRleHQgPSAnPT1PcGVuPT0nO1xuXHRcdG9wdGlvbi5kaXNhYmxlZCA9IHRydWU7XG5cdFx0b3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcblx0XHRkcm9wZG93bi5hZGQob3B0aW9uKTtcblxuXHRcdHZhciByZWdleCA9IG5ldyBSZWdFeHAoU1RPUkFHRV9QUkVGSVggKyAnKC4qKScpO1xuXHRcdGZvciAodmFyIGtleSBpbiBsb2NhbFN0b3JhZ2UpIHtcblx0XHRcdC8vIGNvbnNvbGUubG9nKGtleSk7XG5cblx0XHRcdHZhciBtYXRjaCA9IHJlZ2V4LmV4ZWMoa2V5KTtcblx0XHRcdGlmIChtYXRjaCkge1xuXHRcdFx0XHRvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcblx0XHRcdFx0b3B0aW9uLnRleHQgPSBtYXRjaFsxXTtcblxuXHRcdFx0XHRkcm9wZG93bi5hZGQob3B0aW9uKTtcblx0XHRcdH1cblx0XHR9XG5cblx0fVxuXG5cdC8vIGxpc3RlbiBvbiBvdGhlciB0YWJzXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzdG9yYWdlJywgZnVuY3Rpb24oZSkge1xuXHRcdHZhciByZWdleCA9IG5ldyBSZWdFeHAoU1RPUkFHRV9QUkVGSVggKyAnKC4qKScpO1xuXHRcdGlmIChyZWdleC5leGVjKGUua2V5KSkge1xuXHRcdFx0cG9wdWxhdGVPcGVuKCk7XG5cdFx0fVxuXHR9KTtcblxuXHRkaXNwYXRjaGVyLm9uKCdzYXZlOmRvbmUnLCBwb3B1bGF0ZU9wZW4pO1xuXG5cdHZhciBkcm9wZG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuXG5cdHN0eWxlKGRyb3Bkb3duLCB7XG5cdFx0cG9zaXRpb246ICdhYnNvbHV0ZScsXG5cdFx0Ly8gcmlnaHQ6IDAsXG5cdFx0Ly8gbWFyZ2luOiAwLFxuXHRcdG9wYWNpdHk6IDAsXG5cdFx0d2lkdGg6ICcxNnB4Jyxcblx0XHRoZWlnaHQ6ICcxNnB4Jyxcblx0XHQvLyB6SW5kZXg6IDEsXG5cdH0pO1xuXG5cdGRyb3Bkb3duLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uKGUpIHtcblx0XHQvLyBjb25zb2xlLmxvZygnY2hhbmdlZCcsIGRyb3Bkb3duLmxlbmd0aCwgZHJvcGRvd24udmFsdWUpO1xuXG5cdFx0c3dpdGNoIChkcm9wZG93bi52YWx1ZSkge1xuXHRcdFx0Y2FzZSAnKm5ldyonOlxuXHRcdFx0XHRkaXNwYXRjaGVyLmZpcmUoJ25ldycpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJyppbXBvcnQqJzpcblx0XHRcdFx0ZGlzcGF0Y2hlci5maXJlKCdpbXBvcnQnKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICcqc2VsZWN0Kic6XG5cdFx0XHRcdGRpc3BhdGNoZXIuZmlyZSgnb3BlbmZpbGUnKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRkaXNwYXRjaGVyLmZpcmUoJ29wZW4nLCBkcm9wZG93bi52YWx1ZSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fSk7XG5cblx0ZmlsZV9vcGVuLmRvbS5pbnNlcnRCZWZvcmUoZHJvcGRvd24sIGZpbGVfb3Blbi5kb20uZmlyc3RDaGlsZCk7XG5cblx0cG9wdWxhdGVPcGVuKCk7XG5cblx0Ly8gLy8ganNvbiBpbXBvcnRcblx0Ly8gdmFyIGltcG9ydF9qc29uID0gbmV3IEljb25CdXR0b24oMTYsICdzaWduaW4nLCAnSW1wb3J0IEpTT04nLCBkaXNwYXRjaGVyKTtcblx0Ly8gb3BlcmF0aW9uc19kaXYuYXBwZW5kQ2hpbGQoaW1wb3J0X2pzb24uZG9tKTtcblx0Ly8gaW1wb3J0X2pzb24ub25DbGljayhmdW5jdGlvbigpIHtcblx0Ly8gXHRkaXNwYXRjaGVyLmZpcmUoJ2ltcG9ydCcpO1xuXHQvLyB9KTtcblxuXHQvLyAvLyBuZXdcblx0Ly8gdmFyIGZpbGVfYWx0ID0gbmV3IEljb25CdXR0b24oMTYsICdmaWxlX2FsdCcsICdOZXcnLCBkaXNwYXRjaGVyKTtcblx0Ly8gb3BlcmF0aW9uc19kaXYuYXBwZW5kQ2hpbGQoZmlsZV9hbHQuZG9tKTtcblxuXHQvLyBzYXZlXG5cdHZhciBzYXZlID0gbmV3IEljb25CdXR0b24oMTYsICdzYXZlJywgJ1NhdmUnLCBkaXNwYXRjaGVyKTtcblx0c3R5bGUoc2F2ZS5kb20sIG9wX2J1dHRvbl9zdHlsZXMpO1xuXHRvcGVyYXRpb25zX2Rpdi5hcHBlbmRDaGlsZChzYXZlLmRvbSk7XG5cdHNhdmUub25DbGljayhmdW5jdGlvbigpIHtcblx0XHRkaXNwYXRjaGVyLmZpcmUoJ3NhdmUnKTtcblx0fSk7XG5cblx0Ly8gc2F2ZSBhc1xuXHR2YXIgc2F2ZV9hcyA9IG5ldyBJY29uQnV0dG9uKDE2LCAncGFzdGUnLCAnU2F2ZSBhcycsIGRpc3BhdGNoZXIpO1xuXHRzdHlsZShzYXZlX2FzLmRvbSwgb3BfYnV0dG9uX3N0eWxlcyk7XG5cdG9wZXJhdGlvbnNfZGl2LmFwcGVuZENoaWxkKHNhdmVfYXMuZG9tKTtcblx0c2F2ZV9hcy5vbkNsaWNrKGZ1bmN0aW9uKCkge1xuXHRcdGRpc3BhdGNoZXIuZmlyZSgnc2F2ZV9hcycpO1xuXHR9KTtcblxuXHQvLyBkb3dubG9hZCBqc29uIChleHBvcnQpXG5cdHZhciBkb3dubG9hZF9hbHQgPSBuZXcgSWNvbkJ1dHRvbigxNiwgJ2Rvd25sb2FkX2FsdCcsICdEb3dubG9hZCAvIEV4cG9ydCBKU09OIHRvIGZpbGUnLCBkaXNwYXRjaGVyKTtcblx0c3R5bGUoZG93bmxvYWRfYWx0LmRvbSwgb3BfYnV0dG9uX3N0eWxlcyk7XG5cdG9wZXJhdGlvbnNfZGl2LmFwcGVuZENoaWxkKGRvd25sb2FkX2FsdC5kb20pO1xuXHRkb3dubG9hZF9hbHQub25DbGljayhmdW5jdGlvbigpIHtcblx0XHRkaXNwYXRjaGVyLmZpcmUoJ2V4cG9ydCcpO1xuXHR9KTtcblxuXHR2YXIgdXBsb2FkX2FsdCA9IG5ldyBJY29uQnV0dG9uKDE2LCAndXBsb2FkX2FsdCcsICdMb2FkIGZyb20gZmlsZScsIGRpc3BhdGNoZXIpO1xuXHRzdHlsZSh1cGxvYWRfYWx0LmRvbSwgb3BfYnV0dG9uX3N0eWxlcyk7XG5cdG9wZXJhdGlvbnNfZGl2LmFwcGVuZENoaWxkKHVwbG9hZF9hbHQuZG9tKTtcblx0dXBsb2FkX2FsdC5vbkNsaWNrKGZ1bmN0aW9uKCkge1xuXHRcdGRpc3BhdGNoZXIuZmlyZSgnb3BlbmZpbGUnKTtcblx0fSk7XG5cblx0dmFyIHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdHNwYW4uc3R5bGUud2lkdGggPSAnMjBweCc7XG5cdHNwYW4uc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuXHRvcGVyYXRpb25zX2Rpdi5hcHBlbmRDaGlsZChzcGFuKTtcblxuXHRvcGVyYXRpb25zX2Rpdi5hcHBlbmRDaGlsZCh1bmRvX2J1dHRvbi5kb20pO1xuXHRvcGVyYXRpb25zX2Rpdi5hcHBlbmRDaGlsZChyZWRvX2J1dHRvbi5kb20pO1xuXHRvcGVyYXRpb25zX2Rpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpKTtcblxuXHQvLyBDbG91ZCBEb3dubG9hZCAvIFVwbG9hZCBlZGl0IHBlbmNpbFxuXG5cdC8qXG5cdC8vIC8vIHNob3cgbGF5ZXJcblx0Ly8gdmFyIGV5ZV9vcGVuID0gbmV3IEljb25CdXR0b24oMTYsICdleWVfb3BlbicsICdleWVfb3BlbicsIGRpc3BhdGNoZXIpO1xuXHQvLyBvcGVyYXRpb25zX2Rpdi5hcHBlbmRDaGlsZChleWVfb3Blbi5kb20pO1xuXG5cdC8vIC8vIGhpZGUgLyBkaXNhYmxlIGxheWVyXG5cdC8vIHZhciBleWVfY2xvc2UgPSBuZXcgSWNvbkJ1dHRvbigxNiwgJ2V5ZV9jbG9zZScsICdleWVfY2xvc2UnLCBkaXNwYXRjaGVyKTtcblx0Ly8gb3BlcmF0aW9uc19kaXYuYXBwZW5kQ2hpbGQoZXllX2Nsb3NlLmRvbSk7XG5cblxuXHQvLyByZW1vdmUgbGF5ZXJcblx0dmFyIG1pbnVzID0gbmV3IEljb25CdXR0b24oMTYsICdtaW51cycsICdtaW51cycsIGRpc3BhdGNoZXIpO1xuXHRvcGVyYXRpb25zX2Rpdi5hcHBlbmRDaGlsZChtaW51cy5kb20pO1xuXG5cdC8vIGNoZWNrXG5cdHZhciBvayA9IG5ldyBJY29uQnV0dG9uKDE2LCAnb2snLCAnb2snLCBkaXNwYXRjaGVyKTtcblx0b3BlcmF0aW9uc19kaXYuYXBwZW5kQ2hpbGQob2suZG9tKTtcblxuXHQvLyBjcm9zc1xuXHR2YXIgcmVtb3ZlID0gbmV3IEljb25CdXR0b24oMTYsICdyZW1vdmUnLCAncmVtb3ZlJywgZGlzcGF0Y2hlcik7XG5cdG9wZXJhdGlvbnNfZGl2LmFwcGVuZENoaWxkKHJlbW92ZS5kb20pO1xuXG5cdCovXG5cblxuXHQvLyByYW5nZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBjaGFuZ2VSYW5nZSk7XG5cblxuXHRmdW5jdGlvbiBjb252ZXJ0UGVyY2VudFRvVGltZSh0KSB7XG5cdFx0dmFyIG1pbl90aW1lID0gMTAgKiA2MDsgLy8gMTAgbWludXRlc1xuXHRcdG1pbl90aW1lID0gZGF0YS5nZXQoJ3VpOnRvdGFsVGltZScpLnZhbHVlO1xuXHRcdHZhciBtYXhfdGltZSA9IDE7XG5cdFx0dmFyIHYgPSBTZXR0aW5ncy53aWR0aCAqIDAuOCAvICh0ICogKG1heF90aW1lIC0gbWluX3RpbWUpICsgbWluX3RpbWUpO1xuXHRcdHJldHVybiB2O1xuXHR9XG5cblx0ZnVuY3Rpb24gY29udmVydFRpbWVUb1BlcmNlbnQodikge1xuXHRcdHZhciBtaW5fdGltZSA9IDEwICogNjA7IC8vIDEwIG1pbnV0ZXNcblx0XHRtaW5fdGltZSA9IGRhdGEuZ2V0KCd1aTp0b3RhbFRpbWUnKS52YWx1ZTtcblx0XHR2YXIgbWF4X3RpbWUgPSAxO1xuXHRcdHZhciB0ICA9ICgoU2V0dGluZ3Mud2lkdGggKiAwLjggLyB2KSAtIG1pbl90aW1lKSAgLyAobWF4X3RpbWUgLSBtaW5fdGltZSk7XG5cdFx0cmV0dXJuIHQ7XG5cdH1cblxuXHRmdW5jdGlvbiBjaGFuZ2VSYW5nZSgpIHtcblxuXHRcdGRpc3BhdGNoZXIuZmlyZSgndXBkYXRlLnNjYWxlJywgTWF0aC5wb3coMTAwLCAtcmFuZ2UudmFsdWUpICk7XG5cdH1cblxuXHR2YXIgbGF5ZXJfdWlzID0gW10sIHZpc2libGVfbGF5ZXJzID0gMDtcblx0dmFyIHVudXNlZF9sYXllcnMgPSBbXTtcblxuXHR0aGlzLmxheWVycyA9IGxheWVyX3VpcztcblxuXHR0aGlzLnNldENvbnRyb2xTdGF0dXMgPSBmdW5jdGlvbih2KSB7XG5cdFx0cGxheWluZyA9IHY7XG5cdFx0aWYgKHBsYXlpbmcpIHtcblx0XHRcdHBsYXlfYnV0dG9uLnNldEljb24oJ3BhdXNlJyk7XG5cdFx0XHRwbGF5X2J1dHRvbi5zZXRUaXAoJ3BhdXNlJyk7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0cGxheV9idXR0b24uc2V0SWNvbigncGxheScpO1xuXHRcdFx0cGxheV9idXR0b24uc2V0VGlwKCdwbGF5Jyk7XG5cdFx0fVxuXHR9O1xuXG5cdHRoaXMuc2V0U3RhdGUgPSBmdW5jdGlvbihzdGF0ZSkge1xuXG5cdFx0bGF5ZXJfc3RvcmUgPSBzdGF0ZTtcblx0XHRsYXllcnMgPSBsYXllcl9zdG9yZS52YWx1ZTtcblx0XHQvLyBsYXllcnMgPSBzdGF0ZTtcblx0XHRjb25zb2xlLmxvZyhsYXllcl91aXMubGVuZ3RoLCBsYXllcnMpO1xuXHRcdHZhciBpLCBsYXllcjtcblx0XHRmb3IgKGkgPSAwOyBpIDwgbGF5ZXJzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRsYXllciA9IGxheWVyc1tpXTtcblxuXHRcdFx0aWYgKCFsYXllcl91aXNbaV0pIHtcblx0XHRcdFx0dmFyIGxheWVyX3VpO1xuXHRcdFx0XHRpZiAodW51c2VkX2xheWVycy5sZW5ndGgpIHtcblx0XHRcdFx0XHRsYXllcl91aSA9IHVudXNlZF9sYXllcnMucG9wKCk7XG5cdFx0XHRcdFx0bGF5ZXJfdWkuZG9tLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdC8vIG5ld1xuXHRcdFx0XHRcdGxheWVyX3VpID0gbmV3IFZpZXdMYXllcihsYXllciwgZGlzcGF0Y2hlcik7XG5cdFx0XHRcdFx0bGF5ZXJfc2Nyb2xsLmFwcGVuZENoaWxkKGxheWVyX3VpLmRvbSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGF5ZXJfdWlzLnB1c2gobGF5ZXJfdWkpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBsYXllcl91aXNbaV0uc2V0U3RhdGUobGF5ZXIpO1xuXHRcdH1cblxuXHRcdGNvbnNvbGUubG9nKCdUb3RhbCBsYXllcnMgKHZpZXcsIGhpZGRlbiwgdG90YWwpJywgbGF5ZXJfdWlzLmxlbmd0aCwgdW51c2VkX2xheWVycy5sZW5ndGgsXG5cdFx0XHRsYXllcl91aXMubGVuZ3RoICsgdW51c2VkX2xheWVycy5sZW5ndGgpO1xuXG5cdH07XG5cblx0ZnVuY3Rpb24gcmVwYWludChzKSB7XG5cblx0XHRzID0gY3VycmVudFRpbWVTdG9yZS52YWx1ZTtcblx0XHRjdXJyZW50VGltZS5zZXRWYWx1ZShzKTtcblx0XHR0b3RhbFRpbWUuc2V0VmFsdWUodG90YWxUaW1lU3RvcmUudmFsdWUpO1xuXHRcdGN1cnJlbnRUaW1lLnBhaW50KCk7XG5cdFx0dG90YWxUaW1lLnBhaW50KCk7XG5cblx0XHR2YXIgaTtcblxuXHRcdHMgPSBzIHx8IDA7XG5cdFx0Zm9yIChpID0gbGF5ZXJfdWlzLmxlbmd0aDsgaS0tID4gMDspIHtcblx0XHRcdC8vIHF1aWNrIGhhY2tcblx0XHRcdGlmIChpID49IGxheWVycy5sZW5ndGgpIHtcblx0XHRcdFx0bGF5ZXJfdWlzW2ldLmRvbS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHR1bnVzZWRfbGF5ZXJzLnB1c2gobGF5ZXJfdWlzLnBvcCgpKTtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdGxheWVyX3Vpc1tpXS5zZXRTdGF0ZShsYXllcnNbaV0sIGxheWVyX3N0b3JlLmdldChpKSk7XG5cdFx0XHQvLyBsYXllcl91aXNbaV0uc2V0U3RhdGUoJ2xheWVycycrJzonK2kpO1xuXHRcdFx0bGF5ZXJfdWlzW2ldLnJlcGFpbnQocyk7XG5cdFx0fVxuXG5cdFx0dmlzaWJsZV9sYXllcnMgPSBsYXllcl91aXMubGVuZ3RoO1xuXG5cdH1cblxuXHR0aGlzLnJlcGFpbnQgPSByZXBhaW50O1xuXHR0aGlzLnNldFN0YXRlKGxheWVyX3N0b3JlKTtcblxuXHR0aGlzLnNjcm9sbFRvID0gZnVuY3Rpb24oeCkge1xuXHRcdGxheWVyX3Njcm9sbC5zY3JvbGxUb3AgPSB4ICogKGxheWVyX3Njcm9sbC5zY3JvbGxIZWlnaHQgLSBsYXllcl9zY3JvbGwuY2xpZW50SGVpZ2h0KTtcblx0fTtcblxuXHR0aGlzLmRvbSA9IGRpdjtcblxuXHRyZXBhaW50KCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTGF5ZXJDYWJpbmV0O1xuIiwidmFyXG5cdFNldHRpbmdzID0gcmVxdWlyZSgnLi9zZXR0aW5ncycpLFxuXHRUaGVtZSA9IHJlcXVpcmUoJy4vdGhlbWUnKSxcblx0dXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyksXG5cdHByb3h5X2N0eCA9IHV0aWxzLnByb3h5X2N0eCxcblx0VHdlZW5zID0gcmVxdWlyZSgnLi91dGlsX3R3ZWVuJyksXG5cdGhhbmRsZURyYWcgPSByZXF1aXJlKCcuL3V0aWxfaGFuZGxlX2RyYWcnKSxcblx0U2Nyb2xsQ2FudmFzID0gcmVxdWlyZSgnLi92aWV3X3RpbWVfc2Nyb2xsZXInKSxcblx0Q2FudmFzID0gcmVxdWlyZSgnLi91aV9jYW52YXMnKVxuXHQ7XG5cbnZhclxuXHRMSU5FX0hFSUdIVCA9IFNldHRpbmdzLkxJTkVfSEVJR0hULFxuXHRESUFNT05EX1NJWkUgPSBTZXR0aW5ncy5ESUFNT05EX1NJWkUsXG5cdFRJTUVfU0NST0xMRVJfSEVJR0hUID0gMzUsXG5cdE1BUktFUl9UUkFDS19IRUlHSFQgPSAyNSxcblx0TEVGVF9QQU5FX1dJRFRIID0gU2V0dGluZ3MuTEVGVF9QQU5FX1dJRFRILFxuXHR0aW1lX3NjYWxlID0gU2V0dGluZ3MudGltZV9zY2FsZSxcblx0VE9QID0gMTA7XG5cblxudmFyIGZyYW1lX3N0YXJ0ID0gMDsgLy8gdGhpcyBpcyB0aGUgY3VycmVudCBzY3JvbGwgcG9zaXRpb24uXG5cblxuLypcbiAqIFRoaXMgY2xhc3MgY29udGFpbnMgdGhlIHZpZXcgZm9yIHRoZSByaWdodCBtYWluIHNlY3Rpb24gb2YgdGltZWxpbmVyXG4gKi9cblxuXG4vLyBUT0RPXG4vLyBkaXJ0eSByZW5kZXJpbmdcbi8vIGRyYWcgYmxvY2tcbi8vIERPTidUIHVzZSB0aW1lLnVwZGF0ZSBmb3IgZXZlcnl0aGluZ1xuXG52YXIgdGlja01hcmsxO1xudmFyIHRpY2tNYXJrMjtcbnZhciB0aWNrTWFyazM7XG5cbmZ1bmN0aW9uIHRpbWVfc2NhbGVkKCkge1xuXHQvKlxuXHQgKiBTdWJkaXZpc29uIExPRFxuXHQgKiB0aW1lX3NjYWxlIHJlZmVycyB0byBudW1iZXIgb2YgcGl4ZWxzIHBlciB1bml0XG5cdCAqIEVnLiAxIGluY2ggLSA2MHMsIDEgaW5jaCAtIDYwZnBzLCAxIGluY2ggLSA2IG1pbnNcblx0ICovXG5cdHZhciBkaXYgPSA2MDtcblxuXHR0aWNrTWFyazEgPSB0aW1lX3NjYWxlIC8gZGl2O1xuXHR0aWNrTWFyazIgPSAyICogdGlja01hcmsxO1xuXHR0aWNrTWFyazMgPSAxMCAqIHRpY2tNYXJrMTtcblxufVxuXG50aW1lX3NjYWxlZCgpO1xuXG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8vIFRpbWVsaW5lIFBhbmVsXG4vKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbmZ1bmN0aW9uIFRpbWVsaW5lUGFuZWwoZGF0YSwgZGlzcGF0Y2hlcikge1xuXG5cdHZhciBkcHIgPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbztcblx0dmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuXG5cdHZhciBzY3JvbGxUb3AgPSAwLCBzY3JvbGxMZWZ0ID0gMCwgU0NST0xMX0hFSUdIVDtcblx0dmFyIGxheWVycyA9IGRhdGEuZ2V0KCdsYXllcnMnKS52YWx1ZTtcblxuXHR0aGlzLnNjcm9sbFRvID0gZnVuY3Rpb24ocywgeSkge1xuXHRcdHNjcm9sbFRvcCA9IHMgKiBNYXRoLm1heChsYXllcnMubGVuZ3RoICogTElORV9IRUlHSFQgLSBTQ1JPTExfSEVJR0hULCAwKTtcblx0XHRyZXBhaW50KCk7XG5cdH07XG5cblx0dGhpcy5yZXNpemUgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgaCA9IChTZXR0aW5ncy5oZWlnaHQgLSBUSU1FX1NDUk9MTEVSX0hFSUdIVCk7XG5cdFx0ZHByID0gd2luZG93LmRldmljZVBpeGVsUmF0aW87XG5cdFx0Y2FudmFzLndpZHRoID0gU2V0dGluZ3Mud2lkdGggKiBkcHI7XG5cdFx0Y2FudmFzLmhlaWdodCA9IGggKiBkcHI7XG5cdFx0Y2FudmFzLnN0eWxlLndpZHRoID0gU2V0dGluZ3Mud2lkdGggKyAncHgnO1xuXHRcdGNhbnZhcy5zdHlsZS5oZWlnaHQgPSBoICsgJ3B4Jztcblx0XHRTQ1JPTExfSEVJR0hUID0gU2V0dGluZ3MuaGVpZ2h0IC0gVElNRV9TQ1JPTExFUl9IRUlHSFQ7XG5cdFx0c2Nyb2xsX2NhbnZhcy5zZXRTaXplKFNldHRpbmdzLndpZHRoLCBUSU1FX1NDUk9MTEVSX0hFSUdIVCk7XG5cdH07XG5cblx0dmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG5cdHZhciBzY3JvbGxfY2FudmFzID0gbmV3IENhbnZhcyhTZXR0aW5ncy53aWR0aCwgVElNRV9TQ1JPTExFUl9IRUlHSFQpO1xuXHQvLyBkYXRhLmFkZExpc3RlbmVyKCd1aScsIHJlcGFpbnQgKTtcblxuXHR1dGlscy5zdHlsZShjYW52YXMsIHtcblx0XHRwb3NpdGlvbjogJ2Fic29sdXRlJyxcblx0XHR0b3A6IFRJTUVfU0NST0xMRVJfSEVJR0hUICsgJ3B4Jyxcblx0XHRsZWZ0OiAnMHB4J1xuXHR9KTtcblxuXHR1dGlscy5zdHlsZShzY3JvbGxfY2FudmFzLmRvbSwge1xuXHRcdHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuXHRcdHRvcDogJzBweCcsXG5cdFx0bGVmdDogJzEwcHgnXG5cdH0pO1xuXG5cdHNjcm9sbF9jYW52YXMudXNlcyhuZXcgU2Nyb2xsQ2FudmFzKGRpc3BhdGNoZXIsIGRhdGEpKTtcblxuXG5cdGRpdi5hcHBlbmRDaGlsZChjYW52YXMpO1xuXHRkaXYuYXBwZW5kQ2hpbGQoc2Nyb2xsX2NhbnZhcy5kb20pO1xuXG5cdC8vIHRoaXMuZG9tID0gY2FudmFzO1xuXHR0aGlzLmRvbSA9IGRpdjtcblx0dGhpcy5yZXNpemUoKTtcblxuXHR2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cdHZhciBjdHhfd3JhcCA9IHByb3h5X2N0eChjdHgpO1xuXG5cdHZhciBjdXJyZW50VGltZTsgLy8gbWVhc3VyZWQgaW4gc2Vjb25kc1xuXHQvLyB0ZWNobmljYWxseSBpdCBjb3VsZCBiZSBpbiBmcmFtZXMgb3IgIGhhdmUgaXQgaW4gc3RyaW5nIGZvcm1hdCAoMDowMDowMDoxLTYwKVxuXG5cdHZhciBMRUZUX0dVVFRFUiA9IDIwO1xuXHR2YXIgaSwgeCwgeSwgaWwsIGo7XG5cblx0dmFyIG5lZWRzUmVwYWludCA9IGZhbHNlO1xuXHR2YXIgcmVuZGVySXRlbXMgPSBbXTtcblxuXHRmdW5jdGlvbiBFYXNpbmdSZWN0KHgxLCB5MSwgeDIsIHkyLCBmcmFtZSwgZnJhbWUyLCB2YWx1ZXMsIGxheWVyLCBqKSB7XG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXG5cdFx0dGhpcy5wYXRoID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRjdHhfd3JhcC5iZWdpblBhdGgoKVxuXHRcdFx0LnJlY3QoeDEsIHkxLCB4Mi14MSwgeTIteTEpXG5cdFx0XHQuY2xvc2VQYXRoKCk7XG5cdFx0fTtcblxuXHRcdHRoaXMucGFpbnQgPSBmdW5jdGlvbigpIHtcblx0XHRcdHRoaXMucGF0aCgpO1xuXHRcdFx0Y3R4LmZpbGxTdHlsZSA9IGZyYW1lLl9jb2xvcjtcblx0XHRcdGN0eC5maWxsKCk7XG5cdFx0fTtcblxuXHRcdHRoaXMubW91c2VvdmVyID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRjYW52YXMuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInOyAvLyBwb2ludGVyIG1vdmUgZXctcmVzaXplXG5cdFx0fTtcblxuXHRcdHRoaXMubW91c2VvdXQgPSBmdW5jdGlvbigpIHtcblx0XHRcdGNhbnZhcy5zdHlsZS5jdXJzb3IgPSAnZGVmYXVsdCc7XG5cdFx0fTtcblxuXHRcdHRoaXMubW91c2VkcmFnID0gZnVuY3Rpb24oZSkge1xuXHRcdFx0dmFyIHQxID0geF90b190aW1lKHgxICsgZS5keCk7XG5cdFx0XHR0MSA9IE1hdGgubWF4KDAsIHQxKTtcblx0XHRcdC8vIFRPRE8gbGltaXQgbW92aW5nIHRvIG5laWdoYm91cnNcblx0XHRcdGZyYW1lLnRpbWUgPSB0MTtcblxuXHRcdFx0dmFyIHQyID0geF90b190aW1lKHgyICsgZS5keCk7XG5cdFx0XHR0MiA9IE1hdGgubWF4KDAsIHQyKTtcblx0XHRcdGZyYW1lMi50aW1lID0gdDI7XG5cblx0XHRcdC8vIGRpc3BhdGNoZXIuZmlyZSgndGltZS51cGRhdGUnLCB0MSk7XG5cdFx0fTtcblx0fVxuXG5cdGZ1bmN0aW9uIERpYW1vbmQoZnJhbWUsIHkpIHtcblx0XHR2YXIgeCwgeTI7XG5cblx0XHR4ID0gdGltZV90b194KGZyYW1lLnRpbWUpO1xuXHRcdHkyID0geSArIExJTkVfSEVJR0hUICogMC41ICAtIERJQU1PTkRfU0laRSAvIDI7XG5cblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cblx0XHR2YXIgaXNPdmVyID0gZmFsc2U7XG5cblx0XHR0aGlzLnBhdGggPSBmdW5jdGlvbihjdHhfd3JhcCkge1xuXHRcdFx0Y3R4X3dyYXBcblx0XHRcdFx0LmJlZ2luUGF0aCgpXG5cdFx0XHRcdC5tb3ZlVG8oeCwgeTIpXG5cdFx0XHRcdC5saW5lVG8oeCArIERJQU1PTkRfU0laRSAvIDIsIHkyICsgRElBTU9ORF9TSVpFIC8gMilcblx0XHRcdFx0LmxpbmVUbyh4LCB5MiArIERJQU1PTkRfU0laRSlcblx0XHRcdFx0LmxpbmVUbyh4IC0gRElBTU9ORF9TSVpFIC8gMiwgeTIgKyBESUFNT05EX1NJWkUgLyAyKVxuXHRcdFx0XHQuY2xvc2VQYXRoKCk7XG5cdFx0fTtcblxuXHRcdHRoaXMucGFpbnQgPSBmdW5jdGlvbihjdHhfd3JhcCkge1xuXHRcdFx0c2VsZi5wYXRoKGN0eF93cmFwKTtcblx0XHRcdGlmICghaXNPdmVyKVxuXHRcdFx0XHRjdHhfd3JhcC5maWxsU3R5bGUoVGhlbWUuYyk7XG5cdFx0XHRlbHNlXG5cdFx0XHRcdGN0eF93cmFwLmZpbGxTdHlsZSgneWVsbG93Jyk7IC8vIFRoZW1lLmRcblxuXHRcdFx0Y3R4X3dyYXAuZmlsbCgpXG5cdFx0XHQuc3Ryb2tlKCk7XG5cdFx0fTtcblxuXHRcdHRoaXMubW91c2VvdmVyID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRpc092ZXIgPSB0cnVlO1xuXHRcdFx0Y2FudmFzLnN0eWxlLmN1cnNvciA9ICdtb3ZlJzsgLy8gcG9pbnRlciBtb3ZlIGV3LXJlc2l6ZVxuXHRcdFx0c2VsZi5wYWludChjdHhfd3JhcCk7XG5cdFx0fTtcblxuXHRcdHRoaXMubW91c2VvdXQgPSBmdW5jdGlvbigpIHtcblx0XHRcdGlzT3ZlciA9IGZhbHNlO1xuXHRcdFx0Y2FudmFzLnN0eWxlLmN1cnNvciA9ICdkZWZhdWx0Jztcblx0XHRcdHNlbGYucGFpbnQoY3R4X3dyYXApO1xuXHRcdH07XG5cblx0XHR0aGlzLm1vdXNlZHJhZyA9IGZ1bmN0aW9uKGUpIHtcblx0XHRcdHZhciB0ID0geF90b190aW1lKHggKyBlLmR4KTtcblx0XHRcdHQgPSBNYXRoLm1heCgwLCB0KTtcblx0XHRcdC8vIFRPRE8gbGltaXQgbW92aW5nIHRvIG5laWdoYm91cnNcblx0XHRcdGZyYW1lLnRpbWUgPSB0O1xuXHRcdFx0ZGlzcGF0Y2hlci5maXJlKCd0aW1lLnVwZGF0ZScsIHQpO1xuXHRcdFx0Ly8gY29uc29sZS5sb2coJ2ZyYW1lJywgZnJhbWUpO1xuXHRcdFx0Ly8gY29uc29sZS5sb2cocywgZm9ybWF0X2ZyaWVuZGx5X3NlY29uZHMocyksIHRoaXMpO1xuXHRcdH07XG5cblx0fVxuXG5cdGZ1bmN0aW9uIHJlcGFpbnQoKSB7XG5cdFx0bmVlZHNSZXBhaW50ID0gdHJ1ZTtcblx0fVxuXG5cblx0ZnVuY3Rpb24gZHJhd0xheWVyQ29udGVudHMoKSB7XG5cdFx0cmVuZGVySXRlbXMgPSBbXTtcblx0XHQvLyBob3Jpem9udGFsIExheWVyIGxpbmVzXG5cdFx0Zm9yIChpID0gMCwgaWwgPSBsYXllcnMubGVuZ3RoOyBpIDw9IGlsOyBpKyspIHtcblx0XHRcdGN0eC5zdHJva2VTdHlsZSA9IFRoZW1lLmI7XG5cdFx0XHRjdHguYmVnaW5QYXRoKCk7XG5cdFx0XHR5ID0gaSAqIExJTkVfSEVJR0hUO1xuXHRcdFx0eSA9IH5+eSAtIDAuNTtcblxuXHRcdFx0Y3R4X3dyYXBcblx0XHRcdC5tb3ZlVG8oMCwgeSlcblx0XHRcdC5saW5lVG8od2lkdGgsIHkpXG5cdFx0XHQuc3Ryb2tlKCk7XG5cdFx0fVxuXG5cblx0XHR2YXIgZnJhbWUsIGZyYW1lMiwgajtcblxuXHRcdC8vIERyYXcgRWFzaW5nIFJlY3RzXG5cdFx0Zm9yIChpID0gMDsgaSA8IGlsOyBpKyspIHtcblx0XHRcdC8vIGNoZWNrIGZvciBrZXlmcmFtZXNcblx0XHRcdHZhciBsYXllciA9IGxheWVyc1tpXTtcblx0XHRcdHZhciB2YWx1ZXMgPSBsYXllci52YWx1ZXM7XG5cblx0XHRcdHkgPSBpICogTElORV9IRUlHSFQ7XG5cblx0XHRcdGZvciAoaiA9IDA7IGogPCB2YWx1ZXMubGVuZ3RoIC0gMTsgaisrKSB7XG5cdFx0XHRcdGZyYW1lID0gdmFsdWVzW2pdO1xuXHRcdFx0XHRmcmFtZTIgPSB2YWx1ZXNbaiArIDFdO1xuXG5cdFx0XHRcdC8vIERyYXcgVHdlZW4gUmVjdFxuXHRcdFx0XHR4ID0gdGltZV90b194KGZyYW1lLnRpbWUpO1xuXHRcdFx0XHR4MiA9IHRpbWVfdG9feChmcmFtZTIudGltZSk7XG5cblx0XHRcdFx0aWYgKCFmcmFtZS50d2VlbiB8fCBmcmFtZS50d2VlbiA9PSAnbm9uZScpIGNvbnRpbnVlO1xuXG5cdFx0XHRcdHZhciB5MSA9IHkgKyAyO1xuXHRcdFx0XHR2YXIgeTIgPSB5ICsgTElORV9IRUlHSFQgLSAyO1xuXG5cdFx0XHRcdHJlbmRlckl0ZW1zLnB1c2gobmV3IEVhc2luZ1JlY3QoeCwgeTEsIHgyLCB5MiwgZnJhbWUsIGZyYW1lMikpO1xuXG5cdFx0XHRcdC8vIC8vIGRyYXcgZWFzaW5nIGdyYXBoXG5cdFx0XHRcdC8vIHZhciBjb2xvciA9IHBhcnNlSW50KGZyYW1lLl9jb2xvci5zdWJzdHJpbmcoMSw3KSwgMTYpO1xuXHRcdFx0XHQvLyBjb2xvciA9IDB4ZmZmZmZmIF4gY29sb3I7XG5cdFx0XHRcdC8vIGNvbG9yID0gY29sb3IudG9TdHJpbmcoMTYpOyAgICAgICAgICAgLy8gY29udmVydCB0byBoZXhcblx0XHRcdFx0Ly8gY29sb3IgPSAnIycgKyAoJzAwMDAwMCcgKyBjb2xvcikuc2xpY2UoLTYpO1xuXG5cdFx0XHRcdC8vIGN0eC5zdHJva2VTdHlsZSA9IGNvbG9yO1xuXHRcdFx0XHQvLyB2YXIgeDM7XG5cdFx0XHRcdC8vIGN0eC5iZWdpblBhdGgoKTtcblx0XHRcdFx0Ly8gY3R4Lm1vdmVUbyh4LCB5Mik7XG5cdFx0XHRcdC8vIHZhciBkeSA9IHkxIC0geTI7XG5cdFx0XHRcdC8vIHZhciBkeCA9IHgyIC0geDtcblxuXHRcdFx0XHQvLyBmb3IgKHgzPXg7IHgzIDwgeDI7IHgzKyspIHtcblx0XHRcdFx0Ly8gXHRjdHgubGluZVRvKHgzLCB5MiArIFR3ZWVuc1tmcmFtZS50d2Vlbl0oKHgzIC0geCkvZHgpICogZHkpO1xuXHRcdFx0XHQvLyB9XG5cdFx0XHRcdC8vIGN0eC5zdHJva2UoKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yIChqID0gMDsgaiA8IHZhbHVlcy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHQvLyBEaW1vbmRzXG5cdFx0XHRcdGZyYW1lID0gdmFsdWVzW2pdO1xuXHRcdFx0XHRyZW5kZXJJdGVtcy5wdXNoKG5ldyBEaWFtb25kKGZyYW1lLCB5KSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gcmVuZGVyIGl0ZW1zXG5cdFx0dmFyIGl0ZW07XG5cdFx0Zm9yIChpID0gMCwgaWwgPSByZW5kZXJJdGVtcy5sZW5ndGg7IGkgPCBpbDsgaSsrKSB7XG5cdFx0XHRpdGVtID0gcmVuZGVySXRlbXNbaV07XG5cdFx0XHRpdGVtLnBhaW50KGN0eF93cmFwKTtcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBzZXRUaW1lU2NhbGUoKSB7XG5cblx0XHR2YXIgdiA9IGRhdGEuZ2V0KCd1aTp0aW1lU2NhbGUnKS52YWx1ZTtcblx0XHRpZiAodGltZV9zY2FsZSAhPT0gdikge1xuXHRcdFx0dGltZV9zY2FsZSA9IHY7XG5cdFx0XHR0aW1lX3NjYWxlZCgpO1xuXHRcdH1cblx0fVxuXG5cdHZhciBvdmVyID0gbnVsbDtcblx0dmFyIG1vdXNlZG93bkl0ZW0gPSBudWxsO1xuXG5cdGZ1bmN0aW9uIGNoZWNrKCkge1xuXHRcdHZhciBpdGVtO1xuXHRcdHZhciBsYXN0X292ZXIgPSBvdmVyO1xuXHRcdC8vIG92ZXIgPSBbXTtcblx0XHRvdmVyID0gbnVsbDtcblx0XHRmb3IgKGkgPSByZW5kZXJJdGVtcy5sZW5ndGg7IGktLSA+IDA7KSB7XG5cdFx0XHRpdGVtID0gcmVuZGVySXRlbXNbaV07XG5cdFx0XHRpdGVtLnBhdGgoY3R4X3dyYXApO1xuXG5cdFx0XHRpZiAoY3R4LmlzUG9pbnRJblBhdGgocG9pbnRlci54ICogZHByLCBwb2ludGVyLnkgKiBkcHIpKSB7XG5cdFx0XHRcdC8vIG92ZXIucHVzaChpdGVtKTtcblx0XHRcdFx0b3ZlciA9IGl0ZW07XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIGNsZWFyIG9sZCBtb3VzZWluXG5cdFx0aWYgKGxhc3Rfb3ZlciAmJiBsYXN0X292ZXIgIT0gb3Zlcikge1xuXHRcdFx0aXRlbSA9IGxhc3Rfb3Zlcjtcblx0XHRcdGlmIChpdGVtLm1vdXNlb3V0KSBpdGVtLm1vdXNlb3V0KCk7XG5cdFx0fVxuXG5cdFx0aWYgKG92ZXIpIHtcblx0XHRcdGl0ZW0gPSBvdmVyO1xuXHRcdFx0aWYgKGl0ZW0ubW91c2VvdmVyKSBpdGVtLm1vdXNlb3ZlcigpO1xuXG5cdFx0XHRpZiAobW91c2Vkb3duMikge1xuXHRcdFx0XHRtb3VzZWRvd25JdGVtID0gaXRlbTtcblx0XHRcdH1cblx0XHR9XG5cblxuXG5cdFx0Ly8gY29uc29sZS5sb2cocG9pbnRlcilcblx0fVxuXG5cdGZ1bmN0aW9uIHBvaW50ZXJFdmVudHMoKSB7XG5cdFx0aWYgKCFwb2ludGVyKSByZXR1cm47XG5cblx0XHRjdHhfd3JhcFxuXHRcdFx0LnNhdmUoKVxuXHRcdFx0LnNjYWxlKGRwciwgZHByKVxuXHRcdFx0LnRyYW5zbGF0ZSgwLCBNQVJLRVJfVFJBQ0tfSEVJR0hUKVxuXHRcdFx0LmJlZ2luUGF0aCgpXG5cdFx0XHQucmVjdCgwLCAwLCBTZXR0aW5ncy53aWR0aCwgU0NST0xMX0hFSUdIVClcblx0XHRcdC50cmFuc2xhdGUoLXNjcm9sbExlZnQsIC1zY3JvbGxUb3ApXG5cdFx0XHQuY2xpcCgpXG5cdFx0XHRcdC5ydW4oY2hlY2spXG5cdFx0XHQucmVzdG9yZSgpO1xuXHR9XG5cblx0ZnVuY3Rpb24gX3BhaW50KCkge1xuXHRcdGlmICghbmVlZHNSZXBhaW50KSB7XG5cdFx0XHRwb2ludGVyRXZlbnRzKCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0c2Nyb2xsX2NhbnZhcy5yZXBhaW50KCk7XG5cblx0XHRzZXRUaW1lU2NhbGUoKTtcblxuXHRcdGN1cnJlbnRUaW1lID0gZGF0YS5nZXQoJ3VpOmN1cnJlbnRUaW1lJykudmFsdWU7XG5cdFx0ZnJhbWVfc3RhcnQgPSAgZGF0YS5nZXQoJ3VpOnNjcm9sbFRpbWUnKS52YWx1ZTtcblxuXHRcdC8qKioqKioqKioqKioqKioqKioqKioqKioqKi9cblx0XHQvLyBiYWNrZ3JvdW5kXG5cblx0XHRjdHguZmlsbFN0eWxlID0gVGhlbWUuYTtcblx0XHRjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG5cdFx0Y3R4LnNhdmUoKTtcblx0XHRjdHguc2NhbGUoZHByLCBkcHIpO1xuXG5cdFx0Ly9cblxuXHRcdGN0eC5saW5lV2lkdGggPSAxOyAvLyAuNSwgMSwgMlxuXG5cdFx0d2lkdGggPSBTZXR0aW5ncy53aWR0aDtcblx0XHRoZWlnaHQgPSBTZXR0aW5ncy5oZWlnaHQ7XG5cblx0XHR2YXIgdW5pdHMgPSB0aW1lX3NjYWxlIC8gdGlja01hcmsxO1xuXHRcdHZhciBvZmZzZXRVbml0cyA9IChmcmFtZV9zdGFydCAqIHRpbWVfc2NhbGUpICUgdW5pdHM7XG5cblx0XHR2YXIgY291bnQgPSAod2lkdGggLSBMRUZUX0dVVFRFUiArIG9mZnNldFVuaXRzKSAvIHVuaXRzO1xuXG5cdFx0Ly8gY29uc29sZS5sb2coJ3RpbWVfc2NhbGUnLCB0aW1lX3NjYWxlLCAndGlja01hcmsxJywgdGlja01hcmsxLCAndW5pdHMnLCB1bml0cywgJ29mZnNldFVuaXRzJywgb2Zmc2V0VW5pdHMsIGZyYW1lX3N0YXJ0KTtcblxuXHRcdC8vIHRpbWVfc2NhbGUgPSBwaXhlbHMgdG8gMSBzZWNvbmQgKDQwKVxuXHRcdC8vIHRpY2tNYXJrMSA9IG1hcmtzIHBlciBzZWNvbmQgKG1hcmtzIC8gcylcblx0XHQvLyB1bml0cyA9IHBpeGVscyB0byBldmVyeSBtYXJrICg0MClcblxuXHRcdC8vIGxhYmVscyBvbmx5XG5cdFx0Zm9yIChpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcblx0XHRcdHggPSBpICogdW5pdHMgKyBMRUZUX0dVVFRFUiAtIG9mZnNldFVuaXRzO1xuXG5cdFx0XHQvLyB2ZXJ0aWNhbCBsaW5lc1xuXHRcdFx0Y3R4LnN0cm9rZVN0eWxlID0gVGhlbWUuYjtcblx0XHRcdGN0eC5iZWdpblBhdGgoKTtcblx0XHRcdGN0eC5tb3ZlVG8oeCwgMCk7XG5cdFx0XHRjdHgubGluZVRvKHgsIGhlaWdodCk7XG5cdFx0XHRjdHguc3Ryb2tlKCk7XG5cblx0XHRcdGN0eC5maWxsU3R5bGUgPSBUaGVtZS5kO1xuXHRcdFx0Y3R4LnRleHRBbGlnbiA9ICdjZW50ZXInO1xuXG5cdFx0XHR2YXIgdCA9IChpICogdW5pdHMgLSBvZmZzZXRVbml0cykgLyB0aW1lX3NjYWxlICsgZnJhbWVfc3RhcnQ7XG5cdFx0XHR0ID0gdXRpbHMuZm9ybWF0X2ZyaWVuZGx5X3NlY29uZHModCk7XG5cdFx0XHRjdHguZmlsbFRleHQodCwgeCwgMzgpO1xuXHRcdH1cblxuXHRcdHVuaXRzID0gdGltZV9zY2FsZSAvIHRpY2tNYXJrMjtcblx0XHRjb3VudCA9ICh3aWR0aCAtIExFRlRfR1VUVEVSICsgb2Zmc2V0VW5pdHMpIC8gdW5pdHM7XG5cblx0XHQvLyBtYXJrZXIgbGluZXMgLSBtYWluXG5cdFx0Zm9yIChpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcblx0XHRcdGN0eC5zdHJva2VTdHlsZSA9IFRoZW1lLmM7XG5cdFx0XHRjdHguYmVnaW5QYXRoKCk7XG5cdFx0XHR4ID0gaSAqIHVuaXRzICsgTEVGVF9HVVRURVIgLSBvZmZzZXRVbml0cztcblx0XHRcdGN0eC5tb3ZlVG8oeCwgTUFSS0VSX1RSQUNLX0hFSUdIVCAtIDApO1xuXHRcdFx0Y3R4LmxpbmVUbyh4LCBNQVJLRVJfVFJBQ0tfSEVJR0hUIC0gMTYpO1xuXHRcdFx0Y3R4LnN0cm9rZSgpO1xuXHRcdH1cblxuXHRcdHZhciBtdWwgPSB0aWNrTWFyazMgLyB0aWNrTWFyazI7XG5cdFx0dW5pdHMgPSB0aW1lX3NjYWxlIC8gdGlja01hcmszO1xuXHRcdGNvdW50ID0gKHdpZHRoIC0gTEVGVF9HVVRURVIgKyBvZmZzZXRVbml0cykgLyB1bml0cztcblxuXHRcdC8vIHNtYWxsIHRpY2tzXG5cdFx0Zm9yIChpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcblx0XHRcdGlmIChpICUgbXVsID09PSAwKSBjb250aW51ZTtcblx0XHRcdGN0eC5zdHJva2VTdHlsZSA9IFRoZW1lLmM7XG5cdFx0XHRjdHguYmVnaW5QYXRoKCk7XG5cdFx0XHR4ID0gaSAqIHVuaXRzICsgTEVGVF9HVVRURVIgLSBvZmZzZXRVbml0cztcblx0XHRcdGN0eC5tb3ZlVG8oeCwgTUFSS0VSX1RSQUNLX0hFSUdIVCAtIDApO1xuXHRcdFx0Y3R4LmxpbmVUbyh4LCBNQVJLRVJfVFJBQ0tfSEVJR0hUIC0gMTApO1xuXHRcdFx0Y3R4LnN0cm9rZSgpO1xuXHRcdH1cblxuXHRcdC8vIEVuY2Fwc3VsYXRlIGEgc2Nyb2xsIHJlY3QgZm9yIHRoZSBsYXllcnNcblx0XHRjdHhfd3JhcFxuXHRcdFx0LnNhdmUoKVxuXHRcdFx0LnRyYW5zbGF0ZSgwLCBNQVJLRVJfVFJBQ0tfSEVJR0hUKVxuXHRcdFx0LmJlZ2luUGF0aCgpXG5cdFx0XHQucmVjdCgwLCAwLCBTZXR0aW5ncy53aWR0aCwgU0NST0xMX0hFSUdIVClcblx0XHRcdC50cmFuc2xhdGUoLXNjcm9sbExlZnQsIC1zY3JvbGxUb3ApXG5cdFx0XHQuY2xpcCgpXG5cdFx0XHRcdC5ydW4oZHJhd0xheWVyQ29udGVudHMpXG5cdFx0XHQucmVzdG9yZSgpO1xuXG5cdFx0Ly8gQ3VycmVudCBNYXJrZXIgLyBDdXJzb3Jcblx0XHRjdHguc3Ryb2tlU3R5bGUgPSAncmVkJzsgLy8gVGhlbWUuY1xuXHRcdHggPSAoY3VycmVudFRpbWUgLSBmcmFtZV9zdGFydCkgKiB0aW1lX3NjYWxlICsgTEVGVF9HVVRURVI7XG5cblx0XHR2YXIgdHh0ID0gdXRpbHMuZm9ybWF0X2ZyaWVuZGx5X3NlY29uZHMoY3VycmVudFRpbWUpO1xuXHRcdHZhciB0ZXh0V2lkdGggPSBjdHgubWVhc3VyZVRleHQodHh0KS53aWR0aDtcblxuXHRcdHZhciBiYXNlX2xpbmUgPSBNQVJLRVJfVFJBQ0tfSEVJR0hUIC0gNSwgaGFsZl9yZWN0ID0gdGV4dFdpZHRoIC8gMiArIDQ7XG5cblx0XHRjdHguYmVnaW5QYXRoKCk7XG5cdFx0Y3R4Lm1vdmVUbyh4LCBiYXNlX2xpbmUpO1xuXHRcdGN0eC5saW5lVG8oeCwgaGVpZ2h0KTtcblx0XHRjdHguc3Ryb2tlKCk7XG5cblx0XHRjdHguZmlsbFN0eWxlID0gJ3JlZCc7IC8vIGJsYWNrXG5cdFx0Y3R4LnRleHRBbGlnbiA9ICdjZW50ZXInO1xuXHRcdGN0eC5iZWdpblBhdGgoKTtcblx0XHRjdHgubW92ZVRvKHgsIGJhc2VfbGluZSArIDUpO1xuXHRcdGN0eC5saW5lVG8oeCArIDUsIGJhc2VfbGluZSk7XG5cdFx0Y3R4LmxpbmVUbyh4ICsgaGFsZl9yZWN0LCBiYXNlX2xpbmUpO1xuXHRcdGN0eC5saW5lVG8oeCArIGhhbGZfcmVjdCwgYmFzZV9saW5lIC0gMTQpO1xuXHRcdGN0eC5saW5lVG8oeCAtIGhhbGZfcmVjdCwgYmFzZV9saW5lIC0gMTQpO1xuXHRcdGN0eC5saW5lVG8oeCAtIGhhbGZfcmVjdCwgYmFzZV9saW5lKTtcblx0XHRjdHgubGluZVRvKHggLSA1LCBiYXNlX2xpbmUpO1xuXHRcdGN0eC5jbG9zZVBhdGgoKTtcblx0XHRjdHguZmlsbCgpO1xuXG5cdFx0Y3R4LmZpbGxTdHlsZSA9ICd3aGl0ZSc7XG5cdFx0Y3R4LmZpbGxUZXh0KHR4dCwgeCwgYmFzZV9saW5lIC0gNCk7XG5cblx0XHRjdHgucmVzdG9yZSgpO1xuXG5cdFx0bmVlZHNSZXBhaW50ID0gZmFsc2U7XG5cdFx0Ly8gcG9pbnRlckV2ZW50cygpO1xuXG5cdH1cblxuXHRmdW5jdGlvbiB5X3RvX3RyYWNrKHkpIHtcblx0XHRpZiAoeSAtIE1BUktFUl9UUkFDS19IRUlHSFQgPCAwKSByZXR1cm4gLTE7XG5cdFx0cmV0dXJuICh5IC0gTUFSS0VSX1RSQUNLX0hFSUdIVCArIHNjcm9sbFRvcCkgLyBMSU5FX0hFSUdIVCB8IDA7XG5cdH1cblxuXG5cdGZ1bmN0aW9uIHhfdG9fdGltZSh4KSB7XG5cdFx0dmFyIHVuaXRzID0gdGltZV9zY2FsZSAvIHRpY2tNYXJrMztcblxuXHRcdC8vIHJldHVybiBmcmFtZV9zdGFydCArICh4IC0gTEVGVF9HVVRURVIpIC8gdGltZV9zY2FsZTtcblxuXHRcdHJldHVybiBmcmFtZV9zdGFydCArICgoeCAtIExFRlRfR1VUVEVSKSAvIHVuaXRzIHwgMCkgLyB0aWNrTWFyazM7XG5cdH1cblxuXHRmdW5jdGlvbiB0aW1lX3RvX3gocykge1xuXHRcdHZhciBkcyA9IHMgLSBmcmFtZV9zdGFydDtcblx0XHRkcyAqPSB0aW1lX3NjYWxlO1xuXHRcdGRzICs9IExFRlRfR1VUVEVSO1xuXG5cdFx0cmV0dXJuIGRzO1xuXHR9XG5cblx0dmFyIG1lID0gdGhpcztcblx0dGhpcy5yZXBhaW50ID0gcmVwYWludDtcblx0dGhpcy5fcGFpbnQgPSBfcGFpbnQ7XG5cblx0cmVwYWludCgpO1xuXG5cdHZhciBtb3VzZWRvd24gPSBmYWxzZSwgc2VsZWN0aW9uID0gZmFsc2U7XG5cblx0dmFyIGRyYWdPYmplY3Q7XG5cdHZhciBjYW52YXNCb3VuZHM7XG5cblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpO1xuXG5cdGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsIGZ1bmN0aW9uKGUpIHtcblx0XHRjYW52YXNCb3VuZHMgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0dmFyIG14ID0gZS5jbGllbnRYIC0gY2FudmFzQm91bmRzLmxlZnQgLCBteSA9IGUuY2xpZW50WSAtIGNhbnZhc0JvdW5kcy50b3A7XG5cblxuXHRcdHZhciB0cmFjayA9IHlfdG9fdHJhY2sobXkpO1xuXHRcdHZhciBzID0geF90b190aW1lKG14KTtcblxuXG5cdFx0ZGlzcGF0Y2hlci5maXJlKCdrZXlmcmFtZScsIGxheWVyc1t0cmFja10sIGN1cnJlbnRUaW1lKTtcblxuXHR9KTtcblxuXHRmdW5jdGlvbiBvbk1vdXNlTW92ZShlKSB7XG5cdFx0Y2FudmFzQm91bmRzID0gY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdHZhciBteCA9IGUuY2xpZW50WCAtIGNhbnZhc0JvdW5kcy5sZWZ0ICwgbXkgPSBlLmNsaWVudFkgLSBjYW52YXNCb3VuZHMudG9wO1xuXHRcdG9uUG9pbnRlck1vdmUobXgsIG15KTtcblx0fVxuXG5cdHZhciBwb2ludGVyZGlkTW92ZWQgPSBmYWxzZTtcblx0dmFyIHBvaW50ZXIgPSBudWxsO1xuXG5cdGZ1bmN0aW9uIG9uUG9pbnRlck1vdmUoeCwgeSkge1xuXHRcdGlmIChtb3VzZWRvd25JdGVtKSByZXR1cm47XG5cdFx0cG9pbnRlcmRpZE1vdmVkID0gdHJ1ZTtcblx0XHRwb2ludGVyID0ge3g6IHgsIHk6IHl9O1xuXHR9XG5cblx0Y2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgZnVuY3Rpb24oKSB7XG5cdFx0cG9pbnRlciA9IG51bGw7XG5cdH0pO1xuXG5cdHZhciBtb3VzZWRvd24yID0gZmFsc2UsIG1vdXNlRG93blRoZW5Nb3ZlID0gZmFsc2U7XG5cdGhhbmRsZURyYWcoY2FudmFzLCBmdW5jdGlvbiBkb3duKGUpIHtcblx0XHRcdG1vdXNlZG93bjIgPSB0cnVlO1xuXHRcdFx0cG9pbnRlciA9IHtcblx0XHRcdFx0eDogZS5vZmZzZXR4LFxuXHRcdFx0XHR5OiBlLm9mZnNldHlcblx0XHRcdH07XG5cdFx0XHRwb2ludGVyRXZlbnRzKCk7XG5cblx0XHRcdGlmICghbW91c2Vkb3duSXRlbSkgZGlzcGF0Y2hlci5maXJlKCd0aW1lLnVwZGF0ZScsIHhfdG9fdGltZShlLm9mZnNldHgpKTtcblx0XHRcdC8vIEhpdCBjcml0ZXJpYVxuXHRcdH0sIGZ1bmN0aW9uIG1vdmUoZSkge1xuXHRcdFx0bW91c2Vkb3duMiA9IGZhbHNlO1xuXHRcdFx0aWYgKG1vdXNlZG93bkl0ZW0pIHtcblx0XHRcdFx0bW91c2VEb3duVGhlbk1vdmUgPSB0cnVlO1xuXHRcdFx0XHRpZiAobW91c2Vkb3duSXRlbS5tb3VzZWRyYWcpIHtcblx0XHRcdFx0XHRtb3VzZWRvd25JdGVtLm1vdXNlZHJhZyhlKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZGlzcGF0Y2hlci5maXJlKCd0aW1lLnVwZGF0ZScsIHhfdG9fdGltZShlLm9mZnNldHgpKTtcblx0XHRcdH1cblx0XHR9LCBmdW5jdGlvbiB1cChlKSB7XG5cdFx0XHRpZiAobW91c2VEb3duVGhlbk1vdmUpIHtcblx0XHRcdFx0ZGlzcGF0Y2hlci5maXJlKCdrZXlmcmFtZS5tb3ZlJyk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0ZGlzcGF0Y2hlci5maXJlKCd0aW1lLnVwZGF0ZScsIHhfdG9fdGltZShlLm9mZnNldHgpKTtcblx0XHRcdH1cblx0XHRcdG1vdXNlZG93bjIgPSBmYWxzZTtcblx0XHRcdG1vdXNlZG93bkl0ZW0gPSBudWxsO1xuXHRcdFx0bW91c2VEb3duVGhlbk1vdmUgPSBmYWxzZTtcblx0XHR9XG5cdCk7XG5cblx0dGhpcy5zZXRTdGF0ZSA9IGZ1bmN0aW9uKHN0YXRlKSB7XG5cdFx0bGF5ZXJzID0gc3RhdGUudmFsdWU7XG5cdFx0cmVwYWludCgpO1xuXHR9O1xuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGltZWxpbmVQYW5lbDtcbiIsInZhclxuXHRUaGVtZSA9IHJlcXVpcmUoJy4vdGhlbWUnKSxcblx0dXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyksXG5cdHByb3h5X2N0eCA9IHV0aWxzLnByb3h5X2N0eCxcblx0aGFuZGxlRHJhZyA9IHJlcXVpcmUoJy4vdXRpbF9oYW5kbGVfZHJhZycpXG5cdDtcblxuXG5mdW5jdGlvbiBSZWN0KCkge1xuXHRcbn1cblxuUmVjdC5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24oeCwgeSwgdywgaCwgY29sb3IsIG91dGxpbmUpIHtcblx0dGhpcy54ID0geDtcblx0dGhpcy55ID0geTtcblx0dGhpcy53ID0gdztcblx0dGhpcy5oID0gaDtcblx0dGhpcy5jb2xvciA9IGNvbG9yO1xuXHR0aGlzLm91dGxpbmUgPSBvdXRsaW5lO1xufTtcblxuUmVjdC5wcm90b3R5cGUucGFpbnQgPSBmdW5jdGlvbihjdHgpIHtcblx0Y3R4LmZpbGxTdHlsZSA9IFRoZW1lLmI7ICAvLyAvLyAneWVsbG93Jztcblx0Y3R4LnN0cm9rZVN0eWxlID0gVGhlbWUuYztcblxuXHR0aGlzLnNoYXBlKGN0eCk7XG5cblx0Y3R4LnN0cm9rZSgpO1xuXHRjdHguZmlsbCgpO1xufTtcblxuUmVjdC5wcm90b3R5cGUuc2hhcGUgPSBmdW5jdGlvbihjdHgpIHtcblx0Y3R4LmJlZ2luUGF0aCgpO1xuXHRjdHgucmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy53LCB0aGlzLmgpO1xufTtcblxuUmVjdC5wcm90b3R5cGUuY29udGFpbnMgPSBmdW5jdGlvbih4LCB5KSB7XG5cdHJldHVybiB4ID49IHRoaXMueCAmJiB5ID49IHRoaXMueVxuXHQgJiYgeCA8PSB0aGlzLnggKyB0aGlzLncgJiYgeSA8PSB0aGlzLnkgKyB0aGlzLmg7XG59O1xuXG5cblxuZnVuY3Rpb24gU2Nyb2xsQ2FudmFzKGRpc3BhdGNoZXIsIGRhdGEpIHtcblx0dmFyIHdpZHRoLCBoZWlnaHQ7XG5cblx0dGhpcy5zZXRTaXplID0gZnVuY3Rpb24odywgaCkge1xuXHRcdHdpZHRoID0gdztcblx0XHRoZWlnaHQgPSBoO1xuXHR9XG5cblx0dmFyIFRPUF9TQ1JPTExfVFJBQ0sgPSAyMDtcblx0dmFyIE1BUkdJTlMgPSAxNTtcblxuXHR2YXIgc2Nyb2xsZXIgPSB7XG5cdFx0bGVmdDogMCxcblx0XHRncmlwX2xlbmd0aDogMCxcblx0XHRrOiAxXG5cdH07XG5cblx0dmFyIHNjcm9sbFJlY3QgPSBuZXcgUmVjdCgpO1xuXG5cdHRoaXMucGFpbnQgPSBmdW5jdGlvbihjdHgpIHtcblx0XHR2YXIgdG90YWxUaW1lID0gZGF0YS5nZXQoJ3VpOnRvdGFsVGltZScpLnZhbHVlO1xuXHRcdHZhciBzY3JvbGxUaW1lID0gZGF0YS5nZXQoJ3VpOnNjcm9sbFRpbWUnKS52YWx1ZTtcblx0XHR2YXIgY3VycmVudFRpbWUgPSBkYXRhLmdldCgndWk6Y3VycmVudFRpbWUnKS52YWx1ZTtcblx0XHRcblx0XHR2YXIgcGl4ZWxzX3Blcl9zZWNvbmQgPSBkYXRhLmdldCgndWk6dGltZVNjYWxlJykudmFsdWU7XG5cblx0XHRjdHguc2F2ZSgpO1xuXG5cdFx0dmFyIHcgPSB3aWR0aCAtIDIgKiBNQVJHSU5TO1xuXHRcdHZhciBoID0gMTY7IC8vIFRPUF9TQ1JPTExfVFJBQ0s7XG5cdFx0dmFyIGgyID0gaDtcblxuXG5cdFx0Y3R4LmNsZWFyUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcblx0XHRjdHgudHJhbnNsYXRlKE1BUkdJTlMsIDUpO1xuXG5cdFx0Ly8gb3V0bGluZSBzY3JvbGxlclxuXHRcdGN0eC5iZWdpblBhdGgoKTtcblx0XHRjdHguc3Ryb2tlU3R5bGUgPSBUaGVtZS5iO1xuXHRcdGN0eC5yZWN0KDAsIDAsIHcsIGgpO1xuXHRcdGN0eC5zdHJva2UoKTtcblx0XHRcblx0XHR2YXIgdG90YWxUaW1lUGl4ZWxzID0gdG90YWxUaW1lICogcGl4ZWxzX3Blcl9zZWNvbmQ7XG5cdFx0dmFyIGsgPSB3IC8gdG90YWxUaW1lUGl4ZWxzO1xuXHRcdHNjcm9sbGVyLmsgPSBrO1xuXG5cdFx0dmFyIGdyaXBfbGVuZ3RoID0gdyAqIGs7XG5cblx0XHRzY3JvbGxlci5ncmlwX2xlbmd0aCA9IGdyaXBfbGVuZ3RoO1xuXG5cdFx0c2Nyb2xsZXIubGVmdCA9IHNjcm9sbFRpbWUgLyB0b3RhbFRpbWUgKiB3O1xuXHRcdFxuXHRcdHNjcm9sbFJlY3Quc2V0KHNjcm9sbGVyLmxlZnQsIDAsIHNjcm9sbGVyLmdyaXBfbGVuZ3RoLCBoKTtcblx0XHRzY3JvbGxSZWN0LnBhaW50KGN0eCk7XG5cblx0XHR2YXIgciA9IGN1cnJlbnRUaW1lIC8gdG90YWxUaW1lICogdztcdFx0XG5cblx0XHRjdHguZmlsbFN0eWxlID0gIFRoZW1lLmM7XG5cdFx0Y3R4LmxpbmVXaWR0aCA9IDI7XG5cdFx0XG5cdFx0Y3R4LmJlZ2luUGF0aCgpO1xuXHRcdFxuXHRcdC8vIGNpcmNsZVxuXHRcdC8vIGN0eC5hcmMociwgaDIgLyAyLCBoMiAvIDEuNSwgMCwgTWF0aC5QSSAqIDIpO1xuXG5cdFx0Ly8gbGluZVxuXHRcdGN0eC5yZWN0KHIsIDAsIDIsIGggKyA1KTtcblx0XHRjdHguZmlsbCgpXG5cblx0XHRjdHguZmlsbFRleHQoY3VycmVudFRpbWUgJiYgY3VycmVudFRpbWUudG9GaXhlZCgyKSwgciwgaCArIDE0KTtcblx0XHQvLyBjdHguZmlsbFRleHQoY3VycmVudFRpbWUgJiYgY3VycmVudFRpbWUudG9GaXhlZCgzKSwgMTAsIDEwKTtcblx0XHRjdHguZmlsbFRleHQodG90YWxUaW1lLCAzMDAsIDE0KTtcblxuXHRcdGN0eC5yZXN0b3JlKCk7XG5cdH1cblxuXHQvKiogSGFuZGxlcyBkcmFnZ2luZyBmb3Igc2Nyb2xsIGJhciAqKi9cblxuXHR2YXIgZHJhZ2dpbmd4ID0gbnVsbDtcblxuXHR0aGlzLm9uRG93biA9IGZ1bmN0aW9uKGUpIHtcblx0XHQvLyBjb25zb2xlLmxvZygnb25kb3duJywgZSk7XG5cblx0XHRpZiAoc2Nyb2xsUmVjdC5jb250YWlucyhlLm9mZnNldHggLSBNQVJHSU5TLCBlLm9mZnNldHkgLTUpKSB7XG5cdFx0XHRkcmFnZ2luZ3ggPSBzY3JvbGxlci5sZWZ0O1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRcblx0XHR2YXIgdG90YWxUaW1lID0gZGF0YS5nZXQoJ3VpOnRvdGFsVGltZScpLnZhbHVlO1xuXHRcdHZhciBwaXhlbHNfcGVyX3NlY29uZCA9IGRhdGEuZ2V0KCd1aTp0aW1lU2NhbGUnKS52YWx1ZTtcblx0XHR2YXIgdyA9IHdpZHRoIC0gMiAqIE1BUkdJTlM7XG5cblx0XHR2YXIgdCA9IChlLm9mZnNldHggLSBNQVJHSU5TKSAvIHcgKiB0b3RhbFRpbWU7XG5cdFx0Ly8gdCA9IE1hdGgubWF4KDAsIHQpO1xuXG5cdFx0Ly8gZGF0YS5nZXQoJ3VpOmN1cnJlbnRUaW1lJykudmFsdWUgPSB0O1xuXHRcdGRpc3BhdGNoZXIuZmlyZSgndGltZS51cGRhdGUnLCB0KTtcblx0XHRcblx0fTtcblxuXHR0aGlzLm9uTW92ZSA9IGZ1bmN0aW9uIG1vdmUoZSkge1xuXHRcdGlmIChkcmFnZ2luZ3ggIT0gbnVsbCkge1xuXHRcdFx0dmFyIHRvdGFsVGltZSA9IGRhdGEuZ2V0KCd1aTp0b3RhbFRpbWUnKS52YWx1ZTtcblx0XHRcdHZhciB3ID0gd2lkdGggLSAyICogTUFSR0lOUztcblx0XHRcdFxuXHRcdFx0ZGlzcGF0Y2hlci5maXJlKCd1cGRhdGUuc2Nyb2xsVGltZScsIFxuXHRcdFx0XHQoZHJhZ2dpbmd4ICsgZS5keCkgIC8gdyAqIHRvdGFsVGltZSk7XG5cblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5vbkRvd24oZSk7XHRcblx0XHR9XG5cdFx0XG5cdH07XG5cblx0dGhpcy5vblVwID0gZnVuY3Rpb24oZSkge1xuXHRcdGRyYWdnaW5neCA9IG51bGw7XG5cdH1cblxuXHQvKioqIEVuZCBoYW5kbGluZyBmb3Igc2Nyb2xsYmFyICoqKi9cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTY3JvbGxDYW52YXM7Il19
