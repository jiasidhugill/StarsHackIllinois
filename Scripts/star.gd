extends Area2D

var display_time : float = 1
var text_to_show : String = "YOU FOUND A STAR!!!"
@onready var this_star = $Sprite2D
@onready var pop_up_scene = load("res://Scenes/PopUp.tscn")

func _physics_process(body): 
	set_monitoring(true)
	if has_overlapping_bodies(): 
		await get_tree().create_timer(0.25).timeout
		this_star.modulate = Color(0, 1, 0)
		var new_pop_up = pop_up_scene.instantiate()
		new_pop_up.show_time = display_time
		new_pop_up.text_to_show = text_to_show
		add_child(new_pop_up)
