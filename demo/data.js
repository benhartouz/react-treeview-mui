 const listItems = [
	{  depth:0,
	   children:[]
	},
	{  
	   title:"Test",
	   depth:1,
	   parentIndex:0,
	   children:[2,5],
	   disabled:!1
	   },
	   {
		   title:"Test",
		   depth:2,
		   children:[3,4],
		   parentIndex:1,
		   disabled:!1
	   },
	   {
	   	title:"Exemple",
	   	depth:3,
	   	parentIndex:2,
	   	disabled:!1,
	   	content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio."
	   },
	   {
	   	title:"Math",
	   	depth:3,
	   	parentIndex:2,
	   	disabled:!1,
	   	content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio."
	   },
	   {
	   	title:"Test",
	   	depth:2,
	   	children:[6,7],
	   	disabled:!1,
	   	parentIndex:1
	   },
	   {
	   	title:"Javascript",
	   	depth:3,
	   	parentIndex:5,
	   	disabled:!1,
	   	content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio."
	   },
	   {
	   	title:"Left Side",
	   	depth:3,
	   	parentIndex:5,
	   	disabled:!1,
	   	content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio."
	   },
	   {
	   	title:"Test",
	   	depth:1,
	   	parentIndex:0,
	   	disabled:!1,
	   	children:[9,12]
	   },
	   {
	   	title:"test",
	   	depth:2,
	   	parentIndex:8,
	   	disabled:!1,
	   	children:[10,11]
	   },
	   {
	   	title:"test",
	   	depth:3,
	   	parentIndex:9,
	   	disabled:!1,
	   	content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio."
	   },
	   {
	   	title:"Module",
	   	depth:3,
	   	parentIndex:9,
	   	disabled:!1,
	   	content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio."
	   },
	   {
	   	title:"Home",
	   	depth:2,
	   	parentIndex:8,
	   	disabled:!0,
	   	children:[13,14]
	   },
	   {
	   	title:"test",
	   	parentIndex:12,
	   	depth:3,
	   	disabled:!0,
	   	content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio."
	   },
	   {
	   	title:"User",
	   	parentIndex:12,
	   	depth:3,
	   	disabled:!0,
	   	content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio."
	   }]

export default listItems