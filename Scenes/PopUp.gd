extends Control

var text_to_show = "YOU FOUND A STAR!!!"
var show_time = 1
# Called when the node enters the scene tree for the first time.
func _ready():
	$ColorRect/Label.text = text_to_show
	$Timer.start(show_time)


# Called every frame. 'delta' is the elapsed time since the previous frame.
func _on_Timer_timeout():
	queue_free()
