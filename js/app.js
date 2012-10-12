Ext.onReady(function ()
{
	//	Ext.Object.defineProperty = ('defineProperty' in Object) ? Object.defineProperty : function (object, name, descriptor)
	//	{
	//		if (descriptor.get)
	//		{
	//			object.__defineGetter__(name, descriptor.get);
	//		}

	//		if (descriptor.set)
	//		{
	//			object.__defineSetter__(name, descriptor.set);
	//		}
	//	}
	//	Ext.deprecateClassMember = function (cls, oldName, newName, message)
	//	{
	//		return this.deprecateProperty(cls.prototype, oldName, newName, message);
	//	}

	//	/**
	//	* @private
	//	* @member Ext
	//	*/
	//	Ext.deprecateClassMembers = function (cls, members)
	//	{
	//		var prototype = cls.prototype,
	//           oldName, newName;

	//		for (oldName in members)
	//		{
	//			if (members.hasOwnProperty(oldName))
	//			{
	//				newName = members[oldName];

	//				this.deprecateProperty(prototype, oldName, newName);
	//			}
	//		}
	//	}

	//	/**
	//	* @private
	//	* @member Ext
	//	*/
	//	Ext.deprecateProperty = function (object, oldName, newName, message)
	//	{
	//		if (!message)
	//		{
	//			message = "'" + oldName + "' is deprecated";
	//		}
	//		if (newName)
	//		{
	//			message += ", please use '" + newName + "' instead";
	//		}

	//		if (newName)
	//		{
	//			Ext.Object.defineProperty(object, oldName, {
	//				get: function ()
	//				{
	//					//<debug warn>
	//					Ext.Logger.deprecate(message, 1);
	//					//</debug>
	//					return this[newName];
	//				},
	//				set: function (value)
	//				{
	//					//<debug warn>
	//					Ext.Logger.deprecate(message, 1);
	//					//</debug>

	//					this[newName] = value;
	//				},
	//				configurable: true
	//			});
	//		}
	//	}

	//	/**
	//	* @private
	//	* @member Ext
	//	*/
	//	Ext.deprecatePropertyValue = function (object, name, value, message)
	//	{
	//		Ext.Object.defineProperty(object, name, {
	//			get: function ()
	//			{
	//				//<debug warn>
	//				Ext.Logger.deprecate(message, 1);
	//				//</debug>
	//				return value;
	//			},
	//			configurable: true
	//		});
	//	}

	//	/**
	//	* @private
	//	* @member Ext
	//	*/
	//	Ext.deprecateMethod = function (object, name, method, message)
	//	{
	//		object[name] = function ()
	//		{
	//			//<debug warn>
	//			Ext.Logger.deprecate(message, 2);
	//			//</debug>
	//			if (method)
	//			{
	//				return method.apply(this, arguments);
	//			}
	//		};
	//	}

	//	/**
	//	* @private
	//	* @member Ext
	//	*/
	//	Ext.deprecateClassMethod = function (cls, name, method, message)
	//	{
	//		if (typeof name != 'string')
	//		{
	//			var from, to;

	//			for (from in name)
	//			{
	//				if (name.hasOwnProperty(from))
	//				{
	//					to = name[from];
	//					Ext.deprecateClassMethod(cls, from, to);
	//				}
	//			}
	//			return;
	//		}
	//	}
	//	var eventStore = Ext.create('Extensible.calendar.data.MemoryEventStore',
	//	{
	//		// defined in ../data/Events.js
	//		//data: Ext.create('Extensible.example.calendar.data.Events')
	//	});	
	//	Ext.create('Ext.panel.Panel',
	//		{
	//			width: '100%',
	//			height: 400,
	//			title: 'Panel',
	//			renderTo: Ext.getBody(),
	//			items:
	//			[
	//				Ext.create('Extensible.calendar.CalendarPanel', {
	//					eventStore: eventStore,
	//					title: 'Basic Calendar',
	//					width: 700,
	//					height: 500
	//				})
	//			]
	//		});
	Ext.Loader.setConfig({
		enabled: true,
		disableCaching: false,
		paths: {
			//"Extensible": "js/extensible-1.5.1/src",
			"Extensible.example": "js/extensible-1.5.1/examples"
			//			'Ext.device': 'js/ExtJS/touch/device',
			//			'Ext.event': 'js/ExtJS/touch/event',
			//			'Ext.util': 'js/ExtJS/touch/util',
			//			'Ext': 'js/ExtJS/touch',
			//			'Ext.mixin': 'js/ExtJS/touch/mixin',
			//			'Ext.env': 'js/ExtJS/touch/env',
			//			'Ext.dom': 'js/ExtJS/touch/dom'
		}
	});
	Ext.require([
	//	'Ext.dom.Helper',
	//	'Ext.dom.Query',
	//	'Ext.dom.Element',
	//    'Ext.event.Controller',
	//	'Ext.event.Dispatcher',
	//	'Ext.event.Dom',
	//	'Ext.event.Event',
	//	'Ext.event.ListenerStack',
	//	'Ext.event.Touch',
	//	'Ext.event.publisher.ComponentDelegation',
	//	'Ext.event.publisher.ComponentPaint',
	//	'Ext.event.publisher.ComponentSize',
	//	'Ext.event.publisher.Dom',
	//	'Ext.event.publisher.Publisher',
	//	'Ext.util.SizeMonitor',
	//	'Ext.Evented',
	//	'Ext.mixin.Identifiable',
	//	'Ext.mixin.Observable',
	//	'Ext.mixin.Mixin',
	//	'Ext.env.Browser',
	//	'Ext.env.Feature',
	//	'Ext.env.OS',
	//	'Ext.event.publisher.TouchGesture',
	//	'Ext.event.recognizer.DoubleTap',
	//	'Ext.event.recognizer.Drag',
	//	'Ext.event.recognizer.HorizontalSwipe',
	//	'Ext.event.recognizer.LongPress',
	//	'Ext.event.recognizer.MultiTouch',
	//	'Ext.event.recognizer.Pinch',
	//	'Ext.event.recognizer.Recognizer',
	//	'Ext.event.recognizer.Rotate',
	//	'Ext.event.recognizer.SingleTouch',
	//	'Ext.event.recognizer.Swipe',
	//	'Ext.event.recognizer.Tap',
	//	'Ext.event.recognizer.Touch',
	//	'Ext.event.recognizer.VerticalSwipe'

]);
	Ext.define('Extensible.example.calendar.TestApp.App', {

		requires: [
			'Ext.Viewport',
			'Ext.layout.container.Border',
			'Extensible.calendar.CalendarPanel',
			'Extensible.calendar.gadget.CalendarListPanel',
			'Extensible.calendar.data.MemoryCalendarStore',
			'Extensible.calendar.data.MemoryEventStore',
			'Extensible.example.calendar.data.Events',
			'Extensible.example.calendar.data.Calendars'
		],

		constructor: function ()
		{
			var CalendarLocalStorage = Ext.create('Ext.data.Store',
			{
				autoLoad: true,
				fields:
					[
						{
							name: 'CalendarId',
							type: 'int'
						},
						{
							name: 'ColorId',
							type: 'int'
						},
						{
							name: 'Description',
							type: 'string'
						},
						{
							name: 'IsHidden',
							type: 'bool'
						},
						{
							name: 'Title',
							type: 'string'
						}
					],
				storeId: 'CalendarLocalStorage',
				proxy:
				{
					type: 'localstorage',
					id: 'calendars',
					reader: {
						type: 'json',
						root: 'calendars'
					},
					writer: {
						type: 'json',
						root: 'calendars',
						writeAllFields: true
					}
				}
			});

			CalendarLocalStorage.load();
			//This is an example calendar store that enables event color-coding
			this.calendarStore = Ext.create('Extensible.calendar.data.MemoryCalendarStore', {
				// defined in ../data/Calendars.js
				//data: Ext.create('Extensible.example.calendar.data.Calendars')
			});
			if (!CalendarLocalStorage.getCount())
			{
				this.calendarStore.loadRawData(Ext.create('Extensible.example.calendar.data.Calendars'));
				for (var i = 0; i < this.calendarStore.data.items.length; i++)
				{
					CalendarLocalStorage.add(this.calendarStore.data.items[i].data);
				}
				CalendarLocalStorage.sync();
				//				calendarStore.data.items[0].set('Title', 'dggfhghasdgfh');
				//				calendarStore.setRecord(calendarStore.data.items[0]);
				//				calendarStore.data.items[4].set('Title', 'dggfhgfgghasgfgfdgfh');
				//				calendarStore.sync();
			}
			else
			{
				this.calendarStore.loadRecords(CalendarLocalStorage.data.items);
			}
			// A sample event store that loads static JSON from a local file. Obviously a real
			// implementation would likely be loading remote data via an HttpProxy, but the
			// underlying store functionality is the same.
			this.eventStore = Ext.create('Extensible.calendar.data.MemoryEventStore', {
				// defined in ../data/Events.js
				//data: Ext.create('Extensible.example.calendar.data.Events'),
				// This disables the automatic CRUD messaging built into the sample data store.
				// This test application will provide its own custom messaging. See the source
				// of MemoryEventStore to see how automatic store messaging is implemented.
				autoMsg: false
			});
			this.eventStore.load();
			// This is the app UI layout code.  All of the calendar views are subcomponents of
			// CalendarPanel, but the app title bar and sidebar/navigation calendar are separate
			// pieces that are composed in app-specific layout code since they could be omitted
			// or placed elsewhere within the application.
			//			Ext.getBody().setWidth(window.innerWidth);
			Ext.getBody().setHeight(window.innerHeight);
			Ext.create('Ext.panel.Panel',
			{

				//				style:
				//				{
				//					width: '100%',
				//					height: '100%'
				//				},
				//				bodyStyle:
				//				{
				//					width: '100%',
				//					height: '100%'
				//				},
				width: Ext.getBody().getWidth(),
				height: Ext.getBody().getHeight(),
				listeners:
				{
					afterrender: function ()
					{
						var panel = this;
						Ext.get(window).on('resize', function ()
						{
							panel.setWidth(Ext.getBody().getWidth());
							panel.setHeight(Ext.getBody().getHeight());
						});
					}
				},
				layout: 'border',
				border: 0,
				renderTo: Ext.getBody(),
				items:
				[/*{
								id: 'app-header',
								region: 'north',
								height: 35,
								border: false,
								contentEl: 'app-header-content'
							},*/
					{
					id: 'app-center',
					flex: 1,
					title: '...', // will be updated to the current view's date range
					region: 'center',
					layout: 'border',
					listeners:
						{
							'afterrender': function ()
							{
								Ext.getCmp('app-center').header.addCls('app-center-header');
							}
						},
					items:
						[
							{
								id: 'app-west',
								region: 'west',
								width: 190,
								layout:
								{
									type: 'vbox',
									align: 'stretch'
								},
								autoScroll: true,
								//								defaults:
								//								{
								//								margin: 15
								//								},
								border: false,
								items:
								[
									{
										xtype: 'datepicker',
										id: 'app-nav-picker',
										cls: 'ext-cal-nav-picker',
										listeners:
										{
											'select': {
												fn: function (dp, dt)
												{
													Ext.getCmp('app-calendar').setStartDate(dt);
												},
												scope: this
											}
										}
									},
									{
										xtype: 'extensible.calendarlist',
										store: this.calendarStore,
										border: false,
										//width: 178,
										collapsed: true
									},
									{
										xtype: 'image',
										src: ''
									}
								]
							},
							{
								xtype: 'extensible.calendarpanel',
								eventStore: this.eventStore,
								calendarStore: this.calendarStore,
								border: false,
								//showNavBar: false,
								showNavJump: false,
								showMonthView: false,
								showMultiWeekView: false,
								showWeekView: false,
								//enableEditDetails: false,
								id: 'app-calendar',
								region: 'center',
								activeItem: 0, // month view

								// Any generic view options that should be applied to all sub views:
								viewConfig: {
									//enableFx: false,
									//ddIncrement: 10, //only applies to DayView and subclasses, but convenient to put it here
									viewStartHour: 6,
									viewEndHour: 24,
									//minEventDisplayMinutes: 15
									showTime: false
								},
								listeners:
                                {
                                	render: function ()
                                	{
                                		this.loadLocale('it');
                                	}
                                },
								// View options specific to a certain view (if the same options exist in viewConfig
								// they will be overridden by the view-specific config):
								//						monthViewCfg: {
								//							showHeader: true,
								//							showWeekLinks: true,
								//							showWeekNumbers: true
								//						},



								// Some optional CalendarPanel configs to experiment with:
								//readOnly: true,
								//showDayView: false,
								//showMultiDayView: true,
								//showWeekView: false,
								//showMultiWeekView: false,
								//showMonthView: false,
								//showNavBar: false,
								//showTodayText: false,
								showTime: false,
								editModal: true,
								//enableEditDetails: false,
								//title: 'My Calendar', // the header of the calendar, could be a subtitle for the app

								listeners:
								{
									'eventclick': {
										fn: function (vw, rec, el)
										{
											this.clearMsg();
										},
										scope: this
									},
									'eventover': function (vw, rec, el)
									{
										//console.log('Entered evt rec='+rec.data[Extensible.calendar.data.EventMappings.Title.name]', view='+ vw.id +', el='+el.id);
									},
									'eventout': function (vw, rec, el)
									{
										//console.log('Leaving evt rec='+rec.data[Extensible.calendar.data.EventMappings.Title.name]+', view='+ vw.id +', el='+el.id);
									},
									'eventadd': {
										fn: function (cp, rec)
										{
											this.showMsg('Event ' + rec.data[Extensible.calendar.data.EventMappings.Title.name] + ' was added');
										},
										scope: this
									},
									'eventupdate': {
										fn: function (cp, rec)
										{
											this.showMsg('Event ' + rec.data[Extensible.calendar.data.EventMappings.Title.name] + ' was updated');
										},
										scope: this
									},
									'eventdelete': {
										fn: function (cp, rec)
										{
											this.showMsg('Event ' + rec.data[Extensible.calendar.data.EventMappings.Title.name] + ' was deleted');
										},
										scope: this
									},
									'eventcancel': {
										fn: function (cp, rec)
										{
											// edit canceled
										},
										scope: this
									},
									'viewchange': {
										fn: function (p, vw, dateInfo)
										{
											if (dateInfo)
											{
												this.updateTitle(dateInfo.viewStart, dateInfo.viewEnd);
											}
										},
										scope: this
									},
									'dayclick': {
										fn: function (vw, dt, ad, el)
										{
											this.clearMsg();
										},
										scope: this
									},
									'rangeselect': {
										fn: function (vw, dates, onComplete)
										{
											this.clearMsg();
										},
										scope: this
									},
									'eventmove': {
										fn: function (vw, rec)
										{
											var mappings = Extensible.calendar.data.EventMappings,
											time = rec.data[mappings.IsAllDay.name] ? '' : ' \\a\\t g:i a';

											rec.commit();

											this.showMsg('Event ' + rec.data[mappings.Title.name] + ' was moved to ' +
											Ext.Date.format(rec.data[mappings.StartDate.name], ('F jS' + time)));
										},
										scope: this
									},
									'eventresize': {
										fn: function (vw, rec)
										{
											rec.commit();
											this.showMsg('Event ' + rec.data[Extensible.calendar.data.EventMappings.Title.name] + ' was updated');
										},
										scope: this
									},
									'eventdelete': {
										fn: function (win, rec)
										{
											this.eventStore.remove(rec);
											this.showMsg('Event ' + rec.data[Extensible.calendar.data.EventMappings.Title.name] + ' was deleted');
										},
										scope: this
									},
									'initdrag': {
										fn: function (vw)
										{
											// do something when drag starts
										},
										scope: this
									}
								}
							}
						]
				}
				]
			});
		},

		// The CalendarPanel itself supports the standard Panel title config, but that title
		// only spans the calendar views.  For a title that spans the entire width of the app
		// we added a title to the layout's outer center region that is app-specific. This code
		// updates that outer title based on the currently-selected view range anytime the view changes.
		updateTitle: function (startDt, endDt)
		{
			var p = Ext.getCmp('app-center'),
            fmt = Ext.Date.format;

			if (Ext.Date.clearTime(startDt).getTime() == Ext.Date.clearTime(endDt).getTime())
			{
				p.setTitle(fmt(startDt, 'F j, Y - l'));
			}
			else if (startDt.getFullYear() == endDt.getFullYear())
			{
				if (startDt.getMonth() == endDt.getMonth())
				{
					p.setTitle(fmt(startDt, 'F j - l') + ' - ' + fmt(endDt, 'j, Y - l'));
				}
				else
				{
					p.setTitle(fmt(startDt, 'F j - l') + ' - ' + fmt(endDt, 'F j, Y - l'));
				}
			}
			else
			{
				p.setTitle(fmt(startDt, 'F j, Y - l') + ' - ' + fmt(endDt, 'F j, Y - l'));
			}
		},

		// This is an application-specific way to communicate CalendarPanel event messages back to the user.
		// This could be replaced with a function to do "toast" style messages, growl messages, etc. This will
		// vary based on application requirements, which is why it's not baked into the CalendarPanel.
		showMsg: function (msg)
		{
			Ext.fly('app-msg').update(msg).removeCls('x-hidden');
		},

		clearMsg: function ()
		{
			Ext.fly('app-msg').update('').addCls('x-hidden');
		}
	});

	Ext.onReady(function ()
	{
		Ext.create('Extensible.example.calendar.TestApp.App');
	});

});
//	}
//});