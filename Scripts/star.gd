extends Area2D

@onready var this_star = $Sprite2D

func _physics_process(body): 
	set_monitoring(true)
	if has_overlapping_bodies(): 
		await get_tree().create_timer(0.25).timeout
		this_star.modulate = Color(0, 1, 0)
