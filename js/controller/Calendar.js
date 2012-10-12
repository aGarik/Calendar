Ext.define('Calendar.controller.Calendar',
{
	extend: 'Ext.app.Controller',
	views:
	[

	],
	stores:
	[
	],
	models:
	[
	],
	commands:
	{
		
	},
	init: function ()
	{
		this.control(
		{
			'':
			{
				'calendar.command': function (cmdName)
				{
					this.commands[cmdName].apply(this, arguments);
				}
			}
		})
	}
});