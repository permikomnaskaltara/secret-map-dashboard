/*global db:false ISODate:false */


// {"key":"zone_one", "value":"Small labs 1", "zone":1, "beaconid":"ef60e28ce1589d37be7ce20b74426705", "color":"lemon"},
//             {"key":"zone_two", "value":"Small labs 2", "zone":2, "beaconid":"5b5e1e2adbdec0d49f87637ddbf4dc21", "color":"beetroot"},
//             {"key":"zone_three", "value":"Small labs 3", "zone":3, "beaconid":"d7f6c128a30cae9ee58f42ca5177d525", "color":"candyfloss"},
//             {"key":"zone_four", "value":"Group labs", "zone":4, "beaconid":"1e6e643ca73c29c3aeaddac0b4c47e0a", "color":"lemon"},
//             {"key":"zone_five", "value":"Hall of fame", "zone":5, "beaconid":"39582382b7144c65f3fdaa4161163a07", "color":"candyfloss"},
//             {"key":"zone_six", "value":"Think Academy Media", "zone":6, "beaconid":"0d4fba2b6d28a63365fe91108907a51b", "color":"beetroot"},
//             {"key":"zone_seven", "value":"Open labs", "zone":7, "beaconid":"b2b8bc8f5587b4c94d5bab151815a505", "color":"candyfloss"},
//             {"key":"zone_eight", "value":"Watson area", "zone":8, "beaconid":"33f4af993cb3b4cde8f7d6b5b6d9e034", "color":"lemon"},
//             {"key":"zone_nine", "value":"Hangout", "zone":9, "beaconid":"a815cf0e8806d120f0335580b9b8ac35", "color":"beetroot"}]}
//            /* {"key":"zone_ten", "value":"Passage", "zone":10, "beaconid":"", "color":""},
//             {"key":"zone_eleven", "value":"Large labs 1", "zone":11, "beaconid":"", "color":""},
//             {"key":"zone_twelve", "value":"Large labs 2", "zone":12, "beaconid":"", "color":""},
//             {"key":"zone_thirteen", "value":"Test center 1", "zone":13, "beaconid":"", "color":""},
//             {"key":"zone_fourteen", "value":"Test center 2", "zone":14, "beaconid":"", "color":""},
//             {"key":"zone_fifteen", "value":"Hmm", "zone":15, "beaconid":"", "color":""}]}
// db.beacons.insert({ "beaconId" : "B01", "x" : 2, "y" : 5, "minCount" : 1, "maxCount" : 100 });
// db.beacons.insert({ "beaconId" : "B02", "x" : 11, "y" : 4, "minCount" : 1, "maxCount" : 100 });
// db.beacons.insert({ "beaconId" : "B03", "x" : 19, "y" : 20, "minCount" : 1, "maxCount" : 100 });

db.beacons.insert({"beaconId":"BEACON1","key":"zone_one", "value":"Small labs 1", "zone":1, "beaconid":"ef60e28ce1589d37be7ce20b74426705", "color":"lemon","x":0, "y":0,"width":400,"height":400});
db.beacons.insert({"beaconId":"BEACON2","key":"zone_two", "value":"Small labs 2", "zone":2, "beaconid":"5b5e1e2adbdec0d49f87637ddbf4dc21", "color":"beetroot","x":400, "y":0,"width":400,"height":400});
db.beacons.insert({"beaconId":"BEACON3","key":"zone_three", "value":"Small labs 3", "zone":3, "beaconid":"d7f6c128a30cae9ee58f42ca5177d525", "color":"candyfloss","x":800, "y":0,"width":400,"height":400});
db.beacons.insert({"beaconId":"BEACON4","key":"zone_four", "value":"Group labs", "zone":4, "beaconid":"1e6e643ca73c29c3aeaddac0b4c47e0a", "color":"lemon","x":0, "y":400,"width":400,"height":400});
db.beacons.insert({"beaconId":"BEACON5","key":"zone_five", "value":"Hall of fame", "zone":5, "beaconid":"39582382b7144c65f3fdaa4161163a07", "color":"candyfloss","x":400, "y":400,"width":400,"height":400});
db.beacons.insert({"beaconId":"BEACON6","key":"zone_six", "value":"Think Academy Media", "zone":6, "beaconid":"0d4fba2b6d28a63365fe91108907a51b", "color":"beetroot","x":800, "y":400,"width":400,"height":400});
db.beacons.insert({"beaconId":"BEACON7","key":"zone_seven", "value":"Open labs", "zone":7, "beaconid":"b2b8bc8f5587b4c94d5bab151815a505", "color":"candyfloss","x":0, "y":800,"width":400,"height":400});
db.beacons.insert({"beaconId":"BEACON8","key":"zone_eight", "value":"Watson area", "zone":8, "beaconid":"33f4af993cb3b4cde8f7d6b5b6d9e034", "color":"lemon","x":400, "y":800,"width":400,"height":400});
db.beacons.insert({"beaconId":"BEACON9","key":"zone_nine", "value":"Hangout", "zone":9, "beaconid":"a815cf0e8806d120f0335580b9b8ac35", "color":"beetroot","x":800, "y":800,"width":400,"height":400});

db.booths.insert({ "boothId" : "THINK1", "unit" : "Server Challenge", "description" : "Challenge the Server", "measurementUnit" : "metre", "shape" : {"type": "rectangle", "x" : 843, "y" : 764, "width" : 58, "height" : 58}, "contact" : "John Doe" });
db.booths.insert({ "boothId" : "THINK2", "unit" : "Anton's Beacons", "description" : "AR, Kubernetes, Blockchain, IoT, etc!", "measurementUnit" : "metre", "shape" : {"type": "rectangle", "x" : 942, "y" : 779, "width" : 29, "height" : 29}, "contact" : "Mary Jane" });
db.booths.insert({ "boothId" : "THINK3", "unit" : "Fake Love", "description" : "Love is blind", "measurementUnit" : "metre", "shape" : {"type": "rectangle", "x" : 659, "y" : 761, "width" : 87, "height" : 87}, "contact" : "Jane Doe" });
db.booths.insert({ "boothId" : "THINK4", "unit" : "With Watson Studio", "description" : "Watson space", "measurementUnit" : "metre", "shape" : {"type": "rectangle", "x" : 419, "y" : 761, "width" : 146, "height" : 131}, "contact" : "Smith John" });
db.booths.insert({ "boothId" : "THINK5", "unit" : "Star Trek VR", "description" : "Star Trek meets Watson", "measurementUnit" : "metre", "shape" : {"type": "rectangle", "x" : 843, "y" : 993, "width" : 58, "height" : 58}, "contact" : "Catherine May" });
db.booths.insert({ "boothId" : "THINK6", "unit" : "TJ Bot", "description" : "Play with TJ Bot", "measurementUnit" : "metre", "shape" : {"type": "rectangle", "x" : 925, "y" : 993, "width" : 58, "height" : 58}, "contact" : "Ben Jerry" });
db.booths.insert({ "boothId" : "THINK7", "unit" : "Connect 4 Game", "description" : "Play the classic Connect 4", "measurementUnit" : "metre", "shape" : {"type": "rectangle", "x" : 627, "y" : 1122, "width" : 35, "height" : 38}, "contact" : "Joe Myers" });
db.booths.insert({ "boothId" : "THINK8", "unit" : "Jenga Game", "description" : "Who doesn't like a game of Jenga?", "measurementUnit" : "metre", "shape" : {"type": "rectangle", "x" : 685, "y" : 1122, "width" : 35, "height" : 38}, "contact" : "Joe Myers" });
db.booths.insert({ "boothId" : "THINK9", "unit" : "Foosball Game", "description" : "Losers Foosers", "measurementUnit" : "metre", "shape" : {"type": "rectangle", "x" : 744, "y" : 1122, "width" : 35, "height" : 38}, "contact" : "Joe Myers" });
db.booths.insert({ "boothId" : "THINK10", "unit" : "Watson Photo Booth", "description" : "Take a picture with Watson", "measurementUnit" : "metre", "shape" : {"type": "rectangle", "x": 507, "y": 1113, "width": 58, "height": 58}, "contact" : "Joe Myers" });
db.booths.insert({ "boothId" : "THINK11", "unit" : "Watson Demos", "description" : "Some cool Watson Demos", "measurementUnit" : "metre", "shape" : {"type": "rectangle", "x": 419, "y": 922, "width": 146, "height": 131}, "contact" : "Joe Myers" });
db.booths.insert({ "boothId" : "THINK12", "unit" : "Softskills", "description" : "Softskills", "measurementUnit" : "metre", "shape" : {"type": "rectangle", "x": 869, "y": 640, "width": 105, "height": 46}, "contact" : "Joe Myers" });
db.booths.insert({ "boothId" : "THINK13", "unit" : "Bunch of Games", "description" : "Some cool tabletop games", "measurementUnit" : "metre", "shape" : {"type": "rectangle", "x": 583, "y": 638, "width": 238, "height": 51}, "contact" : "Joe Myers" });
db.booths.insert({ "boothId" : "THINK14", "unit" : "Softskills", "description" : "Softskills", "measurementUnit" : "metre", "shape" : {"type": "rectangle", "x": 431, "y": 638, "width": 105, "height": 50}, "contact" : "Joe Myers" });
db.booths.insert({ "boothId" : "THINK15", "unit" : "Softskills", "description" : "Softskills", "measurementUnit" : "metre", "shape" : {"type": "rectangle", "x": 869, "y": 388, "width": 105, "height": 50}, "contact" : "Joe Myers" });
db.booths.insert({ "boothId" : "THINK16", "unit" : "Softskills", "description" : "Softskills", "measurementUnit" : "metre", "shape" : {"type": "rectangle", "x": 431, "y": 388, "width": 105, "height": 50}, "contact" : "Joe Myers" });
db.booths.insert({ "boothId" : "THINK17", "unit" : "Lounge", "description" : "Chill in the Lounge", "measurementUnit" : "metre", "shape" : {"type": "rectangle", "x": 580, "y": 388, "width": 242, "height": 53}, "contact" : "Joe Myers" });
db.booths.insert({ "boothId" : "THINK18", "unit" : "Hall of Fame", "description" : "Hall of Fame", "measurementUnit" : "metre", "shape" : {"type": "rectangle", "x": 583, "y": 480, "width": 238, "height": 117}, "contact" : "Joe Myers" });
db.booths.insert({ "boothId" : "THINK19", "unit" : "Think Academy Media", "description" : "Come here to learn", "measurementUnit" : "metre", "shape" : {"type": "rectangle", "x": 869, "y": 480, "width": 105, "height": 117}, "contact" : "Joe Myers" });
db.booths.insert({ "boothId" : "THINK20", "unit" : "Lunch and Learn", "description" : "Eat while you learn cool stuff", "measurementUnit" : "metre", "shape" : {"type": "rectangle", "x": 431, "y": 480, "width": 107, "height": 117}, "contact" : "Joe Myers" });
db.booths.insert({ "boothId" : "THINK21", "unit" : "Group Labs", "description" : "Lab with others", "measurementUnit" : "metre", "shape" : {"type": "rectangle", "x": 324, "y": 352, "width": 29, "height": 117}, "contact" : "Joe Myers" });
db.booths.insert({ "boothId" : "THINK22", "unit" : "Group Labs", "description" : "Lab with others", "measurementUnit" : "metre", "shape" : {"type": "rectangle", "x": 324, "y": 509, "width": 29, "height": 58}, "contact" : "Joe Myers" });
db.booths.insert({ "boothId" : "THINK23", "unit" : "Group Labs", "description" : "Lab with others", "measurementUnit" : "metre", "shape" : {"type": "rectangle", "x": 324, "y": 607, "width": 29, "height": 114}, "contact" : "Joe Myers" });
db.booths.insert({ "boothId" : "THINK24", "unit" : "Open Labs", "description" : "Lab in the open", "measurementUnit" : "metre", "shape" : {"type": "rectangle", "x": 106, "y": 761, "width": 246, "height": 248}, "contact" : "Joe Myers" });
db.booths.insert({ "boothId" : "THINK25", "unit" : "Ask Me Anything", "description" : "Ask me some interesting questions", "measurementUnit" : "metre", "shape" : {"type": "rectangle", "x": 615, "y": 878, "width": 175, "height": 175}, "contact" : "Joe Myers" });
db.booths.insert({ "boothId" : "THINK26", "unit" : "Certs Test Center", "description" : "Certifications", "measurementUnit" : "metre", "shape" : {"type": "rectangle", "x": 1676, "y": 716, "width": 363, "height": 337}, "contact" : "Joe Myers" });
db.booths.insert({ "boothId" : "THINK27", "unit" : "Labs", "description" : "Lab in a large room", "measurementUnit" : "metre", "shape" : {"type": "rectangle", "x": 1483, "y": 397, "width": 93, "height": 231}, "contact" : "Joe Myers" });
db.booths.insert({ "boothId" : "THINK28", "unit" : "Labs", "description" : "Lab in a large room", "measurementUnit" : "metre", "shape" : {"type": "rectangle", "x": 1577, "y": 397, "width": 93, "height": 231}, "contact" : "Joe Myers" });
db.booths.insert({ "boothId" : "THINK29", "unit" : "Labs", "description" : "Lab in a large room", "measurementUnit" : "metre", "shape" : {"type": "rectangle", "x": 1702, "y": 397, "width": 93, "height": 231}, "contact" : "Joe Myers" });
db.booths.insert({ "boothId" : "THINK30", "unit" : "Labs", "description" : "Lab in a large room", "measurementUnit" : "metre", "shape" : {"type": "rectangle", "x": 1796, "y": 397, "width": 93, "height": 231}, "contact" : "Joe Myers" });
db.booths.insert({ "boothId" : "THINK31", "unit" : "Labs", "description" : "Lab in a large room", "measurementUnit" : "metre", "shape" : {"type": "rectangle", "x": 1921, "y": 397, "width": 93, "height": 231}, "contact" : "Joe Myers" });
db.booths.insert({ "boothId" : "THINK32", "unit" : "Labs", "description" : "Lab in a large room", "measurementUnit" : "metre", "shape" : {"type": "rectangle", "x": 2014, "y": 397, "width": 93, "height": 231}, "contact" : "Joe Myers" });
db.booths.insert({ "boothId" : "THINK33", "unit" : "Labs", "description" : "Lab in a large room", "measurementUnit" : "metre", "shape" : {"type": "rectangle", "x": 1402, "y": 748, "width": 231, "height": 96}, "contact" : "Joe Myers" });
db.booths.insert({ "boothId" : "THINK34", "unit" : "Labs", "description" : "Lab in a large room", "measurementUnit" : "metre", "shape" : {"type": "rectangle", "x": 1402, "y": 839, "width": 231, "height": 96}, "contact" : "Joe Myers" });
db.booths.insert({ "boothId" : "THINK35", "unit" : "Labs", "description" : "Lab in a large room", "measurementUnit" : "metre", "shape" : {"type": "rectangle", "x": 2084, "y": 799, "width": 94, "height": 231}, "contact" : "Joe Myers" });
db.booths.insert({ "boothId" : "THINK36", "unit" : "Labs", "description" : "Lab in a large room", "measurementUnit" : "metre", "shape" : {"type": "rectangle", "x": 2179, "y": 799, "width": 94, "height": 231}, "contact" : "Joe Myers" });
db.booths.insert({ "boothId" : "THINK37", "unit" : "Labs", "description" : "Lab in a slightly smaller room", "measurementUnit" : "metre", "shape" : {"type": "rectangle", "x": 117, "y": 639, "width": 130, "height": 86}, "contact" : "Joe Myers" });
db.booths.insert({ "boothId" : "THINK38", "unit" : "Labs", "description" : "Lab in a slightly smaller room", "measurementUnit" : "metre", "shape" : {"type": "rectangle", "x": 117, "y": 554, "width": 130, "height": 86}, "contact" : "Joe Myers" });
db.booths.insert({ "boothId" : "THINK39", "unit" : "Labs", "description" : "Lab in a slightly smaller room", "measurementUnit" : "metre", "shape" : {"type": "rectangle", "x": 117, "y": 433, "width": 130, "height": 86}, "contact" : "Joe Myers" });
db.booths.insert({ "boothId" : "THINK40", "unit" : "Labs", "description" : "Lab in a slightly smaller room", "measurementUnit" : "metre", "shape" : {"type": "rectangle", "x": 117, "y": 347, "width": 130, "height": 86}, "contact" : "Joe Myers" });
db.booths.insert({ "boothId" : "THINK41", "unit" : "Labs", "description" : "Lab in a slightly smaller room", "measurementUnit" : "metre", "shape" : {"type": "rectangle", "x": 190, "y": 165, "width": 84, "height": 126}, "contact" : "Joe Myers" });
db.booths.insert({ "boothId" : "THINK42", "unit" : "Labs", "description" : "Lab in a slightly smaller room", "measurementUnit" : "metre", "shape" : {"type": "rectangle", "x": 316, "y": 165, "width": 84, "height": 126}, "contact" : "Joe Myers" });
db.booths.insert({ "boothId" : "THINK43", "unit" : "Labs", "description" : "Lab in a slightly smaller room", "measurementUnit" : "metre", "shape" : {"type": "rectangle", "x": 401, "y": 165, "width": 84, "height": 126}, "contact" : "Joe Myers" });
db.booths.insert({ "boothId" : "THINK44", "unit" : "Labs", "description" : "Lab in a slightly smaller room", "measurementUnit" : "metre", "shape" : {"type": "rectangle", "x": 530, "y": 165, "width": 84, "height": 126}, "contact" : "Joe Myers" });
db.booths.insert({ "boothId" : "THINK45", "unit" : "Labs", "description" : "Lab in a slightly smaller room", "measurementUnit" : "metre", "shape" : {"type": "rectangle", "x": 616, "y": 165, "width": 84, "height": 126}, "contact" : "Joe Myers" });
db.booths.insert({ "boothId" : "THINK46", "unit" : "Labs", "description" : "Lab in a slightly smaller room", "measurementUnit" : "metre", "shape" : {"type": "rectangle", "x": 744, "y": 165, "width": 84, "height": 126}, "contact" : "Joe Myers" });
db.booths.insert({ "boothId" : "THINK47", "unit" : "Labs", "description" : "Lab in a slightly smaller room", "measurementUnit" : "metre", "shape" : {"type": "rectangle", "x": 829, "y": 165, "width": 84, "height": 126}, "contact" : "Joe Myers" });
db.booths.insert({ "boothId" : "THINK48", "unit" : "Labs", "description" : "Lab in a slightly smaller room", "measurementUnit" : "metre", "shape" : {"type": "rectangle", "x": 1007, "y": 165, "width": 84, "height": 126}, "contact" : "Joe Myers" });
db.booths.insert({ "boothId" : "THINK49", "unit" : "Labs", "description" : "Lab in a large room", "measurementUnit" : "metre", "shape" : {"type": "rectangle", "x": 1402, "y": 936, "width": 231, "height": 96}, "contact" : "Joe Myers" });


// add anchor points and latitude longitude
db.events.insert({ "eventId" : "think-dev-area", "eventName" : "Think", "location" : "Las Vegas", "x" : 2388, "y" : 1461,"startDate" : ISODate("2018-02-19T00:00:00Z"), "endDate" : ISODate("2018-02-22T00:00:00Z"), "beacons" : [], "map" : [] });

let booths = db.booths.find({"boothId": {$in: ["THINK1","THINK2","THINK3","THINK4","THINK5","THINK6","THINK7","THINK8","THINK9","THINK10","THINK11","THINK12","THINK13","THINK14","THINK15","THINK16","THINK17","THINK18","THINK19","THINK20","THINK21","THINK22","THINK23","THINK24","THINK25","THINK26","THINK27","THINK28","THINK29","THINK30","THINK31","THINK32","THINK33","THINK34","THINK35","THINK36","THINK37","THINK38","THINK39","THINK40","THINK41","THINK42","THINK43","THINK44","THINK45","THINK46","THINK47","THINK48","THINK49","THINK50","THINK51"]}}).toArray();
let beacons = db.beacons.find({"beaconId": {$in: ["BEACON1","BEACON2","BEACON3","BEACON4","BEACON5","BEACON6","BEACON7","BEACON8","BEACON9"]}}).toArray();

db.events.update({eventId: "think-dev-area"}, {$set: {"beacons": beacons, "map": booths}});

