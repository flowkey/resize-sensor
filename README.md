## Resize Sensor

Extracts the Resize sensor out of [CSS Element Queries](https://github.com/marcj/css-element-queries)

## Quick Use

	var sensor = new ResizeSensor(element, function(){
		console.log("anything inside of element caused my size to change");
	})

## Remove the Listener

	sensor.detach()

or
	
	ResizeSensor.detach(element);