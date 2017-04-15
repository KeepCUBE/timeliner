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
	height: 200,
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

function Timeliner(target) {
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
	pane.appendChild(pane_status);
	pane.appendChild(pane_title);

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
	var root = document.createElement('timeliner');
	document.body.appendChild(root);
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
	div.appendChild(scrollbar.dom);

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

			if (clicked && clicked.isResizing) {

				if (clicked.onRightEdge) pane.style.width = Math.max(x, minWidth) + 'px';
				if (clicked.onBottomEdge) pane.style.height = Math.max(y, minHeight) + 'px';

				if (clicked.onLeftEdge) {
					var currentWidth = Math.max(clicked.cx - e.clientX  + clicked.w, minWidth);
					if (currentWidth > minWidth) {
						pane.style.width = currentWidth + 'px';
						pane.style.left = e.clientX + 'px';
					}
				}

				if (clicked.onTopEdge) {
					var currentHeight = Math.max(clicked.cy - e.clientY  + clicked.h, minHeight);
					if (currentHeight > minHeight) {
						pane.style.height = currentHeight + 'px';
						pane.style.top = e.clientY + 'px';
					}
				}

				hintHide();

				resize(b.width, b.height);

				return;
			}

			if (clicked && clicked.isMoving) {

				switch(checks()) {
					case 'full-screen':
						setBounds(ghostpane, 0, 0, window.innerWidth, window.innerHeight);
						ghostpane.style.opacity = 0.2;
						break;
					case 'snap-top-edge':
						setBounds(ghostpane, 0, 0, window.innerWidth, window.innerHeight / 2);
						ghostpane.style.opacity = 0.2;
						break;
					case 'snap-left-edge':
						setBounds(ghostpane, 0, 0, window.innerWidth / 2, window.innerHeight);
						ghostpane.style.opacity = 0.2;
						break;
					case 'snap-right-edge':
						setBounds(ghostpane, window.innerWidth / 2, 0, window.innerWidth / 2, window.innerHeight);
						ghostpane.style.opacity = 0.2;
						break;
					case 'snap-bottom-edge':
						setBounds(ghostpane, 0, window.innerHeight / 2, window.innerWidth, window.innerHeight / 2);
						ghostpane.style.opacity = 0.2;
						break;
					default:
						hintHide();
				}

				if (preSnapped) {
					setBounds(pane,
						e.clientX - preSnapped.width / 2,
						e.clientY - Math.min(clicked.y, preSnapped.height),
						preSnapped.width,
						preSnapped.height
					);
					return;
				}

				// moving
				pane.style.top = (e.clientY - clicked.y) + 'px';
				pane.style.left = (e.clientX - clicked.x) + 'px';

				return;
			}

			// This code executes when mouse moves without clicking

			// style cursor
			if (onRightEdge && onBottomEdge || onLeftEdge && onTopEdge) {
				pane.style.cursor = 'nwse-resize';
			} else if (onRightEdge && onTopEdge || onBottomEdge && onLeftEdge) {
				pane.style.cursor = 'nesw-resize';
			} else if (onRightEdge || onLeftEdge) {
				pane.style.cursor = 'ew-resize';
			} else if (onBottomEdge || onTopEdge) {
				pane.style.cursor = 'ns-resize';
			} else if (canMove()) {
				pane.style.cursor = 'move';
			} else {
				pane.style.cursor = 'default';
			}
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
	top.appendChild(operations_div);
	// top.appendChild(document.createElement('br'));


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvZG8uanMvZG8uanMiLCJwYWNrYWdlLmpzb24iLCJzcmMvZm9udC5qc29uIiwic3JjL3NldHRpbmdzLmpzIiwic3JjL3RoZW1lLmpzIiwic3JjL3RpbWVsaW5lci5qcyIsInNyYy91aV9jYW52YXMuanMiLCJzcmMvdWlfY29sb3JfaW5wdXQuanMiLCJzcmMvdWlfaWNvbl9idXR0b24uanMiLCJzcmMvdWlfbnVtYmVyLmpzIiwic3JjL3VpX3Njcm9sbGJhci5qcyIsInNyYy91dGlsX2RhdGFzdG9yZS5qcyIsInNyYy91dGlsX2Rpc3BhdGNoZXIuanMiLCJzcmMvdXRpbF9oYW5kbGVfZHJhZy5qcyIsInNyYy91dGlsX3R3ZWVuLmpzIiwic3JjL3V0aWxfdW5kby5qcyIsInNyYy91dGlscy5qcyIsInNyYy92aWV3X2xheWVyLmpzIiwic3JjL3ZpZXdfbGF5ZXJfY2FiaW5ldC5qcyIsInNyYy92aWV3X3BhbmVsLmpzIiwic3JjL3ZpZXdfdGltZV9zY3JvbGxlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvbUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM09BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNySUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3TEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdGJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImZ1bmN0aW9uIERvKHBhcmVudCkge1xuXHR2YXIgbGlzdGVuZXJzID0gW107XG5cdHRoaXMuZG8gPSBmdW5jdGlvbihjYWxsYmFjaykge1xuXHRcdGxpc3RlbmVycy5wdXNoKGNhbGxiYWNrKTtcblx0fTtcblx0dGhpcy51bmRvID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcblx0XHRsaXN0ZW5lcnMuc3BsaWNlKGxpc3RlbmVycy5pbmRleE9mKGNhbGxiYWNrKSwgMSk7XG5cdH07XG5cdHRoaXMuZmlyZSA9IGZ1bmN0aW9uKCkge1xuXHRcdGZvciAodmFyIHYgPSAwOyB2IDwgbGlzdGVuZXJzLmxlbmd0aDsgdisrKSB7XG5cdFx0XHRsaXN0ZW5lcnNbdl0uYXBwbHkocGFyZW50LCBhcmd1bWVudHMpO1xuXHRcdH1cblx0fTtcbn1cblxuaWYgKHR5cGVvZihtb2R1bGUpID09PSAnb2JqZWN0JykgbW9kdWxlLmV4cG9ydHMgPSBEbztcbiIsIm1vZHVsZS5leHBvcnRzPXtcbiAgXCJ2ZXJzaW9uXCI6IFwiMS42LjBcIlxufSIsIm1vZHVsZS5leHBvcnRzPXtcblx0XCJ1bml0c1BlckVtXCI6IDE3OTIsXG5cdFwiYXNjZW5kZXJcIjogMTUzNixcblx0XCJkZXNjZW5kZXJcIjogLTI1Nixcblx0XCJmb250c1wiOiB7XG5cdFx0XCJwbHVzXCI6IHtcblx0XHRcdFwiYWR2YW5jZVdpZHRoXCI6IDE0MDgsXG5cdFx0XHRcImNvbW1hbmRzXCI6IFwiTSwxNDA4LDgwMCBDLDE0MDgsODUzLDEzNjUsODk2LDEzMTIsODk2IEwsODk2LDg5NiBMLDg5NiwxMzEyIEMsODk2LDEzNjUsODUzLDE0MDgsODAwLDE0MDggTCw2MDgsMTQwOCBDLDU1NSwxNDA4LDUxMiwxMzY1LDUxMiwxMzEyIEwsNTEyLDg5NiBMLDk2LDg5NiBDLDQzLDg5NiwwLDg1MywwLDgwMCBMLDAsNjA4IEMsMCw1NTUsNDMsNTEyLDk2LDUxMiBMLDUxMiw1MTIgTCw1MTIsOTYgQyw1MTIsNDMsNTU1LDAsNjA4LDAgTCw4MDAsMCBDLDg1MywwLDg5Niw0Myw4OTYsOTYgTCw4OTYsNTEyIEwsMTMxMiw1MTIgQywxMzY1LDUxMiwxNDA4LDU1NSwxNDA4LDYwOCBaXCJcblx0XHR9LFxuXHRcdFwibWludXNcIjoge1xuXHRcdFx0XCJhZHZhbmNlV2lkdGhcIjogMTQwOCxcblx0XHRcdFwiY29tbWFuZHNcIjogXCJNLDE0MDgsODAwIEMsMTQwOCw4NTMsMTM2NSw4OTYsMTMxMiw4OTYgTCw5Niw4OTYgQyw0Myw4OTYsMCw4NTMsMCw4MDAgTCwwLDYwOCBDLDAsNTU1LDQzLDUxMiw5Niw1MTIgTCwxMzEyLDUxMiBDLDEzNjUsNTEyLDE0MDgsNTU1LDE0MDgsNjA4IFpcIlxuXHRcdH0sXG5cdFx0XCJva1wiOiB7XG5cdFx0XHRcImFkdmFuY2VXaWR0aFwiOiAxNzkyLFxuXHRcdFx0XCJjb21tYW5kc1wiOiBcIk0sMTY3MSw5NzAgQywxNjcxLDk5NSwxNjYxLDEwMjAsMTY0MywxMDM4IEwsMTUwNywxMTc0IEMsMTQ4OSwxMTkyLDE0NjQsMTIwMiwxNDM5LDEyMDIgQywxNDE0LDEyMDIsMTM4OSwxMTkyLDEzNzEsMTE3NCBMLDcxNSw1MTcgTCw0MjEsODEyIEMsNDAzLDgzMCwzNzgsODQwLDM1Myw4NDAgQywzMjgsODQwLDMwMyw4MzAsMjg1LDgxMiBMLDE0OSw2NzYgQywxMzEsNjU4LDEyMSw2MzMsMTIxLDYwOCBDLDEyMSw1ODMsMTMxLDU1OCwxNDksNTQwIEwsNTExLDE3OCBMLDY0Nyw0MiBDLDY2NSwyNCw2OTAsMTQsNzE1LDE0IEMsNzQwLDE0LDc2NSwyNCw3ODMsNDIgTCw5MTksMTc4IEwsMTY0Myw5MDIgQywxNjYxLDkyMCwxNjcxLDk0NSwxNjcxLDk3MCBaXCJcblx0XHR9LFxuXHRcdFwicmVtb3ZlXCI6IHtcblx0XHRcdFwiYWR2YW5jZVdpZHRoXCI6IDE0MDgsXG5cdFx0XHRcImNvbW1hbmRzXCI6IFwiTSwxMjk4LDIxNCBDLDEyOTgsMjM5LDEyODgsMjY0LDEyNzAsMjgyIEwsOTc2LDU3NiBMLDEyNzAsODcwIEMsMTI4OCw4ODgsMTI5OCw5MTMsMTI5OCw5MzggQywxMjk4LDk2MywxMjg4LDk4OCwxMjcwLDEwMDYgTCwxMTM0LDExNDIgQywxMTE2LDExNjAsMTA5MSwxMTcwLDEwNjYsMTE3MCBDLDEwNDEsMTE3MCwxMDE2LDExNjAsOTk4LDExNDIgTCw3MDQsODQ4IEwsNDEwLDExNDIgQywzOTIsMTE2MCwzNjcsMTE3MCwzNDIsMTE3MCBDLDMxNywxMTcwLDI5MiwxMTYwLDI3NCwxMTQyIEwsMTM4LDEwMDYgQywxMjAsOTg4LDExMCw5NjMsMTEwLDkzOCBDLDExMCw5MTMsMTIwLDg4OCwxMzgsODcwIEwsNDMyLDU3NiBMLDEzOCwyODIgQywxMjAsMjY0LDExMCwyMzksMTEwLDIxNCBDLDExMCwxODksMTIwLDE2NCwxMzgsMTQ2IEwsMjc0LDEwIEMsMjkyLC04LDMxNywtMTgsMzQyLC0xOCBDLDM2NywtMTgsMzkyLC04LDQxMCwxMCBMLDcwNCwzMDQgTCw5OTgsMTAgQywxMDE2LC04LDEwNDEsLTE4LDEwNjYsLTE4IEMsMTA5MSwtMTgsMTExNiwtOCwxMTM0LDEwIEwsMTI3MCwxNDYgQywxMjg4LDE2NCwxMjk4LDE4OSwxMjk4LDIxNCBaXCJcblx0XHR9LFxuXHRcdFwiem9vbV9pblwiOiB7XG5cdFx0XHRcImFkdmFuY2VXaWR0aFwiOiAxNjY0LFxuXHRcdFx0XCJjb21tYW5kc1wiOiBcIk0sMTAyNCw3MzYgQywxMDI0LDc1MywxMDA5LDc2OCw5OTIsNzY4IEwsNzY4LDc2OCBMLDc2OCw5OTIgQyw3NjgsMTAwOSw3NTMsMTAyNCw3MzYsMTAyNCBMLDY3MiwxMDI0IEMsNjU1LDEwMjQsNjQwLDEwMDksNjQwLDk5MiBMLDY0MCw3NjggTCw0MTYsNzY4IEMsMzk5LDc2OCwzODQsNzUzLDM4NCw3MzYgTCwzODQsNjcyIEMsMzg0LDY1NSwzOTksNjQwLDQxNiw2NDAgTCw2NDAsNjQwIEwsNjQwLDQxNiBDLDY0MCwzOTksNjU1LDM4NCw2NzIsMzg0IEwsNzM2LDM4NCBDLDc1MywzODQsNzY4LDM5OSw3NjgsNDE2IEwsNzY4LDY0MCBMLDk5Miw2NDAgQywxMDA5LDY0MCwxMDI0LDY1NSwxMDI0LDY3MiBNLDExNTIsNzA0IEMsMTE1Miw0NTcsOTUxLDI1Niw3MDQsMjU2IEMsNDU3LDI1NiwyNTYsNDU3LDI1Niw3MDQgQywyNTYsOTUxLDQ1NywxMTUyLDcwNCwxMTUyIEMsOTUxLDExNTIsMTE1Miw5NTEsMTE1Miw3MDQgTSwxNjY0LC0xMjggQywxNjY0LC05NCwxNjUwLC02MSwxNjI3LC0zOCBMLDEyODQsMzA1IEMsMTM2NSw0MjIsMTQwOCw1NjIsMTQwOCw3MDQgQywxNDA4LDEwOTMsMTA5MywxNDA4LDcwNCwxNDA4IEMsMzE1LDE0MDgsMCwxMDkzLDAsNzA0IEMsMCwzMTUsMzE1LDAsNzA0LDAgQyw4NDYsMCw5ODYsNDMsMTEwMywxMjQgTCwxNDQ2LC0yMTggQywxNDY5LC0yNDIsMTUwMiwtMjU2LDE1MzYsLTI1NiBDLDE2MDcsLTI1NiwxNjY0LC0xOTksMTY2NCwtMTI4IFpcIlxuXHRcdH0sXG5cdFx0XCJ6b29tX291dFwiOiB7XG5cdFx0XHRcImFkdmFuY2VXaWR0aFwiOiAxNjY0LFxuXHRcdFx0XCJjb21tYW5kc1wiOiBcIk0sMTAyNCw3MzYgQywxMDI0LDc1MywxMDA5LDc2OCw5OTIsNzY4IEwsNDE2LDc2OCBDLDM5OSw3NjgsMzg0LDc1MywzODQsNzM2IEwsMzg0LDY3MiBDLDM4NCw2NTUsMzk5LDY0MCw0MTYsNjQwIEwsOTkyLDY0MCBDLDEwMDksNjQwLDEwMjQsNjU1LDEwMjQsNjcyIE0sMTE1Miw3MDQgQywxMTUyLDQ1Nyw5NTEsMjU2LDcwNCwyNTYgQyw0NTcsMjU2LDI1Niw0NTcsMjU2LDcwNCBDLDI1Niw5NTEsNDU3LDExNTIsNzA0LDExNTIgQyw5NTEsMTE1MiwxMTUyLDk1MSwxMTUyLDcwNCBNLDE2NjQsLTEyOCBDLDE2NjQsLTk0LDE2NTAsLTYxLDE2MjcsLTM4IEwsMTI4NCwzMDUgQywxMzY1LDQyMiwxNDA4LDU2MiwxNDA4LDcwNCBDLDE0MDgsMTA5MywxMDkzLDE0MDgsNzA0LDE0MDggQywzMTUsMTQwOCwwLDEwOTMsMCw3MDQgQywwLDMxNSwzMTUsMCw3MDQsMCBDLDg0NiwwLDk4Niw0MywxMTAzLDEyNCBMLDE0NDYsLTIxOCBDLDE0NjksLTI0MiwxNTAyLC0yNTYsMTUzNiwtMjU2IEMsMTYwNywtMjU2LDE2NjQsLTE5OSwxNjY0LC0xMjggWlwiXG5cdFx0fSxcblx0XHRcImNvZ1wiOiB7XG5cdFx0XHRcImFkdmFuY2VXaWR0aFwiOiAxNTM2LFxuXHRcdFx0XCJjb21tYW5kc1wiOiBcIk0sMTAyNCw2NDAgQywxMDI0LDQ5OSw5MDksMzg0LDc2OCwzODQgQyw2MjcsMzg0LDUxMiw0OTksNTEyLDY0MCBDLDUxMiw3ODEsNjI3LDg5Niw3NjgsODk2IEMsOTA5LDg5NiwxMDI0LDc4MSwxMDI0LDY0MCBNLDE1MzYsNzQ5IEMsMTUzNiw3NjYsMTUyNCw3ODIsMTUwNyw3ODUgTCwxMzI0LDgxMyBDLDEzMTQsODQ2LDEzMDAsODc5LDEyODMsOTExIEMsMTMxNyw5NTgsMTM1NCwxMDAyLDEzODgsMTA0OCBDLDEzOTMsMTA1NSwxMzk2LDEwNjIsMTM5NiwxMDcxIEMsMTM5NiwxMDc5LDEzOTQsMTA4NywxMzg5LDEwOTMgQywxMzQ3LDExNTIsMTI3NywxMjE0LDEyMjQsMTI2MyBDLDEyMTcsMTI2OSwxMjA4LDEyNzMsMTE5OSwxMjczIEMsMTE5MCwxMjczLDExODEsMTI3MCwxMTc1LDEyNjQgTCwxMDMzLDExNTcgQywxMDA0LDExNzIsOTc0LDExODQsOTQzLDExOTQgTCw5MTUsMTM3OCBDLDkxMywxMzk1LDg5NywxNDA4LDg3OSwxNDA4IEwsNjU3LDE0MDggQyw2MzksMTQwOCw2MjUsMTM5Niw2MjEsMTM4MCBDLDYwNSwxMzIwLDU5OSwxMjU1LDU5MiwxMTk0IEMsNTYxLDExODQsNTMwLDExNzEsNTAxLDExNTYgTCwzNjMsMTI2MyBDLDM1NSwxMjY5LDM0NiwxMjczLDMzNywxMjczIEMsMzAzLDEyNzMsMTY4LDExMjcsMTQ0LDEwOTQgQywxMzksMTA4NywxMzUsMTA4MCwxMzUsMTA3MSBDLDEzNSwxMDYyLDEzOSwxMDU0LDE0NSwxMDQ3IEMsMTgyLDEwMDIsMjE4LDk1NywyNTIsOTA5IEMsMjM2LDg3OSwyMjMsODQ5LDIxMyw4MTcgTCwyNyw3ODkgQywxMiw3ODYsMCw3NjgsMCw3NTMgTCwwLDUzMSBDLDAsNTE0LDEyLDQ5OCwyOSw0OTUgTCwyMTIsNDY4IEMsMjIyLDQzNCwyMzYsNDAxLDI1MywzNjkgQywyMTksMzIyLDE4MiwyNzgsMTQ4LDIzMiBDLDE0MywyMjUsMTQwLDIxOCwxNDAsMjA5IEMsMTQwLDIwMSwxNDIsMTkzLDE0NywxODYgQywxODksMTI4LDI1OSw2NiwzMTIsMTggQywzMTksMTEsMzI4LDcsMzM3LDcgQywzNDYsNywzNTUsMTAsMzYyLDE2IEwsNTAzLDEyMyBDLDUzMiwxMDgsNTYyLDk2LDU5Myw4NiBMLDYyMSwtOTggQyw2MjMsLTExNSw2MzksLTEyOCw2NTcsLTEyOCBMLDg3OSwtMTI4IEMsODk3LC0xMjgsOTExLC0xMTYsOTE1LC0xMDAgQyw5MzEsLTQwLDkzNywyNSw5NDQsODYgQyw5NzUsOTYsMTAwNiwxMDksMTAzNSwxMjQgTCwxMTczLDE2IEMsMTE4MSwxMSwxMTkwLDcsMTE5OSw3IEMsMTIzMyw3LDEzNjgsMTU0LDEzOTIsMTg2IEMsMTM5OCwxOTMsMTQwMSwyMDAsMTQwMSwyMDkgQywxNDAxLDIxOCwxMzk3LDIyNywxMzkxLDIzNCBDLDEzNTQsMjc5LDEzMTgsMzIzLDEyODQsMzcyIEMsMTMwMCw0MDEsMTMxMiw0MzEsMTMyMyw0NjMgTCwxNTA4LDQ5MSBDLDE1MjQsNDk0LDE1MzYsNTEyLDE1MzYsNTI3IFpcIlxuXHRcdH0sXG5cdFx0XCJ0cmFzaFwiOiB7XG5cdFx0XHRcImFkdmFuY2VXaWR0aFwiOiAxNDA4LFxuXHRcdFx0XCJjb21tYW5kc1wiOiBcIk0sNTEyLDgwMCBDLDUxMiw4MTgsNDk4LDgzMiw0ODAsODMyIEwsNDE2LDgzMiBDLDM5OCw4MzIsMzg0LDgxOCwzODQsODAwIEwsMzg0LDIyNCBDLDM4NCwyMDYsMzk4LDE5Miw0MTYsMTkyIEwsNDgwLDE5MiBDLDQ5OCwxOTIsNTEyLDIwNiw1MTIsMjI0IE0sNzY4LDgwMCBDLDc2OCw4MTgsNzU0LDgzMiw3MzYsODMyIEwsNjcyLDgzMiBDLDY1NCw4MzIsNjQwLDgxOCw2NDAsODAwIEwsNjQwLDIyNCBDLDY0MCwyMDYsNjU0LDE5Miw2NzIsMTkyIEwsNzM2LDE5MiBDLDc1NCwxOTIsNzY4LDIwNiw3NjgsMjI0IE0sMTAyNCw4MDAgQywxMDI0LDgxOCwxMDEwLDgzMiw5OTIsODMyIEwsOTI4LDgzMiBDLDkxMCw4MzIsODk2LDgxOCw4OTYsODAwIEwsODk2LDIyNCBDLDg5NiwyMDYsOTEwLDE5Miw5MjgsMTkyIEwsOTkyLDE5MiBDLDEwMTAsMTkyLDEwMjQsMjA2LDEwMjQsMjI0IE0sMTE1Miw3NiBDLDExNTIsMjgsMTEyNSwwLDExMjAsMCBMLDI4OCwwIEMsMjgzLDAsMjU2LDI4LDI1Niw3NiBMLDI1NiwxMDI0IEwsMTE1MiwxMDI0IEwsMTE1Miw3NiBNLDQ4MCwxMTUyIEwsNTI5LDEyNjkgQyw1MzIsMTI3Myw1NDAsMTI3OSw1NDYsMTI4MCBMLDg2MywxMjgwIEMsODY4LDEyNzksODc3LDEyNzMsODgwLDEyNjkgTCw5MjgsMTE1MiBNLDE0MDgsMTEyMCBDLDE0MDgsMTEzOCwxMzk0LDExNTIsMTM3NiwxMTUyIEwsMTA2NywxMTUyIEwsOTk3LDEzMTkgQyw5NzcsMTM2OCw5MTcsMTQwOCw4NjQsMTQwOCBMLDU0NCwxNDA4IEMsNDkxLDE0MDgsNDMxLDEzNjgsNDExLDEzMTkgTCwzNDEsMTE1MiBMLDMyLDExNTIgQywxNCwxMTUyLDAsMTEzOCwwLDExMjAgTCwwLDEwNTYgQywwLDEwMzgsMTQsMTAyNCwzMiwxMDI0IEwsMTI4LDEwMjQgTCwxMjgsNzIgQywxMjgsLTM4LDIwMCwtMTI4LDI4OCwtMTI4IEwsMTEyMCwtMTI4IEMsMTIwOCwtMTI4LDEyODAsLTM0LDEyODAsNzYgTCwxMjgwLDEwMjQgTCwxMzc2LDEwMjQgQywxMzk0LDEwMjQsMTQwOCwxMDM4LDE0MDgsMTA1NiBaXCJcblx0XHR9LFxuXHRcdFwiZmlsZV9hbHRcIjoge1xuXHRcdFx0XCJhZHZhbmNlV2lkdGhcIjogMTUzNixcblx0XHRcdFwiY29tbWFuZHNcIjogXCJNLDE0NjgsMTE1NiBMLDExNTYsMTQ2OCBDLDExMTksMTUwNSwxMDQ1LDE1MzYsOTkyLDE1MzYgTCw5NiwxNTM2IEMsNDMsMTUzNiwwLDE0OTMsMCwxNDQwIEwsMCwtMTYwIEMsMCwtMjEzLDQzLC0yNTYsOTYsLTI1NiBMLDE0NDAsLTI1NiBDLDE0OTMsLTI1NiwxNTM2LC0yMTMsMTUzNiwtMTYwIEwsMTUzNiw5OTIgQywxNTM2LDEwNDUsMTUwNSwxMTE5LDE0NjgsMTE1NiBNLDEwMjQsMTQwMCBDLDEwNDEsMTM5NCwxMDU4LDEzODUsMTA2NSwxMzc4IEwsMTM3OCwxMDY1IEMsMTM4NSwxMDU4LDEzOTQsMTA0MSwxNDAwLDEwMjQgTCwxMDI0LDEwMjQgTSwxNDA4LC0xMjggTCwxMjgsLTEyOCBMLDEyOCwxNDA4IEwsODk2LDE0MDggTCw4OTYsOTkyIEMsODk2LDkzOSw5MzksODk2LDk5Miw4OTYgTCwxNDA4LDg5NiBaXCJcblx0XHR9LFxuXHRcdFwiZG93bmxvYWRfYWx0XCI6IHtcblx0XHRcdFwiYWR2YW5jZVdpZHRoXCI6IDE2NjQsXG5cdFx0XHRcImNvbW1hbmRzXCI6IFwiTSwxMjgwLDE5MiBDLDEyODAsMTU3LDEyNTEsMTI4LDEyMTYsMTI4IEMsMTE4MSwxMjgsMTE1MiwxNTcsMTE1MiwxOTIgQywxMTUyLDIyNywxMTgxLDI1NiwxMjE2LDI1NiBDLDEyNTEsMjU2LDEyODAsMjI3LDEyODAsMTkyIE0sMTUzNiwxOTIgQywxNTM2LDE1NywxNTA3LDEyOCwxNDcyLDEyOCBDLDE0MzcsMTI4LDE0MDgsMTU3LDE0MDgsMTkyIEMsMTQwOCwyMjcsMTQzNywyNTYsMTQ3MiwyNTYgQywxNTA3LDI1NiwxNTM2LDIyNywxNTM2LDE5MiBNLDE2NjQsNDE2IEMsMTY2NCw0NjksMTYyMSw1MTIsMTU2OCw1MTIgTCwxMTA0LDUxMiBMLDk2OCwzNzYgQyw5MzEsMzQwLDg4MywzMjAsODMyLDMyMCBDLDc4MSwzMjAsNzMzLDM0MCw2OTYsMzc2IEwsNTYxLDUxMiBMLDk2LDUxMiBDLDQzLDUxMiwwLDQ2OSwwLDQxNiBMLDAsOTYgQywwLDQzLDQzLDAsOTYsMCBMLDE1NjgsMCBDLDE2MjEsMCwxNjY0LDQzLDE2NjQsOTYgTSwxMzM5LDk4NSBDLDEzMjksMTAwOCwxMzA2LDEwMjQsMTI4MCwxMDI0IEwsMTAyNCwxMDI0IEwsMTAyNCwxNDcyIEMsMTAyNCwxNTA3LDk5NSwxNTM2LDk2MCwxNTM2IEwsNzA0LDE1MzYgQyw2NjksMTUzNiw2NDAsMTUwNyw2NDAsMTQ3MiBMLDY0MCwxMDI0IEwsMzg0LDEwMjQgQywzNTgsMTAyNCwzMzUsMTAwOCwzMjUsOTg1IEMsMzE1LDk2MSwzMjAsOTMzLDMzOSw5MTUgTCw3ODcsNDY3IEMsNzk5LDQ1NCw4MTYsNDQ4LDgzMiw0NDggQyw4NDgsNDQ4LDg2NSw0NTQsODc3LDQ2NyBMLDEzMjUsOTE1IEMsMTM0NCw5MzMsMTM0OSw5NjEsMTMzOSw5ODUgWlwiXG5cdFx0fSxcblx0XHRcInJlcGVhdFwiOiB7XG5cdFx0XHRcImFkdmFuY2VXaWR0aFwiOiAxNTM2LFxuXHRcdFx0XCJjb21tYW5kc1wiOiBcIk0sMTUzNiwxMjgwIEMsMTUzNiwxMzA2LDE1MjAsMTMyOSwxNDk3LDEzMzkgQywxNDczLDEzNDksMTQ0NSwxMzQ0LDE0MjcsMTMyNSBMLDEyOTcsMTE5NiBDLDExNTYsMTMyOSw5NjUsMTQwOCw3NjgsMTQwOCBDLDM0NSwxNDA4LDAsMTA2MywwLDY0MCBDLDAsMjE3LDM0NSwtMTI4LDc2OCwtMTI4IEMsOTk3LC0xMjgsMTIxMywtMjcsMTM1OSwxNDkgQywxMzY5LDE2MiwxMzY5LDE4MSwxMzU3LDE5MiBMLDEyMjAsMzMwIEMsMTIxMywzMzYsMTIwNCwzMzksMTE5NSwzMzkgQywxMTg2LDMzOCwxMTc3LDMzNCwxMTcyLDMyNyBDLDEwNzQsMjAwLDkyNywxMjgsNzY4LDEyOCBDLDQ4NiwxMjgsMjU2LDM1OCwyNTYsNjQwIEMsMjU2LDkyMiw0ODYsMTE1Miw3NjgsMTE1MiBDLDg5OSwxMTUyLDEwMjMsMTEwMiwxMTE3LDEwMTUgTCw5NzksODc3IEMsOTYwLDg1OSw5NTUsODMxLDk2NSw4MDggQyw5NzUsNzg0LDk5OCw3NjgsMTAyNCw3NjggTCwxNDcyLDc2OCBDLDE1MDcsNzY4LDE1MzYsNzk3LDE1MzYsODMyIFpcIlxuXHRcdH0sXG5cdFx0XCJwZW5jaWxcIjoge1xuXHRcdFx0XCJhZHZhbmNlV2lkdGhcIjogMTUzNixcblx0XHRcdFwiY29tbWFuZHNcIjogXCJNLDM2MywwIEwsMjU2LDAgTCwyNTYsMTI4IEwsMTI4LDEyOCBMLDEyOCwyMzUgTCwyMTksMzI2IEwsNDU0LDkxIE0sODg2LDkyOCBDLDg4Niw5MjIsODg0LDkxNiw4NzksOTExIEwsMzM3LDM2OSBDLDMzMiwzNjQsMzI2LDM2MiwzMjAsMzYyIEMsMzA3LDM2MiwyOTgsMzcxLDI5OCwzODQgQywyOTgsMzkwLDMwMCwzOTYsMzA1LDQwMSBMLDg0Nyw5NDMgQyw4NTIsOTQ4LDg1OCw5NTAsODY0LDk1MCBDLDg3Nyw5NTAsODg2LDk0MSw4ODYsOTI4IE0sODMyLDExMjAgTCwwLDI4OCBMLDAsLTEyOCBMLDQxNiwtMTI4IEwsMTI0OCw3MDQgTSwxNTE1LDEwMjQgQywxNTE1LDEwNTgsMTUwMSwxMDkxLDE0NzgsMTExNSBMLDEyNDMsMTM0OSBDLDEyMTksMTM3MywxMTg2LDEzODcsMTE1MiwxMzg3IEMsMTExOCwxMzg3LDEwODUsMTM3MywxMDYyLDEzNDkgTCw4OTYsMTE4NCBMLDEzMTIsNzY4IEwsMTQ3OCw5MzQgQywxNTAxLDk1NywxNTE1LDk5MCwxNTE1LDEwMjQgWlwiXG5cdFx0fSxcblx0XHRcImVkaXRcIjoge1xuXHRcdFx0XCJhZHZhbmNlV2lkdGhcIjogMTc5Mixcblx0XHRcdFwiY29tbWFuZHNcIjogXCJNLDg4OCwzNTIgTCw4MzIsMzUyIEwsODMyLDQ0OCBMLDczNiw0NDggTCw3MzYsNTA0IEwsODUyLDYyMCBMLDEwMDQsNDY4IE0sMTMyOCwxMDcyIEMsMTMzNywxMDYzLDEzMzYsMTA0OCwxMzI3LDEwMzkgTCw5NzcsNjg5IEMsOTY4LDY4MCw5NTMsNjc5LDk0NCw2ODggQyw5MzUsNjk3LDkzNiw3MTIsOTQ1LDcyMSBMLDEyOTUsMTA3MSBDLDEzMDQsMTA4MCwxMzE5LDEwODEsMTMyOCwxMDcyIE0sMTQwOCw0NzggQywxNDA4LDQ5MSwxNDAwLDUwMiwxMzg4LDUwNyBDLDEzNzYsNTEyLDEzNjMsNTEwLDEzNTMsNTAwIEwsMTI4OSw0MzYgQywxMjgzLDQzMCwxMjgwLDQyMiwxMjgwLDQxNCBMLDEyODAsMjg4IEMsMTI4MCwyMDAsMTIwOCwxMjgsMTEyMCwxMjggTCwyODgsMTI4IEMsMjAwLDEyOCwxMjgsMjAwLDEyOCwyODggTCwxMjgsMTEyMCBDLDEyOCwxMjA4LDIwMCwxMjgwLDI4OCwxMjgwIEwsMTEyMCwxMjgwIEMsMTEzNSwxMjgwLDExNTAsMTI3OCwxMTY1LDEyNzQgQywxMTc2LDEyNzAsMTE4OCwxMjczLDExOTcsMTI4MiBMLDEyNDYsMTMzMSBDLDEyNTQsMTMzOSwxMjU3LDEzNDksMTI1NSwxMzYwIEMsMTI1MywxMzcwLDEyNDYsMTM3OSwxMjM3LDEzODMgQywxMjAwLDE0MDAsMTE2MCwxNDA4LDExMjAsMTQwOCBMLDI4OCwxNDA4IEMsMTI5LDE0MDgsMCwxMjc5LDAsMTEyMCBMLDAsMjg4IEMsMCwxMjksMTI5LDAsMjg4LDAgTCwxMTIwLDAgQywxMjc5LDAsMTQwOCwxMjksMTQwOCwyODggTSwxMzEyLDEyMTYgTCw2NDAsNTQ0IEwsNjQwLDI1NiBMLDkyOCwyNTYgTCwxNjAwLDkyOCBNLDE3NTYsMTA4NCBDLDE3OTMsMTEyMSwxNzkzLDExODMsMTc1NiwxMjIwIEwsMTYwNCwxMzcyIEMsMTU2NywxNDA5LDE1MDUsMTQwOSwxNDY4LDEzNzIgTCwxMzc2LDEyODAgTCwxNjY0LDk5MiBMLDE3NTYsMTA4NCBaXCJcblx0XHR9LFxuXHRcdFwicGxheVwiOiB7XG5cdFx0XHRcImFkdmFuY2VXaWR0aFwiOiAxNDA4LFxuXHRcdFx0XCJjb21tYW5kc1wiOiBcIk0sMTM4NCw2MDkgQywxNDE1LDYyNiwxNDE1LDY1NCwxMzg0LDY3MSBMLDU2LDE0MDkgQywyNSwxNDI2LDAsMTQxMSwwLDEzNzYgTCwwLC05NiBDLDAsLTEzMSwyNSwtMTQ2LDU2LC0xMjkgWlwiXG5cdFx0fSxcblx0XHRcInBhdXNlXCI6IHtcblx0XHRcdFwiYWR2YW5jZVdpZHRoXCI6IDE1MzYsXG5cdFx0XHRcImNvbW1hbmRzXCI6IFwiTSwxNTM2LDEzNDQgQywxNTM2LDEzNzksMTUwNywxNDA4LDE0NzIsMTQwOCBMLDk2MCwxNDA4IEMsOTI1LDE0MDgsODk2LDEzNzksODk2LDEzNDQgTCw4OTYsLTY0IEMsODk2LC05OSw5MjUsLTEyOCw5NjAsLTEyOCBMLDE0NzIsLTEyOCBDLDE1MDcsLTEyOCwxNTM2LC05OSwxNTM2LC02NCBNLDY0MCwxMzQ0IEMsNjQwLDEzNzksNjExLDE0MDgsNTc2LDE0MDggTCw2NCwxNDA4IEMsMjksMTQwOCwwLDEzNzksMCwxMzQ0IEwsMCwtNjQgQywwLC05OSwyOSwtMTI4LDY0LC0xMjggTCw1NzYsLTEyOCBDLDYxMSwtMTI4LDY0MCwtOTksNjQwLC02NCBaXCJcblx0XHR9LFxuXHRcdFwic3RvcFwiOiB7XG5cdFx0XHRcImFkdmFuY2VXaWR0aFwiOiAxNTM2LFxuXHRcdFx0XCJjb21tYW5kc1wiOiBcIk0sMTUzNiwxMzQ0IEMsMTUzNiwxMzc5LDE1MDcsMTQwOCwxNDcyLDE0MDggTCw2NCwxNDA4IEMsMjksMTQwOCwwLDEzNzksMCwxMzQ0IEwsMCwtNjQgQywwLC05OSwyOSwtMTI4LDY0LC0xMjggTCwxNDcyLC0xMjggQywxNTA3LC0xMjgsMTUzNiwtOTksMTUzNiwtNjQgWlwiXG5cdFx0fSxcblx0XHRcInJlc2l6ZV9mdWxsXCI6IHtcblx0XHRcdFwiYWR2YW5jZVdpZHRoXCI6IDE1MzYsXG5cdFx0XHRcImNvbW1hbmRzXCI6IFwiTSw3NTUsNDgwIEMsNzU1LDQ4OCw3NTEsNDk3LDc0NSw1MDMgTCw2MzEsNjE3IEMsNjI1LDYyMyw2MTYsNjI3LDYwOCw2MjcgQyw2MDAsNjI3LDU5MSw2MjMsNTg1LDYxNyBMLDI1MywyODUgTCwxMDksNDI5IEMsOTcsNDQxLDgxLDQ0OCw2NCw0NDggQywyOSw0NDgsMCw0MTksMCwzODQgTCwwLC02NCBDLDAsLTk5LDI5LC0xMjgsNjQsLTEyOCBMLDUxMiwtMTI4IEMsNTQ3LC0xMjgsNTc2LC05OSw1NzYsLTY0IEMsNTc2LC00Nyw1NjksLTMxLDU1NywtMTkgTCw0MTMsMTI1IEwsNzQ1LDQ1NyBDLDc1MSw0NjMsNzU1LDQ3Miw3NTUsNDgwIE0sMTUzNiwxMzQ0IEMsMTUzNiwxMzc5LDE1MDcsMTQwOCwxNDcyLDE0MDggTCwxMDI0LDE0MDggQyw5ODksMTQwOCw5NjAsMTM3OSw5NjAsMTM0NCBDLDk2MCwxMzI3LDk2NywxMzExLDk3OSwxMjk5IEwsMTEyMywxMTU1IEwsNzkxLDgyMyBDLDc4NSw4MTcsNzgxLDgwOCw3ODEsODAwIEMsNzgxLDc5Miw3ODUsNzgzLDc5MSw3NzcgTCw5MDUsNjYzIEMsOTExLDY1Nyw5MjAsNjUzLDkyOCw2NTMgQyw5MzYsNjUzLDk0NSw2NTcsOTUxLDY2MyBMLDEyODMsOTk1IEwsMTQyNyw4NTEgQywxNDM5LDgzOSwxNDU1LDgzMiwxNDcyLDgzMiBDLDE1MDcsODMyLDE1MzYsODYxLDE1MzYsODk2IFpcIlxuXHRcdH0sXG5cdFx0XCJyZXNpemVfc21hbGxcIjoge1xuXHRcdFx0XCJhZHZhbmNlV2lkdGhcIjogMTUzNixcblx0XHRcdFwiY29tbWFuZHNcIjogXCJNLDc2OCw1NzYgQyw3NjgsNjExLDczOSw2NDAsNzA0LDY0MCBMLDI1Niw2NDAgQywyMjEsNjQwLDE5Miw2MTEsMTkyLDU3NiBDLDE5Miw1NTksMTk5LDU0MywyMTEsNTMxIEwsMzU1LDM4NyBMLDIzLDU1IEMsMTcsNDksMTMsNDAsMTMsMzIgQywxMywyNCwxNywxNSwyMyw5IEwsMTM3LC0xMDUgQywxNDMsLTExMSwxNTIsLTExNSwxNjAsLTExNSBDLDE2OCwtMTE1LDE3NywtMTExLDE4MywtMTA1IEwsNTE1LDIyNyBMLDY1OSw4MyBDLDY3MSw3MSw2ODcsNjQsNzA0LDY0IEMsNzM5LDY0LDc2OCw5Myw3NjgsMTI4IE0sMTUyMywxMjQ4IEMsMTUyMywxMjU2LDE1MTksMTI2NSwxNTEzLDEyNzEgTCwxMzk5LDEzODUgQywxMzkzLDEzOTEsMTM4NCwxMzk1LDEzNzYsMTM5NSBDLDEzNjgsMTM5NSwxMzU5LDEzOTEsMTM1MywxMzg1IEwsMTAyMSwxMDUzIEwsODc3LDExOTcgQyw4NjUsMTIwOSw4NDksMTIxNiw4MzIsMTIxNiBDLDc5NywxMjE2LDc2OCwxMTg3LDc2OCwxMTUyIEwsNzY4LDcwNCBDLDc2OCw2NjksNzk3LDY0MCw4MzIsNjQwIEwsMTI4MCw2NDAgQywxMzE1LDY0MCwxMzQ0LDY2OSwxMzQ0LDcwNCBDLDEzNDQsNzIxLDEzMzcsNzM3LDEzMjUsNzQ5IEwsMTE4MSw4OTMgTCwxNTEzLDEyMjUgQywxNTE5LDEyMzEsMTUyMywxMjQwLDE1MjMsMTI0OCBaXCJcblx0XHR9LFxuXHRcdFwiZXllX29wZW5cIjoge1xuXHRcdFx0XCJhZHZhbmNlV2lkdGhcIjogMTc5Mixcblx0XHRcdFwiY29tbWFuZHNcIjogXCJNLDE2NjQsNTc2IEMsMTQ5MywzMTIsMTIxNywxMjgsODk2LDEyOCBDLDU3NSwxMjgsMjk5LDMxMiwxMjgsNTc2IEMsMjIzLDcyMywzNTMsODQ5LDUwOSw5MjkgQyw0NjksODYxLDQ0OCw3ODMsNDQ4LDcwNCBDLDQ0OCw0NTcsNjQ5LDI1Niw4OTYsMjU2IEMsMTE0MywyNTYsMTM0NCw0NTcsMTM0NCw3MDQgQywxMzQ0LDc4MywxMzIzLDg2MSwxMjgzLDkyOSBDLDE0MzksODQ5LDE1NjksNzIzLDE2NjQsNTc2IE0sOTQ0LDk2MCBDLDk0NCw5MzQsOTIyLDkxMiw4OTYsOTEyIEMsNzgyLDkxMiw2ODgsODE4LDY4OCw3MDQgQyw2ODgsNjc4LDY2Niw2NTYsNjQwLDY1NiBDLDYxNCw2NTYsNTkyLDY3OCw1OTIsNzA0IEMsNTkyLDg3MSw3MjksMTAwOCw4OTYsMTAwOCBDLDkyMiwxMDA4LDk0NCw5ODYsOTQ0LDk2MCBNLDE3OTIsNTc2IEMsMTc5Miw2MDEsMTc4NCw2MjQsMTc3Miw2NDUgQywxNTg4LDk0NywxMjUxLDExNTIsODk2LDExNTIgQyw1NDEsMTE1MiwyMDQsOTQ3LDIwLDY0NSBDLDgsNjI0LDAsNjAxLDAsNTc2IEMsMCw1NTEsOCw1MjgsMjAsNTA3IEMsMjA0LDIwNSw1NDEsMCw4OTYsMCBDLDEyNTEsMCwxNTg4LDIwNCwxNzcyLDUwNyBDLDE3ODQsNTI4LDE3OTIsNTUxLDE3OTIsNTc2IFpcIlxuXHRcdH0sXG5cdFx0XCJleWVfY2xvc2VcIjoge1xuXHRcdFx0XCJhZHZhbmNlV2lkdGhcIjogMTc5Mixcblx0XHRcdFwiY29tbWFuZHNcIjogXCJNLDU1NSwyMDEgQywzNzksMjgwLDIzMiw0MTUsMTI4LDU3NiBDLDIyMyw3MjMsMzUzLDg0OSw1MDksOTI5IEMsNDY5LDg2MSw0NDgsNzgzLDQ0OCw3MDQgQyw0NDgsNTYxLDUxNyw0MjYsNjMzLDM0MiBNLDk0NCw5NjAgQyw5NDQsOTM0LDkyMiw5MTIsODk2LDkxMiBDLDc4Miw5MTIsNjg4LDgxOSw2ODgsNzA0IEMsNjg4LDY3OCw2NjYsNjU2LDY0MCw2NTYgQyw2MTQsNjU2LDU5Miw2NzgsNTkyLDcwNCBDLDU5Miw4NzEsNzI5LDEwMDgsODk2LDEwMDggQyw5MjIsMTAwOCw5NDQsOTg2LDk0NCw5NjAgTSwxMzA3LDExNTEgQywxMzA3LDExNjIsMTMwMSwxMTcyLDEyOTEsMTE3OCBDLDEyNzAsMTE5MCwxMTc2LDEyNDgsMTE1OCwxMjQ4IEMsMTE0NiwxMjQ4LDExMzYsMTI0MiwxMTMwLDEyMzIgTCwxMDc2LDExMzUgQywxMDE3LDExNDYsOTU2LDExNTIsODk2LDExNTIgQyw1MjcsMTE1MiwyMTgsOTQ5LDIwLDY0NSBDLDcsNjI1LDAsNjAwLDAsNTc2IEMsMCw1NTEsNyw1MjcsMjAsNTA3IEMsMTM1LDMyNywyOTgsMTc3LDQ5Miw4OSBDLDQ4Miw3Miw0NDgsMTgsNDQ4LDIgQyw0NDgsLTEwLDQ1NCwtMjAsNDY0LC0yNiBDLDQ4NSwtMzgsNTgwLC05Niw1OTgsLTk2IEMsNjA5LC05Niw2MjAsLTkwLDYyNiwtODAgTCw2NzUsOSBDLDg4NiwzODYsMTA5NSw3NjUsMTMwNiwxMTQyIEMsMTMwNywxMTQ0LDEzMDcsMTE0OSwxMzA3LDExNTEgTSwxMzQ0LDcwNCBDLDEzNDQsNzMyLDEzNDEsNzYwLDEzMzYsNzg4IEwsMTA1NiwyODYgQywxMjI5LDM1MiwxMzQ0LDUxOCwxMzQ0LDcwNCBNLDE3OTIsNTc2IEMsMTc5Miw2MDIsMTc4NSw2MjMsMTc3Miw2NDUgQywxNjk0LDc3NCwxNTY5LDg5OSwxNDQ1LDk4MiBMLDEzODIsODcwIEMsMTQ5NSw3OTIsMTU5MCw2OTEsMTY2NCw1NzYgQywxNTA4LDMzNCwxMjYxLDE1Nyw5NzAsMTMyIEwsODk2LDAgQywxMTk3LDAsMTQ2NywxMzcsMTY2MywzNjIgQywxNzAyLDQwNywxNzQxLDQ1NiwxNzcyLDUwNyBDLDE3ODUsNTI5LDE3OTIsNTUwLDE3OTIsNTc2IFpcIlxuXHRcdH0sXG5cdFx0XCJmb2xkZXJfb3BlblwiOiB7XG5cdFx0XHRcImFkdmFuY2VXaWR0aFwiOiAxOTIwLFxuXHRcdFx0XCJjb21tYW5kc1wiOiBcIk0sMTg3OSw1ODQgQywxODc5LDYyOSwxODI4LDY0MCwxNzkyLDY0MCBMLDcwNCw2NDAgQyw2MTYsNjQwLDQ5OCw1ODYsNDQwLDUxOCBMLDEwNCwxMjIgQyw4OCwxMDQsNzMsODAsNzMsNTYgQyw3MywxMSwxMjQsMCwxNjAsMCBMLDEyNDgsMCBDLDEzMzYsMCwxNDU0LDU0LDE1MTIsMTIyIEwsMTg0OCw1MTggQywxODY0LDUzNiwxODc5LDU2MCwxODc5LDU4NCBNLDE1MzYsOTI4IEMsMTUzNiwxMDUxLDE0MzUsMTE1MiwxMzEyLDExNTIgTCw3NjgsMTE1MiBMLDc2OCwxMTg0IEMsNzY4LDEzMDcsNjY3LDE0MDgsNTQ0LDE0MDggTCwyMjQsMTQwOCBDLDEwMSwxNDA4LDAsMTMwNywwLDExODQgTCwwLDIyNCBDLDAsMjE2LDEsMjA3LDEsMTk5IEwsNiwyMDUgTCwzNDMsNjAxIEMsNDI0LDY5Nyw1NzksNzY4LDcwNCw3NjggTCwxNTM2LDc2OCBaXCJcblx0XHR9LFxuXHRcdFwic2lnbmluXCI6IHtcblx0XHRcdFwiYWR2YW5jZVdpZHRoXCI6IDE1MzYsXG5cdFx0XHRcImNvbW1hbmRzXCI6IFwiTSwxMTg0LDY0MCBDLDExODQsNjU3LDExNzcsNjczLDExNjUsNjg1IEwsNjIxLDEyMjkgQyw2MDksMTI0MSw1OTMsMTI0OCw1NzYsMTI0OCBDLDU0MSwxMjQ4LDUxMiwxMjE5LDUxMiwxMTg0IEwsNTEyLDg5NiBMLDY0LDg5NiBDLDI5LDg5NiwwLDg2NywwLDgzMiBMLDAsNDQ4IEMsMCw0MTMsMjksMzg0LDY0LDM4NCBMLDUxMiwzODQgTCw1MTIsOTYgQyw1MTIsNjEsNTQxLDMyLDU3NiwzMiBDLDU5MywzMiw2MDksMzksNjIxLDUxIEwsMTE2NSw1OTUgQywxMTc3LDYwNywxMTg0LDYyMywxMTg0LDY0MCBNLDE1MzYsOTkyIEMsMTUzNiwxMTUxLDE0MDcsMTI4MCwxMjQ4LDEyODAgTCw5MjgsMTI4MCBDLDg4MywxMjgwLDg5NiwxMjEyLDg5NiwxMTg0IEMsODk2LDExNDcsOTM1LDExNTIsOTYwLDExNTIgTCwxMjQ4LDExNTIgQywxMzM2LDExNTIsMTQwOCwxMDgwLDE0MDgsOTkyIEwsMTQwOCwyODggQywxNDA4LDIwMCwxMzM2LDEyOCwxMjQ4LDEyOCBMLDkyOCwxMjggQyw4ODMsMTI4LDg5Niw2MCw4OTYsMzIgQyw4OTYsMTUsOTExLDAsOTI4LDAgTCwxMjQ4LDAgQywxNDA3LDAsMTUzNiwxMjksMTUzNiwyODggWlwiXG5cdFx0fSxcblx0XHRcInVwbG9hZF9hbHRcIjoge1xuXHRcdFx0XCJhZHZhbmNlV2lkdGhcIjogMTY2NCxcblx0XHRcdFwiY29tbWFuZHNcIjogXCJNLDEyODAsNjQgQywxMjgwLDI5LDEyNTEsMCwxMjE2LDAgQywxMTgxLDAsMTE1MiwyOSwxMTUyLDY0IEMsMTE1Miw5OSwxMTgxLDEyOCwxMjE2LDEyOCBDLDEyNTEsMTI4LDEyODAsOTksMTI4MCw2NCBNLDE1MzYsNjQgQywxNTM2LDI5LDE1MDcsMCwxNDcyLDAgQywxNDM3LDAsMTQwOCwyOSwxNDA4LDY0IEMsMTQwOCw5OSwxNDM3LDEyOCwxNDcyLDEyOCBDLDE1MDcsMTI4LDE1MzYsOTksMTUzNiw2NCBNLDE2NjQsMjg4IEMsMTY2NCwzNDEsMTYyMSwzODQsMTU2OCwzODQgTCwxMTQxLDM4NCBDLDExMTQsMzEwLDEwNDMsMjU2LDk2MCwyNTYgTCw3MDQsMjU2IEMsNjIxLDI1Niw1NTAsMzEwLDUyMywzODQgTCw5NiwzODQgQyw0MywzODQsMCwzNDEsMCwyODggTCwwLC0zMiBDLDAsLTg1LDQzLC0xMjgsOTYsLTEyOCBMLDE1NjgsLTEyOCBDLDE2MjEsLTEyOCwxNjY0LC04NSwxNjY0LC0zMiBNLDEzMzksOTM2IEMsMTM0OSw5NTksMTM0NCw5ODcsMTMyNSwxMDA1IEwsODc3LDE0NTMgQyw4NjUsMTQ2Niw4NDgsMTQ3Miw4MzIsMTQ3MiBDLDgxNiwxNDcyLDc5OSwxNDY2LDc4NywxNDUzIEwsMzM5LDEwMDUgQywzMjAsOTg3LDMxNSw5NTksMzI1LDkzNiBDLDMzNSw5MTIsMzU4LDg5NiwzODQsODk2IEwsNjQwLDg5NiBMLDY0MCw0NDggQyw2NDAsNDEzLDY2OSwzODQsNzA0LDM4NCBMLDk2MCwzODQgQyw5OTUsMzg0LDEwMjQsNDEzLDEwMjQsNDQ4IEwsMTAyNCw4OTYgTCwxMjgwLDg5NiBDLDEzMDYsODk2LDEzMjksOTEyLDEzMzksOTM2IFpcIlxuXHRcdH0sXG5cdFx0XCJzYXZlXCI6IHtcblx0XHRcdFwiYWR2YW5jZVdpZHRoXCI6IDE1MzYsXG5cdFx0XHRcImNvbW1hbmRzXCI6IFwiTSwzODQsMCBMLDM4NCwzODQgTCwxMTUyLDM4NCBMLDExNTIsMCBNLDEyODAsMCBMLDEyODAsNDE2IEMsMTI4MCw0NjksMTIzNyw1MTIsMTE4NCw1MTIgTCwzNTIsNTEyIEMsMjk5LDUxMiwyNTYsNDY5LDI1Niw0MTYgTCwyNTYsMCBMLDEyOCwwIEwsMTI4LDEyODAgTCwyNTYsMTI4MCBMLDI1Niw4NjQgQywyNTYsODExLDI5OSw3NjgsMzUyLDc2OCBMLDkyOCw3NjggQyw5ODEsNzY4LDEwMjQsODExLDEwMjQsODY0IEwsMTAyNCwxMjgwIEMsMTA0NCwxMjgwLDEwODMsMTI2NCwxMDk3LDEyNTAgTCwxMzc4LDk2OSBDLDEzOTEsOTU2LDE0MDgsOTE1LDE0MDgsODk2IEwsMTQwOCwwIE0sODk2LDkyOCBDLDg5Niw5MTEsODgxLDg5Niw4NjQsODk2IEwsNjcyLDg5NiBDLDY1NSw4OTYsNjQwLDkxMSw2NDAsOTI4IEwsNjQwLDEyNDggQyw2NDAsMTI2NSw2NTUsMTI4MCw2NzIsMTI4MCBMLDg2NCwxMjgwIEMsODgxLDEyODAsODk2LDEyNjUsODk2LDEyNDggTCw4OTYsOTI4IE0sMTUzNiw4OTYgQywxNTM2LDk0OSwxNTA2LDEwMjIsMTQ2OCwxMDYwIEwsMTE4OCwxMzQwIEMsMTE1MCwxMzc4LDEwNzcsMTQwOCwxMDI0LDE0MDggTCw5NiwxNDA4IEMsNDMsMTQwOCwwLDEzNjUsMCwxMzEyIEwsMCwtMzIgQywwLC04NSw0MywtMTI4LDk2LC0xMjggTCwxNDQwLC0xMjggQywxNDkzLC0xMjgsMTUzNiwtODUsMTUzNiwtMzIgWlwiXG5cdFx0fSxcblx0XHRcInVuZG9cIjoge1xuXHRcdFx0XCJhZHZhbmNlV2lkdGhcIjogMTUzNixcblx0XHRcdFwiY29tbWFuZHNcIjogXCJNLDE1MzYsNjQwIEMsMTUzNiwxMDYzLDExOTEsMTQwOCw3NjgsMTQwOCBDLDU3MSwxNDA4LDM4MCwxMzI5LDIzOSwxMTk2IEwsMTA5LDEzMjUgQyw5MSwxMzQ0LDYzLDEzNDksNDAsMTMzOSBDLDE2LDEzMjksMCwxMzA2LDAsMTI4MCBMLDAsODMyIEMsMCw3OTcsMjksNzY4LDY0LDc2OCBMLDUxMiw3NjggQyw1MzgsNzY4LDU2MSw3ODQsNTcxLDgwOCBDLDU4MSw4MzEsNTc2LDg1OSw1NTcsODc3IEwsNDIwLDEwMTUgQyw1MTMsMTEwMiw2MzcsMTE1Miw3NjgsMTE1MiBDLDEwNTAsMTE1MiwxMjgwLDkyMiwxMjgwLDY0MCBDLDEyODAsMzU4LDEwNTAsMTI4LDc2OCwxMjggQyw2MDksMTI4LDQ2MiwyMDAsMzY0LDMyNyBDLDM1OSwzMzQsMzUwLDMzOCwzNDEsMzM5IEMsMzMyLDMzOSwzMjMsMzM2LDMxNiwzMzAgTCwxNzksMTkyIEMsMTY4LDE4MSwxNjcsMTYyLDE3NywxNDkgQywzMjMsLTI3LDUzOSwtMTI4LDc2OCwtMTI4IEMsMTE5MSwtMTI4LDE1MzYsMjE3LDE1MzYsNjQwIFpcIlxuXHRcdH0sXG5cdFx0XCJwYXN0ZVwiOiB7XG5cdFx0XHRcImFkdmFuY2VXaWR0aFwiOiAxNzkyLFxuXHRcdFx0XCJjb21tYW5kc1wiOiBcIk0sNzY4LC0xMjggTCw3NjgsMTAyNCBMLDExNTIsMTAyNCBMLDExNTIsNjA4IEMsMTE1Miw1NTUsMTE5NSw1MTIsMTI0OCw1MTIgTCwxNjY0LDUxMiBMLDE2NjQsLTEyOCBNLDEwMjQsMTMxMiBDLDEwMjQsMTI5NSwxMDA5LDEyODAsOTkyLDEyODAgTCwyODgsMTI4MCBDLDI3MSwxMjgwLDI1NiwxMjk1LDI1NiwxMzEyIEwsMjU2LDEzNzYgQywyNTYsMTM5MywyNzEsMTQwOCwyODgsMTQwOCBMLDk5MiwxNDA4IEMsMTAwOSwxNDA4LDEwMjQsMTM5MywxMDI0LDEzNzYgTCwxMDI0LDEzMTIgTSwxMjgwLDY0MCBMLDEyODAsOTM5IEwsMTU3OSw2NDAgTSwxNzkyLDUxMiBDLDE3OTIsNTY1LDE3NjIsNjM4LDE3MjQsNjc2IEwsMTMxNiwxMDg0IEMsMTMwNSwxMDk1LDEyOTMsMTEwNCwxMjgwLDExMTIgTCwxMjgwLDE0NDAgQywxMjgwLDE0OTMsMTIzNywxNTM2LDExODQsMTUzNiBMLDk2LDE1MzYgQyw0MywxNTM2LDAsMTQ5MywwLDE0NDAgTCwwLDk2IEMsMCw0Myw0MywwLDk2LDAgTCw2NDAsMCBMLDY0MCwtMTYwIEMsNjQwLC0yMTMsNjgzLC0yNTYsNzM2LC0yNTYgTCwxNjk2LC0yNTYgQywxNzQ5LC0yNTYsMTc5MiwtMjEzLDE3OTIsLTE2MCBaXCJcblx0XHR9LFxuXHRcdFwiZm9sZGVyX29wZW5fYWx0XCI6IHtcblx0XHRcdFwiYWR2YW5jZVdpZHRoXCI6IDE5MjAsXG5cdFx0XHRcImNvbW1hbmRzXCI6IFwiTSwxNzgxLDYwNSBDLDE3ODEsNTkwLDE3NzIsNTc3LDE3NjMsNTY2IEwsMTQ2OSwyMDMgQywxNDM1LDE2MSwxMzY1LDEyOCwxMzEyLDEyOCBMLDIyNCwxMjggQywyMDIsMTI4LDE3MSwxMzUsMTcxLDE2MyBDLDE3MSwxNzgsMTgwLDE5MSwxODksMjAzIEwsNDgzLDU2NiBDLDUxNyw2MDcsNTg3LDY0MCw2NDAsNjQwIEwsMTcyOCw2NDAgQywxNzUwLDY0MCwxNzgxLDYzMywxNzgxLDYwNSBNLDY0MCw3NjggQyw1NDksNzY4LDQ0Miw3MTcsMzg0LDY0NiBMLDEyOCwzMzEgTCwxMjgsMTE4NCBDLDEyOCwxMjM3LDE3MSwxMjgwLDIyNCwxMjgwIEwsNTQ0LDEyODAgQyw1OTcsMTI4MCw2NDAsMTIzNyw2NDAsMTE4NCBMLDY0MCwxMTIwIEMsNjQwLDEwNjcsNjgzLDEwMjQsNzM2LDEwMjQgTCwxMzEyLDEwMjQgQywxMzY1LDEwMjQsMTQwOCw5ODEsMTQwOCw5MjggTCwxNDA4LDc2OCBNLDE5MDksNjA1IEMsMTkwOSw2MjksMTkwNCw2NTIsMTg5NCw2NzMgQywxODY0LDczNywxNzk2LDc2OCwxNzI4LDc2OCBMLDE1MzYsNzY4IEwsMTUzNiw5MjggQywxNTM2LDEwNTEsMTQzNSwxMTUyLDEzMTIsMTE1MiBMLDc2OCwxMTUyIEwsNzY4LDExODQgQyw3NjgsMTMwNyw2NjcsMTQwOCw1NDQsMTQwOCBMLDIyNCwxNDA4IEMsMTAxLDE0MDgsMCwxMzA3LDAsMTE4NCBMLDAsMjI0IEMsMCwxMDEsMTAxLDAsMjI0LDAgTCwxMzEyLDAgQywxNDAyLDAsMTUxMSw1MiwxNTY4LDEyMiBMLDE4NjMsNDg1IEMsMTg5MCw1MTksMTkwOSw1NjEsMTkwOSw2MDUgWlwiXG5cdFx0fVxuXHR9XG59IiwiXG52YXIgREVGQVVMVF9USU1FX1NDQUxFID0gNjA7XG5cbi8vIERpbWVuc2lvbnNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRMSU5FX0hFSUdIVDogMjYsXG5cdERJQU1PTkRfU0laRTogMTAsXG5cdE1BUktFUl9UUkFDS19IRUlHSFQ6IDYwLFxuXHR3aWR0aDogNjAwLFxuXHRoZWlnaHQ6IDIwMCxcblx0VElNRUxJTkVfU0NST0xMX0hFSUdIVDogMCxcblx0TEVGVF9QQU5FX1dJRFRIOiAyNTAsXG5cdHRpbWVfc2NhbGU6IERFRkFVTFRfVElNRV9TQ0FMRSwgLy8gbnVtYmVyIG9mIHBpeGVscyB0byAxIHNlY29uZFxuICAgIGRlZmF1bHRfbGVuZ3RoOiAyMCwgLy8gc2Vjb25kc1xufTtcbiIsIi8vZGVmYXVsdFxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdC8vIHBob3Rvc2hvcCBjb2xvcnNcblx0YTogJyMzNDM0MzQnLFxuXHRiOiAnIzUzNTM1MycsXG5cdGM6ICcjYjhiOGI4Jyxcblx0ZDogJyNkNmQ2ZDYnLFxufTtcblxuLy9rZWVwY3ViZSIsIi8qXG4gKiBAYXV0aG9yIEpvc2h1YSBLb28gaHR0cDovL2pvc2h1YWtvby5jb21cbiAqL1xuXG52YXIgdW5kbyA9IHJlcXVpcmUoJy4vdXRpbF91bmRvJyksXG5cdERpc3BhdGNoZXIgPSByZXF1aXJlKCcuL3V0aWxfZGlzcGF0Y2hlcicpLFxuXHRUaGVtZSA9IHJlcXVpcmUoJy4vdGhlbWUnKSxcblx0VW5kb01hbmFnZXIgPSB1bmRvLlVuZG9NYW5hZ2VyLFxuXHRVbmRvU3RhdGUgPSB1bmRvLlVuZG9TdGF0ZSxcblx0U2V0dGluZ3MgPSByZXF1aXJlKCcuL3NldHRpbmdzJyksXG5cdHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpLFxuXHRMYXllckNhYmluZXQgPSByZXF1aXJlKCcuL3ZpZXdfbGF5ZXJfY2FiaW5ldCcpLFxuXHRUaW1lbGluZVBhbmVsID0gcmVxdWlyZSgnLi92aWV3X3BhbmVsJyksXG5cdHBhY2thZ2VfanNvbiA9IHJlcXVpcmUoJy4uL3BhY2thZ2UuanNvbicpLFxuXHRJY29uQnV0dG9uID0gcmVxdWlyZSgnLi91aV9pY29uX2J1dHRvbicpLFxuXHRzdHlsZSA9IHV0aWxzLnN0eWxlLFxuXHRzYXZlVG9GaWxlID0gdXRpbHMuc2F2ZVRvRmlsZSxcblx0b3BlbkFzID0gdXRpbHMub3BlbkFzLFxuXHRTVE9SQUdFX1BSRUZJWCA9IHV0aWxzLlNUT1JBR0VfUFJFRklYLFxuXHRTY3JvbGxCYXIgPSByZXF1aXJlKCcuL3VpX3Njcm9sbGJhcicpLFxuXHREYXRhU3RvcmUgPSByZXF1aXJlKCcuL3V0aWxfZGF0YXN0b3JlJylcblx0O1xuXG52YXIgWl9JTkRFWCA9IDk5OTtcblxuZnVuY3Rpb24gTGF5ZXJQcm9wKG5hbWUpIHtcblx0dGhpcy5uYW1lID0gbmFtZTtcblx0dGhpcy52YWx1ZXMgPSBbXTtcblxuXHR0aGlzLl92YWx1ZSA9IDA7XG5cblx0dGhpcy5fY29sb3IgPSAnIycgKyAoTWF0aC5yYW5kb20oKSAqIDB4ZmZmZmZmIHwgMCkudG9TdHJpbmcoMTYpO1xuXHQvKlxuXHR0aGlzLm1heFxuXHR0aGlzLm1pblxuXHR0aGlzLnN0ZXBcblx0Ki9cbn1cblxuZnVuY3Rpb24gVGltZWxpbmVyKHRhcmdldCkge1xuXHQvLyBEaXNwYXRjaGVyIGZvciBjb29yZGluYXRpb25cblx0dmFyIGRpc3BhdGNoZXIgPSBuZXcgRGlzcGF0Y2hlcigpO1xuXG5cdC8vIERhdGFcblx0dmFyIGRhdGEgPSBuZXcgRGF0YVN0b3JlKCk7XG5cdHZhciBsYXllcl9zdG9yZSA9IGRhdGEuZ2V0KCdsYXllcnMnKTtcblx0dmFyIGxheWVycyA9IGxheWVyX3N0b3JlLnZhbHVlO1xuXG5cdHdpbmRvdy5fZGF0YSA9IGRhdGE7IC8vIGV4cG9zZSBpdCBmb3IgZGVidWdnaW5nXG5cblx0Ly8gVW5kbyBtYW5hZ2VyXG5cdHZhciB1bmRvX21hbmFnZXIgPSBuZXcgVW5kb01hbmFnZXIoZGlzcGF0Y2hlcik7XG5cblx0Ly8gVmlld3Ncblx0dmFyIHRpbWVsaW5lID0gbmV3IFRpbWVsaW5lUGFuZWwoZGF0YSwgZGlzcGF0Y2hlcik7XG5cdHZhciBsYXllcl9wYW5lbCA9IG5ldyBMYXllckNhYmluZXQoZGF0YSwgZGlzcGF0Y2hlcik7XG5cblx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHQvLyBoYWNrIVxuXHRcdHVuZG9fbWFuYWdlci5zYXZlKG5ldyBVbmRvU3RhdGUoZGF0YSwgJ0xvYWRlZCcpLCB0cnVlKTtcblx0fSk7XG5cblx0ZGlzcGF0Y2hlci5vbigna2V5ZnJhbWUnLCBmdW5jdGlvbihsYXllciwgdmFsdWUpIHtcblx0XHR2YXIgaW5kZXggPSBsYXllcnMuaW5kZXhPZihsYXllcik7XG5cblx0XHR2YXIgdCA9IGRhdGEuZ2V0KCd1aTpjdXJyZW50VGltZScpLnZhbHVlO1xuXHRcdHZhciB2ID0gdXRpbHMuZmluZFRpbWVpbkxheWVyKGxheWVyLCB0KTtcblxuXHRcdC8vIGNvbnNvbGUubG9nKHYsICcuLi5rZXlmcmFtZSBpbmRleCcsIGluZGV4LCB1dGlscy5mb3JtYXRfZnJpZW5kbHlfc2Vjb25kcyh0KSwgdHlwZW9mKHYpKTtcblx0XHQvLyBjb25zb2xlLmxvZygnbGF5ZXInLCBsYXllciwgdmFsdWUpO1xuXG5cdFx0aWYgKHR5cGVvZih2KSA9PT0gJ251bWJlcicpIHtcblx0XHRcdGxheWVyLnZhbHVlcy5zcGxpY2UodiwgMCwge1xuXHRcdFx0XHR0aW1lOiB0LFxuXHRcdFx0XHR2YWx1ZTogdmFsdWUsXG5cdFx0XHRcdF9jb2xvcjogJyMnICsgKE1hdGgucmFuZG9tKCkgKiAweGZmZmZmZiB8IDApLnRvU3RyaW5nKDE2KVxuXHRcdFx0fSk7XG5cblx0XHRcdHVuZG9fbWFuYWdlci5zYXZlKG5ldyBVbmRvU3RhdGUoZGF0YSwgJ0FkZCBLZXlmcmFtZScpKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc29sZS5sb2coJ3JlbW92ZSBmcm9tIGluZGV4Jywgdik7XG5cdFx0XHRsYXllci52YWx1ZXMuc3BsaWNlKHYuaW5kZXgsIDEpO1xuXG5cdFx0XHR1bmRvX21hbmFnZXIuc2F2ZShuZXcgVW5kb1N0YXRlKGRhdGEsICdSZW1vdmUgS2V5ZnJhbWUnKSk7XG5cdFx0fVxuXG5cdFx0cmVwYWludEFsbCgpO1xuXG5cdH0pO1xuXG5cdGRpc3BhdGNoZXIub24oJ2tleWZyYW1lLm1vdmUnLCBmdW5jdGlvbihsYXllciwgdmFsdWUpIHtcblx0XHR1bmRvX21hbmFnZXIuc2F2ZShuZXcgVW5kb1N0YXRlKGRhdGEsICdNb3ZlIEtleWZyYW1lJykpO1xuXHR9KTtcblxuXHQvLyBkaXNwYXRjaGVyLmZpcmUoJ3ZhbHVlLmNoYW5nZScsIGxheWVyLCBtZS52YWx1ZSk7XG5cdGRpc3BhdGNoZXIub24oJ3ZhbHVlLmNoYW5nZScsIGZ1bmN0aW9uKGxheWVyLCB2YWx1ZSwgZG9udF9zYXZlKSB7XG5cdFx0aWYgKGxheWVyLl9tdXRlKSByZXR1cm47XG5cblx0XHR2YXIgdCA9IGRhdGEuZ2V0KCd1aTpjdXJyZW50VGltZScpLnZhbHVlO1xuXHRcdHZhciB2ID0gdXRpbHMuZmluZFRpbWVpbkxheWVyKGxheWVyLCB0KTtcblxuXHRcdC8vIGNvbnNvbGUubG9nKHYsICd2YWx1ZS5jaGFuZ2UnLCBsYXllciwgdmFsdWUsIHV0aWxzLmZvcm1hdF9mcmllbmRseV9zZWNvbmRzKHQpLCB0eXBlb2YodikpO1xuXHRcdGlmICh0eXBlb2YodikgPT09ICdudW1iZXInKSB7XG5cdFx0XHRsYXllci52YWx1ZXMuc3BsaWNlKHYsIDAsIHtcblx0XHRcdFx0dGltZTogdCxcblx0XHRcdFx0dmFsdWU6IHZhbHVlLFxuXHRcdFx0XHRfY29sb3I6ICcjJyArIChNYXRoLnJhbmRvbSgpICogMHhmZmZmZmYgfCAwKS50b1N0cmluZygxNilcblx0XHRcdH0pO1xuXHRcdFx0aWYgKCFkb250X3NhdmUpIHVuZG9fbWFuYWdlci5zYXZlKG5ldyBVbmRvU3RhdGUoZGF0YSwgJ0FkZCB2YWx1ZScpKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0di5vYmplY3QudmFsdWUgPSB2YWx1ZTtcblx0XHRcdGlmICghZG9udF9zYXZlKSB1bmRvX21hbmFnZXIuc2F2ZShuZXcgVW5kb1N0YXRlKGRhdGEsICdVcGRhdGUgdmFsdWUnKSk7XG5cdFx0fVxuXG5cdFx0cmVwYWludEFsbCgpO1xuXHR9KTtcblxuXHRkaXNwYXRjaGVyLm9uKCdhY3Rpb246c29sbycsIGZ1bmN0aW9uKGxheWVyLCBzb2xvKSB7XG5cdFx0bGF5ZXIuX3NvbG8gPSBzb2xvO1xuXG5cdFx0Y29uc29sZS5sb2cobGF5ZXIsIHNvbG8pO1xuXG5cdFx0Ly8gV2hlbiBhIHRyYWNrIGlzIHNvbG8tZWQsIHBsYXliYWNrIG9ubHkgY2hhbmdlcyB2YWx1ZXNcblx0XHQvLyBvZiB0aGF0IGxheWVyLlxuXHR9KTtcblxuXHRkaXNwYXRjaGVyLm9uKCdhY3Rpb246bXV0ZScsIGZ1bmN0aW9uKGxheWVyLCBtdXRlKSB7XG5cdFx0bGF5ZXIuX211dGUgPSBtdXRlO1xuXG5cdFx0Ly8gV2hlbiBhIHRyYWNrIGlzIG11dGUsIHBsYXliYWNrIGRvZXMgbm90IHBsYXlcblx0XHQvLyBmcmFtZXMgb2YgdGhvc2UgbXV0ZWQgbGF5ZXJzLlxuXG5cdFx0Ly8gYWxzbyBmZWVscyBsaWtlIGhpZGRlbiBmZWF0dXJlIGluIHBob3Rvc2hvcFxuXG5cdFx0Ly8gd2hlbiB2YWx1ZXMgYXJlIHVwZGF0ZWQsIGVnLiBmcm9tIHNsaWRlcixcblx0XHQvLyBubyB0d2VlbnMgd2lsbCBiZSBjcmVhdGVkLlxuXHRcdC8vIHdlIGNhbiBkZWNpZGUgYWxzbyB0byBcImxvY2sgaW5cIiBsYXllcnNcblx0XHQvLyBubyBjaGFuZ2VzIHRvIHR3ZWVuIHdpbGwgYmUgbWFkZSBldGMuXG5cdH0pO1xuXG5cdGRpc3BhdGNoZXIub24oJ2Vhc2UnLCBmdW5jdGlvbihsYXllciwgZWFzZV90eXBlKSB7XG5cdFx0dmFyIHQgPSBkYXRhLmdldCgndWk6Y3VycmVudFRpbWUnKS52YWx1ZTtcblx0XHR2YXIgdiA9IHV0aWxzLnRpbWVBdExheWVyKGxheWVyLCB0KTtcblx0XHQvLyBjb25zb2xlLmxvZygnRWFzZSBDaGFuZ2UgPiAnLCBsYXllciwgdmFsdWUsIHYpO1xuXHRcdGlmICh2ICYmIHYuZW50cnkpIHtcblx0XHRcdHYuZW50cnkudHdlZW4gID0gZWFzZV90eXBlO1xuXHRcdH1cblxuXHRcdHVuZG9fbWFuYWdlci5zYXZlKG5ldyBVbmRvU3RhdGUoZGF0YSwgJ0FkZCBFYXNlJykpO1xuXG5cdFx0cmVwYWludEFsbCgpO1xuXHR9KTtcblxuXHR2YXIgc3RhcnRfcGxheSA9IG51bGwsXG5cdFx0cGxheWVkX2Zyb20gPSAwOyAvLyByZXF1aXJlcyBzb21lIG1vcmUgdHdlYWtpbmdcblxuXHRkaXNwYXRjaGVyLm9uKCdjb250cm9scy50b2dnbGVfcGxheScsIGZ1bmN0aW9uKCkge1xuXHRcdGlmIChzdGFydF9wbGF5KSB7XG5cdFx0XHRwYXVzZVBsYXlpbmcoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3RhcnRQbGF5aW5nKCk7XG5cdFx0fVxuXHR9KTtcblxuXHRkaXNwYXRjaGVyLm9uKCdjb250cm9scy5yZXN0YXJ0X3BsYXknLCBmdW5jdGlvbigpIHtcblx0XHRpZiAoIXN0YXJ0X3BsYXkpIHtcblx0XHRcdHN0YXJ0UGxheWluZygpO1xuXHRcdH1cblxuXHRcdHNldEN1cnJlbnRUaW1lKHBsYXllZF9mcm9tKTtcblx0fSk7XG5cblx0ZGlzcGF0Y2hlci5vbignY29udHJvbHMucGxheScsIHN0YXJ0UGxheWluZyk7XG5cdGRpc3BhdGNoZXIub24oJ2NvbnRyb2xzLnBhdXNlJywgcGF1c2VQbGF5aW5nKTtcblxuXHRmdW5jdGlvbiBzdGFydFBsYXlpbmcoKSB7XG5cdFx0Ly8gcGxheWVkX2Zyb20gPSB0aW1lbGluZS5jdXJyZW50X2ZyYW1lO1xuXHRcdHN0YXJ0X3BsYXkgPSBwZXJmb3JtYW5jZS5ub3coKSAtIGRhdGEuZ2V0KCd1aTpjdXJyZW50VGltZScpLnZhbHVlICogMTAwMDtcblx0XHRsYXllcl9wYW5lbC5zZXRDb250cm9sU3RhdHVzKHRydWUpO1xuXHRcdC8vIGRpc3BhdGNoZXIuZmlyZSgnY29udHJvbHMuc3RhdHVzJywgdHJ1ZSk7XG5cdH1cblxuXHRmdW5jdGlvbiBwYXVzZVBsYXlpbmcoKSB7XG5cdFx0c3RhcnRfcGxheSA9IG51bGw7XG5cdFx0bGF5ZXJfcGFuZWwuc2V0Q29udHJvbFN0YXR1cyhmYWxzZSk7XG5cdFx0Ly8gZGlzcGF0Y2hlci5maXJlKCdjb250cm9scy5zdGF0dXMnLCBmYWxzZSk7XG5cdH1cblxuXHRkaXNwYXRjaGVyLm9uKCdjb250cm9scy5zdG9wJywgZnVuY3Rpb24oKSB7XG5cdFx0aWYgKHN0YXJ0X3BsYXkgIT09IG51bGwpIHBhdXNlUGxheWluZygpO1xuXHRcdHNldEN1cnJlbnRUaW1lKDApO1xuXHR9KTtcblxuXHR2YXIgY3VycmVudFRpbWVTdG9yZSA9IGRhdGEuZ2V0KCd1aTpjdXJyZW50VGltZScpO1xuXHRkaXNwYXRjaGVyLm9uKCd0aW1lLnVwZGF0ZScsIHNldEN1cnJlbnRUaW1lKTtcblxuXHRkaXNwYXRjaGVyLm9uKCd1cGRhdGUuc2Nyb2xsVGltZScsIGZ1bmN0aW9uKHYpIHtcblx0XHR2ID0gTWF0aC5tYXgoMCwgdik7XG5cdFx0ZGF0YS5nZXQoJ3VpOnNjcm9sbFRpbWUnKS52YWx1ZSA9IHY7XG5cdFx0cmVwYWludEFsbCgpO1xuXHR9KTtcblxuXG5cdGZ1bmN0aW9uIHNldEN1cnJlbnRUaW1lKHZhbHVlKSB7XG5cdFx0dmFsdWUgPSBNYXRoLm1heCgwLCB2YWx1ZSk7XG5cdFx0Y3VycmVudFRpbWVTdG9yZS52YWx1ZSA9IHZhbHVlO1xuXG5cdFx0aWYgKHN0YXJ0X3BsYXkpIHN0YXJ0X3BsYXkgPSBwZXJmb3JtYW5jZS5ub3coKSAtIHZhbHVlICogMTAwMDtcblx0XHRyZXBhaW50QWxsKCk7XG5cdFx0Ly8gbGF5ZXJfcGFuZWwucmVwYWludChzKTtcblx0fVxuXG5cdGRpc3BhdGNoZXIub24oJ3RhcmdldC5ub3RpZnknLCBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuXHRcdGlmICh0YXJnZXQpIHRhcmdldFtuYW1lXSA9IHZhbHVlO1xuXHR9KTtcblxuXHRkaXNwYXRjaGVyLm9uKCd1cGRhdGUuc2NhbGUnLCBmdW5jdGlvbih2KSB7XG5cdFx0Y29uc29sZS5sb2coJ3JhbmdlJywgdik7XG5cdFx0ZGF0YS5nZXQoJ3VpOnRpbWVTY2FsZScpLnZhbHVlID0gdjtcblxuXHRcdHRpbWVsaW5lLnJlcGFpbnQoKTtcblx0fSk7XG5cblx0Ly8gaGFuZGxlIHVuZG8gLyByZWRvXG5cdGRpc3BhdGNoZXIub24oJ2NvbnRyb2xzLnVuZG8nLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgaGlzdG9yeSA9IHVuZG9fbWFuYWdlci51bmRvKCk7XG5cdFx0ZGF0YS5zZXRKU09OU3RyaW5nKGhpc3Rvcnkuc3RhdGUpO1xuXG5cdFx0dXBkYXRlU3RhdGUoKTtcblx0fSk7XG5cblx0ZGlzcGF0Y2hlci5vbignY29udHJvbHMucmVkbycsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBoaXN0b3J5ID0gdW5kb19tYW5hZ2VyLnJlZG8oKTtcblx0XHRkYXRhLnNldEpTT05TdHJpbmcoaGlzdG9yeS5zdGF0ZSk7XG5cblx0XHR1cGRhdGVTdGF0ZSgpO1xuXHR9KTtcblxuXHQvKlxuXHRcdFBhaW50IFJvdXRpbmVzXG5cdCovXG5cblx0ZnVuY3Rpb24gcGFpbnQoKSB7XG5cdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKHBhaW50KTtcblxuXHRcdGlmIChzdGFydF9wbGF5KSB7XG5cdFx0XHR2YXIgdCA9IChwZXJmb3JtYW5jZS5ub3coKSAtIHN0YXJ0X3BsYXkpIC8gMTAwMDtcblx0XHRcdHNldEN1cnJlbnRUaW1lKHQpO1xuXG5cblx0XHRcdGlmICh0ID4gZGF0YS5nZXQoJ3VpOnRvdGFsVGltZScpLnZhbHVlKSB7XG5cdFx0XHRcdC8vIHNpbXBsZSBsb29wXG5cdFx0XHRcdHN0YXJ0X3BsYXkgPSBwZXJmb3JtYW5jZS5ub3coKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAobmVlZHNSZXNpemUpIHtcblx0XHRcdGRpdi5zdHlsZS53aWR0aCA9IHdpZHRoICsgJ3B4Jztcblx0XHRcdGRpdi5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyAncHgnO1xuXG5cdFx0XHRyZXN0eWxlKGxheWVyX3BhbmVsLmRvbSwgdGltZWxpbmUuZG9tKTtcblxuXHRcdFx0dGltZWxpbmUucmVzaXplKCk7XG5cdFx0XHRyZXBhaW50QWxsKCk7XG5cdFx0XHRuZWVkc1Jlc2l6ZSA9IGZhbHNlO1xuXG5cdFx0XHRkaXNwYXRjaGVyLmZpcmUoJ3Jlc2l6ZScpO1xuXHRcdH1cblxuXHRcdHRpbWVsaW5lLl9wYWludCgpO1xuXHR9XG5cblx0cGFpbnQoKTtcblxuXHQvKlxuXHRcdEVuZCBQYWludCBSb3V0aW5lc1xuXHQqL1xuXG5cdGZ1bmN0aW9uIHNhdmUobmFtZSkge1xuXHRcdGlmICghbmFtZSkgbmFtZSA9ICdhdXRvc2F2ZSc7XG5cblx0XHR2YXIganNvbiA9IGRhdGEuZ2V0SlNPTlN0cmluZygpO1xuXG5cdFx0dHJ5IHtcblx0XHRcdGxvY2FsU3RvcmFnZVtTVE9SQUdFX1BSRUZJWCArIG5hbWVdID0ganNvbjtcblx0XHRcdGRpc3BhdGNoZXIuZmlyZSgnc2F2ZTpkb25lJyk7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0Y29uc29sZS5sb2coJ0Nhbm5vdCBzYXZlJywgbmFtZSwganNvbik7XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gc2F2ZUFzKG5hbWUpIHtcblx0XHRpZiAoIW5hbWUpIG5hbWUgPSBkYXRhLmdldCgnbmFtZScpLnZhbHVlO1xuXHRcdG5hbWUgPSBwcm9tcHQoJ1BpY2sgYSBuYW1lIHRvIHNhdmUgdG8gKGxvY2FsU3RvcmFnZSknLCBuYW1lKTtcblx0XHRpZiAobmFtZSkge1xuXHRcdFx0ZGF0YS5kYXRhLm5hbWUgPSBuYW1lO1xuXHRcdFx0c2F2ZShuYW1lKTtcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBzYXZlU2ltcGx5KCkge1xuXHRcdHZhciBuYW1lID0gZGF0YS5nZXQoJ25hbWUnKS52YWx1ZTtcblx0XHRpZiAobmFtZSkge1xuXHRcdFx0c2F2ZShuYW1lKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c2F2ZUFzKG5hbWUpO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIGV4cG9ydEpTT04oKSB7XG5cdFx0dmFyIGpzb24gPSBkYXRhLmdldEpTT05TdHJpbmcoKTtcblx0XHR2YXIgcmV0ID0gcHJvbXB0KCdIaXQgT0sgdG8gZG93bmxvYWQgb3RoZXJ3aXNlIENvcHkgYW5kIFBhc3RlIEpTT04nLCBqc29uKTtcblxuXHRcdGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGRhdGEuZGF0YSwgbnVsbCwgJ1xcdCcpKTtcblx0XHRpZiAoIXJldCkgcmV0dXJuO1xuXG5cdFx0Ly8gbWFrZSBqc29uIGRvd25sb2FkYWJsZVxuXHRcdGpzb24gPSBkYXRhLmdldEpTT05TdHJpbmcoJ1xcdCcpO1xuXHRcdHZhciBmaWxlTmFtZSA9ICd0aW1lbGluZXItdGVzdCcgKyAnLmpzb24nO1xuXG5cdFx0c2F2ZVRvRmlsZShqc29uLCBmaWxlTmFtZSk7XG5cdH1cblxuXHRmdW5jdGlvbiBsb2FkSlNPTlN0cmluZyhvKSB7XG5cdFx0Ly8gc2hvdWxkIGNhdGNoIGFuZCBjaGVjayBlcnJvcnMgaGVyZVxuXHRcdHZhciBqc29uID0gSlNPTi5wYXJzZShvKTtcblx0XHRsb2FkKGpzb24pO1xuXHR9XG5cblx0ZnVuY3Rpb24gbG9hZChvKSB7XG5cdFx0ZGF0YS5zZXRKU09OKG8pO1xuXHRcdC8vXG5cdFx0aWYgKGRhdGEuZ2V0VmFsdWUoJ3VpJykgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0ZGF0YS5zZXRWYWx1ZSgndWknLCB7XG5cdFx0XHRcdGN1cnJlbnRUaW1lOiAwLFxuXHRcdFx0XHR0b3RhbFRpbWU6IFNldHRpbmdzLmRlZmF1bHRfbGVuZ3RoLFxuXHRcdFx0XHRzY3JvbGxUaW1lOiAwLFxuXHRcdFx0XHR0aW1lU2NhbGU6IFNldHRpbmdzLnRpbWVfc2NhbGVcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdHVuZG9fbWFuYWdlci5jbGVhcigpO1xuXHRcdHVuZG9fbWFuYWdlci5zYXZlKG5ldyBVbmRvU3RhdGUoZGF0YSwgJ0xvYWRlZCcpLCB0cnVlKTtcblxuXHRcdHVwZGF0ZVN0YXRlKCk7XG5cdH1cblxuXHRmdW5jdGlvbiB1cGRhdGVTdGF0ZSgpIHtcblx0XHRsYXllcnMgPSBsYXllcl9zdG9yZS52YWx1ZTsgLy8gRklYTUU6IHN1cHBvcnQgQXJyYXlzXG5cdFx0bGF5ZXJfcGFuZWwuc2V0U3RhdGUobGF5ZXJfc3RvcmUpO1xuXHRcdHRpbWVsaW5lLnNldFN0YXRlKGxheWVyX3N0b3JlKTtcblxuXHRcdHJlcGFpbnRBbGwoKTtcblx0fVxuXG5cdGZ1bmN0aW9uIHJlcGFpbnRBbGwoKSB7XG5cdFx0dmFyIGNvbnRlbnRfaGVpZ2h0ID0gbGF5ZXJzLmxlbmd0aCAqIFNldHRpbmdzLkxJTkVfSEVJR0hUO1xuXHRcdHNjcm9sbGJhci5zZXRMZW5ndGgoU2V0dGluZ3MuVElNRUxJTkVfU0NST0xMX0hFSUdIVCAvIGNvbnRlbnRfaGVpZ2h0KTtcblxuXHRcdGxheWVyX3BhbmVsLnJlcGFpbnQoKTtcblx0XHR0aW1lbGluZS5yZXBhaW50KCk7XG5cdH1cblxuXHRmdW5jdGlvbiBwcm9tcHRJbXBvcnQoKSB7XG5cdFx0dmFyIGpzb24gPSBwcm9tcHQoJ1Bhc3RlIEpTT04gaW4gaGVyZSB0byBMb2FkJyk7XG5cdFx0aWYgKCFqc29uKSByZXR1cm47XG5cdFx0Y29uc29sZS5sb2coJ0xvYWRpbmcuLiAnLCBqc29uKTtcblx0XHRsb2FkSlNPTlN0cmluZyhqc29uKTtcblx0fVxuXG5cdGZ1bmN0aW9uIG9wZW4odGl0bGUpIHtcblx0XHRpZiAodGl0bGUpIHtcblx0XHRcdGxvYWRKU09OU3RyaW5nKGxvY2FsU3RvcmFnZVtTVE9SQUdFX1BSRUZJWCArIHRpdGxlXSk7XG5cdFx0fVxuXHR9XG5cblx0dGhpcy5vcGVuTG9jYWxTYXZlID0gb3BlbjtcblxuXHRkaXNwYXRjaGVyLm9uKCdpbXBvcnQnLCBmdW5jdGlvbigpIHtcblx0XHRwcm9tcHRJbXBvcnQoKTtcblx0fS5iaW5kKHRoaXMpKTtcblxuXHRkaXNwYXRjaGVyLm9uKCduZXcnLCBmdW5jdGlvbigpIHtcblx0XHRkYXRhLmJsYW5rKCk7XG5cdFx0dXBkYXRlU3RhdGUoKTtcblx0fSk7XG5cblx0ZGlzcGF0Y2hlci5vbignb3BlbmZpbGUnLCBmdW5jdGlvbigpIHtcblx0XHRvcGVuQXMoZnVuY3Rpb24oZGF0YSkge1xuXHRcdFx0Ly8gY29uc29sZS5sb2coJ2xvYWRlZCAnICsgZGF0YSk7XG5cdFx0XHRsb2FkSlNPTlN0cmluZyhkYXRhKTtcblx0XHR9LCBkaXYpO1xuXHR9KTtcblxuXHRkaXNwYXRjaGVyLm9uKCdvcGVuJywgb3Blbik7XG5cdGRpc3BhdGNoZXIub24oJ2V4cG9ydCcsIGV4cG9ydEpTT04pO1xuXG5cdGRpc3BhdGNoZXIub24oJ3NhdmUnLCBzYXZlU2ltcGx5KTtcblx0ZGlzcGF0Y2hlci5vbignc2F2ZV9hcycsIHNhdmVBcyk7XG5cblx0Ly8gRXhwb3NlIEFQSVxuXHR0aGlzLnNhdmUgPSBzYXZlO1xuXHR0aGlzLmxvYWQgPSBsb2FkO1xuXG5cdC8qXG5cdFx0U3RhcnQgRE9NIFN0dWZmIChzaG91bGQgc2VwYXJhdGUgZmlsZSlcblx0Ki9cblxuXHR2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGRpdi5zdHlsZS5jc3NUZXh0ID0gJ3Bvc2l0aW9uOiBhYnNvbHV0ZTsnO1xuXHRkaXYuc3R5bGUudG9wID0gJzIycHgnO1xuXG5cdHZhciBwYW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cblx0c3R5bGUocGFuZSwge1xuXHRcdHBvc2l0aW9uOiAnZml4ZWQnLFxuXHRcdHRvcDogJzIwcHgnLFxuXHRcdGxlZnQ6ICcyMHB4Jyxcblx0XHRtYXJnaW46IDAsXG5cdFx0Ym9yZGVyOiAnMXB4IHNvbGlkICcgKyBUaGVtZS5hLFxuXHRcdHBhZGRpbmc6IDAsXG5cdFx0b3ZlcmZsb3c6ICdoaWRkZW4nLFxuXHRcdGJhY2tncm91bmRDb2xvcjogVGhlbWUuYSxcblx0XHRjb2xvcjogVGhlbWUuZCxcblx0XHR6SW5kZXg6IFpfSU5ERVgsXG5cdFx0Zm9udEZhbWlseTogJ21vbm9zcGFjZScsXG5cdFx0Zm9udFNpemU6ICcxMnB4J1xuXHR9KTtcblxuXG5cdHZhciBoZWFkZXJfc3R5bGVzID0ge1xuXHRcdHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuXHRcdHRvcDogJzBweCcsXG5cdFx0d2lkdGg6ICcxMDAlJyxcblx0XHRoZWlnaHQ6ICcyMnB4Jyxcblx0XHRsaW5lSGVpZ2h0OiAnMjJweCcsXG5cdFx0b3ZlcmZsb3c6ICdoaWRkZW4nXG5cdH07XG5cblx0dmFyIGJ1dHRvbl9zdHlsZXMgPSB7XG5cdFx0d2lkdGg6ICcyMHB4Jyxcblx0XHRoZWlnaHQ6ICcyMHB4Jyxcblx0XHRwYWRkaW5nOiAnMnB4Jyxcblx0XHRtYXJnaW5SaWdodDogJzJweCdcblx0fTtcblxuXHR2YXIgcGFuZV90aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRzdHlsZShwYW5lX3RpdGxlLCBoZWFkZXJfc3R5bGVzLCB7XG5cdFx0Ym9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICcgKyBUaGVtZS5iLFxuXHRcdHRleHRBbGlnbjogJ2NlbnRlcidcblx0fSk7XG5cblx0dmFyIHRpdGxlX2JhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0cGFuZV90aXRsZS5hcHBlbmRDaGlsZCh0aXRsZV9iYXIpO1xuXG5cdHRpdGxlX2Jhci5pbm5lckhUTUwgPSAnVGltZWxpbmVyICcgKyBwYWNrYWdlX2pzb24udmVyc2lvbjtcblx0cGFuZV90aXRsZS5hcHBlbmRDaGlsZCh0aXRsZV9iYXIpO1xuXG5cdHZhciB0b3BfcmlnaHRfYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdHN0eWxlKHRvcF9yaWdodF9iYXIsIGhlYWRlcl9zdHlsZXMsIHtcblx0XHR0ZXh0QWxpZ246ICdyaWdodCdcblx0fSk7XG5cblx0cGFuZV90aXRsZS5hcHBlbmRDaGlsZCh0b3BfcmlnaHRfYmFyKTtcblxuXHQvLyByZXNpemUgbWluaW1pemVcblx0Ly8gdmFyIHJlc2l6ZV9zbWFsbCA9IG5ldyBJY29uQnV0dG9uKDEwLCAncmVzaXplX3NtYWxsJywgJ21pbmltaXplJywgZGlzcGF0Y2hlcik7XG5cdC8vIHRvcF9yaWdodF9iYXIuYXBwZW5kQ2hpbGQocmVzaXplX3NtYWxsLmRvbSk7XG5cblx0Ly8gcmVzaXplIGZ1bGxcblx0dmFyIHJlc2l6ZV9mdWxsID0gbmV3IEljb25CdXR0b24oMTAsICdyZXNpemVfZnVsbCcsICdtYXhpbWl6ZScsIGRpc3BhdGNoZXIpO1xuXHRzdHlsZShyZXNpemVfZnVsbC5kb20sIGJ1dHRvbl9zdHlsZXMsIHsgbWFyZ2luUmlnaHQ6ICcycHgnIH0pO1xuXHR0b3BfcmlnaHRfYmFyLmFwcGVuZENoaWxkKHJlc2l6ZV9mdWxsLmRvbSk7XG5cblx0dmFyIHBhbmVfc3RhdHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cblx0dmFyIGZvb3Rlcl9zdHlsZXMgPSB7XG5cdFx0cG9zaXRpb246ICdhYnNvbHV0ZScsXG5cdFx0d2lkdGg6ICcxMDAlJyxcblx0XHRoZWlnaHQ6ICcyMnB4Jyxcblx0XHRsaW5lSGVpZ2h0OiAnMjJweCcsXG5cdFx0Ym90dG9tOiAnMCcsXG5cdFx0Ly8gcGFkZGluZzogJzJweCcsXG5cdFx0YmFja2dyb3VuZDogVGhlbWUuYSxcblx0XHRmb250U2l6ZTogJzExcHgnXG5cdH07XG5cblx0c3R5bGUocGFuZV9zdGF0dXMsIGZvb3Rlcl9zdHlsZXMsIHtcblx0XHRib3JkZXJUb3A6ICcxcHggc29saWQgJyArIFRoZW1lLmIsXG5cdH0pO1xuXG5cdHBhbmUuYXBwZW5kQ2hpbGQoZGl2KTtcblx0cGFuZS5hcHBlbmRDaGlsZChwYW5lX3N0YXR1cyk7XG5cdHBhbmUuYXBwZW5kQ2hpbGQocGFuZV90aXRsZSk7XG5cblx0dmFyIGxhYmVsX3N0YXR1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0bGFiZWxfc3RhdHVzLnRleHRDb250ZW50ID0gJ2hlbGxvISc7XG5cdGxhYmVsX3N0YXR1cy5zdHlsZS5tYXJnaW5MZWZ0ID0gJzEwcHgnO1xuXG5cdHRoaXMuc2V0U3RhdHVzID0gZnVuY3Rpb24odGV4dCkge1xuXHRcdGxhYmVsX3N0YXR1cy50ZXh0Q29udGVudCA9IHRleHQ7XG5cdH07XG5cblx0ZGlzcGF0Y2hlci5vbignc3RhdGU6c2F2ZScsIGZ1bmN0aW9uKGRlc2NyaXB0aW9uKSB7XG5cdFx0ZGlzcGF0Y2hlci5maXJlKCdzdGF0dXMnLCBkZXNjcmlwdGlvbik7XG5cdFx0c2F2ZSgnYXV0b3NhdmUnKTtcblx0fSk7XG5cblx0ZGlzcGF0Y2hlci5vbignc3RhdHVzJywgdGhpcy5zZXRTdGF0dXMpO1xuXG5cdHZhciBib3R0b21fcmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0c3R5bGUoYm90dG9tX3JpZ2h0LCBmb290ZXJfc3R5bGVzLCB7XG5cdFx0dGV4dEFsaWduOiAncmlnaHQnXG5cdH0pO1xuXG5cblx0Ly8gdmFyIGJ1dHRvbl9zYXZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cdC8vIHN0eWxlKGJ1dHRvbl9zYXZlLCBidXR0b25fc3R5bGVzKTtcblx0Ly8gYnV0dG9uX3NhdmUudGV4dENvbnRlbnQgPSAnU2F2ZSc7XG5cdC8vIGJ1dHRvbl9zYXZlLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcblx0Ly8gXHRzYXZlKCk7XG5cdC8vIH07XG5cblx0Ly8gdmFyIGJ1dHRvbl9sb2FkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cdC8vIHN0eWxlKGJ1dHRvbl9sb2FkLCBidXR0b25fc3R5bGVzKTtcblx0Ly8gYnV0dG9uX2xvYWQudGV4dENvbnRlbnQgPSAnSW1wb3J0Jztcblx0Ly8gYnV0dG9uX2xvYWQub25jbGljayA9IHRoaXMucHJvbXB0TG9hZDtcblxuXHQvLyB2YXIgYnV0dG9uX29wZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblx0Ly8gc3R5bGUoYnV0dG9uX29wZW4sIGJ1dHRvbl9zdHlsZXMpO1xuXHQvLyBidXR0b25fb3Blbi50ZXh0Q29udGVudCA9ICdPcGVuJztcblx0Ly8gYnV0dG9uX29wZW4ub25jbGljayA9IHRoaXMucHJvbXB0T3BlbjtcblxuXG5cdC8vIGJvdHRvbV9yaWdodC5hcHBlbmRDaGlsZChidXR0b25fbG9hZCk7XG5cdC8vIGJvdHRvbV9yaWdodC5hcHBlbmRDaGlsZChidXR0b25fc2F2ZSk7XG5cdC8vIGJvdHRvbV9yaWdodC5hcHBlbmRDaGlsZChidXR0b25fb3Blbik7XG5cblx0cGFuZV9zdGF0dXMuYXBwZW5kQ2hpbGQobGFiZWxfc3RhdHVzKTtcblx0cGFuZV9zdGF0dXMuYXBwZW5kQ2hpbGQoYm90dG9tX3JpZ2h0KTtcblxuXG5cdC8qKi9cblx0Ly8gem9vbSBpblxuXHR2YXIgem9vbV9pbiA9IG5ldyBJY29uQnV0dG9uKDEyLCAnem9vbV9pbicsICd6b29tIGluJywgZGlzcGF0Y2hlcik7XG5cdC8vIHpvb20gb3V0XG5cdHZhciB6b29tX291dCA9IG5ldyBJY29uQnV0dG9uKDEyLCAnem9vbV9vdXQnLCAnem9vbSBvdXQnLCBkaXNwYXRjaGVyKTtcblx0Ly8gc2V0dGluZ3Ncblx0dmFyIGNvZyA9IG5ldyBJY29uQnV0dG9uKDEyLCAnY29nJywgJ3NldHRpbmdzJywgZGlzcGF0Y2hlcik7XG5cblx0Ly8gYm90dG9tX3JpZ2h0LmFwcGVuZENoaWxkKHpvb21faW4uZG9tKTtcblx0Ly8gYm90dG9tX3JpZ2h0LmFwcGVuZENoaWxkKHpvb21fb3V0LmRvbSk7XG5cdC8vIGJvdHRvbV9yaWdodC5hcHBlbmRDaGlsZChjb2cuZG9tKTtcblxuXHQvLyBhZGQgbGF5ZXJcblx0dmFyIHBsdXMgPSBuZXcgSWNvbkJ1dHRvbigxMiwgJ3BsdXMnLCAnTmV3IExheWVyJywgZGlzcGF0Y2hlcik7XG5cdHBsdXMub25DbGljayhmdW5jdGlvbigpIHtcblx0XHR2YXIgbmFtZSA9IHByb21wdCgnTGF5ZXIgbmFtZT8nKTtcblx0XHRhZGRMYXllcihuYW1lKTtcblxuXHRcdHVuZG9fbWFuYWdlci5zYXZlKG5ldyBVbmRvU3RhdGUoZGF0YSwgJ0xheWVyIGFkZGVkJykpO1xuXG5cdFx0cmVwYWludEFsbCgpO1xuXHR9KTtcblx0c3R5bGUocGx1cy5kb20sIGJ1dHRvbl9zdHlsZXMpO1xuXHRib3R0b21fcmlnaHQuYXBwZW5kQ2hpbGQocGx1cy5kb20pO1xuXG5cblx0Ly8gdHJhc2hcblx0dmFyIHRyYXNoID0gbmV3IEljb25CdXR0b24oMTIsICd0cmFzaCcsICdEZWxldGUgc2F2ZScsIGRpc3BhdGNoZXIpO1xuXHR0cmFzaC5vbkNsaWNrKGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuYW1lID0gZGF0YS5nZXQoJ25hbWUnKS52YWx1ZTtcblx0XHRpZiAobmFtZSAmJiBsb2NhbFN0b3JhZ2VbU1RPUkFHRV9QUkVGSVggKyBuYW1lXSkge1xuXHRcdFx0dmFyIG9rID0gY29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSB3aXNoIHRvIGRlbGV0ZSAnICsgbmFtZSArICc/Jyk7XG5cdFx0XHRpZiAob2spIHtcblx0XHRcdFx0ZGVsZXRlIGxvY2FsU3RvcmFnZVtTVE9SQUdFX1BSRUZJWCArIG5hbWVdO1xuXHRcdFx0XHRkaXNwYXRjaGVyLmZpcmUoJ3N0YXR1cycsIG5hbWUgKyAnIGRlbGV0ZWQnKTtcblx0XHRcdFx0ZGlzcGF0Y2hlci5maXJlKCdzYXZlOmRvbmUnKTtcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xuXHRzdHlsZSh0cmFzaC5kb20sIGJ1dHRvbl9zdHlsZXMsIHsgbWFyZ2luUmlnaHQ6ICcycHgnIH0pO1xuXHRib3R0b21fcmlnaHQuYXBwZW5kQ2hpbGQodHJhc2guZG9tKTtcblxuXG5cdC8vIHBhbmVfc3RhdHVzLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcgfCBUT0RPIDxEb2NrIEZ1bGwgfCBEb2NrIEJvdHRvbiB8IFNuYXAgV2luZG93IEVkZ2VzIHwgem9vbSBpbiB8IHpvb20gb3V0IHwgU2V0dGluZ3MgfCBoZWxwPicpKTtcblxuXHQvKlxuXHRcdFx0RW5kIERPTSBTdHVmZlxuXHQqL1xuXG5cdHZhciBnaG9zdHBhbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0Z2hvc3RwYW5lLmlkID0gJ2dob3N0cGFuZSc7XG5cdHN0eWxlKGdob3N0cGFuZSwge1xuXHRcdGJhY2tncm91bmQ6ICcjOTk5Jyxcblx0XHRvcGFjaXR5OiAwLjIsXG5cdFx0cG9zaXRpb246ICdmaXhlZCcsXG5cdFx0bWFyZ2luOiAwLFxuXHRcdHBhZGRpbmc6IDAsXG5cdFx0ekluZGV4OiAoWl9JTkRFWCAtIDEpLFxuXHRcdC8vIHRyYW5zaXRpb246ICdhbGwgMC4yNXMgZWFzZS1pbi1vdXQnLFxuXHRcdHRyYW5zaXRpb25Qcm9wZXJ0eTogJ3RvcCwgbGVmdCwgd2lkdGgsIGhlaWdodCwgb3BhY2l0eScsXG4gXHRcdHRyYW5zaXRpb25EdXJhdGlvbjogJzAuMjVzJyxcblx0XHR0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb246ICdlYXNlLWluLW91dCdcblx0fSk7XG5cblxuXHQvL1xuXHQvLyBIYW5kbGUgRE9NIFZpZXdzXG5cdC8vXG5cblx0Ly8gU2hhZG93IFJvb3Rcblx0dmFyIHJvb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aW1lbGluZXInKTtcblx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChyb290KTtcblx0aWYgKHJvb3QuY3JlYXRlU2hhZG93Um9vdCkgcm9vdCA9IHJvb3QuY3JlYXRlU2hhZG93Um9vdCgpO1xuXG5cdHdpbmRvdy5yID0gcm9vdDtcblxuXHQvLyB2YXIgaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XG5cdC8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcblx0Ly8gcm9vdCA9IGlmcmFtZS5jb250ZW50RG9jdW1lbnQuYm9keTtcblxuXHRyb290LmFwcGVuZENoaWxkKHBhbmUpO1xuXHRyb290LmFwcGVuZENoaWxkKGdob3N0cGFuZSk7XG5cblx0ZGl2LmFwcGVuZENoaWxkKGxheWVyX3BhbmVsLmRvbSk7XG5cdGRpdi5hcHBlbmRDaGlsZCh0aW1lbGluZS5kb20pO1xuXG5cdHZhciBzY3JvbGxiYXIgPSBuZXcgU2Nyb2xsQmFyKDIwMCwgMTApO1xuXHRkaXYuYXBwZW5kQ2hpbGQoc2Nyb2xsYmFyLmRvbSk7XG5cblx0Ly8gcGVyY2VudGFnZXNcblx0c2Nyb2xsYmFyLm9uU2Nyb2xsLmRvKGZ1bmN0aW9uKHR5cGUsIHNjcm9sbFRvKSB7XG5cdFx0c3dpdGNoKHR5cGUpIHtcblx0XHRcdGNhc2UgJ3Njcm9sbHRvJzpcblx0XHRcdFx0bGF5ZXJfcGFuZWwuc2Nyb2xsVG8oc2Nyb2xsVG8pO1xuXHRcdFx0XHR0aW1lbGluZS5zY3JvbGxUbyhzY3JvbGxUbyk7XG5cdFx0XHRcdGJyZWFrO1xuXHQvL1x0XHRjYXNlICdwYWdldXAnOlxuXHQvLyBcdFx0XHRzY3JvbGxUb3AgLT0gcGFnZU9mZnNldDtcblx0Ly8gXHRcdFx0bWUuZHJhdygpO1xuXHQvLyBcdFx0XHRtZS51cGRhdGVTY3JvbGxiYXIoKTtcblx0Ly8gXHRcdFx0YnJlYWs7XG5cdC8vIFx0XHRjYXNlICdwYWdlZG93bic6XG5cdC8vIFx0XHRcdHNjcm9sbFRvcCArPSBwYWdlT2Zmc2V0O1xuXHQvLyBcdFx0XHRtZS5kcmF3KCk7XG5cdC8vIFx0XHRcdG1lLnVwZGF0ZVNjcm9sbGJhcigpO1xuXHQvLyBcdFx0XHRicmVhaztcblx0XHR9XG5cdH0pO1xuXG5cblxuXHQvLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIGZ1bmN0aW9uKGUpIHtcblx0Ly8gXHRjb25zb2xlLmxvZygna3AnLCBlKTtcblx0Ly8gfSk7XG5cdC8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZnVuY3Rpb24oZSkge1xuXHQvLyBcdGlmICh1bmRvKSBjb25zb2xlLmxvZygnVU5ETycpO1xuXG5cdC8vIFx0Y29uc29sZS5sb2coJ2tkJywgZSk7XG5cdC8vIH0pO1xuXG5cdC8vIFRPRE86IEtleWJvYXJkIFNob3J0Y3V0c1xuXHQvLyBFc2MgLSBTdG9wIGFuZCByZXZpZXcgdG8gbGFzdCBwbGF5ZWQgZnJvbSAvIHRvIHRoZSBzdGFydD9cblx0Ly8gU3BhY2UgLSBwbGF5IC8gcGF1c2UgZnJvbSBjdXJyZW50IHBvc2l0aW9uXG5cdC8vIEVudGVyIC0gcGxheSBhbGxcblx0Ly8gayAtIGtleWZyYW1lXG5cblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uKGUpIHtcblx0XHR2YXIgcGxheSA9IGUua2V5Q29kZSA9PSAzMjsgLy8gc3BhY2Vcblx0XHR2YXIgZW50ZXIgPSBlLmtleUNvZGUgPT0gMTM7IC8vXG5cdFx0dmFyIHVuZG8gPSBlLm1ldGFLZXkgJiYgZS5rZXlDb2RlID09IDkxICYmICFlLnNoaWZ0S2V5O1xuXG5cdFx0dmFyIGFjdGl2ZSA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG5cdFx0Ly8gY29uc29sZS5sb2coIGFjdGl2ZS5ub2RlTmFtZSApO1xuXG5cdFx0aWYgKGFjdGl2ZS5ub2RlTmFtZS5tYXRjaCgvKElOUFVUfEJVVFRPTnxTRUxFQ1R8VElNRUxJTkVSKS8pKSB7XG5cdFx0XHRhY3RpdmUuYmx1cigpO1xuXHRcdH1cblxuXHRcdGlmIChwbGF5KSB7XG5cdFx0XHRkaXNwYXRjaGVyLmZpcmUoJ2NvbnRyb2xzLnRvZ2dsZV9wbGF5Jyk7XG5cdFx0fVxuXHRcdGVsc2UgaWYgKGVudGVyKSB7XG5cdFx0XHQvLyBGSVhNRTogUmV0dXJuIHNob3VsZCBwbGF5IGZyb20gdGhlIHN0YXJ0IG9yIGxhc3QgcGxheWVkIGZyb20/XG5cdFx0XHRkaXNwYXRjaGVyLmZpcmUoJ2NvbnRyb2xzLnJlc3RhcnRfcGxheScpO1xuXHRcdFx0Ly8gZGlzcGF0Y2hlci5maXJlKCdjb250cm9scy51bmRvJyk7XG5cdFx0fVxuXHRcdGVsc2UgaWYgKGUua2V5Q29kZSA9PSAyNykge1xuXHRcdFx0Ly8gRXNjID0gc3RvcC4gRklYTUU6IHNob3VsZCByZXdpbmQgaGVhZCB0byBsYXN0IHBsYXllZCBmcm9tIG9yIExhc3QgcG9pbnRlZCBmcm9tP1xuXHRcdFx0ZGlzcGF0Y2hlci5maXJlKCdjb250cm9scy5wYXVzZScpO1xuXHRcdH1cblx0XHRlbHNlIGNvbnNvbGUubG9nKCdrZXlkb3duJywgZS5rZXlDb2RlKTtcblx0fSk7XG5cblx0dmFyIG5lZWRzUmVzaXplID0gdHJ1ZTtcblxuXHRmdW5jdGlvbiByZXNpemUod2lkdGgsIGhlaWdodCkge1xuXHRcdC8vIGRhdGEuZ2V0KCd1aTpib3VuZHMnKS52YWx1ZSA9IHtcblx0XHQvLyBcdHdpZHRoOiB3aWR0aCxcblx0XHQvLyBcdGhlaWdodDogaGVpZ2h0XG5cdFx0Ly8gfTtcblx0XHQvLyBUT0RPOiByZW1vdmUgdWdseSBoYXJkY29kZXNcblx0XHR3aWR0aCAtPSA0O1xuXHRcdGhlaWdodCAtPSA0NDtcblxuXHRcdFNldHRpbmdzLndpZHRoID0gd2lkdGggLSBTZXR0aW5ncy5MRUZUX1BBTkVfV0lEVEg7XG5cdFx0U2V0dGluZ3MuaGVpZ2h0ID0gaGVpZ2h0O1xuXG5cdFx0U2V0dGluZ3MuVElNRUxJTkVfU0NST0xMX0hFSUdIVCA9IGhlaWdodCAtIFNldHRpbmdzLk1BUktFUl9UUkFDS19IRUlHSFQ7XG5cdFx0dmFyIHNjcm9sbGFibGVfaGVpZ2h0ID0gU2V0dGluZ3MuVElNRUxJTkVfU0NST0xMX0hFSUdIVDtcblxuXHRcdHNjcm9sbGJhci5zZXRIZWlnaHQoc2Nyb2xsYWJsZV9oZWlnaHQgLSAyKTtcblx0XHQvLyBzY3JvbGxiYXIuc2V0VGh1bWJcblxuXHRcdHN0eWxlKHNjcm9sbGJhci5kb20sIHtcblx0XHRcdHRvcDogU2V0dGluZ3MuTUFSS0VSX1RSQUNLX0hFSUdIVCArICdweCcsXG5cdFx0XHRsZWZ0OiAod2lkdGggLSAxNikgKyAncHgnLFxuXHRcdH0pO1xuXG5cdFx0bmVlZHNSZXNpemUgPSB0cnVlO1xuXHR9XG5cblx0ZnVuY3Rpb24gcmVzdHlsZShsZWZ0LCByaWdodCkge1xuXHRcdGxlZnQuc3R5bGUuY3NzVGV4dCA9ICdwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IDBweDsgdG9wOiAwcHg7IGhlaWdodDogJyArIFNldHRpbmdzLmhlaWdodCArICdweDsnO1xuXHRcdHN0eWxlKGxlZnQsIHtcblx0XHRcdC8vIGJhY2tncm91bmQ6IFRoZW1lLmEsXG5cdFx0XHRvdmVyZmxvdzogJ2hpZGRlbidcblx0XHR9KTtcblx0XHRsZWZ0LnN0eWxlLndpZHRoID0gU2V0dGluZ3MuTEVGVF9QQU5FX1dJRFRIICsgJ3B4JztcblxuXHRcdC8vIHJpZ2h0LnN0eWxlLmNzc1RleHQgPSAncG9zaXRpb246IGFic29sdXRlOyB0b3A6IDBweDsnO1xuXHRcdHJpZ2h0LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcblx0XHRyaWdodC5zdHlsZS50b3AgPSAnMHB4Jztcblx0XHRyaWdodC5zdHlsZS5sZWZ0ID0gU2V0dGluZ3MuTEVGVF9QQU5FX1dJRFRIICsgJ3B4Jztcblx0fVxuXG5cdGZ1bmN0aW9uIGFkZExheWVyKG5hbWUpIHtcblx0XHR2YXIgbGF5ZXIgPSBuZXcgTGF5ZXJQcm9wKG5hbWUpO1xuXG5cdFx0bGF5ZXJzID0gbGF5ZXJfc3RvcmUudmFsdWU7XG5cdFx0bGF5ZXJzLnB1c2gobGF5ZXIpO1xuXG5cdFx0bGF5ZXJfcGFuZWwuc2V0U3RhdGUobGF5ZXJfc3RvcmUpO1xuXHR9XG5cblx0dGhpcy5hZGRMYXllciA9IGFkZExheWVyO1xuXG5cdHRoaXMuc2V0VGFyZ2V0ID0gZnVuY3Rpb24odCkge1xuXHRcdHRpbWVsaW5lID0gdDtcblx0fTtcblxuXHRmdW5jdGlvbiBnZXRWYWx1ZVJhbmdlcyhyYW5nZXMsIGludGVydmFsKSB7XG5cdFx0aW50ZXJ2YWwgPSBpbnRlcnZhbCA/IGludGVydmFsIDogMC4xNTtcblx0XHRyYW5nZXMgPSByYW5nZXMgPyByYW5nZXMgOiAyO1xuXG5cdFx0Ly8gbm90IG9wdGltaXplZCFcblx0XHR2YXIgdCA9IGRhdGEuZ2V0KCd1aTpjdXJyZW50VGltZScpLnZhbHVlO1xuXG5cdFx0dmFyIHZhbHVlcyA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgdSA9IC1yYW5nZXM7IHUgPD0gcmFuZ2VzOyB1KyspIHtcblx0XHRcdC8vIGlmICh1ID09IDApIGNvbnRpbnVlO1xuXHRcdFx0dmFyIG8gPSB7fTtcblxuXHRcdFx0Zm9yICh2YXIgbCA9IDA7IGwgPCBsYXllcnMubGVuZ3RoOyBsKyspIHtcblx0XHRcdFx0dmFyIGxheWVyID0gbGF5ZXJzW2xdO1xuXHRcdFx0XHR2YXIgbSA9IHV0aWxzLnRpbWVBdExheWVyKGxheWVyLCB0ICsgdSAqIGludGVydmFsKTtcblx0XHRcdFx0b1tsYXllci5uYW1lXSA9IG0udmFsdWU7XG5cdFx0XHR9XG5cblx0XHRcdHZhbHVlcy5wdXNoKG8pO1xuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIHZhbHVlcztcblx0fVxuXG5cdHRoaXMuZ2V0VmFsdWVzID0gZ2V0VmFsdWVSYW5nZXM7XG5cblx0KGZ1bmN0aW9uIERvY2tpbmdXaW5kb3coKSB7XG5cdFx0XCJ1c2Ugc3RyaWN0XCI7XG5cblx0XHQvLyBNaW5pbXVtIHJlc2l6YWJsZSBhcmVhXG5cdFx0dmFyIG1pbldpZHRoID0gMTAwO1xuXHRcdHZhciBtaW5IZWlnaHQgPSA4MDtcblxuXHRcdC8vIFRocmVzaG9sZHNcblx0XHR2YXIgRlVMTFNDUkVFTl9NQVJHSU5TID0gMjtcblx0XHR2YXIgU05BUF9NQVJHSU5TID0gODtcblx0XHR2YXIgTUFSR0lOUyA9IDI7XG5cblx0XHQvLyBFbmQgb2Ygd2hhdCdzIGNvbmZpZ3VyYWJsZS5cblxuXHRcdHZhciBjbGlja2VkID0gbnVsbDtcblx0XHR2YXIgb25SaWdodEVkZ2UsIG9uQm90dG9tRWRnZSwgb25MZWZ0RWRnZSwgb25Ub3BFZGdlO1xuXG5cdFx0dmFyIHByZVNuYXBwZWQ7XG5cblx0XHR2YXIgYiwgeCwgeTtcblxuXHRcdHZhciByZWRyYXcgPSBmYWxzZTtcblxuXHRcdC8vIHZhciBwYW5lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhbmUnKTtcblx0XHQvLyB2YXIgZ2hvc3RwYW5lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dob3N0cGFuZScpO1xuXG5cdFx0dmFyIG1vdXNlT25UaXRsZSA9IGZhbHNlO1xuXHRcdHZhciBzbmFwVHlwZTtcblxuXHRcdHBhbmVfdGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRtb3VzZU9uVGl0bGUgPSB0cnVlO1xuXHRcdH0pO1xuXG5cdFx0cGFuZV90aXRsZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIGZ1bmN0aW9uKCkge1xuXHRcdFx0bW91c2VPblRpdGxlID0gZmFsc2U7XG5cdFx0fSk7XG5cblx0XHRyZXNpemVfZnVsbC5vbkNsaWNrKGZ1bmN0aW9uKCkge1xuXHRcdFx0Ly8gVE9PRCB0b2dnbGUgYmFjayB0byByZXN0b3JlZCBzaXplXG5cdFx0XHRpZiAoIXByZVNuYXBwZWQpIHByZVNuYXBwZWQgPSB7XG5cdFx0XHRcdHdpZHRoOiBiLndpZHRoLFxuXHRcdFx0XHRoZWlnaHQ6IGIuaGVpZ2h0XG5cdFx0XHR9O1xuXG5cdFx0XHRzbmFwVHlwZSA9ICdmdWxsLXNjcmVlbic7XG5cdFx0XHRyZXNpemVFZGdlcygpO1xuXHRcdH0pO1xuXG5cdFx0Ly8gcGFuZV9zdGF0dXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgZnVuY3Rpb24oKSB7XG5cdFx0Ly8gXHRtb3VzZU9uVGl0bGUgPSB0cnVlO1xuXHRcdC8vIH0pO1xuXG5cdFx0Ly8gcGFuZV9zdGF0dXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBmdW5jdGlvbigpIHtcblx0XHQvLyBcdG1vdXNlT25UaXRsZSA9IGZhbHNlO1xuXHRcdC8vIH0pO1xuXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYgKHNuYXBUeXBlKVxuXHRcdFx0XHRyZXNpemVFZGdlcygpO1xuXHRcdFx0ZWxzZVxuXHRcdFx0XHRuZWVkc1Jlc2l6ZSA9IHRydWU7XG5cdFx0fSk7XG5cblx0XHQvLyB1dGlsc1xuXHRcdGZ1bmN0aW9uIHNldEJvdW5kcyhlbGVtZW50LCB4LCB5LCB3LCBoKSB7XG5cdFx0XHRlbGVtZW50LnN0eWxlLmxlZnQgPSB4ICsgJ3B4Jztcblx0XHRcdGVsZW1lbnQuc3R5bGUudG9wID0geSArICdweCc7XG5cdFx0XHRlbGVtZW50LnN0eWxlLndpZHRoID0gdyArICdweCc7XG5cdFx0XHRlbGVtZW50LnN0eWxlLmhlaWdodCA9IGggKyAncHgnO1xuXG5cdFx0XHRpZiAoZWxlbWVudCA9PT0gcGFuZSkge1xuXHRcdFx0XHRyZXNpemUodywgaCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gaGludEhpZGUoKSB7XG5cdFx0XHRzZXRCb3VuZHMoZ2hvc3RwYW5lLCBiLmxlZnQsIGIudG9wLCBiLndpZHRoLCBiLmhlaWdodCk7XG5cdFx0XHRnaG9zdHBhbmUuc3R5bGUub3BhY2l0eSA9IDA7XG5cdFx0fVxuXG5cdFx0c2V0Qm91bmRzKHBhbmUsIDAsIDAsIFNldHRpbmdzLndpZHRoLCBTZXR0aW5ncy5oZWlnaHQpO1xuXHRcdHNldEJvdW5kcyhnaG9zdHBhbmUsIDAsIDAsIFNldHRpbmdzLndpZHRoLCBTZXR0aW5ncy5oZWlnaHQpO1xuXG5cdFx0Ly8gTW91c2UgZXZlbnRzXG5cdFx0cGFuZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBvbk1vdXNlRG93bik7XG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3ZlKTtcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25VcCk7XG5cblx0XHQvLyBUb3VjaCBldmVudHNcblx0XHRwYW5lLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBvblRvdWNoRG93bik7XG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgb25Ub3VjaE1vdmUpO1xuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgb25Ub3VjaEVuZCk7XG5cblxuXHRcdGZ1bmN0aW9uIG9uVG91Y2hEb3duKGUpIHtcblx0XHRcdG9uRG93bihlLnRvdWNoZXNbMF0pO1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIG9uVG91Y2hNb3ZlKGUpIHtcblx0XHRcdG9uTW92ZShlLnRvdWNoZXNbMF0pO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIG9uVG91Y2hFbmQoZSkge1xuXHRcdFx0aWYgKGUudG91Y2hlcy5sZW5ndGggPT0gMCkgb25VcChlLmNoYW5nZWRUb3VjaGVzWzBdKTtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBvbk1vdXNlRG93bihlKSB7XG5cdFx0XHRvbkRvd24oZSk7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gb25Eb3duKGUpIHtcblx0XHRcdGNhbGMoZSk7XG5cblx0XHRcdHZhciBpc1Jlc2l6aW5nID0gb25SaWdodEVkZ2UgfHwgb25Cb3R0b21FZGdlIHx8IG9uVG9wRWRnZSB8fCBvbkxlZnRFZGdlO1xuXHRcdFx0dmFyIGlzTW92aW5nID0gIWlzUmVzaXppbmcgJiYgY2FuTW92ZSgpO1xuXG5cdFx0XHRjbGlja2VkID0ge1xuXHRcdFx0XHR4OiB4LFxuXHRcdFx0XHR5OiB5LFxuXHRcdFx0XHRjeDogZS5jbGllbnRYLFxuXHRcdFx0XHRjeTogZS5jbGllbnRZLFxuXHRcdFx0XHR3OiBiLndpZHRoLFxuXHRcdFx0XHRoOiBiLmhlaWdodCxcblx0XHRcdFx0aXNSZXNpemluZzogaXNSZXNpemluZyxcblx0XHRcdFx0aXNNb3Zpbmc6IGlzTW92aW5nLFxuXHRcdFx0XHRvblRvcEVkZ2U6IG9uVG9wRWRnZSxcblx0XHRcdFx0b25MZWZ0RWRnZTogb25MZWZ0RWRnZSxcblx0XHRcdFx0b25SaWdodEVkZ2U6IG9uUmlnaHRFZGdlLFxuXHRcdFx0XHRvbkJvdHRvbUVkZ2U6IG9uQm90dG9tRWRnZVxuXHRcdFx0fTtcblxuXHRcdFx0aWYgKGlzUmVzaXppbmcgfHwgaXNNb3ZpbmcpIHtcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGNhbk1vdmUoKSB7XG5cdFx0XHRyZXR1cm4gbW91c2VPblRpdGxlO1xuXHRcdFx0Ly8gcmV0dXJuIHggPiAwICYmIHggPCBiLndpZHRoICYmIHkgPiAwICYmIHkgPCBiLmhlaWdodFxuXHRcdFx0Ly8gJiYgeSA8IDE4O1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGNhbGMoZSkge1xuXHRcdFx0YiA9IHBhbmUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0XHR4ID0gZS5jbGllbnRYIC0gYi5sZWZ0O1xuXHRcdFx0eSA9IGUuY2xpZW50WSAtIGIudG9wO1xuXG5cdFx0XHRvblRvcEVkZ2UgPSB5IDwgTUFSR0lOUztcblx0XHRcdG9uTGVmdEVkZ2UgPSB4IDwgTUFSR0lOUztcblx0XHRcdG9uUmlnaHRFZGdlID0geCA+PSBiLndpZHRoIC0gTUFSR0lOUztcblx0XHRcdG9uQm90dG9tRWRnZSA9IHkgPj0gYi5oZWlnaHQgLSBNQVJHSU5TO1xuXHRcdH1cblxuXHRcdHZhciBlOyAvLyBjdXJyZW50IG1vdXNlbW92ZSBldmVudFxuXG5cdFx0ZnVuY3Rpb24gb25Nb3ZlKGVlKSB7XG5cdFx0XHRlID0gZWU7XG5cdFx0XHRjYWxjKGUpO1xuXG5cdFx0XHRyZWRyYXcgPSB0cnVlO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGFuaW1hdGUoKSB7XG5cblx0XHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcblxuXHRcdFx0aWYgKCFyZWRyYXcpIHJldHVybjtcblxuXHRcdFx0cmVkcmF3ID0gZmFsc2U7XG5cblx0XHRcdGlmIChjbGlja2VkICYmIGNsaWNrZWQuaXNSZXNpemluZykge1xuXG5cdFx0XHRcdGlmIChjbGlja2VkLm9uUmlnaHRFZGdlKSBwYW5lLnN0eWxlLndpZHRoID0gTWF0aC5tYXgoeCwgbWluV2lkdGgpICsgJ3B4Jztcblx0XHRcdFx0aWYgKGNsaWNrZWQub25Cb3R0b21FZGdlKSBwYW5lLnN0eWxlLmhlaWdodCA9IE1hdGgubWF4KHksIG1pbkhlaWdodCkgKyAncHgnO1xuXG5cdFx0XHRcdGlmIChjbGlja2VkLm9uTGVmdEVkZ2UpIHtcblx0XHRcdFx0XHR2YXIgY3VycmVudFdpZHRoID0gTWF0aC5tYXgoY2xpY2tlZC5jeCAtIGUuY2xpZW50WCAgKyBjbGlja2VkLncsIG1pbldpZHRoKTtcblx0XHRcdFx0XHRpZiAoY3VycmVudFdpZHRoID4gbWluV2lkdGgpIHtcblx0XHRcdFx0XHRcdHBhbmUuc3R5bGUud2lkdGggPSBjdXJyZW50V2lkdGggKyAncHgnO1xuXHRcdFx0XHRcdFx0cGFuZS5zdHlsZS5sZWZ0ID0gZS5jbGllbnRYICsgJ3B4Jztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoY2xpY2tlZC5vblRvcEVkZ2UpIHtcblx0XHRcdFx0XHR2YXIgY3VycmVudEhlaWdodCA9IE1hdGgubWF4KGNsaWNrZWQuY3kgLSBlLmNsaWVudFkgICsgY2xpY2tlZC5oLCBtaW5IZWlnaHQpO1xuXHRcdFx0XHRcdGlmIChjdXJyZW50SGVpZ2h0ID4gbWluSGVpZ2h0KSB7XG5cdFx0XHRcdFx0XHRwYW5lLnN0eWxlLmhlaWdodCA9IGN1cnJlbnRIZWlnaHQgKyAncHgnO1xuXHRcdFx0XHRcdFx0cGFuZS5zdHlsZS50b3AgPSBlLmNsaWVudFkgKyAncHgnO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGhpbnRIaWRlKCk7XG5cblx0XHRcdFx0cmVzaXplKGIud2lkdGgsIGIuaGVpZ2h0KTtcblxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGlmIChjbGlja2VkICYmIGNsaWNrZWQuaXNNb3ZpbmcpIHtcblxuXHRcdFx0XHRzd2l0Y2goY2hlY2tzKCkpIHtcblx0XHRcdFx0XHRjYXNlICdmdWxsLXNjcmVlbic6XG5cdFx0XHRcdFx0XHRzZXRCb3VuZHMoZ2hvc3RwYW5lLCAwLCAwLCB3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcblx0XHRcdFx0XHRcdGdob3N0cGFuZS5zdHlsZS5vcGFjaXR5ID0gMC4yO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnc25hcC10b3AtZWRnZSc6XG5cdFx0XHRcdFx0XHRzZXRCb3VuZHMoZ2hvc3RwYW5lLCAwLCAwLCB3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0IC8gMik7XG5cdFx0XHRcdFx0XHRnaG9zdHBhbmUuc3R5bGUub3BhY2l0eSA9IDAuMjtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJ3NuYXAtbGVmdC1lZGdlJzpcblx0XHRcdFx0XHRcdHNldEJvdW5kcyhnaG9zdHBhbmUsIDAsIDAsIHdpbmRvdy5pbm5lcldpZHRoIC8gMiwgd2luZG93LmlubmVySGVpZ2h0KTtcblx0XHRcdFx0XHRcdGdob3N0cGFuZS5zdHlsZS5vcGFjaXR5ID0gMC4yO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnc25hcC1yaWdodC1lZGdlJzpcblx0XHRcdFx0XHRcdHNldEJvdW5kcyhnaG9zdHBhbmUsIHdpbmRvdy5pbm5lcldpZHRoIC8gMiwgMCwgd2luZG93LmlubmVyV2lkdGggLyAyLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuXHRcdFx0XHRcdFx0Z2hvc3RwYW5lLnN0eWxlLm9wYWNpdHkgPSAwLjI7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICdzbmFwLWJvdHRvbS1lZGdlJzpcblx0XHRcdFx0XHRcdHNldEJvdW5kcyhnaG9zdHBhbmUsIDAsIHdpbmRvdy5pbm5lckhlaWdodCAvIDIsIHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyKTtcblx0XHRcdFx0XHRcdGdob3N0cGFuZS5zdHlsZS5vcGFjaXR5ID0gMC4yO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdGhpbnRIaWRlKCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAocHJlU25hcHBlZCkge1xuXHRcdFx0XHRcdHNldEJvdW5kcyhwYW5lLFxuXHRcdFx0XHRcdFx0ZS5jbGllbnRYIC0gcHJlU25hcHBlZC53aWR0aCAvIDIsXG5cdFx0XHRcdFx0XHRlLmNsaWVudFkgLSBNYXRoLm1pbihjbGlja2VkLnksIHByZVNuYXBwZWQuaGVpZ2h0KSxcblx0XHRcdFx0XHRcdHByZVNuYXBwZWQud2lkdGgsXG5cdFx0XHRcdFx0XHRwcmVTbmFwcGVkLmhlaWdodFxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gbW92aW5nXG5cdFx0XHRcdHBhbmUuc3R5bGUudG9wID0gKGUuY2xpZW50WSAtIGNsaWNrZWQueSkgKyAncHgnO1xuXHRcdFx0XHRwYW5lLnN0eWxlLmxlZnQgPSAoZS5jbGllbnRYIC0gY2xpY2tlZC54KSArICdweCc7XG5cblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBUaGlzIGNvZGUgZXhlY3V0ZXMgd2hlbiBtb3VzZSBtb3ZlcyB3aXRob3V0IGNsaWNraW5nXG5cblx0XHRcdC8vIHN0eWxlIGN1cnNvclxuXHRcdFx0aWYgKG9uUmlnaHRFZGdlICYmIG9uQm90dG9tRWRnZSB8fCBvbkxlZnRFZGdlICYmIG9uVG9wRWRnZSkge1xuXHRcdFx0XHRwYW5lLnN0eWxlLmN1cnNvciA9ICdud3NlLXJlc2l6ZSc7XG5cdFx0XHR9IGVsc2UgaWYgKG9uUmlnaHRFZGdlICYmIG9uVG9wRWRnZSB8fCBvbkJvdHRvbUVkZ2UgJiYgb25MZWZ0RWRnZSkge1xuXHRcdFx0XHRwYW5lLnN0eWxlLmN1cnNvciA9ICduZXN3LXJlc2l6ZSc7XG5cdFx0XHR9IGVsc2UgaWYgKG9uUmlnaHRFZGdlIHx8IG9uTGVmdEVkZ2UpIHtcblx0XHRcdFx0cGFuZS5zdHlsZS5jdXJzb3IgPSAnZXctcmVzaXplJztcblx0XHRcdH0gZWxzZSBpZiAob25Cb3R0b21FZGdlIHx8IG9uVG9wRWRnZSkge1xuXHRcdFx0XHRwYW5lLnN0eWxlLmN1cnNvciA9ICducy1yZXNpemUnO1xuXHRcdFx0fSBlbHNlIGlmIChjYW5Nb3ZlKCkpIHtcblx0XHRcdFx0cGFuZS5zdHlsZS5jdXJzb3IgPSAnbW92ZSc7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRwYW5lLnN0eWxlLmN1cnNvciA9ICdkZWZhdWx0Jztcblx0XHRcdH1cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBjaGVja3MoKSB7XG5cdFx0XHQvKlxuXHRcdFx0dmFyIHJpZ2h0U2NyZWVuRWRnZSwgYm90dG9tU2NyZWVuRWRnZTtcblxuXHRcdFx0cmlnaHRTY3JlZW5FZGdlID0gd2luZG93LmlubmVyV2lkdGggLSBNQVJHSU5TO1xuXHRcdFx0Ym90dG9tU2NyZWVuRWRnZSA9IHdpbmRvdy5pbm5lckhlaWdodCAtIE1BUkdJTlM7XG5cblx0XHRcdC8vIEVkZ2UgQ2hlY2tpbmdzXG5cdFx0XHQvLyBoaW50RnVsbCgpO1xuXHRcdFx0aWYgKGIudG9wIDwgRlVMTFNDUkVFTl9NQVJHSU5TIHx8IGIubGVmdCA8IEZVTExTQ1JFRU5fTUFSR0lOUyB8fCBiLnJpZ2h0ID4gd2luZG93LmlubmVyV2lkdGggLSBGVUxMU0NSRUVOX01BUkdJTlMgfHwgYi5ib3R0b20gPiB3aW5kb3cuaW5uZXJIZWlnaHQgLSBGVUxMU0NSRUVOX01BUkdJTlMpXG5cdFx0XHRcdHJldHVybiAnZnVsbC1zY3JlZW4nO1xuXG5cdFx0XHQvLyBoaW50VG9wKCk7XG5cdFx0XHRpZiAoYi50b3AgPCBNQVJHSU5TKSByZXR1cm4gJ3NuYXAtdG9wLWVkZ2UnO1xuXG5cdFx0XHQvLyBoaW50TGVmdCgpO1xuXHRcdFx0aWYgKGIubGVmdCA8IE1BUkdJTlMpIHJldHVybiAnc25hcC1sZWZ0LWVkZ2UnO1xuXG5cdFx0XHQvLyBoaW50UmlnaHQoKTtcblx0XHRcdGlmIChiLnJpZ2h0ID4gcmlnaHRTY3JlZW5FZGdlKSByZXR1cm4gJ3NuYXAtcmlnaHQtZWRnZSc7XG5cblx0XHRcdC8vIGhpbnRCb3R0b20oKTtcblx0XHRcdGlmIChiLmJvdHRvbSA+IGJvdHRvbVNjcmVlbkVkZ2UpIHJldHVybiAnc25hcC1ib3R0b20tZWRnZSc7XG5cdFx0XHQqL1xuXG5cdFx0XHRpZiAoZS5jbGllbnRZIDwgRlVMTFNDUkVFTl9NQVJHSU5TKSByZXR1cm4gJ2Z1bGwtc2NyZWVuJztcblxuXHRcdFx0aWYgKGUuY2xpZW50WSA8IFNOQVBfTUFSR0lOUykgcmV0dXJuICdzbmFwLXRvcC1lZGdlJztcblxuXHRcdFx0Ly8gaGludExlZnQoKTtcblx0XHRcdGlmIChlLmNsaWVudFggPCBTTkFQX01BUkdJTlMpIHJldHVybiAnc25hcC1sZWZ0LWVkZ2UnO1xuXG5cdFx0XHQvLyBoaW50UmlnaHQoKTtcblx0XHRcdGlmICh3aW5kb3cuaW5uZXJXaWR0aCAtIGUuY2xpZW50WCA8IFNOQVBfTUFSR0lOUykgcmV0dXJuICdzbmFwLXJpZ2h0LWVkZ2UnO1xuXG5cdFx0XHQvLyBoaW50Qm90dG9tKCk7XG5cdFx0XHRpZiAod2luZG93LmlubmVySGVpZ2h0LSBlLmNsaWVudFkgPCBTTkFQX01BUkdJTlMpIHJldHVybiAnc25hcC1ib3R0b20tZWRnZSc7XG5cblx0XHR9XG5cblx0XHRhbmltYXRlKCk7XG5cblx0XHRmdW5jdGlvbiByZXNpemVFZGdlcygpIHtcblx0XHRcdHN3aXRjaChzbmFwVHlwZSkge1xuXHRcdFx0XHRjYXNlICdmdWxsLXNjcmVlbic6XG5cdFx0XHRcdFx0Ly8gaGludEZ1bGwoKTtcblx0XHRcdFx0XHRzZXRCb3VuZHMocGFuZSwgMCwgMCwgd2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ3NuYXAtdG9wLWVkZ2UnOlxuXHRcdFx0XHRcdC8vIGhpbnRUb3AoKTtcblx0XHRcdFx0XHRzZXRCb3VuZHMocGFuZSwgMCwgMCwgd2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCAvIDIpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdzbmFwLWxlZnQtZWRnZSc6XG5cdFx0XHRcdFx0Ly8gaGludExlZnQoKTtcblx0XHRcdFx0XHRzZXRCb3VuZHMocGFuZSwgMCwgMCwgd2luZG93LmlubmVyV2lkdGggLyAyLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdzbmFwLXJpZ2h0LWVkZ2UnOlxuXHRcdFx0XHRcdHNldEJvdW5kcyhwYW5lLCB3aW5kb3cuaW5uZXJXaWR0aCAvIDIsIDAsIHdpbmRvdy5pbm5lcldpZHRoIC8gMiwgd2luZG93LmlubmVySGVpZ2h0KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnc25hcC1ib3R0b20tZWRnZSc6XG5cdFx0XHRcdFx0c2V0Qm91bmRzKHBhbmUsIDAsIHdpbmRvdy5pbm5lckhlaWdodCAvIDIsIHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBvblVwKGUpIHtcblx0XHRcdGNhbGMoZSk7XG5cblx0XHRcdGlmIChjbGlja2VkICYmIGNsaWNrZWQuaXNNb3ZpbmcpIHtcblx0XHRcdFx0Ly8gU25hcFxuXHRcdFx0XHRzbmFwVHlwZSA9IGNoZWNrcygpO1xuXHRcdFx0XHRpZiAoc25hcFR5cGUpIHtcblx0XHRcdFx0XHRwcmVTbmFwcGVkID0ge1xuXHRcdFx0XHRcdFx0d2lkdGg6IGIud2lkdGgsXG5cdFx0XHRcdFx0XHRoZWlnaHQ6IGIuaGVpZ2h0XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRyZXNpemVFZGdlcygpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHByZVNuYXBwZWQgPSBudWxsO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aGludEhpZGUoKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRjbGlja2VkID0gbnVsbDtcblxuXHRcdH1cblx0fSkoKTtcblxufVxuXG53aW5kb3cuVGltZWxpbmVyID0gVGltZWxpbmVyO1xuIiwidmFyIGhhbmRsZURyYWcgPSByZXF1aXJlKCcuL3V0aWxfaGFuZGxlX2RyYWcnKTtcblxuZnVuY3Rpb24gQ2FudmFzKHcsIGgpIHtcblxuXHR2YXIgY2FudmFzLCBjdHgsIHdpZHRoLCBoZWlnaHQsIGRwcjtcblxuXHR2YXIgY2FudmFzSXRlbXMgPSBbXTtcblx0dmFyIGNoaWxkO1xuXG5cdGZ1bmN0aW9uIGNyZWF0ZSgpIHtcblx0XHRjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcblx0XHRjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblx0fVxuXG5cdGZ1bmN0aW9uIHNldFNpemUodywgaCkge1xuXHRcdHdpZHRoID0gdztcblx0XHRoZWlnaHQgPSBoO1xuXHRcdGRwciA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvO1xuXHRcdGNhbnZhcy53aWR0aCA9IHdpZHRoICogZHByO1xuXHRcdGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQgKiBkcHI7XG5cdFx0Y2FudmFzLnN0eWxlLndpZHRoID0gd2lkdGggKyAncHgnO1xuXHRcdGNhbnZhcy5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyAncHgnO1xuXG5cdFx0aWYgKGNoaWxkKSBjaGlsZC5zZXRTaXplKHcsIGgpO1xuXHR9XG5cblx0ZnVuY3Rpb24gcGFpbnQoY3R4KSB7XG5cdFx0aWYgKGNoaWxkKSB7XG5cdFx0XHRpZiAoIWNoaWxkLnBhaW50KSBjb25zb2xlLndhcm4oJ2ltcGxlbWVudCByZXBhaW50KCknKVxuXHRcdFx0Y2hpbGQucGFpbnQoY3R4KTtcblx0XHR9XG5cblx0XHR2YXIgaXRlbTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGNhbnZhc0l0ZW1zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpdGVtID0gY2FudmFzSXRlbXNbaV07XG5cdFx0XHRpdGVtLnBhaW50KClcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiByZXBhaW50KCkge1xuXHRcdHBhaW50KGN0eCk7XG5cdH1cblxuXHRmdW5jdGlvbiBhZGQoaXRlbSkge1xuXHRcdGNhbnZhc0l0ZW1zLnB1c2goaXRlbSlcblx0fVxuXG5cdGZ1bmN0aW9uIHJlbW92ZShpdGVtKSB7XG5cdFx0Y2FudmFzSXRlbXMuc3BsaWNlKGNhbnZhc0l0ZW1zLmluZGV4T2YoaXRlbSksIDEpO1xuXHR9XG5cblx0ZnVuY3Rpb24gdXNlcyhjKSB7XG5cdFx0Y2hpbGQgPSBjO1xuXHRcdGNoaWxkLmFkZCA9IHRoaXMuYWRkO1xuXHRcdGNoaWxkLnJlbW92ZSA9IHRoaXMucmVtb3ZlO1xuXHR9XG5cblx0Y3JlYXRlKCk7XG5cdHNldFNpemUodywgaCk7XG5cdHRoaXMuc2V0U2l6ZSA9IHNldFNpemU7XG5cdHRoaXMucmVwYWludCA9IHJlcGFpbnQ7XG5cdHRoaXMudXNlcyA9IHVzZXM7XG5cblx0dGhpcy5kb20gPSBjYW52YXM7XG5cblx0aGFuZGxlRHJhZyhjYW52YXMsXG5cdFx0ZnVuY3Rpb24gZG93bihlKSB7XG5cdFx0XHRpZiAoY2hpbGQub25Eb3duKSB7IGNoaWxkLm9uRG93bihlKSB9O1xuXHRcdH0sXG5cdFx0ZnVuY3Rpb24gbW92ZShlKSB7XG5cdFx0XHRpZiAoY2hpbGQub25Nb3ZlKSB7IGNoaWxkLm9uTW92ZShlKSB9O1xuXHRcdH0sXG5cdFx0ZnVuY3Rpb24gdXAoZSkge1xuXHRcdFx0aWYgKGNoaWxkLm9uVXApIHsgY2hpbGQub25VcChlKSB9O1xuXHRcdH1cblx0XHQvLyBmdW5jdGlvbiBoaXQoZSkge1xuXHRcdC8vIFx0aWYgKGNoaWxkLm9uSGl0KSB7IGNoaWxkLm9uSGl0KGUpIH07XG5cdFx0Ly8gfVxuXHQpO1xufVxuXG5cbm1vZHVsZS5leHBvcnRzID0gQ2FudmFzO1xuXG4vKlxuICogVXNhZ2U6IGNhbnZhcyA9IG5ldyBDYW52YXMod2lkdGgsIGhlaWdodCk7XG4gKiBjYW52YXMucmVzaXplKCk7XG4gKi9cblxuLy8gY2hpbGRyZW5cbi8vIDE6IG92ZXJyaWRlIHJlcGFpbnRcbi8vIDI6IGFkZCBvYmplY3RzXG4vLyBDYW52YXMudXNlcyhDYW52YXNDaGlsZCk7XG4vLyBDYW52YXNJdGVtXG4vLyB3aWR0aCwgaGVpZ2h0LCB4LCB5XG4vLyBhbGxvdyBEcmFnXG4vLyBhbGxvdyBDbGlja1xuLy8gbW91c2VPdmVyXG4vLyBcblxuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGRkb3Mgb24gMTUuMDQuMTcuXG4gKi9cbmNvbnN0IFRoZW1lID0gcmVxdWlyZSgnLi90aGVtZScpLFxuICBEbyA9IHJlcXVpcmUoJ2RvLmpzJyksXG4gIHN0eWxlID0gcmVxdWlyZSgnLi91dGlscycpLnN0eWxlLFxuICB0eXBlID0gcmVxdWlyZSgnLi91dGlscycpLmlucHV0VHlwZSxcbiAgZmlyc3REZWZpbmVkID0gcmVxdWlyZSgnLi91dGlscycpLmZpcnN0RGVmaW5lZFxuO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vLyBDb2xvclVJXG4vKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbmZ1bmN0aW9uIENvbG9yVUkgKGNvbmZpZykge1xuICBjb25maWcgPSBjb25maWcgfHwge31cbiAgY29uZmlnLnJlZ2V4ID0gL14jW0EtRixhLWYsMC05XXs2fSQvZ1xuXG4gIHZhciBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuXG4gIHR5cGUoc3BhbiwgJ2NvbG9yJylcblxuICBzdHlsZShzcGFuLCB7XG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICBmb250U2l6ZTogJzEwcHgnLFxuICAgIHBhZGRpbmc6ICcxcHgnLFxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgIHdpZHRoOiAnNDBweCcsXG4gICAgbWFyZ2luOiAwLFxuICAgIG1hcmdpblJpZ2h0OiAnMTBweCcsXG4gICAgYXBwZWFyYW5jZTogJ25vbmUnLFxuICAgIG91dGxpbmU6ICdub25lJyxcbiAgICBib3JkZXI6IDAsXG4gICAgYmFja2dyb3VuZDogJ25vbmUnLFxuICAgIGNvbG9yOiBUaGVtZS5jXG4gIH0pO1xuXG4gIHZhciBtZSA9IHRoaXNcblxuICB2YXIgc3RhdGUsIHZhbHVlID0gMCwgdW5jaGFuZ2VkX3ZhbHVlO1xuXG4gIHRoaXMub25DaGFuZ2UgPSBuZXcgRG8oKVxuXG4gIHNwYW4uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oZSkge1xuICAgIGNvbnNvbGUubG9nKCdjb2xvciBzcGFuIGNoYW5nZWQnLCBzcGFuLnZhbHVlKTtcbiAgICB2YWx1ZSA9IHNwYW4udmFsdWU7XG5cbiAgICBmaXJlQ2hhbmdlKCk7XG4gIH0pO1xuXG5cbiAgZnVuY3Rpb24gZmlyZUNoYW5nZSgpIHtcbiAgICBtZS5vbkNoYW5nZS5maXJlKHZhbHVlLCB0cnVlKTtcbiAgfVxuXG4gIHRoaXMuZG9tID0gc3BhblxuXG4gIHRoaXMuc2V0VmFsdWUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBpZih2YWx1ZSA9PSAwIHx8IE51bWJlcih2YWx1ZSkpIHtcbiAgICAgIHZhbHVlID0gJyMwMDAwMDAnXG4gICAgfVxuXG4gICAgaWYoIWNvbmZpZy5yZWdleC50ZXN0KHZhbHVlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHNwYW4udmFsdWUgPSB2YWx1ZVxuICB9XG5cbiAgdGhpcy5wYWludCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh2YWx1ZSAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICE9PSBzcGFuKSB7XG4gICAgICBzcGFuLnZhbHVlID0gdmFsdWU7XG4gICAgfVxuICB9O1xuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29sb3JVSTsiLCJ2YXIgZm9udCA9IHJlcXVpcmUoJy4vZm9udC5qc29uJyksXG5cdFRoZW1lID0gcmVxdWlyZSgnLi90aGVtZScpLFxuXHRzdHlsZSA9IHJlcXVpcmUoJy4vdXRpbHMnKS5zdHlsZTtcblxudmFyIGRwO1xuXG5mdW5jdGlvbiBJY29uQnV0dG9uKHNpemUsIGljb24sIHRvb2x0aXAsIGRwKSB7XG5cdHZhciBpY29uU3R5bGUgPSB7XG5cdFx0cGFkZGluZzogJzAuMmVtIDAuNGVtJyxcblx0XHRtYXJnaW46ICcwZW0nLFxuXHRcdGJhY2tncm91bmQ6ICdub25lJyxcblx0XHRvdXRsaW5lOiAnbm9uZScsXG5cdFx0Zm9udFNpemU6ICcxNnB4Jyxcblx0XHRib3JkZXI6ICdub25lJyxcblx0XHRib3JkZXJSYWRpdXM6ICcwLjJlbScsXG5cdH07XG5cblx0dmFyIGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHRzdHlsZShidXR0b24sIGljb25TdHlsZSk7XG5cblx0dmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuXHR2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cblx0YnV0dG9uLmFwcGVuZENoaWxkKGNhbnZhcyk7XG5cblx0dGhpcy5jdHggPSBjdHg7XG5cdHRoaXMuZG9tID0gYnV0dG9uO1xuXHR0aGlzLmNhbnZhcyA9IGNhbnZhcztcblxuXHR2YXIgbWUgPSB0aGlzO1xuXHR0aGlzLnNpemUgPSBzaXplO1xuXHR2YXIgZHByID0gMTtcblxuXHR0aGlzLnJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdGRwciA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvO1xuXHRcdHZhciBoZWlnaHQgPSBzaXplO1xuXG5cdFx0dmFyIGdseXBoID0gZm9udC5mb250c1tpY29uXTtcblxuXHRcdGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQgKiBkcHI7XG5cdFx0Y2FudmFzLnN0eWxlLmhlaWdodCA9IGhlaWdodCArICdweCc7XG5cblx0XHR2YXIgc2NhbGUgPSBoZWlnaHQgLyBmb250LnVuaXRzUGVyRW07XG5cdFx0dmFyIHdpZHRoID0gZ2x5cGguYWR2YW5jZVdpZHRoICogc2NhbGUgKyAwLjUgfCAwO1xuXG5cdFx0d2lkdGggKz0gMjtcblx0XHRoZWlnaHQgKz0gMjtcblxuXHRcdGNhbnZhcy53aWR0aCA9IHdpZHRoICogZHByO1xuXHRcdGNhbnZhcy5zdHlsZS53aWR0aCA9IHdpZHRoICsgJ3B4JztcblxuXHRcdGN0eC5maWxsU3R5bGUgPSBUaGVtZS5jO1xuXHRcdG1lLmRyYXcoKTtcblx0fTtcblxuXHRpZiAoZHApIGRwLm9uKCdyZXNpemUnLCB0aGlzLnJlc2l6ZSk7XG5cblx0dGhpcy5zZXRTaXplID0gZnVuY3Rpb24ocykge1xuXHRcdHNpemUgPSBzO1xuXHRcdHRoaXMucmVzaXplKCk7XG5cdH07XG5cblx0dGhpcy5zZXRJY29uID0gZnVuY3Rpb24oaWNvbikge1xuXHRcdG1lLmljb24gPSBpY29uO1xuXG5cdFx0aWYgKCFmb250LmZvbnRzW2ljb25dKSBjb25zb2xlLndhcm4oJ0ZvbnQgaWNvbiBub3QgZm91bmQhJyk7XG5cdFx0dGhpcy5yZXNpemUoKTtcblx0fTtcblxuXHR0aGlzLm9uQ2xpY2sgPSBmdW5jdGlvbihlKSB7XG5cdFx0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSk7XG5cdH07XG5cblx0dmFyIExPTkdfSE9MRF9EVVJBVElPTiA9IDUwMDtcblx0dmFyIGxvbmdIb2xkVGltZXI7XG5cblx0dGhpcy5vbkxvbmdIb2xkID0gZnVuY3Rpb24oZikge1xuXHRcdC8vIG5vdCBtb3N0IGVsYWdlbnQgYnV0IG9oIHdlbGxzLlxuXHRcdGZ1bmN0aW9uIHN0YXJ0SG9sZChlKSB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0bG9uZ0hvbGRUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmIChsb25nSG9sZFRpbWVyKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ0xPTkcgSE9MRC1FRCEnKTtcblx0XHRcdFx0XHRmKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIExPTkdfSE9MRF9EVVJBVElPTik7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gY2xlYXJMb25nSG9sZFRpbWVyKCkge1xuXHRcdFx0Y2xlYXJUaW1lb3V0KGxvbmdIb2xkVGltZXIpO1xuXHRcdH1cblx0XHRcblx0XHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgc3RhcnRIb2xkKTtcblx0XHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHN0YXJ0SG9sZCk7XG5cdFx0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBjbGVhckxvbmdIb2xkVGltZXIpO1xuXHRcdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIGNsZWFyTG9uZ0hvbGRUaW1lcik7XG5cdFx0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgY2xlYXJMb25nSG9sZFRpbWVyKTtcblx0fTtcblxuXHR0aGlzLnNldFRpcCA9IGZ1bmN0aW9uKHRpcCkge1xuXHRcdHRvb2x0aXAgPSB0aXA7XG5cdH07XG5cblx0dmFyIGJvcmRlcnMgPSB7XG5cdFx0Ym9yZGVyOiAnMXB4IHNvbGlkICcgKyBUaGVtZS5iLFxuXHRcdC8vIGJveFNoYWRvdzogVGhlbWUuYiArICcgMXB4IDFweCdcblx0fTtcblxuXHR2YXIgbm9fYm9yZGVycyA9IHtcblx0XHRib3JkZXI6ICcxcHggc29saWQgdHJhbnNwYXJlbnQnLFxuXHRcdC8vIGJveFNoYWRvdzogJ25vbmUnXG5cdH07XG5cblx0dmFyIG5vcm1hbCA9ICdub25lJzsgLy8gVGhlbWUuYjtcblx0dmFyIHVwID0gVGhlbWUuYztcblx0dmFyIGRvd24gPSBUaGVtZS5iO1xuXG5cdGJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kID0gbm9ybWFsO1xuXHRzdHlsZShidXR0b24sIG5vX2JvcmRlcnMpO1xuXG5cdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBmdW5jdGlvbigpIHtcblx0XHQvLyBidXR0b24uc3R5bGUuYmFja2dyb3VuZCA9IHVwO1xuXHRcdHN0eWxlKGJ1dHRvbiwgYm9yZGVycyk7XG5cdFx0XG5cdFx0Y3R4LmZpbGxTdHlsZSA9IFRoZW1lLmQ7XG5cdFx0Ly8gbWUuZHJvcHNoYWRvdyA9IHRydWU7XG5cdFx0Y3R4LnNoYWRvd0NvbG9yID0gVGhlbWUuYjtcblx0XHRjdHguc2hhZG93Qmx1ciA9IDAuNSAqIGRwcjtcblx0XHRjdHguc2hhZG93T2Zmc2V0WCA9IDEgKiBkcHI7XG5cdFx0Y3R4LnNoYWRvd09mZnNldFkgPSAxICogZHByO1xuXHRcdG1lLmRyYXcoKTtcblxuXHRcdGlmICh0b29sdGlwICYmIGRwKSBkcC5maXJlKCdzdGF0dXMnLCAnYnV0dG9uOiAnICsgdG9vbHRpcCk7XG5cdH0pO1xuXG5cdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBmdW5jdGlvbigpIHtcblx0XHRidXR0b24uc3R5bGUuYmFja2dyb3VuZCA9IGRvd247XG5cdFx0Ly8gY3R4LmZpbGxTdHlsZSA9IFRoZW1lLmI7XG5cdFx0Ly8gbWUuZHJhdygpO1xuXHR9KTtcblxuXHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGZ1bmN0aW9uKCkge1xuXHRcdC8vIGN0eC5maWxsU3R5bGUgPSBUaGVtZS5kO1xuXHRcdGJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kID0gbm9ybWFsO1xuXHRcdHN0eWxlKGJ1dHRvbiwgYm9yZGVycyk7XG5cdFx0Ly8gbWUuZHJhdygpO1xuXHR9KTtcblxuXHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBmdW5jdGlvbigpIHtcblx0XHQvLyBjdHguZmlsbFN0eWxlID0gVGhlbWUuYztcblx0XHRcblxuXHRcdGJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kID0gbm9ybWFsO1xuXHRcdHN0eWxlKGJ1dHRvbiwgbm9fYm9yZGVycyk7XG5cdFx0bWUuZHJvcHNoYWRvdyA9IGZhbHNlO1xuXHRcdGN0eC5maWxsU3R5bGUgPSBUaGVtZS5jO1xuXHRcdGN0eC5zaGFkb3dDb2xvciA9IG51bGw7XG5cdFx0Y3R4LnNoYWRvd0JsdXIgPSAwO1xuXHRcdGN0eC5zaGFkb3dPZmZzZXRYID0gMDtcblx0XHRjdHguc2hhZG93T2Zmc2V0WSA9IDA7XG5cdFx0bWUuZHJhdygpO1xuXHR9KTtcblxuXHRpZiAoaWNvbikgdGhpcy5zZXRJY29uKGljb24pO1xufVxuXG5JY29uQnV0dG9uLnByb3RvdHlwZS5DTURfTUFQID0ge1xuXHRNOiAnbW92ZVRvJyxcblx0TDogJ2xpbmVUbycsXG5cdFE6ICdxdWFkcmF0aWNDdXJ2ZVRvJyxcblx0QzogJ2JlemllckN1cnZlVG8nLFxuXHRaOiAnY2xvc2VQYXRoJ1xufTtcblxuSWNvbkJ1dHRvbi5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uKCkge1xuXHRpZiAoIXRoaXMuaWNvbikgcmV0dXJuO1xuXG5cdHZhciBjdHggPSB0aGlzLmN0eDtcblxuXHR2YXIgZ2x5cGggPSBmb250LmZvbnRzW3RoaXMuaWNvbl07XG5cblx0dmFyIGhlaWdodCA9IHRoaXMuc2l6ZTtcblx0dmFyIGRwciA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvO1xuXHR2YXIgc2NhbGUgPSBoZWlnaHQgLyBmb250LnVuaXRzUGVyRW0gKiBkcHI7XG5cdHZhciBwYXRoX2NvbW1hbmRzID0gIGdseXBoLmNvbW1hbmRzLnNwbGl0KCcgJyk7XG5cblx0Y3R4LnNhdmUoKTtcblx0Y3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCAqIGRwciwgdGhpcy5jYW52YXMuaGVpZ2h0ICogZHByKTtcblxuXHRpZiAodGhpcy5kcm9wc2hhZG93KSB7XG5cdFx0Y3R4LnNhdmUoKTtcblx0XHRjdHguZmlsbFN0eWxlID0gVGhlbWUuYjtcblx0XHRjdHgudHJhbnNsYXRlKDEuNSAqIGRwciwgMS41ICogZHByKTtcblx0XHRjdHguc2NhbGUoc2NhbGUsIC1zY2FsZSk7XG5cdFx0Y3R4LnRyYW5zbGF0ZSgwICwgLWZvbnQuYXNjZW5kZXIpO1xuXHRcdGN0eC5iZWdpblBhdGgoKTtcblxuXHRcdGZvciAodmFyIGkgPSAwLCBpbCA9IHBhdGhfY29tbWFuZHMubGVuZ3RoOyBpIDwgaWw7IGkrKykge1xuXHRcdFx0dmFyIGNtZHMgPSBwYXRoX2NvbW1hbmRzW2ldLnNwbGl0KCcsJyk7XG5cdFx0XHR2YXIgcGFyYW1zID0gY21kcy5zbGljZSgxKTtcblxuXHRcdFx0Y3R4W3RoaXMuQ01EX01BUFtjbWRzWzBdXV0uYXBwbHkoY3R4LCBwYXJhbXMpO1xuXHRcdH1cblx0XHRjdHguZmlsbCgpO1xuXHRcdGN0eC5yZXN0b3JlKCk7XG5cdH1cblxuXHRjdHguc2NhbGUoc2NhbGUsIC1zY2FsZSk7XG5cdGN0eC50cmFuc2xhdGUoMCwgLWZvbnQuYXNjZW5kZXIpO1xuXHRjdHguYmVnaW5QYXRoKCk7XG5cblx0Zm9yICh2YXIgaSA9IDAsIGlsID0gcGF0aF9jb21tYW5kcy5sZW5ndGg7IGkgPCBpbDsgaSsrKSB7XG5cdFx0dmFyIGNtZHMgPSBwYXRoX2NvbW1hbmRzW2ldLnNwbGl0KCcsJyk7XG5cdFx0dmFyIHBhcmFtcyA9IGNtZHMuc2xpY2UoMSk7XG5cblx0XHRjdHhbdGhpcy5DTURfTUFQW2NtZHNbMF1dXS5hcHBseShjdHgsIHBhcmFtcyk7XG5cdH1cblx0Y3R4LmZpbGwoKTtcblx0Y3R4LnJlc3RvcmUoKTtcblxuXHQvKlxuXHR2YXIgdHJpYW5nbGUgPSBoZWlnaHQgLyAzICogZHByO1xuXHRjdHguc2F2ZSgpO1xuXHQvLyBjdHgudHJhbnNsYXRlKGRwciAqIDIsIDApO1xuXHQvLyBjdHguZmlsbFJlY3QodGhpcy5jYW52YXMud2lkdGggLSB0cmlhbmdsZSwgdGhpcy5jYW52YXMuaGVpZ2h0IC0gdHJpYW5nbGUsIHRyaWFuZ2xlLCB0cmlhbmdsZSk7XG5cdGN0eC5iZWdpblBhdGgoKTtcblx0Y3R4Lm1vdmVUbyh0aGlzLmNhbnZhcy53aWR0aCAtIHRyaWFuZ2xlLCB0aGlzLmNhbnZhcy5oZWlnaHQgLSB0cmlhbmdsZSAvIDIpO1xuXHRjdHgubGluZVRvKHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQgLSB0cmlhbmdsZSAvIDIpO1xuXHRjdHgubGluZVRvKHRoaXMuY2FudmFzLndpZHRoIC0gdHJpYW5nbGUgLyAyLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuXHRjdHguZmlsbCgpO1xuXHRjdHgucmVzdG9yZSgpO1xuXHQqL1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBJY29uQnV0dG9uOyIsInZhciBUaGVtZSA9IHJlcXVpcmUoJy4vdGhlbWUnKSxcblx0RG8gPSByZXF1aXJlKCdkby5qcycpLFxuXHRoYW5kbGVEcmFnID0gcmVxdWlyZSgnLi91dGlsX2hhbmRsZV9kcmFnJyksXG5cdHN0eWxlID0gcmVxdWlyZSgnLi91dGlscycpLnN0eWxlLFxuXHRmaXJzdERlZmluZWQgPSByZXF1aXJlKCcuL3V0aWxzJykuZmlyc3REZWZpbmVkXG5cdDtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLy8gTnVtYmVyVUlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuZnVuY3Rpb24gTnVtYmVyVUkoY29uZmlnKSB7XG5cdGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcblx0dmFyIG1pbiA9IGNvbmZpZy5taW4gPT09IHVuZGVmaW5lZCA/IC1JbmZpbml0eSA6IGNvbmZpZy5taW47XG5cblx0Ly8gY29uZmlnLnhzdGVwIGFuZCBjb25maWcueXN0ZXAgYWxsb3cgY29uZmlndXJpbmcgYWRqdXN0bWVudFxuXHQvLyBzcGVlZCBhY3Jvc3MgZWFjaCBheGlzLlxuXHQvLyBjb25maWcud2hlZWxTdGVwIGFuZCBjb25maWcud2hlZWxTdGVwRmluZSBhbGxvdyBjb25maWd1cmluZ1xuXHQvLyBhZGp1c3RtZW50IHNwZWVkIGZvciBtb3VzZXdoZWVsLCBhbmQgbW91c2V3aGVlbCB3aGlsZSBob2xkaW5nIDxhbHQ+XG5cblx0Ly8gSWYgb25seSBjb25maWcuc3RlcCBpcyBzcGVjaWZpZWQsIGFsbCBvdGhlciBhZGp1c3RtZW50IHNwZWVkc1xuXHQvLyBhcmUgc2V0IHRvIHRoZSBzYW1lIHZhbHVlLlxuXHR2YXIgeHN0ZXAgPSBmaXJzdERlZmluZWQoY29uZmlnLnhzdGVwLCBjb25maWcuc3RlcCwgMC4wMDEpO1xuXHR2YXIgeXN0ZXAgPSBmaXJzdERlZmluZWQoY29uZmlnLnlzdGVwLCBjb25maWcuc3RlcCwgMC4xKTtcblx0dmFyIHdoZWVsU3RlcCA9IGZpcnN0RGVmaW5lZChjb25maWcud2hlZWxTdGVwLCB5c3RlcCk7XG5cdHZhciB3aGVlbFN0ZXBGaW5lID0gZmlyc3REZWZpbmVkKGNvbmZpZy53aGVlbFN0ZXBGaW5lLCB4c3RlcCk7XG5cblx0dmFyIHByZWNpc2lvbiA9IGNvbmZpZy5wcmVjaXNpb24gfHwgMztcblx0Ly8gUmFuZ2Vcblx0Ly8gTWF4XG5cblx0dmFyIHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXHQvLyBzcGFuLnR5cGUgPSAnbnVtYmVyJzsgLy8gc3Bpbm5lclxuXHRcblx0c3R5bGUoc3Bhbiwge1xuXHRcdHRleHRBbGlnbjogJ2NlbnRlcicsXG5cdFx0Zm9udFNpemU6ICcxMHB4Jyxcblx0XHRwYWRkaW5nOiAnMXB4Jyxcblx0XHRjdXJzb3I6ICducy1yZXNpemUnLFxuXHRcdHdpZHRoOiAnNDBweCcsXG5cdFx0bWFyZ2luOiAwLFxuXHRcdG1hcmdpblJpZ2h0OiAnMTBweCcsXG5cdFx0YXBwZWFyYW5jZTogJ25vbmUnLFxuXHRcdG91dGxpbmU6ICdub25lJyxcblx0XHRib3JkZXI6IDAsXG5cdFx0YmFja2dyb3VuZDogJ25vbmUnLFxuXHRcdGJvcmRlckJvdHRvbTogJzFweCBkb3R0ZWQgJysgVGhlbWUuYyxcblx0XHRjb2xvcjogVGhlbWUuY1xuXHR9KTtcblxuXHR2YXIgbWUgPSB0aGlzO1xuXHR2YXIgc3RhdGUsIHZhbHVlID0gMCwgdW5jaGFuZ2VkX3ZhbHVlO1xuXG5cdHRoaXMub25DaGFuZ2UgPSBuZXcgRG8oKTtcblxuXHRzcGFuLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uKGUpIHtcblx0XHRjb25zb2xlLmxvZygnaW5wdXQgY2hhbmdlZCcsIHNwYW4udmFsdWUpO1xuXHRcdHZhbHVlID0gcGFyc2VGbG9hdChzcGFuLnZhbHVlLCAxMCk7XG5cblx0XHRmaXJlQ2hhbmdlKCk7XG5cdH0pO1xuXG5cdC8vIEFsbG93IGtleWRvd24gcHJlc3NlcyBpbiBpbnB1dHMsIGRvbid0IGFsbG93IHBhcmVudCB0byBibG9jayB0aGVtXG5cdHNwYW4uYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uKGUpIHtcblx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuXHR9KVxuXG5cdHNwYW4uYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBmdW5jdGlvbihlKSB7XG5cdFx0c3Bhbi5zZXRTZWxlY3Rpb25SYW5nZSgwLCBzcGFuLnZhbHVlLmxlbmd0aCk7XG5cdH0pXG5cblx0c3Bhbi5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIGZ1bmN0aW9uKGUpIHtcblx0XHQvLyBEaXNyZWdhcmQgcGl4ZWwvbGluZS9wYWdlIHNjcm9sbGluZyBhbmQganVzdFxuXHRcdC8vIHVzZSBldmVudCBkaXJlY3Rpb24uXG5cdFx0dmFyIGluYyA9IGUuZGVsdGFZID4gMD8gMSA6IC0xO1xuXHRcdGlmKGUuYWx0S2V5KSB7XG5cdFx0XHRpbmMgKj0gd2hlZWxTdGVwRmluZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aW5jICo9IHdoZWVsU3RlcDtcblx0XHR9XG5cdFx0dmFsdWUgPSBjbGFtcCh2YWx1ZSArIGluYyk7XG5cdFx0ZmlyZUNoYW5nZSgpO1xuXHR9KVxuXG5cdGhhbmRsZURyYWcoc3Bhbiwgb25Eb3duLCBvbk1vdmUsIG9uVXApO1xuXG5cdGZ1bmN0aW9uIGNsYW1wKHZhbHVlKSB7XG5cdFx0cmV0dXJuIE1hdGgubWF4KG1pbiwgdmFsdWUpO1xuXHR9XG5cblx0ZnVuY3Rpb24gb25VcChlKSB7XG5cdFx0aWYgKGUubW92ZWQpIGZpcmVDaGFuZ2UoKTtcblx0XHRlbHNlIHtcblx0XHRcdC8vIHNpbmdsZSBjbGlja1xuXHRcdFx0c3Bhbi5mb2N1cygpO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIG9uTW92ZShlKSB7XG5cdFx0dmFyIGR4ID0gZS5keDtcblx0XHR2YXIgZHkgPSBlLmR5O1xuXHRcblx0XHR2YWx1ZSA9IHVuY2hhbmdlZF92YWx1ZSArIChkeCAqIHhzdGVwKSArIChkeSAqIC15c3RlcCk7XG5cblx0XHR2YWx1ZSA9IGNsYW1wKHZhbHVlKTtcblxuXHRcdC8vIHZhbHVlID0gK3ZhbHVlLnRvRml4ZWQocHJlY2lzaW9uKTsgLy8gb3IgdG9GaXhlZCB0b1ByZWNpc2lvblxuXHRcdG1lLm9uQ2hhbmdlLmZpcmUodmFsdWUsIHRydWUpO1xuXHR9XG5cblx0ZnVuY3Rpb24gb25Eb3duKGUpIHtcblx0XHR1bmNoYW5nZWRfdmFsdWUgPSB2YWx1ZTtcblx0fVxuXG5cdGZ1bmN0aW9uIGZpcmVDaGFuZ2UoKSB7XG5cdFx0bWUub25DaGFuZ2UuZmlyZSh2YWx1ZSk7XG5cdH1cblxuXHR0aGlzLmRvbSA9IHNwYW47XG5cblx0Ly8gcHVibGljXG5cdHRoaXMuc2V0VmFsdWUgPSBmdW5jdGlvbih2KSB7XG5cdFx0dmFsdWUgPSB2O1xuXHRcdHNwYW4udmFsdWUgPSB2YWx1ZS50b0ZpeGVkKHByZWNpc2lvbik7XG5cdH07XG5cblx0dGhpcy5wYWludCA9IGZ1bmN0aW9uKCkge1xuXHRcdGlmICh2YWx1ZSAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICE9PSBzcGFuKSB7XG5cdFx0XHRzcGFuLnZhbHVlID0gdmFsdWUudG9GaXhlZChwcmVjaXNpb24pO1xuXHRcdH1cblx0fTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBOdW1iZXJVSTtcbiIsInZhciBTaW1wbGVFdmVudCA9IHJlcXVpcmUoJ2RvLmpzJyk7XG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbi8vICoqKioqKioqKiogY2xhc3M6IFNjcm9sbEJhciAqKioqKioqKioqKioqKioqKiogLy9cbi8qXG5cdFNpbXBsZSBVSSB3aWRnZXQgdGhhdCBkaXNwbGF5cyBhIHNjcm9sbHRyYWNrIFxuXHRhbmQgc2xpZGVyLCB0aGF0IGZpcmVzIHNvbWUgc2Nyb2xsIGV2ZW50c1xuKi9cbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cbnZhciBzY3JvbGx0cmFja19zdHlsZSA9IHtcblx0Ly8gZmxvYXQ6ICdyaWdodCcsXG5cdHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuXHQvLyByaWdodDogJzAnLFxuXHQvLyB0b3A6ICcwJyxcblx0Ly8gYm90dG9tOiAnMCcsXG5cdGJhY2tncm91bmQ6ICctd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIHJpZ2h0IHRvcCwgY29sb3Itc3RvcCgwLCByZ2IoMjksMjksMjkpKSwgY29sb3Itc3RvcCgwLjYsIHJnYig1MCw1MCw1MCkpICknLFxuXHRib3JkZXI6ICcxcHggc29saWQgcmdiKDI5LCAyOSwgMjkpJyxcblx0Ly8gekluZGV4OiAnMTAwMCcsXG5cdHRleHRBbGlnbjogJ2NlbnRlcicsXG5cdGN1cnNvcjogJ3BvaW50ZXInXG59O1xuXG52YXIgc2Nyb2xsYmFyX3N0eWxlID0ge1xuXHRiYWNrZ3JvdW5kOiAnLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCByaWdodCB0b3AsIGNvbG9yLXN0b3AoMC4yLCByZ2IoODgsODgsODgpKSwgY29sb3Itc3RvcCgwLjYsIHJnYig2NCw2NCw2NCkpICknLFxuXHRib3JkZXI6ICcxcHggc29saWQgcmdiKDI1LDI1LDI1KScsXG5cdC8vIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuXHRwb3NpdGlvbjogJ3JlbGF0aXZlJyxcblx0Ym9yZGVyUmFkaXVzOiAnNnB4J1xufTtcblxuZnVuY3Rpb24gU2Nyb2xsQmFyKGgsIHcsIGRpc3BhdGNoZXIpIHtcblxuXHR2YXIgU0NST0xMQkFSX1dJRFRIID0gdyA/IHcgOiAxMjtcblx0dmFyIFNDUk9MTEJBUl9NQVJHSU4gPSAzO1xuXHR2YXIgU0NST0xMX1dJRFRIID0gU0NST0xMQkFSX1dJRFRIICsgU0NST0xMQkFSX01BUkdJTiAqIDI7XG5cdHZhciBNSU5fQkFSX0xFTkdUSCA9IDI1O1xuXG5cdHZhciBzY3JvbGx0cmFjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHR1dGlscy5zdHlsZShzY3JvbGx0cmFjaywgc2Nyb2xsdHJhY2tfc3R5bGUpO1xuXG5cdHZhciBzY3JvbGx0cmFja0hlaWdodCA9IGggLSAyO1xuXHRzY3JvbGx0cmFjay5zdHlsZS5oZWlnaHQgPSBzY3JvbGx0cmFja0hlaWdodCArICdweCc7XG5cdHNjcm9sbHRyYWNrLnN0eWxlLndpZHRoID0gU0NST0xMX1dJRFRIICsgJ3B4Jzs7XG5cblx0Ly8gdmFyIHNjcm9sbFRvcCA9IDA7XG5cdHZhciBzY3JvbGxiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0Ly8gc2Nyb2xsYmFyLmNsYXNzTmFtZSA9ICdzY3JvbGxiYXInO1xuXHR1dGlscy5zdHlsZShzY3JvbGxiYXIsIHNjcm9sbGJhcl9zdHlsZSk7XG5cdHNjcm9sbGJhci5zdHlsZS53aWR0aCA9IFNDUk9MTEJBUl9XSURUSCArICdweCc7XG5cdHNjcm9sbGJhci5zdHlsZS5oZWlnaHQgPSBoIC8gMjtcblx0c2Nyb2xsYmFyLnN0eWxlLnRvcCA9IDA7XG5cdHNjcm9sbGJhci5zdHlsZS5sZWZ0ID0gU0NST0xMQkFSX01BUkdJTiArICdweCc7IC8vIDA7IC8vU1xuXG5cdHNjcm9sbHRyYWNrLmFwcGVuZENoaWxkKHNjcm9sbGJhcik7XG5cblx0dmFyIG1lID0gdGhpcztcblxuXHR2YXIgYmFyX2xlbmd0aCwgYmFyX3k7XG5cblx0Ly8gU2V0cyBsZW5ndGhzIG9mIHNjcm9sbGJhciBieSBwZXJjZW50YWdlXG5cdHRoaXMuc2V0TGVuZ3RoID0gZnVuY3Rpb24obCkge1xuXHRcdC8vIGxpbWl0IDAuLjFcblx0XHRsID0gTWF0aC5tYXgoTWF0aC5taW4oMSwgbCksIDApO1xuXHRcdGwgKj0gc2Nyb2xsdHJhY2tIZWlnaHQ7XG5cdFx0YmFyX2xlbmd0aCA9IE1hdGgubWF4KGwsIE1JTl9CQVJfTEVOR1RIKTtcblx0XHRzY3JvbGxiYXIuc3R5bGUuaGVpZ2h0ID0gYmFyX2xlbmd0aCArICdweCc7XG5cdH07XG5cblx0dGhpcy5zZXRIZWlnaHQgPSBmdW5jdGlvbihoZWlnaHQpIHtcblx0XHRoID0gaGVpZ2h0O1xuXG5cdFx0c2Nyb2xsdHJhY2tIZWlnaHQgPSBoIC0gMjtcblx0XHRzY3JvbGx0cmFjay5zdHlsZS5oZWlnaHQgPSBzY3JvbGx0cmFja0hlaWdodCArICdweCcgO1xuXHR9O1xuXG5cdC8vIE1vdmVzIHNjcm9sbGJhciB0byBwb3NpdGlvbiBieSBQZXJjZW50YWdlXG5cdHRoaXMuc2V0UG9zaXRpb24gPSBmdW5jdGlvbihwKSB7XG5cdFx0cCA9IE1hdGgubWF4KE1hdGgubWluKDEsIHApLCAwKTtcblx0XHR2YXIgZW1wdHlUcmFjayA9IHNjcm9sbHRyYWNrSGVpZ2h0IC0gYmFyX2xlbmd0aDtcblx0XHRiYXJfeSA9IHAgKiBlbXB0eVRyYWNrO1xuXHRcdHNjcm9sbGJhci5zdHlsZS50b3AgPSBiYXJfeSArICdweCc7XG5cdH07XG5cblx0dGhpcy5zZXRMZW5ndGgoMSk7XG5cdHRoaXMuc2V0UG9zaXRpb24oMCk7XG5cdHRoaXMub25TY3JvbGwgPSBuZXcgU2ltcGxlRXZlbnQoKTtcblxuXHR2YXIgbW91c2VfZG93bl9ncmlwO1xuXG5cdGZ1bmN0aW9uIG9uRG93bihldmVudCkge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRpZiAoZXZlbnQudGFyZ2V0ID09IHNjcm9sbGJhcikge1xuXHRcdFx0bW91c2VfZG93bl9ncmlwID0gZXZlbnQuY2xpZW50WTtcblx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW92ZSwgZmFsc2UpO1xuXHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uVXAsIGZhbHNlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKGV2ZW50LmNsaWVudFkgPCBiYXJfeSkge1xuXHRcdFx0XHRtZS5vblNjcm9sbC5maXJlKCdwYWdldXAnKTtcblx0XHRcdH0gZWxzZSBpZiAoZXZlbnQuY2xpZW50WSA+IChiYXJfeSArIGJhcl9sZW5ndGgpKSB7XG5cdFx0XHRcdG1lLm9uU2Nyb2xsLmZpcmUoJ3BhZ2Vkb3duJyk7XG5cdFx0XHR9XG5cdFx0XHQvLyBpZiB3YW50IHRvIGRyYWcgc2Nyb2xsZXIgdG8gZW1wdHkgdHJhY2sgaW5zdGVhZFxuXHRcdFx0Ly8gbWUuc2V0UG9zaXRpb24oZXZlbnQuY2xpZW50WSAvIChzY3JvbGx0cmFja0hlaWdodCAtIDEpKTtcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBvbk1vdmUoZXZlbnQpIHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0Ly8gZXZlbnQudGFyZ2V0ID09IHNjcm9sbGJhclxuXHRcdHZhciBlbXB0eVRyYWNrID0gc2Nyb2xsdHJhY2tIZWlnaHQgLSBiYXJfbGVuZ3RoO1xuXHRcdHZhciBzY3JvbGx0byA9IChldmVudC5jbGllbnRZIC0gbW91c2VfZG93bl9ncmlwKSAvIGVtcHR5VHJhY2s7XG5cblx0XHQvLyBjbGFtcCBsaW1pdHMgdG8gMC4uMVxuXHRcdGlmIChzY3JvbGx0byA+IDEpIHNjcm9sbHRvID0gMTtcblx0XHRpZiAoc2Nyb2xsdG8gPCAwKSBzY3JvbGx0byA9IDA7XG5cdFx0bWUuc2V0UG9zaXRpb24oc2Nyb2xsdG8pO1xuXHRcdG1lLm9uU2Nyb2xsLmZpcmUoJ3Njcm9sbHRvJywgc2Nyb2xsdG8pO1xuXHR9XG5cblx0ZnVuY3Rpb24gb25VcChldmVudCkge1xuXHRcdG9uTW92ZShldmVudCk7XG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3ZlLCBmYWxzZSk7XG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uVXAsIGZhbHNlKTtcblx0fVxuXG5cdHNjcm9sbHRyYWNrLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG9uRG93biwgZmFsc2UpO1xuXHR0aGlzLmRvbSA9IHNjcm9sbHRyYWNrO1xuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2Nyb2xsQmFyOyIsInZhciBwYWNrYWdlX2pzb24gPSByZXF1aXJlKCcuLi9wYWNrYWdlLmpzb24nKSxcblx0U2V0dGluZ3MgPSByZXF1aXJlKCcuL3NldHRpbmdzJyksXG5cdERvID0gcmVxdWlyZSgnZG8uanMnKTtcblxuLy8gRGF0YSBTdG9yZSB3aXRoIGEgc291cmNlIG9mIHRydXRoXG5mdW5jdGlvbiBEYXRhU3RvcmUoKSB7XG5cdHRoaXMuREVMSU1JVEVSID0gJzonO1xuXHR0aGlzLmJsYW5rKCk7XG5cdHRoaXMub25PcGVuID0gbmV3IERvKCk7XG5cdHRoaXMub25TYXZlID0gbmV3IERvKCk7XG5cblx0dGhpcy5saXN0ZW5lcnMgPSBbXTtcbn1cblxuRGF0YVN0b3JlLnByb3RvdHlwZS5hZGRMaXN0ZW5lciA9IGZ1bmN0aW9uKHBhdGgsIGNiKSB7XG5cdHRoaXMubGlzdGVuZXJzLnB1c2goe1xuXHRcdHBhdGg6IHBhdGgsXG5cdFx0Y2FsbGJhY2s6IGNiXG5cdH0pO1xufTtcblxuRGF0YVN0b3JlLnByb3RvdHlwZS5ibGFuayA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgZGF0YSA9IHt9O1xuXG5cdGRhdGEudmVyc2lvbiA9IHBhY2thZ2VfanNvbi52ZXJzaW9uO1xuXHRkYXRhLm1vZGlmaWVkID0gbmV3IERhdGUoKS50b1N0cmluZygpO1xuXHRkYXRhLnRpdGxlID0gJ1VudGl0bGVkJztcblxuXHRkYXRhLnVpID0ge1xuXHRcdGN1cnJlbnRUaW1lOiAwLFxuXHRcdHRvdGFsVGltZTogU2V0dGluZ3MuZGVmYXVsdF9sZW5ndGgsXG5cdFx0c2Nyb2xsVGltZTogMCxcblx0XHR0aW1lU2NhbGU6IFNldHRpbmdzLnRpbWVfc2NhbGVcblx0fTtcblxuXHRkYXRhLmxheWVycyA9IFtdO1xuXG5cdHRoaXMuZGF0YSA9IGRhdGE7XG59O1xuXG5EYXRhU3RvcmUucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgZGF0YSA9IHRoaXMuZGF0YTtcblxuXHRkYXRhLnZlcnNpb24gPSBwYWNrYWdlX2pzb24udmVyc2lvbjtcblx0ZGF0YS5tb2RpZmllZCA9IG5ldyBEYXRlKCkudG9TdHJpbmcoKTtcbn07XG5cbkRhdGFTdG9yZS5wcm90b3R5cGUuc2V0SlNPTlN0cmluZyA9IGZ1bmN0aW9uKGRhdGEpIHtcblx0dGhpcy5kYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcbn07XG5cbkRhdGFTdG9yZS5wcm90b3R5cGUuc2V0SlNPTiA9IGZ1bmN0aW9uKGRhdGEpIHtcblx0dGhpcy5kYXRhID0gZGF0YTtcbn07XG5cbkRhdGFTdG9yZS5wcm90b3R5cGUuZ2V0SlNPTlN0cmluZyA9IGZ1bmN0aW9uKGZvcm1hdCkge1xuXHRyZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy5kYXRhLCBudWxsLCBmb3JtYXQpO1xufTtcblxuRGF0YVN0b3JlLnByb3RvdHlwZS5nZXRWYWx1ZSA9IGZ1bmN0aW9uKHBhdGhzKSB7XG5cdHZhciBkZXNjZW5kID0gcGF0aHMuc3BsaXQodGhpcy5ERUxJTUlURVIpO1xuXHR2YXIgcmVmZXJlbmNlID0gdGhpcy5kYXRhO1xuXHRmb3IgKHZhciBpID0gMCwgaWwgPSBkZXNjZW5kLmxlbmd0aDsgaSA8IGlsOyBpKyspIHtcblx0XHR2YXIgcGF0aCA9IGRlc2NlbmRbaV07XG5cdFx0aWYgKHJlZmVyZW5jZVtwYXRoXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRjb25zb2xlLndhcm4oJ0NhbnQgZmluZCAnICsgcGF0aHMpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRyZWZlcmVuY2UgPSByZWZlcmVuY2VbcGF0aF07XG5cdH1cblx0cmV0dXJuIHJlZmVyZW5jZTtcbn07XG5cbkRhdGFTdG9yZS5wcm90b3R5cGUuc2V0VmFsdWUgPSBmdW5jdGlvbihwYXRocywgdmFsdWUpIHtcbiAgY29uc29sZS5sb2cocGF0aHMpXG5cdHZhciBkZXNjZW5kID0gcGF0aHMuc3BsaXQodGhpcy5ERUxJTUlURVIpO1xuXHR2YXIgcmVmZXJlbmNlID0gdGhpcy5kYXRhO1xuXHRmb3IgKHZhciBpID0gMCwgaWwgPSBkZXNjZW5kLmxlbmd0aCAtIDE7IHBhdGggPSBkZXNjZW5kW2ldLCBpIDwgaWwgOyBpKyspIHtcblx0XHRyZWZlcmVuY2UgPSByZWZlcmVuY2VbcGF0aF07XG5cdH1cblx0cmVmZXJlbmNlW3BhdGhdID0gdmFsdWU7XG5cblx0dGhpcy5saXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbihsKSB7XG5cdFx0aWYgKHBhdGhzLmluZGV4T2YobC5wYXRoKSA+IC0xKSBsLmNhbGxiYWNrKCk7XG5cdH0pXG59O1xuXG5EYXRhU3RvcmUucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKHBhdGgsIHN1ZmZpeCkge1xuXHRpZiAoc3VmZml4KSBwYXRoID0gc3VmZml4ICsgdGhpcy5ERUxJTUlURVIgKyBwYXRoO1xuXHRyZXR1cm4gbmV3IERhdGFQcm94KHRoaXMsIHBhdGgpO1xufTtcblxuZnVuY3Rpb24gRGF0YVByb3goc3RvcmUsIHBhdGgpIHtcblx0dGhpcy5wYXRoID0gcGF0aDtcblx0dGhpcy5zdG9yZSA9IHN0b3JlO1xufVxuXG5EYXRhUHJveC5wcm90b3R5cGUgPSB7XG5cdGdldCB2YWx1ZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5zdG9yZS5nZXRWYWx1ZSh0aGlzLnBhdGgpO1xuXHR9LFxuXHRzZXQgdmFsdWUodmFsKSB7XG5cdFx0dGhpcy5zdG9yZS5zZXRWYWx1ZSh0aGlzLnBhdGgsIHZhbCk7XG5cdH1cbn07XG5cbkRhdGFQcm94LnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbihwYXRoKSB7XG5cdHJldHVybiB0aGlzLnN0b3JlLmdldChwYXRoLCB0aGlzLnBhdGgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBEYXRhU3RvcmU7XG4iLCIvKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vLyBEaXNwYXRjaGVyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbmZ1bmN0aW9uIERpc3BhdGNoZXIoKSB7XG5cblx0dmFyIGV2ZW50X2xpc3RlbmVycyA9IHtcblxuXHR9O1xuXG5cdGZ1bmN0aW9uIG9uKHR5cGUsIGxpc3RlbmVyKSB7XG5cdFx0aWYgKCEodHlwZSBpbiBldmVudF9saXN0ZW5lcnMpKSB7XG5cdFx0XHRldmVudF9saXN0ZW5lcnNbdHlwZV0gPSBbXTtcblx0XHR9XG5cdFx0dmFyIGxpc3RlbmVycyA9IGV2ZW50X2xpc3RlbmVyc1t0eXBlXTtcblx0XHRsaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG5cdH1cblxuXHRmdW5jdGlvbiBmaXJlKHR5cGUpIHtcblx0XHR2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG5cdFx0YXJncy5zaGlmdCgpO1xuXHRcdHZhciBsaXN0ZW5lcnMgPSBldmVudF9saXN0ZW5lcnNbdHlwZV07XG5cdFx0aWYgKCFsaXN0ZW5lcnMpIHJldHVybjtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGxpc3RlbmVyID0gbGlzdGVuZXJzW2ldO1xuXHRcdFx0bGlzdGVuZXIuYXBwbHkobGlzdGVuZXIsIGFyZ3MpO1xuXHRcdH1cblx0fVxuXG5cdHRoaXMub24gPSBvbjtcblx0dGhpcy5maXJlID0gZmlyZTtcblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERpc3BhdGNoZXI7IiwiZnVuY3Rpb24gaGFuZGxlRHJhZyhlbGVtZW50LCBvbmRvd24sIG9ubW92ZSwgb251cCwgZG93bl9jcml0ZXJpYSkge1xuXHR2YXIgcG9pbnRlciA9IG51bGw7XG5cdHZhciBib3VuZHMgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcblx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBvbk1vdXNlRG93bik7XG5cblx0ZnVuY3Rpb24gb25Nb3VzZURvd24oZSkge1xuXHRcdGhhbmRsZVN0YXJ0KGUpO1xuXG5cdFx0aWYgKGRvd25fY3JpdGVyaWEgJiYgIWRvd25fY3JpdGVyaWEocG9pbnRlcikpIHtcblx0XHRcdHBvaW50ZXIgPSBudWxsO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdFxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Nb3VzZVVwKTtcblx0XHRcblx0XHRvbmRvd24ocG9pbnRlcik7XG5cblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdH1cblx0XG5cdGZ1bmN0aW9uIG9uTW91c2VNb3ZlKGUpIHtcblx0XHRoYW5kbGVNb3ZlKGUpO1xuXHRcdG9ubW92ZShwb2ludGVyKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZVN0YXJ0KGUpIHtcblx0XHRib3VuZHMgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdHZhciBjdXJyZW50eCA9IGUuY2xpZW50WCwgY3VycmVudHkgPSBlLmNsaWVudFk7XG5cdFx0cG9pbnRlciA9IHtcblx0XHRcdHN0YXJ0eDogY3VycmVudHgsXG5cdFx0XHRzdGFydHk6IGN1cnJlbnR5LFxuXHRcdFx0eDogY3VycmVudHgsXG5cdFx0XHR5OiBjdXJyZW50eSxcblx0XHRcdGR4OiAwLFxuXHRcdFx0ZHk6IDAsXG5cdFx0XHRvZmZzZXR4OiBjdXJyZW50eCAtIGJvdW5kcy5sZWZ0LFxuXHRcdFx0b2Zmc2V0eTogY3VycmVudHkgLSBib3VuZHMudG9wLFxuXHRcdFx0bW92ZWQ6IGZhbHNlXG5cdFx0fTtcblx0fVxuXHRcblx0ZnVuY3Rpb24gaGFuZGxlTW92ZShlKSB7XG5cdFx0Ym91bmRzID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHR2YXIgY3VycmVudHggPSBlLmNsaWVudFgsXG5cdFx0Y3VycmVudHkgPSBlLmNsaWVudFksXG5cdFx0b2Zmc2V0eCA9IGN1cnJlbnR4IC0gYm91bmRzLmxlZnQsXG5cdFx0b2Zmc2V0eSA9IGN1cnJlbnR5IC0gYm91bmRzLnRvcDtcblx0XHRwb2ludGVyLnggPSBjdXJyZW50eDtcblx0XHRwb2ludGVyLnkgPSBjdXJyZW50eTtcblx0XHRwb2ludGVyLmR4ID0gZS5jbGllbnRYIC0gcG9pbnRlci5zdGFydHg7XG5cdFx0cG9pbnRlci5keSA9IGUuY2xpZW50WSAtIHBvaW50ZXIuc3RhcnR5O1xuXHRcdHBvaW50ZXIub2Zmc2V0eCA9IG9mZnNldHg7XG5cdFx0cG9pbnRlci5vZmZzZXR5ID0gb2Zmc2V0eTtcblxuXHRcdC8vIElmIHRoZSBwb2ludGVyIGR4L2R5IGlzIF9ldmVyXyBub24temVybywgdGhlbiBpdCdzIG1vdmVkXG5cdFx0cG9pbnRlci5tb3ZlZCA9IHBvaW50ZXIubW92ZWQgfHwgcG9pbnRlci5keCAhPT0gMCB8fCBwb2ludGVyLmR5ICE9PSAwO1xuXHR9XG5cdFxuXHRmdW5jdGlvbiBvbk1vdXNlVXAoZSkge1xuXHRcdGhhbmRsZU1vdmUoZSk7XG5cdFx0b251cChwb2ludGVyKTtcblx0XHRwb2ludGVyID0gbnVsbDtcblx0XHRcblx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2VVcCk7XG5cdH1cblxuXHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBvblRvdWNoU3RhcnQpO1xuXG5cdGZ1bmN0aW9uIG9uVG91Y2hTdGFydCh0ZSkge1xuXHRcdFxuXHRcdGlmICh0ZS50b3VjaGVzLmxlbmd0aCA9PSAxKSB7XG5cdFx0XHRcblx0XHRcdHZhciBlID0gdGUudG91Y2hlc1swXTtcblx0XHRcdGlmIChkb3duX2NyaXRlcmlhICYmICFkb3duX2NyaXRlcmlhKGUpKSByZXR1cm47XG5cdFx0XHR0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0aGFuZGxlU3RhcnQoZSk7XG5cdFx0XHRvbmRvd24ocG9pbnRlcik7XG5cdFx0fVxuXHRcdFxuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgb25Ub3VjaE1vdmUpO1xuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBvblRvdWNoRW5kKTtcblx0fVxuXHRcblx0ZnVuY3Rpb24gb25Ub3VjaE1vdmUodGUpIHtcblx0XHR2YXIgZSA9IHRlLnRvdWNoZXNbMF07XG5cdFx0b25Nb3VzZU1vdmUoZSk7XG5cdH1cblxuXHRmdW5jdGlvbiBvblRvdWNoRW5kKGUpIHtcblx0XHQvLyB2YXIgZSA9IGUudG91Y2hlc1swXTtcblx0XHRvbk1vdXNlVXAoZSk7XG5cdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBvblRvdWNoTW92ZSk7XG5cdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIG9uVG91Y2hFbmQpO1xuXHR9XG5cblxuXHR0aGlzLnJlbGVhc2UgPSBmdW5jdGlvbigpIHtcblx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG9uTW91c2VEb3duKTtcblx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBvblRvdWNoU3RhcnQpO1xuXHR9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhbmRsZURyYWc7XG4iLCIvKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vLyBUd2VlbnNcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxudmFyIFR3ZWVucyA9IHtcbi8qXG5cdG5vbmU6IGZ1bmN0aW9uKGspIHtcblx0XHRyZXR1cm4gMDtcblx0fSxcbiovXG5cdGxpbmVhcjogZnVuY3Rpb24oaykge1xuXHRcdHJldHVybiBrO1xuXHR9LFxuLypcblx0cXVhZEVhc2VJbjogZnVuY3Rpb24oaykge1xuXHRcdHJldHVybiBrICogaztcblx0fSxcblx0cXVhZEVhc2VPdXQ6IGZ1bmN0aW9uKGspIHtcblx0XHRyZXR1cm4gLSBrICogKCBrIC0gMiApO1xuXHR9LFxuXHRxdWFkRWFzZUluT3V0OiBmdW5jdGlvbihrKSB7XG5cdFx0aWYgKCAoIGsgKj0gMiApIDwgMSApIHJldHVybiAwLjUgKiBrICogaztcblx0XHRyZXR1cm4gLSAwLjUgKiAoIC0tayAqICggayAtIDIgKSAtIDEgKTtcblx0fVxuKi9cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVHdlZW5zOyIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8vIFVuZG8gTWFuYWdlclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5mdW5jdGlvbiBVbmRvU3RhdGUoc3RhdGUsIGRlc2NyaXB0aW9uKSB7XG5cdC8vIHRoaXMuc3RhdGUgPSBKU09OLnN0cmluZ2lmeShzdGF0ZSk7XG5cdHRoaXMuc3RhdGUgPSBzdGF0ZS5nZXRKU09OU3RyaW5nKCk7XG5cdHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbn1cblxuZnVuY3Rpb24gVW5kb01hbmFnZXIoZGlzcGF0Y2hlciwgbWF4KSB7XG5cdHRoaXMuZGlzcGF0Y2hlciA9IGRpc3BhdGNoZXI7XG5cdHRoaXMuTUFYX0lURU1TID0gbWF4IHx8IDEwMDtcblx0dGhpcy5jbGVhcigpO1xufVxuXG5VbmRvTWFuYWdlci5wcm90b3R5cGUuc2F2ZSA9IGZ1bmN0aW9uKHN0YXRlLCBzdXBwcmVzcykge1xuXHR2YXIgc3RhdGVzID0gdGhpcy5zdGF0ZXM7XG5cdHZhciBuZXh0X2luZGV4ID0gdGhpcy5pbmRleCArIDE7XG5cdHZhciB0b19yZW1vdmUgPSBzdGF0ZXMubGVuZ3RoIC0gbmV4dF9pbmRleDtcblx0c3RhdGVzLnNwbGljZShuZXh0X2luZGV4LCB0b19yZW1vdmUsIHN0YXRlKTtcblxuXHRpZiAoc3RhdGVzLmxlbmd0aCA+IHRoaXMuTUFYX0lURU1TKSB7XG5cdFx0c3RhdGVzLnNoaWZ0KCk7XG5cdH1cblxuXHR0aGlzLmluZGV4ID0gc3RhdGVzLmxlbmd0aCAtIDE7XG5cblx0Ly8gY29uc29sZS5sb2coJ1VuZG8gU3RhdGUgU2F2ZWQ6ICcsIHN0YXRlLmRlc2NyaXB0aW9uKTtcblx0aWYgKCFzdXBwcmVzcykgdGhpcy5kaXNwYXRjaGVyLmZpcmUoJ3N0YXRlOnNhdmUnLCBzdGF0ZS5kZXNjcmlwdGlvbik7XG59O1xuXG5VbmRvTWFuYWdlci5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbigpIHtcblx0dGhpcy5zdGF0ZXMgPSBbXTtcblx0dGhpcy5pbmRleCA9IC0xO1xuXHQvLyBGSVhNRTogbGVhdmUgZGVmYXVsdCBzdGF0ZSBvciBhbHdheXMgbGVhdmUgb25lIHN0YXRlP1xufTtcblxuVW5kb01hbmFnZXIucHJvdG90eXBlLmNhblVuZG8gPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXMuaW5kZXggPiAwO1xuXHQvLyAmJiB0aGlzLnN0YXRlcy5sZW5ndGggPiAxXG59O1xuXG5VbmRvTWFuYWdlci5wcm90b3R5cGUuY2FuUmVkbyA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcy5pbmRleCA8IHRoaXMuc3RhdGVzLmxlbmd0aCAtIDE7XG59O1xuXG5VbmRvTWFuYWdlci5wcm90b3R5cGUudW5kbyA9IGZ1bmN0aW9uKCkge1xuXHRpZiAodGhpcy5jYW5VbmRvKCkpIHtcblx0XHR0aGlzLmRpc3BhdGNoZXIuZmlyZSgnc3RhdHVzJywgJ1VuZG86ICcgKyB0aGlzLmdldCgpLmRlc2NyaXB0aW9uKTtcblx0XHR0aGlzLmluZGV4LS07XG5cdH0gZWxzZSB7XG5cdFx0dGhpcy5kaXNwYXRjaGVyLmZpcmUoJ3N0YXR1cycsICdOb3RoaW5nIHRvIHVuZG8nKTtcblx0fVxuXG5cdHJldHVybiB0aGlzLmdldCgpO1xufTtcblxuVW5kb01hbmFnZXIucHJvdG90eXBlLnJlZG8gPSBmdW5jdGlvbigpIHtcblx0aWYgKHRoaXMuY2FuUmVkbygpKSB7XG5cdFx0dGhpcy5pbmRleCsrO1xuXHRcdHRoaXMuZGlzcGF0Y2hlci5maXJlKCdzdGF0dXMnLCAnUmVkbzogJyArIHRoaXMuZ2V0KCkuZGVzY3JpcHRpb24pO1xuXHR9IGVsc2Uge1xuXHRcdHRoaXMuZGlzcGF0Y2hlci5maXJlKCdzdGF0dXMnLCAnTm90aGluZyB0byByZWRvJyk7XG5cdH1cblxuXHRyZXR1cm4gdGhpcy5nZXQoKTtcbn07XG5cblVuZG9NYW5hZ2VyLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXMuc3RhdGVzW3RoaXMuaW5kZXhdO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFVuZG9TdGF0ZTogVW5kb1N0YXRlLFxuXHRVbmRvTWFuYWdlcjogVW5kb01hbmFnZXJcbn07IiwidmFyXG5cdFR3ZWVucyA9IHJlcXVpcmUoJy4vdXRpbF90d2VlbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0U1RPUkFHRV9QUkVGSVg6ICd0aW1lbGluZXItJyxcblx0Wl9JTkRFWDogOTk5LFxuXHRmaXJzdERlZmluZWQ6IGZpcnN0RGVmaW5lZCxcblx0c3R5bGU6IHN0eWxlLFxuXHRzYXZlVG9GaWxlOiBzYXZlVG9GaWxlLFxuXHRvcGVuQXM6IG9wZW5Bcyxcblx0Zm9ybWF0X2ZyaWVuZGx5X3NlY29uZHM6IGZvcm1hdF9mcmllbmRseV9zZWNvbmRzLFxuXHRmaW5kVGltZWluTGF5ZXI6IGZpbmRUaW1laW5MYXllcixcblx0dGltZUF0TGF5ZXI6IHRpbWVBdExheWVyLFxuXHRwcm94eV9jdHg6IHByb3h5X2N0eCxcblx0aW5wdXRUeXBlOiBpbnB1dFR5cGVcbn07XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8vIFV0aWxzXG4vKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbmZ1bmN0aW9uIGZpcnN0RGVmaW5lZCgpIHtcblx0Zm9yKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdGlmKHR5cGVvZiBhcmd1bWVudHNbaV0gIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRyZXR1cm4gYXJndW1lbnRzW2ldO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBzdHlsZShlbGVtZW50LCB2YXJfYXJncykge1xuXHRmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7ICsraSkge1xuXHRcdHZhciBzdHlsZXMgPSBhcmd1bWVudHNbaV07XG5cdFx0Zm9yICh2YXIgcyBpbiBzdHlsZXMpIHtcblx0XHRcdGVsZW1lbnQuc3R5bGVbc10gPSBzdHlsZXNbc107XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGlucHV0VHlwZSAoZWxlbWVudCwgdHlwZSkge1xuXHRlbGVtZW50LnNldEF0dHJpYnV0ZSgndHlwZScsIHR5cGUpXG59XG5cbmZ1bmN0aW9uIHNhdmVUb0ZpbGUoc3RyaW5nLCBmaWxlbmFtZSkge1xuXHR2YXIgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuXHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGEpO1xuXHRhLnN0eWxlID0gXCJkaXNwbGF5OiBub25lXCI7XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbc3RyaW5nXSwgeyB0eXBlOiAnb2N0ZXQvc3RyZWFtJyB9KSwgLy8gYXBwbGljYXRpb24vanNvblxuXHRcdHVybCA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXHRcblx0YS5ocmVmID0gdXJsO1xuXHRhLmRvd25sb2FkID0gZmlsZW5hbWU7XG5cblx0ZmFrZUNsaWNrKGEpO1xuXG5cdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0Ly8gY2xlYW51cCBhbmQgcmV2b2tlXG5cdFx0d2luZG93LlVSTC5yZXZva2VPYmplY3RVUkwodXJsKTtcblx0XHRkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGEpO1xuXHR9LCA1MDApO1xufVxuXG5cblxudmFyIGlucHV0LCBvcGVuQ2FsbGJhY2s7XG5cbmZ1bmN0aW9uIGhhbmRsZUZpbGVTZWxlY3QoZXZ0KSB7XG5cdHZhciBmaWxlcyA9IGV2dC50YXJnZXQuZmlsZXM7IC8vIEZpbGVMaXN0IG9iamVjdFxuXG5cdGNvbnNvbGUubG9nKCdoYW5kbGUgZmlsZSBzZWxlY3QnLCBmaWxlcy5sZW5ndGgpO1xuXG5cdHZhciBmID0gZmlsZXNbMF07XG5cdGlmICghZikgcmV0dXJuO1xuXHQvLyBDYW4gdHJ5IHRvIGRvIE1JTkUgbWF0Y2hcblx0Ly8gaWYgKCFmLnR5cGUubWF0Y2goJ2FwcGxpY2F0aW9uL2pzb24nKSkge1xuXHQvLyAgIHJldHVybjtcblx0Ly8gfVxuXHRjb25zb2xlLmxvZygnbWF0Y2gnLCBmLnR5cGUpO1xuXG5cdHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuXG5cdC8vIENsb3N1cmUgdG8gY2FwdHVyZSB0aGUgZmlsZSBpbmZvcm1hdGlvbi5cblx0cmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uKGUpIHtcblx0XHR2YXIgZGF0YSA9IGUudGFyZ2V0LnJlc3VsdDtcblx0XHRvcGVuQ2FsbGJhY2soZGF0YSk7XG5cdH07XG5cdFxuXHRyZWFkZXIucmVhZEFzVGV4dChmKTtcblxuXHRpbnB1dC52YWx1ZSA9ICcnO1xufVxuXG5cbmZ1bmN0aW9uIG9wZW5BcyhjYWxsYmFjaywgdGFyZ2V0KSB7XG5cdGNvbnNvbGUubG9nKCdvcGVuZmlsZS4uLicpO1xuXHRvcGVuQ2FsbGJhY2sgPSBjYWxsYmFjaztcblxuXHRpZiAoIWlucHV0KSB7XG5cdFx0aW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXHRcdGlucHV0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0aW5wdXQudHlwZSA9ICdmaWxlJztcblx0XHRpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBoYW5kbGVGaWxlU2VsZWN0KTtcblx0XHR0YXJnZXQgPSB0YXJnZXQgfHwgZG9jdW1lbnQuYm9keTtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXHR9XG5cdFxuXHRmYWtlQ2xpY2soaW5wdXQpO1xufVxuXG5mdW5jdGlvbiBmYWtlQ2xpY2sodGFyZ2V0KSB7XG5cdHZhciBlID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJNb3VzZUV2ZW50c1wiKTtcblx0ZS5pbml0TW91c2VFdmVudChcblx0XHQnY2xpY2snLCB0cnVlLCBmYWxzZSwgd2luZG93LCAwLCAwLCAwLCAwLCAwLFxuXHRcdGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCAwLCBudWxsXG5cdCk7XG5cdHRhcmdldC5kaXNwYXRjaEV2ZW50KGUpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRfZnJpZW5kbHlfc2Vjb25kcyhzLCB0eXBlKSB7XG5cdC8vIFRPRE8gUmVmYWN0b3IgdG8gNjBmcHM/Pz9cblx0Ly8gMjAgbWlucyAqIDYwIHNlYyA9IDEwODAgXG5cdC8vIDEwODBzICogNjBmcHMgPSAxMDgwICogNjAgPCBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUlxuXG5cdHZhciByYXdfc2VjcyA9IHMgfCAwO1xuXHR2YXIgc2Vjc19taWNybyA9IHMgJSA2MDtcblx0dmFyIHNlY3MgPSByYXdfc2VjcyAlIDYwO1xuXHR2YXIgcmF3X21pbnMgPSByYXdfc2VjcyAvIDYwIHwgMDtcblx0dmFyIG1pbnMgPSByYXdfbWlucyAlIDYwO1xuXHR2YXIgaG91cnMgPSByYXdfbWlucyAvIDYwIHwgMDtcblxuXHR2YXIgc2Vjc19zdHIgPSAoc2VjcyAvIDEwMCkudG9GaXhlZCgyKS5zdWJzdHJpbmcoMik7XG5cblx0dmFyIHN0ciA9IG1pbnMgKyAnOicgKyBzZWNzX3N0cjtcblxuXHRpZiAocyAlIDEgPiAwKSB7XG5cdFx0dmFyIHQyID0gKHMgJSAxKSAqIDYwO1xuXHRcdGlmICh0eXBlID09PSAnZnJhbWVzJykgc3RyID0gc2VjcyArICcrJyArIHQyLnRvRml4ZWQoMCkgKyAnZic7XG5cdFx0ZWxzZSBzdHIgKz0gKChzICUgMSkudG9GaXhlZCgyKSkuc3Vic3RyaW5nKDEpO1xuXHRcdC8vIGVsc2Ugc3RyID0gbWlucyArICc6JyArIHNlY3NfbWljcm87XG5cdFx0Ly8gZWxzZSBzdHIgPSBzZWNzX21pY3JvICsgJ3MnOyAvLy8gLnRvRml4ZWQoMilcblx0fVxuXHRyZXR1cm4gc3RyO1x0XG59XG5cbi8vIGdldCBvYmplY3QgYXQgdGltZVxuZnVuY3Rpb24gZmluZFRpbWVpbkxheWVyKGxheWVyLCB0aW1lKSB7XG5cdHZhciB2YWx1ZXMgPSBsYXllci52YWx1ZXM7XG5cdHZhciBpLCBpbDtcblxuXHQvLyBUT0RPIG9wdGltaXplIGJ5IGNoZWNraW5nIHRpbWUgLyBiaW5hcnkgc2VhcmNoXG5cblx0Zm9yIChpPTAsIGlsPXZhbHVlcy5sZW5ndGg7IGk8aWw7IGkrKykge1xuXHRcdHZhciB2YWx1ZSA9IHZhbHVlc1tpXTtcblx0XHRpZiAodmFsdWUudGltZSA9PT0gdGltZSkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0aW5kZXg6IGksXG5cdFx0XHRcdG9iamVjdDogdmFsdWVcblx0XHRcdH07XG5cdFx0fSBlbHNlIGlmICh2YWx1ZS50aW1lID4gdGltZSkge1xuXHRcdFx0cmV0dXJuIGk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGk7XG59XG5cblxuZnVuY3Rpb24gdGltZUF0TGF5ZXIobGF5ZXIsIHQpIHtcblx0Ly8gRmluZCB0aGUgdmFsdWUgb2YgbGF5ZXIgYXQgdCBzZWNvbmRzLlxuXHQvLyB0aGlzIGV4cGVjdCBsYXllciB0byBiZSBzb3J0ZWRcblx0Ly8gbm90IHRoZSBtb3N0IG9wdGltaXplZCBmb3Igbm93LCBidXQgd291bGQgZG8uXG5cblx0dmFyIHZhbHVlcyA9IGxheWVyLnZhbHVlcztcblx0dmFyIGksIGlsLCBlbnRyeSwgcHJldl9lbnRyeTtcblxuXHRpbCA9IHZhbHVlcy5sZW5ndGg7XG5cblx0Ly8gY2FuJ3QgZG8gYW55dGhpbmdcblx0aWYgKGlsID09PSAwKSByZXR1cm47XG5cblx0aWYgKGxheWVyLl9tdXRlKSByZXR1cm5cblxuXHQvLyBmaW5kIGJvdW5kYXJ5IGNhc2VzXG5cdGVudHJ5ID0gdmFsdWVzWzBdO1xuXHRpZiAodCA8IGVudHJ5LnRpbWUpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dmFsdWU6IGVudHJ5LnZhbHVlLFxuXHRcdFx0Y2FuX3R3ZWVuOiBmYWxzZSwgLy8gY2Fubm90IHR3ZWVuXG5cdFx0XHRrZXlmcmFtZTogZmFsc2UgLy8gbm90IG9uIGtleWZyYW1lXG5cdFx0fTtcblx0fVxuXG5cdGZvciAoaT0wOyBpPGlsOyBpKyspIHtcblx0XHRwcmV2X2VudHJ5ID0gZW50cnk7XG5cdFx0ZW50cnkgPSB2YWx1ZXNbaV07XG5cblx0XHRpZiAodCA9PT0gZW50cnkudGltZSkge1xuXHRcdFx0Ly8gb25seSBleGNlcHRpb24gaXMgb24gdGhlIGxhc3QgS0YsIHdoZXJlIHdlIGRpc3BsYXkgdHdlZW4gZnJvbSBwcmV2IGVudHJ5XG5cdFx0XHRpZiAoaSA9PT0gaWwgLSAxKSB7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0Ly8gaW5kZXg6IGksXG5cdFx0XHRcdFx0ZW50cnk6IHByZXZfZW50cnksXG5cdFx0XHRcdFx0dHdlZW46IHByZXZfZW50cnkudHdlZW4sXG5cdFx0XHRcdFx0Y2FuX3R3ZWVuOiBpbCA+IDEsXG5cdFx0XHRcdFx0dmFsdWU6IGVudHJ5LnZhbHVlLFxuXHRcdFx0XHRcdGtleWZyYW1lOiB0cnVlXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQvLyBpbmRleDogaSxcblx0XHRcdFx0ZW50cnk6IGVudHJ5LFxuXHRcdFx0XHR0d2VlbjogZW50cnkudHdlZW4sXG5cdFx0XHRcdGNhbl90d2VlbjogaWwgPiAxLFxuXHRcdFx0XHR2YWx1ZTogZW50cnkudmFsdWUsXG5cdFx0XHRcdGtleWZyYW1lOiB0cnVlIC8vIGlsID4gMVxuXHRcdFx0fTtcblx0XHR9XG5cdFx0aWYgKHQgPCBlbnRyeS50aW1lKSB7XG5cdFx0XHQvLyBwb3NzaWJseSBhIHR3ZWVuXG4vKlxuXHRcdFx0aWYgKCFwcmV2X2VudHJ5LnR3ZWVuKSB7IC8vIG9yIGlmIHZhbHVlIGlzIG5vbmVcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHR2YWx1ZTogcHJldl9lbnRyeS52YWx1ZSxcblx0XHRcdFx0XHR0d2VlbjogZmFsc2UsXG5cdFx0XHRcdFx0ZW50cnk6IHByZXZfZW50cnksXG5cdFx0XHRcdFx0Y2FuX3R3ZWVuOiB0cnVlLFxuXHRcdFx0XHRcdGtleWZyYW1lOiBmYWxzZVxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuKi9cblxuXHRcdFx0Ly8gY2FsY3VsYXRlIHR3ZWVuXG4vKlxuXHRcdFx0dmFyIHRpbWVfZGlmZiA9IGVudHJ5LnRpbWUgLSBwcmV2X2VudHJ5LnRpbWU7XG5cdFx0XHR2YXIgdmFsdWVfZGlmZiA9IGVudHJ5LnZhbHVlIC0gcHJldl9lbnRyeS52YWx1ZTtcblx0XHRcdHZhciB0d2VlbiA9IHByZXZfZW50cnkudHdlZW47XG5cblx0XHRcdHZhciBkdCA9IHQgLSBwcmV2X2VudHJ5LnRpbWU7XG5cdFx0XHR2YXIgayA9IGR0IC8gdGltZV9kaWZmO1xuXHRcdFx0dmFyIG5ld192YWx1ZSA9IHByZXZfZW50cnkudmFsdWUgKyBUd2VlbnNbdHdlZW5dKGspICogdmFsdWVfZGlmZjtcbiovXG4gICAgICAvLyBjYWxjdWxhdGUgY29sb3IgdHdlZW5cblx0XHRcdHZhciB0aW1lX2RpZmYgPSBlbnRyeS50aW1lIC0gcHJldl9lbnRyeS50aW1lO1xuXG5cdFx0XHRpZihlbnRyeS52YWx1ZSA9PSAwKSB7XG5cdFx0XHRcdHJnYiA9IHtyOiAwLCBnOiAwLCBiOiAwfVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFyIGVudHJ5UkdCID0gL14jPyhbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KSQvaS5leGVjKGVudHJ5LnZhbHVlKTtcblx0XHRcdFx0cmdiID0ge1xuXHRcdFx0XHRcdFx0XHRyOiBwYXJzZUludChlbnRyeVJHQlsxXSwgMTYpLFxuXHRcdFx0XHRcdFx0XHRnOiBwYXJzZUludChlbnRyeVJHQlsyXSwgMTYpLFxuXHRcdFx0XHRcdFx0XHRiOiBwYXJzZUludChlbnRyeVJHQlszXSwgMTYpXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cbiAgICAgIGlmKHByZXZfZW50cnkudmFsdWUgPT0gMCkge1xuICAgICAgICBwcmV2X3JnYiA9IHtyOiAwLCBnOiAwLCBiOiAwfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHByZXZfZW50cnlSR0IgPSAvXiM/KFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pJC9pLmV4ZWMocHJldl9lbnRyeS52YWx1ZSk7XG4gICAgICAgIHByZXZfcmdiID0ge1xuICAgICAgICAgIHI6IHBhcnNlSW50KHByZXZfZW50cnlSR0JbMV0sIDE2KSxcbiAgICAgICAgICBnOiBwYXJzZUludChwcmV2X2VudHJ5UkdCWzJdLCAxNiksXG4gICAgICAgICAgYjogcGFyc2VJbnQocHJldl9lbnRyeVJHQlszXSwgMTYpXG4gICAgICAgIH07XG4gICAgICB9XG5cblx0XHRcdCB2YXIgZHQgPSB0IC0gcHJldl9lbnRyeS50aW1lO1xuXHRcdFx0IHZhciBrID0gZHQgLyB0aW1lX2RpZmY7XG5cblx0XHRcdCB2YXIgdmFsdWVfZGlmZiwgbmV3VmFsID0ge31cblx0XHRcdCB2YWx1ZV9kaWZmID0ge1xuXHRcdFx0XHQgcjogcmdiLnIgLSBwcmV2X3JnYi5yLFxuXHRcdFx0XHQgZzogcmdiLmcgLSBwcmV2X3JnYi5nLFxuXHRcdFx0XHQgYjogcmdiLmIgLSBwcmV2X3JnYi5iXG5cdFx0XHQgfVxuXG5cdFx0XHQgbmV3VmFsLnIgPSBwcmV2X3JnYi5yICsgVHdlZW5zWydsaW5lYXInXShrKSAqIHZhbHVlX2RpZmYucjtcblx0XHRcdCBuZXdWYWwuZyA9IHByZXZfcmdiLmcgKyBUd2VlbnNbJ2xpbmVhciddKGspICogdmFsdWVfZGlmZi5nO1xuXHRcdFx0IG5ld1ZhbC5iID0gcHJldl9yZ2IuYiArIFR3ZWVuc1snbGluZWFyJ10oaykgKiB2YWx1ZV9kaWZmLmI7XG5cblx0XHRcdCBjb25zb2xlLmxvZyhuZXdWYWwpXG4gICAgICAgbmV3VmFsID0gcmdiVG9IZXgobmV3VmFsLnIsIG5ld1ZhbC5nLCBuZXdWYWwuYilcblxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0ZW50cnk6IHByZXZfZW50cnksXG5cdFx0XHRcdHZhbHVlOiBuZXdWYWwsXG5cdFx0XHRcdHR3ZWVuOiBwcmV2X2VudHJ5LnR3ZWVuLFxuXHRcdFx0XHRjYW5fdHdlZW46IHRydWUsXG5cdFx0XHRcdGtleWZyYW1lOiBmYWxzZVxuXHRcdFx0fTtcblx0XHR9XG5cdH1cblx0Ly8gdGltZSBpcyBhZnRlciBhbGwgZW50cmllc1xuXHRyZXR1cm4ge1xuXHRcdHZhbHVlOiBlbnRyeS52YWx1ZSxcblx0XHRjYW5fdHdlZW46IGZhbHNlLFxuXHRcdGtleWZyYW1lOiBmYWxzZVxuXHR9OyBcblxufVxuXG5mdW5jdGlvbiBjb21wb25lbnRUb0hleChjKSB7XG4gIHZhciBoZXggPSBNYXRoLnJvdW5kKGMpLnRvU3RyaW5nKDE2KTtcbiAgcmV0dXJuIGhleC5sZW5ndGggPT0gMSA/IFwiMFwiICsgaGV4IDogaGV4O1xufVxuXG5mdW5jdGlvbiByZ2JUb0hleChyLCBnLCBiKSB7XG4gIHJldHVybiBcIiNcIiArIGNvbXBvbmVudFRvSGV4KHIpICsgY29tcG9uZW50VG9IZXgoZykgKyBjb21wb25lbnRUb0hleChiKTtcbn1cblxuXG5mdW5jdGlvbiBwcm94eV9jdHgoY3R4KSB7XG5cdC8vIENyZWF0ZXMgYSBwcm94eSAyZCBjb250ZXh0IHdyYXBwZXIgd2hpY2ggXG5cdC8vIGFsbG93cyB0aGUgZmx1ZW50IC8gY2hhaW5pbmcgQVBJLlxuXHR2YXIgd3JhcHBlciA9IHt9O1xuXG5cdGZ1bmN0aW9uIHByb3h5X2Z1bmN0aW9uKGMpIHtcblx0XHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdFx0XHQvLyBXYXJuaW5nOiB0aGlzIGRvZXNuJ3QgcmV0dXJuIHZhbHVlIG9mIGZ1bmN0aW9uIGNhbGxcblx0XHRcdGN0eFtjXS5hcHBseShjdHgsIGFyZ3VtZW50cyk7XG5cdFx0XHRyZXR1cm4gd3JhcHBlcjtcblx0XHR9O1xuXHR9XG5cblx0ZnVuY3Rpb24gcHJveHlfcHJvcGVydHkoYykge1xuXHRcdHJldHVybiBmdW5jdGlvbih2KSB7XG5cdFx0XHRjdHhbY10gPSB2O1xuXHRcdFx0cmV0dXJuIHdyYXBwZXI7XG5cdFx0fTtcblx0fVxuXG5cdHdyYXBwZXIucnVuID0gZnVuY3Rpb24oYXJncykge1xuXHRcdGFyZ3Mod3JhcHBlcik7XG5cdFx0cmV0dXJuIHdyYXBwZXI7XG5cdH07XG5cblx0Zm9yICh2YXIgYyBpbiBjdHgpIHtcblx0XHQvLyBpZiAoIWN0eC5oYXNPd25Qcm9wZXJ0eShjKSkgY29udGludWU7XG5cdFx0Ly8gY29uc29sZS5sb2coYywgdHlwZW9mKGN0eFtjXSksIGN0eC5oYXNPd25Qcm9wZXJ0eShjKSk7XG5cdFx0Ly8gc3RyaW5nLCBudW1iZXIsIGJvb2xlYW4sIGZ1bmN0aW9uLCBvYmplY3RcblxuXHRcdHZhciB0eXBlID0gdHlwZW9mKGN0eFtjXSk7XG5cdFx0c3dpdGNoKHR5cGUpIHtcblx0XHRcdGNhc2UgJ29iamVjdCc6XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnZnVuY3Rpb24nOlxuXHRcdFx0XHR3cmFwcGVyW2NdID0gcHJveHlfZnVuY3Rpb24oYyk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0d3JhcHBlcltjXSA9IHByb3h5X3Byb3BlcnR5KGMpO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gd3JhcHBlcjtcbn1cbiIsInZhclxuXHRUaGVtZSA9IHJlcXVpcmUoJy4vdGhlbWUnKSxcblx0VUlOdW1iZXIgPSByZXF1aXJlKCcuL3VpX251bWJlcicpLFxuXHRVSUNvbG9yID0gcmVxdWlyZSgnLi91aV9jb2xvcl9pbnB1dCcpLFxuXHRUd2VlbnMgPSByZXF1aXJlKCcuL3V0aWxfdHdlZW4nKSxcblx0U2V0dGluZ3MgPSByZXF1aXJlKCcuL3NldHRpbmdzJyksXG5cdHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpXG47XG5cbi8vIFRPRE8gLSB0YWdnZWQgYnkgaW5kZXggaW5zdGVhZCwgd29yayBvZmYgbGF5ZXJzLlxuXG5mdW5jdGlvbiBMYXllclZpZXcobGF5ZXIsIGRpc3BhdGNoZXIpIHtcblx0dmFyIGRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG5cdHZhciBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0XG5cdGxhYmVsLnN0eWxlLmNzc1RleHQgPSAnZm9udC1zaXplOiAxMnB4OyBwYWRkaW5nOiA0cHg7JztcblxuXHR2YXIgZHJvcGRvd24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcblx0dmFyIG9wdGlvbjtcblx0ZHJvcGRvd24uc3R5bGUuY3NzVGV4dCA9ICdmb250LXNpemU6IDEwcHg7IHdpZHRoOiA2MHB4OyBtYXJnaW46IDA7IGZsb2F0OiByaWdodDsgdGV4dC1hbGlnbjogcmlnaHQ7JztcblxuXHRmb3IgKHZhciBrIGluIFR3ZWVucykge1xuXHRcdG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuXHRcdG9wdGlvbi50ZXh0ID0gaztcblx0XHRkcm9wZG93bi5hcHBlbmRDaGlsZChvcHRpb24pO1xuXHR9XG5cblx0ZHJvcGRvd24uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oZSkge1xuXHRcdGRpc3BhdGNoZXIuZmlyZSgnZWFzZScsIGxheWVyLCBkcm9wZG93bi52YWx1ZSk7XG5cdH0pO1xuXHR2YXIgaGVpZ2h0ID0gKFNldHRpbmdzLkxJTkVfSEVJR0hUIC0gMSk7XG5cblx0dmFyIGtleWZyYW1lX2J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHRrZXlmcmFtZV9idXR0b24uaW5uZXJIVE1MID0gJyYjOTY3MjsnOyAvLyAnJmRpYW1zOycgJiM5NjcxOyA5Njc5IDk2NzAgOTY3MlxuXHRrZXlmcmFtZV9idXR0b24uc3R5bGUuY3NzVGV4dCA9ICdiYWNrZ3JvdW5kOiBub25lOyBmb250LXNpemU6IDEycHg7IHBhZGRpbmc6IDBweDsgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTsgZmxvYXQ6IHJpZ2h0OyB3aWR0aDogMjBweDsgaGVpZ2h0OiAnICsgaGVpZ2h0ICsgJ3B4OyBib3JkZXItc3R5bGU6bm9uZTsgb3V0bGluZTogbm9uZTsnOyAvLyAgYm9yZGVyLXN0eWxlOmluc2V0O1xuXHRcblx0a2V5ZnJhbWVfYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuXHRcdGNvbnNvbGUubG9nKCdjbGlja2VkOmtleWZyYW1pbmcuLi4nLCBzdGF0ZS5nZXQoJ192YWx1ZScpLnZhbHVlKTtcblx0XHRkaXNwYXRjaGVyLmZpcmUoJ2tleWZyYW1lJywgbGF5ZXIsIHN0YXRlLmdldCgnX3ZhbHVlJykudmFsdWUpO1xuXHR9KTtcblxuXHQvKlxuXHQvLyBQcmV2IEtleWZyYW1lXG5cdHZhciBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblx0YnV0dG9uLnRleHRDb250ZW50ID0gJzwnO1xuXHRidXR0b24uc3R5bGUuY3NzVGV4dCA9ICdmb250LXNpemU6IDEycHg7IHBhZGRpbmc6IDFweDsgJztcblx0ZG9tLmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cblx0Ly8gTmV4dCBLZXlmcmFtZVxuXHRidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblx0YnV0dG9uLnRleHRDb250ZW50ID0gJz4nO1xuXHRidXR0b24uc3R5bGUuY3NzVGV4dCA9ICdmb250LXNpemU6IDEycHg7IHBhZGRpbmc6IDFweDsgJztcblx0ZG9tLmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cblx0XG5cdCovXG5cblx0ZnVuY3Rpb24gVG9nZ2xlQnV0dG9uKHRleHQpIHtcblx0XHQvLyBmb3IgY3NzIGJhc2VkIGJ1dHRvbiBzZWUgaHR0cDovL2NvZGVwZW4uaW8vbWFsbGVuZGVvL3Blbi9lTElpR1xuXG5cdFx0dmFyIGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHRcdGJ1dHRvbi50ZXh0Q29udGVudCA9IHRleHQ7XG5cblx0XHR1dGlscy5zdHlsZShidXR0b24sIHtcblx0XHRcdGZvbnRTaXplOiAnMTJweCcsXG5cdFx0XHRwYWRkaW5nOiAnMXB4Jyxcblx0XHRcdGJvcmRlclNpemU6ICcycHgnLFxuXHRcdFx0b3V0bGluZTogJ25vbmUnLFxuXHRcdFx0YmFja2dyb3VuZDogJyNmZmYnXG5cdFx0fSk7XG5cblx0XHR0aGlzLnByZXNzZWQgPSBmYWxzZTtcblxuXHRcdGJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG5cdFx0XHR0aGlzLnByZXNzZWQgPSAhdGhpcy5wcmVzc2VkO1xuXG5cdFx0XHR1dGlscy5zdHlsZShidXR0b24sIHtcblx0XHRcdFx0Ym9yZGVyU3R5bGU6IHRoaXMucHJlc3NlZCA/ICdpbnNldCcgOiAnb3V0c2V0JywgLy8gaW5zZXQgb3V0c2V0IGdyb292ZSByaWRnZVxuXHRcdFx0fSlcblxuXHRcdFx0aWYgKHRoaXMub25DbGljaykgdGhpcy5vbkNsaWNrKCk7XG5cdFx0fS5iaW5kKHRoaXMpO1xuXG5cdFx0dGhpcy5kb20gPSBidXR0b247XG5cblx0fVxuXG5cdC8vIFNvbG9cblx0dmFyIHNvbG9fdG9nZ2xlID0gbmV3IFRvZ2dsZUJ1dHRvbignUycpO1xuXHRkb20uYXBwZW5kQ2hpbGQoc29sb190b2dnbGUuZG9tKTtcblxuXHRzb2xvX3RvZ2dsZS5vbkNsaWNrID0gZnVuY3Rpb24oKSB7XG5cdFx0ZGlzcGF0Y2hlci5maXJlKCdhY3Rpb246c29sbycsIGxheWVyLCBzb2xvX3RvZ2dsZS5wcmVzc2VkKTtcblx0fVxuXG5cdC8vIE11dGVcblx0dmFyIG11dGVfdG9nZ2xlID0gbmV3IFRvZ2dsZUJ1dHRvbignTScpO1xuXHRkb20uYXBwZW5kQ2hpbGQobXV0ZV90b2dnbGUuZG9tKTtcblxuXHRtdXRlX3RvZ2dsZS5vbkNsaWNrID0gZnVuY3Rpb24oKSB7XG5cdFx0ZGlzcGF0Y2hlci5maXJlKCdhY3Rpb246bXV0ZScsIGxheWVyLCBtdXRlX3RvZ2dsZS5wcmVzc2VkKTtcblx0fVxuXG5cblx0dmFyIG51bWJlciA9IG5ldyBVSUNvbG9yKGxheWVyLCBkaXNwYXRjaGVyKTtcblxuXHRudW1iZXIub25DaGFuZ2UuZG8oZnVuY3Rpb24odmFsdWUsIGRvbmUpIHtcblx0XHRzdGF0ZS5nZXQoJ192YWx1ZScpLnZhbHVlID0gdmFsdWU7XG5cdFx0ZGlzcGF0Y2hlci5maXJlKCd2YWx1ZS5jaGFuZ2UnLCBsYXllciwgdmFsdWUsIGRvbmUpO1xuXHR9KTtcblxuXHR1dGlscy5zdHlsZShudW1iZXIuZG9tLCB7XG5cdFx0ZmxvYXQ6ICdyaWdodCdcblx0fSk7XG5cblx0ZG9tLmFwcGVuZENoaWxkKGxhYmVsKTtcblx0ZG9tLmFwcGVuZENoaWxkKGtleWZyYW1lX2J1dHRvbik7XG5cdGRvbS5hcHBlbmRDaGlsZChudW1iZXIuZG9tKTtcblx0Ly9kb20uYXBwZW5kQ2hpbGQoZHJvcGRvd24pO1xuXHRcblxuXHR1dGlscy5zdHlsZShkb20sIHtcblx0XHR0ZXh0QWxpZ246ICdsZWZ0Jyxcblx0XHRtYXJnaW46ICcwcHggMHB4IDBweCA1cHgnLFxuXHRcdGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAnICsgVGhlbWUuYixcblx0XHR0b3A6IDAsXG5cdFx0bGVmdDogMCxcblx0XHRoZWlnaHQ6IChTZXR0aW5ncy5MSU5FX0hFSUdIVCAtIDEgKSArICdweCcsXG5cdFx0Y29sb3I6IFRoZW1lLmNcblx0fSk7XG5cblx0dGhpcy5kb20gPSBkb207XG5cblx0dGhpcy5yZXBhaW50ID0gcmVwYWludDtcblx0dmFyIHN0YXRlO1xuXG5cdHRoaXMuc2V0U3RhdGUgPSBmdW5jdGlvbihsLCBzKSB7XG5cdFx0bGF5ZXIgPSBsO1xuXHRcdHN0YXRlID0gcztcblxuXHRcdHZhciB0bXBfdmFsdWUgPSBzdGF0ZS5nZXQoJ192YWx1ZScpO1xuXHRcdGlmICh0bXBfdmFsdWUudmFsdWUgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dG1wX3ZhbHVlLnZhbHVlID0gMDtcblx0XHR9XG5cblx0XHRudW1iZXIuc2V0VmFsdWUodG1wX3ZhbHVlLnZhbHVlKTtcblx0XHRsYWJlbC50ZXh0Q29udGVudCA9IHN0YXRlLmdldCgnbmFtZScpLnZhbHVlO1xuXG5cdFx0cmVwYWludCgpO1xuXHR9O1xuXG5cdGZ1bmN0aW9uIHJlcGFpbnQocykge1xuXG5cdFx0ZHJvcGRvd24uc3R5bGUub3BhY2l0eSA9IDA7XG5cdFx0ZHJvcGRvd24uZGlzYWJsZWQgPSB0cnVlO1xuXHRcdGtleWZyYW1lX2J1dHRvbi5zdHlsZS5jb2xvciA9IFRoZW1lLmI7XG5cdFx0Ly8ga2V5ZnJhbWVfYnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG5cdFx0Ly8ga2V5ZnJhbWVfYnV0dG9uLnN0eWxlLmJvcmRlclN0eWxlID0gJ3NvbGlkJztcblxuXHRcdHZhciB0d2VlbiA9IG51bGw7XG5cdFx0dmFyIG8gPSB1dGlscy50aW1lQXRMYXllcihsYXllciwgcyk7XG5cblx0XHRpZiAoIW8pIHJldHVybjtcblxuXHRcdGlmIChvLmNhbl90d2Vlbikge1xuXHRcdFx0ZHJvcGRvd24uc3R5bGUub3BhY2l0eSA9IDE7XG5cdFx0XHRkcm9wZG93bi5kaXNhYmxlZCA9IGZhbHNlO1xuXHRcdFx0Ly8gaWYgKG8udHdlZW4pXG5cdFx0XHRkcm9wZG93bi52YWx1ZSA9IG8udHdlZW4gPyBvLnR3ZWVuIDogJ25vbmUnO1xuXHRcdFx0aWYgKGRyb3Bkb3duLnZhbHVlID09PSAnbm9uZScpIGRyb3Bkb3duLnN0eWxlLm9wYWNpdHkgPSAwLjU7XG5cdFx0fVxuXG5cdFx0aWYgKG8ua2V5ZnJhbWUpIHtcblx0XHRcdGtleWZyYW1lX2J1dHRvbi5zdHlsZS5jb2xvciA9IFRoZW1lLmM7XG5cdFx0XHQvLyBrZXlmcmFtZV9idXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuXHRcdFx0Ly8ga2V5ZnJhbWVfYnV0dG9uLnN0eWxlLmJvcmRlclN0eWxlID0gJ2luc2V0Jztcblx0XHR9XG5cblx0XHRzdGF0ZS5nZXQoJ192YWx1ZScpLnZhbHVlID0gby52YWx1ZTtcblx0XHRudW1iZXIuc2V0VmFsdWUoby52YWx1ZSk7XG5cdFx0bnVtYmVyLnBhaW50KCk7XG5cblx0XHRkaXNwYXRjaGVyLmZpcmUoJ3RhcmdldC5ub3RpZnknLCBsYXllci5uYW1lLCBvLnZhbHVlKTtcblx0fVxuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gTGF5ZXJWaWV3O1xuIiwidmFyIFNldHRpbmdzID0gcmVxdWlyZSgnLi9zZXR0aW5ncycpLFxuXHRWaWV3TGF5ZXIgPSByZXF1aXJlKCcuL3ZpZXdfbGF5ZXInKSxcblx0SWNvbkJ1dHRvbiA9IHJlcXVpcmUoJy4vdWlfaWNvbl9idXR0b24nKSxcblx0c3R5bGUgPSByZXF1aXJlKCcuL3V0aWxzJykuc3R5bGUsXG5cdFRoZW1lID0gcmVxdWlyZSgnLi90aGVtZScpLFxuXHRTVE9SQUdFX1BSRUZJWCA9IHJlcXVpcmUoJy4vdXRpbHMnKS5TVE9SQUdFX1BSRUZJWCxcblx0VUlOdW1iZXIgPSByZXF1aXJlKCcuL3VpX251bWJlcicpLFxuXHRVSUNvbG9yID0gcmVxdWlyZSgnLi91aV9udW1iZXInKVxuXHQ7XG5cbmZ1bmN0aW9uIExheWVyQ2FiaW5ldChkYXRhLCBkaXNwYXRjaGVyKSB7XG5cdHZhciBsYXllcl9zdG9yZSA9IGRhdGEuZ2V0KCdsYXllcnMnKTtcblxuXHR2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cblx0dmFyIHRvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHR0b3Auc3R5bGUuY3NzVGV4dCA9ICdtYXJnaW46IDBweDsgdG9wOiAwOyBsZWZ0OiAwOyBoZWlnaHQ6ICcgKyBTZXR0aW5ncy5NQVJLRVJfVFJBQ0tfSEVJR0hUICsgJ3B4Jztcblx0Ly8gdG9wLnN0eWxlLnRleHRBbGlnbiA9ICdyaWdodCc7XG5cblx0dmFyIGxheWVyX3Njcm9sbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRzdHlsZShsYXllcl9zY3JvbGwsIHtcblx0XHRwb3NpdGlvbjogJ2Fic29sdXRlJyxcblx0XHR0b3A6IFNldHRpbmdzLk1BUktFUl9UUkFDS19IRUlHSFQgKyAncHgnLFxuXHRcdC8vIGhlaWdodDogKFNldHRpbmdzLmhlaWdodCAtIFNldHRpbmdzLk1BUktFUl9UUkFDS19IRUlHSFQpICsgJ3B4J1xuXHRcdGxlZnQ6IDAsXG5cdFx0cmlnaHQ6IDAsXG5cdFx0Ym90dG9tOiAwLFxuXHRcdG92ZXJmbG93OiAnaGlkZGVuJ1xuXHR9KTtcblxuXHRkaXYuYXBwZW5kQ2hpbGQobGF5ZXJfc2Nyb2xsKTtcblxuXHR2YXIgcGxheWluZyA9IGZhbHNlO1xuXG5cblx0dmFyIGJ1dHRvbl9zdHlsZXMgPSB7XG5cdFx0d2lkdGg6ICcyMnB4Jyxcblx0XHRoZWlnaHQ6ICcyMnB4Jyxcblx0XHRwYWRkaW5nOiAnMnB4J1xuXHR9O1xuXG5cdHZhciBvcF9idXR0b25fc3R5bGVzID0ge1xuXHRcdHdpZHRoOiAnMzJweCcsXG5cdFx0cGFkZGluZzogJzNweCA0cHggM3B4IDRweCdcblx0fTtcblxuXG5cdHZhciBwbGF5X2J1dHRvbiA9IG5ldyBJY29uQnV0dG9uKDE2LCAncGxheScsICdwbGF5JywgZGlzcGF0Y2hlcik7XG5cdHN0eWxlKHBsYXlfYnV0dG9uLmRvbSwgYnV0dG9uX3N0eWxlcywgeyBtYXJnaW5Ub3A6ICcycHgnIH0gKTtcblx0cGxheV9idXR0b24ub25DbGljayhmdW5jdGlvbihlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGRpc3BhdGNoZXIuZmlyZSgnY29udHJvbHMudG9nZ2xlX3BsYXknKTtcblx0fSk7XG5cblx0dmFyIHN0b3BfYnV0dG9uID0gbmV3IEljb25CdXR0b24oMTYsICdzdG9wJywgJ3N0b3AnLCBkaXNwYXRjaGVyKTtcblx0c3R5bGUoc3RvcF9idXR0b24uZG9tLCBidXR0b25fc3R5bGVzLCB7IG1hcmdpblRvcDogJzJweCcgfSApO1xuXHRzdG9wX2J1dHRvbi5vbkNsaWNrKGZ1bmN0aW9uKGUpIHtcblx0XHRkaXNwYXRjaGVyLmZpcmUoJ2NvbnRyb2xzLnN0b3AnKTtcblx0fSk7XG5cblxuXHR2YXIgdW5kb19idXR0b24gPSBuZXcgSWNvbkJ1dHRvbigxNiwgJ3VuZG8nLCAndW5kbycsIGRpc3BhdGNoZXIpO1xuXHRzdHlsZSh1bmRvX2J1dHRvbi5kb20sIG9wX2J1dHRvbl9zdHlsZXMpO1xuXHR1bmRvX2J1dHRvbi5vbkNsaWNrKGZ1bmN0aW9uKCkge1xuXHRcdGRpc3BhdGNoZXIuZmlyZSgnY29udHJvbHMudW5kbycpO1xuXHR9KTtcblxuXHR2YXIgcmVkb19idXR0b24gPSBuZXcgSWNvbkJ1dHRvbigxNiwgJ3JlcGVhdCcsICdyZWRvJywgZGlzcGF0Y2hlcik7XG5cdHN0eWxlKHJlZG9fYnV0dG9uLmRvbSwgb3BfYnV0dG9uX3N0eWxlcyk7XG5cdHJlZG9fYnV0dG9uLm9uQ2xpY2soZnVuY3Rpb24oKSB7XG5cdFx0ZGlzcGF0Y2hlci5maXJlKCdjb250cm9scy5yZWRvJyk7XG5cdH0pO1xuXG5cdHZhciByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cdHJhbmdlLnR5cGUgPSBcInJhbmdlXCI7XG5cdHJhbmdlLnZhbHVlID0gMDtcblx0cmFuZ2UubWluID0gLTE7XG5cdHJhbmdlLm1heCA9ICsxO1xuXHRyYW5nZS5zdGVwID0gMC4xMjU7XG5cblx0c3R5bGUocmFuZ2UsIHtcblx0XHR3aWR0aDogJzkwcHgnLFxuXHRcdG1hcmdpbjogJzBweCcsXG5cdFx0bWFyZ2luTGVmdDogJzJweCcsXG5cdFx0bWFyZ2luUmlnaHQ6ICcycHgnXG5cdH0pO1xuXG5cdHZhciBkcmFnZ2luZ1JhbmdlID0gMDtcblxuXHRyYW5nZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBmdW5jdGlvbigpIHtcblx0XHRkcmFnZ2luZ1JhbmdlID0gMTtcblx0fSk7XG5cblx0cmFuZ2UuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGZ1bmN0aW9uKCkge1xuXHRcdGRyYWdnaW5nUmFuZ2UgPSAwO1xuXHRcdGNoYW5nZVJhbmdlKCk7XG5cdH0pO1xuXG5cdHJhbmdlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGZ1bmN0aW9uKCkge1xuXHRcdGlmICghZHJhZ2dpbmdSYW5nZSkgcmV0dXJuO1xuXHRcdGNoYW5nZVJhbmdlKCk7XG5cdH0pO1xuXG5cdGRpdi5hcHBlbmRDaGlsZCh0b3ApO1xuXG5cdHZhciB0aW1lX29wdGlvbnMgPSB7XG5cdFx0bWluOiAwLFxuXHRcdHN0ZXA6IDAuMTI1XG5cdH07XG5cblx0dmFyIGN1cnJlbnRUaW1lID0gbmV3IFVJTnVtYmVyKHRpbWVfb3B0aW9ucyk7XG5cdHZhciB0b3RhbFRpbWUgPSBuZXcgVUlOdW1iZXIodGltZV9vcHRpb25zKTtcblxuXHR2YXIgY3VycmVudFRpbWVTdG9yZSA9IGRhdGEuZ2V0KCd1aTpjdXJyZW50VGltZScpO1xuXHR2YXIgdG90YWxUaW1lU3RvcmUgPSBkYXRhLmdldCgndWk6dG90YWxUaW1lJyk7XG5cblx0Ly8gVUkyU3RvcmVCaW5kKHZpZXcsIGRhdGFzdG9yZSkge1xuXHQvLyBcdHZpZXcub25DaGFuZ2UuZG8oZnVuY3Rpb24odikge1xuXHQvLyBcdFx0ZGF0YXN0b3JlLnZhbHVlID0gdmlldztcblx0Ly8gXHR9KVxuXG5cdC8vIFx0ZGF0YXN0b3JlLm9uQ2hhbmdlLmRvKGZ1bmN0aW9uKHYpIHtcblx0Ly8gXHRcdHZpZXcuc2V0VmFsdWUgPSB2O1xuXHQvLyBcdH0pXG5cdC8vIH1cblxuXHRjdXJyZW50VGltZS5vbkNoYW5nZS5kbyhmdW5jdGlvbih2YWx1ZSwgZG9uZSkge1xuXHRcdGRpc3BhdGNoZXIuZmlyZSgndGltZS51cGRhdGUnLCB2YWx1ZSk7XG5cdFx0Ly8gcmVwYWludCgpO1xuXHR9KTtcblxuXHR0b3RhbFRpbWUub25DaGFuZ2UuZG8oZnVuY3Rpb24odmFsdWUsIGRvbmUpIHtcblx0XHR0b3RhbFRpbWVTdG9yZS52YWx1ZSA9IHZhbHVlO1xuXHRcdHJlcGFpbnQoKTtcblx0fSk7XG5cblx0Ly8gUGxheSBDb250cm9sc1xuXHR0b3AuYXBwZW5kQ2hpbGQoY3VycmVudFRpbWUuZG9tKTtcblx0dG9wLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcvJykpOyAvLyAwOjAwOjAwIC8gMDoxMDowMFxuXHR0b3AuYXBwZW5kQ2hpbGQodG90YWxUaW1lLmRvbSlcblx0dG9wLmFwcGVuZENoaWxkKHBsYXlfYnV0dG9uLmRvbSk7XG5cdHRvcC5hcHBlbmRDaGlsZChzdG9wX2J1dHRvbi5kb20pO1xuXHR0b3AuYXBwZW5kQ2hpbGQocmFuZ2UpO1xuXG5cblx0dmFyIG9wZXJhdGlvbnNfZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdHN0eWxlKG9wZXJhdGlvbnNfZGl2LCB7XG5cdFx0bWFyZ2luVG9wOiAnNHB4Jyxcblx0XHQvLyBib3JkZXJCb3R0b206ICcxcHggc29saWQgJyArIFRoZW1lLmJcblx0fSk7XG5cdHRvcC5hcHBlbmRDaGlsZChvcGVyYXRpb25zX2Rpdik7XG5cdC8vIHRvcC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpKTtcblxuXG5cdC8vIG9wZW4gX2FsdFxuXHR2YXIgZmlsZV9vcGVuID0gbmV3IEljb25CdXR0b24oMTYsICdmb2xkZXJfb3Blbl9hbHQnLCAnT3BlbicsIGRpc3BhdGNoZXIpO1xuXHRzdHlsZShmaWxlX29wZW4uZG9tLCBvcF9idXR0b25fc3R5bGVzKTtcblx0b3BlcmF0aW9uc19kaXYuYXBwZW5kQ2hpbGQoZmlsZV9vcGVuLmRvbSk7XG5cblx0ZnVuY3Rpb24gcG9wdWxhdGVPcGVuKCkge1xuXHRcdHdoaWxlIChkcm9wZG93bi5sZW5ndGgpIHtcblx0XHRcdGRyb3Bkb3duLnJlbW92ZSgwKTtcblx0XHR9XG5cblx0XHR2YXIgb3B0aW9uO1xuXHRcdG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuXHRcdG9wdGlvbi50ZXh0ID0gJ05ldyc7XG5cdFx0b3B0aW9uLnZhbHVlID0gJypuZXcqJztcblx0XHRkcm9wZG93bi5hZGQob3B0aW9uKTtcblxuXHRcdG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuXHRcdG9wdGlvbi50ZXh0ID0gJ0ltcG9ydCBKU09OJztcblx0XHRvcHRpb24udmFsdWUgPSAnKmltcG9ydConO1xuXHRcdGRyb3Bkb3duLmFkZChvcHRpb24pO1xuXG5cdFx0Ly8gRG9lc24ndCB3b3JrXG5cdFx0Ly8gb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG5cdFx0Ly8gb3B0aW9uLnRleHQgPSAnU2VsZWN0IEZpbGUnO1xuXHRcdC8vIG9wdGlvbi52YWx1ZSA9ICcqc2VsZWN0Kic7XG5cdFx0Ly8gZHJvcGRvd24uYWRkKG9wdGlvbik7XG5cblx0XHRvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcblx0XHRvcHRpb24udGV4dCA9ICc9PU9wZW49PSc7XG5cdFx0b3B0aW9uLmRpc2FibGVkID0gdHJ1ZTtcblx0XHRvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuXHRcdGRyb3Bkb3duLmFkZChvcHRpb24pO1xuXG5cdFx0dmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cChTVE9SQUdFX1BSRUZJWCArICcoLiopJyk7XG5cdFx0Zm9yICh2YXIga2V5IGluIGxvY2FsU3RvcmFnZSkge1xuXHRcdFx0Ly8gY29uc29sZS5sb2coa2V5KTtcblxuXHRcdFx0dmFyIG1hdGNoID0gcmVnZXguZXhlYyhrZXkpO1xuXHRcdFx0aWYgKG1hdGNoKSB7XG5cdFx0XHRcdG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuXHRcdFx0XHRvcHRpb24udGV4dCA9IG1hdGNoWzFdO1xuXG5cdFx0XHRcdGRyb3Bkb3duLmFkZChvcHRpb24pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHR9XG5cblx0Ly8gbGlzdGVuIG9uIG90aGVyIHRhYnNcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3N0b3JhZ2UnLCBmdW5jdGlvbihlKSB7XG5cdFx0dmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cChTVE9SQUdFX1BSRUZJWCArICcoLiopJyk7XG5cdFx0aWYgKHJlZ2V4LmV4ZWMoZS5rZXkpKSB7XG5cdFx0XHRwb3B1bGF0ZU9wZW4oKTtcblx0XHR9XG5cdH0pO1xuXG5cdGRpc3BhdGNoZXIub24oJ3NhdmU6ZG9uZScsIHBvcHVsYXRlT3Blbik7XG5cblx0dmFyIGRyb3Bkb3duID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG5cblx0c3R5bGUoZHJvcGRvd24sIHtcblx0XHRwb3NpdGlvbjogJ2Fic29sdXRlJyxcblx0XHQvLyByaWdodDogMCxcblx0XHQvLyBtYXJnaW46IDAsXG5cdFx0b3BhY2l0eTogMCxcblx0XHR3aWR0aDogJzE2cHgnLFxuXHRcdGhlaWdodDogJzE2cHgnLFxuXHRcdC8vIHpJbmRleDogMSxcblx0fSk7XG5cblx0ZHJvcGRvd24uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oZSkge1xuXHRcdC8vIGNvbnNvbGUubG9nKCdjaGFuZ2VkJywgZHJvcGRvd24ubGVuZ3RoLCBkcm9wZG93bi52YWx1ZSk7XG5cblx0XHRzd2l0Y2ggKGRyb3Bkb3duLnZhbHVlKSB7XG5cdFx0XHRjYXNlICcqbmV3Kic6XG5cdFx0XHRcdGRpc3BhdGNoZXIuZmlyZSgnbmV3Jyk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnKmltcG9ydConOlxuXHRcdFx0XHRkaXNwYXRjaGVyLmZpcmUoJ2ltcG9ydCcpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJypzZWxlY3QqJzpcblx0XHRcdFx0ZGlzcGF0Y2hlci5maXJlKCdvcGVuZmlsZScpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdGRpc3BhdGNoZXIuZmlyZSgnb3BlbicsIGRyb3Bkb3duLnZhbHVlKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9KTtcblxuXHRmaWxlX29wZW4uZG9tLmluc2VydEJlZm9yZShkcm9wZG93biwgZmlsZV9vcGVuLmRvbS5maXJzdENoaWxkKTtcblxuXHRwb3B1bGF0ZU9wZW4oKTtcblxuXHQvLyAvLyBqc29uIGltcG9ydFxuXHQvLyB2YXIgaW1wb3J0X2pzb24gPSBuZXcgSWNvbkJ1dHRvbigxNiwgJ3NpZ25pbicsICdJbXBvcnQgSlNPTicsIGRpc3BhdGNoZXIpO1xuXHQvLyBvcGVyYXRpb25zX2Rpdi5hcHBlbmRDaGlsZChpbXBvcnRfanNvbi5kb20pO1xuXHQvLyBpbXBvcnRfanNvbi5vbkNsaWNrKGZ1bmN0aW9uKCkge1xuXHQvLyBcdGRpc3BhdGNoZXIuZmlyZSgnaW1wb3J0Jyk7XG5cdC8vIH0pO1xuXG5cdC8vIC8vIG5ld1xuXHQvLyB2YXIgZmlsZV9hbHQgPSBuZXcgSWNvbkJ1dHRvbigxNiwgJ2ZpbGVfYWx0JywgJ05ldycsIGRpc3BhdGNoZXIpO1xuXHQvLyBvcGVyYXRpb25zX2Rpdi5hcHBlbmRDaGlsZChmaWxlX2FsdC5kb20pO1xuXG5cdC8vIHNhdmVcblx0dmFyIHNhdmUgPSBuZXcgSWNvbkJ1dHRvbigxNiwgJ3NhdmUnLCAnU2F2ZScsIGRpc3BhdGNoZXIpO1xuXHRzdHlsZShzYXZlLmRvbSwgb3BfYnV0dG9uX3N0eWxlcyk7XG5cdG9wZXJhdGlvbnNfZGl2LmFwcGVuZENoaWxkKHNhdmUuZG9tKTtcblx0c2F2ZS5vbkNsaWNrKGZ1bmN0aW9uKCkge1xuXHRcdGRpc3BhdGNoZXIuZmlyZSgnc2F2ZScpO1xuXHR9KTtcblxuXHQvLyBzYXZlIGFzXG5cdHZhciBzYXZlX2FzID0gbmV3IEljb25CdXR0b24oMTYsICdwYXN0ZScsICdTYXZlIGFzJywgZGlzcGF0Y2hlcik7XG5cdHN0eWxlKHNhdmVfYXMuZG9tLCBvcF9idXR0b25fc3R5bGVzKTtcblx0b3BlcmF0aW9uc19kaXYuYXBwZW5kQ2hpbGQoc2F2ZV9hcy5kb20pO1xuXHRzYXZlX2FzLm9uQ2xpY2soZnVuY3Rpb24oKSB7XG5cdFx0ZGlzcGF0Y2hlci5maXJlKCdzYXZlX2FzJyk7XG5cdH0pO1xuXG5cdC8vIGRvd25sb2FkIGpzb24gKGV4cG9ydClcblx0dmFyIGRvd25sb2FkX2FsdCA9IG5ldyBJY29uQnV0dG9uKDE2LCAnZG93bmxvYWRfYWx0JywgJ0Rvd25sb2FkIC8gRXhwb3J0IEpTT04gdG8gZmlsZScsIGRpc3BhdGNoZXIpO1xuXHRzdHlsZShkb3dubG9hZF9hbHQuZG9tLCBvcF9idXR0b25fc3R5bGVzKTtcblx0b3BlcmF0aW9uc19kaXYuYXBwZW5kQ2hpbGQoZG93bmxvYWRfYWx0LmRvbSk7XG5cdGRvd25sb2FkX2FsdC5vbkNsaWNrKGZ1bmN0aW9uKCkge1xuXHRcdGRpc3BhdGNoZXIuZmlyZSgnZXhwb3J0Jyk7XG5cdH0pO1xuXG5cdHZhciB1cGxvYWRfYWx0ID0gbmV3IEljb25CdXR0b24oMTYsICd1cGxvYWRfYWx0JywgJ0xvYWQgZnJvbSBmaWxlJywgZGlzcGF0Y2hlcik7XG5cdHN0eWxlKHVwbG9hZF9hbHQuZG9tLCBvcF9idXR0b25fc3R5bGVzKTtcblx0b3BlcmF0aW9uc19kaXYuYXBwZW5kQ2hpbGQodXBsb2FkX2FsdC5kb20pO1xuXHR1cGxvYWRfYWx0Lm9uQ2xpY2soZnVuY3Rpb24oKSB7XG5cdFx0ZGlzcGF0Y2hlci5maXJlKCdvcGVuZmlsZScpO1xuXHR9KTtcblxuXHR2YXIgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0c3Bhbi5zdHlsZS53aWR0aCA9ICcyMHB4Jztcblx0c3Bhbi5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG5cdG9wZXJhdGlvbnNfZGl2LmFwcGVuZENoaWxkKHNwYW4pO1xuXG5cdG9wZXJhdGlvbnNfZGl2LmFwcGVuZENoaWxkKHVuZG9fYnV0dG9uLmRvbSk7XG5cdG9wZXJhdGlvbnNfZGl2LmFwcGVuZENoaWxkKHJlZG9fYnV0dG9uLmRvbSk7XG5cdG9wZXJhdGlvbnNfZGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJykpO1xuXG5cdC8vIENsb3VkIERvd25sb2FkIC8gVXBsb2FkIGVkaXQgcGVuY2lsXG5cblx0Lypcblx0Ly8gLy8gc2hvdyBsYXllclxuXHQvLyB2YXIgZXllX29wZW4gPSBuZXcgSWNvbkJ1dHRvbigxNiwgJ2V5ZV9vcGVuJywgJ2V5ZV9vcGVuJywgZGlzcGF0Y2hlcik7XG5cdC8vIG9wZXJhdGlvbnNfZGl2LmFwcGVuZENoaWxkKGV5ZV9vcGVuLmRvbSk7XG5cblx0Ly8gLy8gaGlkZSAvIGRpc2FibGUgbGF5ZXJcblx0Ly8gdmFyIGV5ZV9jbG9zZSA9IG5ldyBJY29uQnV0dG9uKDE2LCAnZXllX2Nsb3NlJywgJ2V5ZV9jbG9zZScsIGRpc3BhdGNoZXIpO1xuXHQvLyBvcGVyYXRpb25zX2Rpdi5hcHBlbmRDaGlsZChleWVfY2xvc2UuZG9tKTtcblxuXG5cdC8vIHJlbW92ZSBsYXllclxuXHR2YXIgbWludXMgPSBuZXcgSWNvbkJ1dHRvbigxNiwgJ21pbnVzJywgJ21pbnVzJywgZGlzcGF0Y2hlcik7XG5cdG9wZXJhdGlvbnNfZGl2LmFwcGVuZENoaWxkKG1pbnVzLmRvbSk7XG5cblx0Ly8gY2hlY2tcblx0dmFyIG9rID0gbmV3IEljb25CdXR0b24oMTYsICdvaycsICdvaycsIGRpc3BhdGNoZXIpO1xuXHRvcGVyYXRpb25zX2Rpdi5hcHBlbmRDaGlsZChvay5kb20pO1xuXG5cdC8vIGNyb3NzXG5cdHZhciByZW1vdmUgPSBuZXcgSWNvbkJ1dHRvbigxNiwgJ3JlbW92ZScsICdyZW1vdmUnLCBkaXNwYXRjaGVyKTtcblx0b3BlcmF0aW9uc19kaXYuYXBwZW5kQ2hpbGQocmVtb3ZlLmRvbSk7XG5cblx0Ki9cblxuXG5cdC8vIHJhbmdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGNoYW5nZVJhbmdlKTtcblxuXG5cdGZ1bmN0aW9uIGNvbnZlcnRQZXJjZW50VG9UaW1lKHQpIHtcblx0XHR2YXIgbWluX3RpbWUgPSAxMCAqIDYwOyAvLyAxMCBtaW51dGVzXG5cdFx0bWluX3RpbWUgPSBkYXRhLmdldCgndWk6dG90YWxUaW1lJykudmFsdWU7XG5cdFx0dmFyIG1heF90aW1lID0gMTtcblx0XHR2YXIgdiA9IFNldHRpbmdzLndpZHRoICogMC44IC8gKHQgKiAobWF4X3RpbWUgLSBtaW5fdGltZSkgKyBtaW5fdGltZSk7XG5cdFx0cmV0dXJuIHY7XG5cdH1cblxuXHRmdW5jdGlvbiBjb252ZXJ0VGltZVRvUGVyY2VudCh2KSB7XG5cdFx0dmFyIG1pbl90aW1lID0gMTAgKiA2MDsgLy8gMTAgbWludXRlc1xuXHRcdG1pbl90aW1lID0gZGF0YS5nZXQoJ3VpOnRvdGFsVGltZScpLnZhbHVlO1xuXHRcdHZhciBtYXhfdGltZSA9IDE7XG5cdFx0dmFyIHQgID0gKChTZXR0aW5ncy53aWR0aCAqIDAuOCAvIHYpIC0gbWluX3RpbWUpICAvIChtYXhfdGltZSAtIG1pbl90aW1lKTtcblx0XHRyZXR1cm4gdDtcblx0fVxuXG5cdGZ1bmN0aW9uIGNoYW5nZVJhbmdlKCkge1xuXG5cdFx0ZGlzcGF0Y2hlci5maXJlKCd1cGRhdGUuc2NhbGUnLCBNYXRoLnBvdygxMDAsIC1yYW5nZS52YWx1ZSkgKTtcblx0fVxuXG5cdHZhciBsYXllcl91aXMgPSBbXSwgdmlzaWJsZV9sYXllcnMgPSAwO1xuXHR2YXIgdW51c2VkX2xheWVycyA9IFtdO1xuXG5cdHRoaXMubGF5ZXJzID0gbGF5ZXJfdWlzO1xuXG5cdHRoaXMuc2V0Q29udHJvbFN0YXR1cyA9IGZ1bmN0aW9uKHYpIHtcblx0XHRwbGF5aW5nID0gdjtcblx0XHRpZiAocGxheWluZykge1xuXHRcdFx0cGxheV9idXR0b24uc2V0SWNvbigncGF1c2UnKTtcblx0XHRcdHBsYXlfYnV0dG9uLnNldFRpcCgncGF1c2UnKTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRwbGF5X2J1dHRvbi5zZXRJY29uKCdwbGF5Jyk7XG5cdFx0XHRwbGF5X2J1dHRvbi5zZXRUaXAoJ3BsYXknKTtcblx0XHR9XG5cdH07XG5cblx0dGhpcy5zZXRTdGF0ZSA9IGZ1bmN0aW9uKHN0YXRlKSB7XG5cblx0XHRsYXllcl9zdG9yZSA9IHN0YXRlO1xuXHRcdGxheWVycyA9IGxheWVyX3N0b3JlLnZhbHVlO1xuXHRcdC8vIGxheWVycyA9IHN0YXRlO1xuXHRcdGNvbnNvbGUubG9nKGxheWVyX3Vpcy5sZW5ndGgsIGxheWVycyk7XG5cdFx0dmFyIGksIGxheWVyO1xuXHRcdGZvciAoaSA9IDA7IGkgPCBsYXllcnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGxheWVyID0gbGF5ZXJzW2ldO1xuXG5cdFx0XHRpZiAoIWxheWVyX3Vpc1tpXSkge1xuXHRcdFx0XHR2YXIgbGF5ZXJfdWk7XG5cdFx0XHRcdGlmICh1bnVzZWRfbGF5ZXJzLmxlbmd0aCkge1xuXHRcdFx0XHRcdGxheWVyX3VpID0gdW51c2VkX2xheWVycy5wb3AoKTtcblx0XHRcdFx0XHRsYXllcl91aS5kb20uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gbmV3XG5cdFx0XHRcdFx0bGF5ZXJfdWkgPSBuZXcgVmlld0xheWVyKGxheWVyLCBkaXNwYXRjaGVyKTtcblx0XHRcdFx0XHRsYXllcl9zY3JvbGwuYXBwZW5kQ2hpbGQobGF5ZXJfdWkuZG9tKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRsYXllcl91aXMucHVzaChsYXllcl91aSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIGxheWVyX3Vpc1tpXS5zZXRTdGF0ZShsYXllcik7XG5cdFx0fVxuXG5cdFx0Y29uc29sZS5sb2coJ1RvdGFsIGxheWVycyAodmlldywgaGlkZGVuLCB0b3RhbCknLCBsYXllcl91aXMubGVuZ3RoLCB1bnVzZWRfbGF5ZXJzLmxlbmd0aCxcblx0XHRcdGxheWVyX3Vpcy5sZW5ndGggKyB1bnVzZWRfbGF5ZXJzLmxlbmd0aCk7XG5cblx0fTtcblxuXHRmdW5jdGlvbiByZXBhaW50KHMpIHtcblxuXHRcdHMgPSBjdXJyZW50VGltZVN0b3JlLnZhbHVlO1xuXHRcdGN1cnJlbnRUaW1lLnNldFZhbHVlKHMpO1xuXHRcdHRvdGFsVGltZS5zZXRWYWx1ZSh0b3RhbFRpbWVTdG9yZS52YWx1ZSk7XG5cdFx0Y3VycmVudFRpbWUucGFpbnQoKTtcblx0XHR0b3RhbFRpbWUucGFpbnQoKTtcblxuXHRcdHZhciBpO1xuXG5cdFx0cyA9IHMgfHwgMDtcblx0XHRmb3IgKGkgPSBsYXllcl91aXMubGVuZ3RoOyBpLS0gPiAwOykge1xuXHRcdFx0Ly8gcXVpY2sgaGFja1xuXHRcdFx0aWYgKGkgPj0gbGF5ZXJzLmxlbmd0aCkge1xuXHRcdFx0XHRsYXllcl91aXNbaV0uZG9tLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdHVudXNlZF9sYXllcnMucHVzaChsYXllcl91aXMucG9wKCkpO1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0bGF5ZXJfdWlzW2ldLnNldFN0YXRlKGxheWVyc1tpXSwgbGF5ZXJfc3RvcmUuZ2V0KGkpKTtcblx0XHRcdC8vIGxheWVyX3Vpc1tpXS5zZXRTdGF0ZSgnbGF5ZXJzJysnOicraSk7XG5cdFx0XHRsYXllcl91aXNbaV0ucmVwYWludChzKTtcblx0XHR9XG5cblx0XHR2aXNpYmxlX2xheWVycyA9IGxheWVyX3Vpcy5sZW5ndGg7XG5cblx0fVxuXG5cdHRoaXMucmVwYWludCA9IHJlcGFpbnQ7XG5cdHRoaXMuc2V0U3RhdGUobGF5ZXJfc3RvcmUpO1xuXG5cdHRoaXMuc2Nyb2xsVG8gPSBmdW5jdGlvbih4KSB7XG5cdFx0bGF5ZXJfc2Nyb2xsLnNjcm9sbFRvcCA9IHggKiAobGF5ZXJfc2Nyb2xsLnNjcm9sbEhlaWdodCAtIGxheWVyX3Njcm9sbC5jbGllbnRIZWlnaHQpO1xuXHR9O1xuXG5cdHRoaXMuZG9tID0gZGl2O1xuXG5cdHJlcGFpbnQoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBMYXllckNhYmluZXQ7XG4iLCJ2YXJcblx0U2V0dGluZ3MgPSByZXF1aXJlKCcuL3NldHRpbmdzJyksXG5cdFRoZW1lID0gcmVxdWlyZSgnLi90aGVtZScpLFxuXHR1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKSxcblx0cHJveHlfY3R4ID0gdXRpbHMucHJveHlfY3R4LFxuXHRUd2VlbnMgPSByZXF1aXJlKCcuL3V0aWxfdHdlZW4nKSxcblx0aGFuZGxlRHJhZyA9IHJlcXVpcmUoJy4vdXRpbF9oYW5kbGVfZHJhZycpLFxuXHRTY3JvbGxDYW52YXMgPSByZXF1aXJlKCcuL3ZpZXdfdGltZV9zY3JvbGxlcicpLFxuXHRDYW52YXMgPSByZXF1aXJlKCcuL3VpX2NhbnZhcycpXG5cdDtcblxudmFyXG5cdExJTkVfSEVJR0hUID0gU2V0dGluZ3MuTElORV9IRUlHSFQsXG5cdERJQU1PTkRfU0laRSA9IFNldHRpbmdzLkRJQU1PTkRfU0laRSxcblx0VElNRV9TQ1JPTExFUl9IRUlHSFQgPSAzNSxcblx0TUFSS0VSX1RSQUNLX0hFSUdIVCA9IDI1LFxuXHRMRUZUX1BBTkVfV0lEVEggPSBTZXR0aW5ncy5MRUZUX1BBTkVfV0lEVEgsXG5cdHRpbWVfc2NhbGUgPSBTZXR0aW5ncy50aW1lX3NjYWxlLFxuXHRUT1AgPSAxMDtcblxuXG52YXIgZnJhbWVfc3RhcnQgPSAwOyAvLyB0aGlzIGlzIHRoZSBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbi5cblxuXG4vKlxuICogVGhpcyBjbGFzcyBjb250YWlucyB0aGUgdmlldyBmb3IgdGhlIHJpZ2h0IG1haW4gc2VjdGlvbiBvZiB0aW1lbGluZXJcbiAqL1xuXG5cbi8vIFRPRE9cbi8vIGRpcnR5IHJlbmRlcmluZ1xuLy8gZHJhZyBibG9ja1xuLy8gRE9OJ1QgdXNlIHRpbWUudXBkYXRlIGZvciBldmVyeXRoaW5nXG5cbnZhciB0aWNrTWFyazE7XG52YXIgdGlja01hcmsyO1xudmFyIHRpY2tNYXJrMztcblxuZnVuY3Rpb24gdGltZV9zY2FsZWQoKSB7XG5cdC8qXG5cdCAqIFN1YmRpdmlzb24gTE9EXG5cdCAqIHRpbWVfc2NhbGUgcmVmZXJzIHRvIG51bWJlciBvZiBwaXhlbHMgcGVyIHVuaXRcblx0ICogRWcuIDEgaW5jaCAtIDYwcywgMSBpbmNoIC0gNjBmcHMsIDEgaW5jaCAtIDYgbWluc1xuXHQgKi9cblx0dmFyIGRpdiA9IDYwO1xuXG5cdHRpY2tNYXJrMSA9IHRpbWVfc2NhbGUgLyBkaXY7XG5cdHRpY2tNYXJrMiA9IDIgKiB0aWNrTWFyazE7XG5cdHRpY2tNYXJrMyA9IDEwICogdGlja01hcmsxO1xuXG59XG5cbnRpbWVfc2NhbGVkKCk7XG5cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLy8gVGltZWxpbmUgUGFuZWxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuZnVuY3Rpb24gVGltZWxpbmVQYW5lbChkYXRhLCBkaXNwYXRjaGVyKSB7XG5cblx0dmFyIGRwciA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvO1xuXHR2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG5cblx0dmFyIHNjcm9sbFRvcCA9IDAsIHNjcm9sbExlZnQgPSAwLCBTQ1JPTExfSEVJR0hUO1xuXHR2YXIgbGF5ZXJzID0gZGF0YS5nZXQoJ2xheWVycycpLnZhbHVlO1xuXG5cdHRoaXMuc2Nyb2xsVG8gPSBmdW5jdGlvbihzLCB5KSB7XG5cdFx0c2Nyb2xsVG9wID0gcyAqIE1hdGgubWF4KGxheWVycy5sZW5ndGggKiBMSU5FX0hFSUdIVCAtIFNDUk9MTF9IRUlHSFQsIDApO1xuXHRcdHJlcGFpbnQoKTtcblx0fTtcblxuXHR0aGlzLnJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBoID0gKFNldHRpbmdzLmhlaWdodCAtIFRJTUVfU0NST0xMRVJfSEVJR0hUKTtcblx0XHRkcHIgPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbztcblx0XHRjYW52YXMud2lkdGggPSBTZXR0aW5ncy53aWR0aCAqIGRwcjtcblx0XHRjYW52YXMuaGVpZ2h0ID0gaCAqIGRwcjtcblx0XHRjYW52YXMuc3R5bGUud2lkdGggPSBTZXR0aW5ncy53aWR0aCArICdweCc7XG5cdFx0Y2FudmFzLnN0eWxlLmhlaWdodCA9IGggKyAncHgnO1xuXHRcdFNDUk9MTF9IRUlHSFQgPSBTZXR0aW5ncy5oZWlnaHQgLSBUSU1FX1NDUk9MTEVSX0hFSUdIVDtcblx0XHRzY3JvbGxfY2FudmFzLnNldFNpemUoU2V0dGluZ3Mud2lkdGgsIFRJTUVfU0NST0xMRVJfSEVJR0hUKTtcblx0fTtcblxuXHR2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cblx0dmFyIHNjcm9sbF9jYW52YXMgPSBuZXcgQ2FudmFzKFNldHRpbmdzLndpZHRoLCBUSU1FX1NDUk9MTEVSX0hFSUdIVCk7XG5cdC8vIGRhdGEuYWRkTGlzdGVuZXIoJ3VpJywgcmVwYWludCApO1xuXG5cdHV0aWxzLnN0eWxlKGNhbnZhcywge1xuXHRcdHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuXHRcdHRvcDogVElNRV9TQ1JPTExFUl9IRUlHSFQgKyAncHgnLFxuXHRcdGxlZnQ6ICcwcHgnXG5cdH0pO1xuXG5cdHV0aWxzLnN0eWxlKHNjcm9sbF9jYW52YXMuZG9tLCB7XG5cdFx0cG9zaXRpb246ICdhYnNvbHV0ZScsXG5cdFx0dG9wOiAnMHB4Jyxcblx0XHRsZWZ0OiAnMTBweCdcblx0fSk7XG5cblx0c2Nyb2xsX2NhbnZhcy51c2VzKG5ldyBTY3JvbGxDYW52YXMoZGlzcGF0Y2hlciwgZGF0YSkpO1xuXG5cblx0ZGl2LmFwcGVuZENoaWxkKGNhbnZhcyk7XG5cdGRpdi5hcHBlbmRDaGlsZChzY3JvbGxfY2FudmFzLmRvbSk7XG5cblx0Ly8gdGhpcy5kb20gPSBjYW52YXM7XG5cdHRoaXMuZG9tID0gZGl2O1xuXHR0aGlzLnJlc2l6ZSgpO1xuXG5cdHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblx0dmFyIGN0eF93cmFwID0gcHJveHlfY3R4KGN0eCk7XG5cblx0dmFyIGN1cnJlbnRUaW1lOyAvLyBtZWFzdXJlZCBpbiBzZWNvbmRzXG5cdC8vIHRlY2huaWNhbGx5IGl0IGNvdWxkIGJlIGluIGZyYW1lcyBvciAgaGF2ZSBpdCBpbiBzdHJpbmcgZm9ybWF0ICgwOjAwOjAwOjEtNjApXG5cblx0dmFyIExFRlRfR1VUVEVSID0gMjA7XG5cdHZhciBpLCB4LCB5LCBpbCwgajtcblxuXHR2YXIgbmVlZHNSZXBhaW50ID0gZmFsc2U7XG5cdHZhciByZW5kZXJJdGVtcyA9IFtdO1xuXG5cdGZ1bmN0aW9uIEVhc2luZ1JlY3QoeDEsIHkxLCB4MiwgeTIsIGZyYW1lLCBmcmFtZTIsIHZhbHVlcywgbGF5ZXIsIGopIHtcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cblx0XHR0aGlzLnBhdGggPSBmdW5jdGlvbigpIHtcblx0XHRcdGN0eF93cmFwLmJlZ2luUGF0aCgpXG5cdFx0XHQucmVjdCh4MSwgeTEsIHgyLXgxLCB5Mi15MSlcblx0XHRcdC5jbG9zZVBhdGgoKTtcblx0XHR9O1xuXG5cdFx0dGhpcy5wYWludCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0dGhpcy5wYXRoKCk7XG5cdFx0XHRjdHguZmlsbFN0eWxlID0gZnJhbWUuX2NvbG9yO1xuXHRcdFx0Y3R4LmZpbGwoKTtcblx0XHR9O1xuXG5cdFx0dGhpcy5tb3VzZW92ZXIgPSBmdW5jdGlvbigpIHtcblx0XHRcdGNhbnZhcy5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7IC8vIHBvaW50ZXIgbW92ZSBldy1yZXNpemVcblx0XHR9O1xuXG5cdFx0dGhpcy5tb3VzZW91dCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0Y2FudmFzLnN0eWxlLmN1cnNvciA9ICdkZWZhdWx0Jztcblx0XHR9O1xuXG5cdFx0dGhpcy5tb3VzZWRyYWcgPSBmdW5jdGlvbihlKSB7XG5cdFx0XHR2YXIgdDEgPSB4X3RvX3RpbWUoeDEgKyBlLmR4KTtcblx0XHRcdHQxID0gTWF0aC5tYXgoMCwgdDEpO1xuXHRcdFx0Ly8gVE9ETyBsaW1pdCBtb3ZpbmcgdG8gbmVpZ2hib3Vyc1xuXHRcdFx0ZnJhbWUudGltZSA9IHQxO1xuXG5cdFx0XHR2YXIgdDIgPSB4X3RvX3RpbWUoeDIgKyBlLmR4KTtcblx0XHRcdHQyID0gTWF0aC5tYXgoMCwgdDIpO1xuXHRcdFx0ZnJhbWUyLnRpbWUgPSB0MjtcblxuXHRcdFx0Ly8gZGlzcGF0Y2hlci5maXJlKCd0aW1lLnVwZGF0ZScsIHQxKTtcblx0XHR9O1xuXHR9XG5cblx0ZnVuY3Rpb24gRGlhbW9uZChmcmFtZSwgeSkge1xuXHRcdHZhciB4LCB5MjtcblxuXHRcdHggPSB0aW1lX3RvX3goZnJhbWUudGltZSk7XG5cdFx0eTIgPSB5ICsgTElORV9IRUlHSFQgKiAwLjUgIC0gRElBTU9ORF9TSVpFIC8gMjtcblxuXHRcdHZhciBzZWxmID0gdGhpcztcblxuXHRcdHZhciBpc092ZXIgPSBmYWxzZTtcblxuXHRcdHRoaXMucGF0aCA9IGZ1bmN0aW9uKGN0eF93cmFwKSB7XG5cdFx0XHRjdHhfd3JhcFxuXHRcdFx0XHQuYmVnaW5QYXRoKClcblx0XHRcdFx0Lm1vdmVUbyh4LCB5Milcblx0XHRcdFx0LmxpbmVUbyh4ICsgRElBTU9ORF9TSVpFIC8gMiwgeTIgKyBESUFNT05EX1NJWkUgLyAyKVxuXHRcdFx0XHQubGluZVRvKHgsIHkyICsgRElBTU9ORF9TSVpFKVxuXHRcdFx0XHQubGluZVRvKHggLSBESUFNT05EX1NJWkUgLyAyLCB5MiArIERJQU1PTkRfU0laRSAvIDIpXG5cdFx0XHRcdC5jbG9zZVBhdGgoKTtcblx0XHR9O1xuXG5cdFx0dGhpcy5wYWludCA9IGZ1bmN0aW9uKGN0eF93cmFwKSB7XG5cdFx0XHRzZWxmLnBhdGgoY3R4X3dyYXApO1xuXHRcdFx0aWYgKCFpc092ZXIpXG5cdFx0XHRcdGN0eF93cmFwLmZpbGxTdHlsZShUaGVtZS5jKTtcblx0XHRcdGVsc2Vcblx0XHRcdFx0Y3R4X3dyYXAuZmlsbFN0eWxlKCd5ZWxsb3cnKTsgLy8gVGhlbWUuZFxuXG5cdFx0XHRjdHhfd3JhcC5maWxsKClcblx0XHRcdC5zdHJva2UoKTtcblx0XHR9O1xuXG5cdFx0dGhpcy5tb3VzZW92ZXIgPSBmdW5jdGlvbigpIHtcblx0XHRcdGlzT3ZlciA9IHRydWU7XG5cdFx0XHRjYW52YXMuc3R5bGUuY3Vyc29yID0gJ21vdmUnOyAvLyBwb2ludGVyIG1vdmUgZXctcmVzaXplXG5cdFx0XHRzZWxmLnBhaW50KGN0eF93cmFwKTtcblx0XHR9O1xuXG5cdFx0dGhpcy5tb3VzZW91dCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0aXNPdmVyID0gZmFsc2U7XG5cdFx0XHRjYW52YXMuc3R5bGUuY3Vyc29yID0gJ2RlZmF1bHQnO1xuXHRcdFx0c2VsZi5wYWludChjdHhfd3JhcCk7XG5cdFx0fTtcblxuXHRcdHRoaXMubW91c2VkcmFnID0gZnVuY3Rpb24oZSkge1xuXHRcdFx0dmFyIHQgPSB4X3RvX3RpbWUoeCArIGUuZHgpO1xuXHRcdFx0dCA9IE1hdGgubWF4KDAsIHQpO1xuXHRcdFx0Ly8gVE9ETyBsaW1pdCBtb3ZpbmcgdG8gbmVpZ2hib3Vyc1xuXHRcdFx0ZnJhbWUudGltZSA9IHQ7XG5cdFx0XHRkaXNwYXRjaGVyLmZpcmUoJ3RpbWUudXBkYXRlJywgdCk7XG5cdFx0XHQvLyBjb25zb2xlLmxvZygnZnJhbWUnLCBmcmFtZSk7XG5cdFx0XHQvLyBjb25zb2xlLmxvZyhzLCBmb3JtYXRfZnJpZW5kbHlfc2Vjb25kcyhzKSwgdGhpcyk7XG5cdFx0fTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gcmVwYWludCgpIHtcblx0XHRuZWVkc1JlcGFpbnQgPSB0cnVlO1xuXHR9XG5cblxuXHRmdW5jdGlvbiBkcmF3TGF5ZXJDb250ZW50cygpIHtcblx0XHRyZW5kZXJJdGVtcyA9IFtdO1xuXHRcdC8vIGhvcml6b250YWwgTGF5ZXIgbGluZXNcblx0XHRmb3IgKGkgPSAwLCBpbCA9IGxheWVycy5sZW5ndGg7IGkgPD0gaWw7IGkrKykge1xuXHRcdFx0Y3R4LnN0cm9rZVN0eWxlID0gVGhlbWUuYjtcblx0XHRcdGN0eC5iZWdpblBhdGgoKTtcblx0XHRcdHkgPSBpICogTElORV9IRUlHSFQ7XG5cdFx0XHR5ID0gfn55IC0gMC41O1xuXG5cdFx0XHRjdHhfd3JhcFxuXHRcdFx0Lm1vdmVUbygwLCB5KVxuXHRcdFx0LmxpbmVUbyh3aWR0aCwgeSlcblx0XHRcdC5zdHJva2UoKTtcblx0XHR9XG5cblxuXHRcdHZhciBmcmFtZSwgZnJhbWUyLCBqO1xuXG5cdFx0Ly8gRHJhdyBFYXNpbmcgUmVjdHNcblx0XHRmb3IgKGkgPSAwOyBpIDwgaWw7IGkrKykge1xuXHRcdFx0Ly8gY2hlY2sgZm9yIGtleWZyYW1lc1xuXHRcdFx0dmFyIGxheWVyID0gbGF5ZXJzW2ldO1xuXHRcdFx0dmFyIHZhbHVlcyA9IGxheWVyLnZhbHVlcztcblxuXHRcdFx0eSA9IGkgKiBMSU5FX0hFSUdIVDtcblxuXHRcdFx0Zm9yIChqID0gMDsgaiA8IHZhbHVlcy5sZW5ndGggLSAxOyBqKyspIHtcblx0XHRcdFx0ZnJhbWUgPSB2YWx1ZXNbal07XG5cdFx0XHRcdGZyYW1lMiA9IHZhbHVlc1tqICsgMV07XG5cblx0XHRcdFx0Ly8gRHJhdyBUd2VlbiBSZWN0XG5cdFx0XHRcdHggPSB0aW1lX3RvX3goZnJhbWUudGltZSk7XG5cdFx0XHRcdHgyID0gdGltZV90b194KGZyYW1lMi50aW1lKTtcblxuXHRcdFx0XHRpZiAoIWZyYW1lLnR3ZWVuIHx8IGZyYW1lLnR3ZWVuID09ICdub25lJykgY29udGludWU7XG5cblx0XHRcdFx0dmFyIHkxID0geSArIDI7XG5cdFx0XHRcdHZhciB5MiA9IHkgKyBMSU5FX0hFSUdIVCAtIDI7XG5cblx0XHRcdFx0cmVuZGVySXRlbXMucHVzaChuZXcgRWFzaW5nUmVjdCh4LCB5MSwgeDIsIHkyLCBmcmFtZSwgZnJhbWUyKSk7XG5cblx0XHRcdFx0Ly8gLy8gZHJhdyBlYXNpbmcgZ3JhcGhcblx0XHRcdFx0Ly8gdmFyIGNvbG9yID0gcGFyc2VJbnQoZnJhbWUuX2NvbG9yLnN1YnN0cmluZygxLDcpLCAxNik7XG5cdFx0XHRcdC8vIGNvbG9yID0gMHhmZmZmZmYgXiBjb2xvcjtcblx0XHRcdFx0Ly8gY29sb3IgPSBjb2xvci50b1N0cmluZygxNik7ICAgICAgICAgICAvLyBjb252ZXJ0IHRvIGhleFxuXHRcdFx0XHQvLyBjb2xvciA9ICcjJyArICgnMDAwMDAwJyArIGNvbG9yKS5zbGljZSgtNik7XG5cblx0XHRcdFx0Ly8gY3R4LnN0cm9rZVN0eWxlID0gY29sb3I7XG5cdFx0XHRcdC8vIHZhciB4Mztcblx0XHRcdFx0Ly8gY3R4LmJlZ2luUGF0aCgpO1xuXHRcdFx0XHQvLyBjdHgubW92ZVRvKHgsIHkyKTtcblx0XHRcdFx0Ly8gdmFyIGR5ID0geTEgLSB5Mjtcblx0XHRcdFx0Ly8gdmFyIGR4ID0geDIgLSB4O1xuXG5cdFx0XHRcdC8vIGZvciAoeDM9eDsgeDMgPCB4MjsgeDMrKykge1xuXHRcdFx0XHQvLyBcdGN0eC5saW5lVG8oeDMsIHkyICsgVHdlZW5zW2ZyYW1lLnR3ZWVuXSgoeDMgLSB4KS9keCkgKiBkeSk7XG5cdFx0XHRcdC8vIH1cblx0XHRcdFx0Ly8gY3R4LnN0cm9rZSgpO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IgKGogPSAwOyBqIDwgdmFsdWVzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdC8vIERpbW9uZHNcblx0XHRcdFx0ZnJhbWUgPSB2YWx1ZXNbal07XG5cdFx0XHRcdHJlbmRlckl0ZW1zLnB1c2gobmV3IERpYW1vbmQoZnJhbWUsIHkpKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyByZW5kZXIgaXRlbXNcblx0XHR2YXIgaXRlbTtcblx0XHRmb3IgKGkgPSAwLCBpbCA9IHJlbmRlckl0ZW1zLmxlbmd0aDsgaSA8IGlsOyBpKyspIHtcblx0XHRcdGl0ZW0gPSByZW5kZXJJdGVtc1tpXTtcblx0XHRcdGl0ZW0ucGFpbnQoY3R4X3dyYXApO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIHNldFRpbWVTY2FsZSgpIHtcblxuXHRcdHZhciB2ID0gZGF0YS5nZXQoJ3VpOnRpbWVTY2FsZScpLnZhbHVlO1xuXHRcdGlmICh0aW1lX3NjYWxlICE9PSB2KSB7XG5cdFx0XHR0aW1lX3NjYWxlID0gdjtcblx0XHRcdHRpbWVfc2NhbGVkKCk7XG5cdFx0fVxuXHR9XG5cblx0dmFyIG92ZXIgPSBudWxsO1xuXHR2YXIgbW91c2Vkb3duSXRlbSA9IG51bGw7XG5cblx0ZnVuY3Rpb24gY2hlY2soKSB7XG5cdFx0dmFyIGl0ZW07XG5cdFx0dmFyIGxhc3Rfb3ZlciA9IG92ZXI7XG5cdFx0Ly8gb3ZlciA9IFtdO1xuXHRcdG92ZXIgPSBudWxsO1xuXHRcdGZvciAoaSA9IHJlbmRlckl0ZW1zLmxlbmd0aDsgaS0tID4gMDspIHtcblx0XHRcdGl0ZW0gPSByZW5kZXJJdGVtc1tpXTtcblx0XHRcdGl0ZW0ucGF0aChjdHhfd3JhcCk7XG5cblx0XHRcdGlmIChjdHguaXNQb2ludEluUGF0aChwb2ludGVyLnggKiBkcHIsIHBvaW50ZXIueSAqIGRwcikpIHtcblx0XHRcdFx0Ly8gb3Zlci5wdXNoKGl0ZW0pO1xuXHRcdFx0XHRvdmVyID0gaXRlbTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gY2xlYXIgb2xkIG1vdXNlaW5cblx0XHRpZiAobGFzdF9vdmVyICYmIGxhc3Rfb3ZlciAhPSBvdmVyKSB7XG5cdFx0XHRpdGVtID0gbGFzdF9vdmVyO1xuXHRcdFx0aWYgKGl0ZW0ubW91c2VvdXQpIGl0ZW0ubW91c2VvdXQoKTtcblx0XHR9XG5cblx0XHRpZiAob3Zlcikge1xuXHRcdFx0aXRlbSA9IG92ZXI7XG5cdFx0XHRpZiAoaXRlbS5tb3VzZW92ZXIpIGl0ZW0ubW91c2VvdmVyKCk7XG5cblx0XHRcdGlmIChtb3VzZWRvd24yKSB7XG5cdFx0XHRcdG1vdXNlZG93bkl0ZW0gPSBpdGVtO1xuXHRcdFx0fVxuXHRcdH1cblxuXG5cblx0XHQvLyBjb25zb2xlLmxvZyhwb2ludGVyKVxuXHR9XG5cblx0ZnVuY3Rpb24gcG9pbnRlckV2ZW50cygpIHtcblx0XHRpZiAoIXBvaW50ZXIpIHJldHVybjtcblxuXHRcdGN0eF93cmFwXG5cdFx0XHQuc2F2ZSgpXG5cdFx0XHQuc2NhbGUoZHByLCBkcHIpXG5cdFx0XHQudHJhbnNsYXRlKDAsIE1BUktFUl9UUkFDS19IRUlHSFQpXG5cdFx0XHQuYmVnaW5QYXRoKClcblx0XHRcdC5yZWN0KDAsIDAsIFNldHRpbmdzLndpZHRoLCBTQ1JPTExfSEVJR0hUKVxuXHRcdFx0LnRyYW5zbGF0ZSgtc2Nyb2xsTGVmdCwgLXNjcm9sbFRvcClcblx0XHRcdC5jbGlwKClcblx0XHRcdFx0LnJ1bihjaGVjaylcblx0XHRcdC5yZXN0b3JlKCk7XG5cdH1cblxuXHRmdW5jdGlvbiBfcGFpbnQoKSB7XG5cdFx0aWYgKCFuZWVkc1JlcGFpbnQpIHtcblx0XHRcdHBvaW50ZXJFdmVudHMoKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRzY3JvbGxfY2FudmFzLnJlcGFpbnQoKTtcblxuXHRcdHNldFRpbWVTY2FsZSgpO1xuXG5cdFx0Y3VycmVudFRpbWUgPSBkYXRhLmdldCgndWk6Y3VycmVudFRpbWUnKS52YWx1ZTtcblx0XHRmcmFtZV9zdGFydCA9ICBkYXRhLmdldCgndWk6c2Nyb2xsVGltZScpLnZhbHVlO1xuXG5cdFx0LyoqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXHRcdC8vIGJhY2tncm91bmRcblxuXHRcdGN0eC5maWxsU3R5bGUgPSBUaGVtZS5hO1xuXHRcdGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcblx0XHRjdHguc2F2ZSgpO1xuXHRcdGN0eC5zY2FsZShkcHIsIGRwcik7XG5cblx0XHQvL1xuXG5cdFx0Y3R4LmxpbmVXaWR0aCA9IDE7IC8vIC41LCAxLCAyXG5cblx0XHR3aWR0aCA9IFNldHRpbmdzLndpZHRoO1xuXHRcdGhlaWdodCA9IFNldHRpbmdzLmhlaWdodDtcblxuXHRcdHZhciB1bml0cyA9IHRpbWVfc2NhbGUgLyB0aWNrTWFyazE7XG5cdFx0dmFyIG9mZnNldFVuaXRzID0gKGZyYW1lX3N0YXJ0ICogdGltZV9zY2FsZSkgJSB1bml0cztcblxuXHRcdHZhciBjb3VudCA9ICh3aWR0aCAtIExFRlRfR1VUVEVSICsgb2Zmc2V0VW5pdHMpIC8gdW5pdHM7XG5cblx0XHQvLyBjb25zb2xlLmxvZygndGltZV9zY2FsZScsIHRpbWVfc2NhbGUsICd0aWNrTWFyazEnLCB0aWNrTWFyazEsICd1bml0cycsIHVuaXRzLCAnb2Zmc2V0VW5pdHMnLCBvZmZzZXRVbml0cywgZnJhbWVfc3RhcnQpO1xuXG5cdFx0Ly8gdGltZV9zY2FsZSA9IHBpeGVscyB0byAxIHNlY29uZCAoNDApXG5cdFx0Ly8gdGlja01hcmsxID0gbWFya3MgcGVyIHNlY29uZCAobWFya3MgLyBzKVxuXHRcdC8vIHVuaXRzID0gcGl4ZWxzIHRvIGV2ZXJ5IG1hcmsgKDQwKVxuXG5cdFx0Ly8gbGFiZWxzIG9ubHlcblx0XHRmb3IgKGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuXHRcdFx0eCA9IGkgKiB1bml0cyArIExFRlRfR1VUVEVSIC0gb2Zmc2V0VW5pdHM7XG5cblx0XHRcdC8vIHZlcnRpY2FsIGxpbmVzXG5cdFx0XHRjdHguc3Ryb2tlU3R5bGUgPSBUaGVtZS5iO1xuXHRcdFx0Y3R4LmJlZ2luUGF0aCgpO1xuXHRcdFx0Y3R4Lm1vdmVUbyh4LCAwKTtcblx0XHRcdGN0eC5saW5lVG8oeCwgaGVpZ2h0KTtcblx0XHRcdGN0eC5zdHJva2UoKTtcblxuXHRcdFx0Y3R4LmZpbGxTdHlsZSA9IFRoZW1lLmQ7XG5cdFx0XHRjdHgudGV4dEFsaWduID0gJ2NlbnRlcic7XG5cblx0XHRcdHZhciB0ID0gKGkgKiB1bml0cyAtIG9mZnNldFVuaXRzKSAvIHRpbWVfc2NhbGUgKyBmcmFtZV9zdGFydDtcblx0XHRcdHQgPSB1dGlscy5mb3JtYXRfZnJpZW5kbHlfc2Vjb25kcyh0KTtcblx0XHRcdGN0eC5maWxsVGV4dCh0LCB4LCAzOCk7XG5cdFx0fVxuXG5cdFx0dW5pdHMgPSB0aW1lX3NjYWxlIC8gdGlja01hcmsyO1xuXHRcdGNvdW50ID0gKHdpZHRoIC0gTEVGVF9HVVRURVIgKyBvZmZzZXRVbml0cykgLyB1bml0cztcblxuXHRcdC8vIG1hcmtlciBsaW5lcyAtIG1haW5cblx0XHRmb3IgKGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuXHRcdFx0Y3R4LnN0cm9rZVN0eWxlID0gVGhlbWUuYztcblx0XHRcdGN0eC5iZWdpblBhdGgoKTtcblx0XHRcdHggPSBpICogdW5pdHMgKyBMRUZUX0dVVFRFUiAtIG9mZnNldFVuaXRzO1xuXHRcdFx0Y3R4Lm1vdmVUbyh4LCBNQVJLRVJfVFJBQ0tfSEVJR0hUIC0gMCk7XG5cdFx0XHRjdHgubGluZVRvKHgsIE1BUktFUl9UUkFDS19IRUlHSFQgLSAxNik7XG5cdFx0XHRjdHguc3Ryb2tlKCk7XG5cdFx0fVxuXG5cdFx0dmFyIG11bCA9IHRpY2tNYXJrMyAvIHRpY2tNYXJrMjtcblx0XHR1bml0cyA9IHRpbWVfc2NhbGUgLyB0aWNrTWFyazM7XG5cdFx0Y291bnQgPSAod2lkdGggLSBMRUZUX0dVVFRFUiArIG9mZnNldFVuaXRzKSAvIHVuaXRzO1xuXG5cdFx0Ly8gc21hbGwgdGlja3Ncblx0XHRmb3IgKGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuXHRcdFx0aWYgKGkgJSBtdWwgPT09IDApIGNvbnRpbnVlO1xuXHRcdFx0Y3R4LnN0cm9rZVN0eWxlID0gVGhlbWUuYztcblx0XHRcdGN0eC5iZWdpblBhdGgoKTtcblx0XHRcdHggPSBpICogdW5pdHMgKyBMRUZUX0dVVFRFUiAtIG9mZnNldFVuaXRzO1xuXHRcdFx0Y3R4Lm1vdmVUbyh4LCBNQVJLRVJfVFJBQ0tfSEVJR0hUIC0gMCk7XG5cdFx0XHRjdHgubGluZVRvKHgsIE1BUktFUl9UUkFDS19IRUlHSFQgLSAxMCk7XG5cdFx0XHRjdHguc3Ryb2tlKCk7XG5cdFx0fVxuXG5cdFx0Ly8gRW5jYXBzdWxhdGUgYSBzY3JvbGwgcmVjdCBmb3IgdGhlIGxheWVyc1xuXHRcdGN0eF93cmFwXG5cdFx0XHQuc2F2ZSgpXG5cdFx0XHQudHJhbnNsYXRlKDAsIE1BUktFUl9UUkFDS19IRUlHSFQpXG5cdFx0XHQuYmVnaW5QYXRoKClcblx0XHRcdC5yZWN0KDAsIDAsIFNldHRpbmdzLndpZHRoLCBTQ1JPTExfSEVJR0hUKVxuXHRcdFx0LnRyYW5zbGF0ZSgtc2Nyb2xsTGVmdCwgLXNjcm9sbFRvcClcblx0XHRcdC5jbGlwKClcblx0XHRcdFx0LnJ1bihkcmF3TGF5ZXJDb250ZW50cylcblx0XHRcdC5yZXN0b3JlKCk7XG5cblx0XHQvLyBDdXJyZW50IE1hcmtlciAvIEN1cnNvclxuXHRcdGN0eC5zdHJva2VTdHlsZSA9ICdyZWQnOyAvLyBUaGVtZS5jXG5cdFx0eCA9IChjdXJyZW50VGltZSAtIGZyYW1lX3N0YXJ0KSAqIHRpbWVfc2NhbGUgKyBMRUZUX0dVVFRFUjtcblxuXHRcdHZhciB0eHQgPSB1dGlscy5mb3JtYXRfZnJpZW5kbHlfc2Vjb25kcyhjdXJyZW50VGltZSk7XG5cdFx0dmFyIHRleHRXaWR0aCA9IGN0eC5tZWFzdXJlVGV4dCh0eHQpLndpZHRoO1xuXG5cdFx0dmFyIGJhc2VfbGluZSA9IE1BUktFUl9UUkFDS19IRUlHSFQgLSA1LCBoYWxmX3JlY3QgPSB0ZXh0V2lkdGggLyAyICsgNDtcblxuXHRcdGN0eC5iZWdpblBhdGgoKTtcblx0XHRjdHgubW92ZVRvKHgsIGJhc2VfbGluZSk7XG5cdFx0Y3R4LmxpbmVUbyh4LCBoZWlnaHQpO1xuXHRcdGN0eC5zdHJva2UoKTtcblxuXHRcdGN0eC5maWxsU3R5bGUgPSAncmVkJzsgLy8gYmxhY2tcblx0XHRjdHgudGV4dEFsaWduID0gJ2NlbnRlcic7XG5cdFx0Y3R4LmJlZ2luUGF0aCgpO1xuXHRcdGN0eC5tb3ZlVG8oeCwgYmFzZV9saW5lICsgNSk7XG5cdFx0Y3R4LmxpbmVUbyh4ICsgNSwgYmFzZV9saW5lKTtcblx0XHRjdHgubGluZVRvKHggKyBoYWxmX3JlY3QsIGJhc2VfbGluZSk7XG5cdFx0Y3R4LmxpbmVUbyh4ICsgaGFsZl9yZWN0LCBiYXNlX2xpbmUgLSAxNCk7XG5cdFx0Y3R4LmxpbmVUbyh4IC0gaGFsZl9yZWN0LCBiYXNlX2xpbmUgLSAxNCk7XG5cdFx0Y3R4LmxpbmVUbyh4IC0gaGFsZl9yZWN0LCBiYXNlX2xpbmUpO1xuXHRcdGN0eC5saW5lVG8oeCAtIDUsIGJhc2VfbGluZSk7XG5cdFx0Y3R4LmNsb3NlUGF0aCgpO1xuXHRcdGN0eC5maWxsKCk7XG5cblx0XHRjdHguZmlsbFN0eWxlID0gJ3doaXRlJztcblx0XHRjdHguZmlsbFRleHQodHh0LCB4LCBiYXNlX2xpbmUgLSA0KTtcblxuXHRcdGN0eC5yZXN0b3JlKCk7XG5cblx0XHRuZWVkc1JlcGFpbnQgPSBmYWxzZTtcblx0XHQvLyBwb2ludGVyRXZlbnRzKCk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIHlfdG9fdHJhY2soeSkge1xuXHRcdGlmICh5IC0gTUFSS0VSX1RSQUNLX0hFSUdIVCA8IDApIHJldHVybiAtMTtcblx0XHRyZXR1cm4gKHkgLSBNQVJLRVJfVFJBQ0tfSEVJR0hUICsgc2Nyb2xsVG9wKSAvIExJTkVfSEVJR0hUIHwgMDtcblx0fVxuXG5cblx0ZnVuY3Rpb24geF90b190aW1lKHgpIHtcblx0XHR2YXIgdW5pdHMgPSB0aW1lX3NjYWxlIC8gdGlja01hcmszO1xuXG5cdFx0Ly8gcmV0dXJuIGZyYW1lX3N0YXJ0ICsgKHggLSBMRUZUX0dVVFRFUikgLyB0aW1lX3NjYWxlO1xuXG5cdFx0cmV0dXJuIGZyYW1lX3N0YXJ0ICsgKCh4IC0gTEVGVF9HVVRURVIpIC8gdW5pdHMgfCAwKSAvIHRpY2tNYXJrMztcblx0fVxuXG5cdGZ1bmN0aW9uIHRpbWVfdG9feChzKSB7XG5cdFx0dmFyIGRzID0gcyAtIGZyYW1lX3N0YXJ0O1xuXHRcdGRzICo9IHRpbWVfc2NhbGU7XG5cdFx0ZHMgKz0gTEVGVF9HVVRURVI7XG5cblx0XHRyZXR1cm4gZHM7XG5cdH1cblxuXHR2YXIgbWUgPSB0aGlzO1xuXHR0aGlzLnJlcGFpbnQgPSByZXBhaW50O1xuXHR0aGlzLl9wYWludCA9IF9wYWludDtcblxuXHRyZXBhaW50KCk7XG5cblx0dmFyIG1vdXNlZG93biA9IGZhbHNlLCBzZWxlY3Rpb24gPSBmYWxzZTtcblxuXHR2YXIgZHJhZ09iamVjdDtcblx0dmFyIGNhbnZhc0JvdW5kcztcblxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XG5cblx0Y2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ2RibGNsaWNrJywgZnVuY3Rpb24oZSkge1xuXHRcdGNhbnZhc0JvdW5kcyA9IGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHR2YXIgbXggPSBlLmNsaWVudFggLSBjYW52YXNCb3VuZHMubGVmdCAsIG15ID0gZS5jbGllbnRZIC0gY2FudmFzQm91bmRzLnRvcDtcblxuXG5cdFx0dmFyIHRyYWNrID0geV90b190cmFjayhteSk7XG5cdFx0dmFyIHMgPSB4X3RvX3RpbWUobXgpO1xuXG5cblx0XHRkaXNwYXRjaGVyLmZpcmUoJ2tleWZyYW1lJywgbGF5ZXJzW3RyYWNrXSwgY3VycmVudFRpbWUpO1xuXG5cdH0pO1xuXG5cdGZ1bmN0aW9uIG9uTW91c2VNb3ZlKGUpIHtcblx0XHRjYW52YXNCb3VuZHMgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0dmFyIG14ID0gZS5jbGllbnRYIC0gY2FudmFzQm91bmRzLmxlZnQgLCBteSA9IGUuY2xpZW50WSAtIGNhbnZhc0JvdW5kcy50b3A7XG5cdFx0b25Qb2ludGVyTW92ZShteCwgbXkpO1xuXHR9XG5cblx0dmFyIHBvaW50ZXJkaWRNb3ZlZCA9IGZhbHNlO1xuXHR2YXIgcG9pbnRlciA9IG51bGw7XG5cblx0ZnVuY3Rpb24gb25Qb2ludGVyTW92ZSh4LCB5KSB7XG5cdFx0aWYgKG1vdXNlZG93bkl0ZW0pIHJldHVybjtcblx0XHRwb2ludGVyZGlkTW92ZWQgPSB0cnVlO1xuXHRcdHBvaW50ZXIgPSB7eDogeCwgeTogeX07XG5cdH1cblxuXHRjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBmdW5jdGlvbigpIHtcblx0XHRwb2ludGVyID0gbnVsbDtcblx0fSk7XG5cblx0dmFyIG1vdXNlZG93bjIgPSBmYWxzZSwgbW91c2VEb3duVGhlbk1vdmUgPSBmYWxzZTtcblx0aGFuZGxlRHJhZyhjYW52YXMsIGZ1bmN0aW9uIGRvd24oZSkge1xuXHRcdFx0bW91c2Vkb3duMiA9IHRydWU7XG5cdFx0XHRwb2ludGVyID0ge1xuXHRcdFx0XHR4OiBlLm9mZnNldHgsXG5cdFx0XHRcdHk6IGUub2Zmc2V0eVxuXHRcdFx0fTtcblx0XHRcdHBvaW50ZXJFdmVudHMoKTtcblxuXHRcdFx0aWYgKCFtb3VzZWRvd25JdGVtKSBkaXNwYXRjaGVyLmZpcmUoJ3RpbWUudXBkYXRlJywgeF90b190aW1lKGUub2Zmc2V0eCkpO1xuXHRcdFx0Ly8gSGl0IGNyaXRlcmlhXG5cdFx0fSwgZnVuY3Rpb24gbW92ZShlKSB7XG5cdFx0XHRtb3VzZWRvd24yID0gZmFsc2U7XG5cdFx0XHRpZiAobW91c2Vkb3duSXRlbSkge1xuXHRcdFx0XHRtb3VzZURvd25UaGVuTW92ZSA9IHRydWU7XG5cdFx0XHRcdGlmIChtb3VzZWRvd25JdGVtLm1vdXNlZHJhZykge1xuXHRcdFx0XHRcdG1vdXNlZG93bkl0ZW0ubW91c2VkcmFnKGUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRkaXNwYXRjaGVyLmZpcmUoJ3RpbWUudXBkYXRlJywgeF90b190aW1lKGUub2Zmc2V0eCkpO1xuXHRcdFx0fVxuXHRcdH0sIGZ1bmN0aW9uIHVwKGUpIHtcblx0XHRcdGlmIChtb3VzZURvd25UaGVuTW92ZSkge1xuXHRcdFx0XHRkaXNwYXRjaGVyLmZpcmUoJ2tleWZyYW1lLm1vdmUnKTtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRkaXNwYXRjaGVyLmZpcmUoJ3RpbWUudXBkYXRlJywgeF90b190aW1lKGUub2Zmc2V0eCkpO1xuXHRcdFx0fVxuXHRcdFx0bW91c2Vkb3duMiA9IGZhbHNlO1xuXHRcdFx0bW91c2Vkb3duSXRlbSA9IG51bGw7XG5cdFx0XHRtb3VzZURvd25UaGVuTW92ZSA9IGZhbHNlO1xuXHRcdH1cblx0KTtcblxuXHR0aGlzLnNldFN0YXRlID0gZnVuY3Rpb24oc3RhdGUpIHtcblx0XHRsYXllcnMgPSBzdGF0ZS52YWx1ZTtcblx0XHRyZXBhaW50KCk7XG5cdH07XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUaW1lbGluZVBhbmVsO1xuIiwidmFyXG5cdFRoZW1lID0gcmVxdWlyZSgnLi90aGVtZScpLFxuXHR1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKSxcblx0cHJveHlfY3R4ID0gdXRpbHMucHJveHlfY3R4LFxuXHRoYW5kbGVEcmFnID0gcmVxdWlyZSgnLi91dGlsX2hhbmRsZV9kcmFnJylcblx0O1xuXG5cbmZ1bmN0aW9uIFJlY3QoKSB7XG5cdFxufVxuXG5SZWN0LnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbih4LCB5LCB3LCBoLCBjb2xvciwgb3V0bGluZSkge1xuXHR0aGlzLnggPSB4O1xuXHR0aGlzLnkgPSB5O1xuXHR0aGlzLncgPSB3O1xuXHR0aGlzLmggPSBoO1xuXHR0aGlzLmNvbG9yID0gY29sb3I7XG5cdHRoaXMub3V0bGluZSA9IG91dGxpbmU7XG59O1xuXG5SZWN0LnByb3RvdHlwZS5wYWludCA9IGZ1bmN0aW9uKGN0eCkge1xuXHRjdHguZmlsbFN0eWxlID0gVGhlbWUuYjsgIC8vIC8vICd5ZWxsb3cnO1xuXHRjdHguc3Ryb2tlU3R5bGUgPSBUaGVtZS5jO1xuXG5cdHRoaXMuc2hhcGUoY3R4KTtcblxuXHRjdHguc3Ryb2tlKCk7XG5cdGN0eC5maWxsKCk7XG59O1xuXG5SZWN0LnByb3RvdHlwZS5zaGFwZSA9IGZ1bmN0aW9uKGN0eCkge1xuXHRjdHguYmVnaW5QYXRoKCk7XG5cdGN0eC5yZWN0KHRoaXMueCwgdGhpcy55LCB0aGlzLncsIHRoaXMuaCk7XG59O1xuXG5SZWN0LnByb3RvdHlwZS5jb250YWlucyA9IGZ1bmN0aW9uKHgsIHkpIHtcblx0cmV0dXJuIHggPj0gdGhpcy54ICYmIHkgPj0gdGhpcy55XG5cdCAmJiB4IDw9IHRoaXMueCArIHRoaXMudyAmJiB5IDw9IHRoaXMueSArIHRoaXMuaDtcbn07XG5cblxuXG5mdW5jdGlvbiBTY3JvbGxDYW52YXMoZGlzcGF0Y2hlciwgZGF0YSkge1xuXHR2YXIgd2lkdGgsIGhlaWdodDtcblxuXHR0aGlzLnNldFNpemUgPSBmdW5jdGlvbih3LCBoKSB7XG5cdFx0d2lkdGggPSB3O1xuXHRcdGhlaWdodCA9IGg7XG5cdH1cblxuXHR2YXIgVE9QX1NDUk9MTF9UUkFDSyA9IDIwO1xuXHR2YXIgTUFSR0lOUyA9IDE1O1xuXG5cdHZhciBzY3JvbGxlciA9IHtcblx0XHRsZWZ0OiAwLFxuXHRcdGdyaXBfbGVuZ3RoOiAwLFxuXHRcdGs6IDFcblx0fTtcblxuXHR2YXIgc2Nyb2xsUmVjdCA9IG5ldyBSZWN0KCk7XG5cblx0dGhpcy5wYWludCA9IGZ1bmN0aW9uKGN0eCkge1xuXHRcdHZhciB0b3RhbFRpbWUgPSBkYXRhLmdldCgndWk6dG90YWxUaW1lJykudmFsdWU7XG5cdFx0dmFyIHNjcm9sbFRpbWUgPSBkYXRhLmdldCgndWk6c2Nyb2xsVGltZScpLnZhbHVlO1xuXHRcdHZhciBjdXJyZW50VGltZSA9IGRhdGEuZ2V0KCd1aTpjdXJyZW50VGltZScpLnZhbHVlO1xuXHRcdFxuXHRcdHZhciBwaXhlbHNfcGVyX3NlY29uZCA9IGRhdGEuZ2V0KCd1aTp0aW1lU2NhbGUnKS52YWx1ZTtcblxuXHRcdGN0eC5zYXZlKCk7XG5cblx0XHR2YXIgdyA9IHdpZHRoIC0gMiAqIE1BUkdJTlM7XG5cdFx0dmFyIGggPSAxNjsgLy8gVE9QX1NDUk9MTF9UUkFDSztcblx0XHR2YXIgaDIgPSBoO1xuXG5cblx0XHRjdHguY2xlYXJSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuXHRcdGN0eC50cmFuc2xhdGUoTUFSR0lOUywgNSk7XG5cblx0XHQvLyBvdXRsaW5lIHNjcm9sbGVyXG5cdFx0Y3R4LmJlZ2luUGF0aCgpO1xuXHRcdGN0eC5zdHJva2VTdHlsZSA9IFRoZW1lLmI7XG5cdFx0Y3R4LnJlY3QoMCwgMCwgdywgaCk7XG5cdFx0Y3R4LnN0cm9rZSgpO1xuXHRcdFxuXHRcdHZhciB0b3RhbFRpbWVQaXhlbHMgPSB0b3RhbFRpbWUgKiBwaXhlbHNfcGVyX3NlY29uZDtcblx0XHR2YXIgayA9IHcgLyB0b3RhbFRpbWVQaXhlbHM7XG5cdFx0c2Nyb2xsZXIuayA9IGs7XG5cblx0XHR2YXIgZ3JpcF9sZW5ndGggPSB3ICogaztcblxuXHRcdHNjcm9sbGVyLmdyaXBfbGVuZ3RoID0gZ3JpcF9sZW5ndGg7XG5cblx0XHRzY3JvbGxlci5sZWZ0ID0gc2Nyb2xsVGltZSAvIHRvdGFsVGltZSAqIHc7XG5cdFx0XG5cdFx0c2Nyb2xsUmVjdC5zZXQoc2Nyb2xsZXIubGVmdCwgMCwgc2Nyb2xsZXIuZ3JpcF9sZW5ndGgsIGgpO1xuXHRcdHNjcm9sbFJlY3QucGFpbnQoY3R4KTtcblxuXHRcdHZhciByID0gY3VycmVudFRpbWUgLyB0b3RhbFRpbWUgKiB3O1x0XHRcblxuXHRcdGN0eC5maWxsU3R5bGUgPSAgVGhlbWUuYztcblx0XHRjdHgubGluZVdpZHRoID0gMjtcblx0XHRcblx0XHRjdHguYmVnaW5QYXRoKCk7XG5cdFx0XG5cdFx0Ly8gY2lyY2xlXG5cdFx0Ly8gY3R4LmFyYyhyLCBoMiAvIDIsIGgyIC8gMS41LCAwLCBNYXRoLlBJICogMik7XG5cblx0XHQvLyBsaW5lXG5cdFx0Y3R4LnJlY3QociwgMCwgMiwgaCArIDUpO1xuXHRcdGN0eC5maWxsKClcblxuXHRcdGN0eC5maWxsVGV4dChjdXJyZW50VGltZSAmJiBjdXJyZW50VGltZS50b0ZpeGVkKDIpLCByLCBoICsgMTQpO1xuXHRcdC8vIGN0eC5maWxsVGV4dChjdXJyZW50VGltZSAmJiBjdXJyZW50VGltZS50b0ZpeGVkKDMpLCAxMCwgMTApO1xuXHRcdGN0eC5maWxsVGV4dCh0b3RhbFRpbWUsIDMwMCwgMTQpO1xuXG5cdFx0Y3R4LnJlc3RvcmUoKTtcblx0fVxuXG5cdC8qKiBIYW5kbGVzIGRyYWdnaW5nIGZvciBzY3JvbGwgYmFyICoqL1xuXG5cdHZhciBkcmFnZ2luZ3ggPSBudWxsO1xuXG5cdHRoaXMub25Eb3duID0gZnVuY3Rpb24oZSkge1xuXHRcdC8vIGNvbnNvbGUubG9nKCdvbmRvd24nLCBlKTtcblxuXHRcdGlmIChzY3JvbGxSZWN0LmNvbnRhaW5zKGUub2Zmc2V0eCAtIE1BUkdJTlMsIGUub2Zmc2V0eSAtNSkpIHtcblx0XHRcdGRyYWdnaW5neCA9IHNjcm9sbGVyLmxlZnQ7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdFxuXHRcdHZhciB0b3RhbFRpbWUgPSBkYXRhLmdldCgndWk6dG90YWxUaW1lJykudmFsdWU7XG5cdFx0dmFyIHBpeGVsc19wZXJfc2Vjb25kID0gZGF0YS5nZXQoJ3VpOnRpbWVTY2FsZScpLnZhbHVlO1xuXHRcdHZhciB3ID0gd2lkdGggLSAyICogTUFSR0lOUztcblxuXHRcdHZhciB0ID0gKGUub2Zmc2V0eCAtIE1BUkdJTlMpIC8gdyAqIHRvdGFsVGltZTtcblx0XHQvLyB0ID0gTWF0aC5tYXgoMCwgdCk7XG5cblx0XHQvLyBkYXRhLmdldCgndWk6Y3VycmVudFRpbWUnKS52YWx1ZSA9IHQ7XG5cdFx0ZGlzcGF0Y2hlci5maXJlKCd0aW1lLnVwZGF0ZScsIHQpO1xuXHRcdFxuXHR9O1xuXG5cdHRoaXMub25Nb3ZlID0gZnVuY3Rpb24gbW92ZShlKSB7XG5cdFx0aWYgKGRyYWdnaW5neCAhPSBudWxsKSB7XG5cdFx0XHR2YXIgdG90YWxUaW1lID0gZGF0YS5nZXQoJ3VpOnRvdGFsVGltZScpLnZhbHVlO1xuXHRcdFx0dmFyIHcgPSB3aWR0aCAtIDIgKiBNQVJHSU5TO1xuXHRcdFx0XG5cdFx0XHRkaXNwYXRjaGVyLmZpcmUoJ3VwZGF0ZS5zY3JvbGxUaW1lJywgXG5cdFx0XHRcdChkcmFnZ2luZ3ggKyBlLmR4KSAgLyB3ICogdG90YWxUaW1lKTtcblxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLm9uRG93bihlKTtcdFxuXHRcdH1cblx0XHRcblx0fTtcblxuXHR0aGlzLm9uVXAgPSBmdW5jdGlvbihlKSB7XG5cdFx0ZHJhZ2dpbmd4ID0gbnVsbDtcblx0fVxuXG5cdC8qKiogRW5kIGhhbmRsaW5nIGZvciBzY3JvbGxiYXIgKioqL1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNjcm9sbENhbnZhczsiXX0=
