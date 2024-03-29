/*!
 * Extensible 1.5.1
 * Copyright(c) 2010-2011 Extensible, LLC
 * licensing@ext.ensible.com
 * http://ext.ensible.com
 */
Ext.define('Extensible.example.calendar.data.Events', {
    constructor :  function() {
        var today = Ext.Date.clearTime(new Date),
            makeDate = function(d, h, m, s){
                d = d * 86400;
                h = (h || 0) * 3600;
                m = (m || 0) * 60;
                s = (s || 0);
                return Ext.Date.add(today, Ext.Date.SECOND, d + h + m + s);
            };
            
        return {
            "evts" : [{
                "id"    : 1001,
                "cid"   : 1,
                "title" : "Vacation",
                "start" : makeDate(-20, 10),
                "end"   : makeDate(-10, 15),
                "notes" : "Have fun"
            },{
                "id"    : 1002,
                "cid"   : 2,
                "title" : "Lunch with Matt",
                "start" : makeDate(0, 11, 30),
                "end"   : makeDate(0, 13),
                "loc"   : "Chuy's!",
                "url"   : "http : //chuys.com",
                "notes" : "Order the queso",
                "rem"   : "15"
            },{
                "id"    : 1003,
                "cid"   : 3,
                "title" : "Project due",
                "start" : makeDate(0, 16),
                "end"   : makeDate(0, 16)
            },{
                "id"    : 1004,
                "cid"   : 6,
                "title" : "Sarah's birthday",
                "start" : today,
                "end"   : today,
                "notes" : "Need to get a gift",
                "ad"    : true
            },{
                "id"    : 1005,
                "cid"   : 2,
                "title": "A long one... One night--it was on the twentieth of March, 1888--I was returning from a journey to a patient (for I had now returned to civil practice), when my way led me through Baker Street. ",
                "start": makeDate(0, 14, 30),
                "end"   : makeDate(0,15),
                "ad"    : false
            },{
                "id"    : 1006,
                "cid"   : 3,
                "title" : "School holiday",
                "start" : makeDate(5),
                "end"   : makeDate(7, 0, 0, -1),
                "ad"    : true,
                "rem"   : "2880"
            },{
                "id"    : 1007,
                "cid"   : 1,
                "title" : "Haircut",
                "start" : makeDate(0, 9),
                "end"   : makeDate(0, 9, 30),
                "notes" : "Get cash on the way"
            },{
                "id"    : 1008,
                "cid"   : 3,
                "title" : "An old event",
                "start" : makeDate(-30),
                "end"   : makeDate(-28),
                "ad"    : true
            },{
                "id"    : 1009,
                "cid"   : 2,
                "title" : "Board meeting",
                "start" : makeDate(-2, 13),
                "end"   : makeDate(-2, 18),
                "loc"   : "ABC Inc.",
                "rem"   : "60"
            },{
                "id"    : 1010,
                "cid"   : 3,
                "title" : "Jenny's final exams",
                "start" : makeDate(-2),
                "end"   : makeDate(3, 0, 0, -1),
                "ad"    : true
            },{
                "id"    : 1011,
                "cid"   : 1,
                "title" : "Movie night",
                "start" : makeDate(2, 19),
                "end"   : makeDate(2, 23),
                "notes" : "Don't forget the tickets!",
                "rem"   : "60"
            },{
                "id"    : 1012,
                "cid"   : 4,
                "title" : "Gina's basketball tournament",
                "start" : makeDate(8, 8),
                "end"   : makeDate(10, 17)
            },{
                "id"    : 1013,
                "cid"   : 4,
                "title" : "Toby's soccer game",
                "start" : makeDate(5, 10),
                "end"   : makeDate(5, 12)
            }]
        }
    }
});