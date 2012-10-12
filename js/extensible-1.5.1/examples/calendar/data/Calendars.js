/*!
 * Extensible 1.5.1
 * Copyright(c) 2010-2011 Extensible, LLC
 * licensing@ext.ensible.com
 * http://ext.ensible.com
 */
Ext.define('Extensible.example.calendar.data.Calendars', {
    constructor: function() {
        return {
            "calendars" : [{
                "id"    : 1,
                "title" : "Doctor 1",
                "color" : 2
            },{
                "id"    : 2,
                "title": "Doctor 2",
                "color" : 22
            },{
                "id"    : 3,
                "title": "Doctor 3",
                "color" : 7
            },{
                "id"    : 4,
                "title": "Doctor 4",
                //"hidden" : true, // optionally init this calendar as hidden by default
                "color" : 26
            },
			{
				"id": 5,
				"title": "Doctor 5",
				"color": 20
			},
			{
				"id": 6,
				"title": "Doctor 6",
				"color": 10
			}]
        };
    }
});